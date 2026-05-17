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
    isActive,
}: ExperienceCardProps) {
    return (
        <motion.div
            data-experience-card
            className="relative"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
        >
            {/* Timeline dot */}
            <div className="absolute -left-10 top-8 hidden md:flex items-center justify-center">
                <motion.div
                    animate={{
                        scale: isActive ? 1.4 : 1,
                        opacity: isActive ? 1 : 0.4,
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="w-2.5 h-2.5 rounded-full bg-neutral-400 dark:bg-white shadow-[0_0_8px_2px_rgba(0,0,0,0.15)] dark:shadow-[0_0_8px_2px_rgba(255,255,255,0.25)]"
                />
            </div>

            {/* Card header */}
            <div className="flex items-center gap-3 mb-4">
                <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${exp.tileStyle} uppercase tracking-widest`}
                >
                    {exp.category}
                </span>
                <span className="text-neutral-400 dark:text-white/30 text-sm">
                    {exp.year}
                </span>
                <span className="text-neutral-500 dark:text-white/50 text-sm">
                    {exp.country}
                </span>
            </div>

            {/* Card */}
            <motion.div
                whileHover={{ scale: 1.005 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`grid grid-cols-3 gap-1 rounded-2xl overflow-hidden ring-1 transition-all duration-500 ${isActive ? "ring-neutral-300 dark:ring-white/15 shadow-[0_0_40px_-10px_rgba(0,0,0,0.08)] dark:shadow-[0_0_40px_-10px_rgba(255,255,255,0.08)]" : "ring-neutral-200 dark:ring-white/5"}`}
            >
                {/* Text Content Tile */}
                <div
                    className={`${exp.textSpan ?? "col-span-1"} ${exp.tileStyle} border p-4 md:p-8 flex flex-col justify-center min-h-[180px] md:min-h-[240px] backdrop-blur-sm`}
                >
                    <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-3 leading-tight">
                        {exp.location}
                    </h2>
                    <p className="text-sm md:text-base text-neutral-600 dark:text-white/60 leading-relaxed">
                        {exp.description}
                    </p>
                </div>

                {/* Photo tiles */}
                {exp.images.map((img, imgIndex) => (
                    <div
                        key={imgIndex}
                        className={`${img.span} group relative overflow-hidden`}
                    >
                        {img.type === "video" ? (
                            <LazyVideo
                                src={img.url}
                                className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                            />
                        ) : (
                            <img
                                src={img.url}
                                alt={`${exp.location} — ${exp.country}`}
                                loading="lazy"
                                className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                                style={{ aspectRatio: "4/3" }}
                            />
                        )}
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300 pointer-events-none" />
                    </div>
                ))}
            </motion.div>
        </motion.div>
    );
}
