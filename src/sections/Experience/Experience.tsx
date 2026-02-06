export default function Experience() {
    return (
        <section id="experience" className="px-6 py-32">
            <div className="w-full max-w-6xl mx-auto">
                <h2 className="text-3xl font-semibold mb-12">Experience</h2>

                <div className="space-y-10">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                        <p className="text-sm text-white/50">2024 — Present</p>
                        <h3 className="mt-2 text-xl font-medium">Epitech — 3rd Year</h3>
                        <p className="mt-3 text-white/60">
                            Systems programming, networking, and large-scale projects.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                        <p className="text-sm text-white/50">Jul 2023 — Dec 2023</p>
                        <h3 className="mt-2 text-xl font-medium">
                            University of Geneva — Internship
                        </h3>
                        <p className="mt-3 text-white/60">
                            Confluence → SharePoint migration, internal tooling, and support.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                        <p className="text-sm text-white/50">2022 — 2023</p>
                        <h3 className="mt-2 text-xl font-medium">Epitech — 1st Year</h3>
                        <p className="mt-3 text-white/60">
                            Low-level C projects (Minishell, RPG), CS fundamentals.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
