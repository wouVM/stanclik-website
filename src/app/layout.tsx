import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/TopBar";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kancelaria Stanclik — Kancelaria Restrukturyzacyjna",
  description:
    "Zapewniamy bezpieczeństwo Tobie i Twojej firmie. Jesteśmy wyspecjalizowanym zespołem prawników biznesowych, ekonomistów i menadżerów.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-body antialiased">
        <TopBar />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
