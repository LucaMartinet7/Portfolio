import { SECTION_IDS } from "@/lib/anchors.ts";

export default function Resume() {
    const cvPath = "/CV_Luca_Martinet_2026.pdf";

    return (
        <section id={SECTION_IDS.RESUME} className="px-6 py-16 md:py-32">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
                    <h2 className="text-3xl font-semibold">CV</h2>
                    <a
                        href={cvPath}
                        download
                        className="px-4 py-2 text-sm font-medium bg-neutral-100 dark:bg-white/10 hover:bg-neutral-200 dark:hover:bg-white/20 border border-neutral-300 dark:border-white/20 rounded-lg transition-colors touch-manipulation"
                    >
                        Download CV (PDF)
                    </a>
                </div>

                <div className="rounded-2xl border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-white/[0.03] overflow-hidden">
                    <iframe
                        src={cvPath}
                        className="w-full h-[80vh] md:min-h-[135vh] border-none"
                        title="CV - Luca Martinet"
                    />
                    <div className="p-4 text-center text-sm text-neutral-500 dark:text-neutral-400 border-t border-neutral-200 dark:border-white/10">
                        <a
                            href={cvPath}
                            target="_blank"
                            rel="noreferrer"
                            className="underline hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
                        >
                            Open PDF in new tab
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
