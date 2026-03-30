import type { ExperienceEntry } from "./types";

export const allEntries: ExperienceEntry[] = [
    {
        year: "2025 — 2026",
        yearNumber: "2026",
        location: "Cardiff Metropolitan",
        country: "🏴󠁧󠁢󠁷󠁬󠁳󠁿 Wales",
        category: "Master's Year 1",
        description:
            "Master's 1st year exchange program at Cardiff Metropolitan University. Advanced studies in computer science and international collaboration.",
        tileStyle:
            "bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border-indigo-500/30",
        // [Text(2)][out(1)] / [out2(1)][room(2)]
        textSpan: "col-span-2",
        images: [
            { url: "/photos/experience/cardiff/Cardiff_out.webp", span: "col-span-1" },
            { url: "/photos/experience/cardiff/Cardiff_out2.webp", span: "col-span-1" },
            { url: "/photos/experience/cardiff/Cardiff_room.webp", span: "col-span-2" },
        ],
    },
    {
        year: "Summer 2025",
        yearNumber: "2025",
        location: "CyberPeace Institute",
        country: "🇨🇭 Switzerland",
        category: "Internship",
        description:
            "Working on cybersecurity initiatives and digital peace advocacy. Contributing to global cyber stability efforts.",
        tileStyle:
            "bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-purple-500/30",
        // [Text(2)][out(1)] / [video(1)][out2(2)]
        textSpan: "col-span-2",
        images: [
            { url: "/photos/experience/geneva-cyber/Cyberpeace_out2.webp", span: "col-span-1" },
            { url: "/photos/experience/geneva-cyber/cyberpeace_workspace.mp4", span: "col-span-1", type: "video" },
            { url: "/photos/experience/geneva-cyber/CyberPeace_out.webp", span: "col-span-2" },
        ],
    },
    {
        year: "2024 — 2025",
        yearNumber: "2025",
        location: "Epitech Berlin",
        country: "🇩🇪 Germany",
        category: "Bachelor's Year 3",
        description:
            "Large-scale projects, advanced architecture, and deployment. Completing Bachelor's with capstone projects.",
        tileStyle:
            "bg-gradient-to-br from-pink-500/20 to-rose-500/20 border-pink-500/30",
        // [Text(3)] / [Berlin(1)][Berlin_2(2)]
        textSpan: "col-span-3",
        images: [
            { url: "/photos/experience/berlin/Berlin_2.webp", span: "col-span-1" },
            { url: "/photos/experience/berlin/Berlin.webp", span: "col-span-1" },
        ],
    },
    {
        year: "2023 — 2024",
        yearNumber: "2024",
        location: "Epitech Barcelona",
        country: "🇪🇸 Spain",
        category: "Bachelor's Year 2",
        description:
            "Systems programming, networking, and advanced algorithms. Expanding knowledge in distributed systems and architecture.",
        tileStyle:
            "bg-gradient-to-br from-green-500/20 to-cyan-500/20 border-green-500/30",
        // [Text(2)][Bar(1)] / [Bar2(2)][Bar_seg(1)] / [Bar_tri(2)]
        textSpan: "col-span-2",
        images: [
            { url: "/photos/experience/barcelona/Barcelona.webp", span: "col-span-1" },
            { url: "/photos/experience/barcelona/Barcelona_segra.webp", span: "col-span-1" },
            { url: "/photos/experience/barcelona/Barcelona2.webp", span: "col-span-1" },
            { url: "/photos/experience/barcelona/Barcelona_tri.webp", span: "col-span-2" },
        ],
    },
    {
        year: "Summer 2023",
        yearNumber: "2023",
        location: "University of Geneva",
        country: "🇨🇭 Switzerland",
        category: "Internship",
        description:
            "IT Internship: Confluence → SharePoint migration, internal tooling development, and technical support for university staff.",
        tileStyle:
            "bg-gradient-to-br from-red-500/20 to-orange-500/20 border-red-500/30",
        textSpan: "col-span-3",
        images: [],
    },
    {
        year: "2022 — 2023",
        yearNumber: "2023",
        location: "Epitech Paris",
        country: "🇫🇷 France",
        category: "Bachelor's Year 1",
        description:
            "Low-level C projects (Minishell, RPG), CS fundamentals. Building a strong foundation in software engineering.",
        tileStyle:
            "bg-gradient-to-br from-yellow-500/20 to-pink-500/20 border-yellow-500/30",
        textSpan: "col-span-3",
        images: [],
    },
];
