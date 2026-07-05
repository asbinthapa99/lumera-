import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="flex min-h-[70vh] items-center justify-center px-6 py-24">
        <div className="max-w-lg text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
            404
          </p>
          <h1 className="mt-3 font-heading text-5xl font-medium tracking-tight text-neutral-900">
            Lost in the code.
          </h1>
          <p className="mt-4 text-neutral-600">
            The page you’re looking for doesn’t exist — or has moved.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-800"
            >
              Back home
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium text-neutral-800 hover:bg-neutral-50"
            >
              Contact us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
