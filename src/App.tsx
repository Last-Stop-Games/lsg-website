import Navbar from "./components/Navbar";
import Ticker from "./components/Ticker";
import Hero from "./components/Hero";
import About from "./components/About";
import Games from "./components/Games";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import Devlog from "./components/Devlog";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Ticker />
      <main>
        <Hero />
        <About />
        <Games />
        <Roadmap />
        <Team />
        <Devlog />
      </main>
      <Footer />
    </>
  );
}
