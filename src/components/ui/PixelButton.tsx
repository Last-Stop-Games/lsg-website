import type { ReactNode } from "react";

type Variant = "primary" | "secondary";

interface Props {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
}

const styles: Record<Variant, string> = {
  primary: "bg-neon text-void hover:brightness-110 border-void",
  secondary: "bg-panel text-ink hover:bg-haze border-grape",
};

export default function PixelButton({
  children,
  href = "#",
  variant = "primary",
  className = "",
}: Props) {
  return (
    <a
      href={href}
      className={`inline-block border-2 px-6 py-3 font-pixel text-[10px] uppercase tracking-wider shadow-pixel transition-all hover:-translate-y-0.5 active:translate-y-0 active:shadow-none ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
