"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Send, Mail, X } from "lucide-react";
import Image from "next/image";

const SLIDES = [
    { id: 1, image: "/Edistone-hero-banner-1.png" },
    { id: 2, image: "/Hero-banner-2.png" },
    { id: 3, image: "/hero-banner-3.png" },
    { id: 4, image: "/hero-banner-4.png" },
    { id: 5, image: "/hero-banner-5.png" },
];

const PROPERTY_TYPES = ["Flat", "Villa", "Plot", "Others"];


export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showForm, setShowForm] = useState(false);
    const autoOpenFiredRef = useRef(false);

    // Auto-slide
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    // Two-tone beep — resume ctx first to bypass browser autoplay suspension
    const playNotificationSound = () => {
        try {
            const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
            const doPlay = () => {
                const playTone = (freq: number, start: number, duration: number) => {
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    osc.type = "sine";
                    osc.frequency.setValueAtTime(freq, ctx.currentTime + start);
                    gain.gain.setValueAtTime(0.28, ctx.currentTime + start);
                    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + start + duration);
                    osc.start(ctx.currentTime + start);
                    osc.stop(ctx.currentTime + start + duration);
                };
                playTone(880, 0, 0.20);
                playTone(1100, 0.22, 0.25);
            };
            if (ctx.state === "suspended") {
                ctx.resume().then(doPlay).catch(() => {});
            } else {
                doPlay();
            }
        } catch {
            // AudioContext not supported — silent fallback
        }
    };

    // Auto-open form after 3.5 seconds on first visit per session
    useEffect(() => {
        if (autoOpenFiredRef.current) return;
        const alreadyShown = sessionStorage.getItem("edistone_form_shown");
        if (alreadyShown) return;
        const timer = setTimeout(() => {
            if (!autoOpenFiredRef.current) {
                autoOpenFiredRef.current = true;
                setShowForm(true);
                playNotificationSound(); // Play sound when form opens
                sessionStorage.setItem("edistone_form_shown", "1");
            }
        }, 3500);
        return () => clearTimeout(timer);
    }, []);

    const nextSlide = () => setCurrentSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));

    return (
        <>
            {/* Hero Section — Full viewport height, pure image slideshow */}
            <section className="relative w-full bg-black" style={{ height: "100svh", minHeight: "100vh" }}>
                {/* Slides */}
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
                            className="object-cover object-center"
                            unoptimized={true}
                            sizes="100vw"
                        />
                    </div>
                ))}

                {/* Very subtle top gradient so logo stays readable over image */}
                <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black/50 to-transparent z-20 pointer-events-none" />
                {/* Bottom gradient */}
                <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-black/40 to-transparent z-20 pointer-events-none" />

                {/* Navigation Arrows */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4">
                    <button
                        onClick={prevSlide}
                        className="w-10 h-10 bg-white/15 hover:bg-[#FF5C00] text-white flex items-center justify-center rounded-full transition-all duration-200 backdrop-blur-sm border border-white/30 hover:border-[#FF5C00]"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    <div className="flex items-center gap-2">
                        {SLIDES.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentSlide(i)}
                                className={`transition-all duration-300 rounded-full ${i === currentSlide ? "w-8 h-2.5 bg-[#FF5C00]" : "w-2.5 h-2.5 bg-white/50 hover:bg-[#FF5C00]/80"}`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextSlide}
                        className="w-10 h-10 bg-white/15 hover:bg-[#FF5C00] text-white flex items-center justify-center rounded-full transition-all duration-200 backdrop-blur-sm border border-white/30 hover:border-[#FF5C00]"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </section>

            {/* Fixed Right-Edge Enquiry Tab */}
            <button
                onClick={() => setShowForm(true)}
                className={`fixed top-1/3 right-0 z-[200] bg-[#FF5C00] hover:bg-[#111111] text-white flex items-center justify-center shadow-lg transition-all duration-300 rounded-l-md w-9 h-9 sm:w-10 sm:h-10 ${showForm ? "opacity-0 pointer-events-none" : "opacity-100"}`}
                aria-label="Open enquiry form"
            >
                <Mail className="w-4 h-4" />
            </button>

            {/* Enquiry Form Panel */}
            <div
                className={`fixed top-[124px] lg:top-[88px] right-0 z-[200] w-[min(340px,calc(100vw-12px))] transition-transform duration-500 ease-in-out ${showForm ? "translate-x-0" : "translate-x-[calc(100%+10px)]"}`}
            >
                {showForm && (
                    <button
                        onClick={() => setShowForm(false)}
                        className="absolute -left-9 top-0 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-zinc-100 transition-colors z-10"
                        aria-label="Close form"
                    >
                        <X className="w-4 h-4 text-[#111111]" />
                    </button>
                )}

                <div className="bg-[#111111] rounded-bl-xl shadow-2xl overflow-y-auto border-l border-white/10 max-h-[calc(100vh-124px)] lg:max-h-[calc(100vh-88px)]" style={{ scrollbarWidth: "thin" }}>
                    {/* Header */}
                    <div className="bg-[#FF5C00] px-5 py-3.5">
                        <div className="flex items-center gap-2 mb-0.5">
                            <Mail className="w-3.5 h-3.5 text-white" />
                            <h3 className="text-white text-[12px] font-bold tracking-wide uppercase">
                                What Are You Searching?
                            </h3>
                        </div>
                        <p className="text-white/70 text-[10px] tracking-wide">We respond within 1 hour</p>
                    </div>

                    <form className="px-5 py-4 flex flex-col gap-3">
                        {/* Property Type dropdown */}
                        <select
                            className="w-full bg-[#162040] text-zinc-300 text-[11px] font-semibold px-3 py-2.5 rounded-md outline-none focus:ring-1 focus:ring-[#FF5C00] appearance-none cursor-pointer border border-white/10"
                            defaultValue=""
                        >
                            <option value="" disabled>PROPERTY TYPE</option>
                            {PROPERTY_TYPES.map((t) => <option key={t} value={t} className="bg-[#111111]">{t}</option>)}
                        </select>

                        {/* Name, Email, Mobile */}
                        {[
                            { type: "text",  placeholder: "YOUR NAME*" },
                            { type: "email", placeholder: "EMAIL ADDRESS*" },
                            { type: "tel",   placeholder: "MOBILE NUMBER*" },
                        ].map((field) => (
                            <input
                                key={field.placeholder}
                                type={field.type}
                                placeholder={field.placeholder}
                                required={field.placeholder.endsWith("*")}
                                className="w-full bg-[#162040] text-zinc-300 text-[11px] px-3 py-2.5 rounded-md outline-none focus:ring-1 focus:ring-[#FF5C00] border border-white/10 placeholder:text-zinc-500 placeholder:text-[10px] placeholder:font-semibold"
                            />
                        ))}

                        {/* Budget */}
                        <input
                            type="text"
                            placeholder="BUDGET (e.g. 75 Lakhs, 1.5 Cr)*"
                            required
                            className="w-full bg-[#162040] text-zinc-300 text-[11px] px-3 py-2.5 rounded-md outline-none focus:ring-1 focus:ring-[#FF5C00] border border-white/10 placeholder:text-zinc-500 placeholder:text-[10px] placeholder:font-semibold"
                        />

                        {/* Comment / Requirement – textarea */}
                        <textarea
                            placeholder="COMMENT / REQUIREMENT"
                            rows={4}
                            className="w-full bg-[#162040] text-zinc-300 text-[11px] px-3 py-2.5 rounded-md outline-none focus:ring-1 focus:ring-[#FF5C00] border border-white/10 placeholder:text-zinc-500 placeholder:text-[10px] placeholder:font-semibold resize-none"
                        />

                        <label className="flex items-start gap-2 cursor-pointer">
                            <input type="checkbox" className="mt-0.5 accent-[#FF5C00] shrink-0 w-3 h-3" />
                            <span className="text-[9px] leading-[14px] text-zinc-500 text-left">
                                I consent to Edistone Real Estates Pvt. Ltd. to collect and process my personal data based on the Privacy Notice.
                            </span>
                        </label>

                        <button
                            type="submit"
                            className="group bg-[#FF5C00] hover:bg-white text-white hover:text-[#111111] px-4 py-2.5 rounded-md text-[11px] font-extrabold flex items-center justify-center gap-2 transition-all duration-300 shadow-sm uppercase tracking-widest mt-1"
                        >
                            <Send className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                            Submit Enquiry
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
