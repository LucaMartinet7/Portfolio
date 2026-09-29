/**
 * Block-pixel wordmark, drawn as an SVG grid so it stays crisp at any size
 * and needs no special font. Decorative: pages always carry the name as real
 * text too.
 */

const GLYPHS: Record<string, string[]> = {
    L: ["#....", "#....", "#....", "#....", "#####"],
    U: ["#...#", "#...#", "#...#", "#...#", ".###."],
    C: [".####", "#....", "#....", "#....", ".####"],
    A: [".###.", "#...#", "#####", "#...#", "#...#"],
    M: ["#...#", "##.##", "#.#.#", "#...#", "#...#"],
    R: ["####.", "#...#", "####.", "#..#.", "#...#"],
    T: ["#####", "..#..", "..#..", "..#..", "..#.."],
    I: ["###", ".#.", ".#.", ".#.", "###"],
    N: ["#...#", "##..#", "#.#.#", "#..##", "#...#"],
    E: ["#####", "#....", "####.", "#....", "#####"],
    " ": ["..", "..", "..", "..", ".."],
};

/** Pixel coordinates for a line of text, one column gap between letters. */
function layout(text: string) {
    const pixels: [number, number][] = [];
    let x = 0;
    for (const char of text) {
        const glyph = GLYPHS[char];
        if (!glyph) continue;
        glyph.forEach((row, y) =>
            [...row].forEach((cell, dx) => {
                if (cell === "#") pixels.push([x + dx, y]);
            })
        );
        x += glyph[0]!.length + 1;
    }
    return { pixels, width: x - 1 };
}

export default function Wordmark({
    lines,
    className,
}: {
    lines: string[];
    className?: string;
}) {
    const laid = lines.map(layout);
    const width = Math.max(...laid.map((line) => line.width));
    const height = lines.length * 6 - 1;

    return (
        <svg
            viewBox={`0 0 ${width} ${height}`}
            aria-hidden="true"
            focusable="false"
            shapeRendering="crispEdges"
            className={className}
        >
            {laid.map((line, row) =>
                line.pixels.map(([x, y]) => (
                    <rect
                        key={`${row}-${x}-${y}`}
                        x={x}
                        y={row * 6 + y}
                        width={1}
                        height={1}
                    />
                ))
            )}
        </svg>
    );
}
