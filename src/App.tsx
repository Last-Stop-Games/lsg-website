import Navbar from "./components/Navbar";
import Ticker from "./components/Ticker";
import Hero from "./components/Hero";
import About from "./components/About";
import Games from "./components/Games";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import Devlog from "./components/Devlog";
import Footer from "./components/Footer";
import PixelSlant from "./components/ui/PixelSlant";
import ThemeLab from "./components/ThemeLab";

// Solid band colors — read from the CSS theme vars so slants recolor live too.
const SPACE = "rgb(var(--space))";
const NEBULA = "rgb(var(--panel))"; // lighter `panel` shade for clearer slant contrast

export default function App() {
  return (
    <>
      <Navbar />
      <Ticker />
      <main>
        {/* Hero sits on the transparent starfield */}
        <Hero />

        <PixelSlant to={SPACE} />
        <div className="bg-space">
          <About />
        </div>

        <PixelSlant from={SPACE} to={NEBULA} flip />
        <div className="bg-panel">
          <Games />
        </div>

        <PixelSlant from={NEBULA} to={SPACE} />
        <div className="bg-space">
          <Roadmap />
        </div>

        <PixelSlant from={SPACE} to={NEBULA} flip />
        <div className="bg-panel">
          <Team />
        </div>

        <PixelSlant from={NEBULA} to={SPACE} />
        <div className="bg-space">
          <Devlog />
        </div>
      </main>

      {/* Band fades back out to the starfield for the footer */}
      <PixelSlant from={SPACE} flip />
      <Footer />

      <ThemeLab />
    </>
  );
}
