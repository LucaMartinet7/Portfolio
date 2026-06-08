import ProjectCard from "./ProjectCard";
import { projects } from "./projects.data";
import { SECTION_IDS } from "@/lib/anchors.ts";
import { motion } from "motion/react";

export default function Projects() {
    const featured = projects.find((p) => p.featured);
    const rest = projects.filter((p) => !p.featured);

    return (
        <section
            id={SECTION_IDS.PROJECTS}
            className="relative overflow-hidden px-6 py-16 md:py-32"
        >
            <div
                aria-hidden
                className="pointer-events-none absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-[#385144]/[0.04] dark:bg-[#C2D8C4]/[0.04] blur-2xl"
            />

            <div className="relative mx-auto max-w-6xl">
                <motion.header
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#385144]/65 dark:text-[#C2D8C4]/50">
                        Selected work
                    </p>
                    <div className="mt-1.5 h-[2px] w-11 rounded-full bg-[#385144]/30 dark:bg-[#C2D8C4]/25" />
                    <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[#111] dark:text-[#F8F5F2] md:text-5xl">
                        Things I've built
                    </h2>
                    <p className="mt-3 text-base text-neutral-500 dark:text-[#C2D8C4]/50 md:text-lg">
                        Systems, networking, and web tooling — all on GitHub.
                    </p>
                </motion.header>

                {featured && (
                    <motion.div
                        className="mt-12"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                    >
                        <ProjectCard project={featured} featured />
                    </motion.div>
                )}

                <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                    {rest.map((p, idx) => (
                        <motion.div
                            key={p.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.45,
                                delay: idx * 0.08,
                                ease: "easeOut",
                            }}
                        >
                            <ProjectCard project={p} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
