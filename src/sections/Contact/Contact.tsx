import { SECTION_IDS } from "@/lib/anchors.ts";
import { motion } from "motion/react";
import { Github, Linkedin, ArrowRight } from "lucide-react";
import {
    Section,
    Chip,
    GlowBlob,
    primaryButtonClass,
} from "@/components/ui/primitives";

const EMAIL = "lucamartinetwork@gmail.com";

export default function Contact() {
    return (
        <Section
            id={SECTION_IDS.CONTACT}
            className="border-t border-brand/10 py-20 dark:border-mint/10 md:py-28"
        >
            <GlowBlob className="left-1/2 top-0 h-[440px] w-[600px] -translate-x-1/2 blur-3xl" />

            <motion.div
                className="relative mx-auto flex max-w-2xl flex-col items-center text-center"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <h2 className="text-4xl font-extrabold tracking-tight text-ink dark:text-surface md:text-6xl">
                    Let's work together.
                </h2>
                <p className="mt-4 text-base text-neutral-500 dark:text-mint/50 md:text-lg">
                    Open to internships, collaborations, and interesting
                    problems.
                </p>

                <motion.a
                    href={`mailto:${EMAIL}`}
                    whileHover={{ scale: 1.03, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`mt-9 ${primaryButtonClass}`}
                >
                    {EMAIL}
                    <ArrowRight size={15} />
                </motion.a>

                <div className="mt-6 flex items-center gap-3">
                    <Chip
                        href="https://github.com/lucamartinet7"
                        icon={<Github size={14} />}
                        className="px-4 py-2 text-[13px]"
                    >
                        GitHub
                    </Chip>
                    <Chip
                        href="https://www.linkedin.com/in/luca-martinet/"
                        icon={<Linkedin size={14} />}
                        className="px-4 py-2 text-[13px]"
                    >
                        LinkedIn
                    </Chip>
                </div>
            </motion.div>
        </Section>
    );
}
