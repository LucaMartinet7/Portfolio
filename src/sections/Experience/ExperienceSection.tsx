import ExperienceCard from "./ExperienceCard";
import YearCounter from "./YearCounter";
import type { ExperienceEntry } from "./types";

export default function ExperienceSection({
    title,
    subtitle,
    entries,
    startIndex,
    activeIndex,
    allYears = [],
    showYearCounter = false,
    id,
}: {
    title: string;
    subtitle: string;
    entries: ExperienceEntry[];
    startIndex: number;
    activeIndex: number;
    allYears?: string[];
    showYearCounter?: boolean;
    id?: string;
}) {
    return (
        <section id={id} className="py-8 md:py-16">
            <div className="mb-8">
                <h2 className="text-3xl font-semibold">{title}</h2>
                <p className="text-white/60 mt-2">{subtitle}</p>
            </div>
            {/* Grid Container */}
            <div className="grid grid-cols-12 gap-8">
                {/* Render the year counter column only when requested */}
                {showYearCounter && allYears.length > 0 && (
                    <div className="col-span-4 hidden md:block">
                        <div className="sticky top-24">
                            <YearCounter
                                allYears={allYears}
                                activeIndex={activeIndex}
                            />
                        </div>
                    </div>
                )}

                {/* Content column: full width when no counter, otherwise 8/12 */}
                <div
                    className={`col-span-12 ${
                        showYearCounter && allYears.length > 0
                            ? "md:col-span-8"
                            : ""
                    } flex flex-col gap-y-16 md:gap-y-24`}
                >
                    {entries.map((exp, idx) => (
                        <ExperienceCard
                            key={startIndex + idx}
                            exp={exp}
                            index={startIndex + idx}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
