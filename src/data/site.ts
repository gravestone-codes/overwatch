export const site = {
  name: "Overwatch Labs",
  url: "https://www.overwatchlabs.dev",
  email: "info@overwatchlabs.dev",
  linkedin: "https://www.linkedin.com/company/overwatch-labs-rwanda",
  x: "https://x.com/overwatch_rw",
  founded: "2024",
  phone: "+250 789 567 629",
  phoneHref: "tel:+250789567629",
  trialDays: 30,
  // The OmniArk portal (accounts, trials, licences, downloads). Flip `portalLive`
  // once omniark.app is serving, and "Start free trial" / "Sign in" point there.
  portalUrl: "https://omniark.app",
  // OmniArk has its own site; every "OmniArk" link on this one points there.
  omniarkUrl: "https://omniark.app",
  portalLive: false,
};

export type Intent = "demo" | "trial" | "quote" | "cloud" | "owl" | "services" | "general";

export const intents: Record<Intent, { label: string; title: string; lede: string; submit: string }> = {
  demo: {
    label: "Book a demo",
    title: "See OmniArk on your own systems",
    lede: "A 30-minute walkthrough with an engineer, built around what you run and what you can't afford to lose.",
    submit: "Book my demo",
  },
  trial: {
    label: "Start free trial",
    title: `Try OmniArk free for ${site.trialDays} days`,
    lede: "Full product, no credit card. We help you set it up remotely, and you keep every backup you make.",
    submit: "Start my trial",
  },
  quote: {
    label: "Get a quote",
    title: "Get a quote for your organisation",
    lede: "Tell us roughly what you protect. You will usually have a clear price within one working day.",
    submit: "Get my quote",
  },
  cloud: {
    label: "Hear when Ark Cloud opens",
    title: "Hear first when Ark Cloud opens",
    lede: "Ark Cloud, a protected off-site copy of your backups in our data centre, is in development. Leave your details and we'll tell you when it opens.",
    submit: "Notify me",
  },
  owl: {
    label: "Hear when OWL opens",
    title: "Hear first when OWL opens",
    lede: "OWL, configuration backup and compliance for your network, is in development. Leave your details and we'll tell you when it opens.",
    submit: "Notify me",
  },
  services: {
    label: "Talk to an engineer",
    title: "Installation and managed backup",
    lede: "Our technicians can set OmniArk up for you, or run your entire backup operation under your licence.",
    submit: "Send request",
  },
  general: {
    label: "Contact us",
    title: "Talk to Overwatch Labs",
    lede: "Questions about our products or services. A real person usually replies within one working day.",
    submit: "Send message",
  },
};

export const products = [
  { name: "OmniArk", href: site.omniarkUrl, icon: "ShieldCheck", blurb: "Backup and recovery that proves it works", external: true },
  { name: "OWL", href: "/owl", icon: "Network", blurb: "Network backup, change tracking and compliance", external: false },
] as const;

export const nav = [
  { label: "Products", href: "/#products", children: "products" },
  { label: "Industries", href: "/industries/healthcare", children: "industries" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Company", href: "/company" },
] as const;

export const contactHref = (intent: Intent) => `/contact?intent=${intent}`;

export const trialHref = () => (site.portalLive ? `${site.portalUrl}/signup` : contactHref("trial"));
