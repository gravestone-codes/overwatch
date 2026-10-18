import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.overwatchlabs.dev",
  output: "static",
  // Each product has its own site; OmniArk's is omniark.app. Older addresses keep working.
  redirects: {
    "/omniark": "https://omniark.app",
    "/products/omniark": "https://omniark.app",
    "/products/owl": "/contact?intent=owl",
    "/products/ark": "/contact?intent=cloud",
    "/company": "/about",
    "/owl": "/contact?intent=owl",
  },
  devToolbar: { enabled: false },
  adapter: vercel(),
  integrations: [sitemap()],
});
