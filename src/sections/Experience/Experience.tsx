import { SECTION_IDS } from "@/lib/anchors.ts";
import { useState, useEffect } from "react";
import ExperienceSection from "./ExperienceSection";
import YearCounter from "./YearCounter";
import {
    internships,
    universityYears,
    internshipTileStyles,
    universityTileStyles,
} from "./data";

export default function Experience() {
    const [activeIndex, setActiveIndex] = useState(0);
    const allYears = [
        ...internships.map((i) => i.yearNumber),
        ...universityYears.slice(1).map((u) => u.yearNumber),
    ];

    // Use rAF loop so it tracks Lenis's per-frame scroll animation
    useEffect(() => {
        let rafId: number;
        const update = () => {
            const cards = document.querySelectorAll("[data-experience-card]");
            const viewportCenter = window.innerHeight / 2;
            let closest = 0;
            let closestDist = Infinity;
            cards.forEach((card, i) => {
                const rect = card.getBoundingClientRect();
                const cardCenter = rect.top + rect.height / 2;
                const dist = Math.abs(cardCenter - viewportCenter);
                if (dist < closestDist) {
                    closestDist = dist;
                    closest = i;
                }
            });
            setActiveIndex(closest);
            rafId = requestAnimationFrame(update);
        };
        rafId = requestAnimationFrame(update);
        return () => cancelAnimationFrame(rafId);
    }, []);

    return (
        <section
            id={SECTION_IDS.EXPERIENCE}
            className="grid grid-cols-12 gap-8 px-6 py-16 md:py-32"
        >
            {/* Left: 1/3 width date column - extends to left edge */}
            <div className="col-span-4 hidden md:block">
                <div className="sticky top-24 -ml-6 w-[calc(100%+1.5rem)]">
                    <YearCounter
                        allYears={allYears}
                        activeIndex={activeIndex}
                    />
                </div>
            </div>

            {/* Right: 2/3 width content column */}
            <div className="col-span-12 md:col-span-8 flex flex-col gap-y-16 md:gap-y-24">
                <ExperienceSection
                    title="Internships"
                    subtitle="Professional experience and growth"
                    entries={internships}
                    styles={internshipTileStyles}
                    startIndex={0}
                    activeIndex={activeIndex}
                />
                <ExperienceSection
                    title="University Years"
                    subtitle="A journey across Europe"
                    entries={universityYears.slice(1)}
                    styles={universityTileStyles}
                    startIndex={internships.length}
                    activeIndex={activeIndex}
                />
            </div>
        </section>
    );
}
