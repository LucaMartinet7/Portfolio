import { projects, site } from "@/content";
import { Arrow, Marker, Section, textLink } from "@/components/ui";

/**
 * Projects as list rows. Each row is one link (the title), stretched over the
 * whole row with a pseudo-element, so the row is clickable without nesting
 * interactive elements. A live-site link, when present, sits above it.
 */
export default function Projects() {
    return (
        <Section id="projects" title="Projects">
            <p className="mb-6 text-mute">
                Systems, networking and web tooling.
            </p>
            <ul className="divide-y divide-hairline border-b border-hairline">
                {projects.map((project, index) => (
                    <li key={project.title} className="group relative py-5">
                        <div className="flex items-baseline justify-between gap-4">
                            <h3 className="font-bold">
                                <Marker>{index === 0 ? "*" : "+"}</Marker>{" "}
                                <a
                                    href={project.source}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="decoration-2 underline-offset-4 group-hover:underline after:absolute after:inset-0 focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-ink"
                                >
                                    {project.title}
                                    <span className="sr-only">
                                        {" "}
                                        (source on GitHub)
                                    </span>
                                </a>
                            </h3>
                            <span
                                aria-hidden="true"
                                className="shrink-0 text-sm text-mute transition-colors group-hover:text-ink"
                            >
                                source{" ->"}
                            </span>
                        </div>
                        {/* Indented as one block so the 4ch indent is measured
                            in the body font, not in each child's size. */}
                        <div className="pl-[4ch]">
                            <p className="mt-2 max-w-[70ch]">
                                {project.description}
                            </p>
                            <ul
                                aria-label="Technologies"
                                className="mt-2 flex flex-wrap gap-x-3 text-sm leading-7 text-mute"
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
                                    className={`${textLink} relative mt-2 inline-block text-sm`}
                                >
                                    Live site
                                    <Arrow />
                                </a>
                            )}
                        </div>
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
