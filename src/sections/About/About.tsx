import AboutCard from "./AboutCard";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import { SECTION_IDS } from "@/lib/anchors.ts";
import { motion } from "motion/react";

export default function About() {
    return (
        <section id={SECTION_IDS.ABOUT} className="px-6 py-16 md:py-32">
            <div className="mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <h2 className="text-3xl font-semibold">
                            About <span className="text-[#385144] dark:text-[#C2D8C4]/60">me</span>
                        </h2>

                        <div className="mt-8">
                            <AboutCard />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                    >
                        <h3 className="text-xl font-medium">
                            Professional skillset
                        </h3>
                        <Techstack />

                        <h3 className="mt-12 text-xl font-medium">
                            Tools I use
                        </h3>
                        <Toolstack />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
