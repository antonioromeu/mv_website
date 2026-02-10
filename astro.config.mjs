// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    build: {
        assets: 'assets' // Change '_astro' to 'assets' to avoid GitHub's Jekyll filter
    },
    site: 'http://marioveloso.pt',
    outDir: 'docs',
    vite: {
        plugins: [tailwindcss()]
    }
});