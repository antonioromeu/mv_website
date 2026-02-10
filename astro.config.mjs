// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Replace with your info
  build: {
    // 4. Change '_astro' to 'assets' to avoid GitHub's Jekyll filter
    assets: 'assets'
  },
  site: 'http://marioveloso.pt', 
//   base: '/mv_website',
  outDir: 'docs',
  vite: {
    plugins: [tailwindcss()]
  }
});