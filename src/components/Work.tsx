"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/Services";
import { projects } from "@/lib/projects";

export function Work() {
  return (
    <section id="work" className="relative py-24 sm:py-32 bg-neutral-50/60">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Selected work"
          title="Products we've shipped"
          subtitle="A small taste of what we've built with partners across Nepal and abroad."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/work/${p.slug}`}
                className="group relative block overflow-hidden rounded-2xl border border-black/10 bg-white p-8 transition-shadow hover:shadow-lg"
              >
                <div
                  className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${p.accent} opacity-70`}
                />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
                      {p.tag}
                    </p>
                    <h3 className="mt-2 font-heading text-2xl font-medium tracking-tight text-neutral-900">
                      {p.title}
                    </h3>
                  </div>
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-neutral-900 text-white transition-transform group-hover:-rotate-12">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
                <p className="mt-6 max-w-md text-sm text-neutral-600 leading-relaxed">
                  {p.summary}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
