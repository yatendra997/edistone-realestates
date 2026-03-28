"use client";

import { Phone } from "lucide-react";

// Colored Social Icons as inline SVGs (now theme-matched)
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path fill="currentColor" d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.132 6.744 3.052 9.38L1.056 31.2l6.076-1.952A15.913 15.913 0 0 0 16.004 32C24.828 32 32 24.824 32 16S24.828 0 16.004 0Zm9.424 22.604c-.396 1.116-2.312 2.132-3.228 2.268-.916.136-1.768.388-5.952-1.244-5.044-1.968-8.28-7.108-8.528-7.436-.248-.328-2.04-2.716-2.04-5.18 0-2.464 1.292-3.672 1.748-4.172.46-.5.996-.624 1.328-.624.332 0 .664.004.956.016.308.012.72-.116 1.124.86.408.984 1.392 3.396 1.512 3.644.12.248.2.54.04.868-.16.332-.24.536-.48.828-.24.288-.504.644-.72.868-.24.248-.492.516-.208.996.28.484 1.256 2.072 2.696 3.356 1.856 1.652 3.42 2.164 3.9 2.408.484.248.764.208 1.044-.124.284-.332 1.208-1.408 1.528-1.892.324-.484.644-.4 1.088-.24.44.16 2.808 1.324 3.288 1.564.48.244.8.364.916.564.116.196.116 1.152-.28 2.272Z"/>
    </svg>
  );
}

function QuoraIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c1.79 0 3.488-.393 5.009-1.096l.007.004 1.982 2.287A1.5 1.5 0 0 0 20.25 24H22.5a1.5 1.5 0 0 0 1.149-2.461l-2.028-2.34A11.95 11.95 0 0 0 24 12C24 5.373 18.627 0 12 0Zm3.687 18.676c-.683-1.17-1.476-2.32-2.671-2.32-.404 0-.808.097-1.126.3l-.836-1.453c.59-.405 1.38-.63 2.25-.63 1.62 0 2.834.875 3.734 2.17A9.5 9.5 0 0 1 12 21.5a9.5 9.5 0 0 1-9.5-9.5 9.5 9.5 0 0 1 9.5-9.5 9.5 9.5 0 0 1 9.5 9.5 9.465 9.465 0 0 1-3.813 7.676Z"/>
    </svg>
  );
}

export default function TopBar() {
  return (
    <div className="w-full h-9 bg-[#111111] text-zinc-300 flex items-center justify-between px-4 sm:px-8 text-[11px] sm:text-xs shrink-0 font-medium">
      {/* Sales Phone Number */}
      <a href="tel:+919220034416" className="flex items-center gap-2 hover:text-[#E3C67A] transition-colors">
        <Phone className="w-3.5 h-3.5" />
        <span className="tracking-wide hidden sm:inline">Sales: +91 92200 34416 / +91 92200 34418</span>
        <span className="tracking-wide sm:hidden">+91 92200 34416</span>
      </a>

      {/* Social Media Links */}
      <div className="flex items-center gap-3 sm:gap-4">
        <span className="hidden sm:inline-block text-zinc-500 text-[10px] uppercase tracking-wider">Follow Us:</span>

        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
          className="text-zinc-400 hover:text-[#FF5C00] transition-all hover:scale-110 duration-200">
          <InstagramIcon className="w-3.5 h-3.5" />
        </a>
        <a href="https://www.facebook.com/photo/?fbid=122133194294886025&set=a.122110298894886025" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
          className="text-zinc-400 hover:text-[#FF5C00] transition-all hover:scale-110 duration-200">
          <FacebookIcon className="w-3.5 h-3.5" />
        </a>
        <a href="https://x.com/R17516Edistone" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"
          className="text-zinc-400 hover:text-[#FF5C00] transition-all hover:scale-110 duration-200">
          <XIcon className="w-3.5 h-3.5" />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
          className="text-zinc-400 hover:text-[#FF5C00] transition-all hover:scale-110 duration-200">
          <YoutubeIcon className="w-3.5 h-3.5" />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
          className="text-zinc-400 hover:text-[#FF5C00] transition-all hover:scale-110 duration-200">
          <LinkedInIcon className="w-3.5 h-3.5" />
        </a>
        <a href="https://www.quora.com/" target="_blank" rel="noopener noreferrer" aria-label="Quora"
          className="text-zinc-400 hover:text-[#FF5C00] transition-all hover:scale-110 duration-200">
          <QuoraIcon className="w-3.5 h-3.5" />
        </a>
        <a href="https://wa.me/919220034416" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
          className="text-zinc-400 hover:text-[#FF5C00] transition-all hover:scale-110 duration-200">
          <WhatsAppIcon className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
