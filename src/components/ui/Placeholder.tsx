interface Props {
  label?: string;
  color?: string;
  className?: string;
  aspect?: string; // tailwind aspect class, e.g. "aspect-square"
}

/**
 * Swappable art placeholder — a flat color block with a label and a
 * dashed "drop art here" frame. Replace with <img> when real assets land.
 */
export default function Placeholder({
  label = "PLACEHOLDER",
  color = "#3a2c6e",
  className = "",
  aspect = "aspect-square",
}: Props) {
  return (
    <div
      className={`${aspect} relative flex items-center justify-center overflow-hidden border-2 border-haze ${className}`}
      style={{ backgroundColor: color }}
    >
      <div className="pointer-events-none absolute inset-1.5 border border-dashed border-black/30" />
      <span className="px-2 text-center font-pixel text-[8px] uppercase leading-relaxed text-black/60">
        {label}
      </span>
    </div>
  );
}
