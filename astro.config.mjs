// astro.config.mjs
import { defineConfig } from 'astro/config';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
    site: isProd
        ? 'https://k2210000.github.io/illustrator-page/'
        : 'http://localhost:4321',
    base: isProd ? '/illustrator-page/' : '/',  // ★ dev 用 '/', build 用 '/illustrator-page/'
});
