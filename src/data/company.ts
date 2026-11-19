import { site, contactHref } from "./site";
import { industries } from "./industries";

// Everything the company site says about its products. Each product has its own site;
// this one only introduces them.
export type ProductKey = "oa" | "ac" | "pl" | "ow";

export const products: {
  key: ProductKey;
  name: string;
  category: string;
  available: boolean;
  /** One line on the product band. */
  line: string;
  /** One line in menus. */
  short: string;
  href: string;
  external: boolean;
  art: "bays" | "apps" | "tables" | "ports";
}[] = [
  {
    key: "oa",
    name: "OmniArk",
    category: "Backup and recovery",
    available: true,
    line: "Immutable backups and fast recovery on your own premises. An off-site copy in our data centre is coming.",
    short: "Backup and recovery on your premises",
    href: site.omniarkUrl,
    external: true,
    art: "bays",
  },
  {
    key: "ac",
    name: "Ark Cloud",
    category: "Cloud platform",
    available: true,
    line: "Connect a repository and Ark Cloud builds it, runs it and gives you a link.",
    short: "Put your code online from a repository",
    href: site.arkcloudUrl,
    external: true,
    art: "apps",
  },
  {
    key: "pl",
    name: "Pillar",
    category: "Hospitality",
    available: true,
    line: "Rooms, restaurant, bar and events on one system. We host it; your staff open a link.",
    short: "Hotel and restaurant management, hosted by us",
    href: site.pillarUrl,
    external: true,
    art: "tables",
  },
  {
    key: "ow",
    name: "OWL",
    category: "Network governance",
    available: false,
    line: "Every network change tracked, and compliance scored daily.",
    short: "Configuration backup and compliance",
    href: contactHref("owl"),
    external: false,
    art: "ports",
  },
];

export const productByKey = (key: ProductKey) => products.find((p) => p.key === key)!;

// An add-on to OmniArk, not a product of its own: it copies OmniArk's backups to our data centre.
// It wears OmniArk's colour wherever it appears.
export const offsite = {
  name: "Off-site copy",
  full: "OmniArk off-site copy",
  line: "A protected copy of your OmniArk backups in our data centre, run by us.",
  href: contactHref("cloud"),
};

export const companyLinks = [
  { label: "About us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const footer = [
  {
    title: "Products",
    links: [
      ...products.map((p) => ({ label: p.name, href: p.href, soon: !p.available, external: p.external })),
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Installation", href: "/services#installation" },
      { label: "Managed operations", href: "/services#managed" },
      { label: "Support and training", href: "/services#support" },
    ],
  },
  {
    title: "Industries",
    links: industries.map((i) => ({ label: i.name, href: `/industries/${i.slug}` })),
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
      { label: "Readiness check", href: "/readiness" },
      { label: "Privacy", href: "/privacy" },
      { label: "LinkedIn", href: site.linkedin, external: true },
      { label: "X (Twitter)", href: site.x, external: true },
    ],
  },
];

// Services: what we do around every product. Shared by the services band, the services page and pricing.
export const services = [
  {
    id: "installation",
    title: "Installation",
    body: "Our technicians set everything up on your premises: the product on every system, your storage, schedules and alerts.",
    points: ["An assessment of what you run and what matters most", "Installation and configuration on site", "The first full backup and recovery test, together", "A handover to your team, with documentation"],
    price: "Quoted once, for your setup",
  },
  {
    id: "managed",
    title: "Managed operations",
    body: "Hand us the whole job. We run, watch and test it under your licence, and report to you every month.",
    points: ["Daily monitoring and recovery tests", "We act on alerts before they become problems", "A monthly report for management and auditors", "Recovery handled by our engineers when you need it"],
    price: "Added to your licence",
  },
  {
    id: "support",
    title: "Support and training",
    body: "Engineers who know the product and your setup, and training so your team runs it with confidence.",
    points: ["Support from the engineers who build it", "On-site help for serious incidents", "Operator training for your team", "Every update and new version"],
    price: "Included with every licence",
  },
];
