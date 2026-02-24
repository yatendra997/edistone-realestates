"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

interface SubDropdownItem {
    title: string;
    href: string;
}

interface DropdownItem {
    title: string;
    href: string;
    subDropdown?: SubDropdownItem[];
}

interface NavItem {
    title: string;
    href: string;
    dropdown?: DropdownItem[];
}

// Nav data structure matching the reference site
const NAV_ITEMS: NavItem[] = [
    {
        title: "Corporate",
        href: "#",
        dropdown: [
            { title: "Overview", href: "#" },
            { title: "Management", href: "#" },
            { title: "Our Journey", href: "#" },
            { title: "Vision & Mission", href: "#" },
            { title: "Group Companies", href: "#" },
            { title: "Our Verticals", href: "#" },
            { title: "CSR", href: "#" },
            { title: "Events", href: "#" },
            { title: "Awards", href: "#" },
            { title: "Investors", href: "#" },
        ],
    },
    {
        title: "Projects",
        href: "#",
        dropdown: [
            {
                title: "Ongoing",
                href: "#",
                subDropdown: [
                    { title: "Residential", href: "#" },
                    { title: "Premium", href: "#" },
                    { title: "Commercial", href: "#" },
                    { title: "Retail", href: "#" },
                    { title: "Township", href: "#" },
                    { title: "Luxury", href: "#" },
                ],
            },
            {
                title: "Completed",
                href: "#",
                subDropdown: [
                    { title: "Units Available", href: "#" },
                    { title: "Delivered", href: "#" },
                ],
            },
        ],
    },
    { title: "Our Hotels", href: "#" },
    { title: "Malls", href: "#" },
    { title: "Education", href: "#" },
    {
        title: "Media",
        href: "#",
        dropdown: [
            { title: "Media Campaign", href: "#" },
            { title: "Press Coverages", href: "#" },
            { title: "Newsletters", href: "#" },
            { title: "Videos", href: "#" },
        ],
    },
    {
        title: "Buyers",
        href: "#",
        dropdown: [
            { title: "Buyers Zone", href: "#" },
            { title: "My Gaur App", href: "#" },
        ],
    },
    { title: "Careers", href: "#" },
    { title: "Contact Us", href: "#" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);
    const [activeMobileSubMenu, setActiveMobileSubMenu] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent background scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [mobileMenuOpen]);

    const toggleMobileMenu = (title: string) => {
        if (activeMobileMenu === title) {
            setActiveMobileMenu(null);
            setActiveMobileSubMenu(null);
        } else {
            setActiveMobileMenu(title);
            setActiveMobileSubMenu(null);
        }
    };

    const toggleMobileSubMenu = (title: string, e: React.MouseEvent) => {
        e.stopPropagation();
        setActiveMobileSubMenu(activeMobileSubMenu === title ? null : title);
    };

    return (
        <nav
            className={`w-full sticky top-0 z-[100] transition-all duration-300 border-b border-zinc-200 shrink-0 ${isScrolled ? "bg-white shadow-md py-1" : "bg-white py-2"
                }`}
        >
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
                {/* Logo */}
                <div className="flex-shrink-0 flex items-center">
                    <Link href="/" className="inline-block relative">
                        <img src="/logo.svg" alt="Edistone Logo" className={`w-auto object-contain transition-all duration-300 ${isScrolled ? "h-10 sm:h-11" : "h-11 sm:h-12 lg:h-14"}`} />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden xl:flex items-center space-x-1">
                    {NAV_ITEMS.map((item) => (
                        <div key={item.title} className="relative group">
                            <Link
                                href={item.href}
                                className="flex items-center px-3 py-2 text-[13px] font-semibold text-zinc-700 hover:text-[#E3C67A] transition-colors uppercase gap-1"
                            >
                                {item.title}
                                {item.dropdown && <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />}
                            </Link>

                            {/* First Level Dropdown */}
                            {item.dropdown && (
                                <div className="absolute top-full left-0 w-56 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[110]">
                                    <div className="bg-white border-t-2 border-[#C8A24D] shadow-xl py-2 flex flex-col">
                                        {item.dropdown.map((dropItem) => (
                                            <div key={dropItem.title} className="relative group/sub">
                                                <Link
                                                    href={dropItem.href}
                                                    className="flex items-center justify-between px-4 py-2.5 text-sm text-[#6B6B6B] hover:bg-zinc-50 hover:text-[#E3C67A] transition-colors"
                                                >
                                                    {dropItem.title}
                                                    {dropItem.subDropdown && <ChevronRight className="w-3 h-3" />}
                                                </Link>

                                                {/* Second Level Dropdown */}
                                                {dropItem.subDropdown && (
                                                    <div className="absolute top-0 left-full w-56 pl-1 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 z-[120]">
                                                        <div className="bg-white border-t-2 border-[#C8A24D] shadow-xl py-2 flex flex-col">
                                                            {dropItem.subDropdown.map((subItem) => (
                                                                <Link
                                                                    key={subItem.title}
                                                                    href={subItem.href}
                                                                    className="block px-4 py-2.5 text-sm text-[#6B6B6B] hover:bg-zinc-50 hover:text-[#E3C67A] transition-colors"
                                                                >
                                                                    {subItem.title}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Mobile menu button */}
                <div className="xl:hidden flex items-center">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 rounded-md text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#C8A24D]"
                    >
                        <span className="sr-only">Open main menu</span>
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
                className={`fixed inset-0 bg-black/50 z-[150] xl:hidden transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={() => setMobileMenuOpen(false)}
            >
                <div
                    className={`fixed top-0 right-0 w-[300px] h-full bg-white shadow-2xl transition-transform duration-300 overflow-y-auto ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex items-center justify-between p-4 border-b border-zinc-100">
                        <span className="font-bold text-lg uppercase">Menu</span>
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="p-2 text-[#6B6B6B] hover:text-zinc-800"
                        >
                            <X className="h-6 w-6" />
                        </button>
                    </div>

                    <div className="flex flex-col py-2">
                        {NAV_ITEMS.map((item) => (
                            <div key={item.title} className="flex flex-col border-b border-zinc-50 last:border-0">
                                <div
                                    className="flex items-center justify-between px-6 py-4 cursor-pointer text-zinc-800 hover:bg-zinc-50 transition-colors uppercase text-sm font-semibold"
                                    onClick={() => (item.dropdown ? toggleMobileMenu(item.title) : undefined)}
                                >
                                    <Link
                                        href={item.href}
                                        className="flex-1"
                                        onClick={(e) => {
                                            if (item.dropdown) e.preventDefault();
                                            else setMobileMenuOpen(false);
                                        }}
                                    >
                                        {item.title}
                                    </Link>
                                    {item.dropdown && (
                                        <ChevronDown
                                            className={`w-4 h-4 text-zinc-400 transition-transform ${activeMobileMenu === item.title ? "rotate-180" : ""
                                                }`}
                                        />
                                    )}
                                </div>

                                {/* Mobile First Level Dropdown */}
                                {item.dropdown && (
                                    <div
                                        className={`bg-zinc-50 overflow-hidden transition-all duration-300 ${activeMobileMenu === item.title ? "max-h-[1000px] py-2" : "max-h-0"
                                            }`}
                                    >
                                        {item.dropdown.map((dropItem) => (
                                            <div key={dropItem.title} className="flex flex-col">
                                                <div
                                                    className="flex items-center justify-between pl-10 pr-6 py-3 cursor-pointer text-[#6B6B6B] hover:text-zinc-900 text-sm"
                                                    onClick={(e) => (dropItem.subDropdown ? toggleMobileSubMenu(dropItem.title, e) : undefined)}
                                                >
                                                    <Link
                                                        href={dropItem.href}
                                                        className="flex-1"
                                                        onClick={(e) => {
                                                            if (dropItem.subDropdown) e.preventDefault();
                                                            else setMobileMenuOpen(false);
                                                        }}
                                                    >
                                                        {dropItem.title}
                                                    </Link>
                                                    {dropItem.subDropdown && (
                                                        <ChevronDown
                                                            className={`w-4 h-4 transition-transform ${activeMobileSubMenu === dropItem.title ? "rotate-180" : ""
                                                                }`}
                                                        />
                                                    )}
                                                </div>

                                                {/* Mobile Second Level Dropdown */}
                                                {dropItem.subDropdown && (
                                                    <div
                                                        className={`bg-zinc-100 overflow-hidden transition-all duration-300 ${activeMobileSubMenu === dropItem.title ? "max-h-[500px] py-1" : "max-h-0"
                                                            }`}
                                                    >
                                                        {dropItem.subDropdown.map((subItem) => (
                                                            <Link
                                                                key={subItem.title}
                                                                href={subItem.href}
                                                                onClick={() => setMobileMenuOpen(false)}
                                                                className="block pl-14 pr-6 py-2.5 text-sm text-[#6B6B6B] hover:text-zinc-900"
                                                            >
                                                                {subItem.title}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
