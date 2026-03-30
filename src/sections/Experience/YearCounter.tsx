import { useLayoutEffect, useRef, useState } from "react";

export default function YearCounter({
    allYears,
    activeIndex,
}: {
    allYears: string[];
    activeIndex: number;
}) {
    const viewportRef = useRef<HTMLDivElement | null>(null);
    const rowRef = useRef<HTMLDivElement | null>(null);
    const [rowHeight, setRowHeight] = useState(0);

    // Measure each row’s height so we can translate by rowHeight * index
    useLayoutEffect(() => {
        const measure = () => {
            if (!rowRef.current) return;
            setRowHeight(rowRef.current.getBoundingClientRect().height);
        };
        measure();
        const ro = new ResizeObserver(measure);
        if (rowRef.current) ro.observe(rowRef.current);
        if (viewportRef.current) ro.observe(viewportRef.current);
        return () => ro.disconnect();
    }, []);

    const clampedIndex = Math.max(
        0,
        Math.min(activeIndex, allYears.length - 1)
    );
    const y = -(clampedIndex * rowHeight);

    return (
        <div
            className="h-fit w-full text-center font-bold leading-[0.8] text-[#385144]/10 dark:text-[#C2D8C4]/10 tracking-tight text-[clamp(5rem,16vw,16rem)]"
        >
            <div
                ref={viewportRef}
                className="relative overflow-hidden"
                style={{
                    height: rowHeight ? `${rowHeight}px` : "1.25em",
                    maskImage: "linear-gradient(to bottom, transparent 0%, black 3%, black 97%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 3%, black 97%, transparent 100%)",
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
