export type ExperienceImage = {
    url: string;
    span: string;
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
    styles: string[];
    styleIndex: number;
};

export type ExperienceSectionProps = {
    title: string;
    subtitle: string;
    entries: ExperienceEntry[];
    styles: string[];
    startIndex: number;
    activeIndex: number;
    setActiveIndex: (index: number) => void;
    showYearCounter?: boolean;
    allYears?: string[];
};
