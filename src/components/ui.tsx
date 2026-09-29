import type { ReactNode } from "react";

/*
 * Shared building blocks. Shape rule: controls are rounded-lg (8px),
 * containers rounded-xl (12px), tags rounded-md (6px).
 */

const control =
    "inline-flex h-11 items-center justify-center gap-2 rounded-lg text-sm font-medium transition-colors active:translate-y-px";

export const buttonPrimary = `${control} bg-accent px-5 text-on-accent hover:bg-accent-hover`;

export const buttonSecondary = `${control} border border-line-strong px-5 text-fg hover:border-fg hover:bg-surface`;

export const buttonIcon = `${control} w-11 border border-line-strong text-fg-muted hover:border-fg hover:bg-surface hover:text-fg`;

export const textLink =
    "inline-flex items-center gap-1 font-medium text-fg underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-fg";

/** Consistent frame: heading column on the left, content on the right. */
export function Section({
    id,
    title,
    intro,
    children,
}: {
    id: string;
    title: string;
    intro?: string;
    children: ReactNode;
}) {
    return (
        <section
            id={id}
            aria-labelledby={`${id}-title`}
            className="border-t border-line"
        >
            <div className="mx-auto grid max-w-6xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:py-28">
                <header className="self-start lg:sticky lg:top-24 lg:col-span-3">
                    <h2
                        id={`${id}-title`}
                        className="text-2xl font-semibold tracking-tight"
                    >
                        {title}
                    </h2>
                    {intro && (
                        <p className="mt-2 max-w-[40ch] text-fg-muted">
                            {intro}
                        </p>
                    )}
                </header>
                <div className="min-w-0 lg:col-span-9">{children}</div>
            </div>
        </section>
    );
}

export function Tag({ children }: { children: ReactNode }) {
    return (
        <span
            translate="no"
            className="inline-flex rounded-md border border-line px-2 py-0.5 font-mono text-xs text-fg-muted"
        >
            {children}
        </span>
    );
}
