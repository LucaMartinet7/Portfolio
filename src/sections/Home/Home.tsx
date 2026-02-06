import Type from "./Type";

export default function Home() {
    return (
        <section id="home" className="flex items-center justify-center px-6 py-32">
            <div className="max-w-5xl w-full">
                <p className="text-sm uppercase tracking-widest text-neutral-500">
                    Hello
                </p>

                <h1 className="mt-4 text-5xl md:text-6xl font-semibold leading-tight">
                    I’m Luca Martinet
                </h1>

                <div className="mt-6 text-xl text-neutral-400">
                    <Type />
                </div>

                <p className="mt-8 max-w-2xl text-lg text-neutral-500 leading-relaxed">
                    I’m a software developer and student focused on building modern,
                    reliable systems. I enjoy working close to the metal as much as
                    designing clean user-facing experiences.
                </p>

                <div className="mt-10 flex gap-6">
                    <a
                        href="#projects"
                        className="text-sm font-medium underline underline-offset-4"
                    >
                        View projects
                    </a>
                    <a
                        href="https://github.com/lucamartinet7"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-neutral-500 hover:text-neutral-300"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/luca-martinet/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-neutral-500 hover:text-neutral-300"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
}
