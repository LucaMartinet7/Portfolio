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

    const control =
        "inline-flex h-9 items-center gap-2 rounded-sm bg-term-raised px-3 text-term-text transition-colors hover:bg-term-mute hover:text-term";

    return (
        <dialog
            ref={dialogRef}
            aria-label={`${title}: ${item.label}`}
            onClose={onClose}
            onKeyDown={onKeyDown}
            onClick={onClick}
            className="m-0 h-dvh max-h-none w-screen max-w-none overscroll-contain bg-transparent p-0 text-term-text backdrop:bg-term/95"
        >
            <div
                data-dismiss
                className="flex h-full flex-col items-center justify-center gap-4 p-4 sm:p-8"
            >
                <button
                    type="button"
                    onClick={close}
                    className={`${control} absolute top-4 right-4`}
                >
                    <X size={16} />
                    Close
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
                        className="max-h-[78dvh] max-w-full"
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
                        width={item.width}
                        height={item.height}
                        className="max-h-[78dvh] max-w-full object-contain"
                    />
                )}

                <div className="flex items-center gap-3">
                    {many && (
                        <button
                            type="button"
                            onClick={() => step(-1)}
                            aria-label="Previous photo"
                            className={control}
                        >
                            <CaretLeft size={16} />
                            Prev
                        </button>
                    )}
                    <p className="px-2 text-sm" aria-live="polite">
                        {item.label}
                        {many && (
                            <span className="text-term-mute">
                                {" "}
                                ({index + 1} of {items.length})
                            </span>
                        )}
                    </p>
                    {many && (
                        <button
                            type="button"
                            onClick={() => step(1)}
                            aria-label="Next photo"
                            className={control}
                        >
                            Next
                            <CaretRight size={16} />
                        </button>
                    )}
                </div>
            </div>
        </dialog>
    );
}
