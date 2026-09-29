import { site } from "@/content";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Footer() {
    return (
        <footer className="border-t border-line">
            <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
                <p className="text-sm text-fg-subtle">
                    © {__BUILD_YEAR__} {site.name}.{" "}
                    <a
                        href={site.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-line-strong underline-offset-4 transition-colors hover:text-fg hover:decoration-fg"
                    >
                        Source on GitHub
                    </a>
                </p>
                <ThemeSwitcher />
            </div>
        </footer>
    );
}
