import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ServiceIcon } from "./ServiceIcon";

interface ServiceCardProps {
  slug: string;
  title: string;
  description: string;
  icon: string;
}

export function ServiceCard({ slug, title, description, icon }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${slug}`}
      className="group bg-white border border-border rounded-md p-[36px_32px] cursor-pointer transition-all duration-[250ms] ease-out relative overflow-hidden
        before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] before:bg-gold before:scale-y-0 before:transition-transform before:duration-[250ms] before:ease-out before:origin-bottom
        hover:border-gold/30 hover:shadow-md hover:-translate-y-[3px] hover:before:scale-y-100"
    >
      <div className="w-12 h-12 bg-gold-pale rounded-sm flex items-center justify-center mb-5 transition-colors duration-[250ms] group-hover:bg-gold">
        <ServiceIcon
          name={icon}
          className="w-[22px] h-[22px] stroke-gold transition-colors duration-[250ms] group-hover:stroke-navy"
        />
      </div>
      <h3 className="font-display text-[22px] font-semibold text-navy mb-[10px] leading-[1.25]">
        {title}
      </h3>
      <p className="text-[14px] text-text-mid leading-[1.65] mb-6">
        {description}
      </p>
      <span className="inline-flex items-center gap-[6px] text-[13px] font-semibold text-gold tracking-[0.04em] transition-all duration-200 group-hover:gap-[10px]">
        Dowiedz się więcej
        <ChevronRight className="w-[14px] h-[14px]" />
      </span>
    </Link>
  );
}
