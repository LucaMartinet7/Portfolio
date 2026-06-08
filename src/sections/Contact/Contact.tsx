import { SECTION_IDS } from "@/lib/anchors.ts";
import { motion } from "motion/react";
import { Github, Linkedin, ArrowRight } from "lucide-react";

const EMAIL = "lucamartinetwork@gmail.com";

export default function Contact() {
    return (
        <section
            id={SECTION_IDS.CONTACT}
            className="relative overflow-hidden border-t border-[#385144]/10 dark:border-[#C2D8C4]/10 px-6 py-20 md:py-28"
        >
            <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-0 h-[440px] w-[600px] -translate-x-1/2 rounded-full bg-[#385144]/[0.05] dark:bg-[#C2D8C4]/[0.04] blur-3xl"
            />

            <motion.div
                className="relative mx-auto flex max-w-2xl flex-col items-center text-center"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <h2 className="text-4xl font-extrabold tracking-tight text-[#111] dark:text-[#F8F5F2] md:text-6xl">
                    Let's work together.
                </h2>
                <p className="mt-4 text-base text-neutral-500 dark:text-[#C2D8C4]/50 md:text-lg">
                    Open to internships, collaborations, and interesting
                    problems.
                </p>

                <motion.a
                    href={`mailto:${EMAIL}`}
                    whileHover={{ scale: 1.03, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#385144] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_32px_-8px_rgba(56,81,68,0.5)] transition-colors duration-200 hover:bg-[#1f3329] dark:bg-[#C2D8C4] dark:text-[#222222] dark:hover:bg-[#aecbb1] touch-manipulation"
                >
                    {EMAIL}
                    <ArrowRight size={15} />
                </motion.a>

                <div className="mt-6 flex items-center gap-3">
                    <a
                        href="https://github.com/lucamartinet7"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-[#385144]/20 dark:border-[#C2D8C4]/20 bg-[#385144]/[0.07] dark:bg-[#C2D8C4]/[0.05] px-4 py-2 text-[13px] font-medium text-[#385144] dark:text-[#C2D8C4]/70 transition-colors hover:bg-[#385144]/15 dark:hover:bg-[#C2D8C4]/10 hover:text-[#1f3329] dark:hover:text-[#C2D8C4]"
                    >
                        <Github size={14} />
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/luca-martinet/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-[#385144]/20 dark:border-[#C2D8C4]/20 bg-[#385144]/[0.07] dark:bg-[#C2D8C4]/[0.05] px-4 py-2 text-[13px] font-medium text-[#385144] dark:text-[#C2D8C4]/70 transition-colors hover:bg-[#385144]/15 dark:hover:bg-[#C2D8C4]/10 hover:text-[#1f3329] dark:hover:text-[#C2D8C4]"
                    >
                        <Linkedin size={14} />
                        LinkedIn
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
