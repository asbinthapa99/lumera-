"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "sent" | "error";

const services = ["Web app", "Mobile app", "Design", "AI feature", "Other"];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [service, setService] = useState<string>(services[0]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      company: String(data.get("company") ?? ""),
      service,
      message: String(data.get("message") ?? ""),
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("bad response");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="grid gap-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" placeholder="Your full name" required />
        <Field label="Email" name="email" type="email" placeholder="you@company.com" required />
      </div>

      <Field label="Company" name="company" placeholder="Company or team (optional)" />

      <div>
        <Label>What do you need?</Label>
        <div className="mt-2 flex flex-wrap gap-2">
          {services.map((s) => (
            <Chip key={s} active={service === s} onClick={() => setService(s)}>
              {s}
            </Chip>
          ))}
        </div>
        <input type="hidden" name="service" value={service} />
      </div>

      <div>
        <Label>Tell us about your project</Label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="What are you building, and what do you need help with?"
          className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-4 focus:ring-neutral-900/5 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting" || status === "sent"}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800 disabled:opacity-70",
          status === "sent" && "bg-emerald-600 hover:bg-emerald-600",
        )}
      >
        {status === "sent" ? (
          <>
            <CheckCircle2 className="h-4 w-4" />
            Thanks — we’ll be in touch
          </>
        ) : status === "submitting" ? (
          "Sending…"
        ) : status === "error" ? (
          "Something went wrong — try again"
        ) : (
          <>
            Send message
            <Send className="h-4 w-4" />
          </>
        )}
      </button>
    </motion.form>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">{children}</label>;
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-4 focus:ring-neutral-900/5"
      />
    </div>
  );
}

function Chip({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-1.5 text-sm transition-colors",
        active
          ? "border-neutral-900 bg-neutral-900 text-white"
          : "border-black/10 bg-white text-neutral-700 hover:bg-neutral-50",
      )}
    >
      {children}
    </button>
  );
}
