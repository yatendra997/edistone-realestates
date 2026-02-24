"use client";

import { Maximize2 } from "lucide-react";

// Curated Ultra HD images featuring Indian Premium Apartments & Custom Edistone Buildings
const GALLERY_IMAGES = [
    {
        src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
        alt: "Premium Highrise Architecture",
        title: "Skyline Residences",
    },
    {
        src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800",
        alt: "Edistone Chrysalis Project",
        title: "Edistone Chrysalis",
    },
    {
        src: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=800",
        alt: "Modern Building Facade",
        title: "Green Avenue Township",
    },
    {
        src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=800",
        alt: "Edistone Platinum Towers",
        title: "Platinum Towers",
    },
    {
        src: "https://images.unsplash.com/photo-1580041065738-e72023775cdc?q=80&w=800",
        alt: "Premium Apartment Facade",
        title: "Saundaryam Heights",
    },
    {
        src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800",
        alt: "Ultra Luxury Residence",
        title: "Centurian Park",
    },
];

export default function Gallery() {
    return (
        <section className="w-full py-20 sm:py-28 bg-[#F7F7F5] shrink-0">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Title matching the Ultra Premium Theme */}
                <div className="flex flex-col items-center mb-16">
                    <div className="w-full max-w-md border-t-2 border-[#111111] mb-2" />
                    <div className="w-full max-w-md border-t border-[#111111] mb-4" />
                    <h2 className="text-2xl sm:text-3xl font-light tracking-widest text-[#111111] uppercase mb-4 text-center">
                        The <span className="font-bold">Edistone</span> Gallery
                    </h2>
                    <div className="w-full max-w-md border-b border-[#111111] mb-2" />
                    <div className="w-full max-w-md border-b-2 border-[#111111]" />
                    <p className="mt-6 text-[#6B6B6B] text-sm uppercase tracking-widest font-semibold text-center">
                        A glimpse into our premium Indian residential & commercial projects
                    </p>
                </div>

                {/* Uniform 3-Column Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {GALLERY_IMAGES.map((img, idx) => (
                        <div
                            key={idx}
                            className="relative group overflow-hidden bg-[#111111] shadow-md border border-[#C8A24D]/20 aspect-[4/3] sm:aspect-[4/3]"
                        >
                            {/* Image */}
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                            />

                            {/* Deep Charcoal Hover Overlay */}
                            <div className="absolute inset-0 bg-[#111111]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center">
                                <div className="w-12 h-12 rounded-full border border-[#C8A24D] flex items-center justify-center mb-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                    <Maximize2 className="w-5 h-5 text-[#C8A24D]" />
                                </div>
                                <h3 className="text-[#C8A24D] font-bold text-base sm:text-lg uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-150">
                                    {img.title}
                                </h3>
                                <div className="w-8 h-px bg-[#C8A24D] mt-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Button */}
                <div className="mt-16 text-center">
                    <button className="px-10 py-4 bg-transparent border border-[#111111] text-[#111111] text-sm font-bold uppercase tracking-widest hover:bg-[#111111] hover:text-[#C8A24D] transition-colors duration-300">
                        View All Media
                    </button>
                </div>

            </div>
        </section>
    );
}
