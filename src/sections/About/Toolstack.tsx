import { VscVscode } from "react-icons/vsc";
import { SiLinux, SiDocker } from "react-icons/si";
import { FaTrello, FaWindows, FaApple } from "react-icons/fa";
import { motion } from "motion/react";

const items = [
    { label: "Linux", icon: <SiLinux /> },
    { label: "VS Code", icon: <VscVscode /> },
    { label: "Docker", icon: <SiDocker /> },
    { label: "Trello", icon: <FaTrello /> },
    { label: "Windows", icon: <FaWindows /> },
    { label: "Mac", icon: <FaApple /> },
];

export default function Toolstack() {
    return (
        <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {items.map((it, idx) => (
                <motion.div
                    key={it.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.3, delay: idx * 0.05, ease: "easeOut" }}
                    whileHover={{ scale: 1.12, color: "rgba(255,255,255,0.9)" }}
                    className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-2xl text-white/70 flex items-center justify-center cursor-default"
                    title={it.label}
                    aria-label={it.label}
                >
                    {it.icon}
                </motion.div>
            ))}
        </div>
    );
}
