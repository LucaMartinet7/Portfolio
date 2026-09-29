import type { MouseEvent } from "react";
import { sections, site } from "@/content";
import { useActiveSection } from "@/lib/useActiveSection";
import { buttonPrimary } from "./ui";

// The CV has its own button, so the nav lists the other sections.
const navSections = sections.filter((section) => section.id !== "resume");
const ids = sections.map((section) => section.id);

const linkClass =
    "block px-2 py-1 text-mute transition-colors hover:text-ink aria-[current=location]:text-ink aria-[current=location]:underline aria-[current=location]:decoration-2 aria-[current=location]:underline-offset-8";

export default function Header() {
    const active = useActiveSection(ids);

    const links = navSections.map((section) => (
        <li key={section.id}>
            <a
                href={`#${section.id}`}
                aria-current={active === section.id ? "location" : undefined}
                className={linkClass}
            >
                {section.label}
            </a>
        </li>
    ));

    // Close the mobile menu once a link is chosen.
    const closeMenu = (event: MouseEvent<HTMLElement>) => {
        if ((event.target as HTMLElement).closest("a")) {
            event.currentTarget.hidePopover();
        }
    };

    return (
        <header className="sticky top-0 z-20 border-b border-hairline bg-canvas">
            <div className="mx-auto flex h-14 max-w-240 items-center justify-between gap-4 px-4 sm:px-6">
                <a href="#top" translate="no" className="font-bold text-ink">
                    {site.name}
                </a>

                <div className="flex items-center gap-2 md:gap-4">
                    <nav aria-label="Primary" className="hidden md:block">
                        <ul className="flex items-center gap-2">{links}</ul>
                    </nav>

                    <a
                        href={site.cv.href}
                        download
                        className={`${buttonPrimary} h-8 px-3 sm:px-4`}
                    >
                        <span className="sm:hidden">CV</span>
                        <span className="hidden sm:inline">Download CV</span>
                    </a>

                    {/* Native popover: opens and closes (Esc, outside click)
                        without any JavaScript. */}
                    <button
                        type="button"
                        popoverTarget="mobile-menu"
                        className="-mr-2 inline-flex h-11 items-center px-2 text-ink md:hidden"
                    >
                        [menu]
                    </button>
                </div>
            </div>

            <nav
                id="mobile-menu"
                popover="auto"
                aria-label="Menu"
                onClick={closeMenu}
                className="inset-x-0 top-14 bottom-auto m-0 h-auto w-auto overscroll-contain border-b border-hairline bg-canvas px-2 py-2 text-ink md:hidden"
            >
                <ul className="grid">{links}</ul>
            </nav>
        </header>
    );
}
