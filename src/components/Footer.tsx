import { SECTION_IDS } from "@/lib/anchors.ts";
import { PulseDot } from "@/components/ui/primitives";

const navLinks = [
    { name: "About", href: `#${SECTION_IDS.ABOUT}` },
    { name: "Experience", href: `#${SECTION_IDS.EXPERIENCE}` },
    { name: "Projects", href: `#${SECTION_IDS.PROJECTS}` },
    { name: "Resume", href: `#${SECTION_IDS.RESUME}` },
];

const contactLinks = [
    { name: "GitHub", href: "https://github.com/lucamartinet7", external: true },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/luca-martinet/",
        external: true,
    },
    { name: "Email", href: "mailto:lucamartinetwork@gmail.com", external: false },
];

export default function Footer() {
    return (
        <footer className="border-t border-white/[0.06] bg-[#151815] px-6 py-12 text-[#949494]">
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-10 md:grid-cols-2">
                    {/* Brand */}
                    <div>
                        <p className="text-2xl font-extrabold tracking-tight">
                            <span className="text-white">Luca</span>{" "}
                            <span className="text-mint">Martinet</span>
                        </p>
                        <p className="mt-3 max-w-xs text-[13px] leading-relaxed">
                            Software developer &amp; student at Epitech.
                            Building from low-level C to full-stack web.
                        </p>
                        <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-mint/20 bg-mint/[0.08] px-3 py-1.5">
                            <PulseDot />
                            <span className="text-xs font-medium text-mint">
                                Open to opportunities
                            </span>
                        </span>
                    </div>

                    {/* Link columns */}
                    <div className="grid grid-cols-2 gap-8 md:justify-items-end">
                        <nav>
                            <p className="text-[10px] font-bold uppercase tracking-wider text-[#6b6b6b]">
                                Navigation
                            </p>
                            <ul className="mt-3 space-y-2.5">
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="text-[13px] transition-colors hover:text-mint"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <nav>
                            <p className="text-[10px] font-bold uppercase tracking-wider text-[#6b6b6b]">
                                Contact
                            </p>
                            <ul className="mt-3 space-y-2.5">
                                {contactLinks.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            target={
                                                link.external
                                                    ? "_blank"
                                                    : undefined
                                            }
                                            rel={
                                                link.external
                                                    ? "noreferrer"
                                                    : undefined
                                            }
                                            className="text-[13px] transition-colors hover:text-mint"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="mt-10 flex flex-col gap-2 border-t border-white/[0.07] pt-6 text-xs text-[#5c5c5c] sm:flex-row sm:items-center sm:justify-between">
                    <p>© 2026 Luca Martinet. All rights reserved.</p>
                    <p className="text-mint/60">
                        Built with React &amp; Tailwind
                    </p>
                </div>
            </div>
        </footer>
    );
}
