import Type from "./Type";
import { SECTION_IDS } from "@/lib/anchors.ts";
import { motion } from "motion/react";
import { Github, Linkedin, ArrowDown } from "lucide-react";

export default function Home() {
    return (
        <section
            id={SECTION_IDS.HOME}
            className="flex items-center justify-center px-6 py-16 md:py-32"
        >
            <div className="max-w-5xl w-full">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
                    {/* Left side - Text content */}
                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                            Hello, I'm{" "}
                            <span className="text-[#385144] dark:text-[#C2D8C4]">
                                Luca Martinet
                            </span>
                        </h1>

                        <div className="mt-6 text-lg md:text-xl text-neutral-700 dark:text-[#C2D8C4]/80">
                            <Type />
                        </div>

                        <p className="mt-8 text-base md:text-lg text-neutral-600 dark:text-[#C2D8C4]/60 leading-relaxed">
                            I'm a software developer and student focused on
                            building modern, reliable systems. I enjoy working
                            close to the metal as much as designing clean
                            user-facing experiences.
                        </p>

                        <motion.a
                            href={`#${SECTION_IDS.PROJECTS}`}
                            whileHover={{ scale: 1.03, y: -1 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                            }}
                            className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#385144] text-white hover:bg-[#1f3329] dark:bg-[#C2D8C4] dark:text-[#222222] dark:hover:bg-[#aecbb1] text-sm font-semibold transition-colors duration-200 touch-manipulation"
                        >
                            View projects
                            <ArrowDown size={15} />
                        </motion.a>
                    </motion.div>

                    {/* Right side - Profile image with links */}
                    <motion.div
                        className="flex flex-col items-center gap-6 md:gap-8"
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.15,
                            ease: "easeOut",
                        }}
                    >
                        <motion.div
                            className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#385144]/30 dark:border-[#C2D8C4]/20 shadow-2xl cursor-pointer"
                            whileHover={{ scale: 1.07 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                            }}
                        >
                            <img
                                src="/photos/Hero/Hero.jpg"
                                alt="Luca Martinet"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        <div className="flex flex-col items-center gap-4">
                            <div className="flex gap-3">
                                <motion.a
                                    href="https://github.com/lucamartinet7"
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ scale: 1.05, y: -1 }}
                                    whileTap={{ scale: 0.97 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 20,
                                    }}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#385144]/30 dark:border-[#C2D8C4]/20 bg-[#385144]/10 dark:bg-[#C2D8C4]/5 hover:bg-[#385144]/20 dark:hover:bg-[#C2D8C4]/10 text-sm text-[#385144] dark:text-[#C2D8C4]/70 hover:text-[#1f3329] dark:hover:text-[#C2D8C4] transition-colors duration-200 touch-manipulation"
                                >
                                    <Github size={15} />
                                    GitHub
                                </motion.a>
                                <motion.a
                                    href="https://www.linkedin.com/in/luca-martinet/"
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ scale: 1.05, y: -1 }}
                                    whileTap={{ scale: 0.97 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 20,
                                    }}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#385144]/30 dark:border-[#C2D8C4]/20 bg-[#385144]/10 dark:bg-[#C2D8C4]/5 hover:bg-[#385144]/20 dark:hover:bg-[#C2D8C4]/10 text-sm text-[#385144] dark:text-[#C2D8C4]/70 hover:text-[#1f3329] dark:hover:text-[#C2D8C4] transition-colors duration-200 touch-manipulation"
                                >
                                    <Linkedin size={15} />
                                    LinkedIn
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
