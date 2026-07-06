# Lumera Technologies

Website and blog CMS for **Lumera Technologies** — a software studio in Kathmandu, Nepal.

Built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, shadcn/ui, MagicUI, Framer Motion (motion) and Prisma + SQLite.

Live domain: `lumera.tech` (set in metadata + sitemap).

---

## What’s inside

**Public site**
- Landing page: hero, trusted-by strip, services (9 cards with stacked hover images), work, process, testimonials, about, insights, FAQ, office-visit booking, tech-stack, contact
- `/services/[slug]` — 9 service detail pages (Web, App, AI, AI Automation, Product Design, Cloud & DevOps, Data & Analytics, Cybersecurity, Software Maintenance)
- `/work/[slug]` — 4 case-study pages
- `/careers` and `/careers/[slug]` — company values + 5 open roles
- `/about`, `/contact`, `/insights`, `/insights/[slug]`, `/privacy`, `/terms`, custom `/not-found`
- `sitemap.xml`, `robots.txt`, dynamic OG image

**Blog CMS**
- SQLite + Prisma
- `/admin` — password-protected editor (login → list posts, create, edit with live Markdown preview, delete, publish/unpublish)
- `/admin/bookings` — see all office-visit bookings
- Admin session = signed httpOnly cookie, 7-day expiry
- Public blog reads live from the DB

**Office visit booking**
- Multi-step Cal.com-style widget on the home page (`#book`)
- Calendar → time slot → form → confirmation, animated with Framer Motion
- Backed by `/api/bookings` — Zod-validated, blocks past slots and double-bookings

**Contact form**
- `/api/contact` — Zod-validated POST endpoint (wire it up to Resend/Slack/etc. when ready)

---

## Getting started

```bash
# 1. Install
npm install

# 2. Configure env
cp .env.example .env
# then edit .env → set ADMIN_PASSWORD + SESSION_SECRET

# 3. Set up the database
npx prisma migrate dev
npx tsx prisma/seed.ts   # optional — seeds 3 sample blog posts

# 4. Run the dev server
npm run dev
```

Open <http://localhost:3000>. Admin panel is at <http://localhost:3000/admin>.

---

## Environment variables

| Var | What it does |
| --- | --- |
| `ADMIN_PASSWORD` | The password used to sign in at `/admin`. |
| `SESSION_SECRET` | 32+ char random string used to sign admin session cookies. Generate with `openssl rand -hex 32`. |

Full list in [`.env.example`](.env.example).

---

## Project structure

```
src/
├── app/
│   ├── (public pages)     home, about, careers, contact, insights, services, work, privacy, terms
│   ├── admin/             protected editor (posts, bookings)
│   └── api/               contact, bookings, posts CRUD, admin auth
├── components/
│   ├── (sections)         Hero, Services, Work, Process, Testimonials, About, InsightsStrip, FAQ, BookVisit, TrustedBy, TechStack, Contact, Footer, Nav
│   ├── admin/             LoginForm, PostEditor, LogoutButton, DeletePostButton
│   └── ui/                shadcn + MagicUI primitives
└── lib/
    ├── db.ts              Prisma client singleton
    ├── auth.ts            HMAC-signed session cookie helpers
    ├── services.ts        Services catalog
    ├── projects.ts        Case studies
    ├── jobs.ts            Open roles
    └── utils.ts           cn()

prisma/
├── schema.prisma          Post, Booking models
└── seed.ts                Seed 3 sample blog posts
```

---

## Deploying

The app is built for the **Vercel + Postgres** flow:

1. Change the datasource in `prisma/schema.prisma`:
   ```prisma
   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
   }
   ```
2. Delete the SQLite migrations under `prisma/migrations/` and run `npx prisma migrate dev --name init` against a Postgres URL to regenerate them (or use `db push` for a small setup).
3. In your host (Vercel, Fly, Render, etc.) set:
   - `DATABASE_URL` — a Postgres URL (Neon and Supabase have generous free tiers)
   - `ADMIN_PASSWORD` — a strong password
   - `SESSION_SECRET` — a fresh `openssl rand -hex 32` value
4. Deploy.

---

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the Next.js dev server (Turbopack) |
| `npm run build` | Type-check + build for production |
| `npm start` | Run the production build |
| `npm run lint` | ESLint |
| `npx prisma studio` | Local database GUI |
| `npx tsx prisma/seed.ts` | Seed sample blog posts |

---

## License

© Lumera Technologies Pvt. Ltd. All rights reserved.
