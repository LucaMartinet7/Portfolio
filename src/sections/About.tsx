import { about } from "@/content";
import { Rows, Section } from "@/components/ui";
import ActivityGraph from "./ActivityGraph";

export default function About() {
    return (
        <Section id="about" title="About">
            {/* Mobile: stacked. lg: bio on the left, facts on the right. */}
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
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
                <h3 className="font-bold">GitHub Activity</h3>
                <div className="mt-4">
                    <ActivityGraph />
                </div>
            </div>
        </Section>
    );
}
