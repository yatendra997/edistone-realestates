import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Highlights from "@/components/sections/Highlights";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";
import BankingPartners from "@/components/sections/BankingPartners";
import Footer from "@/components/layout/Footer";
import EmiCalculator from "@/components/sections/EmiCalculator";
import Testimonials from "@/components/sections/Testimonials";
import EnquirePopup from "@/components/ui/EnquirePopup";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <EnquirePopup />
      <Navbar />
      <Hero />
      <Highlights />
      <About />
      <Projects />
      <EmiCalculator />
      <BankingPartners />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
