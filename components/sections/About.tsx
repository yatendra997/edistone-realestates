"use client";

import { CheckCircle2, Quote } from "lucide-react";

export default function About() {
    return (
        <section className="w-full py-24 sm:py-32 bg-white shrink-0 relative overflow-hidden">

            {/* Subtle decorative background accent */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C8A24D]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#111111]/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

            <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Title Section */}
                <div className="flex flex-col items-center mb-16 sm:mb-24">
                    <div className="w-16 h-1 bg-[#C8A24D] mb-6" />
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#111111] text-center mb-4">
                        About <span className="font-bold">Edistone</span>
                    </h2>
                    <p className="text-sm sm:text-base text-[#6B6B6B] uppercase tracking-widest font-semibold text-center">
                        Building the Foundation of Dreams
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 xl:gap-20 items-stretch">

                    {/* Left Column: Who we are (Customer friendly copy) */}
                    <div className="lg:col-span-7 flex flex-col justify-center space-y-8 lg:pr-8">
                        <h3 className="text-2xl sm:text-3xl text-[#111111] font-semibold leading-tight">
                            More than just spaces.<br />
                            <span className="text-[#C8A24D] font-light">We build the foundation for your success.</span>
                        </h3>

                        <div className="space-y-6 text-[#6B6B6B] text-[15px] sm:text-[17px] leading-relaxed">
                            <p>
                                At Edistone Real Estates, we believe a property is more than just walls and land. It is the cornerstone of your security and your future. Our vision is to redefine your real estate experience by delivering completely transparent, trustworthy, and beautifully tailored solutions.
                            </p>
                            <p>
                                From helping you step into your first home to expanding your commercial portfolio, we provide end-to-end guidance spanning selection, legal assistance, and after-sales support. With our deep market expertise and an unwavering client-first approach, we guarantee seamless transactions and truly worthwhile investments.
                            </p>
                        </div>

                        {/* Feature Bullets */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            {[
                                "End-to-end Seamless Guidance",
                                "Deep Market Expertise",
                                "Unwavering Transparency",
                                "Tailored Client-First Approach"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#C8A24D] flex-shrink-0" />
                                    <span className="text-sm font-semibold text-[#111111]">{item}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-lg font-medium text-[#111111] italic pt-4 border-t border-zinc-100">
                            "Whoever you are—a first-time homebuyer or a seasoned investor—we are here to make your journey simple, secure, and successful."
                        </p>
                    </div>

                    {/* Right Column: Founder's Message Card */}
                    <div className="lg:col-span-5 relative group">
                        {/* Dark background card */}
                        <div className="bg-[#111111] rounded-2xl p-8 sm:p-10 shadow-2xl relative overflow-hidden h-full flex flex-col">

                            {/* Decorative Quote Icon behind text */}
                            <Quote className="absolute top-6 right-6 w-24 h-24 text-white/5 -rotate-12 pointer-events-none" />

                            <div className="flex-grow">
                                <h4 className="text-white text-xl sm:text-2xl font-light mb-8">
                                    A Message from <br />
                                    <span className="font-bold text-[#C8A24D]">The Founder</span>
                                </h4>

                                <div className="space-y-5 text-zinc-300 text-sm sm:text-[15px] leading-relaxed font-light mb-10">
                                    <p>
                                        "From the very first day I envisioned Edistone Real Estate Pvt. Ltd., my mission was clear—to create a company that stands for trust, quality, and growth. Today, we are not just a real estate organization; we are a brand built on dedication, discipline, and the belief that every client and every employee deserves the absolute best.
                                    </p>
                                    <p>
                                        Our commitment to transparency, innovation, and customer satisfaction is what drives us forward every single day. Together, we will keep building a future that is stronger, brighter, and built on trust."
                                    </p>
                                </div>
                            </div>

                            {/* Founder Profile Section */}
                            <div className="flex items-center gap-5 pt-6 border-t border-white/10 mt-auto">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-[#C8A24D] bg-zinc-800 shrink-0 shadow-lg">
                                    {/* Using the provided founder image */}
                                    <img
                                        src="/founder.png"
                                        alt="Mr. Ashish Kumar Singh - Founder"
                                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-white font-semibold tracking-wide text-base sm:text-lg">
                                        Mr. Ashish Kumar Singh
                                    </span>
                                    <span className="text-[#C8A24D] font-medium text-xs sm:text-sm uppercase tracking-wider mt-1">
                                        Founder, Edistone
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Abstract floating accent behind card */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#C8A24D] rounded-xl -z-10 rotate-12 opacity-50" />
                    </div>

                </div>
            </div>
        </section>
    );
}
