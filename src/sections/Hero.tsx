import { hero, site } from "@/content";
import Wordmark from "@/components/Wordmark";
import { Arrow } from "@/components/ui";

const hint =
    "text-term-mute underline decoration-transparent underline-offset-4 transition-colors hover:text-term-text hover:decoration-term-mute";

/**
 * The page's one dark surface, styled as a terminal: the block-pixel name, a
 * prompt line and a row of real links. Everything in it is real content.
 */
export default function Hero() {
    return (
        <section
            id="top"
            aria-labelledby="hero-title"
            className="mx-auto max-w-275 px-4 pt-6 sm:px-6 md:pt-10"
        >
            <div className="bg-term px-5 py-12 text-term-text sm:px-10 md:py-16 dark:border dark:border-hairline">
                <h1 id="hero-title" className="sr-only">
                    {site.name}
                </h1>
                <div className="mx-auto max-w-2xl">
                    <Wordmark
                        lines={["LUCA", "MARTINET"]}
                        className="h-auto w-full max-w-xl fill-term-green"
                    />

                    <p className="mt-10 rounded-sm bg-term-raised px-3 py-2">
                        <span aria-hidden="true" className="text-term-green">
                            {"> "}
                        </span>
                        {hero.lead}
                    </p>
                    <p className="mt-3 px-3 text-term-mute">
                        <span aria-hidden="true"># </span>
                        {hero.status}
                    </p>
                    <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-2 px-3">
                        <li>
                            <a href="#projects" className={hint}>
                                View projects
                                <Arrow />
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className={hint}>
                                Get in touch
                                <Arrow />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
