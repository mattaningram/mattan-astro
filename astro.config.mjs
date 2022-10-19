import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://astro.build/config
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  vite: {
    resolve: {
      alias: {
        '@/': `${path.resolve(__dirname, 'src')}/`
      }
    },
    css: {
      devSourcemap: true,
      preprocessorOptions: {
        scss: {
          additionalData (source, fp) {
            if (path.basename(path.dirname(fp)) === 'global') return source;
            return `@import "@/styles/global/global.scss"; ${source}`
          },
        },
      },
    },
  },
});