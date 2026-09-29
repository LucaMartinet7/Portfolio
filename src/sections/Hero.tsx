import { hero, site } from "@/content";
import Wordmark from "@/components/Wordmark";
import { Arrow } from "@/components/ui";

const hint =
    "inline-flex items-center text-term-mute underline decoration-transparent underline-offset-4 transition-colors hover:text-term-text hover:decoration-term-mute";

/**
 * The page's one dark surface, styled as a terminal: the block-pixel name,
 * a prompt line and two links on the left, the portrait on the right.
 * Everything in it is real content.
 */
export default function Hero() {
    return (
        <section
            id="top"
            aria-labelledby="hero-title"
            className="mx-auto max-w-275 px-4 pt-6 sm:px-6 md:pt-10"
        >
            {/* Mobile: portrait above the text. lg: text left, portrait right. */}
            <div className="grid items-center gap-10 bg-term px-5 py-10 text-term-text sm:px-10 md:py-14 lg:grid-cols-[1fr_16rem] lg:gap-14 lg:px-14 border border-hairline">
                <img
                    src="/images/portrait.webp"
                    alt={hero.portraitAlt}
                    width={640}
                    height={640}
                    fetchPriority="high"
                    decoding="async"
                    className="size-32 border border-term-raised object-cover sm:size-40 lg:order-last lg:size-64"
                />

                <div className="min-w-0">
                    <h1 id="hero-title" className="sr-only">
                        {site.name}
                    </h1>
                    <Wordmark
                        lines={["LUCA", "MARTINET"]}
                        className="h-auto w-full max-w-lg fill-term-green"
                    />

                    <p className="mt-8 max-w-2xl rounded-sm bg-term-raised px-3 py-2">
                        <span aria-hidden="true" className="text-term-green">
                            {"> "}
                        </span>
                        {hero.lead}
                    </p>
                    <p className="mt-3 px-3 text-term-mute">
                        <span aria-hidden="true"># </span>
                        {hero.status}
                    </p>
                    <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-2 px-3">
                        <li>
                            <a href="#projects" className={hint}>
                                View Projects
                                <Arrow external={false} />
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className={hint}>
                                Get in Touch
                                <Arrow external={false} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
