"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Briefcase, Calendar, CheckCircle2, ChevronLeft, ChevronRight, MapPin, UserRound } from "lucide-react";
import { cn } from "@/lib/utils";

type Step = "date" | "time" | "form" | "done";

const WEEKDAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
// Nepal work week: Sun-Fri (Saturday off = weekend = index 6)
const OFF_DAYS = new Set<number>([6]);
const SLOTS = ["10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"];

const points = [
  { icon: Briefcase, text: "No aggressive sales pitches." },
  { icon: UserRound, text: "Speak directly with a lead engineer." },
  { icon: MapPin, text: "Tour our Jhamsikhel office in Lalitpur." },
];

function fmtDate(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function isPastDay(d: Date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return d.getTime() < today.getTime();
}

export function BookVisit() {
  const [step, setStep] = useState<Step>("date");
  const [cursor, setCursor] = useState(() => {
    const d = new Date();
    d.setDate(1);
    return d;
  });
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [taken, setTaken] = useState<string[]>([]);
  const [form, setForm] = useState({ name: "", email: "", notes: "" });
  const [status, setStatus] = useState<"idle" | "saving" | "error">("idle");
  const [error, setError] = useState<string>("");

  const days = useMemo(() => buildMonth(cursor), [cursor]);
  const monthLabel = cursor.toLocaleString("en-US", { month: "long", year: "numeric" });

  useEffect(() => {
    if (!date) return;
    fetch(`/api/bookings?date=${date}`)
      .then((r) => r.json())
      .then((d) => setTaken(d.taken ?? []))
      .catch(() => setTaken([]));
  }, [date]);

  async function confirm() {
    setStatus("saving");
    setError("");
    const res = await fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, date, time }),
    });
    if (!res.ok) {
      const j = await res.json().catch(() => ({}));
      setError(j.error ?? "Booking failed");
      setStatus("error");
      return;
    }
    setStatus("idle");
    setStep("done");
  }

  return (
    <section id="book" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="font-heading text-4xl sm:text-5xl font-medium tracking-tight text-neutral-900 leading-[1.05]">
            Come visit the studio.
          </h2>
          <p className="mt-4 max-w-md text-neutral-600 leading-relaxed">
            Book a 30-minute chat at our Kathmandu office. Meet the team, see how we work,
            and tell us about your project — no slides, no sales script.
          </p>
          <ul className="mt-8 space-y-2 max-w-md">
            {points.map((p) => (
              <li
                key={p.text}
                className="flex items-center gap-3 rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-neutral-800"
              >
                <p.icon className="h-4 w-4 text-neutral-500" />
                {p.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-black/10 bg-white p-4 sm:p-6 shadow-sm">
          <AnimatePresence mode="wait">
            {step === "date" && (
              <motion.div
                key="date"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-between px-2">
                  <p className="text-sm text-neutral-900">
                    <span className="font-medium">{monthLabel.split(" ")[0]}</span>{" "}
                    <span className="text-neutral-500">{monthLabel.split(" ")[1]}</span>
                  </p>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setCursor((d) => new Date(d.getFullYear(), d.getMonth() - 1, 1))}
                      className="grid h-8 w-8 place-items-center rounded-md hover:bg-neutral-100"
                      aria-label="Previous month"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setCursor((d) => new Date(d.getFullYear(), d.getMonth() + 1, 1))}
                      className="grid h-8 w-8 place-items-center rounded-md hover:bg-neutral-100"
                      aria-label="Next month"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-7 gap-2 px-1 text-center text-[11px] font-medium tracking-widest text-neutral-500">
                  {WEEKDAYS.map((d) => (
                    <div key={d} className="py-1">
                      {d}
                    </div>
                  ))}
                </div>

                <div className="mt-1 grid grid-cols-7 gap-2 p-1">
                  {days.map((d, i) => {
                    if (!d) return <div key={i} />;
                    const off = OFF_DAYS.has(d.getDay()) || isPastDay(d);
                    const label = d.getDate();
                    const dateStr = fmtDate(d);
                    const isSelected = date === dateStr;
                    return (
                      <button
                        key={i}
                        disabled={off}
                        onClick={() => {
                          setDate(dateStr);
                          setStep("time");
                        }}
                        className={cn(
                          "aspect-square rounded-xl text-sm font-medium transition-colors",
                          off
                            ? "text-neutral-300"
                            : isSelected
                              ? "bg-neutral-900 text-white"
                              : "bg-neutral-100 text-neutral-900 hover:bg-neutral-200",
                        )}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
                <p className="mt-4 px-2 text-xs text-neutral-500">
                  All times shown in Nepal Time (NPT). Saturdays are closed.
                </p>
              </motion.div>
            )}

            {step === "time" && (
              <motion.div
                key="time"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  onClick={() => setStep("date")}
                  className="mb-3 inline-flex items-center gap-2 text-xs text-neutral-500 hover:text-neutral-900"
                >
                  <ChevronLeft className="h-3.5 w-3.5" /> Change date
                </button>
                <div className="rounded-xl bg-neutral-50 border border-black/5 p-4">
                  <p className="text-xs uppercase tracking-widest text-neutral-500">Selected</p>
                  <p className="mt-1 flex items-center gap-2 text-sm font-medium text-neutral-900">
                    <Calendar className="h-4 w-4" />
                    {new Date(`${date}T00:00`).toLocaleDateString("en-GB", {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>

                <p className="mt-6 text-xs uppercase tracking-widest text-neutral-500 px-1">
                  Pick a time
                </p>
                <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-4">
                  {SLOTS.map((t) => {
                    const isTaken = taken.includes(t);
                    const isSelected = time === t;
                    return (
                      <button
                        key={t}
                        disabled={isTaken}
                        onClick={() => {
                          setTime(t);
                          setStep("form");
                        }}
                        className={cn(
                          "rounded-xl border px-3 py-3 text-sm font-medium transition-colors",
                          isTaken
                            ? "border-black/5 bg-neutral-50 text-neutral-300 cursor-not-allowed"
                            : isSelected
                              ? "border-neutral-900 bg-neutral-900 text-white"
                              : "border-black/10 bg-white text-neutral-800 hover:bg-neutral-50",
                        )}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {step === "form" && (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  onClick={() => setStep("time")}
                  className="mb-3 inline-flex items-center gap-2 text-xs text-neutral-500 hover:text-neutral-900"
                >
                  <ChevronLeft className="h-3.5 w-3.5" /> Change time
                </button>

                <div className="rounded-xl bg-neutral-50 border border-black/5 p-4 text-sm">
                  <p className="flex items-center gap-2 font-medium text-neutral-900">
                    <Calendar className="h-4 w-4" />
                    {new Date(`${date}T${time}:00`).toLocaleDateString("en-GB", {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                    })}{" "}
                    · {time}
                  </p>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    confirm();
                  }}
                  className="mt-5 space-y-4"
                >
                  <Field label="Your name">
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm focus:border-neutral-900 focus:outline-none focus:ring-4 focus:ring-neutral-900/5"
                    />
                  </Field>
                  <Field label="Email address">
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm focus:border-neutral-900 focus:outline-none focus:ring-4 focus:ring-neutral-900/5"
                    />
                  </Field>
                  <Field label="Additional notes">
                    <textarea
                      rows={3}
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      placeholder="Anything that helps us prepare for the meeting"
                      className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm focus:border-neutral-900 focus:outline-none focus:ring-4 focus:ring-neutral-900/5 resize-none"
                    />
                  </Field>

                  <div className="flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setStep("time")}
                      className="rounded-full px-4 py-2 text-sm text-neutral-600 hover:text-neutral-900"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={status === "saving"}
                      className="rounded-full bg-neutral-900 px-5 py-2 text-sm font-medium text-white hover:bg-neutral-800 disabled:opacity-70"
                    >
                      {status === "saving" ? "Booking…" : "Confirm"}
                    </button>
                  </div>
                  {error && <p className="text-xs text-red-600">{error}</p>}
                  <p className="text-xs text-neutral-500">
                    By proceeding, you agree to our{" "}
                    <a href="/terms" className="underline">
                      Terms
                    </a>{" "}
                    and{" "}
                    <a href="/privacy" className="underline">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </form>
              </motion.div>
            )}

            {step === "done" && (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="text-center py-6"
              >
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-emerald-600 text-white">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-heading text-xl font-medium text-neutral-900">
                  You’re booked in.
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                  {new Date(`${date}T${time}:00`).toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}{" "}
                  at {time} NPT — we’ll email you a confirmation shortly.
                </p>
                <button
                  onClick={() => {
                    setStep("date");
                    setDate("");
                    setTime("");
                    setForm({ name: "", email: "", notes: "" });
                  }}
                  className="mt-6 text-sm text-neutral-600 hover:text-neutral-900"
                >
                  Book another visit
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-neutral-700">{label} *</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}

function buildMonth(cursor: Date) {
  const first = new Date(cursor.getFullYear(), cursor.getMonth(), 1);
  const startWeekday = first.getDay(); // Sun=0
  const daysInMonth = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 0).getDate();
  const cells: (Date | null)[] = [];
  for (let i = 0; i < startWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push(new Date(cursor.getFullYear(), cursor.getMonth(), d));
  }
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}
