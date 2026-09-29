import { useState, type MouseEvent } from "react";
import { experience, type Experience as Entry } from "@/content";
import { Section } from "@/components/ui";
import { Play } from "@/components/icons";
import MediaViewer from "@/components/MediaViewer";

function MediaStrip({ entry }: { entry: Entry }) {
    const [open, setOpen] = useState<number | null>(null);

    // Each thumbnail is a real link to the full file, so it still works
    // without JavaScript; with JavaScript it opens the viewer instead.
    const openViewer = (event: MouseEvent, index: number) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey) return;
        event.preventDefault();
        setOpen(index);
    };

    return (
        <>
            <ul className="mt-5 flex flex-wrap gap-2">
                {entry.media.map((item, index) => (
                    <li key={item.src}>
                        <a
                            href={item.src}
                            onClick={(event) => openViewer(event, index)}
                            className="group relative block size-20 overflow-hidden rounded-lg border border-line sm:size-24"
                        >
                            <img
                                src={item.thumb}
                                alt={`${item.label}${item.video ? " (video)" : ""}, ${entry.place}`}
                                width={320}
                                height={320}
                                loading="lazy"
                                decoding="async"
                                className="size-full object-cover transition-transform duration-300 motion-safe:group-hover:scale-105"
                            />
                            {item.video && (
                                <span className="absolute inset-0 grid place-items-center">
                                    <span className="grid size-8 place-items-center rounded-full bg-surface/90 text-fg">
                                        <Play size={14} />
                                    </span>
                                </span>
                            )}
                        </a>
                    </li>
                ))}
            </ul>

            {open !== null && (
                <MediaViewer
                    items={entry.media}
                    index={open}
                    title={entry.place}
                    onIndexChange={setOpen}
                    onClose={() => setOpen(null)}
                />
            )}
        </>
    );
}

export default function Experience() {
    return (
        <Section
            id="experience"
            title="Experience"
            intro="Education and internships across Europe."
        >
            <ol className="divide-y divide-line">
                {experience.map((entry, index) => (
                    <li
                        key={`${entry.place}-${entry.period}`}
                        className="grid gap-x-8 gap-y-3 py-10 first:pt-0 last:pb-0 sm:grid-cols-[9rem_1fr]"
                    >
                        <div className="font-mono text-sm text-fg-subtle tabular-nums">
                            <p>{entry.period}</p>
                            {index === 0 && (
                                <p className="mt-1 text-accent">Current</p>
                            )}
                        </div>
                        <div className="min-w-0">
                            <h3 className="text-lg font-medium text-fg">
                                {entry.place}
                            </h3>
                            <p className="text-sm text-fg-subtle">
                                {entry.kind}, {entry.country}
                            </p>
                            <p className="mt-3 max-w-[65ch] text-fg-muted">
                                {entry.description}
                            </p>
                            {entry.media.length > 0 && (
                                <MediaStrip entry={entry} />
                            )}
                        </div>
                    </li>
                ))}
            </ol>
        </Section>
    );
}
