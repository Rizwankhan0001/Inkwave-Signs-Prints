import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Change SITE_URL to the real domain before deploying (used for canonical URLs & sitemap).
const SITE_URL = process.env.SITE_URL || "https://inkwaveprints.in";

export default defineConfig({
  site: SITE_URL,
  trailingSlash: "never",
  build: { format: "file" },
  integrations: [react(), sitemap({ filter: (page) => !page.includes("/404") })],
  vite: { plugins: [tailwindcss()] },
  server: { host: true, port: 5173 },
  devToolbar: { enabled: false },
});
