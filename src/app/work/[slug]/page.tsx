import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { projects, getProject } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return { title: "Case study — Lumera Technologies" };
  return {
    title: `${p.title} — Lumera Technologies`,
    description: p.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const others = projects.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <>
      <Nav />
      <main className="flex flex-col">
        <article className="pt-32 pb-20">
          <div className="mx-auto max-w-4xl px-6">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900"
            >
              <ArrowLeft className="h-4 w-4" />
              All work
            </Link>

            <p className="mt-8 text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
              {p.tag} · {p.year}
            </p>
            <h1 className="mt-3 font-heading text-4xl sm:text-6xl font-medium tracking-tight text-neutral-900 leading-[1.05]">
              {p.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-neutral-600 leading-relaxed">
              {p.summary}
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-6xl px-6">
            <div
              className={`aspect-[16/9] w-full rounded-3xl border border-black/10 bg-gradient-to-br ${p.accent}`}
              aria-hidden
            />
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl gap-12 px-6 md:grid-cols-3">
            <Meta title="Services">{p.services.join(" · ")}</Meta>
            <Meta title="Stack">{p.stack.join(" · ")}</Meta>
            <Meta title="Year">{p.year}</Meta>
          </div>

          <div className="mx-auto mt-16 max-w-3xl px-6">
            <h2 className="font-heading text-2xl font-medium tracking-tight text-neutral-900">
              Overview
            </h2>
            <p className="mt-4 text-base text-neutral-600 leading-relaxed">{p.overview}</p>
          </div>

          <div className="mx-auto mt-16 max-w-4xl px-6">
            <div className="grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 sm:grid-cols-3">
              {p.results.map((r) => (
                <div key={r.label} className="bg-white p-8 text-center">
                  <div className="font-heading text-4xl font-medium tracking-tight text-neutral-900">
                    {r.value}
                  </div>
                  <div className="mt-2 text-sm text-neutral-500">{r.label}</div>
                </div>
              ))}
            </div>
          </div>
        </article>

        <section className="py-20 bg-neutral-50/60 border-t border-black/5">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex items-end justify-between gap-6">
              <h2 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-neutral-900">
                More work
              </h2>
              <Link href="/#work" className="text-sm text-neutral-600 hover:text-neutral-900">
                See all →
              </Link>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/work/${o.slug}`}
                  className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white p-6"
                >
                  <div
                    className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${o.accent} opacity-60`}
                  />
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
                        {o.tag}
                      </p>
                      <h3 className="mt-2 font-heading text-lg font-medium tracking-tight text-neutral-900">
                        {o.title}
                      </h3>
                    </div>
                    <div className="grid h-8 w-8 place-items-center rounded-full bg-neutral-900 text-white transition-transform group-hover:-rotate-12">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Meta({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">{title}</p>
      <p className="mt-2 text-sm text-neutral-800">{children}</p>
    </div>
  );
}
