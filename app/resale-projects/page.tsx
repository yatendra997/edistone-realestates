import type { Metadata } from "next";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ResaleProjectsPage from "@/components/pages/ResaleProjectsPage";

export const metadata: Metadata = {
  title: "Resale Properties | Edistone Real Estates",
  description:
    "Find verified resale flats, villas, and plots across NCR through Edistone Real Estates. Submit your requirement and our expert team will find the best match for you.",
  keywords: ["resale property Noida", "resale flat Ghaziabad", "resale villa Greater Noida", "resale plot NCR", "Edistone resale"],
  openGraph: {
    title: "Resale Properties | Edistone Real Estates",
    description: "Submit your resale property requirement and our experts will find the perfect match across NCR.",
    type: "website",
  },
};

export default function ResaleProjects() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <TopBar />
      <Navbar />
      <ResaleProjectsPage />
      <Footer />
    </main>
  );
}
