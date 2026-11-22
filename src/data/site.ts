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
  // Sign in: Ark Cloud has its own accounts; the page points there and says how to reach us for the rest.
  signInUrl: "/sign-in",
  // OmniArk has its own site; every "OmniArk" link on this one points there.
  omniarkUrl: "https://omniark.app",
  // Ark Cloud is self-serve: people sign up and pay on its own site.
  arkcloudUrl: "https://arkcloud.online",
  // Pillar has its own site too (pillar-website). The address is a placeholder until it is confirmed.
  pillarUrl: "https://pillar.overwatchlabs.dev",
};

export type Intent = "omniark" | "pillar" | "owl" | "cloud" | "ark" | "general";

export const intents: Record<Intent, { label: string; title: string; lede: string; submit: string }> = {
  general: {
    label: "Ask a question",
    title: "Talk to Overwatch Labs",
    lede: "Questions about our products or services. A real person usually replies within one working day.",
    submit: "Send message",
  },
  ark: {
    label: "Ark Cloud for a class or team",
    title: "Ark Cloud for your class or team",
    lede: "Tell us what you're teaching or building, and an engineer will help you set it up.",
    submit: "Send request",
  },
  omniark: {
    label: "OmniArk waiting list",
    title: "Join the OmniArk waiting list",
    lede: "Backup and recovery on your own premises. Leave your details and we'll tell you as soon as it opens.",
    submit: "Join the waiting list",
  },
  pillar: {
    label: "Pillar waiting list",
    title: "Join the Pillar waiting list",
    lede: "Rooms, restaurant, bar and events on one system, hosted by us. Leave your details and we'll tell you as soon as it opens.",
    submit: "Join the waiting list",
  },
  owl: {
    label: "OWL waiting list",
    title: "Join the OWL waiting list",
    lede: "Configuration backup and compliance for your network. Leave your details and we'll tell you as soon as it opens.",
    submit: "Join the waiting list",
  },
  cloud: {
    label: "Off-site copy waiting list",
    title: "Join the waiting list for OmniArk's off-site copy",
    lede: "A protected copy of your OmniArk backups in our data centre. Leave your details and we'll tell you when it opens.",
    submit: "Join the waiting list",
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
