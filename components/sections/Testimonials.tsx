"use client";

import { Star, Quote } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
    const REVIEWS = [
        {
            name: "Rajesh Sharma",
            location: "Gaur City, Noida",
            review: "Edistone made buying our first home an incredibly seamless experience. From property selection to the final paperwork and home loan assistance, their transparency and dedication were unmatched.",
            rating: 5,
            initials: "RS"
        },
        {
            name: "Sunita Verma",
            location: "Commercial Investor",
            review: "I was looking for a high-ROI commercial space in NCR. The team at Edistone provided me with data-driven insights and secured a brilliant retail shop for me. Highly recommended!",
            rating: 5,
            initials: "SV"
        },
        {
            name: "Vikram Singh",
            location: "VVIP Namah, Ghaziabad",
            review: "Trust is the hardest thing to find in real estate, but Edistone completely proved themselves. They handled everything with absolute professionalism and got me the best possible deal.",
            rating: 5,
            initials: "VS"
        }
    ];

    return (
        <section id="testimonials" className="w-full bg-[#111111] py-16 sm:py-20 shrink-0 relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#FF5C00]/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FF5C00]/5 rounded-full blur-[100px] translate-y-1/2 translate-x-1/4 pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
                    <div className="flex flex-col">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FF5C00]/10 border border-[#FF5C00]/20 rounded-full mb-6 w-max">
                            <Star className="w-3.5 h-3.5 text-[#FF5C00] fill-[#FF5C00]" />
                            <span className="text-[#FF5C00] text-xs font-bold uppercase tracking-widest">Client Testimonials</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white max-w-2xl">
                            Stories Built on <span className="font-bold text-[#FF5C00]">Trust</span>
                        </h2>
                    </div>

                    <div className="flex items-center gap-5 bg-white/5 border border-white/10 px-6 py-4 rounded-2xl w-max backdrop-blur-sm">
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className={`w-12 h-12 rounded-full border-2 border-[#111111] bg-white flex items-center justify-center shadow-md relative z-${10 - i} overflow-hidden`}>
                                    <Image src="/logo.svg" alt="Edistone Logo" width={24} height={24} className="opacity-90 object-contain p-1" />
                                </div>
                            ))}
                            <div className="w-12 h-12 rounded-full border-2 border-[#111111] bg-[#FF5C00] flex items-center justify-center text-white font-bold text-[10px] shadow-lg relative z-20">
                                10k+
                            </div>
                        </div>
                        <div className="flex flex-col gap-0.5">
                            <span className="text-white font-bold text-lg leading-none">Happy Families</span>
                            <span className="text-zinc-400 text-xs uppercase tracking-widest font-semibold">Across NCR Region</span>
                        </div>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                    {REVIEWS.map((review, idx) => (
                        <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-3xl hover:bg-white/10 hover:border-[#FF5C00]/30 transition-all duration-500 hover:-translate-y-2 group flex flex-col h-full shadow-2xl">
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex gap-1.5">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-[#FF5C00] fill-[#FF5C00]" />
                                    ))}
                                </div>
                                <Quote className="w-10 h-10 text-white/5 group-hover:text-[#FF5C00]/20 transition-colors duration-500" />
                            </div>

                            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed flex-grow mb-6 font-light italic">
                                &ldquo;{review.review}&rdquo;
                            </p>

                            <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/10">
                                <div className="w-12 h-12 rounded-full bg-[#111111] border border-white/10 flex items-center justify-center text-[#FF5C00] font-bold shadow-inner">
                                    {review.initials}
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="text-white font-bold tracking-wide">{review.name}</h4>
                                    <span className="text-zinc-500 text-[10px] sm:text-xs font-semibold uppercase tracking-widest mt-0.5 whitespace-nowrap">{review.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
