import { defineConfig, fontProviders } from "astro/config";
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
  // The stylesheet goes inside each page, so nothing has to download before the first paint.
  build: { inlineStylesheets: "always" },
  // Fonts are downloaded at build time and served from this site, with size-matched fallbacks while they load.
  fonts: [
    { provider: fontProviders.google(), name: "Schibsted Grotesk", cssVariable: "--font-display", weights: ["500 900"], styles: ["normal"], fallbacks: ["sans-serif"] },
    { provider: fontProviders.google(), name: "Instrument Sans", cssVariable: "--font-body", weights: ["400 700"], styles: ["normal"], fallbacks: ["sans-serif"] },
    {
      provider: fontProviders.google(),
      name: "Martian Mono",
      cssVariable: "--font-mono",
      weights: ["300 600"],
      styles: ["normal"],
      fallbacks: ["monospace"],
      options: { experimental: { variableAxis: { wdth: [["75", "112.5"]] } } },
    },
  ],
  adapter: vercel(),
  integrations: [sitemap({ filter: (page) => !page.includes("/sign-in") })],
});
