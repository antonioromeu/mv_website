interface FilmContent {
    titleEN: string;
    titlePT: string;
    altText: string;
    yearLocation: string;
    type: 'trailer' | 'film'; // Restricts this to only these two specific strings
}

export const rtContent: Record<'en' | 'pt', FilmContent> = {
    en: {
        titleEN: "Rio Torto",
        titlePT: "Rio Torto",
        altText: "Rio Torto - Film Still",
        yearLocation: "Portugal, 2019",
        type: "film"
    },
    pt: {
        titleEN: "Rio Torto",
        titlePT: "Rio Torto",
        altText: "Rio Torto - Still do Filme",
        yearLocation: "Portugal, 2019",
        type: "film"
    }
};