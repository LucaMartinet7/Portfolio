import AboutCard from "./AboutCard";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import { SECTION_IDS } from "@/lib/anchors.ts";

export default function About() {
    return (
        <section id={SECTION_IDS.ABOUT} className="px-6 py-16 md:py-32">
            <div className="mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div>
                        <h2 className="text-3xl font-semibold">
                            About <span className="text-white/60">me</span>
                        </h2>
                        <p className="mt-3 text-white/60 max-w-xl">
                            A quick intro, then the tools I’m comfortable
                            shipping with.
                        </p>

                        <div className="mt-10">
                            <AboutCard />
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-medium">
                            Professional skillset
                        </h3>
                        <Techstack />

                        <h3 className="mt-12 text-xl font-medium">
                            Tools I use
                        </h3>
                        <Toolstack />
                    </div>
                </div>
            </div>
        </section>
    );
}
