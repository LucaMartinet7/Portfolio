import { site } from "@/content";
import { Section, buttonPrimary, buttonSecondary } from "@/components/ui";
import { DownloadSimple, FilePdf } from "@/components/icons";

export default function Resume() {
    return (
        <Section id="resume" title="Resume">
            <div className="flex flex-col gap-6 rounded-xl border border-line bg-surface p-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                    <span className="grid size-12 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                        <FilePdf size={24} />
                    </span>
                    <div>
                        <p className="font-medium text-fg">{site.cv.label}</p>
                        <p className="text-sm text-fg-subtle">{site.cv.meta}</p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-3">
                    <a
                        href={site.cv.href}
                        target="_blank"
                        rel="noopener"
                        className={buttonSecondary}
                    >
                        Open
                    </a>
                    <a href={site.cv.href} download className={buttonPrimary}>
                        <DownloadSimple size={18} />
                        Download PDF
                    </a>
                </div>
            </div>
        </Section>
    );
}
