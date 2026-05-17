import { SECTION_IDS } from "@/lib/anchors.ts";
import { useState, useEffect, useRef } from "react";
import ExperienceCard from "./ExperienceCard";
import YearCounter from "./YearCounter";
import { allEntries } from "./data";

export default function Experience() {
    const [activeIndex, setActiveIndex] = useState(0);
    const uniqueYears = [...new Set(allEntries.map((e) => e.yearNumber))];
    const prevClosest = useRef(-1);

    // Use rAF loop so it tracks Lenis's per-frame scroll animation.
    // Only runs while the section is intersecting the viewport.
    useEffect(() => {
        let rafId: number | null = null;
        let active = false;
        let cards: NodeListOf<Element> | null = null;

        const update = () => {
            if (!active) return;
            const viewportCenter = window.innerHeight / 2;
            let closest = 0;
            let closestDist = Infinity;
            cards?.forEach((card, i) => {
                const rect = card.getBoundingClientRect();
                const cardCenter = rect.top + rect.height / 2;
                const dist = Math.abs(cardCenter - viewportCenter);
                if (dist < closestDist) {
                    closestDist = dist;
                    closest = i;
                }
            });
            if (closest !== prevClosest.current) {
                prevClosest.current = closest;
                setActiveIndex(closest);
            }
            rafId = requestAnimationFrame(update);
        };

        const section = document.getElementById(SECTION_IDS.EXPERIENCE);
        const observer = new IntersectionObserver(
            ([entry]) => {
                active = entry.isIntersecting;
                if (active) {
                    cards = document.querySelectorAll("[data-experience-card]");
                    if (rafId === null) rafId = requestAnimationFrame(update);
                } else {
                    if (rafId !== null) {
                        cancelAnimationFrame(rafId);
                        rafId = null;
                    }
                    cards = null;
                }
            },
            { rootMargin: "200px" }
        );
        if (section) observer.observe(section);

        return () => {
            if (rafId !== null) cancelAnimationFrame(rafId);
            observer.disconnect();
        };
    }, []);

    return (
        <section
            id={SECTION_IDS.EXPERIENCE}
            className="grid grid-cols-12 gap-8 px-6 py-16 md:py-32"
        >
            {/* Left: 1/3 width date column */}
            <div className="col-span-4 hidden md:block">
                <div className="sticky top-24 -ml-6 w-[calc(100%+1.5rem)]">
                    <YearCounter
                        allYears={uniqueYears}
                        activeIndex={uniqueYears.indexOf(
                            allEntries[activeIndex].yearNumber
                        )}
                    />
                </div>
            </div>

            {/* Right: 2/3 width content column */}
            <div className="col-span-12 md:col-span-8 relative">
                {/* Timeline line */}
                <div className="absolute left-0 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-neutral-300 dark:via-white/15 to-transparent hidden md:block" />
                <div className="flex flex-col gap-y-16 md:gap-y-24 md:pl-10">
                    {allEntries.map((exp, idx) => (
                        <ExperienceCard
                            key={idx}
                            exp={exp}
                            index={idx}
                            isActive={idx === activeIndex}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
