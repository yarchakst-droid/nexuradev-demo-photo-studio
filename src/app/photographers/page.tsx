import type { Metadata } from "next";
import PhotographersContent from "@/components/photographers/PhotographersContent";

export const metadata: Metadata = {
  title: "Photographers - Loom Studio",
  description: "Meet the photographers at Loom Studio.",
};

export default function PhotographersPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-28 pt-40 lg:px-10">
      <PhotographersContent />
    </div>
  );
}
