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
            <p className="text-neutral-700 dark:text-[#C2D8C4]/70 leading-relaxed text-base">
                I'm Luca, a software development student at Epitech. I enjoy
                building reliable systems and learning by shipping real projects
                — from low-level C to full-stack web apps.
            </p>

            {/* Info chips */}
            <div className="flex flex-wrap gap-2">
                {info.map((chip) => (
                    <span
                        key={chip.label}
                        className="inline-flex items-center gap-1.5 rounded-full border border-[#385144]/30 dark:border-[#C2D8C4]/20 bg-[#385144]/10 dark:bg-[#C2D8C4]/5 px-3 py-1 text-sm text-[#385144] dark:text-[#C2D8C4]/70 hover:bg-[#385144]/20 dark:hover:bg-[#C2D8C4]/10 hover:text-[#1f3329] dark:hover:text-[#C2D8C4] transition-colors duration-200"
                    >
                        <span>{chip.icon}</span>
                        {chip.label}
                    </span>
                ))}
            </div>

            {/* Hobbies */}
            <div>
                <p className="text-xs uppercase tracking-widest text-[#385144]/60 dark:text-[#C2D8C4]/30 mb-3">
                    Outside of code
                </p>
                <div className="flex flex-wrap gap-2">
                    {hobbies.map((h) => (
                        <span
                            key={h.label}
                            className="inline-flex items-center gap-1.5 rounded-full border border-[#385144]/30 dark:border-[#C2D8C4]/20 bg-[#385144]/10 dark:bg-[#C2D8C4]/5 px-3 py-1.5 text-sm text-[#385144] dark:text-[#C2D8C4]/70 hover:bg-[#385144]/20 dark:hover:bg-[#C2D8C4]/10 hover:text-[#1f3329] dark:hover:text-[#C2D8C4] transition-colors duration-200"
                        >
                            <span>{h.icon}</span>
                            {h.label}
                        </span>
                    ))}
                </div>
            </div>

            {/* Quote */}
            <div className="relative pl-4">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full bg-[#385144]/40 dark:bg-[#C2D8C4]/20" />
                <p className="text-neutral-700 dark:text-[#C2D8C4]/70 text-sm italic leading-relaxed">
                    "If you're not improving, you're falling behind."
                </p>
                <p className="mt-1.5 text-xs text-[#385144]/60 dark:text-[#C2D8C4]/30">
                    — Chris Bumstead
                </p>
            </div>
        </div>
    );
}
