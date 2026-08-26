import type { Metadata } from "next";
import Reveal from "@/components/shared/Reveal";
import ContactIntro from "@/components/contact/ContactIntro";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact - Loom Studio",
  description: "Get in touch with Loom Studio.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 pb-28 pt-40 lg:grid-cols-[1fr_1.2fr] lg:px-10">
      <ContactIntro />
      <Reveal delay={0.12}>
        <ContactForm />
      </Reveal>
    </div>
  );
}
