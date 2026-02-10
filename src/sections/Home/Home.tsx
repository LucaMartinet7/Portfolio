import Type from "./Type";
import { SECTION_IDS } from "@/lib/anchors.ts";

export default function Home() {
    return (
        <section
            id={SECTION_IDS.HOME}
            className="flex items-center justify-center px-6 py-16 md:py-32"
        >
            <div className="max-w-5xl w-full">
                <p className="text-sm uppercase tracking-widest text-neutral-500">
                    Hello
                </p>

                <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                    I’m Luca Martinet
                </h1>

                <div className="mt-6 text-lg md:text-xl text-neutral-400">
                    <Type />
                </div>

                <p className="mt-8 max-w-2xl text-base md:text-lg text-neutral-500 leading-relaxed">
                    I’m a software developer and student focused on building
                    modern, reliable systems. I enjoy working close to the metal
                    as much as designing clean user-facing experiences.
                </p>

                <div className="mt-10 flex flex-wrap gap-4 md:gap-6">
                    <a
                        href={`#${SECTION_IDS.PROJECTS}`}
                        className="text-sm font-medium underline underline-offset-4 py-2 touch-manipulation"
                    >
                        View projects
                    </a>
                    <a
                        href="https://github.com/lucamartinet7"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-neutral-500 hover:text-neutral-300 py-2 touch-manipulation"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/luca-martinet/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-neutral-500 hover:text-neutral-300 py-2 touch-manipulation"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
}
