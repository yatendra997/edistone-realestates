"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <>
            <footer className="w-full bg-[#0A0D14] pt-16 pb-12 shrink-0 font-sans text-sm">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8 lg:gap-16 pb-12">

                        {/* Column 1: Brand Info & Socials */}
                        <div className="flex flex-col">
                            <Link href="/" className="inline-block relative mb-8">
                                <img src="/logo.svg" alt="Edistone Logo" className="h-10 sm:h-12 w-auto object-contain brightness-0 invert opacity-90" />
                            </Link>
                            <p className="text-[#848A9A] leading-relaxed mb-8">
                                Synonymous with quality and trust in the Ghaziabad real estate market. Creating landmarks that redefine commercial and residential living.
                            </p>

                            {/* Social Icons */}
                            <div className="flex gap-3">
                                <a href="#" className="w-9 h-9 rounded-full bg-[#181C25] flex items-center justify-center text-zinc-400 hover:bg-[#C8A24D] hover:text-white transition-all">
                                    <Facebook className="w-4 h-4" />
                                </a>
                                <a href="#" className="w-9 h-9 rounded-full bg-[#181C25] flex items-center justify-center text-zinc-400 hover:bg-[#C8A24D] hover:text-white transition-all">
                                    <Instagram className="w-4 h-4" />
                                </a>
                                <a href="#" className="w-9 h-9 rounded-full bg-[#181C25] flex items-center justify-center text-zinc-400 hover:bg-[#C8A24D] hover:text-white transition-all">
                                    <Linkedin className="w-4 h-4" />
                                </a>
                                <a href="#" className="w-9 h-9 rounded-full bg-[#181C25] flex items-center justify-center text-zinc-400 hover:bg-[#C8A24D] hover:text-white transition-all">
                                    <Youtube className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        {/* Column 2: Quick Links */}
                        <div className="flex flex-col">
                            <h4 className="text-white text-[13px] font-bold tracking-widest uppercase mb-8">
                                QUICK LINKS
                            </h4>
                            <div className="flex flex-col gap-4 text-[#848A9A]">
                                {['Home', 'About Project', 'Floor Plans', 'Gallery', 'Amenities', 'Contact'].map((link) => (
                                    <Link key={link} href="#" className="hover:text-[#C8A24D] transition-colors w-max">
                                        {link}
                                    </Link>
                                ))}
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
                                        Ghaziabad, Uttar Pradesh 201009
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    <Phone className="w-4 h-4 text-[#C8A24D] shrink-0 mt-1" />
                                    <div className="flex flex-col gap-1 text-[13px]">
                                        <a href="tel:+919220034414" className="hover:text-white transition-colors">+91 9220034414</a>
                                        <a href="tel:01202989566" className="hover:text-white transition-colors">0120 2989566</a>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-center mt-1">
                                    <Mail className="w-4 h-4 text-[#C8A24D] shrink-0" />
                                    <a href="mailto:director@edistonerealestates.com" className="hover:text-white transition-colors text-[13px] break-all">
                                        director@edistonerealestates.com
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
                                        <a href="tel:+919220034415" className="hover:text-white transition-colors">+91 9220034415</a>
                                        <a href="tel:+919220034416" className="hover:text-white transition-colors">+91 9220034416</a>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <Mail className="w-4 h-4 text-[#C8A24D] shrink-0" />
                                    <a href="mailto:Sales@edistonerealestates.com" className="hover:text-white transition-colors text-[13px] break-all">
                                        Sales@edistonerealestates.com
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>

            {/* Floating WhatsApp Button */}
            <a
                href="https://wa.me/919220034415"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 sm:bottom-8 right-4 sm:right-8 w-[60px] h-[60px] bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300 z-40 border-[3px] border-white/20"
            >
                <svg viewBox="0 0 32 32" className="w-8 h-8" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.132 6.744 3.052 9.38L1.056 31.2l6.076-1.952A15.913 15.913 0 0 0 16.004 32C24.828 32 32 24.824 32 16S24.828 0 16.004 0Zm9.424 22.604c-.396 1.116-2.312 2.132-3.228 2.268-.916.136-1.768.388-5.952-1.244-5.044-1.968-8.28-7.108-8.528-7.436-.248-.328-2.04-2.716-2.04-5.18 0-2.464 1.292-3.672 1.748-4.172.46-.5.996-.624 1.328-.624.332 0 .664.004.956.016.308.012.72-.116 1.124.86.408.984 1.392 3.396 1.512 3.644.12.248.2.54.04.868-.16.332-.24.536-.48.828-.24.288-.504.644-.72.868-.24.248-.492.516-.208.996.28.484 1.256 2.072 2.696 3.356 1.856 1.652 3.42 2.164 3.9 2.408.484.248.764.208 1.044-.124.284-.332 1.208-1.408 1.528-1.892.324-.484.644-.4 1.088-.24.44.16 2.808 1.324 3.288 1.564.48.244.8.364.916.564.116.196.116 1.152-.28 2.272Z" />
                </svg>
            </a>
        </>
    );
}
