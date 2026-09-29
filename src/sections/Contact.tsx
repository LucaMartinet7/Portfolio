import { useEffect, useState } from "react";
import { contact, site } from "@/content";
import {
    Section,
    buttonPrimary,
    buttonSecondary,
    textLink,
} from "@/components/ui";
import { ArrowUpRight, Check, Copy, EnvelopeSimple } from "@/components/icons";

function CopyEmail() {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (!copied) return;
        const timer = setTimeout(() => setCopied(false), 2000);
        return () => clearTimeout(timer);
    }, [copied]);

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(site.email);
            setCopied(true);
        } catch {
            // Clipboard access denied: the address stays visible to copy by hand.
        }
    };

    return (
        <button type="button" onClick={copy} className={buttonSecondary}>
            {copied ? <Check size={18} /> : <Copy size={18} />}
            <span aria-live="polite">{copied ? "Copied" : "Copy email"}</span>
        </button>
    );
}

export default function Contact() {
    return (
        <Section id="contact" title="Contact">
            <p className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
                {contact.heading}
            </p>
            <p className="mt-3 max-w-[50ch] text-lg text-fg-muted">
                {contact.body}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href={`mailto:${site.email}`} className={buttonPrimary}>
                    <EnvelopeSimple size={18} />
                    <span translate="no">{site.email}</span>
                </a>
                <CopyEmail />
            </div>

            <ul className="mt-8 flex flex-wrap gap-6 text-sm">
                <li>
                    <a
                        href={site.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={textLink}
                    >
                        GitHub
                        <ArrowUpRight size={14} />
                    </a>
                </li>
                <li>
                    <a
                        href={site.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={textLink}
                    >
                        LinkedIn
                        <ArrowUpRight size={14} />
                    </a>
                </li>
            </ul>
        </Section>
    );
}
