import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const posts = [
  {
    slug: "shipping-for-slow-networks",
    title: "Shipping software for slow networks",
    excerpt:
      "Nepal isn’t 5G everywhere. Here’s how we design and build apps that stay fast on 3G, in the hills.",
    publishedAt: new Date("2026-05-14"),
    author: "Sujan Maharjan",
    readMinutes: 6,
    tag: "Engineering",
    cover:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
    body: `Most software people build assumes Wi-Fi. In Nepal, that assumption breaks the moment you leave the ring road. If you’re serious about products for this region, network performance isn’t a footnote — it’s the whole game.

Every screen has to load on 3G. Every write has to survive a dropped connection. Every asset has to be tiny.

Here’s what we do by default: aggressive image compression, HTTP caching everywhere, offline-first data with SQLite or IndexedDB, retry queues on writes, and a build budget that fails the pipeline if bundles cross a threshold.

Small stuff, repeated. It compounds into products that feel good even when the signal doesn’t.`,
  },
  {
    slug: "why-boring-is-a-feature",
    title: "Boring software is a feature",
    excerpt:
      "The best compliment our software gets is silence. Here’s why we chase boring on purpose.",
    publishedAt: new Date("2026-04-02"),
    author: "Nisha Gurung",
    readMinutes: 4,
    tag: "Culture",
    cover:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1600&q=80",
    body: `The best software you’ve ever used probably didn’t make you feel anything. It just worked, and you got back to your life.

That’s the bar we hold ourselves to at Lumera. We’re not chasing wow moments. We’re chasing the second, third, fifteenth use — the one where the user forgets we exist.

This shapes our whole process: we test on real devices, we optimize for boring metrics like p95 latency and crash-free sessions, and we say no to features that create more surface area than value.

Boring is hard. But it’s the point.`,
  },
  {
    slug: "hiring-in-kathmandu-2026",
    title: "How we hire engineers in Kathmandu",
    excerpt:
      "Our take-home is short, our interviews are honest, and we tell you what we pay before you apply.",
    publishedAt: new Date("2026-03-01"),
    author: "Aayush Thapa",
    readMinutes: 5,
    tag: "Team",
    cover:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
    body: `Hiring is the single highest-leverage thing we do. So we try to be thoughtful about it — for candidates and for ourselves.

Our process: a 30-minute intro chat, a 3-hour paid take-home, and a two-hour pair-programming session with the team you’d actually work with. That’s it. No trick questions, no whiteboarding, no ten-round marathon.

We publish salary bands on the job post. We give feedback within a week either way. We pay for the take-home, always.

The rest is just being kind and paying attention.`,
  },
];

async function main() {
  for (const p of posts) {
    await prisma.post.upsert({
      where: { slug: p.slug },
      update: {},
      create: {
        ...p,
        published: true,
      },
    });
  }
  console.log(`Seeded ${posts.length} posts.`);
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
