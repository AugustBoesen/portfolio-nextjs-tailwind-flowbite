import Footer from "../components/footer";
import Header from "../components/Header";
import Code from "../components/code";
import Events from "../components/events";
import General from "../components/general";
import Hero from "../components/hero";
import Music from "../components/music";

export default function Home() {
  return (
    <main className="justify-center text-center overflow-hidden">
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <General />
      <div id="music">
        <Music />
      </div>
      <div id="events">
        <Events />
      </div>
      <div id="code">
        <Code />
      </div>
      <Footer />
    </main>
  );
}
