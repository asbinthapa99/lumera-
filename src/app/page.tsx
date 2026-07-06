export const dynamic = "force-dynamic";

import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { About } from "@/components/About";
import { InsightsStrip } from "@/components/InsightsStrip";
import { FAQ } from "@/components/FAQ";
import { BookVisit } from "@/components/BookVisit";
import { Contact } from "@/components/Contact";
import { TechStack } from "@/components/TechStack";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex flex-col">
        <Hero />
        <TrustedBy />
        <Services />
        <Work />
        <Process />
        <Testimonials />
        <About />
        <InsightsStrip />
        <FAQ />
        <BookVisit />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
