import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, MapPin, Briefcase, ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { jobs, getJob } from "@/lib/jobs";

export function generateStaticParams() {
  return jobs.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const j = getJob(slug);
  if (!j) return { title: "Careers — Lumera Technologies" };
  return { title: `${j.title} — Careers at Lumera Technologies`, description: j.summary };
}

export default async function JobPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const j = getJob(slug);
  if (!j) notFound();

  const others = jobs.filter((x) => x.slug !== j.slug).slice(0, 3);
  const subject = encodeURIComponent(`Application: ${j.title}`);
  const mailto = `mailto:careers@lumera.tech?subject=${subject}`;

  return (
    <>
      <Nav />
      <main className="flex flex-col">
        <article className="pt-32 pb-20">
          <div className="mx-auto max-w-3xl px-6">
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900"
            >
              <ArrowLeft className="h-4 w-4" />
              All open roles
            </Link>

            <p className="mt-8 text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
              {j.team} · {j.level}
            </p>
            <h1 className="mt-3 font-heading text-4xl sm:text-5xl font-medium tracking-tight text-neutral-900 leading-[1.05]">
              {j.title}
            </h1>
            <p className="mt-4 text-lg text-neutral-600 leading-relaxed">{j.summary}</p>

            <div className="mt-6 flex flex-wrap gap-2 text-xs text-neutral-600">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1">
                <Briefcase className="h-3.5 w-3.5" /> {j.type}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1">
                <MapPin className="h-3.5 w-3.5" /> {j.location}
              </span>
              {j.salary && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700">
                  {j.salary}
                </span>
              )}
            </div>

            <div className="mt-8">
              <a
                href={mailto}
                className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800"
              >
                Apply for this role
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <p className="mt-3 text-xs text-neutral-500">
                Send us your CV, a link to something you’re proud of, and a note on why this role.
                We reply within a week.
              </p>
            </div>

            <hr className="my-10 border-black/5" />

            <section>
              <h2 className="font-heading text-xl font-medium text-neutral-900">About the role</h2>
              <p className="mt-3 text-sm text-neutral-700 leading-relaxed">{j.about}</p>
            </section>

            <Section title="What you’ll do">
              <List items={j.responsibilities} />
            </Section>
            <Section title="What we’re looking for">
              <List items={j.requirements} />
            </Section>
            {j.nice.length > 0 && (
              <Section title="Nice to have">
                <List items={j.nice} muted />
              </Section>
            )}
            <Section title="What we offer">
              <List items={j.benefits} />
            </Section>

            <div className="mt-14 rounded-2xl border border-black/10 bg-neutral-50 p-6 sm:p-8">
              <h3 className="font-heading text-lg font-medium text-neutral-900">
                Ready to apply?
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                Email us at{" "}
                <a href={mailto} className="underline">
                  careers@lumera.tech
                </a>{" "}
                — mention the role in the subject line.
              </p>
              <a
                href={mailto}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-800"
              >
                Apply now <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </article>

        {others.length > 0 && (
          <section className="py-16 bg-neutral-50/60 border-t border-black/5">
            <div className="mx-auto max-w-4xl px-6">
              <h2 className="font-heading text-2xl font-medium tracking-tight text-neutral-900">
                Other open roles
              </h2>
              <ul className="mt-6 divide-y divide-black/10 rounded-2xl border border-black/10 bg-white">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link
                      href={`/careers/${o.slug}`}
                      className="group flex items-center justify-between gap-4 p-5 hover:bg-neutral-50"
                    >
                      <div>
                        <h3 className="font-heading text-base font-medium text-neutral-900">
                          {o.title}
                        </h3>
                        <p className="mt-1 text-sm text-neutral-500">
                          {o.team} · {o.location} · {o.type}
                        </p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-neutral-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-heading text-xl font-medium text-neutral-900">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function List({ items, muted }: { items: string[]; muted?: boolean }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <Check
            className={`mt-0.5 h-4 w-4 shrink-0 ${muted ? "text-neutral-400" : "text-emerald-600"}`}
          />
          <span className="text-sm text-neutral-700">{item}</span>
        </li>
      ))}
    </ul>
  );
}
