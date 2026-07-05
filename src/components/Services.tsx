"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { services } from "@/lib/services";

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-14 sm:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500"
          >
            Our services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-3 font-heading text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-900"
          >
            How can we help?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg sm:text-xl text-neutral-500 font-light"
          >
            Everything we do in-house — from web and mobile to AI and automation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/services/${s.slug}`}
                className="group flex h-[320px] flex-col overflow-hidden rounded-3xl bg-neutral-50 p-6 transition-all duration-300 hover:bg-neutral-100"
              >
                <div className="relative flex-grow min-h-0 overflow-hidden mb-4 flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.image}
                    alt={`${s.title} showcase`}
                    className="absolute w-44 h-auto max-h-[80%] object-contain rounded-lg shadow-md transform -rotate-6 transition-all duration-500 ease-in-out group-hover:rotate-[-10deg] group-hover:scale-105"
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.overlayImage}
                    alt={`${s.title} example`}
                    className="absolute w-44 h-auto max-h-[80%] object-contain rounded-lg shadow-lg transform rotate-3 transition-all duration-500 ease-in-out group-hover:rotate-[6deg] group-hover:scale-105 group-hover:translate-x-2"
                  />
                </div>
                <h3 className="text-left text-lg font-medium text-neutral-800 mt-auto">
                  {s.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl">
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mt-3 font-heading text-3xl sm:text-5xl font-medium tracking-tight text-neutral-900"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-base text-neutral-600 leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
