import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Shared visual primitives used across sections to keep styling consistent
 * and avoid copy-pasting the same Tailwind recipes. Sizing/position can be
 * tuned per call site via `className` (resolved with tailwind-merge).
 */

/** Section shell: relative, clipped, with the standard vertical rhythm. */
export function Section({
    id,
    className,
    children,
}: {
    id?: string;
    className?: string;
    children: ReactNode;
}) {
    return (
        <section
            id={id}
            className={cn(
                "relative overflow-hidden px-6 py-16 md:py-32",
                className
            )}
        >
            {children}
        </section>
    );
}

/** Small uppercase label with an underline accent above a section heading. */
export function Eyebrow({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <div className={className}>
            <p className="text-[11px] font-bold uppercase tracking-wider text-brand/65 dark:text-mint/50">
                {children}
            </p>
            <div className="mt-1.5 h-[2px] w-11 rounded-full bg-brand/30 dark:bg-mint/25" />
        </div>
    );
}

/** Pulsing green "live" status dot. */
export function PulseDot({ className }: { className?: string }) {
    return (
        <span className={cn("relative flex h-2 w-2", className)}>
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4ade80] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4ade80]" />
        </span>
    );
}

/** Soft decorative background glow. Position/size/blur set via `className`. */
export function GlowBlob({ className }: { className?: string }) {
    return (
        <div
            aria-hidden
            className={cn(
                "pointer-events-none absolute rounded-full bg-brand/[0.04] blur-2xl dark:bg-mint/[0.04]",
                className
            )}
        />
    );
}

/** Rounded pill. Renders an external link when `href` is given, else a span. */
export function Chip({
    href,
    icon,
    className,
    children,
}: {
    href?: string;
    icon?: ReactNode;
    className?: string;
    children: ReactNode;
}) {
    const base =
        "inline-flex items-center gap-1.5 rounded-full border border-brand/20 px-3.5 py-1.5 text-sm font-medium text-brand dark:border-mint/15 dark:text-mint/70 bg-brand/[0.07] dark:bg-mint/[0.05]";

    if (href) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className={cn(
                    base,
                    "transition-colors hover:bg-brand/15 hover:text-brand-dark dark:hover:bg-mint/10 dark:hover:text-mint",
                    className
                )}
            >
                {icon}
                {children}
            </a>
        );
    }

    return <span className={cn(base, className)}>{icon}{children}</span>;
}

/** Primary green pill button styling, shared by CTA links. */
export const primaryButtonClass =
    "inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_32px_-8px_rgba(56,81,68,0.5)] transition-colors duration-200 hover:bg-brand-dark dark:bg-mint dark:text-surface-dark dark:hover:bg-mint-hover touch-manipulation";
