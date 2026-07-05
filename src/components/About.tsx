"use client";

import { motion } from "motion/react";
import { SectionHeader } from "@/components/Services";

const stats = [
  { k: "6+", v: "Years shipping software" },
  { k: "40+", v: "Products launched" },
  { k: "12", v: "Engineers & designers" },
  { k: "9", v: "Countries served" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeader
            eyebrow="About Lumera"
            title="A small studio in Kathmandu, building for the world."
          />
          <p className="mt-6 text-base text-neutral-600 leading-relaxed">
            We're a team of engineers, designers and problem-solvers based in Nepal. We
            work with founders and product teams — locally and abroad — to design and
            build software that's clean, reliable and pleasant to use.
          </p>
          <p className="mt-4 text-base text-neutral-600 leading-relaxed">
            No jargon, no bloat, no ten-person meetings. Just the right people, focused
            on shipping the right thing.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10">
          {stats.map((s, i) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bg-white p-8"
            >
              <div className="font-heading text-4xl font-medium tracking-tight text-neutral-900">
                {s.k}
              </div>
              <div className="mt-2 text-sm text-neutral-500">{s.v}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
