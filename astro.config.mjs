// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from "@astrojs/react";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],

  i18n: {
    defaultLocale: "sr",
    locales: ["sr", "en", "de"],
  },

  output: "server",
  adapter: cloudflare()
});