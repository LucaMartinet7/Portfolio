import Home from "./sections/Home";
import Resume from "./sections/Resume";

import { useLenis } from "./hooks/useLenis";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Hobbies from "./sections/Hobbies";
import TopNav from "./components/Navbar";

const SmoothTransition = () => (
    <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl" />
    </section>
);

export default function App() {
    useLenis();

    return (
        <main className="bg-neutral-950 text-white pt-20 md:pt-28">
            <TopNav />
            <Home />
            <SmoothTransition />
            <About />
            <SmoothTransition />
            <Experience />
            <SmoothTransition />
            <Projects />
            <SmoothTransition />
            <Hobbies />
            <SmoothTransition />
            <Resume />
        </main>
    );
}
