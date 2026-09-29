import { contact, site } from "@/content";
import { Arrow, Rows, Section, buttonPrimary, textLink } from "@/components/ui";
import CopyButton from "@/components/CopyButton";

const external = (href: string, label: string) => (
    <>
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            translate="no"
            className={textLink}
        >
            {label}
        </a>
        <Arrow />
    </>
);

export default function Contact() {
    return (
        <Section id="contact" title="Contact">
            <p className="font-bold text-ink">{contact.heading}</p>
            <p className="mt-1">{contact.body}</p>

            <div className="mt-8">
                <Rows
                    rows={[
                        {
                            label: "email",
                            value: (
                                <span className="inline-flex flex-wrap items-center gap-x-2">
                                    <a
                                        href={`mailto:${site.email}`}
                                        translate="no"
                                        className={textLink}
                                    >
                                        {site.email}
                                    </a>
                                    <CopyButton text={site.email} />
                                </span>
                            ),
                        },
                        {
                            label: "github",
                            value: external(
                                site.github,
                                "github.com/LucaMartinet7"
                            ),
                        },
                        {
                            label: "linkedin",
                            value: external(
                                site.linkedin,
                                "linkedin.com/in/luca-martinet"
                            ),
                        },
                    ]}
                />
            </div>

            <a
                href={`mailto:${site.email}`}
                className={`${buttonPrimary} mt-8`}
            >
                Send an email
            </a>
        </Section>
    );
}
