import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Insights — Lumera Technologies",
  description: "Notes on shipping software from Kathmandu.",
};

export default async function InsightsPage() {
  const sorted = await prisma.post.findMany({
    where: { published: true },
    orderBy: { publishedAt: "desc" },
  });

  return (
    <>
      <Nav />
      <main className="flex flex-col">
        <section className="pt-32 pb-16">
          <div className="mx-auto max-w-4xl px-6">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
              Insights
            </p>
            <h1 className="mt-3 font-heading text-4xl sm:text-6xl font-medium tracking-tight text-neutral-900 leading-[1.05]">
              Notes from the studio
            </h1>
            <p className="mt-6 max-w-xl text-lg text-neutral-600 leading-relaxed">
              Short writing on how we build, hire and think about software — from Kathmandu.
            </p>
          </div>
        </section>

        <section className="pb-24">
          <div className="mx-auto max-w-4xl px-6">
            {sorted.length === 0 ? (
              <div className="rounded-2xl border border-black/10 bg-white p-10 text-center text-sm text-neutral-500">
                Nothing published yet. Check back soon.
              </div>
            ) : (
              <div className="grid gap-8 sm:grid-cols-2">
                {sorted.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/insights/${p.slug}`}
                    className="group block overflow-hidden rounded-2xl border border-black/10 bg-white transition-shadow hover:shadow-lg"
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
                      <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-neutral-500">
                        <span>{p.tag}</span>
                        <span>·</span>
                        <span>
                          {new Date(p.publishedAt).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                        <span>·</span>
                        <span>{p.readMinutes} min</span>
                      </div>
                      <h2 className="mt-3 font-heading text-xl font-medium tracking-tight text-neutral-900">
                        {p.title}
                      </h2>
                      <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{p.excerpt}</p>
                      <div className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-neutral-800">
                        Read <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
