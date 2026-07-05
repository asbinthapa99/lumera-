import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "About — Lumera Technologies",
  description:
    "Lumera Technologies is a small software studio in Kathmandu, Nepal. Here’s who we are and how we work.",
};

const stats = [
  { k: "6+", v: "Years shipping software" },
  { k: "40+", v: "Products launched" },
  { k: "12", v: "Engineers & designers" },
  { k: "9", v: "Countries served" },
];

const principles = [
  {
    title: "Small teams, whole problems",
    body: "Two or three people on a project, from first call to launch. Fewer handoffs, less politics, more ownership.",
  },
  {
    title: "Ship weekly",
    body: "Every project has a weekly demo. Nothing lives in a branch for a month. Real progress you can see and steer.",
  },
  {
    title: "Honest timelines",
    body: "We commit to what we can actually do. No heroic quarters, no missed dates hidden behind buzzwords.",
  },
  {
    title: "Boring where it matters",
    body: "Well-tested code, sane infra, calm launches. We save the interesting bits for the product itself.",
  },
];

const team = [
  { name: "Aayush Thapa", role: "Co-founder · Engineering" },
  { name: "Nisha Gurung", role: "Co-founder · Design" },
  { name: "Sujan Maharjan", role: "Senior Engineer" },
  { name: "Priya Karki", role: "Senior Engineer" },
  { name: "Ram Bhattarai", role: "Mobile Engineer" },
  { name: "Anish Shrestha", role: "AI Engineer" },
  { name: "Nabin Rai", role: "Product Designer" },
  { name: "Sita Basnet", role: "Operations" },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="flex flex-col">
        <section className="pt-32 pb-16">
          <div className="mx-auto max-w-4xl px-6">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
              About Lumera
            </p>
            <h1 className="mt-3 font-heading text-4xl sm:text-6xl font-medium tracking-tight text-neutral-900 leading-[1.05]">
              A small software studio in Kathmandu, building for the world.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-neutral-600 leading-relaxed">
              We started Lumera in 2020 with a simple idea: Nepali engineers and designers,
              working carefully on things that actually matter, can hold their own with any
              team in the world. Six years and forty-plus shipped products later, we still
              believe that.
            </p>
          </div>
        </section>

        <section className="pb-16">
          <div className="mx-auto max-w-4xl px-6">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10">
              {stats.map((s) => (
                <div key={s.k} className="bg-white p-8">
                  <div className="font-heading text-4xl font-medium tracking-tight text-neutral-900">
                    {s.k}
                  </div>
                  <div className="mt-2 text-sm text-neutral-500">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-neutral-50/60 border-y border-black/5">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-neutral-900">
              How we work
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {principles.map((p) => (
                <div key={p.title} className="rounded-2xl border border-black/10 bg-white p-6">
                  <h3 className="font-heading text-lg font-medium text-neutral-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-neutral-900">
              The team
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-neutral-600">
              Twelve people (and growing) across engineering, design and ops.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((m) => (
                <div key={m.name} className="rounded-2xl border border-black/10 bg-white p-6">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-neutral-900 text-white text-sm font-semibold">
                    {m.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <h3 className="mt-4 font-heading text-base font-medium text-neutral-900">
                    {m.name}
                  </h3>
                  <p className="text-sm text-neutral-500">{m.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-neutral-50/60 border-t border-black/5">
          <div className="mx-auto max-w-4xl px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl border border-black/10 bg-white p-6">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
                  Office
                </p>
                <p className="mt-3 flex items-start gap-2 text-sm text-neutral-800">
                  <MapPin className="mt-0.5 h-4 w-4 text-neutral-500" />
                  Jhamsikhel, Lalitpur, Nepal
                </p>
                <p className="mt-2 text-xs text-neutral-500">
                  Sun – Fri · 10:00 – 18:00 NPT
                </p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-6">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
                  Company
                </p>
                <p className="mt-3 text-sm text-neutral-800">Lumera Technologies Pvt. Ltd.</p>
                <p className="mt-1 text-xs text-neutral-500">Registered in Nepal, est. 2020.</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800"
              >
                Work with us <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
              >
                Join the team <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
