import { useEffect, useRef, useState } from "react";

export default function YearCounter({
    allYears,
    activeIndex,
}: {
    allYears: string[];
    activeIndex: number;
}) {
    const rowRef = useRef<HTMLDivElement | null>(null);
    const [rowHeight, setRowHeight] = useState(0);

    useEffect(() => {
        const measure = () => {
            if (!rowRef.current) return;
            const h = rowRef.current.getBoundingClientRect().height;
            if (h > 0) setRowHeight(h);
        };

        measure();
        // Fallback: re-measure after first paint in case CSS wasn't fully applied
        const timer = setTimeout(measure, 50);

        const ro = new ResizeObserver(measure);
        if (rowRef.current) ro.observe(rowRef.current);
        window.addEventListener("resize", measure);

        return () => {
            clearTimeout(timer);
            ro.disconnect();
            window.removeEventListener("resize", measure);
        };
    }, []);

    const clampedIndex = Math.max(
        0,
        Math.min(activeIndex, allYears.length - 1)
    );
    const y = -(clampedIndex * rowHeight);

    return (
        <div className="h-fit w-full text-center font-bold leading-[0.8] text-[#385144]/10 dark:text-[#C2D8C4]/10 tracking-tight text-[clamp(5rem,16vw,16rem)]">
            <div
                className="relative overflow-hidden"
                style={{
                    height: rowHeight > 0 ? `${rowHeight}px` : "0.8em",
                    maskImage:
                        "linear-gradient(to bottom, transparent 0%, black 3%, black 97%, transparent 100%)",
                    WebkitMaskImage:
                        "linear-gradient(to bottom, transparent 0%, black 3%, black 97%, transparent 100%)",
                }}
            >
                <div
                    className="flex flex-col transition-transform duration-700 ease-in-out"
                    style={{ transform: `translate3d(0, ${y}px, 0)` }}
                >
                    {allYears.map((year, idx) => (
                        <div
                            key={idx}
                            ref={idx === 0 ? rowRef : undefined}
                            className="leading-[0.8] flex-shrink-0 whitespace-nowrap"
                        >
                            {year}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
