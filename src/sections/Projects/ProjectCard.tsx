import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import type { Project } from "./projects.data";

type Props = { project: Project };

export default function ProjectCard({ project }: Props) {
    return (
        <article className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition">
            <div className="flex items-start justify-between gap-6">
                <h3 className="text-lg font-medium">{project.title}</h3>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-white/60">
                {project.description}
            </p>

            {!!project.tags?.length && (
                <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((t) => (
                        <li
                            key={t}
                            className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-white/60"
                        >
                            {t}
                        </li>
                    ))}
                </ul>
            )}

            <div className="mt-6 flex items-center gap-4">
                <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
                >
                    <BsGithub />
                    GitHub
                </a>

                {project.demoUrl && (
                    <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white"
                    >
                        <CgWebsite />
                        Demo
                    </a>
                )}
            </div>
        </article>
    );
}
