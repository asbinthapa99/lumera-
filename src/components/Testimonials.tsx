"use client";

import { Marquee } from "@/components/ui/marquee";
import { SectionHeader } from "@/components/Services";

const quotes = [
  {
    body: "Lumera shipped our MVP in six weeks and it's been quietly running ever since. Rare combo of speed and care.",
    name: "Anish Shrestha",
    role: "Founder, Sajilo Pay",
  },
  {
    body: "They asked better questions than most agencies we've worked with in Singapore. The final product shows it.",
    name: "Wei Ling",
    role: "PM, Himal Freight",
  },
  {
    body: "Design and engineering felt like one team. That's the highest praise I can give.",
    name: "Priya Karki",
    role: "CTO, Aakash EdTech",
  },
  {
    body: "Boring in the best way — the app just works. Our clinic staff picked it up in a day.",
    name: "Dr. Rabin Adhikari",
    role: "Owner, Mero Clinic",
  },
  {
    body: "Fair pricing, honest timelines, no surprises. We'll be back for v2.",
    name: "Sanjay Rai",
    role: "COO, Peak Logistics",
  },
];

function Card({ body, name, role }: (typeof quotes)[number]) {
  return (
    <figure className="mx-3 w-80 shrink-0 rounded-2xl border border-black/10 bg-white p-6">
      <blockquote className="text-sm text-neutral-700 leading-relaxed">“{body}”</blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-neutral-900 text-white text-xs font-semibold">
          {name.charAt(0)}
        </span>
        <div>
          <div className="text-sm font-medium text-neutral-900">{name}</div>
          <div className="text-xs text-neutral-500">{role}</div>
        </div>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32 bg-neutral-50/60">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Kind words"
          title="What partners say"
          subtitle="A few quotes from the people we've built with."
        />
      </div>

      <div className="relative mt-14">
        <Marquee pauseOnHover className="[--duration:50s]">
          {quotes.map((q) => (
            <Card key={q.name} {...q} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="mt-4 [--duration:60s]">
          {quotes.map((q) => (
            <Card key={q.name + "-2"} {...q} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-neutral-50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-neutral-50 to-transparent" />
      </div>
    </section>
  );
}
