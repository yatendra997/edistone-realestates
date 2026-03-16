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
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200",
    alt: "Premium Highrise Architecture",
    title: "Skyline Residences",
    subtitle: "Greater Noida West",
    category: "Residential",
  },
  {
    src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200",
    alt: "Edistone Chrysalis Project",
    title: "Edistone Chrysalis",
    subtitle: "Yamuna Expressway",
    category: "Residential",
  },
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200",
    alt: "Ultra Luxury Residence",
    title: "Centurian Park",
    subtitle: "Greater Noida",
    category: "Residential",
  },
  {
    src: "https://images.unsplash.com/photo-1580041065738-e72023775cdc?q=80&w=1200",
    alt: "Premium Apartment Facade",
    title: "Saundaryam Heights",
    subtitle: "Techzone 4, Greater Noida",
    category: "Residential",
  },
  {
    src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200",
    alt: "Elegant Apartment Tower",
    title: "VVIP Namah",
    subtitle: "Greater Noida West",
    category: "Residential",
  },
  {
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200",
    alt: "Luxury Villa",
    title: "Palm Adela Villas",
    subtitle: "Greater Noida West",
    category: "Residential",
  },

  // Commercial
  {
    src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1200",
    alt: "Modern Commercial Building",
    title: "SKA Arcadia",
    subtitle: "Commercial Hub, Greater Noida",
    category: "Commercial",
  },
  {
    src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200",
    alt: "Premium Office Space",
    title: "KB West Walk",
    subtitle: "Vaishali, GZB",
    category: "Commercial",
  },
  {
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200",
    alt: "Retail & Commercial Complex",
    title: "Iris Trehan",
    subtitle: "Crossings Republik, GZB",
    category: "Commercial",
  },

  // Industrial
  {
    src: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=1200",
    alt: "Industrial Facility",
    title: "Industrial Warehouse",
    subtitle: "UPSIDC Area, GZB",
    category: "Industrial",
  },
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200",
    alt: "Factory Unit",
    title: "Factory Sheds",
    subtitle: "UPSIDA Approved, NCR",
    category: "Industrial",
  },

  // Amenities
  {
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200",
    alt: "Luxury Pool",
    title: "Infinity Pool",
    subtitle: "Premium Residences Amenity",
    category: "Amenities",
  },
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200",
    alt: "Modern Gymnasium",
    title: "State-of-the-art Gymnasium",
    subtitle: "Club House Facility",
    category: "Amenities",
  },
  {
    src: "https://images.unsplash.com/photo-1555636222-cae831e670b3?q=80&w=1200",
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
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C8A24D] to-transparent" />
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="w-16 h-1 bg-[#C8A24D] mb-6 mx-auto" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight mb-5">
            Our <span className="font-bold text-[#C8A24D]">Gallery</span>
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
                  ? "bg-[#111111] text-[#C8A24D] border-[#111111]"
                  : "bg-white text-[#111111] border-zinc-300 hover:border-[#111111]"}`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-style Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((img, idx) => (
              <div
                key={`${img.title}-${idx}`}
                onClick={() => openLightbox(idx)}
                className="relative group overflow-hidden bg-[#111111] shadow-md border border-[#C8A24D]/10 aspect-[4/3] cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-end p-6 text-center">
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full border border-[#C8A24D] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                    <Maximize2 className="w-4 h-4 text-[#C8A24D]" />
                  </div>
                  <h3 className="text-[#C8A24D] font-bold text-base uppercase tracking-wide translate-y-3 group-hover:translate-y-0 transition-transform duration-500 delay-100">{img.title}</h3>
                  <p className="text-zinc-300 text-xs mt-1 translate-y-3 group-hover:translate-y-0 transition-transform duration-500 delay-150">{img.subtitle}</p>
                </div>
                {/* Category badge */}
                <span className="absolute top-3 left-3 px-2 py-1 text-[10px] font-bold bg-[#C8A24D] text-white uppercase tracking-wider">
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
          <button onClick={closeLightbox}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white hover:text-[#C8A24D] transition-colors z-10">
            <X className="w-6 h-6" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 w-10 h-10 flex items-center justify-center text-white hover:text-[#C8A24D] transition-colors z-10">
            <ChevronLeft className="w-7 h-7" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-16 w-10 h-10 flex items-center justify-center text-white hover:text-[#C8A24D] transition-colors z-10">
            <ChevronRight className="w-7 h-7" />
          </button>

          <div className="max-w-5xl w-full flex flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              className="w-full max-h-[75vh] object-contain"
            />
            <div className="text-center">
              <h3 className="text-white font-bold text-xl">{filtered[lightboxIndex].title}</h3>
              <p className="text-[#C8A24D] text-sm mt-1">{filtered[lightboxIndex].subtitle}</p>
            </div>
            <p className="text-zinc-500 text-xs">{lightboxIndex + 1} / {filtered.length}</p>
          </div>
        </div>
      )}
    </div>
  );
}
