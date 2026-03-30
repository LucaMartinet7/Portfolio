export type Project = {
    title: string;
    description: string;
    image?: string;
    githubUrl: string;
    demoUrl?: string;
    tags?: string[];
    accent: string; // tailwind bg color class for the accent
};

export const projects: Project[] = [
    {
        title: "BeeR-Type (R-Type)",
        description:
            "Multiplayer 2D shooter with modular server/client/engine architecture. Built with modern C++, ECS, and robust networking.",
        githubUrl: "https://github.com/lucamartinet7/R-Type",
        tags: ["C++", "Networking", "ECS"],
        accent: "bg-blue-500",
    },
    {
        title: "AREA",
        description:
            "IFTTT/Zapier-style automation platform with backend, web frontend, and mobile frontend.",
        githubUrl: "https://github.com/LucaMartinet7/Area-Tek3",
        tags: ["Dart", "Python", "MySQL"],
        accent: "bg-violet-500",
    },
    {
        title: "Neural Network",
        description:
            "Chessboard state analysis using a ML-based approach (project-focused implementation).",
        githubUrl: "https://github.com/LucaMartinet7/Neural-Network",
        tags: ["Python", "ML"],
        accent: "bg-emerald-500",
    },
    {
        title: "Arcade",
        description:
            "Dynamic game platform with runtime-switchable graphics libraries and games loaded via shared objects.",
        githubUrl: "https://github.com/LucaMartinet7/Arcade",
        tags: ["C++", "Plugins"],
        accent: "bg-orange-500",
    },
];
