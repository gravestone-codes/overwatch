# Overwatch Labs — company site

The company site at https://www.overwatchlabs.dev, built with Astro and deployed on Vercel.
Each product has its own site (OmniArk: https://omniark.app); this one introduces the company and its products.

## Structure

| Path | What it is |
|---|---|
| `src/layouts/Site.astro` | Page shell: head, theme, header, footer, menu |
| `src/styles/site.css` | The whole design system: tokens for light and dark, components |
| `src/components/site/` | Header, footer, product bands, services switch, industries table, contact routes |
| `src/data/` | Products and their status, services, industries, contact intents |
| `src/pages/` | Home, about, careers, services, pricing, industries, contact, readiness check, privacy, 404 |
| `src/pages/api/lead.ts` | Contact and readiness form endpoint → Google Sheets (Apps Script webhook) |

Product status lives in `src/data/company.ts` (`available`). Industry stories live in `src/data/industries.ts`.

## Develop

Node 22.12 or newer.

```bash
npm install
npm run dev        # http://localhost:4321
npm run check      # type check
npm run build      # static pages + one serverless function
```

Copy `.env.example` to `.env` and set `GOOGLE_SHEETS_WEBHOOK_URL` for the forms to send.

## Deploy

Vercel builds every push: branches get a preview URL, `main` goes to production.
Set `GOOGLE_SHEETS_WEBHOOK_URL` in the Vercel project's environment variables.
