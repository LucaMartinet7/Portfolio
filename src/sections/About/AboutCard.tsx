const info = [
    { icon: "🎓", label: "Epitech" },
    { icon: "💻", label: "Software Dev" },
];

const hobbies = [
    { icon: "🏋️", label: "Gym" },
    { icon: "✈️", label: "Travelling" },
    { icon: "🎮", label: "Games" },
];

export default function AboutCard() {
    return (
        <div className="space-y-7">
            {/* Bio */}
            <p className="text-white/70 leading-relaxed text-base">
                I'm Luca, a software development student at Epitech. I enjoy
                building reliable systems and learning by shipping real
                projects — from low-level C to full-stack web apps.
            </p>

            {/* Info chips */}
            <div className="flex flex-wrap gap-2">
                {info.map((chip) => (
                    <span
                        key={chip.label}
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-white/60 hover:bg-white/[0.08] hover:text-white/90 transition-colors duration-200"
                    >
                        <span>{chip.icon}</span>
                        {chip.label}
                    </span>
                ))}
            </div>

            {/* Hobbies */}
            <div>
                <p className="text-xs uppercase tracking-widest text-white/30 mb-3">
                    Outside of code
                </p>
                <div className="flex flex-wrap gap-2">
                    {hobbies.map((h) => (
                        <span
                            key={h.label}
                            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-white/70 hover:bg-white/[0.08] hover:text-white/90 transition-colors duration-200"
                        >
                            <span>{h.icon}</span>
                            {h.label}
                        </span>
                    ))}
                </div>
            </div>

            {/* Quote */}
            <div className="relative pl-4">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full bg-white/15" />
                <p className="text-white/70 text-sm italic leading-relaxed">
                    "If you're not improving, you're falling behind."
                </p>
                <p className="mt-1.5 text-xs text-white/30">— Chris Bumstead</p>
            </div>
        </div>
    );
}
