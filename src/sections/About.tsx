import { about } from "@/content";
import { Section } from "@/components/ui";
import ActivityGraph from "./ActivityGraph";

/**
 * A short bio, the skills as grouped tags, then the activity graph as the
 * section's visual. Mobile: two groups per row. lg: all four side by side.
 */
export default function About() {
    return (
        <Section id="about" title="About">
            <div className="max-w-[65ch] space-y-3">
                {about.bio.map((line) => (
                    <p key={line} className="text-ink">
                        {line}
                    </p>
                ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
                {about.skills.map((skill) => (
                    <div key={skill.group}>
                        <h3 className="text-sm font-bold leading-7">
                            {skill.group}
                        </h3>
                        <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm leading-7">
                            {skill.items.map((item) => (
                                <li key={item} translate="no">
                                    <span
                                        aria-hidden="true"
                                        className="text-green"
                                    >
                                        [
                                    </span>
                                    {item}
                                    <span
                                        aria-hidden="true"
                                        className="text-green"
                                    >
                                        ]
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="mt-12">
                <h3 className="mb-4 font-bold">GitHub Activity</h3>
                <ActivityGraph />
            </div>
        </Section>
    );
}
