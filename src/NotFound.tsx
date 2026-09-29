import { site } from "@/content";
import { buttonPrimary } from "@/components/ui";

/** Static 404 page. Rendered at build time and shipped without JavaScript. */
export default function NotFound() {
    return (
        <>
            <header className="border-b border-hairline">
                <div className="mx-auto flex h-14 max-w-240 items-center px-4 sm:px-6">
                    <a href="/" translate="no" className="font-bold text-ink">
                        {site.name}
                    </a>
                </div>
            </header>
            <main className="mx-auto max-w-240 px-4 py-16 sm:px-6 md:py-24">
                <p className="text-mute">error 404</p>
                <h1 className="mt-2 font-bold">Page not found</h1>
                <p className="mt-4 max-w-[50ch]">
                    This page doesn’t exist or has moved. Everything on the site
                    lives on the homepage.
                </p>
                <a href="/" className={`${buttonPrimary} mt-8`}>
                    <span aria-hidden="true">{"<- "}</span>
                    Back to the homepage
                </a>
            </main>
        </>
    );
}
