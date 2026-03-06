import Link from "next/link";
import {
  ChevronRight,
  Phone,
  MapPin,
  Mail,
  Clock,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactForm } from "@/components/ContactForm";
import { services } from "@/lib/services";

export default function HomePage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[88vh] flex items-center bg-navy overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_50%,rgba(26,58,92,0.6)_0%,transparent_70%),radial-gradient(ellipse_40%_80%_at_90%_20%,rgba(201,168,76,0.06)_0%,transparent_60%)]" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          }}
        />
        {/* Gold accent line left */}
        <div className="absolute left-0 top-[10%] bottom-[10%] w-[3px] bg-gradient-to-b from-transparent via-gold to-transparent" />

        <div className="w-full max-w-container mx-auto px-[clamp(24px,5vw,80px)] relative z-[2]">
          <div className="py-[clamp(48px,10vw,100px)] max-w-[720px]">
            <div className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.2em] uppercase text-gold mb-7 before:content-[''] before:block before:w-8 before:h-[1.5px] before:bg-gold before:flex-shrink-0">
              Kancelaria Restrukturyzacyjna
            </div>
            <h1 className="font-display text-[clamp(48px,7vw,76px)] font-semibold leading-[1.08] text-white mb-7 tracking-[-0.01em]">
              Zapewniamy
              <br />
              bezpieczeństwo
              <br />
              <em className="italic text-gold">Tobie i Twojej firmie.</em>
            </h1>
            <p className="text-[clamp(15px,2.5vw,18px)] text-white/65 leading-[1.65] mb-8 md:mb-12 max-w-[520px] font-light">
              Jesteśmy wyspecjalizowanym zespołem prawników biznesowych,
              ekonomistów i menadżerów. Działamy tam, gdzie stawką jest
              przyszłość Twojego przedsiębiorstwa.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button href="/nasze-specjalizacje" variant="primary" showArrow>
                Nasze specjalizacje
              </Button>
              <Button href="/kontakt" variant="outline">
                Zadaj pytanie
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/35 text-[10px] tracking-[0.15em] uppercase">
          <div
            className="w-[1px] h-12 bg-gradient-to-b from-gold/60 to-transparent"
            style={{ animation: "scrollPulse 2s ease-in-out infinite" }}
          />
          <span>scroll</span>
        </div>
      </section>

      {/* ═══ STATS BAR ═══ */}
      <section className="bg-navy-mid border-t border-b border-gold/20">
        <div className="w-full max-w-container mx-auto px-[clamp(24px,5vw,80px)]">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { number: "15+", label: "Lat doświadczenia" },
              { number: "200+", label: "Prowadzonych spraw" },
              { number: "4", label: "Typy postępowań restrukturyzacyjnych" },
              { number: "100%", label: "Zaangażowania w każdą sprawę" },
            ].map((stat, i) => (
              <div
                key={i}
                className={`py-6 px-4 md:py-9 md:px-8 flex flex-col items-center text-center relative
                  ${i > 0 ? "before:content-[''] before:absolute before:left-0 before:top-[20%] before:bottom-[20%] before:w-[1px] before:bg-white/[0.12]" : ""}
                  ${i === 2 ? "before:hidden md:before:block" : ""}`}
              >
                <div className="font-display text-[clamp(32px,8vw,52px)] font-semibold text-gold leading-none mb-2 tracking-[-0.02em]">
                  {stat.number}
                </div>
                <div className="text-[12px] text-white/55 tracking-[0.1em] uppercase font-normal">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ABOUT SPLIT ═══ */}
      <section className="py-[clamp(48px,10vw,100px)] bg-offwhite">
        <div className="w-full max-w-container mx-auto px-[clamp(24px,5vw,80px)]">
          <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-block bg-gold/[0.12] text-gold text-[10px] font-bold tracking-[0.16em] uppercase px-3 py-1 rounded-full border border-gold/25 mb-6">
                O nas
              </div>
              <h2 className="font-display text-[clamp(36px,4vw,52px)] font-semibold leading-[1.15] text-navy mb-6 tracking-[-0.01em]">
                Kim jesteśmy?
              </h2>
              <p className="text-[16px] text-text-mid leading-[1.75] mb-4">
                Jesteśmy dynamicznym zespołem prawników biznesowych, ekonomistów
                i menadżerów. Naszym celem jest zapewnienie bezpieczeństwa Tobie
                i twojej firmie. Członkowie naszego zespołu zdobyli
                doświadczenie i kwalifikacje prowadząc przedsiębiorstwo Family
                Office.
              </p>
              <p className="text-[16px] text-text-mid leading-[1.75] mb-9">
                Wśród innych kancelarii wyróżnia nas wszechstronność, a
                jednocześnie wysoki poziom specjalizacji osób współpracujących z
                nami. Nasz zespół skupia w sobie pełen zakres niezbędnej wiedzy
                pozwalającej na świadczenie skoordynowanych i kompleksowych usług
                doradczych w obszarze zarządzania przedsiębiorstwami oraz
                aktywami majątkowymi.
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 text-[14px] font-semibold text-gold tracking-[0.04em] transition-all duration-200 hover:gap-[14px]"
              >
                Zadaj nam pytanie
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-navy-mid to-navy rounded-lg overflow-hidden relative">
                {/* Decorative pattern */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "repeating-linear-gradient(45deg, transparent, transparent 32px, rgba(201,168,76,0.04) 32px, rgba(201,168,76,0.04) 33px)",
                  }}
                />
                <div className="absolute bottom-10 left-10 right-10 h-[3px] bg-gradient-to-r from-gold to-transparent" />
                <div className="absolute bottom-10 left-8 right-8 md:bottom-14 md:left-14 md:right-14 font-display text-[clamp(20px,4vw,28px)] font-medium text-white/15 leading-[1.3] italic">
                  Prawo.
                  <br />
                  Doświadczenie.
                  <br />
                  Zaufanie.
                </div>
              </div>
              {/* Badge */}
              <div className="absolute -bottom-3 -right-3 md:-bottom-5 md:-right-5 w-[90px] h-[90px] md:w-[120px] md:h-[120px] bg-gold rounded-full flex flex-col items-center justify-center gap-[2px] shadow-lg">
                <div className="font-display text-[24px] md:text-[36px] font-bold text-navy leading-none">
                  15+
                </div>
                <div className="text-[7px] md:text-[9px] font-semibold text-navy tracking-[0.1em] uppercase text-center leading-[1.3]">
                  lat na rynku
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TWO-COL DARK ═══ */}
      <section className="bg-navy">
        <div className="w-full max-w-none">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Co robimy? */}
            <div className="px-[clamp(24px,5vw,64px)] py-[clamp(40px,6vw,80px)] relative">
              <div className="inline-block bg-white/[0.06] text-white/40 text-[10px] font-bold tracking-[0.16em] uppercase px-3 py-1 rounded-full border border-white/10 mb-6">
                Działalność
              </div>
              <div className="w-10 h-10 bg-gold/[0.12] border border-gold/25 rounded-sm flex items-center justify-center mb-6">
                <Briefcase className="w-5 h-5 stroke-gold" />
              </div>
              <h3 className="font-display text-[32px] font-semibold text-white mb-5 leading-[1.2]">
                Co robimy?
              </h3>
              <p className="text-[15px] text-white/60 leading-[1.75] mb-8 font-light">
                Prowadzimy i obsługujemy interesy biznesowe w całej Europie.
                Angażujemy się w trudne zagadnienia prawne i biznesowe w
                zróżnicowanych branżach. Specjalizujemy się w zabezpieczeniu
                majątku osobistego właścicieli oraz menadżerów, pozyskaniu
                dofinansowania oraz restrukturyzacji przedsiębiorstw zagrożonych
                utratą płynności finansowej.
              </p>
              <Link
                href="/nasze-specjalizacje"
                className="inline-flex items-center gap-2 text-[14px] font-semibold text-white/50 tracking-[0.04em] transition-all duration-200 hover:text-gold hover:gap-[14px]"
              >
                Nasze specjalizacje
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Jak działamy? */}
            <div className="px-[clamp(24px,5vw,64px)] py-[clamp(40px,6vw,80px)] relative before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[1px] before:bg-white/[0.08] before:hidden md:before:block">
              <div className="inline-block bg-white/[0.06] text-white/40 text-[10px] font-bold tracking-[0.16em] uppercase px-3 py-1 rounded-full border border-white/10 mb-6">
                Metodyka
              </div>
              <div className="w-10 h-10 bg-gold/[0.12] border border-gold/25 rounded-sm flex items-center justify-center mb-6">
                <Clock className="w-5 h-5 stroke-gold" />
              </div>
              <h3 className="font-display text-[32px] font-semibold text-white mb-5 leading-[1.2]">
                Jak działamy?
              </h3>
              <p className="text-[15px] text-white/60 leading-[1.75] mb-8 font-light">
                Rozumiemy potrzeby i branże naszych klientów oraz dynamikę
                branży consultingowej. Identyfikujemy problemy i proponujemy
                realne rozwiązania prawno-ekonomiczne. Łączymy gruntowną wiedzę
                z podejściem biznesowym. Stworzona przez nas sieć kontaktów
                umożliwia nam szybką reakcję i skuteczne wsparcie biznesu.
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 text-[14px] font-semibold text-white/50 tracking-[0.04em] transition-all duration-200 hover:text-gold hover:gap-[14px]"
              >
                Zadaj pytanie
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES GRID ═══ */}
      <section className="py-[clamp(48px,10vw,100px)] bg-white">
        <div className="w-full max-w-container mx-auto px-[clamp(24px,5vw,80px)]">
          <div className="text-center max-w-[640px] mx-auto mb-10 md:mb-16">
            <Eyebrow>Co możemy dla Ciebie zrobić</Eyebrow>
            <h2 className="font-display text-[clamp(32px,4vw,48px)] font-semibold text-navy leading-[1.15] mb-4 tracking-[-0.01em]">
              Sprawdź, w czym możemy Ci pomóc
            </h2>
            <p className="text-[16px] text-text-mid leading-[1.7]">
              Świadczymy wysokiej klasy usługi prawne przy szerokim zakresie
              złożoności projektów.
            </p>
          </div>

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

      {/* ═══ CTA BANNER ═══ */}
      <section className="bg-navy-mid border-t-[3px] border-gold py-[clamp(40px,8vw,80px)] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_100%_at_50%_50%,rgba(201,168,76,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="w-full max-w-container mx-auto px-[clamp(24px,5vw,80px)] relative">
          <h2 className="font-display text-[clamp(32px,4vw,52px)] font-semibold text-white mb-4 leading-[1.15]">
            Chciałbyś dowiedzieć się więcej?
          </h2>
          <p className="text-[16px] text-white/60 mb-11 font-light">
            Skontaktuj się z nami i skorzystaj z wiedzy i doświadczenia
            ekspertów.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button href="/kontakt" variant="primary" showArrow>
              Napisz do nas
            </Button>
            <Button href="tel:+48571903176" variant="outline">
              <Phone className="w-4 h-4" />
              +48 571 903 176
            </Button>
          </div>
        </div>
      </section>

      {/* ═══ CONTACT STRIP ═══ */}
      <div className="grid grid-cols-1 lg:grid-cols-[40fr_60fr]">
        <div className="bg-offwhite px-[clamp(24px,5vw,80px)] py-[clamp(40px,6vw,72px)] flex flex-col justify-center gap-7 md:gap-9">
          <div>
            <Eyebrow>Skontaktuj się</Eyebrow>
            <h2 className="font-display text-[clamp(28px,5vw,40px)] font-semibold text-navy leading-[1.15] mb-2">
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
    </>
  );
}
