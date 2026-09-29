import { about } from "@/content";
import { Section, Tag } from "@/components/ui";
import ActivityGraph from "./ActivityGraph";

export default function About() {
    return (
        <Section id="about" title="About">
            <p className="max-w-[60ch] text-lg leading-relaxed text-fg sm:text-xl sm:leading-relaxed">
                {about.bio}
            </p>

            <figure className="mt-6 max-w-[60ch]">
                <blockquote className="text-fg-muted">
                    <p>“{about.quote.text}”</p>
                </blockquote>
                <figcaption className="mt-1 text-sm text-fg-subtle">
                    {about.quote.author}
                </figcaption>
            </figure>

            <dl className="mt-12 grid gap-6 sm:grid-cols-3">
                {about.facts.map((fact) => (
                    <div key={fact.label}>
                        <dt className="font-mono text-xs text-fg-subtle">
                            {fact.label}
                        </dt>
                        <dd className="mt-1 text-fg">{fact.value}</dd>
                    </div>
                ))}
            </dl>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
                {about.skills.map((skill) => (
                    <div key={skill.group}>
                        <h3 className="font-mono text-xs text-fg-subtle">
                            {skill.group}
                        </h3>
                        <ul className="mt-2 flex flex-wrap gap-1.5">
                            {skill.items.map((item) => (
                                <li key={item}>
                                    <Tag>{item}</Tag>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="mt-16">
                <h3 className="font-medium text-fg">GitHub activity</h3>
                <div className="mt-4">
                    <ActivityGraph />
                </div>
            </div>
        </Section>
    );
}
