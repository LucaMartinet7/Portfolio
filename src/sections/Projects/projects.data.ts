export type Project = {
    title: string;
    description: string;
    githubUrl: string;
    demoUrl?: string;
    tags?: string[];
    featured?: boolean;
};

export const projects: Project[] = [
    {
        title: "BeeR-Type (R-Type)",
        description:
            "Multiplayer 2D shooter with modular server / client / engine architecture. Built with modern C++, ECS pattern, and UDP networking.",
        githubUrl: "https://github.com/lucamartinet7/R-Type",
        tags: ["C++", "Networking", "ECS"],
        featured: true,
    },
    {
        title: "AREA",
        description:
            "IFTTT-style automation with backend, web, and mobile frontends.",
        githubUrl: "https://github.com/LucaMartinet7/Area-Tek3",
        tags: ["Python", "Dart", "MySQL"],
    },
    {
        title: "Neural Network",
        description:
            "Chessboard state analysis via a custom ML-based pipeline.",
        githubUrl: "https://github.com/LucaMartinet7/Neural-Network",
        tags: ["Python", "ML"],
    },
    {
        title: "Arcade",
        description:
            "Game platform with runtime-switchable graphics libs via shared objects.",
        githubUrl: "https://github.com/LucaMartinet7/Arcade",
        tags: ["C++", "Plugins"],
    },
    {
        title: "Portfolio",
        description:
            "React 19, TypeScript, Tailwind v4, Framer Motion, Lenis smooth scroll.",
        githubUrl: "https://github.com/LucaMartinet7/Portfolio",
        demoUrl: "https://lucamartinet.dev",
        tags: ["React", "TypeScript"],
    },
];
