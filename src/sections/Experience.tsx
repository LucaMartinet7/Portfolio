import { useState, type MouseEvent } from "react";
import { experience, type Experience as Entry } from "@/content";
import { Section } from "@/components/ui";
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
            <ul className="mt-4 flex flex-wrap gap-2">
                {entry.media.map((item, index) => (
                    <li key={item.src}>
                        <a
                            href={item.src}
                            onClick={(event) => openViewer(event, index)}
                            className="relative block size-20 overflow-hidden rounded-sm border border-hairline transition-colors hover:border-ink sm:size-24"
                        >
                            <img
                                src={item.thumb}
                                alt={`${item.label}${item.video ? " (video)" : ""}, ${entry.place}`}
                                width={320}
                                height={320}
                                loading="lazy"
                                decoding="async"
                                className="size-full object-cover"
                            />
                            {item.video && (
                                <span
                                    aria-hidden="true"
                                    className="absolute bottom-1 left-1 rounded-sm bg-term px-1 text-xs leading-5 text-term-text"
                                >
                                    [play]
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
        <Section id="experience" title="Experience">
            <p className="mb-6 text-mute">
                Education and internships across Europe.
            </p>
            <ol className="divide-y divide-hairline border-b border-hairline">
                {experience.map((entry, index) => (
                    <li
                        key={`${entry.place}-${entry.period}`}
                        className="grid gap-x-6 gap-y-1 py-6 sm:grid-cols-[16ch_1fr]"
                    >
                        <p className="text-mute tabular-nums">
                            {entry.period}
                            {index === 0 && (
                                <span className="block text-green">
                                    [current]
                                </span>
                            )}
                        </p>
                        <div className="min-w-0">
                            <h3 className="font-bold">{entry.place}</h3>
                            <p className="text-mute">
                                {entry.kind}, {entry.country}
                            </p>
                            <p className="mt-3 max-w-[70ch]">
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
