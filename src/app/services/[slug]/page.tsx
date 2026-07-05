import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BarChart3, Bot, Check, Cloud, Code2, LineChart, Lock, Palette, ShieldCheck, Smartphone, Sparkles } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { services, getService } from "@/lib/services";
import type { ServiceDetail } from "@/lib/services";

const icons: Record<ServiceDetail["icon"], React.ComponentType<{ className?: string }>> = {
  code: Code2,
  mobile: Smartphone,
  cloud: Cloud,
  design: Palette,
  data: LineChart,
  shield: ShieldCheck,
  ai: Sparkles,
  bot: Bot,
  chart: BarChart3,
  lock: Lock,
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return { title: "Services — Lumera Technologies" };
  return { title: `${s.title} — Lumera Technologies`, description: s.tagline };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const Icon = icons[s.icon];
  const others = services.filter((x) => x.slug !== s.slug);

  return (
    <>
      <Nav />
      <main className="flex flex-col">
        <section className="pt-32 pb-16">
          <div className="mx-auto max-w-4xl px-6">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900"
            >
              <ArrowLeft className="h-4 w-4" />
              All services
            </Link>

            <div className="mt-8 flex items-start gap-5">
              <span
                className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${s.accent} text-neutral-900 border border-black/10`}
              >
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <h1 className="font-heading text-4xl sm:text-5xl font-medium tracking-tight text-neutral-900 leading-[1.05]">
                  {s.title}
                </h1>
                <p className="mt-3 text-lg text-neutral-600">{s.tagline}</p>
              </div>
            </div>

            <p className="mt-10 max-w-2xl text-base text-neutral-700 leading-relaxed">{s.intro}</p>
          </div>
        </section>

        <section className="py-16 bg-neutral-50/60 border-y border-black/5">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="font-heading text-2xl font-medium tracking-tight text-neutral-900">
              What you get
            </h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {s.deliverables.map((d) => (
                <li
                  key={d}
                  className="flex items-start gap-3 rounded-xl border border-black/10 bg-white p-4"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span className="text-sm text-neutral-800">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="font-heading text-2xl font-medium tracking-tight text-neutral-900">
              How we work on it
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {s.process.map((p, i) => (
                <div key={p.step} className="rounded-2xl border border-black/10 bg-white p-6">
                  <span className="text-xs font-medium tracking-widest text-neutral-400">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 font-heading text-lg font-medium text-neutral-900">
                    {p.step}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-neutral-50/60 border-y border-black/5">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="font-heading text-2xl font-medium tracking-tight text-neutral-900">
              Tools we reach for
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {s.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-black/10 bg-white px-4 py-1.5 text-sm text-neutral-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="font-heading text-2xl font-medium tracking-tight text-neutral-900">
              Questions
            </h2>
            <div className="mt-8 divide-y divide-black/10 rounded-2xl border border-black/10 bg-white">
              {s.faqs.map((f) => (
                <div key={f.q} className="p-6">
                  <p className="font-heading text-base font-medium text-neutral-900">{f.q}</p>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-neutral-50/60 border-t border-black/5">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-heading text-2xl font-medium tracking-tight text-neutral-900">
              Other services
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((o) => {
                const OIcon = icons[o.icon];
                return (
                  <Link
                    key={o.slug}
                    href={`/services/${o.slug}`}
                    className="group rounded-2xl border border-black/10 bg-white p-6 transition-colors hover:bg-neutral-50"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-900 text-white">
                      <OIcon className="h-4 w-4" />
                    </span>
                    <h3 className="mt-4 font-heading text-base font-medium text-neutral-900">
                      {o.title}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-500">{o.tagline}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
