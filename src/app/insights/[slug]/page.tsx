import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = await prisma.post.findUnique({ where: { slug } }).catch(() => null);
  if (!p) return { title: "Insights — Lumera Technologies" };
  return { title: `${p.title} — Lumera Technologies`, description: p.excerpt };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = await prisma.post.findUnique({ where: { slug } }).catch(() => null);
  if (!p || !p.published) notFound();

  const more = await prisma.post
    .findMany({
      where: { published: true, NOT: { slug: p.slug } },
      orderBy: { publishedAt: "desc" },
      take: 2,
    })
    .catch(() => []);

  return (
    <>
      <Nav />
      <main className="flex flex-col">
        <article className="pt-32 pb-20">
          <div className="mx-auto max-w-3xl px-6">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900"
            >
              <ArrowLeft className="h-4 w-4" />
              All insights
            </Link>

            <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-widest text-neutral-500">
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
              <span>{p.readMinutes} min read</span>
            </div>

            <h1 className="mt-4 font-heading text-4xl sm:text-5xl font-medium tracking-tight text-neutral-900 leading-[1.05]">
              {p.title}
            </h1>
            <p className="mt-6 text-lg text-neutral-600 leading-relaxed">{p.excerpt}</p>

            {p.cover && (
              <div className="mt-10 aspect-[16/9] overflow-hidden rounded-2xl border border-black/10 bg-neutral-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.cover} alt={p.title} className="h-full w-full object-cover" />
              </div>
            )}

            <div className="mt-8 flex items-center gap-3 border-y border-black/5 py-4">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-neutral-900 text-white text-xs font-semibold">
                {p.author.charAt(0)}
              </span>
              <div>
                <div className="text-sm font-medium text-neutral-900">{p.author}</div>
                <div className="text-xs text-neutral-500">Lumera Technologies</div>
              </div>
            </div>

            <div className="prose prose-neutral mt-10 max-w-none">
              <ReactMarkdown>{p.body}</ReactMarkdown>
            </div>
          </div>
        </article>

        {more.length > 0 && (
          <section className="py-20 bg-neutral-50/60 border-t border-black/5">
            <div className="mx-auto max-w-4xl px-6">
              <h2 className="font-heading text-2xl font-medium tracking-tight text-neutral-900">
                Keep reading
              </h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {more.map((m) => (
                  <Link
                    key={m.slug}
                    href={`/insights/${m.slug}`}
                    className="group rounded-2xl border border-black/10 bg-white p-6 hover:bg-white"
                  >
                    <div className="text-xs uppercase tracking-widest text-neutral-500">{m.tag}</div>
                    <h3 className="mt-2 font-heading text-lg font-medium text-neutral-900">
                      {m.title}
                    </h3>
                    <p className="mt-2 text-sm text-neutral-600">{m.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
