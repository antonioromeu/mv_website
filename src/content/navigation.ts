// src/content/navigation.ts
import { layoutContent } from './layout';
import { cdvContent } from './cdv';
import { fdbContent } from './fdb';
import { rtContent } from './rt';

export const getNavItems = (lang: 'en' | 'pt') => {
    const t = layoutContent[lang];
    const cdv = cdvContent[lang];
    const fdb = fdbContent[lang];
    const rt = rtContent[lang];

    return [
        {
            title: t.films,
            links: [
                { 
                    label: lang === 'pt' ? cdv.titlePT : cdv.titleEN, 
                    href: "#chuvas-de-verao" 
                },
                { 
                    label: lang === 'pt' ? fdb.titlePT : fdb.titleEN, 
                    href: "#fora-da-bouca" 
                },
                { 
                    label: lang === 'pt' ? rt.titlePT : rt.titleEN, 
                    href: "#rio-torto" 
                },
            ]
        },
        {
            title: t.photos,
            links: [{ label: t.comingSoon, href: null }]
        },
        {
            title: t.info,
            links: [
                { label: t.about, href: "#about-me" },
                { label: t.festivals, href: "#festivals-awards" },
                { label: t.assistant, href: "#assistant-director" },
            ]
        }
    ];
};