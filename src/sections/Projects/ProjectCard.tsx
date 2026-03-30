import { Github, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import type { Project } from "./projects.data";

type Props = { project: Project };

const tagColors: Record<string, string> = {
    "C++": "border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-300",
    Python: "border-yellow-500/30 bg-yellow-500/10 text-yellow-600 dark:text-yellow-300",
    Dart: "border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-300",
    MySQL: "border-orange-500/30 bg-orange-500/10 text-orange-600 dark:text-orange-300",
    Networking:
        "border-violet-500/30 bg-violet-500/10 text-violet-600 dark:text-violet-300",
    ECS: "border-pink-500/30 bg-pink-500/10 text-pink-600 dark:text-pink-300",
    ML: "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-300",
    Plugins:
        "border-rose-500/30 bg-rose-500/10 text-rose-600 dark:text-rose-300",
};

export default function ProjectCard({ project }: Props) {
    return (
        <motion.article
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className="group relative rounded-2xl border border-[#385144]/20 dark:border-[#C2D8C4]/10 bg-[#385144]/5 dark:bg-[#C2D8C4]/[0.03] hover:bg-[#385144]/10 dark:hover:bg-[#C2D8C4]/[0.06] hover:border-[#385144]/30 dark:hover:border-[#C2D8C4]/20 transition-colors duration-300 overflow-hidden flex flex-col"
        >
            <div className="p-6 flex flex-col flex-1">
                {/* Title row */}
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <h3 className="text-xl font-semibold leading-snug">
                            {project.title}
                        </h3>
                    </div>
                    <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.1, rotate: 8 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                        }}
                        className="mt-1 shrink-0 text-[#385144]/40 dark:text-[#C2D8C4]/30 hover:text-[#385144] dark:hover:text-[#C2D8C4] transition-colors duration-200"
                        aria-label="GitHub"
                    >
                        <Github size={18} />
                    </motion.a>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-neutral-600 dark:text-[#C2D8C4]/50 flex-1">
                    {project.description}
                </p>

                {/* Tags */}
                {!!project.tags?.length && (
                    <ul className="mt-5 flex flex-wrap gap-2">
                        {project.tags.map((t) => (
                            <motion.li
                                key={t}
                                whileHover={{ scale: 1.08, y: -1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20,
                                }}
                                className={`rounded-full border px-2.5 py-1 text-xs font-medium cursor-default ${tagColors[t] ?? "border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-white/[0.04] text-neutral-500 dark:text-white/50"}`}
                            >
                                {t}
                            </motion.li>
                        ))}
                    </ul>
                )}

                {/* Footer links */}
                <div className="mt-6 pt-4 border-t border-[#385144]/10 dark:border-[#C2D8C4]/[0.06] flex items-center gap-4">
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-[#385144]/60 dark:text-[#C2D8C4]/40 hover:text-[#385144] dark:hover:text-[#C2D8C4] transition-colors duration-200"
                    >
                        <Github size={13} />
                        View source
                    </a>
                    {project.demoUrl && (
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#385144]/60 dark:text-[#C2D8C4]/40 hover:text-[#385144] dark:hover:text-[#C2D8C4] transition-colors duration-200"
                        >
                            <ExternalLink size={13} />
                            Live demo
                        </a>
                    )}
                </div>
            </div>
        </motion.article>
    );
}
