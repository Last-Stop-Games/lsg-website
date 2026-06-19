import { studio, socials } from "../content";
import PixelButton from "./ui/PixelButton";

export default function Footer() {
  return (
    <footer id="community" className="relative mt-10 border-t-2 border-haze">
      {/* "GAME OVER" community CTA, echoing the reference footer */}
      <div className="section-pad text-center">
        <h2 className="font-pixel text-5xl leading-tight text-haze sm:text-7xl">
          GAME
          <br />
          OVER
        </h2>

        <p className="mt-8 font-pixel text-sm text-ink">
          Want in? Join the {studio.name} {studio.nameLine2} crew.
        </p>
        <p className="mx-auto mt-4 max-w-md font-retro text-xl text-muted">
          Follow along, playtest early builds, and hang out while we make games.
        </p>

        <div className="mt-8">
          <PixelButton href="#" variant="primary">
            Join the Discord
          </PixelButton>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="font-pixel text-[10px] uppercase tracking-wide text-muted transition-colors hover:text-cyan"
            >
              {s.label}
            </a>
          ))}
        </div>

        <p className="mt-10 font-retro text-lg text-muted/70">
          © {studio.name} {studio.nameLine2} — built in our spare time. [placeholder]
        </p>
      </div>
    </footer>
  );
}
