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
                    transition={{
                        duration: 0.3,
                        delay: idx * 0.05,
                        ease: "easeOut",
                    }}
                    whileHover={{ scale: 1.12 }}
                    className="icon-tile rounded-xl border border-[#385144]/25 dark:border-[#C2D8C4]/10 bg-[#385144]/8 dark:bg-[#C2D8C4]/[0.03] p-4 text-2xl text-[#2a3d30] dark:text-[#C2D8C4]/60 hover:text-[#1a2b20] dark:hover:text-[#C2D8C4] flex items-center justify-center cursor-default transition-colors duration-150"
                    title={it.label}
                    aria-label={it.label}
                >
                    {it.icon}
                </motion.div>
            ))}
        </div>
    );
}
