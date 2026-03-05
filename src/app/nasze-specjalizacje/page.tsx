import type { Metadata } from "next";
import { ServiceCard } from "@/components/ServiceCard";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { Phone } from "lucide-react";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Nasze Specjalizacje — Kancelaria Stanclik",
  description:
    "Świadczenie kompleksowej obsługi prawnej w zakresie upadłości, restrukturyzacji, prawa spółek i wielu innych.",
};

export default function SpecjalizacjePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(26,58,92,0.5)_0%,transparent_70%)]" />
        <div className="w-full max-w-container mx-auto px-[clamp(24px,5vw,80px)] relative z-[2] text-center">
          <Eyebrow>Nasze kompetencje</Eyebrow>
          <h1 className="font-display text-[clamp(40px,5vw,64px)] font-semibold text-white leading-[1.1] mb-6 tracking-[-0.01em]">
            Nasze Specjalizacje
          </h1>
          <p className="text-[16px] text-white/60 leading-[1.7] max-w-[640px] mx-auto font-light">
            Świadczenie kompleksowej obsługi prawnej wymaga od nas nie tylko
            znajomości prawa, ale również doświadczenia w prowadzeniu biznesu. W
            skład naszego zespołu wchodzą zarówno prawnicy, ekonomiści, jak i
            doświadczeni menadżerowie.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-[100px] bg-offwhite">
        <div className="w-full max-w-container mx-auto px-[clamp(24px,5vw,80px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                slug={service.slug}
                title={service.shortTitle}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-mid border-t-[3px] border-gold py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_100%_at_50%_50%,rgba(201,168,76,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="w-full max-w-container mx-auto px-[clamp(24px,5vw,80px)] relative">
          <h2 className="font-display text-[clamp(32px,4vw,48px)] font-semibold text-white mb-4 leading-[1.15]">
            Potrzebujesz pomocy prawnej?
          </h2>
          <p className="text-[16px] text-white/60 mb-11 font-light">
            Skontaktuj się z nami — pomożemy dobrać optymalne rozwiązanie.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button href="/kontakt" variant="primary" showArrow>
              Skontaktuj się
            </Button>
            <Button href="tel:+48571903176" variant="outline">
              <Phone className="w-4 h-4" />
              +48 571 903 176
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
