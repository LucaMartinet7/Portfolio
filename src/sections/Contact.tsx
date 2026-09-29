import { contact, site } from "@/content";
import { Arrow, Section, textLink } from "@/components/ui";
import CopyButton from "@/components/CopyButton";

const profiles = [
    { label: "GitHub", href: site.github },
    { label: "LinkedIn", href: site.linkedin },
];

/**
 * One statement and one action: the email address is the focal point,
 * the profiles sit below it as plain links. A different layout from the
 * Experience rows on purpose (DESIGN.md, Layout).
 */
export default function Contact() {
    return (
        <Section id="contact" title="Contact">
            <p className="font-bold text-ink">{contact.heading}</p>
            <p className="mt-1">{contact.body}</p>

            <div className="mt-8 rounded-sm bg-surface-card px-4 py-5 sm:px-6">
                <p className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <a
                        href={`mailto:${site.email}`}
                        translate="no"
                        className={`${textLink} break-all font-bold sm:text-xl`}
                    >
                        {site.email}
                    </a>
                    <CopyButton text={site.email} />
                </p>
            </div>

            <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
                {profiles.map((profile) => (
                    <li key={profile.label}>
                        <a
                            href={profile.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            translate="no"
                            className={textLink}
                        >
                            {profile.label}
                        </a>
                        <Arrow />
                    </li>
                ))}
            </ul>
        </Section>
    );
}
