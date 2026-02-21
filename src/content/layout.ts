interface LayoutContent {
    films: string;
    photos: string;
    info: string;
    comingSoon: string;
    about: string;
    festivals: string;
    assistant: string;
    filmmaker: string;
}

export const layoutContent: Record<'en' | 'pt', LayoutContent> = {
    pt: {
        films: "Filmes",
        photos: "Fotos",
        info: "Info",
        comingSoon: "Em Breve",
        about: "Sobre Mim",
        festivals: "Festivais & Prémios",
        assistant: "Assistente de Realização",
        filmmaker: "Realizador, Portugal"
    },
    en: {
        films: "Films",
        photos: "Photos",
        info: "Info",
        comingSoon: "Coming Soon",
        about: "About Me",
        festivals: "Festivals & Awards",
        assistant: "Assistant Director",
        filmmaker: "Filmmaker, Portugal"
    }
};