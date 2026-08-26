import type { Metadata } from "next";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About - Loom Studio",
  description: "The story and studio behind Loom Studio.",
};

export default function AboutPage() {
  return <AboutContent />;
}
