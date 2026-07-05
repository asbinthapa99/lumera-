import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/Services";
import { prisma } from "@/lib/db";

export async function InsightsStrip() {
  const featured = await prisma.post.findMany({
    where: { published: true },
    orderBy: { publishedAt: "desc" },
    take: 3,
  });

  if (featured.length === 0) return null;

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Insights"
            title="From the studio"
            subtitle="Short notes on how we build, hire and think about software."
          />
          <Link
            href="/insights"
            className="hidden sm:inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900"
          >
            All insights <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {featured.map((p) => (
            <Link
              key={p.slug}
              href={`/insights/${p.slug}`}
              className="group block h-full overflow-hidden rounded-2xl border border-black/10 bg-white transition-shadow hover:shadow-lg"
            >
              <div className="aspect-[16/10] overflow-hidden bg-neutral-100">
                {p.cover ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={p.cover}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-neutral-100 to-neutral-200" />
                )}
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-neutral-500">
                  {p.tag} · {p.readMinutes} min
                </div>
                <h3 className="mt-3 font-heading text-lg font-medium tracking-tight text-neutral-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{p.excerpt}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-neutral-800">
                  Read <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
