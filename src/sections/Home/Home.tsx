import { SECTION_IDS } from "@/lib/anchors.ts";
import { motion } from "motion/react";
import { Github, Linkedin, ArrowDown } from "lucide-react";
import {
    Section,
    PulseDot,
    Chip,
    GlowBlob,
    primaryButtonClass,
} from "@/components/ui/primitives";

const stats = [
    { value: "C / C++", label: "Primary lang" },
    { value: "Epitech", label: "School" },
    { value: "2026", label: "Graduating" },
];

export default function Home() {
    return (
        <Section id={SECTION_IDS.HOME} className="py-24 md:py-32">
            <GlowBlob className="-right-32 -top-40 h-[520px] w-[520px]" />
            <GlowBlob className="-left-40 top-1/2 h-[320px] w-[320px]" />

            <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
                {/* Left: text content */}
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {/* Eyebrow */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#385144]/20 dark:border-[#C2D8C4]/20 bg-[#385144]/[0.08] dark:bg-[#C2D8C4]/[0.08] px-3.5 py-1.5">
                        <PulseDot />
                        <span className="text-xs font-semibold text-[#385144] dark:text-[#C2D8C4]">
                            Open to opportunities
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-[#111] dark:text-[#F8F5F2] sm:text-6xl lg:text-7xl">
                        Building
                        <br />
                        things that
                        <br />
                        <span className="text-[#385144] dark:text-[#C2D8C4]">
                            matter.
                        </span>
                    </h1>
                    <div className="mt-5 h-[5px] w-56 rounded-full bg-[#385144]/20 dark:bg-[#C2D8C4]/20" />

                    {/* Subtitle */}
                    <p className="mt-6 max-w-md text-base leading-7 text-neutral-600 dark:text-[#C2D8C4]/60 md:text-lg">
                        Software developer &amp; student at Epitech.
                        <br />
                        Systems work, networking, clean interfaces.
                    </p>

                    {/* CTAs */}
                    <div className="mt-9 flex flex-wrap items-center gap-3">
                        <motion.a
                            href={`#${SECTION_IDS.PROJECTS}`}
                            whileHover={{ scale: 1.03, y: -1 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className={primaryButtonClass}
                        >
                            View projects
                            <ArrowDown size={15} />
                        </motion.a>
                        <motion.a
                            href={`#${SECTION_IDS.CONTACT}`}
                            whileHover={{ scale: 1.03, y: -1 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="inline-flex items-center rounded-full border-[1.5px] border-[#385144]/35 dark:border-[#C2D8C4]/25 px-7 py-3.5 text-sm font-semibold text-[#385144] dark:text-[#C2D8C4] transition-colors duration-200 hover:bg-[#385144]/10 dark:hover:bg-[#C2D8C4]/10 touch-manipulation"
                        >
                            Get in touch
                        </motion.a>
                    </div>

                    {/* Find me on */}
                    <div className="mt-8 flex flex-wrap items-center gap-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 dark:text-[#C2D8C4]/30">
                            Find me on
                        </span>
                        <Chip
                            href="https://github.com/lucamartinet7"
                            icon={<Github size={13} />}
                            className="px-3 py-1.5 text-xs"
                        >
                            GitHub
                        </Chip>
                        <Chip
                            href="https://www.linkedin.com/in/luca-martinet/"
                            icon={<Linkedin size={13} />}
                            className="px-3 py-1.5 text-xs"
                        >
                            LinkedIn
                        </Chip>
                    </div>
                </motion.div>

                {/* Right: avatar with floating stat cards */}
                <motion.div
                    className="relative mx-auto flex w-full max-w-sm items-center justify-center md:justify-end"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                >
                    <div className="relative">
                        <div className="h-64 w-64 overflow-hidden rounded-full border-4 border-[#385144]/15 dark:border-[#C2D8C4]/15 shadow-[0_32px_80px_-20px_rgba(56,81,68,0.4)] sm:h-72 sm:w-72">
                            <img
                                src="/photos/Hero/Hero.jpg"
                                alt="Luca Martinet"
                                className="h-full w-full object-cover"
                                fetchPriority="high"
                                width={288}
                                height={288}
                            />
                        </div>

                        {/* Floating stat cards */}
                        <div className="absolute -left-6 top-2 flex flex-col gap-3 sm:-left-16">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={stat.value}
                                    initial={{ opacity: 0, x: -16 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.4 + i * 0.12,
                                        ease: "easeOut",
                                    }}
                                    className="w-[150px] rounded-xl bg-white dark:bg-[#2a2a2a] px-4 py-2.5 shadow-[0_3px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_3px_20px_rgba(0,0,0,0.4)]"
                                >
                                    <p className="text-base font-bold text-[#385144] dark:text-[#C2D8C4]">
                                        {stat.value}
                                    </p>
                                    <p className="text-[11px] text-neutral-400 dark:text-[#C2D8C4]/40">
                                        {stat.label}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
