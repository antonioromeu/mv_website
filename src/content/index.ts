import { landingContent } from './landing';
import { cdvContent } from './cdv';
import { fdbContent } from './fdb';
import { rtContent } from './rt';
import { aboutContent } from './about';
import { adContent } from './assistant_director';
import { festivalsContent } from './festivals';

// This creates a central source of truth for your entire site's data
export const allContent = {
    landing: landingContent,
    cdv: cdvContent,
    fdb: fdbContent,
    rt: rtContent,
    about: aboutContent,
    assistant: adContent,
    festivals: festivalsContent
};

// This type helper allows you to use 'allContent' safely in your main [lang]/index.astro page
export type AllContent = typeof allContent;