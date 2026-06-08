import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type LightboxItem = {
    url: string;
    label: string;
    type?: "video";
};

/**
 * Full-screen media preview. Shows the item at its natural size, capped to
 * the viewport. Supports prev/next, keyboard (Esc / ← / →) and backdrop close.
 */
export default function Lightbox({
    items,
    startIndex,
    onClose,
}: {
    items: LightboxItem[];
    startIndex: number;
    onClose: () => void;
}) {
    const [index, setIndex] = useState(startIndex);
    const closeRef = useRef<HTMLButtonElement>(null);
    const restoreFocusRef = useRef<HTMLElement | null>(null);

    const hasMany = items.length > 1;
    const next = () => setIndex((i) => (i + 1) % items.length);
    const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);

    // Lock scroll, manage focus, wire keyboard.
    useEffect(() => {
        restoreFocusRef.current = document.activeElement as HTMLElement;
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        closeRef.current?.focus();

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            else if (e.key === "ArrowRight") next();
            else if (e.key === "ArrowLeft") prev();
        };
        window.addEventListener("keydown", onKey);

        return () => {
            window.removeEventListener("keydown", onKey);
            document.body.style.overflow = prevOverflow;
            restoreFocusRef.current?.focus();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const item = items[index];
    const mediaClass =
        "max-h-[85vh] max-w-[90vw] rounded-xl object-contain shadow-2xl";

    return (
        <AnimatePresence>
            <motion.div
                role="dialog"
                aria-modal="true"
                aria-label={item.label}
                data-lenis-prevent
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[6000] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
                onClick={onClose}
            >
                <button
                    ref={closeRef}
                    onClick={onClose}
                    aria-label="Close preview"
                    className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
                >
                    <X size={22} />
                </button>

                {hasMany && (
                    <>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                prev();
                            }}
                            aria-label="Previous photo"
                            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 md:left-6"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                next();
                            }}
                            aria-label="Next photo"
                            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 md:right-6"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </>
                )}

                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="flex flex-col items-center gap-3"
                    onClick={(e) => e.stopPropagation()}
                >
                    {item.type === "video" ? (
                        <video
                            src={item.url}
                            className={mediaClass}
                            controls
                            autoPlay
                            loop
                            playsInline
                        />
                    ) : (
                        <img
                            src={item.url}
                            alt={item.label}
                            className={mediaClass}
                        />
                    )}
                    <p className="text-sm text-white/70">
                        {item.label}
                        {hasMany && (
                            <span className="text-white/40">
                                {" · "}
                                {index + 1} / {items.length}
                            </span>
                        )}
                    </p>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
