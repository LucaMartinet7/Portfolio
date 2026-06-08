export type ExperienceImage = {
    url: string;
    label: string;
    type?: "video";
};

export type ExperienceEntry = {
    year: string;
    yearNumber: string;
    location: string;
    country: string;
    category: string;
    description: string;
    images: ExperienceImage[];
};

export type ExperienceCardProps = {
    exp: ExperienceEntry;
    index: number;
    current?: boolean;
};
