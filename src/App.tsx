import Home from "./sections/Home";
import Resume from "./sections/Resume";
import { useLenis } from "./hooks/useLenis";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Contact from "./sections/Contact";
import TopNav from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";
import { MotionConfig } from "motion/react";

function Inner() {
    useLenis();
    return (
        <main className="bg-[#F8F5F2] dark:bg-[#222222] text-neutral-900 dark:text-[#C2D8C4] pt-20 md:pt-28 transition-colors duration-300">
            <TopNav />
            <Home />
            <div className="py-4 md:py-6" />
            <About />
            <div className="py-8 md:py-12" />
            <Experience />
            <div className="py-8 md:py-12" />
            <Projects />
            <div className="py-8 md:py-12" />
            <Resume />
            <div className="py-8 md:py-12" />
            <Contact />
            <Footer />
        </main>
    );
}

export default function App() {
    return (
        <ThemeProvider>
            {/* `reducedMotion="user"` makes every motion component respect the
                OS "reduce motion" setting (transforms are skipped). */}
            <MotionConfig reducedMotion="user">
                <Inner />
            </MotionConfig>
        </ThemeProvider>
    );
}
