export interface ServiceDetail {
  slug: string;
  title: string;
  tagline: string;
  intro: string;
  deliverables: string[];
  process: { step: string; body: string }[];
  stack: string[];
  faqs: { q: string; a: string }[];
  icon: "code" | "mobile" | "cloud" | "design" | "data" | "shield" | "ai" | "bot" | "chart" | "lock";
  accent: string;
  image: string;
  overlayImage: string;
}

const IMG = {
  a: "https://framerusercontent.com/images/PGqhbyNizzg0WF0Ff8Ct1xJCz4.png?scale-down-to=512",
  aOverlay: "https://framerusercontent.com/images/R8KAWJ8XJ7xyTu7ucAu7MwYY.png?scale-down-to=512",
  b: "https://framerusercontent.com/images/icQGsV71x2rSlISc1VdMnw1qP0.png?scale-down-to=512",
  bOverlay: "https://framerusercontent.com/images/lXJpgpSzhcdgjAHyzQ8gL6xZio.png?scale-down-to=512",
  c: "https://framerusercontent.com/images/fDuEIn62K1IFn5Ej7fSyTMA71og.png?scale-down-to=512",
  cOverlay: "https://framerusercontent.com/images/swGfymsPbpYnmJh0xWYUDsjYEVw.png?scale-down-to=512",
  d: "https://framerusercontent.com/images/fTivRAMCNvUFDAp9M0oddRMjk.png?scale-down-to=512",
  dOverlay: "https://framerusercontent.com/images/ykQMkxdWQtCI1O7dEHnQs9vQmME.png?scale-down-to=512",
};

export const services: ServiceDetail[] = [
  {
    slug: "web-development",
    title: "Web Development",
    tagline: "Fast, modern websites and web apps that just work.",
    intro:
      "We build marketing sites, dashboards and internal tools with Next.js and TypeScript — production-ready, easy to maintain and pleasant to use.",
    deliverables: [
      "Marketing sites & landing pages",
      "SaaS dashboards and admin panels",
      "Internal tools and back-office apps",
      "E-commerce storefronts",
      "Progressive web apps (PWA)",
    ],
    process: [
      { step: "Scope", body: "One-hour call to align on goals, users and scope." },
      { step: "Design", body: "Wireframes to hi-fi mockups in Figma with a clickable prototype." },
      { step: "Build", body: "Weekly demos, small PRs, code reviewed by senior engineers." },
      { step: "Launch", body: "Deploy on Vercel or your cloud, with analytics and monitoring." },
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Prisma", "PostgreSQL"],
    faqs: [
      { q: "Do you use a CMS?", a: "Yes — Sanity, Contentful or Payload depending on your team’s needs." },
      { q: "Can you migrate my existing site?", a: "We migrate from WordPress, Webflow, Wix and custom stacks all the time." },
    ],
    icon: "code",
    accent: "from-sky-100 to-sky-50",
    image: "/services/web-development.avif",
    overlayImage: "/services/web-development.avif",
  },
  {
    slug: "app-development",
    title: "App Development",
    tagline: "iOS and Android apps that feel native and ship fast.",
    intro:
      "React Native and Flutter apps designed for real-world Nepali networks and phones — small bundles, offline-friendly, and quick to update.",
    deliverables: [
      "Consumer apps (payments, learning, health, delivery)",
      "Driver / field-worker apps",
      "Loyalty & rewards apps",
      "Cross-platform apps published to App Store & Play Store",
    ],
    process: [
      { step: "Discover", body: "Understand your users, devices and network conditions." },
      { step: "Prototype", body: "A clickable Figma prototype tested with real users." },
      { step: "Build", body: "Weekly TestFlight and Play Console builds you can share." },
      { step: "Ship", body: "We handle the store submissions and post-launch support." },
    ],
    stack: ["React Native", "Expo", "Flutter", "Firebase", "Supabase", "Fastlane"],
    faqs: [
      { q: "Native or cross-platform?", a: "Cross-platform by default. Native only when the product genuinely needs it." },
      { q: "Do you handle App Store submission?", a: "Yes — we manage listings, screenshots and the review process." },
    ],
    icon: "mobile",
    accent: "from-emerald-100 to-emerald-50",
    image: IMG.b,
    overlayImage: IMG.bOverlay,
  },
  {
    slug: "ai-development",
    title: "AI Development",
    tagline: "LLM-powered features baked into products where they matter.",
    intro:
      "Chat, summarize, extract, search — we design and build AI features on top of Claude, GPT and open models, with real evaluation and guardrails.",
    deliverables: [
      "AI chat & assistants",
      "RAG over your documents and data",
      "Structured extraction from PDFs and forms",
      "Semantic search and recommendations",
      "Evaluation & prompt engineering",
    ],
    process: [
      { step: "Frame", body: "Which problem does AI actually solve — and how do we measure it?" },
      { step: "Prototype", body: "A quick spike with real data and honest metrics." },
      { step: "Harden", body: "Guardrails, evals, monitoring and cost controls." },
      { step: "Ship", body: "Roll out behind flags. Measure. Adjust." },
    ],
    stack: ["Claude", "OpenAI", "LangChain", "Vercel AI SDK", "pgvector", "LlamaIndex"],
    faqs: [
      { q: "Do you fine-tune models?", a: "Rarely. Frontier models plus good context usually beats fine-tuning." },
      { q: "Where does data live?", a: "Your cloud, your region, your rules." },
    ],
    icon: "ai",
    accent: "from-violet-100 to-violet-50",
    image: IMG.c,
    overlayImage: IMG.cOverlay,
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    tagline: "Automate the boring parts of your business with AI agents.",
    intro:
      "We design and deploy AI-driven workflows — support triage, lead qualification, invoice processing, content ops — that free your team from repetitive work.",
    deliverables: [
      "Customer support triage & auto-reply",
      "Sales lead qualification",
      "Invoice, receipt & document processing",
      "Content ops (SEO briefs, translations, tagging)",
      "Custom internal AI agents",
    ],
    process: [
      { step: "Map", body: "Audit your workflows to find the highest-leverage automation." },
      { step: "Design", body: "Blueprint the agent — tools, guardrails, human-in-the-loop." },
      { step: "Build", body: "Ship one workflow end-to-end. Measure ROI in weeks, not months." },
      { step: "Scale", body: "Roll out to more teams once the first one is boring and reliable." },
    ],
    stack: ["Claude", "n8n", "Zapier", "Temporal", "Vercel AI SDK", "Slack API"],
    faqs: [
      { q: "Do we lose control?", a: "No — every agent has approval gates and audit logs by default." },
      { q: "What ROI can I expect?", a: "Typical automations save 10–30 hours/week per team after month one." },
    ],
    icon: "bot",
    accent: "from-amber-100 to-amber-50",
    image: IMG.d,
    overlayImage: IMG.dOverlay,
  },
  {
    slug: "product-design",
    title: "Product Design",
    tagline: "Design that makes software calm and clear.",
    intro:
      "UX research, UI design and design systems for teams who care about the details — from first pixel to shipped feature.",
    deliverables: [
      "UX research & user testing",
      "Wireframes and interactive prototypes",
      "UI design in Figma",
      "Design systems and component libraries",
      "Brand refresh for products",
    ],
    process: [
      { step: "Research", body: "Interviews, surveys and competitor teardowns." },
      { step: "Wireframe", body: "Flows and low-fi wireframes to align direction." },
      { step: "Design", body: "Hi-fi Figma design with a clickable prototype." },
      { step: "Handoff", body: "A clean, componentized handoff engineers actually enjoy." },
    ],
    stack: ["Figma", "FigJam", "Framer", "Notion", "Maze"],
    faqs: [
      { q: "Do you work with our engineers?", a: "Yes — design and engineering pair closely, that’s our default mode." },
      { q: "Do you offer a design system?", a: "We build one when it saves you time." },
    ],
    icon: "design",
    accent: "from-rose-100 to-rose-50",
    image: IMG.a,
    overlayImage: IMG.aOverlay,
  },
  {
    slug: "cloud-backend",
    title: "Cloud & DevOps",
    tagline: "APIs, databases and infra that scale without drama.",
    intro:
      "We design and run backends on AWS, GCP and Vercel — from a first API endpoint to full observability, CI/CD and cost-optimized infra.",
    deliverables: [
      "REST and GraphQL APIs",
      "Database design and migrations",
      "Infrastructure as code (Terraform)",
      "CI/CD pipelines",
      "Observability (logs, metrics, tracing)",
    ],
    process: [
      { step: "Audit", body: "Where things are now — architecture, cost, bottlenecks." },
      { step: "Plan", body: "A staged roadmap from quick wins to bigger refactors." },
      { step: "Build", body: "Ship in small, safe steps. Nothing goes to prod without tests." },
      { step: "Operate", body: "Runbooks, alerts and on-call support if you need it." },
    ],
    stack: ["Node.js", "Python", "PostgreSQL", "Redis", "AWS", "Terraform"],
    faqs: [
      { q: "Which cloud?", a: "AWS by default. We also work in GCP, Vercel and Fly.io when it fits." },
      { q: "Do you help cut cloud bills?", a: "Regularly — usually 20–40% in the first pass." },
    ],
    icon: "cloud",
    accent: "from-indigo-100 to-indigo-50",
    image: "/services/devops.png",
    overlayImage: "/services/devops.png",
  },
  {
    slug: "data-analytics",
    title: "Data & Analytics",
    tagline: "Dashboards and pipelines that tell you what’s actually going on.",
    intro:
      "We build data warehouses, ETL pipelines and BI dashboards so you can stop guessing and start deciding with real numbers.",
    deliverables: [
      "Data warehouse setup (BigQuery, Snowflake, DuckDB)",
      "ETL / ELT pipelines",
      "BI dashboards (Metabase, Superset, Looker)",
      "Product analytics (PostHog, Mixpanel)",
      "Custom reporting & KPIs",
    ],
    process: [
      { step: "Model", body: "What do you need to decide? We reverse-engineer the data model." },
      { step: "Pipe", body: "Connect the sources, build the pipeline, land it in the warehouse." },
      { step: "Dashboard", body: "Charts your team will actually check every morning." },
      { step: "Maintain", body: "Keep the pipes flowing and the numbers honest." },
    ],
    stack: ["dbt", "BigQuery", "PostHog", "Metabase", "Airbyte", "Python"],
    faqs: [
      { q: "Do you help with GA4?", a: "Yes — setup, custom events, funnels and cross-domain tracking." },
      { q: "What if we already have dashboards?", a: "We audit them, kill the useless ones, and make the rest better." },
    ],
    icon: "chart",
    accent: "from-teal-100 to-teal-50",
    image: IMG.c,
    overlayImage: IMG.cOverlay,
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    tagline: "Practical security for teams that don’t have a security team.",
    intro:
      "We audit, harden and monitor your apps and infra — practical, jargon-free security that focuses on what actually matters for your business.",
    deliverables: [
      "Security audits (web, mobile, API)",
      "Penetration testing",
      "OWASP Top 10 fixes",
      "Secrets management",
      "Compliance prep (SOC 2, ISO 27001, PCI)",
    ],
    process: [
      { step: "Scan", body: "Automated + manual audit of your codebase, infra and access." },
      { step: "Prioritize", body: "A ranked list — biggest risks first, quick wins highlighted." },
      { step: "Fix", body: "We patch alongside your team or ship the fixes ourselves." },
      { step: "Monitor", body: "Alerts, dependency scanning, and a quarterly check-in." },
    ],
    stack: ["OWASP ZAP", "Semgrep", "Snyk", "Vault", "Cloudflare", "1Password"],
    faqs: [
      { q: "Do you do pentests?", a: "Yes — grey-box and black-box, with a full written report." },
      { q: "Compliance help?", a: "We prep the tech side for SOC 2 and ISO 27001 audits." },
    ],
    icon: "lock",
    accent: "from-slate-100 to-slate-50",
    image: IMG.d,
    overlayImage: IMG.dOverlay,
  },
  {
    slug: "maintenance",
    title: "Software Maintenance",
    tagline: "A long-term partner for your product.",
    intro:
      "Once your product is live, we stay on — fixing bugs, shipping small features, keeping dependencies and infra healthy.",
    deliverables: [
      "Bug fixes and small features",
      "Dependency and framework upgrades",
      "Performance and cost optimization",
      "Security patches",
      "Monthly health reports",
    ],
    process: [
      { step: "Onboard", body: "We map your codebase, infra and pain points." },
      { step: "Plan", body: "A monthly retainer scoped to your priorities." },
      { step: "Ship", body: "Small, steady improvements — never surprise rewrites." },
      { step: "Report", body: "A short monthly report — what changed, what’s next." },
    ],
    stack: ["Any stack", "React", "Node", "Python", "PHP", "Laravel"],
    faqs: [
      { q: "Minimum engagement?", a: "3 months, then rolling." },
      { q: "How many hours per month?", a: "We tune this per client. Typical retainers are 20–80 hours." },
    ],
    icon: "shield",
    accent: "from-neutral-100 to-neutral-50",
    image: IMG.a,
    overlayImage: IMG.aOverlay,
  },
];

export function getService(slug: string): ServiceDetail | undefined {
  return services.find((s) => s.slug === slug);
}
