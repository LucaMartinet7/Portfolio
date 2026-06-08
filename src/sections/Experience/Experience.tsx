import { SECTION_IDS } from "@/lib/anchors.ts";
import ExperienceCard from "./ExperienceCard";
import { allEntries } from "./data";
import { Section, Eyebrow, GlowBlob } from "@/components/ui/primitives";

export default function Experience() {
    // Unique years across all entries, newest → oldest, to align with the
    // cards (most recent first) for the decorative rail.
    const railYears = [...new Set(allEntries.map((e) => e.yearNumber))]
        .sort()
        .reverse();

    return (
        <Section id={SECTION_IDS.EXPERIENCE}>
            <GlowBlob className="-left-40 top-1/3 h-[440px] w-[440px]" />

            <div className="relative mx-auto max-w-6xl">
                {/* Header */}
                <Eyebrow>Experience</Eyebrow>
                <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[#111] dark:text-[#F8F5F2] md:text-5xl">
                    My journey
                </h2>
                <p className="mt-3 text-base text-neutral-500 dark:text-[#C2D8C4]/50 md:text-lg">
                    Education and internships across Europe.
                </p>

                {/* Timeline */}
                <div className="mt-12 grid gap-x-6 md:grid-cols-[88px_1fr] md:gap-x-10">
                    {/* Year rail (decorative, desktop only) */}
                    <div
                        aria-hidden
                        className="hidden flex-col justify-between py-1 md:flex"
                    >
                        {railYears.map((year, i) => (
                            <span
                                key={year}
                                className="text-3xl font-extrabold tracking-tight text-[#385144] dark:text-[#C2D8C4]"
                                style={{
                                    opacity:
                                        1 -
                                        (i / (railYears.length - 1)) * 0.88,
                                }}
                            >
                                {year}
                            </span>
                        ))}
                    </div>

                    {/* Cards */}
                    <div className="flex flex-col gap-6 md:border-l-2 md:border-[#385144]/10 md:pl-10 md:dark:border-[#C2D8C4]/10">
                        {allEntries.map((exp, idx) => (
                            <ExperienceCard
                                key={idx}
                                exp={exp}
                                index={idx}
                                current={idx === 0}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
