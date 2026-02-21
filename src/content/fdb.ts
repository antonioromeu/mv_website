interface FilmContent {
    titleEN: string;
    titlePT: string;
    altText: string;
    yearLocation: string;
    type: 'trailer' | 'film'; // Restricts this to only these two specific strings
}

export const fdbContent: Record<'en' | 'pt', FilmContent> = {
    en: {
        titleEN: "Ours is the Wasteland",
        titlePT: "Fora da Bouça",
        altText: "Outside the Bouça - Film Still",
        yearLocation: "Portugal, 2021",
        type: "film"
    },
    pt: {
        titleEN: "Ours is the Wasteland",
        titlePT: "Fora da Bouça",
        altText: "Fora da Bouça - Still do Filme",
        yearLocation: "Portugal, 2021",
        type: "film"
    }
};