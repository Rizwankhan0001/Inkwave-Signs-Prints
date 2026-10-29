# Inkwave Signs & Prints — website

A simple, fast site built with **Astro 5** (plain pre-rendered HTML) and **Tailwind CSS v4**. No JavaScript framework is sent to visitors — only tiny scripts for the mobile menu and enquiry forms.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + build to dist/
npm run preview    # serve the built site
```

## Where things live

| What | File |
| --- | --- |
| Business name, phone, address, services, prices, projects, reviews, FAQs | `src/data.ts` |
| The 6 services, their starting prices, and the products under each | `src/data.ts`, `src/details.ts` |
| Service page text for Google (titles, intro, FAQs) | `src/content.ts` |
| Areas served + local pages | `src/areas.ts` |
| Home page | `src/pages/index.astro` |
| Header / footer | `src/components/Header.astro`, `Footer.astro` |
| Colours | top of `src/index.css` |
| SEO tags, business schema, analytics | `src/layouts/Base.astro` |

## Pages (187)

- `/` home: hero, services, our work, "get your price" form, why us, reviews, FAQ, contact
- `/services` + 6 service pages, e.g. `/services/led-neon-sign-boards`
- `/areas` + 25 area pages, e.g. `/areas/golf-course-road`
- 150 local pages (6 services × 25 areas), e.g. `/led-sign-board-in-sector-29-gurugram`
- `/privacy`, `/terms`, 404
- `sitemap-index.xml` and `robots.txt` are generated on build

To add an area, add it to `AREAS_LOCAL` in `src/areas.ts` and 7 pages are created automatically.

## Settings (`.env`)

Copy `.env.example` to `.env`. Each feature turns on when its value is set:

- `SITE_URL` — your real domain (canonical URLs + sitemap). On Netlify, if left empty, the Netlify address is used automatically
- `PUBLIC_GA_ID` — Google Analytics 4. Calls, WhatsApp, email, directions and form submits are tracked as `generate_lead`
- `PUBLIC_GSC_VERIFICATION` / `PUBLIC_BING_VERIFICATION` — Search Console / Bing verification
- `PUBLIC_WEB3FORMS_KEY` — free key from web3forms.com; every form is then emailed to you

## Deploy

Set up for **Netlify** via `netlify.toml` (build command, Node 20, caching & security headers). Add the `.env` values under Site configuration → Environment variables, then trigger a new deploy. Also works on Vercel / Cloudflare Pages: build command `npm run build`, output folder `dist`.

## Launch checklist (things code can't do)

1. Replace placeholders: phone, address, map coordinates (`Base.astro`), GSTIN, domain (`SITE_URL`), social links (`SOCIALS` in `data.ts`).
2. Replace the "4.9 Google rating / 600+ reviews" text with real numbers, or remove it.
3. Replace sample projects, client names and testimonials with real ones (with permission).
4. Add real photos: export as WebP, name them descriptively (`led-sign-board-cafe-gurugram.webp`), and write alt text.
5. Create/claim the **Google Business Profile**: categories "Sign shop" + "Printing service", same name/address/phone as the site, 30+ photos, weekly posts, reply to every review.
6. List the business with the **same name, address & phone** on Justdial, IndiaMART, Sulekha, Facebook, Instagram.
7. Submit `https://YOURDOMAIN/sitemap-index.xml` in Google Search Console and Bing Webmaster Tools.
8. Ask every happy customer for a Google review (QR code on invoices and installed signs).
9. Replace the project illustrations with real photos (see the note at the top of `src/components/WorkArt.astro`).
