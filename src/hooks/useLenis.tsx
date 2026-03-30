import { useEffect } from "react";
import Lenis from "lenis";

export function useLenis() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        const handleAnchorClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement | null;
            const anchor = target?.closest(
                'a[href^="#"]'
            ) as HTMLAnchorElement | null;

            if (!anchor) return;

            const hash = anchor.getAttribute("href");

            if (!hash || hash === "#") return;

            const section = document.querySelector(hash);

            if (!section) return;

            event.preventDefault();
            lenis.scrollTo(section as HTMLElement, { offset: -96 });
        };

        document.addEventListener("click", handleAnchorClick);
        requestAnimationFrame(raf);

        return () => {
            document.removeEventListener("click", handleAnchorClick);
            lenis.destroy();
        };
    }, []);
}
