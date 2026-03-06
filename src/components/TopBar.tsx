"use client";

import { Phone, MapPin, Mail } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-navy border-b border-gold/15">
      <div className="w-full max-w-container mx-auto px-[clamp(24px,5vw,80px)]">
        <div className="hidden md:flex items-center justify-end gap-7 py-2">
          <a
            href="tel:+48571903176"
            className="flex items-center gap-[7px] text-[12px] text-white/65 font-body font-normal transition-colors duration-200 hover:text-gold"
          >
            <Phone className="w-[13px] h-[13px] opacity-70 flex-shrink-0" />
            +48 571 903 176
          </a>
          <a
            href="https://www.google.com/maps/place/Wiejska+12,+00-490+Warszawa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[7px] text-[12px] text-white/65 font-body font-normal transition-colors duration-200 hover:text-gold"
          >
            <MapPin className="w-[13px] h-[13px] opacity-70 flex-shrink-0" />
            ul. Wiejska 12 lok. 6, 00-490 Warszawa
          </a>
          <a
            href="mailto:biuro@stanclik.com.pl"
            className="flex items-center gap-[7px] text-[12px] text-white/65 font-body font-normal transition-colors duration-200 hover:text-gold"
          >
            <Mail className="w-[13px] h-[13px] opacity-70 flex-shrink-0" />
            biuro@stanclik.com.pl
          </a>
        </div>
        <div className="flex md:hidden items-center justify-between py-2 gap-4">
          <a
            href="tel:+48571903176"
            className="flex items-center gap-[6px] text-[11px] text-white/65 font-body font-normal transition-colors duration-200 hover:text-gold"
          >
            <Phone className="w-[12px] h-[12px] opacity-70 flex-shrink-0" />
            +48 571 903 176
          </a>
          <a
            href="mailto:biuro@stanclik.com.pl"
            className="flex items-center gap-[6px] text-[11px] text-white/65 font-body font-normal transition-colors duration-200 hover:text-gold"
          >
            <Mail className="w-[12px] h-[12px] opacity-70 flex-shrink-0" />
            biuro@stanclik.com.pl
          </a>
        </div>
      </div>
    </div>
  );
}
