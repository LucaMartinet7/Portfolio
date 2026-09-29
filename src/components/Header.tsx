import type { MouseEvent } from "react";
import { sections, site } from "@/content";
import { useActiveSection } from "@/lib/useActiveSection";
import { List } from "./icons";

const ids = sections.map((section) => section.id);

const linkClass =
    "block rounded-md px-3 py-2 text-sm text-fg-muted transition-colors hover:text-fg aria-[current=location]:text-fg";

export default function Header() {
    const active = useActiveSection(ids);

    const links = sections.map((section) => (
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
        <header className="sticky top-0 z-20 border-b border-line bg-bg">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
                <a
                    href="#top"
                    className="font-semibold tracking-tight text-fg"
                    translate="no"
                >
                    {site.name}
                </a>

                <nav aria-label="Primary" className="hidden md:block">
                    <ul className="-mr-3 flex items-center gap-1">{links}</ul>
                </nav>

                {/* Native popover: opens, closes on Esc and outside clicks
                    without any JavaScript. */}
                <button
                    type="button"
                    popoverTarget="mobile-menu"
                    className="-mr-2 inline-flex size-11 items-center justify-center rounded-lg text-fg-muted transition-colors hover:text-fg md:hidden"
                >
                    <List size={22} />
                    <span className="sr-only">Menu</span>
                </button>
            </div>

            <nav
                id="mobile-menu"
                popover="auto"
                aria-label="Menu"
                onClick={closeMenu}
                className="inset-x-4 top-18 bottom-auto m-0 h-auto w-auto rounded-xl border border-line bg-surface p-2 text-fg shadow-[0_12px_40px_-12px_rgb(20_24_21/0.25)] md:hidden"
            >
                <ul className="grid">{links}</ul>
            </nav>
        </header>
    );
}
