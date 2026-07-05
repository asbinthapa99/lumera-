import Link from "next/link";
import { ArrowUpRight, Heart, Sparkles, GraduationCap, Sun } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { jobs } from "@/lib/jobs";

export const metadata = {
  title: "Careers — Lumera Technologies",
  description:
    "Join a small software studio in Kathmandu building calm, useful products for Nepal and the world.",
};

const values = [
  {
    icon: Heart,
    title: "Small team, real ownership",
    body: "We stay small on purpose. You own features from planning to launch — and everyone’s voice matters in the room.",
  },
  {
    icon: Sparkles,
    title: "Craft, not busywork",
    body: "We chase clean code, clear design and calm software. No CV-driven development, no meetings for meetings.",
  },
  {
    icon: GraduationCap,
    title: "Grow on the job",
    body: "Real mentorship, honest code review, and a yearly learning budget. You leave here a better engineer or designer.",
  },
  {
    icon: Sun,
    title: "Sane hours",
    body: "40-hour weeks, no weekend rescues, and 22 days of paid leave. Software is a marathon, not a sprint.",
  },
];

export default function CareersPage() {
  const byTeam = jobs.reduce<Record<string, typeof jobs>>((acc, j) => {
    (acc[j.team] ??= []).push(j);
    return acc;
  }, {});

  return (
    <>
      <Nav />
      <main className="flex flex-col">
        <section className="pt-32 pb-16">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
              Careers
            </p>
            <h1 className="mt-3 font-heading text-4xl sm:text-6xl font-medium tracking-tight text-neutral-900 leading-[1.05]">
              Build calm software with us.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600 leading-relaxed">
              We’re a small software studio in Kathmandu. We hire slowly, treat people well,
              and try to be the kind of place engineers and designers actually enjoy working at.
            </p>
          </div>
        </section>

        <section className="pb-8">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v) => (
                <div key={v.title} className="rounded-2xl border border-black/10 bg-white p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 text-white">
                    <v.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-heading text-base font-medium text-neutral-900">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-neutral-900">
              Open roles
            </h2>
            {jobs.length === 0 ? (
              <p className="mt-6 rounded-2xl border border-black/10 bg-white p-8 text-sm text-neutral-500">
                No open roles right now — but we’re always happy to hear from good people. Email{" "}
                <a href="mailto:careers@lumera.tech" className="underline">
                  careers@lumera.tech
                </a>
                .
              </p>
            ) : (
              <div className="mt-8 space-y-10">
                {Object.entries(byTeam).map(([team, roles]) => (
                  <div key={team}>
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
                      {team}
                    </p>
                    <ul className="mt-4 divide-y divide-black/10 rounded-2xl border border-black/10 bg-white">
                      {roles.map((j) => (
                        <li key={j.slug}>
                          <Link
                            href={`/careers/${j.slug}`}
                            className="group flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:justify-between hover:bg-neutral-50"
                          >
                            <div>
                              <h3 className="font-heading text-lg font-medium text-neutral-900">
                                {j.title}
                              </h3>
                              <p className="mt-1 text-sm text-neutral-600">{j.summary}</p>
                            </div>
                            <div className="flex items-center gap-3 text-xs text-neutral-500">
                              <span className="rounded-full bg-neutral-100 px-2.5 py-1">
                                {j.type}
                              </span>
                              <span className="rounded-full bg-neutral-100 px-2.5 py-1">
                                {j.location}
                              </span>
                              <ArrowUpRight className="h-4 w-4 text-neutral-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="pb-24">
          <div className="mx-auto max-w-4xl px-6">
            <div className="rounded-3xl border border-black/10 bg-neutral-900 p-10 sm:p-14 text-white">
              <h2 className="font-heading text-2xl sm:text-4xl font-medium tracking-tight">
                Don’t see your role?
              </h2>
              <p className="mt-3 max-w-xl text-white/70">
                We always reply to a good, specific email. Tell us about you and what you’d bring to Lumera.
              </p>
              <a
                href="mailto:careers@lumera.tech"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-900 hover:bg-white/90"
              >
                careers@lumera.tech <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
