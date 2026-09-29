import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "./icons";

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

/**
 * Link arrow: up-right for links that leave the site, right for links
 * within it. Decorative; the link text carries the meaning.
 */
export function Arrow({ external = true }: { external?: boolean }) {
    const Icon = external ? ArrowUpRight : ArrowRight;
    return <Icon size={14} className="ml-1 inline-block align-[-2px]" />;
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
