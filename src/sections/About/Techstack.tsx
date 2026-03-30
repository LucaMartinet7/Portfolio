import {
    SiC,
    SiFlutter,
    SiNextdotjs,
    SiPostgresql,
    SiTypescript,
} from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";
import {
    DiJavascript1,
    DiNodejs,
    DiReact,
    DiPython,
    DiGit,
    DiMysql,
    DiHaskell,
    DiJava,
} from "react-icons/di";
import { motion } from "motion/react";

const items = [
    { label: "C", icon: <SiC /> },
    { label: "C++", icon: <CgCPlusPlus /> },
    { label: "JavaScript", icon: <DiJavascript1 /> },
    { label: "TypeScript", icon: <SiTypescript /> },
    { label: "Java", icon: <DiJava /> },
    { label: "Node.js", icon: <DiNodejs /> },
    { label: "React", icon: <DiReact /> },
    { label: "Next.js", icon: <SiNextdotjs /> },
    { label: "Git", icon: <DiGit /> },
    { label: "PostgreSQL", icon: <SiPostgresql /> },
    { label: "Python", icon: <DiPython /> },
    { label: "MySQL", icon: <DiMysql /> },
    { label: "Flutter", icon: <SiFlutter /> },
    { label: "Haskell", icon: <DiHaskell /> },
];

export default function Techstack() {
    return (
        <div className="mt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {items.map((it, idx) => (
                <motion.div
                    key={it.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.2, delay: idx * 0.02, ease: "easeOut" }}
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
