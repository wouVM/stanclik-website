interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <div
      className={`inline-block font-body text-[11px] font-semibold tracking-[0.18em] uppercase text-gold mb-4 ${className}`}
    >
      {children}
    </div>
  );
}
