"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin, CheckCircle2, Phone, Mail,
  Send, ShieldCheck, Star, Home,
  ArrowLeft, Building2, Calendar, Layers,
} from "lucide-react";
import type { ProjectDetail } from "@/data/projectDetails";

interface Props {
  project: ProjectDetail;
}

// ─────────────────────────────────────────────
// ENQUIRY FORM
// ─────────────────────────────────────────────
function EnquiryForm({ projectTitle }: { projectTitle: string }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-14 gap-5 text-center">
        <div className="w-16 h-16 rounded-full bg-[#FF5C00]/10 flex items-center justify-center">
          <ShieldCheck className="w-8 h-8 text-[#FF5C00]" />
        </div>
        <h3 className="text-xl font-bold text-[#111111]">Thank You!</h3>
        <p className="text-[#6B6B6B] text-sm max-w-xs">
          Your enquiry for <strong>{projectTitle}</strong> has been received. Our team will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
      <div className="flex flex-col gap-1.5">
        <label className="text-[11px] font-bold text-[#111111] uppercase tracking-wider">
          Your Name <span className="text-[#FF5C00]">*</span>
        </label>
        <input
          required
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full name"
          className="w-full px-4 py-3 border border-zinc-200 bg-[#FAFAFA] text-sm text-[#111111] focus:outline-none focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00]/30 transition-all"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-[11px] font-bold text-[#111111] uppercase tracking-wider">
          Phone <span className="text-[#FF5C00]">*</span>
        </label>
        <input
          required
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="+91 00000 00000"
          className="w-full px-4 py-3 border border-zinc-200 bg-[#FAFAFA] text-sm text-[#111111] focus:outline-none focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00]/30 transition-all"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-[11px] font-bold text-[#111111] uppercase tracking-wider">
          Email
        </label>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className="w-full px-4 py-3 border border-zinc-200 bg-[#FAFAFA] text-sm text-[#111111] focus:outline-none focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00]/30 transition-all"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-[11px] font-bold text-[#111111] uppercase tracking-wider">
          Message
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your requirements..."
          rows={3}
          className="w-full px-4 py-3 border border-zinc-200 bg-[#FAFAFA] text-sm text-[#111111] focus:outline-none focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00]/30 transition-all resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-[#FF5C00] to-[#cc4a00] text-white text-sm font-bold uppercase tracking-widest hover:from-[#111111] hover:to-[#111111] transition-all duration-300 shadow-md mt-1"
      >
        <Send className="w-4 h-4" />
        Send Enquiry
      </button>
      <p className="text-center text-[11px] text-zinc-400 flex items-center justify-center gap-1">
        <Mail className="w-3 h-3" /> We respect your privacy. No spam, ever.
      </p>
    </form>
  );
}

// ─────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────
export default function ProjectDetailPage({ project }: Props) {
  const [imgError, setImgError] = useState(false);

  const badgeColor =
    project.badge === "New Launch" || project.badge === "New"
      ? "bg-emerald-600"
      : project.badge === "Hot"
        ? "bg-red-600"
        : project.badge === "Premium"
          ? "bg-blue-700"
          : "bg-[#FF5C00]";

  const stats = [
    { label: "Price", value: project.priceRange, icon: <Home className="w-4 h-4" /> },
    { label: "Status", value: project.status, icon: <Building2 className="w-4 h-4" /> },
    { label: "Possession", value: project.possession, icon: <Calendar className="w-4 h-4" /> },
    { label: "Developer", value: project.developer, icon: <Layers className="w-4 h-4" /> },
  ];

  return (
    <div className="w-full">

      {/* ── HERO ────────────────────────────────────────────────── */}
      {/* pt-[88px] offsets the fixed navbar (h-[88px]) */}
      <div
        className="relative w-full bg-[#111111] pt-[88px]"
        style={{ minHeight: "calc(88px + 520px)" }}
      >
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16">
          <div className="flex flex-col lg:flex-row items-stretch gap-0 min-h-[520px]">

            {/* LEFT — Text Content */}
            <div className="lg:w-1/2 flex flex-col justify-center py-12 lg:py-16 pr-0 lg:pr-12 z-10">
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="bg-[#FF5C00] text-white px-3 py-1 text-[11px] font-bold uppercase tracking-widest">
                  {project.type}
                </span>
                {project.badge && (
                  <span className={`${badgeColor} text-white px-3 py-1 text-[11px] font-bold uppercase tracking-widest`}>
                    {project.badge}
                  </span>
                )}
                {project.rera && (
                  <span className="border border-white/20 text-white/60 px-3 py-1 text-[11px] font-medium uppercase tracking-wider">
                    RERA: {project.rera}
                  </span>
                )}
              </div>

              {/* Title */}
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-[52px] font-bold text-white leading-tight mb-4"
                style={{ fontFamily: '"Playfair Display", "Times New Roman", serif' }}
              >
                {project.title}
              </h1>

              {/* Location */}
              <p className="flex items-center gap-2 text-white/70 text-sm mb-6">
                <MapPin className="w-4 h-4 text-[#FF5C00] flex-shrink-0" />
                {project.fullAddress}
              </p>

              {/* Price pill */}
              <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 w-fit mb-8">
                <span className="text-white/50 text-xs uppercase tracking-wider font-semibold">Starting From</span>
                <span className="text-[#FF5C00] font-bold text-lg">{project.priceRange}</span>
              </div>

              {/* Quick stats row */}
              <div className="flex flex-wrap gap-4">
                {project.totalArea && (
                  <div className="flex flex-col">
                    <span className="text-white/40 text-[10px] uppercase tracking-widest mb-0.5">Total Area</span>
                    <span className="text-white font-semibold text-sm">{project.totalArea}</span>
                  </div>
                )}
                {project.towers && (
                  <div className="flex flex-col border-l border-white/10 pl-4">
                    <span className="text-white/40 text-[10px] uppercase tracking-widest mb-0.5">Towers</span>
                    <span className="text-white font-semibold text-sm">{project.towers}</span>
                  </div>
                )}
                {project.totalUnits && (
                  <div className="flex flex-col border-l border-white/10 pl-4">
                    <span className="text-white/40 text-[10px] uppercase tracking-widest mb-0.5">Units</span>
                    <span className="text-white font-semibold text-sm">{project.totalUnits}</span>
                  </div>
                )}
                <div className={`flex flex-col ${(project.totalArea || project.towers || project.totalUnits) ? "border-l border-white/10 pl-4" : ""}`}>
                  <span className="text-white/40 text-[10px] uppercase tracking-widest mb-0.5">Status</span>
                  <span className="text-[#FF5C00] font-semibold text-sm">{project.status}</span>
                </div>
              </div>

              {/* Divider */}
              <div className="mt-8 flex items-center gap-3">
                <div className="h-[2px] w-10 bg-[#FF5C00]" />
                <span className="text-white/30 text-[11px] uppercase tracking-widest">by {project.developer}</span>
              </div>
            </div>

            {/* RIGHT — Project Image */}
            <div className="lg:w-1/2 relative min-h-[260px] sm:min-h-[360px] lg:min-h-[520px]">
              {/* Diagonal clip on left edge for large screens */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={imgError ? "/Projects.jpg" : project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                  onError={() => setImgError(true)}
                />
                {/* Overlay gradient on left side to blend with dark bg */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-transparent to-transparent lg:block hidden" style={{ width: "30%" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent" />
              </div>
            </div>

          </div>
        </div>

        {/* Bottom gradient bleed */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#111111] to-transparent pointer-events-none" />
      </div>

      {/* ── STATS BAR ───────────────────────────────────────────── */}
      <div className="bg-[#111111] border-t border-white/5">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 divide-y sm:divide-y-0 divide-x-0 sm:divide-x divide-white/10">
            {stats.map((s, i) => (
              <div key={i} className="py-5 px-4 flex flex-col gap-1 group hover:bg-white/3 transition-colors">
                <div className="flex items-center gap-2 text-white/40 text-[10px] uppercase tracking-widest mb-0.5">
                  <span className="text-[#FF5C00]">{s.icon}</span>
                  {s.label}
                </div>
                <p className={`font-bold text-sm leading-snug ${i === 0 ? "text-[#FF5C00]" : "text-white"}`}>
                  {s.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ────────────────────────────────────────── */}
      <div className="bg-white">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 py-14 grid lg:grid-cols-3 gap-10 xl:gap-16">

          {/* ── LEFT COLUMN ── */}
          <div className="lg:col-span-2 space-y-12">

            {/* Overview */}
            <section>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-6 w-1 bg-[#FF5C00] rounded-full" />
                <h2 className="text-2xl font-bold text-[#111111]" style={{ fontFamily: '"Playfair Display", serif' }}>
                  Overview
                </h2>
              </div>
              <p className="text-[#444444] leading-relaxed text-[15px]">{project.overview}</p>
            </section>

            {/* Configurations */}
            <section>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-6 w-1 bg-[#FF5C00] rounded-full" />
                <h2 className="text-2xl font-bold text-[#111111]" style={{ fontFamily: '"Playfair Display", serif' }}>
                  Configurations
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.configurations.map((c, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-4 py-2.5 border border-zinc-200 bg-[#FAFAFA] text-sm font-semibold text-[#111111] hover:border-[#FF5C00] hover:text-[#FF5C00] transition-colors"
                  >
                    <Home className="w-4 h-4 text-[#FF5C00]" />
                    {c}
                  </div>
                ))}
              </div>
            </section>

            {/* Highlights */}
            <section>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-6 w-1 bg-[#FF5C00] rounded-full" />
                <h2 className="text-2xl font-bold text-[#111111]" style={{ fontFamily: '"Playfair Display", serif' }}>
                  Highlights
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {project.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 border border-zinc-100 bg-[#FAFAFA] hover:border-[#FF5C00]/30 hover:bg-[#FFF8F5] transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#FF5C00] flex-shrink-0 mt-0.5" />
                    <span className="text-[#333333] text-sm leading-snug">{h}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Amenities */}
            <section>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-6 w-1 bg-[#FF5C00] rounded-full" />
                <h2 className="text-2xl font-bold text-[#111111]" style={{ fontFamily: '"Playfair Display", serif' }}>
                  Amenities
                </h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.amenities.map((a, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 p-3.5 border border-zinc-100 bg-[#FAFAFA] text-sm text-[#333333] hover:border-[#FF5C00]/30 hover:text-[#FF5C00] transition-colors group"
                  >
                    <Star className="w-4 h-4 text-[#FF5C00] flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="leading-snug">{a}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Floor Plans */}
            {project.floorPlans && project.floorPlans.length > 0 && (
              <section id="floor-plans">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-6 w-1 bg-[#FF5C00] rounded-full" />
                  <h2 className="text-2xl font-bold text-[#111111]" style={{ fontFamily: '"Playfair Display", serif' }}>
                    Floor Plans
                  </h2>
                </div>
                <div className={`grid gap-4 ${project.floorPlans.length === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
                  {project.floorPlans.map((fp, i) => (
                    <div key={i} className="group relative aspect-[4/3] bg-zinc-100 border border-zinc-200 overflow-hidden cursor-zoom-in">
                      <Image
                        src={fp}
                        alt={`${project.title} Floor Plan ${i + 1}`}
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-w-[768px]) 100vw, 400px"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                      <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm border border-zinc-200 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#111111] opacity-0 group-hover:opacity-100 transition-opacity">
                        Plan {i + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Location Advantages */}
            <section>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-6 w-1 bg-[#FF5C00] rounded-full" />
                <h2 className="text-2xl font-bold text-[#111111]" style={{ fontFamily: '"Playfair Display", serif' }}>
                  Location Advantages
                </h2>
              </div>
              <div className="divide-y divide-zinc-100 border border-zinc-100">
                {project.locationAdvantages.map((l, i) => (
                  <div key={i} className="flex items-start gap-3 px-5 py-4 hover:bg-[#FFF8F5] transition-colors">
                    <MapPin className="w-4 h-4 text-[#FF5C00] flex-shrink-0 mt-0.5" />
                    <span className="text-[#333333] text-sm leading-snug">{l}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Back link */}
            <div>
              <Link
                href="/new-projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#6B6B6B] hover:text-[#FF5C00] transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                Back to All Projects
              </Link>
            </div>

          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="space-y-6">

            {/* Sidebar content */}
            <div className="space-y-6">

              {/* Enquiry Form Card */}
              <div className="border border-zinc-200 shadow-lg bg-white overflow-hidden">
                {/* Card Header */}
                <div className="bg-gradient-to-r from-[#111111] to-[#1a1a1a] px-5 py-5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-28 h-28 bg-[#FF5C00]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                  <h3
                    className="text-white font-bold text-lg leading-tight relative z-10"
                    style={{ fontFamily: '"Playfair Display", serif' }}
                  >
                    Enquire About This Project
                  </h3>
                  <p className="text-zinc-400 text-[12px] mt-1 relative z-10">
                    Get pricing, floor plans & site visit details
                  </p>
                  <div className="flex items-center gap-2 mt-3 relative z-10">
                    <div className="h-[2px] w-8 bg-[#FF5C00]" />
                    <span className="text-[#FF5C00] text-[11px] font-bold uppercase tracking-widest">{project.title}</span>
                  </div>
                </div>
                {/* Form */}
                <div className="p-5">
                  <EnquiryForm projectTitle={project.title} />
                </div>
              </div>

              {/* Call CTA */}
              <div className="bg-gradient-to-r from-[#FF5C00] to-[#cc4a00] text-white p-5 text-center">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <p className="text-white/80 text-xs uppercase tracking-widest mb-1">Call Our Sales Team</p>
                <a
                  href="tel:+919220034416"
                  className="font-bold text-lg block hover:underline"
                >
                  +91 92200 34416
                </a>
                <p className="text-white/60 text-[11px] mt-1">Mon–Sat, 9 AM – 8 PM</p>
              </div>

              {/* RERA info if available */}
              {project.rera && (
                <div className="border border-zinc-200 p-4 text-center bg-[#FAFAFA]">
                  <p className="text-[11px] text-[#6B6B6B] uppercase tracking-widest font-semibold mb-1">RERA Registered</p>
                  <p className="text-[#111111] font-mono font-bold text-sm">{project.rera}</p>
                  <p className="text-[11px] text-[#6B6B6B] mt-1">Buyer protection assured</p>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>

      {/* ── BOTTOM CTA STRIP ────────────────────────────────────── */}
      <section className="bg-[#111111] py-14">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-[#FF5C00] text-[11px] uppercase tracking-widest font-bold mb-2">Limited Time Offer</p>
            <h2
              className="text-2xl sm:text-3xl font-bold text-white"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Interested in <span className="text-[#FF5C00]">{project.title}</span>?
            </h2>
            <p className="text-white/50 mt-2 text-sm">Contact us for best deals, floor plans, and exclusive site visits.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+919220034416"
              className="flex items-center gap-2 px-6 py-3 bg-[#FF5C00] text-white text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#111111] transition-all duration-300"
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <Link
              href="/new-projects"
              className="flex items-center gap-2 px-6 py-3 border border-white/30 text-white text-sm font-bold uppercase tracking-widest hover:border-[#FF5C00] hover:text-[#FF5C00] transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" /> All Projects
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}