// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://danielmarek22.github.io",
  base: "/daniel-portfolio/",
  output: "static",

  vite: {
    plugins: [tailwindcss()]
  }
});
