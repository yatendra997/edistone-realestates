"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Send, Mail, X } from "lucide-react";
import Image from "next/image";

const SLIDES = [
    { id: 1, image: "/hero-1.png" },
    { id: 2, image: "/hero-2.png" },
    { id: 3, image: "/hero-3.png" },
    { id: 4, image: "/hero-5.jpg" },
];

const PROPERTY_TYPES = ["Residential", "Commercial", "Plots", "Villas", "Apartments"];
const PROJECTS = ["Gaur City", "Gaur Aero Mall", "Gaur World Street", "Gaur Siddhartham", "Other"];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));

    return (
        <>
            <section className="relative w-full bg-black shrink-0">
                {/*
                    Fixed aspect-ratio container matching Gaursons logic but fully responsive.
                    On smaller screens it stays proportional to mobile screen without harsh zooming/truncating.
                */}
                <div className="relative w-full aspect-[4/3] sm:aspect-[21/9]">
                    {/* Fade-based Image Slider */}
                    {SLIDES.map((slide, idx) => (
                        <div
                            key={slide.id}
                            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                        >
                            <Image
                                src={slide.image}
                                alt={`Hero Slide ${slide.id}`}
                                fill
                                priority={slide.id === 1}
                                className="object-cover object-top"
                                unoptimized={true}
                            />
                        </div>
                    ))}

                    {/* Navigation Arrows - centered bottom */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
                        <button
                            onClick={prevSlide}
                            className="w-8 h-8 bg-zinc-500/60 hover:bg-zinc-700/80 text-white flex items-center justify-center rounded-full transition-all duration-200 backdrop-blur-sm"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-8 h-8 bg-zinc-500/60 hover:bg-zinc-700/80 text-white flex items-center justify-center rounded-full transition-all duration-200 backdrop-blur-sm"
                            aria-label="Next slide"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Fixed Right-Edge Enquiry Tab */}
            <button
                onClick={() => setShowForm(true)}
                className={`fixed top-1/3 right-0 z-[200] bg-[#C8A24D] hover:bg-[#111111] text-white flex items-center justify-center shadow-lg transition-all duration-300 rounded-l-md w-10 h-10 ${showForm ? "opacity-0 pointer-events-none" : "opacity-100"}`}
                aria-label="Open enquiry form"
            >
                <Mail className="w-4 h-4" />
            </button>

            {/* Compact Enquiry Form */}
            <div
                className={`fixed top-[60px] right-0 z-[200] w-[270px] transition-transform duration-300 ease-in-out ${showForm ? "translate-x-0" : "translate-x-[calc(100%+10px)]"}`}
            >
                {showForm && (
                    <button
                        onClick={() => setShowForm(false)}
                        className="absolute -left-8 top-0 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-zinc-100 transition-colors z-10"
                        aria-label="Close form"
                    >
                        <X className="w-4 h-4 text-[#111111]" />
                    </button>
                )}
                <div className="bg-[#111111] rounded-bl-lg shadow-2xl overflow-y-auto border-l border-white/10 max-h-[85vh]">
                    <div className="bg-[#C8A24D] px-4 py-2.5">
                        <h3 className="text-white text-[11px] font-bold tracking-wide text-left uppercase">For any query, contact us:</h3>
                    </div>
                    <form className="px-4 py-3 flex flex-col gap-2">
                        <select className="w-full bg-[#D4D4D8] text-[#111] text-[11px] font-semibold px-3 py-2 rounded outline-none focus:ring-1 focus:ring-[#C8A24D] appearance-none cursor-pointer uppercase" defaultValue="">
                            <option value="" disabled>PROPERTY TYPE</option>
                            {PROPERTY_TYPES.map((t) => (<option key={t} value={t}>{t}</option>))}
                        </select>
                        <select className="w-full bg-[#D4D4D8] text-[#111] text-[11px] font-semibold px-3 py-2 rounded outline-none focus:ring-1 focus:ring-[#C8A24D] appearance-none cursor-pointer uppercase" defaultValue="">
                            <option value="" disabled>PROJECT</option>
                            {PROJECTS.map((p) => (<option key={p} value={p}>{p}</option>))}
                        </select>
                        <input type="text" placeholder="NAME*" className="w-full bg-white/90 text-[#111] text-[11px] px-3 py-2 rounded outline-none focus:ring-1 focus:ring-[#C8A24D] placeholder:text-zinc-400 placeholder:font-semibold placeholder:uppercase" required />
                        <input type="email" placeholder="EMAIL*" className="w-full bg-white/90 text-[#111] text-[11px] px-3 py-2 rounded outline-none focus:ring-1 focus:ring-[#C8A24D] placeholder:text-zinc-400 placeholder:font-semibold placeholder:uppercase" required />
                        <input type="tel" placeholder="MOBILE*" className="w-full bg-white/90 text-[#111] text-[11px] px-3 py-2 rounded outline-none focus:ring-1 focus:ring-[#C8A24D] placeholder:text-zinc-400 placeholder:font-semibold placeholder:uppercase" required />
                        <input type="text" placeholder="COMMENT" className="w-full bg-white/90 text-[#111] text-[11px] px-3 py-2 rounded outline-none focus:ring-1 focus:ring-[#C8A24D] placeholder:text-zinc-400 placeholder:font-semibold placeholder:uppercase" />
                        <label className="flex items-start gap-2 cursor-pointer mt-1">
                            <input type="checkbox" className="mt-0.5 accent-[#C8A24D] shrink-0 w-3 h-3" />
                            <span className="text-[9px] leading-[14px] text-white/60 text-left">I consent to Edistone Real Estates Pvt. Ltd. to collect and process my personal data based on the Privacy Notice.</span>
                        </label>
                        <button type="submit" className="bg-white text-[#111] px-4 py-2 rounded text-[11px] font-extrabold flex items-center justify-center gap-1.5 hover:bg-[#C8A24D] hover:text-white transition-colors shadow-sm w-max mt-1 uppercase tracking-widest">
                            <Send className="w-3 h-3" /> Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
