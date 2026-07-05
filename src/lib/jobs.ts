export interface Job {
  slug: string;
  title: string;
  team: string;
  location: string;
  type: "Full-time" | "Contract" | "Internship" | "Part-time";
  level: "Junior" | "Mid" | "Senior" | "Lead";
  summary: string;
  about: string;
  responsibilities: string[];
  requirements: string[];
  nice: string[];
  benefits: string[];
  postedAt: string;
  salary?: string;
}

export const jobs: Job[] = [
  {
    slug: "senior-fullstack-engineer",
    title: "Senior Full-stack Engineer",
    team: "Engineering",
    location: "Kathmandu · Hybrid",
    type: "Full-time",
    level: "Senior",
    salary: "NPR 200k – 320k / month",
    summary:
      "Own features end-to-end across Next.js, Node and Postgres. Pair with design. Ship weekly.",
    postedAt: "2026-06-15",
    about:
      "We’re a small studio building product for clients in Nepal and abroad. Senior engineers here own things — from planning to launch to on-call. If you like clean code, small teams and honest conversations, keep reading.",
    responsibilities: [
      "Design and build features across the stack — from Postgres to production UI",
      "Review pull requests and mentor mid-level engineers",
      "Pair with designers on flow, UX and edge cases",
      "Set the technical bar for reliability, performance and security",
      "Take part in on-call rotation (about one week every 6–8 weeks)",
    ],
    requirements: [
      "5+ years shipping production web apps",
      "Strong TypeScript, React and Node",
      "Comfortable with SQL and one relational DB (Postgres preferred)",
      "Experience running services in AWS, GCP or Vercel",
      "Care about accessibility, testing and observability",
    ],
    nice: [
      "React Native or Flutter experience",
      "Have led a small team before",
      "Written or spoken about your work publicly",
    ],
    benefits: [
      "Above-market salary in NPR",
      "22 days paid leave + all Nepal public holidays",
      "Home office setup budget (NPR 80k)",
      "Learning budget (NPR 60k / year)",
      "Health insurance for you and family",
    ],
  },
  {
    slug: "mid-mobile-engineer",
    title: "Mobile Engineer (React Native / Flutter)",
    team: "Engineering",
    location: "Kathmandu · Hybrid",
    type: "Full-time",
    level: "Mid",
    salary: "NPR 130k – 200k / month",
    summary:
      "Build cross-platform apps used across Nepal — from wallets to logistics to healthcare.",
    postedAt: "2026-06-10",
    about:
      "You’ll work on real apps used by real people every day — on real Nepali networks. Performance and offline behaviour matter here.",
    responsibilities: [
      "Build features in React Native or Flutter",
      "Optimize for low-end devices and 3G networks",
      "Handle CI/CD for iOS and Android builds",
      "Ship to the App Store and Play Store",
    ],
    requirements: [
      "2+ years shipping React Native or Flutter apps",
      "Strong JavaScript / Dart fundamentals",
      "Comfortable with native modules when needed",
      "Care about performance and app size",
    ],
    nice: [
      "Published apps you can show",
      "Firebase or Supabase experience",
      "Fastlane / EAS pipeline experience",
    ],
    benefits: [
      "Competitive salary in NPR",
      "22 days paid leave + Nepal public holidays",
      "Home office + learning budget",
      "Health insurance",
    ],
  },
  {
    slug: "product-designer",
    title: "Product Designer",
    team: "Design",
    location: "Kathmandu · Hybrid",
    type: "Full-time",
    level: "Mid",
    salary: "NPR 120k – 190k / month",
    summary:
      "Design flows, screens and small design systems for products people use every day.",
    postedAt: "2026-06-05",
    about:
      "You’ll pair closely with engineers and clients from day one. We value taste, clarity, and shipping — not portfolio decoration.",
    responsibilities: [
      "Design user flows, wireframes and hi-fi UI in Figma",
      "Run lightweight user research and testing",
      "Build and maintain component libraries",
      "Hand off cleanly to engineering — and stay in the loop as it ships",
    ],
    requirements: [
      "3+ years designing digital products",
      "Strong portfolio showing shipped work",
      "Fluent in Figma, familiar with prototyping",
      "Understand the basics of modern web/mobile constraints",
    ],
    nice: [
      "Some HTML/CSS or Tailwind familiarity",
      "Motion / Framer / Rive experience",
      "Have built a design system before",
    ],
    benefits: [
      "Competitive salary in NPR",
      "22 days paid leave + Nepal public holidays",
      "Home office + learning budget",
      "Health insurance",
    ],
  },
  {
    slug: "ai-engineer",
    title: "AI Engineer",
    team: "AI",
    location: "Kathmandu · Remote-friendly",
    type: "Full-time",
    level: "Mid",
    salary: "NPR 160k – 260k / month",
    summary:
      "Build LLM-powered features and AI automations for our clients — with real evals and cost controls.",
    postedAt: "2026-06-01",
    about:
      "This role is about shipping AI features that actually earn their place. No hype, no demos-that-fall-over — just careful, useful software.",
    responsibilities: [
      "Design and build LLM features (chat, RAG, extraction, agents)",
      "Set up evaluation harnesses and cost dashboards",
      "Pick the right model for each job — Claude, GPT, open models",
      "Work with product and design to scope AI features properly",
    ],
    requirements: [
      "Strong Python or TypeScript",
      "Real experience with LLM APIs (OpenAI, Anthropic, or open models)",
      "Have shipped at least one production AI feature",
      "Comfortable with vector DBs and embeddings",
    ],
    nice: [
      "Experience with LangChain, LlamaIndex or Vercel AI SDK",
      "Have written prompt evals",
      "Comfortable with n8n / Temporal / workflow orchestration",
    ],
    benefits: [
      "Above-market salary in NPR",
      "Remote-friendly (Kathmandu office optional)",
      "Access to frontier model credits",
      "Learning + conference budget",
    ],
  },
  {
    slug: "engineering-intern",
    title: "Engineering Intern",
    team: "Engineering",
    location: "Kathmandu · On-site",
    type: "Internship",
    level: "Junior",
    salary: "NPR 35k – 55k / month",
    summary:
      "3-month paid internship. Real work, real code review, real feedback. Great engineers grow here.",
    postedAt: "2026-05-25",
    about:
      "Our internship is not coffee runs and busywork. You’ll ship real features under a mentor, get proper code review, and leave with a portfolio you can be proud of.",
    responsibilities: [
      "Ship small, well-scoped features under a senior mentor",
      "Take part in code reviews and daily standups",
      "Write tests and clean up dead code",
    ],
    requirements: [
      "Solid grasp of JavaScript or Python",
      "Comfortable with Git and the command line",
      "Have built at least one small side project",
      "Curious, honest, and willing to ask questions",
    ],
    nice: [
      "Familiar with React or Next.js",
      "GitHub profile with pinned projects",
    ],
    benefits: [
      "Paid internship (NPR 35k–55k / month)",
      "Full mentor + weekly 1:1s",
      "Path to full-time offer at the end",
      "Snacks and terrible engineer jokes",
    ],
  },
];

export function getJob(slug: string): Job | undefined {
  return jobs.find((j) => j.slug === slug);
}
