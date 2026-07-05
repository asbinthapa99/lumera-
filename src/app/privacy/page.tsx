import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Privacy — Lumera Technologies",
  description: "How Lumera Technologies handles your data.",
};

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-neutral-500">Last updated: {updated}</p>

            <div className="prose prose-neutral mt-10 max-w-none text-neutral-700">
              <h2>Who we are</h2>
              <p>
                Lumera Technologies Pvt. Ltd. (“Lumera”, “we”, “us”) is a software company
                registered in Nepal, based in Jhamsikhel, Lalitpur.
              </p>

              <h2>What we collect</h2>
              <p>When you interact with our website, we may collect:</p>
              <ul>
                <li>Contact form submissions (name, email, company, message)</li>
                <li>Basic analytics (pages visited, device type, referrer)</li>
                <li>Any information you voluntarily send us via email</li>
              </ul>

              <h2>How we use it</h2>
              <p>
                We use this information only to reply to your enquiry, understand how our
                website is used, and improve our services. We do not sell or share your
                personal data with third parties, except where required by law.
              </p>

              <h2>Cookies</h2>
              <p>
                We use minimal cookies — a session cookie for our admin area and, if enabled,
                a privacy-friendly analytics cookie. No advertising trackers, no cross-site
                profiling.
              </p>

              <h2>Data retention</h2>
              <p>
                Contact form submissions are retained for up to 24 months, then deleted.
                You can request deletion at any time by emailing{" "}
                <a href="mailto:hello@lumera.tech">hello@lumera.tech</a>.
              </p>

              <h2>Your rights</h2>
              <p>
                You have the right to request access to, correction of, or deletion of your
                personal information. Contact us at the email above and we’ll respond within
                a working week.
              </p>

              <h2>Contact</h2>
              <p>
                Questions about this policy?{" "}
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
