import { about, hero } from "@/content";
import { Rows, Section } from "@/components/ui";
import ActivityGraph from "./ActivityGraph";

export default function About() {
    return (
        <Section id="about" title="About">
            <div className="grid gap-8 sm:grid-cols-[10rem_1fr] md:grid-cols-[12rem_1fr] md:gap-10">
                <img
                    src="/images/portrait.webp"
                    alt={hero.portraitAlt}
                    width={640}
                    height={640}
                    decoding="async"
                    className="size-40 border border-hairline object-cover md:size-48"
                />
                <div className="max-w-[62ch]">
                    <p className="text-ink">{about.bio}</p>
                    <figure className="mt-6 text-mute">
                        <blockquote>
                            <p>
                                <span aria-hidden="true">{"> "}</span>“
                                {about.quote.text}”
                            </p>
                        </blockquote>
                        <figcaption className="mt-1 pl-[2ch]">
                            <span aria-hidden="true">- </span>
                            {about.quote.author}
                        </figcaption>
                    </figure>
                </div>
            </div>

            <div className="mt-12">
                <Rows
                    rows={[
                        ...about.facts.map((fact) => ({
                            label: fact.label,
                            value: fact.value,
                        })),
                        ...about.skills.map((skill) => ({
                            label: skill.group,
                            value: (
                                <span translate="no">
                                    {skill.items.join(", ")}
                                </span>
                            ),
                        })),
                    ]}
                />
            </div>

            <div className="mt-16">
                <h3 className="font-bold">GitHub activity</h3>
                <div className="mt-4">
                    <ActivityGraph />
                </div>
            </div>
        </Section>
    );
}
