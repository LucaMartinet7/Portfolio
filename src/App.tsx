import Home from "./sections/Home";
import Resume from "./sections/Resume";
import { useLenis } from "./hooks/useLenis";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Hobbies from "./sections/Hobbies";
import TopNav from "./components/Navbar";
import { ThemeProvider } from "./contexts/ThemeContext";

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
            <Hobbies />
            <div className="py-8 md:py-12" />
            <Resume />
        </main>
    );
}

export default function App() {
    return (
        <ThemeProvider>
            <Inner />
        </ThemeProvider>
    );
}
