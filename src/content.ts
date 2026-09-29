/**
 * All site copy and data in one place. Edit this file to update the site;
 * the components only handle presentation.
 */

export const site = {
    name: "Luca Martinet",
    url: "https://lucamartinet.dev",
    email: "lucamartinetwork@gmail.com",
    github: "https://github.com/LucaMartinet7",
    githubUser: "LucaMartinet7",
    linkedin: "https://www.linkedin.com/in/luca-martinet/",
    repo: "https://github.com/LucaMartinet7/Portfolio",
    cv: {
        href: "/CV_Luca_Martinet_2026.pdf",
        label: "Luca Martinet, CV",
        meta: "PDF, 1 page, updated January 2026",
    },
} as const;

export const sections = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof sections)[number]["id"];

export const hero = {
    lead: "Software developer and student at Epitech. Systems work, networking and clean interfaces.",
    status: "open to internships, collaborations and interesting problems",
    portraitAlt: "Portrait of Luca Martinet on a seaside train platform",
};

export const about = {
    bio: "I’m Luca, a software development student at Epitech. I build reliable systems and ship real projects, from low-level C to full-stack web applications.",
    quote: {
        text: "If you’re not improving, you’re falling behind.",
        author: "Chris Bumstead, Classic Physique Mr. Olympia",
    },
    facts: [
        { label: "studying", value: "Software engineering, Epitech" },
        { label: "focus", value: "Systems, networking, web" },
        { label: "speaks", value: "French, English, Spanish (A2)" },
    ],
    skills: [
        {
            group: "languages",
            items: ["C", "C++", "Python", "Java", "TypeScript", "Bash"],
        },
        { group: "web", items: ["React", "Tailwind CSS"] },
        {
            group: "tools",
            items: ["Docker", "Git", "Linux", "MySQL", "PostgreSQL"],
        },
    ],
};

export type Media = {
    /** Full-size file, opened in the viewer. */
    src: string;
    /** 320x320 square preview. */
    thumb: string;
    label: string;
    /**
     * Videos: `src` is the H.264 MP4 (plays everywhere), `webm` a VP9 copy
     * for browsers built without H.264, `poster` the still shown first.
     */
    video?: { poster: string; webm: string };
};

export type Experience = {
    period: string;
    place: string;
    country: string;
    kind: string;
    description: string;
    media: Media[];
};

const photo = (dir: string, name: string, label: string): Media => ({
    src: `/images/experience/${dir}/${name}.webp`,
    thumb: `/images/experience/${dir}/${name}-thumb.webp`,
    label,
});

/** Newest first. The first entry is marked as current. */
export const experience: Experience[] = [
    {
        period: "2025 - 2026",
        place: "Cardiff Metropolitan University",
        country: "Wales",
        kind: "Master’s year 1",
        description:
            "Exchange year at Cardiff Metropolitan University. Advanced computer science studies and international collaboration.",
        media: [
            photo("cardiff", "campus", "Campus"),
            photo("cardiff", "city", "City"),
            photo("cardiff", "room", "Room"),
        ],
    },
    {
        period: "Summer 2025",
        place: "CyberPeace Institute",
        country: "Switzerland",
        kind: "Internship",
        description:
            "Full-stack development intern in Geneva. Refactored Sirocco, a Python incident-analysis platform, integrated OpenAI and Mistral models, and built a real-time TypeScript front end with automated BigQuery validation.",
        media: [
            photo("cyberpeace", "office", "Office"),
            {
                src: "/images/experience/cyberpeace/workspace.mp4",
                thumb: "/images/experience/cyberpeace/workspace-thumb.webp",
                label: "Workspace",
                video: {
                    poster: "/images/experience/cyberpeace/workspace-poster.webp",
                    webm: "/images/experience/cyberpeace/workspace.webm",
                },
            },
            photo("cyberpeace", "geneva", "Geneva"),
        ],
    },
    {
        period: "2024 - 2025",
        place: "Epitech Berlin",
        country: "Germany",
        kind: "Bachelor’s year 3",
        description:
            "Large-scale projects, software architecture and deployment. Completed the Bachelor’s with capstone projects.",
        media: [
            photo("berlin", "city", "Berlin"),
            photo("berlin", "campus", "Campus"),
        ],
    },
    {
        period: "2023 - 2024",
        place: "Epitech Barcelona",
        country: "Spain",
        kind: "Bachelor’s year 2",
        description:
            "Systems programming, networking and advanced algorithms. Distributed systems and architecture.",
        media: [
            photo("barcelona", "city", "Barcelona"),
            photo("barcelona", "segria", "Segrià"),
            photo("barcelona", "streets", "City"),
            photo("barcelona", "campus", "Campus"),
        ],
    },
    {
        period: "Summer 2023",
        place: "University of Geneva",
        country: "Switzerland",
        kind: "Internship",
        description:
            "IT internship: Confluence to SharePoint migration, internal tooling and technical support for university staff.",
        media: [],
    },
    {
        period: "2022 - 2023",
        place: "Epitech Paris",
        country: "France",
        kind: "Bachelor’s year 1",
        description:
            "Low-level C projects (Minishell, an RPG), computer science fundamentals and a strong foundation in software engineering.",
        media: [],
    },
];

export type Project = {
    title: string;
    description: string;
    source: string;
    live?: string;
    tags: string[];
};

/** The first project is featured. */
export const projects: Project[] = [
    {
        title: "BeeR-Type",
        description:
            "Multiplayer 2D shooter in the spirit of R-Type. Modern C++ with an entity-component-system engine, a UDP networking layer, and separate server, client and engine modules.",
        source: "https://github.com/LucaMartinet7/R-Type",
        tags: ["C++", "Networking", "ECS"],
    },
    {
        title: "AREA",
        description:
            "IFTTT-style automation platform with a backend, a web front end and a mobile app.",
        source: "https://github.com/LucaMartinet7/Area-Tek3",
        tags: ["Python", "Dart", "MySQL"],
    },
    {
        title: "Neural Network",
        description:
            "Chessboard state analysis through a custom machine-learning pipeline.",
        source: "https://github.com/LucaMartinet7/Neural-Network",
        tags: ["Python", "ML"],
    },
    {
        title: "Arcade",
        description:
            "Game platform that swaps graphics libraries at runtime through shared objects.",
        source: "https://github.com/LucaMartinet7/Arcade",
        tags: ["C++", "Plugins"],
    },
    {
        title: "Portfolio",
        description:
            "This site. React and Tailwind CSS, prerendered to static HTML and served with a strict Content Security Policy.",
        source: "https://github.com/LucaMartinet7/Portfolio",
        tags: ["React", "TypeScript", "Security"],
    },
];

export const contact = {
    heading: "Let’s work together.",
    body: "Open to internships, collaborations and interesting problems.",
};
