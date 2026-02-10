import { useState } from "react";
import {
    MobileNav,
    MobileNavHeader,
    MobileNavMenu,
    MobileNavToggle,
    NavBody,
    NavItems,
    Navbar,
} from "@/components/ui/resizable-navbar";

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

    return (
        <Navbar className="fixed top-4">
            <NavBody>
                <NavItems items={navItems} />
            </NavBody>

            <MobileNav>
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
                            className="w-full text-base font-medium text-neutral-700 dark:text-neutral-200 py-3 px-2 hover:text-neutral-900 dark:hover:text-white transition-colors touch-manipulation"
                        >
                            {item.name}
                        </a>
                    ))}
                </MobileNavMenu>
            </MobileNav>
        </Navbar>
    );
}
