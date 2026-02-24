import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Edistone Real Estates | Premium Properties in Greater Noida & Ghaziabad",
  description:
    "Edistone Real Estates Private Limited — your trusted partner for premium residential, commercial, and luxury properties in Greater Noida, Noida, and Ghaziabad. Explore ongoing projects, villas, plots, and townships.",
  keywords: [
    "Edistone Real Estates",
    "Greater Noida properties",
    "Ghaziabad real estate",
    "premium apartments",
    "commercial spaces",
    "luxury villas",
    "Noida plots",
  ],
  openGraph: {
    title: "Edistone Real Estates | Premium Properties in NCR",
    description:
      "Building the foundation of dreams. Explore premium residential & commercial projects by Edistone Real Estates.",
    type: "website",
    locale: "en_IN",
    siteName: "Edistone Real Estates",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
