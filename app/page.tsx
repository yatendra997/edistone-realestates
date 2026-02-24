import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Highlights from "@/components/sections/Highlights";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <TopBar />
      <Navbar />
      <Hero />
      <Highlights />
      <About />
      <Projects />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
