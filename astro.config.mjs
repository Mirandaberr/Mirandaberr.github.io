// @ts-check
import { defineConfig } from 'astro/config';
import { sitio } from './src/data/sitio.mjs';

export default defineConfig({
  site: sitio.url,
});
