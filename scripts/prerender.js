/**
 * Post-build step. Turns the client build into a finished static site:
 *
 *   1. Renders the React app to HTML (index.html and 404.html), so content
 *      is in the page before any JavaScript runs.
 *   2. Adds a Content-Security-Policy with a SHA-256 hash for each inline
 *      script, and preloads the body font.
 *   3. Writes sitemap.xml and /.well-known/security.txt with fresh dates.
 *   4. Checks the output and fails the build on broken local links, inline
 *      styles, insecure URLs, unsafe target=_blank links or em dashes.
 */
import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const SITE = "https://lucamartinet.dev";
const CONTACT = "mailto:lucamartinetwork@gmail.com";

const root = fileURLToPath(new URL("..", import.meta.url));
const dist = join(root, "dist");
const ssr = join(root, ".ssr");

const { render } = await import(
    pathToFileURL(join(ssr, "entry-server.js")).href
);
const template = await readFile(join(dist, "index.html"), "utf8");

// Inline scripts that execute (JSON-LD data blocks never run, so they need
// no hash).
const INLINE_SCRIPT =
    /<script(?![^>]*\bsrc=)(?![^>]*application\/ld\+json)[^>]*>([\s\S]*?)<\/script>/g;

function contentSecurityPolicy(html) {
    const hashes = [...html.matchAll(INLINE_SCRIPT)].map(
        ([, body]) =>
            `'sha256-${createHash("sha256").update(body).digest("base64")}'`
    );
    // Note: frame-ancestors and report-uri are ignored in a <meta> policy.
    return [
        "default-src 'none'",
        `script-src 'self' ${hashes.join(" ")}`,
        "style-src 'self'",
        "img-src 'self'",
        "media-src 'self'",
        "font-src 'self'",
        "connect-src 'self'",
        "base-uri 'none'",
        "form-action 'none'",
        "object-src 'none'",
        "require-trusted-types-for 'script'",
        "trusted-types 'none'",
        "upgrade-insecure-requests",
    ].join("; ");
}

const fonts = (await readdir(join(dist, "assets")))
    .filter((file) =>
        /^jetbrains-mono-latin-wght-normal-[\w-]+\.woff2$/.test(file)
    )
    .map(
        (file) =>
            `<link rel="preload" href="/assets/${file}" as="font" type="font/woff2" crossorigin />`
    );

function finish(html) {
    const policy = contentSecurityPolicy(html);
    return html.replace(
        "<!--csp-->",
        `<meta http-equiv="Content-Security-Policy" content="${policy}" />`
    );
}

// Home page: prerendered and hydrated.
const home = finish(
    template
        .replace("<!--app-->", render("home"))
        .replace("</head>", `  ${fonts.join("\n    ")}\n  </head>`)
);
await writeFile(join(dist, "index.html"), home);

// 404 page: same styles, no JavaScript bundle, not indexed.
const notFound = finish(
    template
        .replace("<!--app-->", render("404"))
        .replace(/\s*<script type="module"[^>]*><\/script>/g, "")
        .replace(/\s*<link rel="modulepreload"[^>]*>/g, "")
        .replace(/\s*<link rel="canonical"[^>]*>/, "")
        .replace(
            /\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/,
            ""
        )
        .replace(
            /<title>[^<]*<\/title>/,
            '<title>Page not found, Luca Martinet</title>\n    <meta name="robots" content="noindex" />'
        )
);
await writeFile(join(dist, "404.html"), notFound);

// Dated files. The site is rebuilt weekly, so these never go stale.
const now = new Date();
const expires = new Date(now.getTime() + 180 * 24 * 60 * 60 * 1000);
await mkdir(join(dist, ".well-known"), { recursive: true });
await writeFile(
    join(dist, ".well-known", "security.txt"),
    [
        `Contact: ${CONTACT}`,
        `Expires: ${expires.toISOString()}`,
        "Preferred-Languages: en",
        `Canonical: ${SITE}/.well-known/security.txt`,
        "",
    ].join("\n")
);
await writeFile(
    join(dist, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE}/</loc>
    <lastmod>${now.toISOString().slice(0, 10)}</lastmod>
  </url>
</urlset>
`
);

await rm(ssr, { recursive: true, force: true });

// Checks.
const problems = [];
for (const [name, html] of [
    ["index.html", home],
    ["404.html", notFound],
]) {
    const markup = html.replace(INLINE_SCRIPT, "");

    for (const [, url] of markup.matchAll(/\s(?:href|src|poster)="([^"]+)"/g)) {
        if (url.startsWith("http://"))
            problems.push(`${name}: insecure URL ${url}`);
        if (!url.startsWith("/") || url.startsWith("//")) continue;
        const path = decodeURIComponent(url.split(/[?#]/)[0]);
        const file = path.endsWith("/") ? `${path}index.html` : path;
        if (!existsSync(join(dist, file)))
            problems.push(`${name}: missing ${url}`);
    }
    for (const [tag] of markup.matchAll(/<a\s[^>]*target="_blank"[^>]*>/g)) {
        if (!/rel="[^"]*noopener/.test(tag))
            problems.push(`${name}: ${tag} lacks rel="noopener"`);
    }
    if (/<[^>]+\sstyle="/.test(markup))
        problems.push(`${name}: inline style attribute (blocked by the CSP)`);
    const text = markup.replace(/<script[\s\S]*?<\/script>/g, "");
    if (/[–—]/.test(text)) problems.push(`${name}: contains an en or em dash`);
}

if (problems.length) {
    console.error(
        `prerender: ${problems.length} problem(s)\n  ${problems.join("\n  ")}`
    );
    process.exit(1);
}
console.log(
    "prerender: wrote index.html, 404.html, sitemap.xml, .well-known/security.txt"
);
