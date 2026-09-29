import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import Resume from "@/sections/Resume";
import Contact from "@/sections/Contact";

const skipLinkClass =
    "sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-30 focus:rounded-sm focus:bg-ink focus:px-4 focus:py-2 focus:text-on-ink";

export default function App() {
    return (
        <>
            <a href="#main" className={skipLinkClass}>
                Skip to content
            </a>
            <Header />
            <main id="main">
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Resume />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
