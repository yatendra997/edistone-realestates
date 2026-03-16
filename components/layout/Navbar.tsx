"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface NavItem {
  title: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/#about" },
  { title: "Career", href: "/career" },
  { title: "Gallery", href: "/gallery" },
  { title: "New Projects", href: "/new-projects" },
  { title: "Resale Projects", href: "/resale-projects" },
  { title: "Contact Us", href: "/#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
  }, [mobileMenuOpen]);

  return (
    <nav
      className={`w-full sticky top-0 z-[100] transition-all duration-300 border-b border-zinc-200 shrink-0 ${
        isScrolled ? "bg-white shadow-md py-1" : "bg-white py-2"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">

        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <Link href="/" className="inline-block relative">
            <img
              src="/logo.svg"
              alt="Edistone Real Estates"
              className={`w-auto object-contain transition-all duration-300 ${
                isScrolled ? "h-10 sm:h-11" : "h-11 sm:h-12 lg:h-14"
              }`}
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="px-3 py-2 text-[13px] font-semibold text-zinc-700 hover:text-[#E3C67A] transition-colors uppercase tracking-wide whitespace-nowrap"
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#C8A24D]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay / Drawer */}
      <div
        className={`fixed inset-0 bg-black/50 z-[150] lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 w-[280px] h-full bg-white shadow-2xl transition-transform duration-300 overflow-y-auto ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-4 border-b border-zinc-100">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <img src="/logo.svg" alt="Edistone Real Estates" className="h-9 w-auto object-contain" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-zinc-500 hover:text-zinc-800"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Drawer Nav Links */}
          <nav className="flex flex-col py-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-4 text-sm font-semibold text-zinc-800 hover:bg-zinc-50 hover:text-[#C8A24D] transition-colors uppercase tracking-wide border-b border-zinc-50 last:border-0"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div className="px-6 pt-2 pb-8">
            <a
              href="tel:+919220034418"
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#C8A24D] text-white text-sm font-semibold rounded-lg hover:bg-[#b8913d] transition-colors"
            >
              Call Sales: +91 92200 34418
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
