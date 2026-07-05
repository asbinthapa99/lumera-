export interface Project {
  slug: string;
  title: string;
  tag: string;
  year: string;
  summary: string;
  overview: string;
  accent: string;
  services: string[];
  stack: string[];
  results: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    slug: "sajilo-pay",
    title: "Sajilo Pay",
    tag: "Fintech · Mobile",
    year: "2025",
    summary:
      "A wallet app for everyday payments in Nepal — from tea shops to utility bills.",
    overview:
      "We partnered with Sajilo Pay to design and ship a mobile wallet from scratch — onboarding, KYC, top-ups, bill payments and a merchant QR flow — built for low-end Android devices and spotty networks.",
    accent: "from-emerald-100 to-emerald-50",
    services: ["Product design", "Mobile app", "Backend"],
    stack: ["React Native", "Node.js", "PostgreSQL", "AWS"],
    results: [
      { label: "Weeks to MVP", value: "6" },
      { label: "First-month users", value: "12k" },
      { label: "Crash-free rate", value: "99.8%" },
    ],
  },
  {
    slug: "himal-freight",
    title: "Himal Freight",
    tag: "Logistics · Dashboard",
    year: "2024",
    summary:
      "Fleet and shipment dashboard used by dispatchers across the Kathmandu valley.",
    overview:
      "A web dashboard and driver app to coordinate deliveries, track shipments in real time, and settle payments — replacing spreadsheets, WhatsApp threads and phone calls.",
    accent: "from-sky-100 to-sky-50",
    services: ["Web app", "Mobile app", "Data"],
    stack: ["Next.js", "React Native", "Supabase", "Mapbox"],
    results: [
      { label: "Dispatch time cut", value: "42%" },
      { label: "Vehicles tracked", value: "180+" },
      { label: "Daily active users", value: "300+" },
    ],
  },
  {
    slug: "aakash-edtech",
    title: "Aakash EdTech",
    tag: "Education · Web",
    year: "2024",
    summary:
      "Live-class platform for +SEE tuition, built for slow networks and low-end phones.",
    overview:
      "Live classes, recorded lessons, quizzes and a mobile-friendly parent portal — designed to work on 3G and mid-range phones, with strong offline caching for lesson replay.",
    accent: "from-amber-100 to-amber-50",
    services: ["Product design", "Web app"],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "LiveKit"],
    results: [
      { label: "Students onboarded", value: "8k+" },
      { label: "Avg. class join time", value: "2.1s" },
      { label: "NPS", value: "62" },
    ],
  },
  {
    slug: "mero-clinic",
    title: "Mero Clinic",
    tag: "Healthcare · SaaS",
    year: "2023",
    summary:
      "Patient records and appointments for small clinics — bilingual, offline-first.",
    overview:
      "An EMR and appointment platform for independent clinics — bilingual (Nepali + English), offline-first, and gentle enough for non-technical staff to learn in a single afternoon.",
    accent: "from-rose-100 to-rose-50",
    services: ["Product design", "Web app", "Backend"],
    stack: ["Next.js", "PostgreSQL", "Prisma", "Vercel"],
    results: [
      { label: "Clinics onboarded", value: "24" },
      { label: "Time saved / visit", value: "6 min" },
      { label: "Uptime", value: "99.95%" },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
