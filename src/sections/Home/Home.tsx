import Type from "./Type";
import { SECTION_IDS } from "@/lib/anchors.ts";

export default function Home() {
    return (
        <section
            id={SECTION_IDS.HOME}
            className="flex items-center justify-center px-6 py-16 md:py-32"
        >
            <div className="max-w-5xl w-full">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
                    {/* Left side - Text content */}
                    <div className="flex-1">
                        <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                            Hello, I'm{" "}
                            <span className="text-blue-500">Luca Martinet</span>
                        </h1>

                        <div className="mt-6 text-lg md:text-xl text-neutral-300">
                            <Type />
                        </div>

                        <p className="mt-8 text-base md:text-lg text-neutral-500 leading-relaxed">
                            I'm a software developer and student focused on
                            building modern, reliable systems. I enjoy working
                            close to the metal as much as designing clean
                            user-facing experiences.
                        </p>
                    </div>

                    {/* Right side - Profile image with links */}
                    <div className="flex flex-col items-center gap-6 md:gap-8">
                        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                            <img
                                src="/photos/Hero/Hero.jpg"
                                alt="Luca Martinet"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="flex flex-col items-center gap-4">
                            <a
                                href={`#${SECTION_IDS.PROJECTS}`}
                                className="text-sm font-medium underline underline-offset-4 py-2 touch-manipulation"
                            >
                                View projects
                            </a>
                            <div className="flex gap-6">
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
                    </div>
                </div>
            </div>
        </section>
    );
}
