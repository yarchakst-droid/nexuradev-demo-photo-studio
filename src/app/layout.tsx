import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { LangProvider } from "@/i18n/LangContext";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Loom Studio - Editorial Wedding & Portrait Photography",
  description:
    "Loom Studio is a premium wedding and portrait photography studio. Browse our work, meet the photographers, and book a session.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} ${workSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-sand font-body text-ink">
        <LangProvider>
          <SmoothScroll>
            <Nav />
            <main className="flex-1">{children}</main>
            <Footer />
          </SmoothScroll>
        </LangProvider>
      </body>
    </html>
  );
}
