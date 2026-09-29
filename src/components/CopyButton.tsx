import { useEffect, useState } from "react";
import { Check, Copy, Warning } from "./icons";

/** Copies text to the clipboard; the label confirms, then resets. */
export default function CopyButton({
    text,
    label = "Copy",
}: {
    text: string;
    label?: string;
}) {
    const [state, setState] = useState<"idle" | "copied" | "failed">("idle");

    useEffect(() => {
        if (state === "idle") return;
        const timer = setTimeout(() => setState("idle"), 2500);
        return () => clearTimeout(timer);
    }, [state]);

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setState("copied");
        } catch {
            // Clipboard blocked (permissions, old browser): say so, the text
            // stays visible to select by hand.
            setState("failed");
        }
    };

    return (
        <button
            type="button"
            onClick={copy}
            className="inline-flex h-8 shrink-0 items-center gap-1.5 rounded-sm px-2 text-mute transition-colors hover:bg-surface-card hover:text-ink"
        >
            {state === "copied" ? (
                <Check size={14} />
            ) : state === "failed" ? (
                <Warning size={14} />
            ) : (
                <Copy size={14} />
            )}
            <span aria-live="polite">
                {state === "copied"
                    ? "Copied"
                    : state === "failed"
                      ? "Copy failed, select the text"
                      : label}
            </span>
        </button>
    );
}
