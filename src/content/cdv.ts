interface FilmContent {
    titleEN: string;
    titlePT: string;
    altText: string;
    yearLocation: string;
    type: 'trailer' | 'film'; // Restricts this to only these two specific strings
}

export const cdvContent: Record<'en' | 'pt', FilmContent> = {
    en: {
        titleEN: "Summer Rains",
        titlePT: "Chuvas de Verão",
        altText: "Summer Showers - Film Still",
        yearLocation: "Portugal, 2024",
        type: "trailer"
    },
    pt: {
        titleEN: "Summer Rains",
        titlePT: "Chuvas de Verão",
        altText: "Chuvas de Verão - Still do Filme",
        yearLocation: "Portugal, 2024",
        type: "trailer"
    }
};