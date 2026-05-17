import { useState, useEffect, useRef } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "motion/react";
import {
    MobileNav,
    MobileNavHeader,
    MobileNavMenu,
    MobileNavToggle,
    NavBody,
    NavItems,
    Navbar,
} from "@/components/ui/resizable-navbar";
import { useTheme } from "@/contexts/ThemeContext";

const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
    { name: "Hobbies", link: "#hobbies" },
    { name: "Resume", link: "#resume" },
];

export default function TopNav() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const { theme, toggle } = useTheme();
    const mobileNavRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isNavOpen) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsNavOpen(false);
        };
        const handleOutsideClick = (e: MouseEvent) => {
            if (
                mobileNavRef.current &&
                !mobileNavRef.current.contains(e.target as Node)
            ) {
                setIsNavOpen(false);
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [isNavOpen]);

    return (
        <>
            <Navbar className="fixed top-4">
                <NavBody>
                    <NavItems items={navItems} />
                </NavBody>

                <MobileNav>
                    <div ref={mobileNavRef} className="w-full">
                    <MobileNavHeader>
                        <MobileNavToggle
                            isOpen={isNavOpen}
                            onClick={() => setIsNavOpen((prev) => !prev)}
                        />
                    </MobileNavHeader>
                    <MobileNavMenu isOpen={isNavOpen}>
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.link}
                                onClick={() => setIsNavOpen(false)}
                                className="w-full text-base font-medium text-[#385144] dark:text-[#C2D8C4]/70 hover:text-[#1f3329] dark:hover:text-[#C2D8C4] py-3 px-2 transition-colors touch-manipulation"
                            >
                                {item.name}
                            </a>
                        ))}
                    </MobileNavMenu>
                    </div>
                </MobileNav>
            </Navbar>

            {/* Theme toggle — fixed independently so it's never affected by navbar resize */}
            <motion.button
                onClick={toggle}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="fixed top-6 right-6 z-[70] p-2 rounded-full border border-[#385144]/30 dark:border-[#C2D8C4]/20 bg-[#F8F5F2]/80 dark:bg-[#222222]/80 backdrop-blur-sm text-[#385144] dark:text-[#C2D8C4]/70 hover:text-[#1f3329] dark:hover:text-[#C2D8C4] transition-colors duration-200 shadow-sm"
                aria-label="Toggle theme"
            >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </motion.button>
        </>
    );
}
