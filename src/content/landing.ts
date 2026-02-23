interface LandingContent {
    status: string;
    title: string;
    altText: string;
    description: string[];
}

export const landingContent: Record<'en' | 'pt', LandingContent> = {
    en: {
        status: "Coming Soon",
        title: "Behold the Man",
        altText: "Behold the Man - Mood",
        description: [
            "As a teenager I learned that desire can also be a wound. I aim to capture that instant: when the body learns devotion and dread in the same breath.",
            "Adolescence arrives as the body awakens, a founding moment when desire can be an experience of the sacred, or an omen of death. The film observes that threshold, giving it a place and form."
        ]
    },
    pt: {
        status: "Em Breve",
        title: "Eis o Homem",
        altText: "Eis o Homem - Mood",
        description: [
            "Na adolescência percebi que o desejo podia também ser ferida. Tenciono filmar esse instante em que o corpo aprende a crer e a temer num só suspiro.",
            "O romper desta idade chega como despertar da carne, momento fundador em que o desejo pode ser experiência do sagrado ou presságio de morte. O filme observa esse limiar e dá-lhe lugar e forma."
        ]
    }
};