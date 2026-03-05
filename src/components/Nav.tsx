"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "O nas" },
  { href: "/nasze-specjalizacje", label: "Specjalizacje" },
  { href: "/aukcje", label: "Aukcje" },
  { href: "/blog", label: "Blog" },
];

export function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-[100] bg-navy shadow-[0_2px_20px_rgba(0,0,0,0.25)]">
      <div className="w-full max-w-container mx-auto px-[clamp(24px,5vw,80px)]">
        <div className="flex items-center justify-between h-[72px]">
          <Link href="/" className="flex flex-col gap-[1px]">
            <span className="font-display text-[22px] font-semibold text-white tracking-[0.02em] leading-none">
              Stanclik
            </span>
            <span className="text-[9.5px] text-gold tracking-[0.2em] uppercase font-medium">
              Kancelaria Restrukturyzacyjna
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-[6px] list-none">
            {links.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative text-[13px] font-medium tracking-[0.04em] px-[14px] py-[6px] rounded-sm transition-colors duration-200
                      ${isActive ? "text-white" : "text-white/[0.78] hover:text-white"}
                      after:content-[''] after:absolute after:bottom-[2px] after:left-[14px] after:right-[14px] after:h-[1.5px] after:bg-gold after:transition-transform after:duration-[250ms] after:ease-out
                      ${isActive ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"}
                    `}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                href="/kontakt"
                className="bg-gold text-navy font-semibold text-[13px] tracking-[0.04em] px-[22px] py-[10px] rounded-sm transition-all duration-200 hover:bg-gold-dark hover:-translate-y-[1px]"
              >
                Zadaj pytanie
              </Link>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-6 border-t border-white/10">
            <ul className="flex flex-col gap-2 pt-4">
              {links.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block text-[14px] font-medium tracking-[0.04em] px-4 py-2 rounded-sm transition-colors ${
                        isActive ? "text-white bg-white/10" : "text-white/70 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="mt-2 px-4">
                <Link
                  href="/kontakt"
                  onClick={() => setMobileOpen(false)}
                  className="block bg-gold text-navy font-semibold text-[14px] tracking-[0.04em] px-6 py-3 rounded-sm text-center transition-all duration-200 hover:bg-gold-dark"
                >
                  Zadaj pytanie
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
