import { useRef, useEffect } from "react";
import { useInView } from "motion/react";
import type { ExperienceCardProps } from "./types";

export default function ExperienceCard({
    exp,
    index,
    styles,
    styleIndex,
}: ExperienceCardProps & { onView?: (index: number) => void }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5 });

    useEffect(() => {
        if (isInView) {
            // Trigger parent callback if provided
            const event = new CustomEvent("experienceCardView", {
                detail: { index },
            });
            window.dispatchEvent(event);
        }
    }, [isInView, index]);

    return (
        <div ref={ref} key={index} className="relative">
            {/* Photo Grid Collage with Text */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 auto-rows-[150px] md:auto-rows-[250px]">
                {/* Text Content Tile with Dynamic Styling and Position */}
                <div
                    className={`rounded-2xl overflow-hidden col-span-2 row-span-2 ${styles[styleIndex]} border p-4 md:p-8 flex flex-col justify-center backdrop-blur-sm`}
                >
                    <p className="text-xs md:text-lg text-white/60 uppercase tracking-wider mb-2 md:mb-4">
                        {exp.category}
                    </p>
                    <p className="text-lg md:text-3xl text-white/70 mb-1 md:mb-2">
                        {exp.year}
                    </p>
                    <h2 className="text-2xl md:text-5xl font-bold mb-2 md:mb-4 leading-tight">
                        {exp.location}
                    </h2>
                    <p className="text-lg md:text-3xl text-white/80 mb-3 md:mb-6">
                        {exp.country}
                    </p>
                    <p className="text-sm md:text-lg text-white/70 leading-relaxed">
                        {exp.description}
                    </p>
                </div>

                {/* Photo Images */}
                {exp.images.map((img, imgIndex) => (
                    <div
                        key={imgIndex}
                        className={`${img.span} rounded-2xl overflow-hidden group relative`}
                    >
                        <div
                            className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            style={{
                                backgroundImage: `url(${img.url})`,
                            }}
                        >
                            {/* Subtle overlay */}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
