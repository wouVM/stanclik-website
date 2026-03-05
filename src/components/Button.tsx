import Link from "next/link";
import { ChevronRight } from "lucide-react";

type ButtonVariant = "primary" | "outline" | "outline-gold";

interface ButtonProps {
  href?: string;
  variant?: ButtonVariant;
  children: React.ReactNode;
  showArrow?: boolean;
  className?: string;
  type?: "button" | "submit";
  fullWidth?: boolean;
  onClick?: () => void;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gold text-navy border-gold hover:bg-gold-dark hover:border-gold-dark hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(201,168,76,0.35)]",
  outline:
    "bg-transparent text-white border-white/40 hover:border-white hover:bg-white/[0.08] hover:-translate-y-[2px]",
  "outline-gold":
    "bg-transparent text-gold border-gold hover:bg-gold hover:text-navy hover:-translate-y-[2px]",
};

export function Button({
  href,
  variant = "primary",
  children,
  showArrow = false,
  className = "",
  type = "button",
  fullWidth = false,
  onClick,
}: ButtonProps) {
  const baseClasses = `inline-flex items-center gap-2 font-body text-[14px] font-semibold tracking-[0.04em] px-8 py-[14px] rounded-sm cursor-pointer transition-all duration-200 ease-out border-2 ${fullWidth ? "w-full justify-center" : ""} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
        {showArrow && <ChevronRight className="w-4 h-4 flex-shrink-0" />}
      </Link>
    );
  }

  return (
    <button type={type} className={baseClasses} onClick={onClick}>
      {children}
      {showArrow && <ChevronRight className="w-4 h-4 flex-shrink-0" />}
    </button>
  );
}
