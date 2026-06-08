import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { ExperienceCardProps } from "./types";
import { PulseDot } from "@/components/ui/primitives";
import Lightbox from "@/components/ui/Lightbox";

function LazyVideo({ src, className }: { src: string; className: string }) {
    const ref = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.play();
                } else {
                    el.pause();
                }
            },
            { rootMargin: "200px" }
        );
        observer.observe(el);
        const onVisibility = () => {
            if (document.hidden) el.pause();
        };
        document.addEventListener("visibilitychange", onVisibility);
        return () => {
            observer.disconnect();
            document.removeEventListener("visibilitychange", onVisibility);
        };
    }, []);
    return (
        <video
            ref={ref}
            src={src}
            loop
            muted
            playsInline
            preload="none"
            className={className}
        />
    );
}

export default function ExperienceCard({
    exp,
    index,
    current,
}: ExperienceCardProps) {
    const isInternship = exp.category === "Internship";
    const [previewIndex, setPreviewIndex] = useState<number | null>(null);

    return (
        <motion.div
            data-experience-card
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
            className="relative"
        >
            {/* Timeline dot */}
            <span
                className={`absolute -left-[41px] top-7 hidden h-3 w-3 rounded-full ring-4 ring-surface dark:ring-[#1c1c1c] md:block ${
                    current
                        ? "bg-brand dark:bg-mint"
                        : "bg-brand/30 dark:bg-mint/30"
                }`}
            />

            <div
                className={`overflow-hidden rounded-2xl border p-5 transition-shadow duration-300 md:p-6 ${
                    current
                        ? "border-brand/25 dark:border-mint/20 bg-white dark:bg-[#262626] shadow-[0_6px_28px_-6px_rgba(56,81,68,0.18)]"
                        : "border-brand/12 dark:border-mint/10 bg-brand/[0.03] dark:bg-mint/[0.03]"
                }`}
            >
                {/* Header: date + category badge */}
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-neutral-400 dark:text-mint/40">
                            {exp.year}
                        </p>
                        <h3
                            className={`mt-1 text-lg font-bold ${
                                current
                                    ? "text-ink dark:text-surface"
                                    : "text-neutral-700 dark:text-mint/80"
                            }`}
                        >
                            {exp.location}
                        </h3>
                        <p className="mt-0.5 text-[13px] text-neutral-400 dark:text-mint/40">
                            {exp.country}
                        </p>
                    </div>
                    <span
                        className={`shrink-0 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${
                            isInternship
                                ? "border-[#4a8ccc]/25 bg-[#4a8ccc]/10 text-[#4a8ccc]"
                                : "border-brand/25 bg-brand/10 text-brand dark:border-mint/25 dark:bg-mint/10 dark:text-mint"
                        }`}
                    >
                        {exp.category}
                    </span>
                </div>

                {/* Description */}
                <p className="mt-3 max-w-3xl text-[13px] leading-relaxed text-neutral-600 dark:text-mint/60">
                    {exp.description}
                </p>

                {/* Photo strip */}
                {exp.images.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                        {exp.images.map((img, i) => (
                            <button
                                key={i}
                                type="button"
                                onClick={() => setPreviewIndex(i)}
                                aria-label={`Expand ${exp.location} — ${img.label}`}
                                className="group relative h-20 min-w-[120px] flex-1 cursor-zoom-in overflow-hidden rounded-lg md:h-24"
                            >
                                {img.type === "video" ? (
                                    <LazyVideo
                                        src={img.url}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <img
                                        src={img.url}
                                        alt={`${exp.location} — ${img.label}`}
                                        loading="lazy"
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                )}
                            </button>
                        ))}

                        {current && (
                            <span className="inline-flex items-center gap-1.5 self-end rounded-full bg-brand/10 dark:bg-mint/10 px-2.5 py-1 text-[11px] font-semibold text-brand dark:text-mint">
                                <PulseDot />
                                Now
                            </span>
                        )}
                    </div>
                )}
            </div>

            {previewIndex !== null && (
                <Lightbox
                    items={exp.images}
                    startIndex={previewIndex}
                    onClose={() => setPreviewIndex(null)}
                />
            )}
        </motion.div>
    );
}
