import type { APIRoute } from "astro";

/** robots.txt always points at the sitemap on the site's real address. */
export const GET: APIRoute = ({ site }) => {
  const base = site!.toString().replace(/\/$/, "");
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap-index.xml\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
