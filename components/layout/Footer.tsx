"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";

// Quora SVG icon
function QuoraIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c1.79 0 3.488-.393 5.009-1.096l.007.004 1.982 2.287A1.5 1.5 0 0 0 20.25 24H22.5a1.5 1.5 0 0 0 1.149-2.461l-2.028-2.34A11.95 11.95 0 0 0 24 12C24 5.373 18.627 0 12 0Zm3.687 18.676c-.683-1.17-1.476-2.32-2.671-2.32-.404 0-.808.097-1.126.3l-.836-1.453c.59-.405 1.38-.63 2.25-.63 1.62 0 2.834.875 3.734 2.17A9.5 9.5 0 0 1 12 21.5a9.5 9.5 0 0 1-9.5-9.5 9.5 9.5 0 0 1 9.5-9.5 9.5 9.5 0 0 1 9.5 9.5 9.465 9.465 0 0 1-3.813 7.676Z" />
    </svg>
  );
}

// WhatsApp SVG icon
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.132 6.744 3.052 9.38L1.056 31.2l6.076-1.952A15.913 15.913 0 0 0 16.004 32C24.828 32 32 24.824 32 16S24.828 0 16.004 0Zm9.424 22.604c-.396 1.116-2.312 2.132-3.228 2.268-.916.136-1.768.388-5.952-1.244-5.044-1.968-8.28-7.108-8.528-7.436-.248-.328-2.04-2.716-2.04-5.18 0-2.464 1.292-3.672 1.748-4.172.46-.5.996-.624 1.328-.624.332 0 .664.004.956.016.308.012.72-.116 1.124.86.408.984 1.392 3.396 1.512 3.644.12.248.2.54.04.868-.16.332-.24.536-.48.828-.24.288-.504.644-.72.868-.24.248-.492.516-.208.996.28.484 1.256 2.072 2.696 3.356 1.856 1.652 3.42 2.164 3.9 2.408.484.248.764.208 1.044-.124.284-.332 1.208-1.408 1.528-1.892.324-.484.644-.4 1.088-.24.44.16 2.808 1.324 3.288 1.564.48.244.8.364.916.564.116.196.116 1.152-.28 2.272Z" />
    </svg>
  );
}

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Career", href: "/career" },
  { label: "Gallery", href: "/gallery" },
  { label: "New Projects", href: "/new-projects" },
  { label: "Resale Projects", href: "/resale-projects" },
  { label: "Contact Us", href: "/#contact" },
];

const SOCIAL_LINKS = [
  { href: "https://www.instagram.com/", label: "Instagram", icon: <Instagram className="w-4 h-4" /> },
  { href: "https://www.facebook.com/photo/?fbid=122133194294886025&set=a.122110298894886025", label: "Facebook", icon: <Facebook className="w-4 h-4" /> },
  { href: "https://x.com/R17516Edistone", label: "X (Twitter)", icon: <Twitter className="w-4 h-4" /> },
  { href: "https://www.youtube.com/", label: "YouTube", icon: <Youtube className="w-4 h-4" /> },
  { href: "https://www.linkedin.com/", label: "LinkedIn", icon: <Linkedin className="w-4 h-4" /> },
  { href: "https://www.quora.com/", label: "Quora", icon: <QuoraIcon className="w-4 h-4" /> },
  { href: "https://wa.me/919220034418", label: "WhatsApp", icon: <WhatsAppIcon className="w-4 h-4" /> },
];

export default function Footer() {
  return (
    <>
      <footer className="w-full bg-[#0A0D14] pt-16 pb-12 shrink-0 font-sans text-sm">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-8 pb-12 border-b border-white/10">

            {/* Column 1: Brand Info & Socials */}
            <div className="flex flex-col">
              <Link href="/" className="inline-block relative mb-6">
                <img src="/logo.svg" alt="Edistone Real Estates" className="h-10 sm:h-12 w-auto object-contain brightness-0 invert opacity-90" />
              </Link>
              <p className="text-[#848A9A] leading-relaxed mb-8 text-[13px]">
                Synonymous with quality and trust in the NCR real estate market. Creating landmarks that redefine residential, commercial, and industrial living.
              </p>

              {/* Social Icons */}
              <div className="flex flex-wrap gap-2">
                {SOCIAL_LINKS.map(({ href, label, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-full bg-[#181C25] flex items-center justify-center text-zinc-400 hover:bg-[#C8A24D] hover:text-white transition-all"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="flex flex-col">
              <h4 className="text-white text-[13px] font-bold tracking-widest uppercase mb-8">
                QUICK LINKS
              </h4>
              <div className="flex flex-col gap-3 text-[#848A9A]">
                {QUICK_LINKS.map(({ label, href }) => (
                  <Link key={label} href={href} className="hover:text-[#C8A24D] transition-colors w-max text-[13px]">
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 3: Our Services */}
            <div className="flex flex-col">
              <h4 className="text-white text-[13px] font-bold tracking-widest uppercase mb-8">
                OUR SERVICES
              </h4>
              <div className="flex flex-col gap-5 text-[#848A9A]">
                <div>
                  <p className="text-white text-[12px] font-semibold uppercase tracking-wide mb-1">Residential</p>
                  <p className="text-[12px] leading-relaxed">Premium 2/3/4 BHK apartments, villas &amp; plots across NCR. Transparent deals, end-to-end support.</p>
                </div>
                <div>
                  <p className="text-white text-[12px] font-semibold uppercase tracking-wide mb-1">Commercial</p>
                  <p className="text-[12px] leading-relaxed">Retail shops, office suites &amp; commercial complexes. High-ROI assets in prime locations.</p>
                </div>
                <div>
                  <p className="text-white text-[12px] font-semibold uppercase tracking-wide mb-1">Industrial</p>
                  <p className="text-[12px] leading-relaxed">UPSIDA-approved factory sheds, warehouses &amp; industrial land. Built for scale and compliance.</p>
                </div>
              </div>
            </div>

            {/* Column 3: Corporate Office */}
            <div className="flex flex-col">
              <h4 className="text-white text-[13px] font-bold tracking-widest uppercase mb-8">
                CORPORATE OFFICE
              </h4>
              <div className="flex flex-col gap-6 text-[#848A9A]">
                <div className="flex gap-4">
                  <MapPin className="w-4 h-4 text-[#C8A24D] shrink-0 mt-1" />
                  <p className="leading-relaxed text-[13px]">
                    Office No 626, Sixth Floor,<br />
                    Aditya High Street NH 24,<br />
                    Lal Kuan, Ghaziabad,<br />
                    Uttar Pradesh 201009
                  </p>
                </div>
                <div className="flex gap-4">
                  <Phone className="w-4 h-4 text-[#C8A24D] shrink-0 mt-1" />
                  <div className="flex flex-col gap-1 text-[13px]">
                    <a href="tel:+919220034414" className="hover:text-white transition-colors">+91 9220034414</a>
                    <a href="tel:01202989566" className="hover:text-white transition-colors">0120 2989566</a>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <Mail className="w-4 h-4 text-[#C8A24D] shrink-0" />
                  <a href="mailto:info@edistonerealestates.com" className="hover:text-white transition-colors text-[13px] break-all">
                    info@edistonerealestates.com
                  </a>
                </div>
              </div>
            </div>

            {/* Column 4: Sales Team */}
            <div className="flex flex-col">
              <h4 className="text-white text-[13px] font-bold tracking-widest uppercase mb-8">
                SALES TEAM
              </h4>
              <div className="flex flex-col gap-6 text-[#848A9A]">
                <div className="flex gap-4">
                  <Phone className="w-4 h-4 text-[#C8A24D] shrink-0 mt-1" />
                  <div className="flex flex-col gap-1 text-[13px]">
                    <a href="tel:+919220034418" className="hover:text-white transition-colors">+91 92200 34418</a>
                    <a href="tel:+919220034416" className="hover:text-white transition-colors">+91 92200 34416</a>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <Mail className="w-4 h-4 text-[#C8A24D] shrink-0" />
                  <a href="mailto:info@edistonerealestates.com" className="hover:text-white transition-colors text-[13px] break-all">
                    info@edistonerealestates.com
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#55596A] text-[12px]">
            <p>© {new Date().getFullYear()} Edistone Real Estates Pvt. Ltd. All rights reserved.</p>
            <p>Designed with trust &amp; precision.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919220034418"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 sm:bottom-8 right-4 sm:right-8 w-[60px] h-[60px] bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300 z-40 border-[3px] border-white/20"
      >
        <svg viewBox="0 0 32 32" className="w-8 h-8" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.132 6.744 3.052 9.38L1.056 31.2l6.076-1.952A15.913 15.913 0 0 0 16.004 32C24.828 32 32 24.824 32 16S24.828 0 16.004 0Zm9.424 22.604c-.396 1.116-2.312 2.132-3.228 2.268-.916.136-1.768.388-5.952-1.244-5.044-1.968-8.28-7.108-8.528-7.436-.248-.328-2.04-2.716-2.04-5.18 0-2.464 1.292-3.672 1.748-4.172.46-.5.996-.624 1.328-.624.332 0 .664.004.956.016.308.012.72-.116 1.124.86.408.984 1.392 3.396 1.512 3.644.12.248.2.54.04.868-.16.332-.24.536-.48.828-.24.288-.504.644-.72.868-.24.248-.492.516-.208.996.28.484 1.256 2.072 2.696 3.356 1.856 1.652 3.42 2.164 3.9 2.408.484.248.764.208 1.044-.124.284-.332 1.208-1.408 1.528-1.892.324-.484.644-.4 1.088-.24.44.16 2.808 1.324 3.288 1.564.48.244.8.364.916.564.116.196.116 1.152-.28 2.272Z" />
        </svg>
      </a>
    </>
  );
}
