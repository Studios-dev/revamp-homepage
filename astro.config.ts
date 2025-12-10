// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss, { type PluginOptions } from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap()],
  vite: {
    // @ts-expect-error types are jank 
	plugins: [tailwindcss()],
  },
  server: {
    port: 3000,
  },
  prefetch: {
    defaultStrategy: "viewport",
  },
  experimental: {
		fonts: [
			{
				provider: fontProviders.google(),
				name: "Inter",
				cssVariable: "--font-inter",
			},
		],
	},
});
