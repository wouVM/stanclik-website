import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt — Kancelaria Stanclik",
  description:
    "Skontaktuj się z nami. ul. Wiejska 12 lok. 6, 00-490 Warszawa. +48 571 903 176.",
};

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(26,58,92,0.5)_0%,transparent_70%)]" />
        <div className="w-full max-w-container mx-auto px-[clamp(24px,5vw,80px)] relative z-[2] text-center">
          <Eyebrow>Kontakt</Eyebrow>
          <h1 className="font-display text-[clamp(40px,5vw,64px)] font-semibold text-white leading-[1.1] mb-6 tracking-[-0.01em]">
            Skontaktuj się z nami
          </h1>
          <p className="text-[16px] text-white/60 leading-[1.7] max-w-[640px] mx-auto font-light">
            Skontaktuj się z nami i skorzystaj z wiedzy i doświadczenia
            ekspertów.
          </p>
        </div>
      </section>

      {/* Contact Strip */}
      <div className="grid grid-cols-1 lg:grid-cols-[40fr_60fr]">
        <div className="bg-offwhite px-[clamp(24px,5vw,80px)] py-[clamp(40px,6vw,72px)] flex flex-col justify-center gap-7 md:gap-9">
          <div>
            <Eyebrow>Dane kontaktowe</Eyebrow>
            <h2 className="font-display text-[clamp(28px,5vw,36px)] font-semibold text-navy leading-[1.15] mb-2">
              Jesteśmy do Twojej dyspozycji
            </h2>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-navy rounded-sm flex items-center justify-center flex-shrink-0">
              <MapPin className="w-[18px] h-[18px] stroke-gold" />
            </div>
            <div>
              <div className="text-[11px] font-semibold tracking-[0.12em] uppercase text-text-light mb-[3px]">
                Adres
              </div>
              <div className="text-[15px] font-medium text-navy">
                ul. Wiejska 12 lok. 6
                <br />
                00-490 Warszawa
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-navy rounded-sm flex items-center justify-center flex-shrink-0">
              <Phone className="w-[18px] h-[18px] stroke-gold" />
            </div>
            <div>
              <div className="text-[11px] font-semibold tracking-[0.12em] uppercase text-text-light mb-[3px]">
                Telefon
              </div>
              <div className="text-[15px] font-medium text-navy">
                <a
                  href="tel:+48571903176"
                  className="hover:text-gold transition-colors"
                >
                  +48 571 903 176
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-navy rounded-sm flex items-center justify-center flex-shrink-0">
              <Mail className="w-[18px] h-[18px] stroke-gold" />
            </div>
            <div>
              <div className="text-[11px] font-semibold tracking-[0.12em] uppercase text-text-light mb-[3px]">
                Email
              </div>
              <div className="text-[15px] font-medium text-navy">
                <a
                  href="mailto:biuro@stanclik.com.pl"
                  className="hover:text-gold transition-colors"
                >
                  biuro@stanclik.com.pl
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-navy rounded-sm flex items-center justify-center flex-shrink-0">
              <Clock className="w-[18px] h-[18px] stroke-gold" />
            </div>
            <div>
              <div className="text-[11px] font-semibold tracking-[0.12em] uppercase text-text-light mb-[3px]">
                Godziny pracy
              </div>
              <div className="text-[15px] font-medium text-navy">
                Poniedziałek – Piątek
                <br />
                09:00 – 17:00
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white px-[clamp(24px,5vw,80px)] py-[clamp(40px,6vw,72px)] flex flex-col justify-center">
          <ContactForm />
        </div>
      </div>

      {/* Map placeholder */}
      <section className="bg-offwhite py-16">
        <div className="w-full max-w-container mx-auto px-[clamp(24px,5vw,80px)]">
          <div className="aspect-[16/9] md:aspect-[21/9] bg-navy-mid/10 rounded-lg flex items-center justify-center border border-border">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-gold mx-auto mb-4" />
              <p className="text-text-mid text-[14px]">
                ul. Wiejska 12 lok. 6, 00-490 Warszawa
              </p>
              <a
                href="https://www.google.com/maps/place/Wiejska+12,+00-490+Warszawa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold text-[14px] font-semibold mt-2 inline-block hover:underline"
              >
                Otwórz w Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
