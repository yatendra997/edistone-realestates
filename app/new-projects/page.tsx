import type { Metadata } from "next";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NewProjectsPage from "@/components/pages/NewProjectsPage";

export const metadata: Metadata = {
  title: "New / Ongoing Projects | Edistone Real Estates",
  description:
    "Explore new and ongoing residential, commercial, and industrial projects by Edistone Real Estates across Ghaziabad, Greater Noida, Noida, Yamuna Expressway and more locations in NCR.",
  keywords: ["new projects Ghaziabad", "ongoing projects NCR", "residential projects Noida", "commercial property Greater Noida", "industrial plots UPSIDA"],
  openGraph: {
    title: "New / Ongoing Projects | Edistone Real Estates",
    description: "Discover our latest and ongoing residential, commercial & industrial projects across NCR.",
    type: "website",
  },
};

export default function NewProjects() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Navbar />
      <NewProjectsPage />
      <Footer />
    </main>
  );
}
