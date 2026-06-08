import { Github, ArrowUpRight, Star } from "lucide-react";
import { motion } from "motion/react";
import type { Project } from "./projects.data";

type Props = { project: Project; featured?: boolean };

function Tags({ tags }: { tags?: string[] }) {
    if (!tags?.length) return null;
    return (
        <ul className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (
                <li
                    key={t}
                    className="rounded-full border border-[#385144]/25 dark:border-[#C2D8C4]/15 bg-[#385144]/[0.07] dark:bg-[#C2D8C4]/[0.05] px-3 py-1 text-xs font-medium text-[#385144] dark:text-[#C2D8C4]/70"
                >
                    {t}
                </li>
            ))}
        </ul>
    );
}

export default function ProjectCard({ project, featured }: Props) {
    const href = project.demoUrl ?? project.githubUrl;

    if (featured) {
        return (
            <motion.article
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="rounded-2xl border-[1.5px] border-[#385144]/28 dark:border-[#C2D8C4]/20 bg-[#385144]/[0.04] dark:bg-[#C2D8C4]/[0.04] p-6 shadow-[0_8px_32px_-8px_rgba(56,81,68,0.18)] md:p-7"
            >
                <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#385144]/20 dark:border-[#C2D8C4]/20 bg-[#385144]/10 dark:bg-[#C2D8C4]/10 px-3 py-1 text-xs font-semibold text-[#385144] dark:text-[#C2D8C4]">
                        <Star size={12} className="fill-current" />
                        Featured
                    </span>
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-[#385144]/20 dark:border-[#C2D8C4]/20 bg-[#385144]/[0.07] dark:bg-[#C2D8C4]/[0.05] px-3.5 py-1.5 text-[13px] font-medium text-[#385144] dark:text-[#C2D8C4]/80 transition-colors hover:bg-[#385144]/15 dark:hover:bg-[#C2D8C4]/10"
                    >
                        <Github size={14} />
                        GitHub
                        <ArrowUpRight size={13} />
                    </a>
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#111] dark:text-[#F8F5F2] md:text-2xl">
                    {project.title}
                </h3>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-neutral-600 dark:text-[#C2D8C4]/60">
                    {project.description}
                </p>
                <Tags tags={project.tags} />
            </motion.article>
        );
    }

    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} — open ${project.demoUrl ? "live demo" : "on GitHub"}`}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className="group flex h-full flex-col rounded-2xl border border-[#385144]/14 dark:border-[#C2D8C4]/10 bg-[#385144]/[0.03] dark:bg-[#C2D8C4]/[0.03] p-5 transition-colors hover:border-[#385144]/25 dark:hover:border-[#C2D8C4]/20 hover:bg-[#385144]/[0.06] dark:hover:bg-[#C2D8C4]/[0.06]"
        >
            <div className="flex items-start justify-between gap-4">
                <h3 className="text-base font-bold text-[#111] dark:text-[#F8F5F2]">
                    {project.title}
                </h3>
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[#385144]/15 dark:border-[#C2D8C4]/15 bg-[#385144]/[0.07] dark:bg-[#C2D8C4]/[0.05] text-[#385144] dark:text-[#C2D8C4]/80 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    <ArrowUpRight size={14} />
                </span>
            </div>
            <p className="mt-2 flex-1 text-[13px] leading-relaxed text-neutral-600 dark:text-[#C2D8C4]/60">
                {project.description}
            </p>
            <Tags tags={project.tags} />
        </motion.a>
    );
}
