import type { Metadata } from "next";
import { ChevronRight, Calendar, User, Tag } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Aukcje — Kancelaria Stanclik",
  description:
    "Aktualne przetargi i aukcje prowadzone przez Kancelarię Stanclik jako syndyka masy upadłości.",
};

const auctions = [
  {
    title:
      "Sprzedaż nieruchomości wchodzącej w skład masy upadłości Michała Mołczana",
    date: "5 września 2023",
    category: "Aktualności, Aukcje",
    author: "Paweł Stanclik",
    excerpt:
      "OGŁOSZENIE SYNDYKA MASY UPADŁOŚCI O SPRZEDAŻY NIERUCHOMOŚCI W POSTĘPOWANIU UPADŁOŚCIOWYM MICHAŁA MOŁCZANA POD SYGN. AKT: WA2M/GUp-s/742/2023 — Syndyk masy upadłości Michała Mołczana zawiadamia o przetargu ofertowym, pisemnym, nieograniczonym, którego przedmiotem jest sprzedaż nieruchomości gruntowej.",
    slug: "sprzedaz-nieruchomosci-molczana",
  },
];

export default function AukcjePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(26,58,92,0.5)_0%,transparent_70%)]" />
        <div className="w-full max-w-container mx-auto px-[clamp(24px,5vw,80px)] relative z-[2] text-center">
          <Eyebrow>Przetargi i aukcje</Eyebrow>
          <h1 className="font-display text-[clamp(40px,5vw,64px)] font-semibold text-white leading-[1.1] mb-6 tracking-[-0.01em]">
            Aukcje
          </h1>
          <p className="text-[16px] text-white/60 leading-[1.7] max-w-[640px] mx-auto font-light">
            W celu zapoznania się z aktualnymi przetargami, prosimy o kontakt z
            Kancelarią.
          </p>
        </div>
      </section>

      {/* Auctions list */}
      <section className="py-[80px] bg-offwhite">
        <div className="w-full max-w-container mx-auto px-[clamp(24px,5vw,80px)]">
          <div className="space-y-6">
            {auctions.map((auction, i) => (
              <article
                key={i}
                className="bg-white border border-border rounded-md p-8 transition-all duration-[250ms] hover:shadow-md hover:border-gold/30 group"
              >
                <div className="flex items-center gap-4 mb-4 text-[13px] text-text-light">
                  <span className="flex items-center gap-[6px]">
                    <Calendar className="w-[14px] h-[14px]" />
                    {auction.date}
                  </span>
                  <span className="flex items-center gap-[6px]">
                    <Tag className="w-[14px] h-[14px]" />
                    {auction.category}
                  </span>
                  <span className="flex items-center gap-[6px]">
                    <User className="w-[14px] h-[14px]" />
                    {auction.author}
                  </span>
                </div>
                <h2 className="font-display text-[24px] font-semibold text-navy mb-3 leading-[1.3]">
                  {auction.title}
                </h2>
                <p className="text-[15px] text-text-mid leading-[1.65] mb-6">
                  {auction.excerpt}
                </p>
                <span className="inline-flex items-center gap-[6px] text-[13px] font-semibold text-gold tracking-[0.04em] transition-all duration-200 group-hover:gap-[10px]">
                  Czytaj więcej
                  <ChevronRight className="w-[14px] h-[14px]" />
                </span>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-text-mid text-[15px] mb-6">
              W celu zapoznania się z aktualnymi przetargami, prosimy o kontakt
              z Kancelarią.
            </p>
            <Button href="/kontakt" variant="primary" showArrow>
              Skontaktuj się
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
