import { site } from "@/content";
import { ArrowLeft } from "@/components/icons";
import { buttonPrimary } from "@/components/ui";

/** Static 404 page. Rendered at build time and shipped without JavaScript. */
export default function NotFound() {
    return (
        <>
            <header className="border-b border-line">
                <div className="mx-auto flex h-16 max-w-6xl items-center px-5 sm:px-8">
                    <a
                        href="/"
                        className="font-semibold tracking-tight text-fg"
                        translate="no"
                    >
                        {site.name}
                    </a>
                </div>
            </header>
            <main className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
                <p className="font-mono text-sm text-fg-subtle">404</p>
                <h1 className="mt-3 text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
                    Page not found
                </h1>
                <p className="mt-4 max-w-[45ch] text-lg text-fg-muted">
                    This page doesn't exist or has moved. Everything on the site
                    lives on the homepage.
                </p>
                <a href="/" className={`${buttonPrimary} mt-10`}>
                    <ArrowLeft size={18} />
                    Back to the homepage
                </a>
            </main>
        </>
    );
}
