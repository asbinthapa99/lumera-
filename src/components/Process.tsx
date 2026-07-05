"use client";

import { motion } from "motion/react";
import { SectionHeader } from "@/components/Services";

const steps = [
  {
    n: "01",
    title: "Discover",
    body: "We start with a short conversation, then map the problem, users and what success looks like.",
  },
  {
    n: "02",
    title: "Design",
    body: "Wireframes, flows and a clickable prototype in Figma — before a single line of code.",
  },
  {
    n: "03",
    title: "Build",
    body: "Weekly demos, clean commits, and clear handoffs. You're never guessing where things stand.",
  },
  {
    n: "04",
    title: "Grow",
    body: "We stay on after launch — measuring, tuning and adding the next thing that matters.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="How we work"
          title="A calm, predictable process"
          subtitle="Four simple stages. No mystery, no drama — just steady progress you can see every week."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl border border-black/10 bg-white p-7"
            >
              <span className="text-xs font-medium tracking-widest text-neutral-400">{s.n}</span>
              <h3 className="mt-4 font-heading text-xl font-medium tracking-tight text-neutral-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
