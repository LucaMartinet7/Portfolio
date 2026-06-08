import { SECTION_IDS } from "@/lib/anchors.ts";
import { motion } from "motion/react";
import { Download, ExternalLink } from "lucide-react";
import { Section, Eyebrow, primaryButtonClass } from "@/components/ui/primitives";
import { cn } from "@/lib/utils";

export default function Resume() {
    const cvPath = "/CV_Luca_Martinet_2026.pdf";

    return (
        <Section id={SECTION_IDS.RESUME}>
            <div className="relative mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
                >
                    <div>
                        <Eyebrow>Résumé</Eyebrow>
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
                        className={cn(
                            primaryButtonClass,
                            "shrink-0 self-start px-6 py-3 sm:self-auto"
                        )}
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
                        src={`${cvPath}#toolbar=0&navpanes=0&view=FitH`}
                        className="block w-full border-none"
                        style={{ aspectRatio: "595.5 / 842.25" }}
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
        </Section>
    );
}
