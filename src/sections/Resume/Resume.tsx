import { SECTION_IDS } from "@/lib/anchors.ts";
import { motion } from "motion/react";
import { Download, ExternalLink } from "lucide-react";

export default function Resume() {
    const cvPath = "/CV_Luca_Martinet_2026.pdf";

    return (
        <section
            id={SECTION_IDS.RESUME}
            className="relative overflow-hidden px-6 py-16 md:py-32"
        >
            <div className="relative mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
                >
                    <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-[#385144]/65 dark:text-[#C2D8C4]/50">
                            Résumé
                        </p>
                        <div className="mt-1.5 h-[2px] w-11 rounded-full bg-[#385144]/30 dark:bg-[#C2D8C4]/25" />
                        <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[#111] dark:text-[#F8F5F2] md:text-5xl">
                            My CV
                        </h2>
                    </div>

                    <motion.a
                        href={cvPath}
                        download
                        whileHover={{ scale: 1.03, y: -1 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-[#385144] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_32px_-8px_rgba(56,81,68,0.5)] transition-colors duration-200 hover:bg-[#1f3329] dark:bg-[#C2D8C4] dark:text-[#222222] dark:hover:bg-[#aecbb1] touch-manipulation sm:self-auto"
                    >
                        <Download size={15} />
                        Download CV (PDF)
                    </motion.a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                    className="mt-10 overflow-hidden rounded-2xl border border-[#385144]/15 dark:border-[#C2D8C4]/10 bg-white dark:bg-[#262626] shadow-[0_8px_32px_-12px_rgba(56,81,68,0.18)]"
                >
                    <iframe
                        src={cvPath}
                        className="h-[80vh] w-full border-none md:min-h-[135vh]"
                        title="CV - Luca Martinet"
                    />
                    <div className="border-t border-[#385144]/10 dark:border-[#C2D8C4]/10 p-4 text-center">
                        <a
                            href={cvPath}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#385144]/70 dark:text-[#C2D8C4]/50 transition-colors hover:text-[#385144] dark:hover:text-[#C2D8C4]"
                        >
                            <ExternalLink size={14} />
                            Open PDF in new tab
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
