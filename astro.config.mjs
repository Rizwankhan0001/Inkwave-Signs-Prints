import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// The site's public address (used for canonical URLs, sitemap & link previews).
// 1. On Netlify: its URL variable — the primary domain, which switches to your own
//    domain automatically once you connect one in Netlify → Domain management
// 2. Elsewhere: SITE_URL if you set it
// 3. Otherwise a placeholder for local builds
const SITE_URL = process.env.URL || process.env.SITE_URL || "https://inkwaveprints.in";

export default defineConfig({
  site: SITE_URL,
  trailingSlash: "never",
  build: { format: "file" },
  integrations: [react(), sitemap({ filter: (page) => !page.includes("/404") })],
  vite: { plugins: [tailwindcss()] },
  server: { host: true, port: 5173 },
  devToolbar: { enabled: false },
});
