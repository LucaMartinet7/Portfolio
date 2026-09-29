import { hero, site } from "@/content";
import { GithubLogo, LinkedinLogo } from "@/components/icons";
import { buttonIcon, buttonPrimary, buttonSecondary } from "@/components/ui";

export default function Hero() {
    return (
        <section
            id="top"
            aria-labelledby="hero-title"
            className="mx-auto grid max-w-6xl items-center gap-12 px-5 pt-12 pb-20 sm:px-8 md:pt-20 lg:grid-cols-12 lg:gap-16 lg:pb-28"
        >
            <div className="lg:col-span-7">
                <h1
                    id="hero-title"
                    translate="no"
                    className="text-5xl font-semibold tracking-tighter text-fg sm:text-6xl lg:text-7xl"
                >
                    {site.name}
                </h1>
                <p className="mt-6 max-w-[36ch] text-xl leading-relaxed text-fg-muted sm:text-2xl sm:leading-relaxed">
                    {hero.lead}
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-3">
                    <a href="#projects" className={buttonPrimary}>
                        View projects
                    </a>
                    <a href="#contact" className={buttonSecondary}>
                        Get in touch
                    </a>
                    {/* Kept together so they wrap as a pair on small screens. */}
                    <div className="flex gap-3">
                        <a
                            href={site.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub profile"
                            className={buttonIcon}
                        >
                            <GithubLogo size={20} />
                        </a>
                        <a
                            href={site.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn profile"
                            className={buttonIcon}
                        >
                            <LinkedinLogo size={20} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-5">
                <img
                    src="/images/portrait.webp"
                    alt={hero.portraitAlt}
                    width={640}
                    height={640}
                    fetchPriority="high"
                    decoding="async"
                    className="aspect-square w-full max-w-72 rounded-xl border border-line object-cover sm:max-w-sm lg:ml-auto lg:max-w-none"
                />
            </div>
        </section>
    );
}
