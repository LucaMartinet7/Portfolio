import { Sun, Moon } from "lucide-react";
import { motion } from "motion/react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { useTheme } from "@/contexts/ThemeContext";

const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
    { name: "Resume", link: "#resume" },
];

export default function TopNav() {
    const { theme, toggle } = useTheme();

    return (
        <>
            <FloatingNav navItems={navItems} />

            <motion.button
                onClick={toggle}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="fixed top-6 right-6 z-[5001] p-2 rounded-full border border-brand/30 dark:border-mint/20 bg-surface/80 dark:bg-surface-dark/80 backdrop-blur-sm text-brand dark:text-mint/70 hover:text-brand-dark dark:hover:text-mint transition-colors duration-200 shadow-sm"
                aria-label="Toggle theme"
            >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </motion.button>
        </>
    );
}
