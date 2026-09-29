import raw from "@/generated/contributions.json";
import { site } from "@/content";
import { Arrow, textLink } from "@/components/ui";

/**
 * GitHub contribution graph. The data is fetched once at build time
 * (scripts/fetch-contributions.js), so visitors' browsers never call a
 * third-party API. Everything is computed in UTC so the server render and the
 * browser render always match.
 */

type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };
type Contributions = { total: number; days: Day[] };

const data = raw as Contributions;

const CELL = 11;
const STEP = 13;
const LEFT = 30;
const TOP = 18;

const weekdayLabels = [
    { label: "Mon", row: 1 },
    { label: "Wed", row: 3 },
    { label: "Fri", row: 5 },
];

const heat = [
    "fill-heat-0",
    "fill-heat-1",
    "fill-heat-2",
    "fill-heat-3",
    "fill-heat-4",
];

const monthFormat = new Intl.DateTimeFormat("en", {
    month: "short",
    timeZone: "UTC",
});
const dayFormat = new Intl.DateTimeFormat("en", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
});
const numberFormat = new Intl.NumberFormat("en");

const toDate = (iso: string) => new Date(`${iso}T00:00:00Z`);

function describe(day: Day) {
    const when = dayFormat.format(toDate(day.date));
    if (day.count === 0) return `No contributions on ${when}`;
    const noun = day.count === 1 ? "contribution" : "contributions";
    return `${numberFormat.format(day.count)} ${noun} on ${when}`;
}

export default function ActivityGraph() {
    const { days, total } = data;

    if (days.length === 0) {
        return (
            <p>
                My activity is on{" "}
                <a
                    href={site.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={textLink}
                >
                    GitHub
                </a>
                <Arrow />
            </p>
        );
    }

    // Columns are weeks (Sunday first, like GitHub); pad the first week.
    const offset = toDate(days[0]!.date).getUTCDay();
    const weeks = Math.ceil((offset + days.length) / 7);
    const width = LEFT + weeks * STEP - (STEP - CELL);
    const height = TOP + 7 * STEP - (STEP - CELL);

    const months: { x: number; label: string }[] = [];
    days.forEach((day, i) => {
        const date = toDate(day.date);
        if (date.getUTCDate() !== 1) return;
        const x = LEFT + Math.floor((offset + i) / 7) * STEP;
        const last = months.at(-1);
        if (x < width - 2 * STEP && (!last || x - last.x >= 3 * STEP)) {
            months.push({ x, label: monthFormat.format(date) });
        }
    });

    return (
        <figure>
            <svg
                viewBox={`0 0 ${width} ${height}`}
                role="img"
                aria-label={`GitHub contribution graph: ${numberFormat.format(total)} contributions in the last year`}
                shapeRendering="crispEdges"
                className="h-auto w-full text-[10px]"
            >
                {months.map((month) => (
                    <text
                        key={month.x}
                        x={month.x}
                        y={10}
                        className="fill-mute"
                    >
                        {month.label}
                    </text>
                ))}
                {weekdayLabels.map(({ label, row }) => (
                    <text
                        key={label}
                        x={0}
                        y={TOP + row * STEP + CELL - 2}
                        className="fill-mute"
                    >
                        {label}
                    </text>
                ))}
                {days.map((day, i) => (
                    <rect
                        key={day.date}
                        x={LEFT + Math.floor((offset + i) / 7) * STEP}
                        y={TOP + ((offset + i) % 7) * STEP}
                        width={CELL}
                        height={CELL}
                        className={heat[day.level]}
                    >
                        <title>{describe(day)}</title>
                    </rect>
                ))}
            </svg>

            <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-sm leading-7 text-mute">
                <span>
                    Fig 1. {numberFormat.format(total)} contributions in the
                    last year on{" "}
                    <a
                        href={site.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={textLink}
                    >
                        GitHub
                    </a>
                    <Arrow />
                </span>
                <span aria-hidden="true" className="flex items-center gap-1">
                    less
                    {heat.map((fill) => (
                        <svg key={fill} width={CELL} height={CELL}>
                            <rect width={CELL} height={CELL} className={fill} />
                        </svg>
                    ))}
                    more
                </span>
            </figcaption>
        </figure>
    );
}
