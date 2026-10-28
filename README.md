# Inkwave Signs & Prints — website

Built with **Astro 5** (pre-rendered HTML for SEO) + **React** islands, **Tailwind CSS v4** and **Framer Motion**.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + build to dist/
npm run preview    # serve the built site
```

## Where things live

| What | File |
| --- | --- |
| Business name, phone, address, services, prices, projects, FAQs | `src/data.ts` |
| Service detail text (features, materials, warranty) | `src/details.ts` |
| SEO page copy: service pages, area pages, price guides | `src/content.ts` |
| Opening hours (live "Open now" badge) | `src/hours.ts` |
| Colours (light & dark theme) | top of `src/index.css` |
| Page `<head>`, SEO tags, business schema, analytics | `src/layouts/Base.astro` |
| Pages / URLs | `src/pages/` |

## Pages generated (44)

- `/` home
- `/services` + 16 service pages, e.g. `/services/led-sign-board`
- `/industries` + 8 industry pages
- `/areas` + 8 area pages
- `/guides` + 4 price guides
- `/privacy`, `/terms`, 404
- `sitemap-index.xml` is generated automatically on build

## Settings (`.env`)

Copy `.env.example` to `.env`. Each feature turns on when its value is set:

- `SITE_URL` — your real domain (canonical URLs + sitemap)
- `PUBLIC_GA_ID` — Google Analytics 4. Calls, WhatsApp, email, directions and form submits are tracked as `generate_lead`
- `PUBLIC_GSC_VERIFICATION` / `PUBLIC_BING_VERIFICATION` — Search Console / Bing verification
- `PUBLIC_WEB3FORMS_KEY` — free key from web3forms.com; every form is then emailed to you

## Deploy

Works on **Vercel**, **Netlify** or **Cloudflare Pages** (free): build command `npm run build`, output folder `dist`. Add the `.env` values in the host's dashboard.

## Launch checklist (things code can't do)

1. Replace placeholders: phone, address, map coordinates (`Base.astro`), GSTIN, domain (`robots.txt`, `SITE_URL`), social links (`SOCIALS` in `data.ts`).
2. Replace the "4.9 Google rating / 600+ reviews" text with real numbers, or remove it.
3. Replace sample projects, client names and testimonials with real ones (with permission).
4. Add real photos: export as WebP, name them descriptively (`led-sign-board-cafe-gurugram.webp`), and write alt text.
5. Create/claim the **Google Business Profile**: categories "Sign shop" + "Printing service", same name/address/phone as the site, 30+ photos, weekly posts, reply to every review.
6. List the business with the **same name, address & phone** on Justdial, IndiaMART, Sulekha, Facebook, Instagram.
7. Submit `https://YOURDOMAIN/sitemap-index.xml` in Google Search Console and Bing Webmaster Tools.
8. Ask every happy customer for a Google review (QR code on invoices and installed signs).
9. Publish a new guide or project every month. Add guides to `GUIDES` in `src/content.ts`.
