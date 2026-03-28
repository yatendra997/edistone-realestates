"use client";

import Image from "next/image";
import { CheckCircle2, Quote, Award, Users, Building2, Shield } from "lucide-react";

const STATS = [
  { value: "500+", label: "Projects Delivered" },
  { value: "12+", label: "Years of Expertise" },
  { value: "5000+", label: "Happy Clients" },
  { value: "NCR", label: "Pan-India Reach" },
];

const FEATURES = [
  "End-to-end Seamless Guidance",
  "Deep Market Expertise",
  "Unwavering Transparency",
  "Tailored Client-First Approach",
];

export default function About() {
  return (
    <section id="about" className="w-full bg-white shrink-0 overflow-hidden">


      {/* ── MAIN ABOUT BLOCK ─────────────────────────────────── */}
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">

        {/* Section header */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-0.5 bg-[#FF5C00]" />
            <Building2 className="w-4 h-4 text-[#FF5C00]" />
            <div className="w-10 h-0.5 bg-[#FF5C00]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#111111] text-center mb-3">
            About <span className="font-bold">Edistone</span>
          </h2>
          <p className="text-sm text-[#6B6B6B] uppercase tracking-[0.2em] font-semibold text-center">
            Built on Trust, Strong as Stone
          </p>
        </div>

        {/* ── CONTENT GRID ─────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-14 items-center">

          {/* LEFT — Big Director Image */}
          <div className="relative">
            {/* Orange accent block behind image */}
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#FF5C00]/15 rounded-2xl rotate-6 pointer-events-none z-0" />
            <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-[#111111]/8 rounded-2xl -rotate-6 pointer-events-none z-0" />

            {/* Image wrapper */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl w-full aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] max-h-[420px]">
              <Image
                src="/Director.jpeg"
                alt="Mr. Ashish Kumar Singh — Founder & Managing Director, Edistone Real Estates"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Gradient overlay at bottom for name tag */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

              {/* Name badge overlay */}
              <div className="absolute bottom-0 left-0 right-0 px-7 py-7">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-white font-bold text-lg sm:text-xl leading-tight">
                      Mr. Ashish Kumar Singh
                    </p>
                    <p className="text-[#FF5C00] font-semibold text-xs sm:text-sm uppercase tracking-widest mt-1">
                      Founder & Managing Director
                    </p>
                    <p className="text-white/60 text-xs font-medium mt-0.5 uppercase tracking-widest">
                      Edistone Real Estates Pvt. Ltd.
                    </p>
                  </div>
                  {/* Orange accent badge */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FF5C00] flex items-center justify-center shadow-lg">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>


          </div>

          {/* RIGHT — Content */}
          <div className="flex flex-col gap-8">

            {/* Headline */}
            <div>
              <p className="text-[11px] font-bold text-[#FF5C00] uppercase tracking-[0.22em] mb-3">Our Identity</p>
              <h3 className="text-2xl sm:text-3xl lg:text-[2rem] text-[#111111] font-bold leading-tight mb-5">
                <span className="text-[#FF5C00]">EDISTONE</span> means<br />
                &ldquo;Strong and Reliable Identity&rdquo;
              </h3>
              <div className="w-12 h-1 bg-[#FF5C00] rounded-full" />
            </div>

            {/* Body text */}
            <div className="space-y-4 text-[#6B6B6B] text-[15px] sm:text-[16px] leading-relaxed">
              <p>
                The name <strong className="text-[#111111]">EDISTONE</strong> is more than a brand — it is a statement of strength and dependability. Just as a stone is the most enduring element in nature, Edistone stands as a firm, trusted, and unshakeable identity in the real estate landscape of NCR. We are not just consultants; we are the solid foundation upon which your property dreams are built.
              </p>
              <p>
                Whether you are investing in your first home, expanding a commercial portfolio, or seeking industrial land across NCR, Edistone is the name you can rely on — today, tomorrow, and for generations to come.
              </p>
            </div>

            {/* Feature bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {FEATURES.map((item, idx) => (
                <div key={idx}
                  className="flex items-center gap-3 bg-[#F7F7F5] border border-zinc-200/80 rounded-xl px-4 py-3 hover:border-[#FF5C00]/40 hover:bg-orange-50/30 transition-colors duration-300">
                  <CheckCircle2 className="w-5 h-5 text-[#FF5C00] flex-shrink-0" />
                  <span className="text-sm font-semibold text-[#111111]">{item}</span>
                </div>
              ))}
            </div>

            {/* Quote block */}
            <div className="relative bg-[#111111] rounded-2xl px-7 py-6 overflow-hidden">
              <Quote className="absolute top-4 right-5 w-16 h-16 text-white/5 -rotate-12 pointer-events-none" />
              <p className="text-white/80 text-[14px] sm:text-[15px] leading-relaxed font-light italic relative z-10">
                &ldquo;Whoever you are — a first-time homebuyer or a seasoned investor — we are your strong and reliable identity partner in real estate.&rdquo;
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* ── FOUNDER'S MESSAGE SECTION ─────────────────────────── */}
      <div className="bg-[#F7F7F5] border-t border-zinc-200/60">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left: Label */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-[#FF5C00]" />
                <span className="text-[10px] font-bold text-[#FF5C00] uppercase tracking-[0.22em]">Founder's Message</span>
              </div>
              <h4 className="text-2xl sm:text-3xl font-bold text-[#111111] leading-snug">
                A Word From<br />
                <span className="text-[#FF5C00]">The Founder</span>
              </h4>

              {/* Small founder image + name */}
              <div className="mt-8 flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#FF5C00] shadow-md flex-shrink-0 bg-zinc-200">
                  <Image
                    src="/founder.png"
                    alt="Mr. Ashish Kumar Singh"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#111111]">Mr. Ashish Kumar Singh</p>
                  <p className="text-[11px] text-[#FF5C00] font-semibold uppercase tracking-wider">Founder & MD</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="w-px h-full min-h-[160px] bg-zinc-200 mx-auto" />
            </div>

            {/* Right: Message text */}
            <div className="lg:col-span-8 relative">
              {/* Big decorative quote mark */}
              <span className="absolute -top-6 -left-2 text-8xl font-serif text-[#FF5C00]/10 leading-none select-none pointer-events-none">&ldquo;</span>

              <div className="space-y-5 text-[#6B6B6B] text-[15px] sm:text-[16px] leading-relaxed pl-4">
                <p>
                  &ldquo;From the very first day I envisioned Edistone Real Estate Pvt. Ltd., my mission was clear — to create a company that stands for trust, quality, and growth. Today, we are not just a real estate organization; we are a brand built on dedication, discipline, and the belief that every client and every employee deserves the absolute best.
                </p>
                <p>
                  Our commitment to transparency, innovation, and customer satisfaction is what drives us forward every single day. Together, we will keep building a future that is stronger, brighter, and built on trust.&rdquo;
                </p>
              </div>

              {/* Signature line */}
              <div className="mt-6 pl-4 flex items-center gap-4">
                <div className="h-0.5 w-8 bg-[#FF5C00]" />
                <span className="text-xs font-bold text-[#111111] uppercase tracking-widest">Mr. Ashish Kumar Singh, Founder</span>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
