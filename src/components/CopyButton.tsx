import { useEffect, useState } from "react";

/** Copies text to the clipboard; the label confirms, then resets. */
export default function CopyButton({
    text,
    label = "copy",
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
            className="inline-flex h-8 shrink-0 items-center rounded-sm px-2 text-mute transition-colors hover:bg-surface-card hover:text-ink"
        >
            <span aria-live="polite">
                [
                {state === "copied"
                    ? "copied"
                    : state === "failed"
                      ? "copy failed, select the text"
                      : label}
                ]
            </span>
        </button>
    );
}
