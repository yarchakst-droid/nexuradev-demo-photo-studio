import type { Metadata } from "next";
import BookingHeading from "@/components/booking/BookingHeading";
import BookingStepper from "@/components/booking/BookingStepper";

export const metadata: Metadata = {
  title: "Booking - Loom Studio",
  description: "Book a wedding, portrait, or editorial session with Loom Studio.",
};

export default function BookingPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-28 pt-40 lg:px-10">
      <BookingHeading />
      <BookingStepper />
    </div>
  );
}
