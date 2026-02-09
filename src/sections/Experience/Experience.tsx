export default function Experience() {
    const experiences = [
        {
            year: "2022 — 2023",
            location: "Epitech Paris",
            country: "🇫🇷 France",
            category: "Bachelor's Year 1",
            description: "Low-level C projects (Minishell, RPG), CS fundamentals. Building a strong foundation in software engineering.",
            images: [
                { url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80", span: "col-span-2 row-span-2" },
                { url: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&q=80", span: "col-span-1 row-span-1" },
                { url: "https://images.unsplash.com/photo-1549144511-f099e773c147?w=800&q=80", span: "col-span-1 row-span-1" },
                { url: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80", span: "col-span-1 row-span-2" },
                { url: "https://images.unsplash.com/photo-1550340499-a6c60fc8287c?w=800&q=80", span: "col-span-1 row-span-1" },
            ]
        },
        {
            year: "Summer 2023",
            location: "University of Geneva",
            country: "🇨🇭 Switzerland",
            category: "Internship",
            description: "IT Internship: Confluence → SharePoint migration, internal tooling development, and technical support for university staff.",
            images: [
                { url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80", span: "col-span-1 row-span-2" },
                { url: "https://images.unsplash.com/photo-1532256403-6e8f14d1ecea?w=800&q=80", span: "col-span-2 row-span-1" },
                { url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80", span: "col-span-1 row-span-1" },
                { url: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=80", span: "col-span-2 row-span-2" },
            ]
        },
        {
            year: "2023 — 2024",
            location: "Epitech Barcelona",
            country: "🇪🇸 Spain",
            category: "Bachelor's Year 2",
            description: "Systems programming, networking, and advanced algorithms. Expanding knowledge in distributed systems and architecture.",
            images: [
                { url: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80", span: "col-span-2 row-span-1" },
                { url: "https://images.unsplash.com/photo-1562883676-8c7feb83f09b?w=800&q=80", span: "col-span-1 row-span-2" },
                { url: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80", span: "col-span-1 row-span-1" },
                { url: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=800&q=80", span: "col-span-2 row-span-2" },
                { url: "https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?w=800&q=80", span: "col-span-1 row-span-1" },
            ]
        },
        {
            year: "2024 — 2025",
            location: "Epitech Berlin",
            country: "🇩🇪 Germany",
            category: "Bachelor's Year 3",
            description: "Large-scale projects, advanced architecture, and deployment. Completing Bachelor's with capstone projects.",
            images: [
                { url: "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&q=80", span: "col-span-1 row-span-1" },
                { url: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=800&q=80", span: "col-span-2 row-span-2" },
                { url: "https://images.unsplash.com/photo-1587330979470-3595ac045ab7?w=800&q=80", span: "col-span-1 row-span-2" },
                { url: "https://images.unsplash.com/photo-1566404791232-af9fe0ae8f8b?w=800&q=80", span: "col-span-2 row-span-1" },
                { url: "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?w=800&q=80", span: "col-span-1 row-span-1" },
            ]
        },
        {
            year: "Summer 2025",
            location: "CyberPeace Institute",
            country: "🇨🇭 Switzerland",
            category: "Internship",
            description: "Working on cybersecurity initiatives and digital peace advocacy. Contributing to global cyber stability efforts.",
            images: [
                { url: "https://images.unsplash.com/photo-1587484438485-1575b0421dc5?w=800&q=80", span: "col-span-2 row-span-1" },
                { url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80", span: "col-span-1 row-span-2" },
                { url: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=80", span: "col-span-1 row-span-1" },
                { url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80", span: "col-span-2 row-span-2" },
            ]
        },
        {
            year: "2025 — 2026",
            location: "Cardiff Metropolitan",
            country: "🏴󠁧󠁢󠁷󠁬󠁳󠁿 Wales",
            category: "Master's Year 1",
            description: "Master's 1st year exchange program at Cardiff Metropolitan University. Advanced studies in computer science and international collaboration.",
            images: [
                { url: "https://images.unsplash.com/photo-1585912584130-03c0747d005b?w=800&q=80", span: "col-span-1 row-span-1" },
                { url: "https://images.unsplash.com/photo-1598640996100-f7bc30d75d3a?w=800&q=80", span: "col-span-2 row-span-1" },
                { url: "https://images.unsplash.com/photo-1593453722816-5551f3fc3f1e?w=800&q=80", span: "col-span-1 row-span-2" },
                { url: "https://images.unsplash.com/photo-1615648757605-6eb7f30728cd?w=800&q=80", span: "col-span-2 row-span-2" },
                { url: "https://images.unsplash.com/photo-1602075432748-82d264e2b01b?w=800&q=80", span: "col-span-1 row-span-1" },
            ]
        },
        {
            year: "2026 — 2027",
            location: "Epitech",
            country: "🎓 Master's Year 2",
            category: "Master's Year 2",
            description: "Completing Master's degree with advanced specialization, research projects, and thesis work.",
            images: [
                { url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80", span: "col-span-2 row-span-2" },
                { url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80", span: "col-span-1 row-span-1" },
                { url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80", span: "col-span-1 row-span-1" },
                { url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80", span: "col-span-1 row-span-2" },
                { url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80", span: "col-span-1 row-span-1" },
            ]
        }
    ];

    // Different styles for each tile
    const tileStyles = [
        "bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-500/30",
        "bg-gradient-to-br from-red-500/20 to-orange-500/20 border-red-500/30",
        "bg-gradient-to-br from-yellow-500/20 to-pink-500/20 border-yellow-500/30",
        "bg-gradient-to-br from-green-500/20 to-cyan-500/20 border-green-500/30",
        "bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-purple-500/30",
        "bg-gradient-to-br from-pink-500/20 to-rose-500/20 border-pink-500/30",
        "bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border-indigo-500/30",
    ];

    // Different text tile positions for each experience
    const textPositions = [
        "col-span-1 md:col-span-2 row-span-2", // Paris - top left (default)
        "col-span-2 md:col-span-2 row-span-2 col-start-3 md:col-start-3", // Geneva - top right
        "col-span-1 md:col-span-2 row-span-2 row-start-2", // Barcelona - bottom left
        "col-span-2 md:col-span-2 row-span-2 col-start-3 md:col-start-3 row-start-1", // Berlin - top right
        "col-span-1 md:col-span-1 row-span-2 col-start-2 md:col-start-2", // CyberPeace - middle
        "col-span-2 md:col-span-2 row-span-2 col-start-1 md:col-start-1 row-start-2", // Cardiff - bottom left
        "col-span-1 md:col-span-2 row-span-2 col-start-3 md:col-start-3 row-start-2", // Master's - bottom right
    ];

    return (
        <>
            {experiences.map((exp, index) => (
                <section
                    key={index}
                    id={index === 0 ? "experience" : undefined}
                    className="min-h-[150vh] w-full relative py-32 px-6"
                >
                    {/* Background - solid dark */}
                    <div className="absolute inset-0 bg-neutral-950"></div>

                    <div className="relative z-10 max-w-7xl mx-auto">
                        {/* Photo Grid Collage with Text */}
                        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
                            {/* Text Content Tile with Dynamic Styling and Position */}
                            <div className={`rounded-2xl overflow-hidden ${textPositions[index]} ${tileStyles[index]} border p-8 flex flex-col justify-center backdrop-blur-sm`}>
                                <p className="text-base md:text-lg text-white/60 uppercase tracking-wider mb-4">
                                    {exp.category}
                                </p>
                                <p className="text-2xl md:text-3xl text-white/70 mb-2">{exp.year}</p>
                                <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{exp.location}</h2>
                                <p className="text-2xl md:text-3xl text-white/80 mb-6">{exp.country}</p>
                                <p className="text-base md:text-lg text-white/70 leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>

                            {/* Photo Images */}
                            {exp.images.map((img, imgIndex) => (
                                <div
                                    key={imgIndex}
                                    className={`${img.span} rounded-2xl overflow-hidden group relative`}
                                >
                                    <div
                                        className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                        style={{
                                            backgroundImage: `url(${img.url})`,
                                        }}
                                    >
                                        {/* Subtle overlay */}
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Scroll indicator on first card */}
                        {index === 0 && (
                            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
                                <svg
                                    className="w-6 h-6 text-white/50"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                    />
                                </svg>
                            </div>
                        )}
                    </div>
                </section>
            ))}
        </>
    );
}
