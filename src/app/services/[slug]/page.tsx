import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Phone, ArrowLeft } from "lucide-react";
import { services } from "@/lib/services";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { ServiceIcon } from "@/components/ServiceIcon";
import { ServiceCard } from "@/components/ServiceCard";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: `${service.title} — Kancelaria Stanclik`,
    description: service.description,
  };
}

export default function ServicePage({ params }: PageProps) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const otherServices = services
    .filter((s) => s.slug !== params.slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(26,58,92,0.5)_0%,transparent_70%)]" />
        <div className="w-full max-w-container mx-auto px-[clamp(24px,5vw,80px)] relative z-[2]">
          <Link
            href="/nasze-specjalizacje"
            className="inline-flex items-center gap-2 text-[13px] text-white/50 mb-8 transition-colors hover:text-gold"
          >
            <ArrowLeft className="w-4 h-4" />
            Wszystkie specjalizacje
          </Link>
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-gold/[0.12] border border-gold/25 rounded-md flex items-center justify-center flex-shrink-0">
              <ServiceIcon
                name={service.icon}
                className="w-8 h-8 stroke-gold"
              />
            </div>
            <div>
              <Eyebrow>Specjalizacja</Eyebrow>
              <h1 className="font-display text-[clamp(36px,5vw,56px)] font-semibold text-white leading-[1.1] tracking-[-0.01em]">
                {service.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-[80px] bg-white">
        <div className="w-full max-w-container mx-auto px-[clamp(24px,5vw,80px)]">
          <div className="max-w-[800px]">
            {service.content.map((paragraph, i) => (
              <p
                key={i}
                className="text-[16px] text-text-mid leading-[1.75] mb-6"
              >
                {paragraph}
              </p>
            ))}

            {service.bulletPoints && (
              <ul className="mt-4 mb-8 space-y-3">
                {service.bulletPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
                    <span className="text-[15px] text-text-mid leading-[1.65]">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex flex-wrap gap-4">
                <Button href="/kontakt" variant="primary" showArrow>
                  Zapytaj o szczegóły
                </Button>
                <Button href="tel:+48571903176" variant="outline-gold">
                  <Phone className="w-4 h-4" />
                  +48 571 903 176
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-[80px] bg-offwhite">
        <div className="w-full max-w-container mx-auto px-[clamp(24px,5vw,80px)]">
          <div className="text-center mb-12">
            <Eyebrow>Pozostałe specjalizacje</Eyebrow>
            <h2 className="font-display text-[clamp(28px,3vw,40px)] font-semibold text-navy leading-[1.15]">
              Sprawdź inne obszary naszej praktyki
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((s) => (
              <ServiceCard
                key={s.slug}
                slug={s.slug}
                title={s.shortTitle}
                description={s.description}
                icon={s.icon}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
