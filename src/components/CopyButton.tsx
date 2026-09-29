import { useEffect, useState } from "react";

/** Copies text to the clipboard; the label confirms, then resets. */
export default function CopyButton({
    text,
    label = "copy",
}: {
    text: string;
    label?: string;
}) {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (!copied) return;
        const timer = setTimeout(() => setCopied(false), 2000);
        return () => clearTimeout(timer);
    }, [copied]);

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
        } catch {
            // Clipboard access denied: the text stays visible to copy by hand.
        }
    };

    return (
        <button
            type="button"
            onClick={copy}
            className="inline-flex h-8 shrink-0 items-center rounded-sm px-2 text-mute transition-colors hover:bg-surface-card hover:text-ink"
        >
            <span aria-live="polite">[{copied ? "copied" : label}]</span>
        </button>
    );
}
