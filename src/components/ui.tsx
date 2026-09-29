import type { ReactNode } from "react";

/*
 * Shared building blocks. Shape rule (DESIGN.md): interactive elements are
 * rounded-sm (4px), containers are square (0px). No shadows anywhere.
 */

const control =
    "inline-flex h-9 items-center justify-center gap-2 rounded-sm px-5 font-medium leading-8 transition-colors active:translate-y-px";

export const buttonPrimary = `${control} bg-ink text-on-ink hover:bg-ink-deep`;

export const buttonSecondary = `${control} border border-hairline-strong bg-canvas text-ink hover:bg-surface-card`;

/** Inline link: ink with an underline, never coloured (DESIGN.md). */
export const textLink =
    "text-ink underline decoration-hairline-strong underline-offset-4 transition-colors hover:decoration-ink";

/** Arrow drawn by the font's `->` ligature; hidden from screen readers. */
export function Arrow() {
    return <span aria-hidden="true">{" ->"}</span>;
}

/** ASCII bullet in the brand green, e.g. [+]. Decorative. */
export function Marker({ children = "+" }: { children?: string }) {
    return (
        <span aria-hidden="true" className="text-green">
            [{children}]
        </span>
    );
}

/** A section: bold label over a hairline rule, then content. */
export function Section({
    id,
    title,
    children,
}: {
    id: string;
    title: string;
    children: ReactNode;
}) {
    return (
        <section
            id={id}
            aria-labelledby={`${id}-title`}
            className="mx-auto max-w-240 px-4 py-12 sm:px-6 md:py-16 lg:py-24"
        >
            <h2
                id={`${id}-title`}
                className="border-b border-hairline pb-3 font-bold"
            >
                {title}
            </h2>
            <div className="pt-6">{children}</div>
        </section>
    );
}

/** Label / value rows aligned on a fixed label column. */
export function Rows({
    rows,
}: {
    rows: { label: string; value: ReactNode }[];
}) {
    return (
        <dl className="grid gap-y-2 sm:grid-cols-[16ch_1fr]">
            {rows.map((row) => (
                <div key={row.label} className="contents">
                    <dt className="text-ink">
                        <Marker /> {row.label}
                    </dt>
                    <dd className="mb-2 pl-[4ch] sm:mb-0 sm:pl-0">
                        {row.value}
                    </dd>
                </div>
            ))}
        </dl>
    );
}
