import { projects, site, type Project } from "@/content";
import { Section, Tag, textLink } from "@/components/ui";
import { ArrowUpRight } from "@/components/icons";

/**
 * Each card is one link (the title), stretched over the whole card with a
 * pseudo-element, so the card is clickable without nesting interactive
 * elements. A live-site link, when present, sits above that layer.
 */
function ProjectCard({
    project,
    featured = false,
}: {
    project: Project;
    featured?: boolean;
}) {
    return (
        <article
            className={`group relative flex flex-col rounded-xl border p-6 transition-colors ${
                featured
                    ? "border-accent/30 bg-accent/[0.06] hover:border-accent/60 sm:p-8"
                    : "h-full border-line bg-surface hover:border-line-strong"
            }`}
        >
            <div className="flex items-start justify-between gap-4">
                <h3
                    className={`font-semibold tracking-tight text-fg ${featured ? "text-2xl" : "text-lg"}`}
                >
                    <a
                        href={project.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="after:absolute after:inset-0 after:rounded-xl focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-accent"
                    >
                        {project.title}
                        <span className="sr-only"> (source on GitHub)</span>
                    </a>
                </h3>
                <ArrowUpRight
                    size={18}
                    className="mt-1 shrink-0 text-fg-subtle transition-colors group-hover:text-fg"
                />
            </div>
            <p
                className={`mt-3 text-fg-muted ${featured ? "max-w-[60ch] text-lg" : ""}`}
            >
                {project.description}
            </p>
            <ul className="mt-auto flex flex-wrap gap-1.5 pt-6">
                {project.tags.map((tag) => (
                    <li key={tag}>
                        <Tag>{tag}</Tag>
                    </li>
                ))}
            </ul>
            {project.live && (
                <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${textLink} relative mt-4 self-start text-sm`}
                >
                    Live site
                    <ArrowUpRight size={14} />
                </a>
            )}
        </article>
    );
}

export default function Projects() {
    const [featured, ...rest] = projects;

    return (
        <Section
            id="projects"
            title="Projects"
            intro="Systems, networking and web tooling."
        >
            {featured && <ProjectCard project={featured} featured />}
            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                {rest.map((project) => (
                    <li key={project.title}>
                        <ProjectCard project={project} />
                    </li>
                ))}
            </ul>
            <p className="mt-8 text-sm text-fg-muted">
                More on{" "}
                <a
                    href={site.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={textLink}
                >
                    GitHub
                    <ArrowUpRight size={14} />
                </a>
            </p>
        </Section>
    );
}
