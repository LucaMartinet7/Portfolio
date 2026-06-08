import { useEffect } from "react";
import Lenis from "lenis";

const NAV_OFFSET = 96;

export function useLenis() {
    useEffect(() => {
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        const resolveAnchor = (event: MouseEvent) => {
            const target = event.target as HTMLElement | null;
            const anchor = target?.closest(
                'a[href^="#"]'
            ) as HTMLAnchorElement | null;
            if (!anchor) return null;

            const hash = anchor.getAttribute("href");
            if (!hash || hash === "#") return null;

            return document.querySelector(hash) as HTMLElement | null;
        };

        // Respect the user's "reduce motion" preference: skip Lenis smooth
        // scrolling entirely and fall back to native instant anchor jumps.
        if (prefersReducedMotion) {
            const handleAnchorClick = (event: MouseEvent) => {
                const section = resolveAnchor(event);
                if (!section) return;
                event.preventDefault();
                window.scrollTo({ top: section.offsetTop - NAV_OFFSET });
            };
            document.addEventListener("click", handleAnchorClick);
            return () =>
                document.removeEventListener("click", handleAnchorClick);
        }

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            prevent: (node) => node.tagName === "IFRAME",
        });

        let rafId: number;
        let destroyed = false;

        function raf(time: number) {
            if (destroyed) return;
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }

        const handleAnchorClick = (event: MouseEvent) => {
            const section = resolveAnchor(event);
            if (!section) return;
            event.preventDefault();
            lenis.scrollTo(section, { offset: -NAV_OFFSET });
        };

        document.addEventListener("click", handleAnchorClick);
        rafId = requestAnimationFrame(raf);

        return () => {
            destroyed = true;
            cancelAnimationFrame(rafId);
            document.removeEventListener("click", handleAnchorClick);
            lenis.destroy();
        };
    }, []);
}
