import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";

export const metadata = {
  title: "Contact — Lumera Technologies",
  description: "Get in touch with Lumera Technologies to talk about your next project.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="flex flex-col pt-20">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
