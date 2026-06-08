import GithubCalendar from "./GithubCalendar";
import { SECTION_IDS } from "@/lib/anchors.ts";
import { motion } from "motion/react";
import { Section, Eyebrow, Chip } from "@/components/ui/primitives";

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

export default function About() {
    return (
        <Section id={SECTION_IDS.ABOUT}>
            <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-16">
                {/* Left: bio + tech stack */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <Eyebrow>About</Eyebrow>

                    <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-ink dark:text-surface md:text-5xl">
                        Who I am
                    </h2>

                    <p className="mt-6 max-w-md text-base leading-7 text-neutral-600 dark:text-mint/60 md:text-lg">
                        I'm Luca, a software development student at Epitech. I
                        build reliable systems and ship real projects — from
                        low-level C to full-stack web applications.
                    </p>

                    <blockquote className="mt-8 border-l-[3px] border-brand/40 dark:border-mint/25 pl-4">
                        <p className="text-base italic leading-relaxed text-neutral-600 dark:text-mint/70">
                            "If you're not improving, you're falling behind."
                        </p>
                        <footer className="mt-1.5 text-sm text-brand/60 dark:text-mint/40">
                            — Chris Bumstead
                        </footer>
                    </blockquote>

                    <div className="mt-10">
                        <Eyebrow>Tech stack</Eyebrow>
                        <div className="mt-4 flex flex-wrap gap-2.5">
                            {techStack.map((tech) => (
                                <Chip key={tech}>{tech}</Chip>
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

                    <h3 className="mt-4 text-2xl font-bold tracking-tight text-ink dark:text-surface md:text-3xl">
                        Contribution graph
                    </h3>
                    <p className="mt-2 text-sm text-neutral-500 dark:text-mint/40">
                        Activity across all public repositories
                    </p>

                    <div className="mt-6">
                        <GithubCalendar />
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
