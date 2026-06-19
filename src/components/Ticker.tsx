import { tickerItems } from "../content";

export default function Ticker() {
  // Duplicate the list so the -50% translate loops seamlessly.
  const items = [...tickerItems, ...tickerItems];

  return (
    <div className="overflow-hidden border-y-2 border-haze bg-neon py-2">
      <div className="flex w-max animate-ticker whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={i}
            className="mx-6 font-pixel text-[10px] uppercase tracking-wider text-void"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
