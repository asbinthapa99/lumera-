"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeader } from "@/components/Services";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-neutral-50/60">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Let’s talk"
          title="Have an idea? We’d love to hear it."
          subtitle="Tell us a bit about what you’re building. We usually reply within a working day."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-5 lg:gap-16">
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="rounded-2xl border border-black/10 bg-white p-6">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
                Reach us
              </p>
              <ul className="mt-4 space-y-3 text-sm text-neutral-700">
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-neutral-500" />
                  <Link href="mailto:hello@lumera.tech" className="hover:text-neutral-900">
                    hello@lumera.tech
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-neutral-500" />
                  <Link href="tel:+9779812345678" className="hover:text-neutral-900">
                    +977 98 1234 5678
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-neutral-500" />
                  Jhamsikhel, Lalitpur, Nepal
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-6">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
                Office hours
              </p>
              <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
                Sun – Fri · 10:00 – 18:00 NPT
              </p>
              <p className="mt-1 text-xs text-neutral-500">
                We reply to international emails on Saturdays too.
              </p>
            </div>
          </motion.aside>

          <div className="lg:col-span-3 rounded-2xl border border-black/10 bg-white p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
