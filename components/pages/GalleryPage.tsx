"use client";

import { useState } from "react";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";

const GALLERY_CATEGORIES = ["All", "Residential", "Commercial", "Industrial", "Amenities"] as const;
type GalleryCategory = typeof GALLERY_CATEGORIES[number];

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  category: GalleryCategory;
}

const GALLERY_IMAGES: GalleryImage[] = [
  // Residential
  {
    src: "/Gallery-1.jpeg",
    alt: "Premium Highrise Architecture",
    title: "Skyline Residences",
    subtitle: "Greater Noida West",
    category: "Residential",
  },
  {
    src: "/Gallery-2.jpeg",
    alt: "Edistone Chrysalis Project",
    title: "Edistone Chrysalis",
    subtitle: "Yamuna Expressway",
    category: "Residential",
  },
  {
    src: "/Gallery-3.jpeg",
    alt: "Ultra Luxury Residence",
    title: "Centurian Park",
    subtitle: "Greater Noida",
    category: "Residential",
  },
  {
    src: "/Gallery-4.jpeg",
    alt: "Premium Apartment Facade",
    title: "Saundaryam Heights",
    subtitle: "Techzone 4, Greater Noida",
    category: "Residential",
  },
  {
    src: "/Gallery-5.jpeg",
    alt: "Elegant Apartment Tower",
    title: "VVIP Namah",
    subtitle: "Greater Noida West",
    category: "Residential",
  },
  {
    src: "/Gallery-6.jpeg",
    alt: "Luxury Villa",
    title: "Palm Adela Villas",
    subtitle: "Greater Noida West",
    category: "Residential",
  },

  // Commercial
  {
    src: "/Gallery-7.jpeg",
    alt: "Modern Commercial Building",
    title: "SKA Arcadia",
    subtitle: "Commercial Hub, Greater Noida",
    category: "Commercial",
  },
  {
    src: "/Gallery-8.jpeg",
    alt: "Premium Office Space",
    title: "KB West Walk",
    subtitle: "Vaishali, GZB",
    category: "Commercial",
  },

  // Industrial
  {
    src: "/residential/Gallery-0.webp",
    alt: "Industrial Facility",
    title: "Industrial Warehouse",
    subtitle: "UPSIDC Area, GZB",
    category: "Industrial",
  },
  {
    src: "/residential/Gallery-1.webp",
    alt: "Factory Unit",
    title: "Factory Sheds",
    subtitle: "UPSIDA Approved, NCR",
    category: "Industrial",
  },

  // Amenities
  {
    src: "/residential/Gallery-3.webp",
    alt: "Luxury Pool",
    title: "Infinity Pool",
    subtitle: "Premium Residences Amenity",
    category: "Amenities",
  },
  {
    src: "/residential/Gallery-6.webp",
    alt: "Modern Gymnasium",
    title: "State-of-the-art Gymnasium",
    subtitle: "Club House Facility",
    category: "Amenities",
  },
  {
    src: "/residential/Gallery-25.webp",
    alt: "Landscaped Garden",
    title: "Landscaped Gardens",
    subtitle: "Green Open Spaces",
    category: "Amenities",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null));
  const nextImage = () => setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : null));

  return (
    <div className="w-full bg-white">
      {/* ── Hero Banner ── */}
      <section className="w-full bg-[#111111] py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600')] bg-cover bg-center opacity-10" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF5C00] to-transparent" />
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="w-16 h-1 bg-[#FF5C00] mb-6 mx-auto" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight mb-5">
            Our <span className="font-bold text-[#FF5C00]">Gallery</span>
          </h1>
          <p className="text-zinc-300 text-lg max-w-2xl mx-auto leading-relaxed font-light">
            A visual journey through our premium residential, commercial, and industrial projects across NCR.
          </p>
        </div>
      </section>

      {/* ── Gallery Section ── */}
      <section className="w-full py-20 sm:py-24 bg-[#F7F7F5]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {GALLERY_CATEGORIES.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-xs font-bold uppercase tracking-widest border-2 transition-all duration-200 ${activeCategory === cat
                  ? "bg-[#111111] text-[#FF5C00] border-[#111111]"
                  : "bg-white text-[#111111] border-zinc-300 hover:border-[#111111]"}`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-style Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {filtered.map((img, idx) => (
              <div
                key={`${img.title}-${idx}`}
                onClick={() => openLightbox(idx)}
                className="group relative overflow-hidden bg-white shadow-xl rounded-2xl aspect-square cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Blurred Background (Color Match) */}
                <img
                  src={img.src}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-125"
                  aria-hidden="true"
                />

                {/* Main Image (Zoomed In) */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="relative z-10 w-full h-full object-cover p-1 group-hover:scale-110 transition-transform duration-700"
                />

                {/* Info Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col items-center justify-end p-6 text-center">
                  <Maximize2 className="w-8 h-8 text-[#FF5C00] mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0" />
                  <h3 className="text-white font-bold text-base uppercase tracking-wider">{img.title}</h3>
                  <p className="text-[#FF5C00] text-xs mt-1 font-medium">{img.subtitle}</p>
                </div>

                {/* Category badge */}
                <span className="absolute top-3 left-3 z-30 px-3 py-1 text-[10px] font-bold bg-[#FF5C00] text-white uppercase tracking-widest rounded-full shadow-md">
                  {img.category}
                </span>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-[#6B6B6B]">No images in this category yet.</div>
          )}
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-[300] flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button onClick={closeLightbox}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white hover:text-[#FF5C00] transition-colors z-10 bg-white/10 rounded-full">
            <X className="w-5 h-5" />
          </button>
          {/* Prev */}
          <button onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white hover:text-[#FF5C00] transition-colors z-10 bg-white/10 rounded-full">
            <ChevronLeft className="w-6 h-6" />
          </button>
          {/* Next */}
          <button onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white hover:text-[#FF5C00] transition-colors z-10 bg-white/10 rounded-full">
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-5xl w-full flex flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              className="w-full max-h-[75vh] object-contain"
            />
            <div className="text-center">
              <h3 className="text-white font-bold text-lg sm:text-xl">{filtered[lightboxIndex].title}</h3>
              <p className="text-[#FF5C00] text-sm mt-1">{filtered[lightboxIndex].subtitle}</p>
            </div>
            <p className="text-zinc-500 text-xs">{lightboxIndex + 1} / {filtered.length}</p>
          </div>
        </div>
      )}
    </div>
  );
}
