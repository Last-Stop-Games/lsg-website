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

// Solid band colors (must match tailwind palette in tailwind.config.js).
const SPACE = "#150f2e";
const NEBULA = "#2c2056"; // = palette `panel`, lighter for clearer slant contrast

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
    </>
  );
}
