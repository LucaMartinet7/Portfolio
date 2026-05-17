export type ExperienceImage = {
    url: string;
    span: string;
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
    tileStyle: string;
    textSpan?: string; // css grid span classes for the text tile, default "col-span-1 row-span-1"
};

export type ExperienceCardProps = {
    exp: ExperienceEntry;
    index: number;
    isActive?: boolean;
};

