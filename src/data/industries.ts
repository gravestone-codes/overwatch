import type { ProductKey } from "./company";

export type Industry = {
  slug: string;
  name: string;
  /** The name as a row heading in the industries table. */
  row: string;
  short: string;
  /** One line for the industries table: what matters most there. */
  matters: string;
  /** Our products for this sector, each with one line on what it does there. Available products are listed first wherever they appear. */
  offer: { key: ProductKey | "offsite"; line: string; /** A page on the product's site made for this sector. */ href?: string }[];
  icon: "Hospital" | "Landmark" | "Building" | "GraduationCap" | "Store";
  title: string;
  lede: string;
  card: string;
  badDay: { without: string[]; with: string[] };
  needs: { title: string; body: string }[];
  protects: string[];
};

export const industries: Industry[] = [
  {
    slug: "healthcare",
    name: "Hospitals and clinics",
    row: "Hospitals and clinics",
    matters: "Patient records and imaging, safe from ransomware and failing servers.",
    offer: [
      { key: "oa", line: "Keep patient records, lab results and imaging safe from ransomware and failing servers." },
      { key: "offsite", line: "A protected copy of your backups in our data centre, out of reach of your network." },
    ],
    short: "Healthcare",
    icon: "Hospital",
    title: "Patient records that survive anything.",
    lede: "When the records system stops, care slows down and patients wait. OmniArk keeps every record, scan and prescription safe, and brings your systems back before the next shift starts.",
    card: "Keep patient records, lab results and imaging safe from ransomware and failing servers.",
    badDay: {
      without: [
        "06:10 — Ransomware locks the records server. Every file shows a new extension.",
        "07:00 — Wards switch to paper. Lab results can't be looked up.",
        "Days later — The last usable backup is three weeks old, if it opens at all.",
      ],
      with: [
        "06:10 — OmniArk spots files being encrypted and alerts your team.",
        "06:20 — It names the last clean backup: last night, 02:00.",
        "07:00 — Records are back from a copy the attacker could never reach. Wards never switch to paper.",
      ],
    },
    needs: [
      {
        title: "Confidential by design",
        body: "Backups are encrypted before they leave the server, and stay on your premises or in a data centre you choose. Patient data never leaves your control.",
      },
      {
        title: "Your whole hospital system, in order",
        body: "Database first, then the application, then the portal staff log in to. Rehearsed every night, so a real recovery holds no surprises.",
      },
      {
        title: "Records kept for as long as the law asks",
        body: "Long retention, legal holds for disputes, and backups that still restore years from now.",
      },
    ],
    protects: ["Electronic medical records", "Lab and pharmacy systems", "Imaging archives", "Billing and insurance claims"],
  },
  {
    slug: "finance",
    name: "Banks and financial services",
    row: "Banks and financial services",
    matters: "Core systems protected, and network compliance you can show a regulator.",
    offer: [
      { key: "oa", line: "Immutable backups, insider protection and recovery evidence your auditors accept." },
      { key: "ow", line: "Every network change tracked, and compliance you can show a regulator." },
    ],
    short: "Finance",
    icon: "Landmark",
    title: "Recovery your regulator can verify.",
    lede: "Core banking, mobile money reconciliation, loan books. OmniArk protects them with backups no insider or attacker can delete, and gives your auditors a recovery report they can trust.",
    card: "Immutable backups, insider protection and recovery evidence your auditors accept.",
    badDay: {
      without: [
        "A disgruntled administrator deletes the backups, then the database.",
        "The restore that should take an hour takes three days.",
        "The regulator asks for proof of your recovery plan. You have a document, not evidence.",
      ],
      with: [
        "Deleting a backup needs a second person's approval. The request is refused.",
        "The database is back to the exact second before the incident.",
        "Every night's recovery test is on record, with measured recovery times per system.",
      ],
    },
    needs: [
      {
        title: "No single person can destroy your backups",
        body: "Dangerous actions, like deleting backups or shortening retention, need approval from a second, named person. Everything is logged.",
      },
      {
        title: "Point-in-time recovery",
        body: "Bring a database back to a precise moment, so no transaction is lost and none is counted twice.",
      },
      {
        title: "Evidence, not promises",
        body: "Recovery tests run every night. Reports show what was tested, when, and how long recovery took.",
      },
    ],
    protects: ["Core banking databases", "Mobile money and card reconciliation", "Loan and member records", "Email and document stores"],
  },
  {
    slug: "government",
    name: "Government and public institutions",
    row: "Government and public institutions",
    matters: "Registries and public services that keep running, with records you can verify.",
    offer: [
      { key: "oa", line: "Sovereign, air-gapped backups that keep citizen data under your control." },
      { key: "ow", line: "Every network change tracked, and compliance you can show a regulator." },
    ],
    short: "Government",
    icon: "Building",
    title: "Public records, protected at home.",
    lede: "Citizen records belong under the control of the institution that holds them. OmniArk runs fully on your premises, works without internet, and keeps a copy that can't be reached from the network it protects.",
    card: "Sovereign, air-gapped backups that keep citizen data under your control.",
    badDay: {
      without: [
        "An attacker with stolen admin passwords encrypts the servers and the backup storage.",
        "Services to citizens stop for weeks.",
        "Some records are never recovered.",
      ],
      with: [
        "The protected copy pulls backups itself. Production has no way to reach it, even with admin passwords.",
        "Systems are restored into a sealed-off area, scanned and checked before going live.",
        "Services return the same day, from data that never left the institution.",
      ],
    },
    needs: [
      {
        title: "Fully offline, if you need it",
        body: "Installation, licensing, updates and recovery all work without an internet connection.",
      },
      {
        title: "An air-gapped copy",
        body: "A separate copy that production cannot reach, delete or alter, with its own retention rules run by a different team.",
      },
      {
        title: "Records for decades",
        body: "Every backup stays restorable for life, through every future upgrade.",
      },
    ],
    protects: ["Citizen and civil registry records", "Finance and payroll systems", "Document management", "Email and shared drives"],
  },
  {
    slug: "education",
    name: "Schools and universities",
    row: "Schools and universities",
    matters: "Student records safe through exams, and a cloud platform for teaching code.",
    offer: [
      { key: "ac", line: "Classrooms with starter projects and deadlines. Students push their code and get a live link, from any laptop.", href: "https://arkcloud.online/education" },
      { key: "oa", line: "Protect marks, transcripts and finance systems on an education budget." },
      { key: "offsite", line: "A protected copy of your backups in our data centre, so one fire or theft can't take everything." },
    ],
    short: "Education",
    icon: "GraduationCap",
    title: "Teach code, and keep every record.",
    lede: "Ark Cloud gives every student a live link for their code, from any laptop. OmniArk, on its waiting list, will protect the marks, transcripts and fees a school runs on.",
    card: "Protect marks, transcripts and finance systems on an education budget.",
    badDay: {
      without: [
        "The server holding exam results fails the week before graduation.",
        "The backup drive in the cupboard hasn't been plugged in since March.",
        "Transcripts are rebuilt by hand from paper files.",
      ],
      with: [
        "Backups run every night on their own and are tested automatically.",
        "The failed server is running again from its backup within minutes.",
        "Graduation goes ahead. Nobody outside IT ever knew.",
      ],
    },
    needs: [
      {
        title: "Runs itself",
        body: "Schedules, retention and nightly tests are set once. Your team is alerted only when something needs a person.",
      },
      {
        title: "Uses the storage you already have",
        body: "Back up to an existing NAS, a spare server or object storage. No new hardware required to start.",
      },
      {
        title: "Training included",
        body: "We train your IT staff to run OmniArk, free with every licence.",
      },
    ],
    protects: ["Student information systems", "Exam and transcript records", "Finance and fees", "E-learning platforms"],
  },
  {
    slug: "business",
    name: "Businesses",
    row: "Businesses of every size",
    matters: "Files and finance systems that come back after a bad day, and your website and apps online.",
    offer: [
      { key: "ac", line: "Your website, shop and internal tools online. Push your code and get a link." },
      { key: "oa", line: "Backup and recovery for your accounts, orders and customer files, without the enterprise bill." },
      { key: "offsite", line: "A protected copy of your backups in our data centre, run by us." },
    ],
    short: "Business",
    icon: "Store",
    title: "Online today, and ready for a bad day.",
    lede: "Put your website, shop and tools online with Ark Cloud today. OmniArk, on its waiting list, will keep your accounts, orders and customer files safe when a server fails.",
    card: "Enterprise-grade backup and recovery without the enterprise bill.",
    badDay: {
      without: [
        "The accounting server's disk dies at month end.",
        "The last backup is on a USB drive someone took home.",
        "Invoices, payroll and tax filings are late.",
      ],
      with: [
        "The server is back on new hardware the same morning.",
        "Every file, exactly as it was last night.",
        "Month end closes on time.",
      ],
    },
    needs: [
      {
        title: "Priced for growing businesses",
        body: "Pay only for what you protect. Support, updates and training are included in the licence.",
      },
      {
        title: "Set up for you",
        body: "Our technicians can install everything, or run your entire backup operation for you.",
      },
      {
        title: "Find any file in seconds",
        body: "Search every backup for a lost spreadsheet and restore it in a few clicks.",
      },
    ],
    protects: ["Accounting and ERP", "Point of sale and stock", "Customer files and email", "Websites and online shops"],
  },
];

const order = ["business", "education", "finance", "healthcare", "government"];
industries.sort((a, b) => order.indexOf(a.slug) - order.indexOf(b.slug));

// Sectors served by one product with no industry page of their own: the row goes straight to the product's site.
// `after` places the row in the industries table.
export const moreSectors: { name: string; short: string; matters: string; product: ProductKey; href: string; after: string }[] = [
  {
    name: "Developers and startups",
    short: "Developers",
    matters: "Push to GitHub and get a link, with databases and storage a click away.",
    product: "ac",
    href: "https://arkcloud.online",
    after: "business",
  },
  {
    name: "Hotels and restaurants",
    short: "Hospitality",
    matters: "Rooms, restaurant, bar and events on one system, and one bill.",
    product: "pl",
    href: "https://pillar.overwatchlabs.dev",
    after: "education",
  },
];

export const industryBySlug = (slug: string) => industries.find((i) => i.slug === slug);
