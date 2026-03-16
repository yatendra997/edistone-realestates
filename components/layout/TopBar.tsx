"use client";

import { Phone, Twitter, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

// Quora SVG icon (not in lucide-react)
function QuoraIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c1.79 0 3.488-.393 5.009-1.096l.007.004 1.982 2.287A1.5 1.5 0 0 0 20.25 24H22.5a1.5 1.5 0 0 0 1.149-2.461l-2.028-2.34A11.95 11.95 0 0 0 24 12C24 5.373 18.627 0 12 0Zm3.687 18.676c-.683-1.17-1.476-2.32-2.671-2.32-.404 0-.808.097-1.126.3l-.836-1.453c.59-.405 1.38-.63 2.25-.63 1.62 0 2.834.875 3.734 2.17A9.5 9.5 0 0 1 12 21.5a9.5 9.5 0 0 1-9.5-9.5 9.5 9.5 0 0 1 9.5-9.5 9.5 9.5 0 0 1 9.5 9.5 9.465 9.465 0 0 1-3.813 7.676Z" />
    </svg>
  );
}

// WhatsApp SVG icon (not in lucide-react)
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.132 6.744 3.052 9.38L1.056 31.2l6.076-1.952A15.913 15.913 0 0 0 16.004 32C24.828 32 32 24.824 32 16S24.828 0 16.004 0Zm9.424 22.604c-.396 1.116-2.312 2.132-3.228 2.268-.916.136-1.768.388-5.952-1.244-5.044-1.968-8.28-7.108-8.528-7.436-.248-.328-2.04-2.716-2.04-5.18 0-2.464 1.292-3.672 1.748-4.172.46-.5.996-.624 1.328-.624.332 0 .664.004.956.016.308.012.72-.116 1.124.86.408.984 1.392 3.396 1.512 3.644.12.248.2.54.04.868-.16.332-.24.536-.48.828-.24.288-.504.644-.72.868-.24.248-.492.516-.208.996.28.484 1.256 2.072 2.696 3.356 1.856 1.652 3.42 2.164 3.9 2.408.484.248.764.208 1.044-.124.284-.332 1.208-1.408 1.528-1.892.324-.484.644-.4 1.088-.24.44.16 2.808 1.324 3.288 1.564.48.244.8.364.916.564.116.196.116 1.152-.28 2.272Z" />
    </svg>
  );
}

export default function TopBar() {
  return (
    <div className="w-full h-9 bg-[#111111] text-zinc-300 flex items-center justify-between px-4 sm:px-8 text-[11px] sm:text-xs shrink-0 font-medium">
      {/* Sales Phone Number */}
      <a href="tel:+919220034418" className="flex items-center gap-2 hover:text-[#E3C67A] transition-colors">
        <Phone className="w-3.5 h-3.5" />
        <span className="tracking-wide">Sales: +91 92200 34418</span>
      </a>

      {/* Social Media Links */}
      <div className="flex items-center gap-4">
        <span className="hidden sm:inline-block text-zinc-500">Follow Us:</span>

        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#E3C67A] transition-colors">
          <Instagram className="w-3.5 h-3.5" />
        </a>
        <a href="https://www.facebook.com/photo/?fbid=122133194294886025&set=a.122110298894886025" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#E3C67A] transition-colors">
          <Facebook className="w-3.5 h-3.5" />
        </a>
        <a href="https://x.com/R17516Edistone" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="hover:text-[#E3C67A] transition-colors">
          <Twitter className="w-3.5 h-3.5" />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-[#E3C67A] transition-colors">
          <Youtube className="w-3.5 h-3.5" />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[#E3C67A] transition-colors">
          <Linkedin className="w-3.5 h-3.5" />
        </a>
        <a href="https://www.quora.com/" target="_blank" rel="noopener noreferrer" aria-label="Quora" className="hover:text-[#E3C67A] transition-colors">
          <QuoraIcon className="w-3.5 h-3.5" />
        </a>
        <a href="https://wa.me/919220034418" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-[#E3C67A] transition-colors">
          <WhatsAppIcon className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
