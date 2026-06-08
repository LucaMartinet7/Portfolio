import GithubCalendar from "./GithubCalendar";
import { SECTION_IDS } from "@/lib/anchors.ts";
import { motion } from "motion/react";

const techStack = [
    "C",
    "C++",
    "Python",
    "Java",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "Docker",
    "Git",
    "Linux",
    "Bash",
    "MySQL",
];

function Eyebrow({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#385144]/65 dark:text-[#C2D8C4]/50">
                {children}
            </p>
            <div className="mt-1.5 h-[2px] w-11 rounded-full bg-[#385144]/30 dark:bg-[#C2D8C4]/25" />
        </div>
    );
}

export default function About() {
    return (
        <section id={SECTION_IDS.ABOUT} className="px-6 py-16 md:py-32">
            <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-16">
                {/* Left: bio + tech stack */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <Eyebrow>About</Eyebrow>

                    <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[#111] dark:text-[#F8F5F2] md:text-5xl">
                        Who I am
                    </h2>

                    <p className="mt-6 max-w-md text-base leading-7 text-neutral-600 dark:text-[#C2D8C4]/60 md:text-lg">
                        I'm Luca, a software development student at Epitech. I
                        build reliable systems and ship real projects — from
                        low-level C to full-stack web applications.
                    </p>

                    <blockquote className="mt-8 border-l-[3px] border-[#385144]/40 dark:border-[#C2D8C4]/25 pl-4">
                        <p className="text-base italic leading-relaxed text-neutral-600 dark:text-[#C2D8C4]/70">
                            "If you're not improving, you're falling behind."
                        </p>
                        <footer className="mt-1.5 text-sm text-[#385144]/60 dark:text-[#C2D8C4]/40">
                            — Chris Bumstead
                        </footer>
                    </blockquote>

                    <div className="mt-10">
                        <Eyebrow>Tech stack</Eyebrow>
                        <div className="mt-4 flex flex-wrap gap-2.5">
                            {techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full border border-[#385144]/20 dark:border-[#C2D8C4]/15 bg-[#385144]/[0.06] dark:bg-[#C2D8C4]/[0.05] px-3.5 py-1.5 text-sm font-medium text-[#385144] dark:text-[#C2D8C4]/70"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Right: GitHub activity */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                >
                    <Eyebrow>GitHub activity</Eyebrow>

                    <h3 className="mt-4 text-2xl font-bold tracking-tight text-[#111] dark:text-[#F8F5F2] md:text-3xl">
                        Contribution graph
                    </h3>
                    <p className="mt-2 text-sm text-neutral-500 dark:text-[#C2D8C4]/40">
                        Activity across all public repositories
                    </p>

                    <div className="mt-6">
                        <GithubCalendar />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
