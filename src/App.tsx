import Home from "./sections/Home";
import Resume from "./sections/Resume";

import { useLenis } from "./hooks/useLenis";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import About from "./sections/About";

export default function App() {
    useLenis();

    return (
        <main className="bg-neutral-950 text-white">
            <Home />

            {/* Smooth transition section */}
            <section className="px-6 py-16 md:py-24">
                <div className="mx-auto max-w-6xl" />
            </section>

            <About />

            {/* Smooth transition section */}
            <section className="px-6 py-16 md:py-24">
                <div className="mx-auto max-w-6xl" />
            </section>

            <Experience />

            {/* Smooth transition section */}
            <section className="px-6 py-16 md:py-24">
                <div className="mx-auto max-w-6xl" />
            </section>

            <Projects />

            {/* Smooth transition section */}
            <section className="px-6 py-16 md:py-24">
                <div className="mx-auto max-w-6xl" />
            </section>

            <Resume />
        </main>
    );
}
