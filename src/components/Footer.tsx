import Link from "next/link";
import { MapPin, Phone, Mail, Table } from "lucide-react";
import { services } from "@/lib/services";

export function Footer() {
  return (
    <footer className="bg-navy pt-[72px]">
      <div className="w-full max-w-container mx-auto px-[clamp(24px,5vw,80px)]">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1.5fr] gap-16 pb-14 border-b border-white/[0.08]">
          {/* Column 1: About */}
          <div>
            <div className="font-display text-[24px] font-semibold text-white mb-1">
              Stanclik
            </div>
            <div className="text-[10px] text-gold tracking-[0.18em] uppercase mb-5">
              Kancelaria Restrukturyzacyjna
            </div>
            <p className="text-[14px] text-white/45 leading-[1.75]">
              Świadczenie kompleksowej obsługi prawnej wymaga nie tylko
              znajomości prawa (prawa gospodarczego i handlowego, RODO, prawa
              podatkowego, prawa rynków kapitałowych i prawa nieruchomości), ale
              również doświadczenia w prowadzeniu biznesu.
            </p>
          </div>

          {/* Column 2: Contact */}
          <div>
            <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gold mb-5">
              Kontakt
            </div>
            <div className="flex items-start gap-[10px] mb-3">
              <MapPin className="w-[14px] h-[14px] stroke-white/30 flex-shrink-0 mt-[2px]" />
              <span className="text-[13.5px] text-white/55 leading-[1.5]">
                ul. Wiejska 12 lok. 6
                <br />
                00-490 Warszawa
              </span>
            </div>
            <div className="flex items-start gap-[10px] mb-3">
              <Phone className="w-[14px] h-[14px] stroke-white/30 flex-shrink-0 mt-[2px]" />
              <span className="text-[13.5px] text-white/55 leading-[1.5]">
                <a
                  href="tel:+48571903176"
                  className="text-white/55 transition-colors duration-200 hover:text-gold"
                >
                  +48 571 903 176
                </a>
              </span>
            </div>
            <div className="flex items-start gap-[10px] mb-3">
              <Mail className="w-[14px] h-[14px] stroke-white/30 flex-shrink-0 mt-[2px]" />
              <span className="text-[13.5px] text-white/55 leading-[1.5]">
                <a
                  href="mailto:biuro@stanclik.com.pl"
                  className="text-white/55 transition-colors duration-200 hover:text-gold"
                >
                  biuro@stanclik.com.pl
                </a>
              </span>
            </div>
            <div className="flex items-start gap-[10px] mb-3">
              <Table className="w-[14px] h-[14px] stroke-white/30 flex-shrink-0 mt-[2px]" />
              <span className="text-[13.5px] text-white/55 leading-[1.5]">
                NIP: 9512454884
              </span>
            </div>
          </div>

          {/* Column 3: Specializations */}
          <div>
            <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gold mb-5">
              Specjalizacje
            </div>
            <ul className="list-none">
              {services.map((service) => (
                <li key={service.slug} className="mb-[10px]">
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-[13.5px] text-white/50 transition-all duration-200 flex items-center gap-[6px] group hover:text-gold"
                  >
                    <span className="block w-3 h-[1px] bg-gold/40 flex-shrink-0 transition-all duration-200 group-hover:w-[18px] group-hover:bg-gold" />
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between py-5 gap-4">
          <span className="text-[12px] text-white/30">
            © {new Date().getFullYear()} Copyright | Stanclik Kancelaria
            Restrukturyzacyjna
          </span>
          <div className="flex gap-5">
            <Link
              href="/blog"
              className="text-[12px] text-white/30 transition-colors duration-200 hover:text-gold"
            >
              Aktualności
            </Link>
            <Link
              href="/aukcje"
              className="text-[12px] text-white/30 transition-colors duration-200 hover:text-gold"
            >
              Aukcje
            </Link>
            <Link
              href="/polityka-prywatnosci"
              className="text-[12px] text-white/30 transition-colors duration-200 hover:text-gold"
            >
              Polityka prywatności
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
