/**
 * Fetches the last year of GitHub contributions at build time and writes them
 * to src/generated/contributions.json, which the activity graph imports.
 *
 * Visitors never talk to the contributions API: the data is baked into the
 * static page. The response is validated strictly before it is used, and any
 * failure falls back to the previous data (or no graph) instead of failing
 * the build.
 *
 *   node scripts/fetch-contributions.js              always refresh
 *   node scripts/fetch-contributions.js --if-missing only if no data yet
 */
import { access, mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const USER = "lucamartinet7";
const API = `https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(USER)}?y=last`;
const OUT = fileURLToPath(
    new URL("../src/generated/contributions.json", import.meta.url)
);

const exists = (path) =>
    access(path).then(
        () => true,
        () => false
    );

function validate(body) {
    const list = body?.contributions;
    if (!Array.isArray(list) || list.length === 0 || list.length > 400) {
        throw new Error("unexpected response shape");
    }
    return list.map((entry) => {
        const { date, count, level } = entry ?? {};
        if (
            typeof date !== "string" ||
            !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
            !Number.isInteger(count) ||
            count < 0 ||
            !Number.isInteger(level) ||
            level < 0 ||
            level > 4
        ) {
            throw new Error(`invalid entry: ${JSON.stringify(entry)}`);
        }
        return { date, count, level };
    });
}

async function main() {
    if (process.argv.includes("--if-missing") && (await exists(OUT))) return;

    let payload;
    try {
        const response = await fetch(API, {
            headers: { accept: "application/json" },
            signal: AbortSignal.timeout(15_000),
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const days = validate(await response.json()).sort((a, b) =>
            a.date.localeCompare(b.date)
        );
        const total = days.reduce((sum, day) => sum + day.count, 0);
        payload = { total, days };
        console.log(`contributions: ${total} over ${days.length} days`);
    } catch (error) {
        if (await exists(OUT)) {
            console.warn(`contributions: ${error.message}; keeping old data`);
            return;
        }
        console.warn(`contributions: ${error.message}; graph will be hidden`);
        payload = { total: 0, days: [] };
    }

    await mkdir(dirname(OUT), { recursive: true });
    await writeFile(OUT, `${JSON.stringify(payload)}\n`);
}

await main();
