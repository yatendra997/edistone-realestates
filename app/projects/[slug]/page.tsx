import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectDetailPage from "@/components/pages/ProjectDetailPage";
import { PROJECT_DETAILS } from "@/data/projectDetails";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(PROJECT_DETAILS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECT_DETAILS[slug];
  if (!project) return { title: "Project Not Found | Edistone Real Estates" };

  return {
    title: `${project.title} | ${project.location} | Edistone Real Estates`,
    description: `${project.overview.slice(0, 155)}...`,
    keywords: [
      project.title,
      project.location,
      project.type,
      "Edistone Real Estates",
      `${project.type} property ${project.location}`,
      `buy ${project.type.toLowerCase()} ${project.location}`,
    ],
    openGraph: {
      title: `${project.title} – ${project.type} in ${project.location}`,
      description: project.overview.slice(0, 155),
      type: "website",
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECT_DETAILS[slug];
  if (!project) notFound();

  return (
    <main className="flex min-h-screen flex-col w-full">
      <Navbar />
      <ProjectDetailPage project={project} />
      <Footer />
    </main>
  );
}
