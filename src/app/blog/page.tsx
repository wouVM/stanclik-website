import type { Metadata } from "next";
import { ChevronRight, Calendar, User } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";

export const metadata: Metadata = {
  title: "Blog — Kancelaria Stanclik",
  description:
    "Ważne informacje z branży, aktualności i porady. Blog Kancelarii Stanclik.",
};

const blogPosts = [
  {
    title:
      "Sprzedaż nieruchomości wchodzącej w skład masy upadłości Michała Mołczana",
    date: "5 września 2023",
    category: "Aktualności, Aukcje",
    author: "Paweł Stanclik",
    slug: "sprzedaz-nieruchomosci-molczana",
  },
  {
    title: "Przebieg uproszczonego postępowania restrukturyzacyjnego",
    date: "20 października 2021",
    category: "Aktualności",
    author: "Paweł Stanclik",
    slug: "przebieg-uproszczonego-postepowania",
  },
  {
    title: "Uproszczone postępowanie restrukturyzacyjne – wierzyciele",
    date: "20 października 2021",
    category: "Aktualności",
    author: "Paweł Stanclik",
    slug: "uproszczone-postepowanie-wierzyciele",
  },
  {
    title: "Uproszczone postępowanie restrukturyzacyjne",
    date: "20 października 2021",
    category: "Aktualności",
    author: "Paweł Stanclik",
    slug: "uproszczone-postepowanie-restrukturyzacyjne",
  },
  {
    title: "Czym jest upadłość – definicja",
    date: "1 września 2021",
    category: "Aktualności",
    author: "Paweł Stanclik",
    slug: "czym-jest-upadlosc-definicja",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(26,58,92,0.5)_0%,transparent_70%)]" />
        <div className="w-full max-w-container mx-auto px-[clamp(24px,5vw,80px)] relative z-[2] text-center">
          <Eyebrow>Aktualności i porady</Eyebrow>
          <h1 className="font-display text-[clamp(40px,5vw,64px)] font-semibold text-white leading-[1.1] mb-6 tracking-[-0.01em]">
            Blog
          </h1>
          <p className="text-[16px] text-white/60 leading-[1.7] max-w-[640px] mx-auto font-light">
            Zachęcamy do czytania i obserwowania naszego bloga. W tej sekcji
            znajdziecie ważne informacje z branży, aktualności i porady.
          </p>
        </div>
      </section>

      {/* Blog list */}
      <section className="py-[80px] bg-offwhite">
        <div className="w-full max-w-container mx-auto px-[clamp(24px,5vw,80px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white border border-border rounded-md overflow-hidden transition-all duration-[250ms] hover:shadow-md hover:border-gold/30 hover:-translate-y-[3px] group"
              >
                {/* Placeholder image */}
                <div className="aspect-[16/9] bg-gradient-to-br from-navy-mid to-navy relative overflow-hidden">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "repeating-linear-gradient(45deg, transparent, transparent 32px, rgba(201,168,76,0.04) 32px, rgba(201,168,76,0.04) 33px)",
                    }}
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-gold/90 text-navy text-[10px] font-bold tracking-[0.1em] uppercase px-2 py-1 rounded">
                      {post.category.split(",")[0]}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3 text-[13px] text-text-light">
                    <span className="flex items-center gap-[4px]">
                      <Calendar className="w-[12px] h-[12px]" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-[4px]">
                      <User className="w-[12px] h-[12px]" />
                      {post.author}
                    </span>
                  </div>
                  <h2 className="font-display text-[20px] font-semibold text-navy mb-4 leading-[1.3] line-clamp-2">
                    {post.title}
                  </h2>
                  <span className="inline-flex items-center gap-[6px] text-[13px] font-semibold text-gold tracking-[0.04em] transition-all duration-200 group-hover:gap-[10px]">
                    Czytaj więcej
                    <ChevronRight className="w-[14px] h-[14px]" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
