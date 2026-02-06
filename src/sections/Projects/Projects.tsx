import ProjectCard from "./ProjectCard";
import { projects } from "./projects.data";

export default function Projects() {
    return (
        <section id="projects" className="px-6 py-32">
            <div className="mx-auto max-w-6xl">
                <header className="max-w-2xl">
                    <h2 className="text-3xl font-semibold">
                        Selected <span className="text-white/60">Work</span>
                    </h2>
                    <p className="mt-3 text-white/60">
                        A few projects I’ve built recently—systems work, networking, and web tooling.
                    </p>
                </header>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((p) => (
                        <ProjectCard key={p.title} project={p} />
                    ))}
                </div>
            </div>
        </section>
    );
}
