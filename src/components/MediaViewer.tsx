import { useEffect, useRef, type KeyboardEvent, type MouseEvent } from "react";
import type { Media } from "@/content";
import { CaretLeft, CaretRight, X } from "./icons";

/**
 * Full-screen viewer built on the native <dialog> element, which provides the
 * focus trap, Esc to close, and focus return to the opening thumbnail.
 */
export default function MediaViewer({
    items,
    index,
    title,
    onIndexChange,
    onClose,
}: {
    items: Media[];
    index: number;
    title: string;
    onIndexChange: (index: number) => void;
    onClose: () => void;
}) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const item = items[index]!;
    const many = items.length > 1;

    useEffect(() => {
        const dialog = dialogRef.current;
        if (dialog && !dialog.open) dialog.showModal();
    }, []);

    const close = () => dialogRef.current?.close();
    const step = (delta: number) =>
        onIndexChange((index + delta + items.length) % items.length);

    const onKeyDown = (event: KeyboardEvent) => {
        if (!many) return;
        if (event.key === "ArrowRight") step(1);
        else if (event.key === "ArrowLeft") step(-1);
    };

    // Clicks on the empty area around the media close the viewer.
    const onClick = (event: MouseEvent) => {
        if ((event.target as HTMLElement).hasAttribute("data-dismiss")) close();
    };

    const reduceMotion =
        typeof matchMedia === "function" &&
        matchMedia("(prefers-reduced-motion: reduce)").matches;

    const navButton =
        "absolute top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-lg bg-surface/90 text-fg transition-colors hover:bg-surface";

    return (
        <dialog
            ref={dialogRef}
            aria-label={`${title}: ${item.label}`}
            onClose={onClose}
            onKeyDown={onKeyDown}
            onClick={onClick}
            className="m-0 h-dvh max-h-none w-screen max-w-none overscroll-contain bg-transparent p-0 text-fg backdrop:bg-[#0b0d0c]/95"
        >
            <div
                data-dismiss
                className="flex h-full flex-col items-center justify-center gap-4 p-4 sm:p-8"
            >
                <button
                    type="button"
                    onClick={close}
                    aria-label="Close viewer"
                    className="absolute top-4 right-4 inline-flex size-11 items-center justify-center rounded-lg bg-surface/90 text-fg transition-colors hover:bg-surface"
                >
                    <X size={20} />
                </button>

                {item.video ? (
                    <video
                        key={item.src}
                        poster={item.video.poster}
                        controls
                        playsInline
                        muted
                        loop
                        autoPlay={!reduceMotion}
                        className="max-h-[80dvh] max-w-full rounded-lg"
                    >
                        <source
                            src={item.src}
                            type='video/mp4; codecs="avc1.640028"'
                        />
                        <source
                            src={item.video.webm}
                            type='video/webm; codecs="vp9"'
                        />
                    </video>
                ) : (
                    <img
                        key={item.src}
                        src={item.src}
                        alt={`${item.label}, ${title}`}
                        className="max-h-[80dvh] max-w-full rounded-lg object-contain"
                    />
                )}

                <p className="text-sm text-[#d9dfdb]" aria-live="polite">
                    {item.label}
                    {many && (
                        <span className="text-[#9aa49d]">
                            {" "}
                            ({index + 1} of {items.length})
                        </span>
                    )}
                </p>

                {many && (
                    <>
                        <button
                            type="button"
                            onClick={() => step(-1)}
                            aria-label="Previous"
                            className={`${navButton} left-3 sm:left-6`}
                        >
                            <CaretLeft size={20} />
                        </button>
                        <button
                            type="button"
                            onClick={() => step(1)}
                            aria-label="Next"
                            className={`${navButton} right-3 sm:right-6`}
                        >
                            <CaretRight size={20} />
                        </button>
                    </>
                )}
            </div>
        </dialog>
    );
}
