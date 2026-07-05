"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <BackgroundGrid />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-4xl px-6 text-center"
      >
        <motion.div variants={item} className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-neutral-700 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Software studio · Kathmandu, Nepal
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-heading text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-neutral-900 leading-[1.05]"
        >
          We build software that
          <span className="block text-neutral-400">quietly does its job.</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-xl text-base sm:text-lg text-neutral-600 leading-relaxed"
        >
          Lumera Technologies designs and ships web, mobile and cloud products for teams
          who care about clean code, sharp design and things that just work.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            href="#contact"
            className={cn(buttonVariants({ size: "lg" }), "rounded-full px-6 h-11 group")}
          >
            Start a project
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="#work"
            className={cn(
              buttonVariants({ size: "lg", variant: "ghost" }),
              "rounded-full px-6 h-11 text-neutral-700",
            )}
          >
            See our work
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

function BackgroundGrid() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0,0,0,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.045) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
        maskImage:
          "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        WebkitMaskImage:
          "radial-gradient(ellipse at center, black 40%, transparent 75%)",
      }}
    />
  );
}
