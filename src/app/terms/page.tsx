import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Terms — Lumera Technologies",
  description: "Terms of use for the Lumera Technologies website.",
};

export default function TermsPage() {
  const updated = "1 July 2026";
  return (
    <>
      <Nav />
      <main className="flex flex-col">
        <article className="pt-32 pb-24">
          <div className="mx-auto max-w-3xl px-6">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
              Legal
            </p>
            <h1 className="mt-3 font-heading text-4xl sm:text-5xl font-medium tracking-tight text-neutral-900">
              Terms of Use
            </h1>
            <p className="mt-3 text-sm text-neutral-500">Last updated: {updated}</p>

            <div className="prose prose-neutral mt-10 max-w-none text-neutral-700">
              <h2>Acceptance</h2>
              <p>
                By using this website, you agree to these terms. If you don’t agree, please
                don’t use the site.
              </p>

              <h2>Content</h2>
              <p>
                All content on this website — text, code samples, images, marks — is owned
                by Lumera Technologies Pvt. Ltd. or licensed to us. You may not reuse it
                commercially without written permission.
              </p>

              <h2>No warranty</h2>
              <p>
                The site is provided “as is”. We do our best to keep it accurate and
                available, but we don’t warrant that it will always be error-free or
                uninterrupted.
              </p>

              <h2>Liability</h2>
              <p>
                We are not liable for indirect, incidental or consequential damages arising
                from your use of this website.
              </p>

              <h2>Client work</h2>
              <p>
                Engagements are governed by a separate written agreement between Lumera and
                the client. Nothing on this website constitutes an offer or contract.
              </p>

              <h2>Governing law</h2>
              <p>
                These terms are governed by the laws of Nepal. Disputes are subject to the
                exclusive jurisdiction of the courts in Kathmandu.
              </p>

              <h2>Contact</h2>
              <p>
                Questions?{" "}
                <a href="mailto:hello@lumera.tech">hello@lumera.tech</a>
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
