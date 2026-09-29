import { useEffect, useState } from "react";

/**
 * Returns the id of the section currently under the reading line (a thin band
 * a little above the middle of the viewport), for highlighting the nav. Once
 * the footer is fully in view the last section wins, since a short final
 * section may never reach the reading line.
 */
export function useActiveSection(ids: readonly string[]) {
    const [current, setCurrent] = useState<string | null>(null);
    const [atEnd, setAtEnd] = useState(false);

    useEffect(() => {
        const visible = new Set<string>();
        const sections = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) visible.add(entry.target.id);
                    else visible.delete(entry.target.id);
                }
                setCurrent(ids.find((id) => visible.has(id)) ?? null);
            },
            { rootMargin: "-35% 0px -60% 0px" }
        );
        for (const id of ids) {
            const element = document.getElementById(id);
            if (element) sections.observe(element);
        }

        const end = new IntersectionObserver(
            ([entry]) => setAtEnd(entry?.isIntersecting ?? false),
            { threshold: 0.9 }
        );
        const footer = document.querySelector("body footer");
        if (footer) end.observe(footer);

        return () => {
            sections.disconnect();
            end.disconnect();
        };
    }, [ids]);

    return atEnd ? (ids.at(-1) ?? null) : current;
}
