import type { Metadata } from "next";
import GalleryHeading from "@/components/gallery/GalleryHeading";
import MasonryGallery from "@/components/gallery/MasonryGallery";
import { galleryItems } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Gallery - Loom Studio",
  description: "Wedding, portrait, and editorial photography from Loom Studio.",
};

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-28 pt-40 lg:px-10">
      <GalleryHeading />
      <MasonryGallery items={galleryItems} />
    </div>
  );
}
