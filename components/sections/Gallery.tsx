"use client";

import { Maximize2 } from "lucide-react";

// Curated Ultra HD images featuring Indian Premium Apartments & Custom Edistone Buildings
const GALLERY_IMAGES = [
    {
        src: "/Gallery-1.jpeg",
        alt: "Gallery Image 1",
        title: "Premium Project 1",
    },
    {
        src: "/Gallery-2.jpeg",
        alt: "Gallery Image 2",
        title: "Premium Project 2",
    },
    {
        src: "/Gallery-3.jpeg",
        alt: "Gallery Image 3",
        title: "Premium Project 3",
    },
    {
        src: "/Gallery-4.jpeg",
        alt: "Gallery Image 4",
        title: "Premium Project 4",
    },
    {
        src: "/Gallery-5.jpeg",
        alt: "Gallery Image 5",
        title: "Premium Project 5",
    },
    {
        src: "/Gallery-6.jpeg",
        alt: "Gallery Image 6",
        title: "Premium Project 6",
    },
    {
        src: "/Gallery-7.jpeg",
        alt: "Gallery Image 7",
        title: "Premium Project 7",
    },
    {
        src: "/Gallery-8.jpeg",
        alt: "Gallery Image 8",
        title: "Premium Project 8",
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

                {/* Uniform 4-Column Grid Layout (Smaller Cards) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {GALLERY_IMAGES.map((img, idx) => (
                        <div
                            key={idx}
                            className="relative overflow-hidden bg-white shadow-xl rounded-2xl aspect-square group transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
                        >
                            {/* Blurred Background (The "Border Match") */}
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

                            {/* Subtle Overlay on Hover */}
                            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                        </div>
                    ))}
                </div>

                {/* Footer Button */}
                <div className="mt-16 text-center">
                    <button className="px-10 py-4 bg-transparent border border-[#111111] text-[#111111] text-sm font-bold uppercase tracking-widest hover:bg-[#111111] hover:text-[#FF5C00] transition-colors duration-300">
                        View All Media
                    </button>
                </div>

            </div>
        </section>
    );
}
