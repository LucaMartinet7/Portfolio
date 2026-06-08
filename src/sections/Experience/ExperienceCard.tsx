import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import type { ExperienceCardProps } from "./types";

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
                className={`absolute -left-[41px] top-7 hidden h-3 w-3 rounded-full ring-4 ring-[#F8F5F2] dark:ring-[#1c1c1c] md:block ${
                    current
                        ? "bg-[#385144] dark:bg-[#C2D8C4]"
                        : "bg-[#385144]/30 dark:bg-[#C2D8C4]/30"
                }`}
            />

            <div
                className={`overflow-hidden rounded-2xl border p-5 transition-shadow duration-300 md:p-6 ${
                    current
                        ? "border-[#385144]/25 dark:border-[#C2D8C4]/20 bg-white dark:bg-[#262626] shadow-[0_6px_28px_-6px_rgba(56,81,68,0.18)]"
                        : "border-[#385144]/12 dark:border-[#C2D8C4]/10 bg-[#385144]/[0.03] dark:bg-[#C2D8C4]/[0.03]"
                }`}
            >
                {/* Header: date + category badge */}
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-neutral-400 dark:text-[#C2D8C4]/40">
                            {exp.year}
                        </p>
                        <h3
                            className={`mt-1 text-lg font-bold ${
                                current
                                    ? "text-[#111] dark:text-[#F8F5F2]"
                                    : "text-neutral-700 dark:text-[#C2D8C4]/80"
                            }`}
                        >
                            {exp.location}
                        </h3>
                        <p className="mt-0.5 text-[13px] text-neutral-400 dark:text-[#C2D8C4]/40">
                            {exp.country}
                        </p>
                    </div>
                    <span
                        className={`shrink-0 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${
                            isInternship
                                ? "border-[#4a8ccc]/25 bg-[#4a8ccc]/10 text-[#4a8ccc]"
                                : "border-[#385144]/25 bg-[#385144]/10 text-[#385144] dark:border-[#C2D8C4]/25 dark:bg-[#C2D8C4]/10 dark:text-[#C2D8C4]"
                        }`}
                    >
                        {exp.category}
                    </span>
                </div>

                {/* Description */}
                <p className="mt-3 max-w-3xl text-[13px] leading-relaxed text-neutral-600 dark:text-[#C2D8C4]/60">
                    {exp.description}
                </p>

                {/* Photo strip */}
                {exp.images.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                        {exp.images.map((img, i) => (
                            <div
                                key={i}
                                className="group relative h-20 min-w-[120px] flex-1 overflow-hidden rounded-lg md:h-24"
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
                            </div>
                        ))}

                        {current && (
                            <span className="inline-flex items-center gap-1.5 self-end rounded-full bg-[#385144]/10 dark:bg-[#C2D8C4]/10 px-2.5 py-1 text-[11px] font-semibold text-[#385144] dark:text-[#C2D8C4]">
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4ade80] opacity-60" />
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4ade80]" />
                                </span>
                                Now
                            </span>
                        )}
                    </div>
                )}
            </div>
        </motion.div>
    );
}
