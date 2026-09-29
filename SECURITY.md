# Security

## Reporting a problem

Email **lucamartinetwork@gmail.com** with details and steps to reproduce.
The same contact is published at
[/.well-known/security.txt](https://lucamartinet.dev/.well-known/security.txt).

## How the site is hardened

- **Static and prerendered.** The site is plain HTML, CSS and a small React
  bundle. There is no server, database, form or login to attack.
- **Content Security Policy.** Added at build time as a `<meta>` tag
  (`scripts/prerender.js`): `default-src 'none'`, scripts only from the site
  itself plus a SHA-256 hash for the one inline theme script, no inline
  styles, no frames, no plugins, no form targets, and Trusted Types enforced
  so DOM XSS sinks such as `innerHTML` are blocked.
- **No third-party requests.** The font is self-hosted and there is no icon library. The GitHub
  activity graph is fetched once at build time and baked into the page, so
  visitors' browsers never contact another service.
- **Clean media.** Photos are re-encoded with EXIF, GPS and camera metadata
  removed; the CV's PDF metadata contains only the title and author.
- **Build checks.** The build fails on broken local links, `http://` URLs,
  `target="_blank"` links without `rel="noopener"`, and inline styles. Lint
  bans `eval`, `new Function`, `javascript:` URLs, `dangerouslySetInnerHTML`
  and `innerHTML` assignments.
- **Supply chain.** Two runtime dependencies (React and React DOM). CI
  installs from the lockfile with install scripts disabled, verifies npm
  registry signatures and audits runtime dependencies. GitHub Actions are
  pinned to commit SHAs, run with read-only tokens, and only the deploy job
  can publish. Dependabot proposes updates after a 7-day cooldown.

## Limits of GitHub Pages

GitHub Pages does not allow custom HTTP headers. HTTPS is enforced by GitHub,
and the whole `.dev` top-level domain is on the browsers' HSTS preload list,
so the site is never loaded over plain HTTP. The CSP is delivered as a
`<meta>` tag, which does not support `frame-ancestors`. The site has no actions a visitor can be tricked into
performing, so framing it has no practical impact.
