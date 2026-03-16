import type { Metadata } from "next";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NewProjectsPage from "@/components/pages/NewProjectsPage";

export const metadata: Metadata = {
  title: "New Projects | Edistone Real Estates",
  description:
    "Explore new residential, commercial, and industrial projects by Edistone Real Estates across GZB, Greater Noida, Noida, Yamuna Expressway and more locations in NCR.",
  keywords: ["new projects Ghaziabad", "residential projects Noida", "commercial property Greater Noida", "industrial plots UPSIDA"],
  openGraph: {
    title: "New Projects | Edistone Real Estates",
    description: "Discover our latest residential, commercial & industrial projects across NCR.",
    type: "website",
  },
};

export default function NewProjects() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <TopBar />
      <Navbar />
      <NewProjectsPage />
      <Footer />
    </main>
  );
}
