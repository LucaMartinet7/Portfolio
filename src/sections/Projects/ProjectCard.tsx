import { Github, ArrowUpRight, Star } from "lucide-react";
import { motion } from "motion/react";
import type { Project } from "./projects.data";
import { Chip } from "@/components/ui/primitives";

type Props = { project: Project; featured?: boolean };

function Tags({ tags }: { tags?: string[] }) {
    if (!tags?.length) return null;
    return (
        <ul className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (
                <li key={t}>
                    <Chip className="px-3 py-1 text-xs">{t}</Chip>
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
                className="rounded-2xl border-[1.5px] border-brand/28 dark:border-mint/20 bg-brand/[0.04] dark:bg-mint/[0.04] p-6 shadow-[0_8px_32px_-8px_rgba(56,81,68,0.18)] md:p-7"
            >
                <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/20 dark:border-mint/20 bg-brand/10 dark:bg-mint/10 px-3 py-1 text-xs font-semibold text-brand dark:text-mint">
                        <Star size={12} className="fill-current" />
                        Featured
                    </span>
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-brand/20 dark:border-mint/20 bg-brand/[0.07] dark:bg-mint/[0.05] px-3.5 py-1.5 text-[13px] font-medium text-brand dark:text-mint/80 transition-colors hover:bg-brand/15 dark:hover:bg-mint/10"
                    >
                        <Github size={14} />
                        GitHub
                        <ArrowUpRight size={13} />
                    </a>
                </div>

                <h3 className="mt-5 text-xl font-bold text-ink dark:text-surface md:text-2xl">
                    {project.title}
                </h3>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-neutral-600 dark:text-mint/60">
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
            className="group flex h-full flex-col rounded-2xl border border-brand/14 dark:border-mint/10 bg-brand/[0.03] dark:bg-mint/[0.03] p-5 transition-colors hover:border-brand/25 dark:hover:border-mint/20 hover:bg-brand/[0.06] dark:hover:bg-mint/[0.06]"
        >
            <div className="flex items-start justify-between gap-4">
                <h3 className="text-base font-bold text-ink dark:text-surface">
                    {project.title}
                </h3>
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-brand/15 dark:border-mint/15 bg-brand/[0.07] dark:bg-mint/[0.05] text-brand dark:text-mint/80 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    <ArrowUpRight size={14} />
                </span>
            </div>
            <p className="mt-2 flex-1 text-[13px] leading-relaxed text-neutral-600 dark:text-mint/60">
                {project.description}
            </p>
            <Tags tags={project.tags} />
        </motion.a>
    );
}
