"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Calendar, Phone, Mail, Clock, MessageCircle } from "lucide-react";

interface NavItem {
  title: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/#about" },
  { title: "Career", href: "/career" },
  { title: "Gallery", href: "/gallery" },
  { title: "Projects", href: "/new-projects" },
  { title: "Contact Us", href: "/#contact" },
];

interface SiteVisitForm {
  name: string;
  email: string;
  mobile: string;
  date: string;
  time: string;
  whatsapp: boolean;
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [siteVisitOpen, setSiteVisitOpen] = useState(false);
  const [svSubmitted, setSvSubmitted] = useState(false);
  const [svForm, setSvForm] = useState<SiteVisitForm>({
    name: "", email: "", mobile: "", date: "", time: "", whatsapp: false,
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = (mobileMenuOpen || siteVisitOpen) ? "hidden" : "unset";
  }, [mobileMenuOpen, siteVisitOpen]);

  const handleSvSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSvSubmitted(true);
  };

  const closeSiteVisit = () => {
    setSiteVisitOpen(false);
    setSvSubmitted(false);
    setSvForm({ name: "", email: "", mobile: "", date: "", time: "", whatsapp: false });
  };

  return (
    <>
      <nav
        className={`w-full fixed top-0 left-0 right-0 z-[100] transition-colors duration-300 shrink-0 h-[88px] flex items-center ${
          isScrolled
            ? "bg-[#111111] shadow-xl border-b border-white/10"
            : "bg-transparent border-b border-white/10"
        }`}
      >
        <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 h-full flex items-center justify-between gap-4">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link href="/" className="inline-flex items-center gap-3 sm:gap-4 group">
              <div className="relative">
                <img
                  src="/edistone-logo.png?v=latest"
                  alt="Edistone Icon"
                  className="w-auto h-12 sm:h-14 object-contain drop-shadow-sm"
                />
              </div>
              <div className="flex flex-col leading-none justify-center mt-1">
                <span
                  className="font-bold uppercase tracking-normal text-white text-2xl sm:text-3xl"
                  style={{ fontFamily: '"Playfair Display", "Times New Roman", Times, serif' }}
                >
                  EDISTONE
                </span>
                <div className="flex items-center gap-2 mt-1 ml-0.5">
                  <div className="h-[2px] bg-[#FF5C00] w-8" />
                  <span
                    className="text-[#FF5C00] font-bold uppercase tracking-[0.25em] text-[10px] sm:text-[11px]"
                    style={{ fontFamily: '"Inter", "Arial", sans-serif' }}
                  >
                    REAL ESTATES
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 ml-auto">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="py-2 text-[11.5px] xl:text-[12.5px] font-bold text-white hover:text-[#FF5C00] relative group transition-colors uppercase tracking-widest whitespace-nowrap"
              >
                {item.title}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF5C00] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}

            {/* Book Site Visit Button */}
            <button
              onClick={() => setSiteVisitOpen(true)}
              id="book-site-visit-btn"
              className="ml-2 px-6 py-2.5 bg-[#FF5C00] text-white text-[11px] font-bold uppercase tracking-widest rounded-full shadow-md hover:shadow-lg hover:bg-white hover:text-[#111111] transition-all duration-300 whitespace-nowrap"
            >
              Book Site Visit
            </button>
          </div>

          {/* Mobile: Book Site Visit + Hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setSiteVisitOpen(true)}
              className="flex items-center gap-1.5 px-3 py-2 bg-[#FF5C00] text-white text-[10px] font-bold uppercase tracking-wider rounded-sm shadow"
            >
              <Calendar className="w-3 h-3" />
              Book Visit
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md focus:outline-none transition-colors ${isScrolled ? 'text-white hover:text-[#FF5C00] hover:bg-white/10' : 'text-white hover:bg-white/20'}`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black/50 z-[150] lg:hidden transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className={`fixed top-0 right-0 w-[300px] h-full bg-[#111111]/95 backdrop-blur-xl border-l border-white/10 shadow-2xl transition-transform duration-300 overflow-y-auto flex flex-col ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3">
                <img src="/edistone-logo.png?v=latest" alt="Edistone Icon" className="h-12 w-auto object-contain drop-shadow-sm" />
                <div className="flex flex-col leading-none justify-center mt-1">
                  <span className="font-bold uppercase tracking-normal text-white text-[30px]" style={{ fontFamily: '"Playfair Display", "Times New Roman", Times, serif' }}>
                    EDISTONE
                  </span>
                  <div className="flex items-center gap-1.5 mt-1 ml-0.5">
                    <div className="h-[2px] bg-[#FF5C00] w-8" />
                    <span className="text-[#FF5C00] font-bold uppercase tracking-[0.25em] text-[10px]" style={{ fontFamily: '"Inter", "Arial", sans-serif' }}>
                      REAL ESTATES
                    </span>
                  </div>
                </div>
              </Link>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-zinc-400 hover:text-white transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Drawer Nav Links */}
            <nav className="flex flex-col py-2 flex-grow">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-6 py-3.5 text-sm font-semibold text-zinc-300 hover:bg-white/5 hover:text-[#FF5C00] transition-colors uppercase tracking-wide border-b border-white/5 last:border-0 flex items-center justify-between group"
                >
                  {item.title}
                  <span className="w-1 h-4 bg-[#FF5C00] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </nav>

            {/* Mobile CTA */}
            <div className="px-5 pt-2 pb-6 flex flex-col gap-3 border-t border-white/10">
              <button
                onClick={() => { setMobileMenuOpen(false); setSiteVisitOpen(true); }}
                className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-[#FF5C00] to-[#cc4a00] text-white text-sm font-bold rounded-sm shadow hover:opacity-90 transition-opacity"
              >
                <Calendar className="w-4 h-4" /> Book Site Visit
              </button>
              <a
                href="tel:+919220034416"
                className="flex items-center justify-center gap-2 w-full py-3 border border-white/20 text-white text-sm font-semibold rounded-sm hover:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4" /> Call Sales Team
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Book Site Visit Modal ── */}
      {siteVisitOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-[300] flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closeSiteVisit}
        >
          <div
            className="bg-white w-full max-w-lg shadow-2xl rounded-sm overflow-hidden relative animate-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#111111] to-[#1a1a1a] px-6 py-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF5C00]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#FF5C00]/20 rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-[#FF5C00]" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg leading-tight">Book a Site Visit</h3>
                    <p className="text-zinc-400 text-xs mt-0.5">Our team will confirm your slot within 1 hour</p>
                  </div>
                </div>
                <button
                  onClick={closeSiteVisit}
                  className="p-1.5 text-zinc-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {svSubmitted ? (
              <div className="flex flex-col items-center justify-center py-16 gap-5 text-center px-8">
                <div className="w-20 h-20 rounded-full bg-[#FF5C00]/10 border-2 border-[#FF5C00]/30 flex items-center justify-center">
                  <Calendar className="w-9 h-9 text-[#FF5C00]" />
                </div>
                <h4 className="text-2xl font-bold text-[#111111]">Visit Booked!</h4>
                <p className="text-[#6B6B6B] text-[15px] leading-relaxed max-w-xs">
                  Thank you! Our sales team will call you within 1 hour to confirm your site visit.
                </p>
                <button
                  onClick={closeSiteVisit}
                  className="px-8 py-3 bg-[#FF5C00] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#111111] transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSvSubmit} className="p-6 flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold text-[#111111] uppercase tracking-wider">
                      Your Name <span className="text-[#FF5C00]">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Full name"
                      value={svForm.name}
                      onChange={(e) => setSvForm({ ...svForm, name: e.target.value })}
                      className="w-full px-4 py-3 border border-zinc-200 bg-[#FAFAFA] text-sm text-[#111111] focus:outline-none focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00]/30 transition-all"
                    />
                  </div>
                  {/* Mobile */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold text-[#111111] uppercase tracking-wider">
                      Mobile No. <span className="text-[#FF5C00]">*</span>
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+91 00000 00000"
                      value={svForm.mobile}
                      onChange={(e) => setSvForm({ ...svForm, mobile: e.target.value })}
                      className="w-full px-4 py-3 border border-zinc-200 bg-[#FAFAFA] text-sm text-[#111111] focus:outline-none focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00]/30 transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-[#111111] uppercase tracking-wider">
                    Email Address <span className="text-[#FF5C00]">*</span>
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="you@example.com"
                    value={svForm.email}
                    onChange={(e) => setSvForm({ ...svForm, email: e.target.value })}
                    className="w-full px-4 py-3 border border-zinc-200 bg-[#FAFAFA] text-sm text-[#111111] focus:outline-none focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00]/30 transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Date */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold text-[#111111] uppercase tracking-wider flex items-center gap-1.5">
                      <Calendar className="w-3 h-3 text-[#FF5C00]" /> Date of Visit <span className="text-[#FF5C00]">*</span>
                    </label>
                    <input
                      required
                      type="date"
                      value={svForm.date}
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(e) => setSvForm({ ...svForm, date: e.target.value })}
                      className="w-full px-4 py-3 border border-zinc-200 bg-[#FAFAFA] text-sm text-[#111111] focus:outline-none focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00]/30 transition-all"
                    />
                  </div>
                  {/* Time */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold text-[#111111] uppercase tracking-wider flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-[#FF5C00]" /> Time of Visit <span className="text-[#FF5C00]">*</span>
                    </label>
                    <input
                      required
                      type="time"
                      value={svForm.time}
                      onChange={(e) => setSvForm({ ...svForm, time: e.target.value })}
                      className="w-full px-4 py-3 border border-zinc-200 bg-[#FAFAFA] text-sm text-[#111111] focus:outline-none focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00]/30 transition-all"
                    />
                  </div>
                </div>

                {/* WhatsApp Checkbox */}
                <label className="flex items-center gap-3 cursor-pointer group mt-1">
                  <div className="relative flex items-center">
                    <input
                      type="checkbox"
                      checked={svForm.whatsapp}
                      onChange={(e) => setSvForm({ ...svForm, whatsapp: e.target.checked })}
                      className="sr-only peer"
                      id="whatsapp-check"
                    />
                    <div className="w-5 h-5 border-2 border-zinc-300 peer-checked:border-[#25D366] peer-checked:bg-[#25D366] rounded transition-all flex items-center justify-center">
                      {svForm.whatsapp && <svg viewBox="0 0 12 10" className="w-3 h-3 fill-white"><path d="M1 5l3 3 7-7"/></svg>}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span className="text-sm text-[#6B6B6B] font-medium">Contact me on WhatsApp</span>
                  </div>
                </label>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-[#FF5C00] to-[#cc4a00] text-white text-sm font-bold uppercase tracking-widest hover:from-[#111111] hover:to-[#111111] transition-all duration-300 shadow-md mt-1"
                >
                  <Calendar className="w-4 h-4" /> Submit — Book My Visit
                </button>

                <p className="text-center text-[11px] text-zinc-400 flex items-center justify-center gap-1">
                  <Mail className="w-3 h-3" /> We respect your privacy. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
