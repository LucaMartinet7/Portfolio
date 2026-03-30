import { useEffect, useRef } from "react";

interface Star {
    x: number;
    y: number;
    radius: number;
    baseOpacity: number;
    twinkleSpeed: number;
    twinkleOffset: number;
}

export default function Starfield() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const COUNT = 120;
        const stars: Star[] = Array.from({ length: COUNT }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 0.8 + 0.2,
            baseOpacity: Math.random() * 0.4 + 0.1,
            twinkleSpeed: Math.random() * 0.0006 + 0.0002,
            twinkleOffset: Math.random() * Math.PI * 2,
        }));

        let t = 0;
        let rafId: number;

        const draw = () => {
            ctx.clearRect(0, 0, width, height);
            t++;

            // Batch all stars into a single path per opacity bucket isn't easy,
            // but we can at least avoid re-setting fillStyle when possible by
            // drawing all stars, grouping similar alphas together isn't worth
            // the complexity — just avoid arc() per star by using fillRect for tiny ones
            for (const s of stars) {
                const flicker = Math.sin(t * s.twinkleSpeed * 60 + s.twinkleOffset);
                const alpha = Math.max(0.04, s.baseOpacity + flicker * 0.12);
                ctx.globalAlpha = alpha;
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
                ctx.fillStyle = "#ffffff";
                ctx.fill();
            }
            ctx.globalAlpha = 1;

            rafId = requestAnimationFrame(draw);
        };

        rafId = requestAnimationFrame(draw);

        const onResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            // Re-scatter stars within new bounds
            for (const s of stars) {
                s.x = Math.random() * width;
                s.y = Math.random() * height;
            }
        };
        window.addEventListener("resize", onResize);

        return () => {
            cancelAnimationFrame(rafId);
            window.removeEventListener("resize", onResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none z-0"
            style={{ opacity: 0.7 }}
        />
    );
}
