# Overwatch Labs — Website

Company site + product pages (OWL, OmniArk, Ark), built with Astro + Tailwind.

## Structure

| Path | Purpose |
|---|---|
| `/` | Company landing page |
| `/products/owl` | OWL product page → `owl.overwatchlabs.dev` |
| `/products/omniark` | OmniArk product page → `omniark.overwatchlabs.dev` |
| `/products/ark` | Ark product page → `ark.overwatchlabs.dev` |
| `/api/waitlist` | Serverless endpoint → Google Sheets (via Apps Script webhook) |

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static + one serverless function
```

Copy `.env.example` to `.env` and set `GOOGLE_SHEETS_WEBHOOK_URL` for the waitlist to accept submissions.

## Deploy (Vercel)

1. Import the repo in Vercel — framework auto-detects as Astro
2. Add environment variable `GOOGLE_SHEETS_WEBHOOK_URL` (Project → Settings → Environment Variables)
3. Domains (Project → Domains):
   - `overwatchlabs.dev` (apex)
   - `www.overwatchlabs.dev`
   - `owl.overwatchlabs.dev` → rewrites/serves `/products/owl`
   - `omniark.overwatchlabs.dev` → `/products/omniark`
   - `ark.overwatchlabs.dev` → `/products/ark`

### Cloudflare DNS (DNS-only / grey cloud)

| Type | Name | Value |
|---|---|---|
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |
| CNAME | `owl` | `cname.vercel-dns.com` |
| CNAME | `omniark` | `cname.vercel-dns.com` |
| CNAME | `ark` | `cname.vercel-dns.com` |

Keep records DNS-only so Vercel issues SSL. Re-enable Cloudflare proxy later only with SSL mode "Full (strict)".

### Subdomain → path rewrites

Add to `vercel.json` when the subdomains go live:

```json
{
  "rewrites": [
    { "source": "/:path*", "has": [{ "type": "host", "value": "owl.overwatchlabs.dev" }], "destination": "/products/owl/:path*" },
    { "source": "/:path*", "has": [{ "type": "host", "value": "omniark.overwatchlabs.dev" }], "destination": "/products/omniark/:path*" },
    { "source": "/:path*", "has": [{ "type": "host", "value": "ark.overwatchlabs.dev" }], "destination": "/products/ark/:path*" }
  ]
}
```

## Future architecture (licensed downloads + portal)

- `portal.overwatchlabs.dev` — always-on service (Railway/Hetzner): auth, licenses, payment webhooks (Paddle/Lemon Squeezy)
- `dl.overwatchlabs.dev` — Cloudflare R2 + signed expiring URLs for packages/updates
- This site stays on Vercel as the front door
