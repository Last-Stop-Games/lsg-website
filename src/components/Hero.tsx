import { studio } from "../content";
import PixelButton from "./ui/PixelButton";
import Placeholder from "./ui/Placeholder";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="section-pad flex flex-col items-center text-center">
        {/* Logo / key-art placeholder */}
        <div className="mb-10 w-full max-w-md animate-float">
          <Placeholder
            label="Studio Key Art / Logo"
            color="rgb(var(--accent))"
            aspect="aspect-[16/9]"
            className="shadow-pixel-lg"
          />
        </div>

        <p className="mb-4 font-pixel text-[10px] uppercase tracking-widest text-cyan">
          Indie Game Studio
        </p>

        <h1 className="font-pixel text-4xl leading-tight text-ink sm:text-6xl">
          {studio.name}
          <br />
          <span className="text-neon">{studio.nameLine2}</span>
          <span className="animate-blink text-neon">_</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl font-retro text-2xl text-muted">
          {studio.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <PixelButton href="#games" variant="primary">
            View Our Games
          </PixelButton>
          <PixelButton href="#community" variant="secondary">
            Join the Discord
          </PixelButton>
        </div>
      </div>
    </section>
  );
}
