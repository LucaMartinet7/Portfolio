import ProjectCard from "./ProjectCard";
import { projects } from "./projects.data";
import GithubCalendar from "../About/GithubCalendar";
import { SECTION_IDS } from "@/lib/anchors.ts";
import { motion } from "motion/react";

export default function Projects() {
    return (
        <section id={SECTION_IDS.PROJECTS} className="px-6 py-16 md:py-32">
            <div className="mx-auto max-w-6xl">
                <motion.header
                    className="max-w-2xl"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <h2 className="text-3xl font-semibold">
                        Selected{" "}
                        <span className="text-[#385144] dark:text-[#C2D8C4]/60">
                            Work
                        </span>
                    </h2>
                    <p className="mt-3 text-neutral-600 dark:text-[#C2D8C4]/60">
                        A few projects I've built recently—systems work,
                        networking, and web tooling.
                    </p>
                </motion.header>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((p, idx) => (
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

                <motion.div
                    className="mt-16"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <GithubCalendar />
                </motion.div>
            </div>
        </section>
    );
}
