"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";
import { SectionHeader } from "@/components/Services";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Small websites land in 2–4 weeks. MVPs for web or mobile apps usually take 6–10 weeks. Larger platforms roll out in phases over 3–6 months. We share a clear timeline before we start.",
  },
  {
    q: "Do you work with clients outside Nepal?",
    a: "Yes — most of our clients are abroad. We work asynchronously across time zones and meet weekly on video for updates and demos.",
  },
  {
    q: "Can you take over an existing project?",
    a: "Often, yes. We start with a short technical audit, get familiar with the codebase, then ship small improvements before taking on bigger work.",
  },
  {
    q: "What tech stack do you use?",
    a: "Next.js and TypeScript on the web; React Native or Flutter on mobile; Node.js, Python, PostgreSQL and Supabase on the backend. We pick the stack that fits your team and product — not the other way around.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes. We stay on as a long-term partner — maintenance, new features, and on-call support are all part of what we do.",
  },
  {
    q: "How do payments work?",
    a: "For local clients: eSewa, Khalti or bank transfer. For international clients: Wise, Stripe or bank wire in USD. Milestone-based, always with clear deliverables.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeader
          eyebrow="FAQ"
          title="Questions we hear often"
          subtitle="Can’t find what you need? Send us a note and we’ll get back within a working day."
        />

        <div className="mt-14 divide-y divide-black/10 rounded-2xl border border-black/10 bg-white">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <button
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-base sm:text-lg font-medium text-neutral-900">
                    {f.q}
                  </span>
                  <span
                    className={cn(
                      "grid h-8 w-8 shrink-0 place-items-center rounded-full border border-black/10 text-neutral-700 transition-transform",
                      isOpen && "rotate-45 bg-neutral-900 text-white border-neutral-900",
                    )}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm text-neutral-600 leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
