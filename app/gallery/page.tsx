import type { Metadata } from "next";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GalleryPage from "@/components/pages/GalleryPage";

export const metadata: Metadata = {
  title: "Gallery | Edistone Real Estates Projects",
  description:
    "View our portfolio of premium residential, commercial, and industrial properties across NCR — Ghaziabad, Greater Noida, Noida, and Yamuna Expressway.",
  keywords: ["Edistone gallery", "real estate photos NCR", "property images Ghaziabad", "premium apartments gallery"],
  openGraph: {
    title: "Gallery | Edistone Real Estates",
    description: "A visual tour of our premium real estate projects across NCR.",
    type: "website",
  },
};

export default function Gallery() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <TopBar />
      <Navbar />
      <GalleryPage />
      <Footer />
    </main>
  );
}
