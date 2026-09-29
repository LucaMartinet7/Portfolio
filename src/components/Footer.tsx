import { site } from "@/content";
import ThemeSwitcher from "./ThemeSwitcher";

const links = [
    { label: "GitHub", href: site.github, external: true },
    { label: "LinkedIn", href: site.linkedin, external: true },
    { label: "Email", href: `mailto:${site.email}`, external: false },
    { label: "Source", href: site.repo, external: true },
];

export default function Footer() {
    return (
        <footer className="border-t border-hairline">
            <div className="mx-auto max-w-240 px-4 sm:px-6">
                <ul className="grid grid-cols-2 border-b border-hairline sm:grid-cols-4 sm:divide-x sm:divide-hairline">
                    {links.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                {...(link.external && {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                })}
                                className="block py-4 text-center text-sm leading-7 text-mute transition-colors hover:bg-surface-soft hover:text-ink"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="flex flex-col gap-2 py-6 text-sm leading-7 text-mute sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {__BUILD_YEAR__} {site.name}
                    </p>
                    <ThemeSwitcher />
                </div>
            </div>
        </footer>
    );
}
