import { projects, site, type Project } from "@/content";
import { Arrow, Marker, Section, textLink } from "@/components/ui";

/**
 * Featured project as a full-width block, the rest as a 2x2 grid of
 * hairline-bordered blocks. Each block is one link (the title), stretched
 * over the block with a pseudo-element, so the whole block is clickable
 * without nesting interactive elements.
 */
function ProjectBlock({
    project,
    featured = false,
}: {
    project: Project;
    featured?: boolean;
}) {
    return (
        <article
            className={`group relative flex h-full flex-col border p-5 transition-colors hover:border-ink sm:p-6 ${
                featured
                    ? "border-hairline-strong bg-surface-card lg:grid lg:grid-cols-2 lg:content-center lg:gap-x-8"
                    : "border-hairline"
            }`}
        >
            {project.image && (
                <img
                    src={project.image.src}
                    alt={project.image.alt}
                    width={project.image.width}
                    height={project.image.height}
                    loading="lazy"
                    decoding="async"
                    className={`mb-5 aspect-video w-full border border-hairline object-cover ${featured ? "lg:row-span-4 lg:mb-0" : ""}`}
                />
            )}
            <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-bold">
                    <Marker>{featured ? "*" : "+"}</Marker>{" "}
                    <a
                        href={project.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="decoration-2 underline-offset-4 group-hover:underline after:absolute after:inset-0 focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-ink"
                    >
                        {project.title}
                        <span className="sr-only"> (source on GitHub)</span>
                    </a>
                </h3>
                <span
                    aria-hidden="true"
                    className="inline-flex shrink-0 items-center text-sm text-mute transition-colors group-hover:text-ink"
                >
                    Source
                    <Arrow />
                </span>
            </div>
            <p className={`mt-3 ${featured ? "max-w-[70ch]" : ""}`}>
                {project.description}
            </p>
            <ul
                aria-label="Technologies"
                className="mt-auto flex flex-wrap gap-x-3 pt-4 text-sm leading-7 text-mute"
            >
                {project.tags.map((tag) => (
                    <li key={tag} translate="no">
                        [{tag}]
                    </li>
                ))}
            </ul>
            {project.live && (
                <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${textLink} relative mt-2 self-start text-sm`}
                >
                    Live Site
                    <Arrow />
                </a>
            )}
        </article>
    );
}

export default function Projects() {
    const [featured, ...rest] = projects;

    return (
        <Section id="projects" title="Projects">
            <p className="mb-6 text-mute">
                Systems, networking and web tooling.
            </p>
            {featured && <ProjectBlock project={featured} featured />}
            {/* Featured: image above text, side by side from lg. The rest: one
                column on mobile, 2x2 from sm, one cell per project. */}
            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                {rest.map((project) => (
                    <li key={project.title}>
                        <ProjectBlock project={project} />
                    </li>
                ))}
            </ul>
            <p className="mt-6 text-sm leading-7 text-mute">
                More on{" "}
                <a
                    href={site.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={textLink}
                >
                    GitHub
                </a>
                <Arrow />
            </p>
        </Section>
    );
}
