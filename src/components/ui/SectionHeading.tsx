import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  accent?: ReactNode; // highlighted second line, e.g. "Our Games"
  align?: "left" | "center";
}

export default function SectionHeading({
  children,
  accent,
  align = "center",
}: Props) {
  return (
    <h2
      className={`font-pixel text-2xl leading-relaxed sm:text-3xl ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      <span className="text-ink">{children}</span>
      {accent && (
        <>
          {" "}
          <span className="text-neon">{accent}</span>
        </>
      )}
    </h2>
  );
}
