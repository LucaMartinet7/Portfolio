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
            <Experience />
            <Projects />
            <About />
            <Resume />
        </main>
    );
}
