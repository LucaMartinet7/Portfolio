import { useRef, useState, type KeyboardEvent } from "react";
import { site } from "@/content";
import { Section, buttonPrimary, buttonSecondary } from "@/components/ui";
import CopyButton from "@/components/CopyButton";

const url = `${site.url}${site.cv.href}`;
const commands = [
    { id: "curl", command: `curl -O ${url}` },
    { id: "wget", command: `wget ${url}` },
];

/** Tabbed download command, following the WAI-ARIA tabs pattern. */
function CommandTabs() {
    const [active, setActive] = useState(0);
    const tabs = useRef<(HTMLButtonElement | null)[]>([]);
    const current = commands[active]!;

    const onKeyDown = (event: KeyboardEvent) => {
        const delta =
            event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
        if (!delta) return;
        event.preventDefault();
        const next = (active + delta + commands.length) % commands.length;
        setActive(next);
        tabs.current[next]?.focus();
    };

    return (
        <div>
            <div
                role="tablist"
                aria-label="Download with"
                onKeyDown={onKeyDown}
                className="flex border-b border-hairline-strong"
            >
                {commands.map((tab, index) => (
                    <button
                        key={tab.id}
                        ref={(element) => {
                            tabs.current[index] = element;
                        }}
                        type="button"
                        role="tab"
                        id={`cv-tab-${tab.id}`}
                        aria-selected={index === active}
                        aria-controls="cv-command"
                        tabIndex={index === active ? 0 : -1}
                        onClick={() => setActive(index)}
                        className="-mb-px border-b-2 border-transparent px-4 py-2 font-medium text-mute transition-colors hover:text-ink aria-selected:border-hairline-strong aria-selected:text-ink"
                    >
                        {tab.id}
                    </button>
                ))}
            </div>
            <div
                role="tabpanel"
                id="cv-command"
                aria-labelledby={`cv-tab-${current.id}`}
                className="mt-3 flex items-center justify-between gap-3 rounded-sm bg-surface-card py-2 pr-2 pl-4"
            >
                <code translate="no" className="min-w-0 break-all text-ink">
                    {current.command}
                </code>
                <CopyButton text={current.command} />
            </div>
        </div>
    );
}

export default function Resume() {
    return (
        <Section id="resume" title="Resume">
            <p className="mb-6 text-mute">{site.cv.meta}.</p>
            <div className="max-w-3xl">
                <CommandTabs />
                <div className="mt-6 flex flex-wrap gap-3">
                    <a href={site.cv.href} download className={buttonPrimary}>
                        Download PDF
                    </a>
                    <a
                        href={site.cv.href}
                        target="_blank"
                        rel="noopener"
                        className={buttonSecondary}
                    >
                        Open in browser
                    </a>
                </div>
            </div>
        </Section>
    );
}
