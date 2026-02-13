// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  site: "https://danielmarek22.github.io",
  base: isProd ? "/daniel-portfolio/" : "/",
  output: "static",

  vite: {
    plugins: [tailwindcss()]
  }
});
