interface ExperienceCardProps {
    year: string;
    location: string;
    country: string;
    description: string;
    backgroundImage: string;
}

export default function ExperienceCard({
    year,
    location,
    country,
    description,
    backgroundImage,
}: ExperienceCardProps) {
    return (
        <div className="group relative rounded-2xl border border-white/10 overflow-hidden min-h-[400px] transition-transform duration-300 hover:scale-[1.02]">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                }}
            >
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/75 to-black/85"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                <div>
                    <p className="text-sm text-white/70 font-medium">{year}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">{location}</h3>
                    <p className="mt-1 text-white/80">{country}</p>
                </div>

                <div className="mt-6">
                    <p className="text-white/90 leading-relaxed">{description}</p>
                </div>
            </div>
        </div>
    );
}

