import type { Metadata } from "next";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CareerPage from "@/components/pages/CareerPage";

export const metadata: Metadata = {
  title: "Career at Edistone Real Estates | Join Our Team",
  description:
    "Explore rewarding career opportunities at Edistone Real Estates. We are looking for passionate professionals in sales, marketing, operations, and more across NCR.",
  keywords: ["Edistone careers", "real estate jobs NCR", "property company jobs Ghaziabad", "Noida real estate careers"],
  openGraph: {
    title: "Career at Edistone Real Estates",
    description: "Grow with us. Explore open positions at Edistone Real Estates across NCR.",
    type: "website",
  },
};

export default function Career() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <TopBar />
      <Navbar />
      <CareerPage />
      <Footer />
    </main>
  );
}
