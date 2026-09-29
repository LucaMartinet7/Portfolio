import { about } from "@/content";
import { Rows, Section } from "@/components/ui";
import ActivityGraph from "./ActivityGraph";

/** One column, like every other section: bio, then details, then activity. */
export default function About() {
    return (
        <Section id="about" title="About">
            <div className="max-w-[70ch]">
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

            <div className="mt-12 grid gap-10">
                <div>
                    <h3 className="mb-4 font-bold">Details</h3>
                    <Rows
                        rows={about.facts.map((fact) => ({
                            label: fact.label,
                            value: fact.value,
                        }))}
                    />
                </div>
                <div>
                    <h3 className="mb-4 font-bold">Skills</h3>
                    <Rows
                        rows={about.skills.map((skill) => ({
                            label: skill.group,
                            value: (
                                <span translate="no">
                                    {skill.items.join(", ")}
                                </span>
                            ),
                        }))}
                    />
                </div>
            </div>

            <div className="mt-12">
                <h3 className="mb-4 font-bold">GitHub Activity</h3>
                <ActivityGraph />
            </div>
        </Section>
    );
}
