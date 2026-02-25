"use client";

import React, { useState, useEffect } from "react";
import { Phone, MapPin, Check, CheckCircle, Send, Facebook, Instagram, Mail, Menu, X, Calendar, Navigation, PhoneCall, Zap, DoorOpen, ShieldCheck, ParkingCircle, TreePine, Banknote, Waves, ShoppingCart, Tv, PlugZap, Building2, LifeBuoy, Heart, GraduationCap, TrainFront, Plane } from "lucide-react";

export default function ResidentialPage() {
    const [scrolled, setScrolled] = useState(false);
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);
    const [showAllGallery, setShowAllGallery] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        setMobileMenuOpen(false);
        const el = document.getElementById(id);
        if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative min-h-screen bg-white font-sans text-slate-800 flex flex-col items-center">

            {/* TOP BAR (BLACK) */}
            <div className="w-full bg-black text-white text-[10px] sm:text-xs py-2 px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 z-50">
                <div className="font-bold tracking-widest uppercase sm:ml-4 text-center sm:text-left">RADHE KRISHNA !</div>
                <div className="flex flex-wrap justify-center sm:justify-end items-center gap-4 sm:gap-6 font-medium tracking-wide sm:mr-4">
                    <div className="flex items-center gap-4">
                        <a href="#" className="hover:text-[#ff5722] transition-colors uppercase">ABOUT US</a>
                        <span className="text-zinc-600 hidden xs:inline">|</span>
                        <a href="#" className="hover:text-[#ff5722] transition-colors uppercase">PROPERTIES</a>
                        <span className="text-zinc-600 hidden xs:inline">|</span>
                        <a href="#" className="hover:text-[#ff5722] transition-colors uppercase">CONTACT</a>
                    </div>
                    <div className="flex items-center gap-3">
                        <a href="#" className="hover:text-[#ff5722] transition-all"><Facebook className="w-3.5 h-3.5 fill-current" /></a>
                        <a href="#" className="hover:text-[#ff5722] transition-all"><Instagram className="w-3.5 h-3.5" /></a>
                        <a href="#" className="hover:text-[#ff5722] transition-all"><Mail className="w-3.5 h-3.5" /></a>
                    </div>
                </div>
            </div>

            {/* CORPORATE NAVBAR */}
            <nav className="w-full bg-white sticky top-0 z-[100] text-[#111111] shadow-sm border-b border-zinc-100">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-3 sm:py-4 flex justify-between items-center relative">
                    {/* Logo Area */}
                    <div className="flex flex-col tracking-tight cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                        <span className="text-2xl sm:text-3xl font-extrabold uppercase leading-none font-serif tracking-wide text-[#111111]">EDISTONE</span>
                        <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.25em] uppercase mt-1 text-[#6B6B6B]">REAL ESTATE PVT LTD</span>
                    </div>

                    {/* Links */}
                    <div className="hidden lg:flex items-center gap-8 text-[12px] font-bold tracking-widest uppercase text-zinc-700">
                        <button onClick={() => scrollTo('about')} className="hover:text-[#C8A24D] transition-colors">ABOUT</button>
                        <button onClick={() => scrollTo('amenities')} className="hover:text-[#C8A24D] transition-colors">AMENITIES</button>
                        <button onClick={() => scrollTo('gallery')} className="hover:text-[#C8A24D] transition-colors">GALLERY</button>
                        <button onClick={() => scrollTo('floor-plans')} className="hover:text-[#C8A24D] transition-colors">FLOOR PLAN</button>
                        <button onClick={() => scrollTo('location')} className="hover:text-[#C8A24D] transition-colors">LOCATION</button>
                        <button onClick={() => scrollTo('contact')} className="hover:text-[#C8A24D] transition-colors">CONTACT</button>
                    </div>

                    <div className="flex items-center gap-3 sm:gap-4">
                        {/* Call Button */}
                        <a href="tel:+919220034414" className="bg-[#C8A24D] text-white px-4 sm:px-5 py-2.5 font-bold text-[11px] sm:text-sm flex items-center justify-center gap-2 rounded shadow-sm hover:shadow-md hover:bg-[#111111] transition-all">
                            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" /> <span className="hidden sm:inline-block">+91 92200 34414</span><span className="sm:hidden">CALL</span>
                        </a>

                        {/* Mobile Hamburger */}
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-1.5 text-[#111111] hover:bg-zinc-100 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-[#C8A24D]">
                            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown */}
                {mobileMenuOpen && (
                    <div className="lg:hidden absolute top-[100%] left-0 w-full bg-white border-b border-zinc-200 shadow-xl flex flex-col px-6 py-4 gap-2 text-[11px] font-bold tracking-widest uppercase text-zinc-700 z-[120]">
                        <button onClick={() => scrollTo('about')} className="w-full text-left py-3 border-b border-zinc-100 hover:text-[#C8A24D] transition-colors flex items-center justify-between">ABOUT <span className="text-zinc-300">&gt;</span></button>
                        <button onClick={() => scrollTo('amenities')} className="w-full text-left py-3 border-b border-zinc-100 hover:text-[#C8A24D] transition-colors flex items-center justify-between">AMENITIES <span className="text-zinc-300">&gt;</span></button>
                        <button onClick={() => scrollTo('gallery')} className="w-full text-left py-3 border-b border-zinc-100 hover:text-[#C8A24D] transition-colors flex items-center justify-between">GALLERY <span className="text-zinc-300">&gt;</span></button>
                        <button onClick={() => scrollTo('floor-plans')} className="w-full text-left py-3 border-b border-zinc-100 hover:text-[#C8A24D] transition-colors flex items-center justify-between">FLOOR PLAN <span className="text-zinc-300">&gt;</span></button>
                        <button onClick={() => scrollTo('location')} className="w-full text-left py-3 border-b border-zinc-100 hover:text-[#C8A24D] transition-colors flex items-center justify-between">LOCATION <span className="text-zinc-300">&gt;</span></button>
                        <button onClick={() => scrollTo('contact')} className="w-full text-left py-3 hover:text-[#C8A24D] transition-colors flex items-center justify-between">CONTACT <span className="text-zinc-300">&gt;</span></button>
                    </div>
                )}
            </nav>

            {/* MAIN CONTENT WRAPPER */}
            <main className="w-full max-w-[1200px] pb-32 pt-12 px-4 sm:px-8">

                {/* HEADER TEXT */}
                <div className="w-full text-center mb-10 border-b border-gray-100 flex flex-col items-center">
                    <h1 className="text-[#111111] text-4xl sm:text-6xl font-serif mb-4 pb-2 inline-block relative font-light break-words px-2 max-w-full leading-tight">
                        Edistone Apartment
                    </h1>
                </div>

                {/* HERO IMAGE DIV */}
                <div className="w-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-sm overflow-hidden bg-gray-100 mb-16 aspect-[4/3] sm:aspect-[21/9] max-h-[500px]">
                    <img
                        src="/residential/Hero.webp"
                        alt="Edistone Building"
                        className="w-full h-full object-cover object-center"
                    />
                </div>

                {/* TEXT CONTENT ORGANISED EXACTLY LIKE SCREENSHOT */}
                <div id="about" className="flex flex-col text-left sm:text-justify max-w-[1000px] mx-auto mb-16">
                    <h2 className="text-[#111111] text-2xl sm:text-3xl font-bold mb-6 font-serif leading-tight">
                        Edistone Apartment<br className="sm:hidden" /> (Studio/ 1 Bhk Apartments)
                    </h2>

                    <div className="text-gray-600 text-[14px] sm:text-[15px] leading-relaxed space-y-4 mb-8">
                        <p>
                            Edistone promises you a feeling of contentment & serenity. Planned meticulously for a wonderful living experience feel of full freshness with beautiful surroundings. Where each floor & every flat is a blend of design & aesthetics, created carefully to cater the needs of every individual with marvelous attention to minute details.
                        </p>
                        <p>
                            Edistone ensures an abode showered with blessings. Edistone Apartments ( G+3 ) will have Elevator Facilities keeping in view the comfort for its residents.
                        </p>
                    </div>

                    {/* Assured Rental Block */}
                    <div className="mt-4 border-t border-gray-100 pt-8">
                        <h3 className="text-[#111111] font-bold text-sm sm:text-[15px] mb-6 uppercase inline-block font-sans">
                            ASSURED RENTAL ON FULLY-FURNISHED STUDIO APARTMENT
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Assured Rental 20000 Rs. Per Month.",
                                "3 Year Rent Agreement Between Builder & Buyer.",
                                "2 Nights Complimentary Stay.",
                                "No Maintenance Charges During Rental Period."
                            ].map((point, idx) => (
                                <li key={idx} className="flex items-center gap-3">
                                    <div className="w-4 h-4 rounded-full bg-[#C8A24D] flex flex-shrink-0 items-center justify-center mt-0.5">
                                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                    </div>
                                    <span className="text-gray-600 text-[15px] font-medium">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* ELEGANCE & STYLE SECTION - EXACT REPLICA */}
                <div className="flex flex-col lg:flex-row gap-0 items-stretch bg-gray-50 mb-24 relative overflow-hidden rounded-sm border border-gray-100">
                    <div className="w-full lg:w-1/2 p-6 sm:p-12 z-10 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-[10px] text-[#C8A24D] font-bold uppercase tracking-widest whitespace-nowrap">ABOUT</span>
                            <div className="h-[1px] w-6 bg-[#C8A24D]"></div>
                            <span className="text-[10px] text-[#C8A24D] font-bold uppercase tracking-widest whitespace-nowrap overflow-hidden text-ellipsis">EDISTONE APARTMENT</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl text-[#111111] font-bold mb-1 font-serif leading-tight">A Sanctuary of</h2>
                        <h2 className="text-3xl sm:text-4xl text-[#C8A24D] font-serif italic mb-8">Elegance & Style</h2>

                        <p className="text-gray-500 leading-relaxed text-[15px] mb-8 text-left sm:text-justify">
                            Edistone represents a paradigm shift in urban living. Nestled in a prime location, it harmonizes the tranquility of nature with the pulse of modern architecture.
                        </p>
                        <p className="text-gray-500 leading-relaxed text-[15px] mb-10 text-left sm:text-justify">
                            Every detail is meticulously curated for those who seek more than just a residence. From the sculptural entrance to the expansive vistas, we offer an environment crafted for the extraordinary.
                        </p>

                        <button className="border border-[#C8A24D] text-gray-800 hover:bg-[#C8A24D] hover:text-white px-8 py-3 font-semibold text-xs transition-colors flex items-center justify-between gap-4 w-max group bg-white">
                            LEARN MORE <span className="text-[14px] text-gray-400 group-hover:text-white">→</span>
                        </button>
                    </div>

                    <div className="w-full lg:w-1/2 bg-gray-200 min-h-[400px] relative flex items-center justify-center">
                        <img src="/residential/photo-1600607687939-ce8a6c25118c.webp" alt="Sanctuary Image" className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                </div>

                {/* AMENITIES SECTION - EXACT ITEMS */}
                <div id="amenities" className="text-center mb-24 px-4 overflow-hidden pt-10 border-t border-gray-100">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="h-[1px] w-10 bg-gray-300"></div>
                        <span className="text-[#C8A24D] text-[10px] font-bold uppercase tracking-[0.2em]">AMENITIES</span>
                        <div className="h-[1px] w-10 bg-gray-300"></div>
                    </div>

                    <h2 className="text-[#111111] text-4xl sm:text-5xl font-serif mb-16">World-Class Amenities</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 w-full max-w-5xl mx-auto border-t border-l border-gray-100 bg-white">
                        {[
                            { name: "Intercom facility", icon: <PhoneCall className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.5]" /> },
                            { name: "Power backup", icon: <Zap className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.5]" /> },
                            { name: "Grand gated entry", icon: <DoorOpen className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.5]" /> },
                            { name: "Round the clock security", icon: <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.5]" /> },
                            { name: "Ample parking space", icon: <ParkingCircle className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.5]" /> },
                            { name: "Landscaped jogging park", icon: <TreePine className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.5]" /> },
                            { name: "Loan facility available", icon: <Banknote className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.5]" /> },
                            { name: "Road pattern with water bodies", icon: <Waves className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.5]" /> },
                            { name: "Market & shopping Complex", icon: <ShoppingCart className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.5]" /> },
                            { name: "Cable connection", icon: <Tv className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.5]" /> },
                            { name: "Underground electrification", icon: <PlugZap className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.5]" /> },
                            { name: "Club House", icon: <Building2 className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.5]" /> },
                            { name: "Swimming Pool", icon: <LifeBuoy className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.5]" /> },
                            { name: "COMING SOON: Senior citizen homes", icon: <Heart className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.5]" />, highlight: true },
                            { name: "COMING SOON: Intl School (CBSE)", icon: <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.5]" />, highlight: true },
                            { name: "UPCOMING: Proposed Metro Jewar", icon: <TrainFront className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.5]" />, highlight: true },
                            { name: "UPCOMING: Proposed Airport", icon: <Plane className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.5]" />, highlight: true },
                        ].map((amenity, idx) => (
                            <div key={idx} className="flex flex-col items-start justify-center min-h-[170px] text-left p-6 sm:p-8 border-b border-r border-gray-100 bg-white hover:bg-white hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300 relative z-0 hover:z-10 group cursor-default">
                                <div className={`mb-6 w-16 h-16 rounded-2xl flex items-center justify-center shadow-[inset_0_2px_10px_rgba(200,162,77,0.15)] bg-gradient-to-br ${amenity.highlight ? 'from-[#C8A24D]/20 to-[#C8A24D]/5 text-[#C8A24D]' : 'from-[#C8A24D]/10 to-transparent text-[#C8A24D]'} group-hover:scale-110 transition-transform duration-500`}>
                                    {amenity.icon}
                                </div>
                                <span className={`text-[12px] sm:text-[14px] font-bold tracking-wide leading-snug ${amenity.highlight ? 'text-[#C8A24D]' : 'text-[#111111]'}`}>
                                    {amenity.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* GALLERY BLOCK - 3 PER ROW - ALL 13 IMAGES */}
                <div id="gallery" className="text-center mb-24 px-4 pt-10 border-t border-gray-100">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="h-[1px] w-10 bg-gray-300"></div>
                        <span className="text-[#C8A24D] text-[10px] font-bold uppercase tracking-[0.2em]">PHOTOGRAPHY</span>
                        <div className="h-[1px] w-10 bg-gray-300"></div>
                    </div>

                    <h2 className="text-[#111111] text-4xl sm:text-5xl font-serif mb-16">Gallery of Excellence</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Hero.webp",
                            "Gallery-0.webp",
                            "Gallery-1.webp",
                            "Gallery-3.webp",
                            "Gallery-6.webp",
                            "Gallery-7.webp",
                            "Gallery-8.webp",
                            "Gallery-16.webp",
                            "Gallery-17.webp",
                            "Gallery-19.webp",
                            "Gallery-20.webp",
                            "Gallery-25.webp",
                            "photo-1600607687939-ce8a6c25118c.webp"
                        ].slice(0, showAllGallery ? 13 : 6).map((img, idx) => (
                            <div
                                key={idx}
                                onClick={() => setLightboxImage(`/residential/${img}`)}
                                className="relative w-full aspect-[4/3] overflow-hidden group shadow-md border-4 border-white hover:border-[#C8A24D]/10 hover:shadow-2xl transition-all duration-500 rounded z-0 hover:z-10 cursor-pointer"
                            >
                                <img
                                    src={`/residential/${img}`}
                                    alt={`Gallery image ${idx}`}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 bg-gray-100"
                                />
                                {/* HOVER OVERLAY LIGHTBOX BUTTON */}
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                    <div className="bg-[#C8A24D] text-white font-bold text-[12px] tracking-[0.2em] px-8 py-3.5 uppercase shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 rounded-sm">
                                        VIEW SPACE
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12">
                        <button
                            onClick={() => setShowAllGallery(!showAllGallery)}
                            className="bg-transparent border-2 border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white px-10 py-4 font-bold text-[11px] tracking-[0.2em] uppercase transition-colors shadow-sm rounded-sm"
                        >
                            {showAllGallery ? "SHOW LESS" : "SHOW MORE IMAGES"}
                        </button>
                    </div>
                </div>

                {/* FLOOR PLANS TABLE */}
                <div id="floor-plans" className="text-center mb-24 max-w-6xl mx-auto px-4 pt-10 border-t border-gray-100">
                    <h2 className="text-[#111111] text-4xl sm:text-6xl italic font-serif mb-16 font-light">Floor Plans</h2>

                    <div className="w-full overflow-x-auto shadow-[0_5px_30px_rgba(0,0,0,0.04)] rounded bg-white relative z-10 border border-gray-100">
                        <table className="w-full text-left bg-white whitespace-nowrap min-w-[700px]">
                            <thead>
                                <tr className="bg-[#eaf3fa] text-[#111111] text-[11px] font-bold uppercase tracking-widest border-b border-gray-100">
                                    <th className="py-5 px-8">TYPE</th>
                                    <th className="py-5 px-8">AREA</th>
                                    <th className="py-5 px-8">FLOOR PLAN</th>
                                    <th className="py-5 px-8">PRICE</th>
                                </tr>
                            </thead>
                            <tbody className="text-[13px] text-gray-800 font-semibold tracking-wide">
                                {[
                                    { t: "Studio Apartment (Un-Furnished)", a: "450 Sq.Ft.", i: "Floor plan-1.jpg", p: "1-25 Lakh" },
                                    { t: "Studio Apartment (Luxury-Furnishing)", a: "450 Sq.Ft.", i: "Floor plan-2.jpg", p: "2-32 Lakh" },
                                    { t: "1 BHK Apartment (Luxury-Furnished)", a: "775 Sq.Ft.", i: "Floor plan-3.jpg", p: "3-40 Lakh" },
                                    { t: "1 BHK Apartment (Un-Furnished)", a: "900 Sq.Ft.", i: "Floor plan-4.jpg", p: "4-35 Lakh" },
                                    { t: "1 BHK Apartment (Luxury-Furnishing)", a: "900 Sq.Ft.", i: "Floor plan-5.jpg", p: "5-45 Lakh" }
                                ].map((row, i) => (
                                    <tr key={i} className="border-b border-gray-100 hover:bg-[#fcfdfd] transition-colors duration-300">
                                        <td className="py-6 px-8 text-[13px] text-[#111111]">{row.t}</td>
                                        <td className="py-6 px-8 text-gray-500 font-medium">{row.a}</td>
                                        <td className="py-6 px-8">
                                            <a
                                                href={`/residential/${row.i}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#C8A24D] underline font-bold hover:text-orange-700 transition-colors"
                                            >
                                                Click to view
                                            </a>
                                        </td>
                                        <td className="py-6 px-8 text-[#111111] font-bold">{row.p}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="text-left max-w-6xl mx-auto mt-4 px-2">
                        <p className="text-gray-500 text-[12px] italic font-medium">* Prices are subject to change without prior notice. Taxes extra as applicable.</p>
                    </div>
                </div>

                {/* PROJECT LOCATION & CONNECTIVITY */}
                <div id="location" className="text-center mb-10 pt-10 border-t border-gray-100 max-w-6xl mx-auto">
                    <h2 className="text-[#111111] text-4xl sm:text-5xl font-serif mb-4">Project Location</h2>
                    <p className="text-gray-500 text-[15px] max-w-2xl mx-auto mb-10 px-4">
                        Situated in the heart of Ghaziabad, close to NH-24. Ideally located for seamless business connectivity.
                    </p>

                    <div className="relative w-full bg-gray-100 flex shadow-sm border border-gray-200 overflow-hidden h-[450px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111976.10425313175!2d77.36985016335936!3d28.625340156994112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee750e3ce0d5%3A0xe5a363d6b04bdadb!2sEdistone%20Apartment!5e0!3m2!1sen!2sin!4v1714494191060!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Edistone Apartment Location Map"
                            className="grayscale-[0.8] contrast-[1.1] opacity-90"
                        ></iframe>
                        {/* Search Bar Overlay Mimic */}
                        <div className="absolute top-0 left-0 w-full bg-[#C8A24D] p-1.5 flex items-center justify-between z-10">
                            <div className="text-white font-bold text-xs px-4 flex items-center gap-2">
                                <Navigation className="w-3.5 h-3.5" /> EDISTONE REAL ESTATES
                            </div>
                            <div className="bg-white rounded px-3 py-1.5 text-xs text-gray-500 flex items-center shadow-sm w-[250px] mr-2">
                                Search Project...
                            </div>
                        </div>
                    </div>

                    {/* CONNECTIVITY HIGHLIGHTS PILLS */}
                    <div className="bg-white p-8 shadow-[0_5px_25px_rgba(0,0,0,0.06)] border border-gray-100 w-[94%] mx-auto -mt-16 relative z-20 rounded shadow-md">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
                            {[
                                { t: "NH-24 HIGHWAY", b: "(Direct Access)", i: <MapPin /> },
                                { t: "MINS TO METRO", b: "(Shaheed Sthal)", i: <MapPin /> },
                                { t: "MINS TO DELHI", b: "(Via NH-24 Express)", i: <MapPin /> },
                                { t: "MINS TO NOIDA", b: "(Yamuna Expressway)", i: <MapPin /> }
                            ].map((f, i) => (
                                <div key={i} className="flex gap-4 items-center">
                                    <div className="w-12 h-12 rounded-full border border-orange-100 flex items-center justify-center flex-shrink-0 text-[#C8A24D] bg-orange-50/50">
                                        <div className="w-5 h-5">{f.i}</div>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-bold text-[#111111] text-[12px] uppercase tracking-wider">{f.t}</span>
                                        <span className="text-gray-500 text-[11px] mt-0.5">{f.b}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            {/* DARK FOOTER */}
            <footer id="contact" className="w-full bg-[#1e2029] text-gray-400 py-16 px-6 relative z-10 border-t border-gray-800 pb-[100px]">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

                    {/* Left Info Column */}
                    <div className="lg:col-span-5 pr-0 lg:pr-10">
                        <h2 className="text-4xl text-white font-serif font-bold mb-1">Contact</h2>
                        <h3 className="text-2xl text-[#C8A24D] font-black italic mb-6">with us</h3>

                        <p className="text-[13px] leading-relaxed mb-10 pb-6 border-b border-gray-800 text-gray-400">
                            Experience our premium facilities firsthand. Schedule a visit with our expert sales team and discover why Edistone is the perfect choice for your business.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4 items-start">
                                <MapPin className="w-5 h-5 text-[#C8A24D] mt-1 shrink-0" />
                                <div className="flex flex-col">
                                    <span className="text-white font-bold text-xs tracking-widest uppercase mb-1">Corporate Office</span>
                                    <span className="text-xs text-gray-400 leading-relaxed">Office No. 626, 6th Floor, Aditya High Street NH 24, Ghaziabad, Uttar Pradesh 201009</span>
                                </div>
                            </div>

                            <div className="flex gap-4 items-center">
                                <Mail className="w-5 h-5 text-[#C8A24D] shrink-0" />
                                <div className="flex flex-col text-[13px]">
                                    <a href="mailto:sales@edistonerealestates.com" className="hover:text-white transition-colors">sales@edistonerealestates.com</a>
                                </div>
                            </div>

                            <div className="flex gap-4 items-center">
                                <Phone className="w-5 h-5 text-[#C8A24D] shrink-0" />
                                <div className="flex flex-col text-[13px]">
                                    <a href="tel:+919220034414" className="hover:text-white transition-colors">+91 9220034414</a>
                                </div>
                            </div>
                        </div>

                        {/* FOOTER BOTTOM LEFT LOGO */}
                        <div className="flex flex-col tracking-tight mt-16 pt-8 border-t border-gray-800">
                            <span className="text-2xl font-extrabold uppercase leading-none font-serif tracking-wide text-white">EDISTONE</span>
                            <span className="text-[9px] font-semibold tracking-[0.25em] uppercase mt-1 text-gray-500">REAL ESTATES</span>
                            <p className="text-[10px] text-gray-600 mt-4">© 2026 EDISTONE REAL ESTATES PVT LTD.<br />ALL RIGHTS RESERVED.</p>
                        </div>
                    </div>

                    {/* Right Form Column */}
                    <div className="lg:col-span-7 bg-[#171921] p-8 sm:p-12 rounded border border-gray-800 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
                        <h4 className="text-white text-xs font-bold mb-8 uppercase tracking-widest text-[#C8A24D]">SEND US A MESSAGE</h4>
                        <form className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <input type="text" placeholder="Your Name" className="w-full bg-[#111217] border border-gray-800 rounded p-4 text-[13px] text-white focus:border-[#C8A24D] outline-none transition-colors" />
                                <input type="email" placeholder="Email Address" className="w-full bg-[#111217] border border-gray-800 rounded p-4 text-[13px] text-white focus:border-[#C8A24D] outline-none transition-colors" />
                            </div>
                            <input type="tel" placeholder="Phone Number" className="w-full bg-[#111217] border border-gray-800 rounded p-4 text-[13px] text-white focus:border-[#C8A24D] outline-none transition-colors" />
                            <textarea rows={5} placeholder="Your Message" className="w-full bg-[#111217] border border-gray-800 rounded p-4 text-[13px] text-white focus:border-[#C8A24D] outline-none resize-none transition-colors"></textarea>
                            <button type="button" className="w-auto bg-[#C8A24D] hover:bg-[#d84800] text-white px-10 py-4 rounded font-bold text-[11px] tracking-[0.2em] uppercase transition-colors mt-2">
                                SEND MESSAGE
                            </button>
                        </form>
                    </div>

                </div>
            </footer>

            {/* STICKY BOTTOM ENQUIRY BAR (WHITE/LIGHT BACKGROUND) */}
            <div className="fixed bottom-0 left-0 w-full bg-slate-50 border-t border-gray-200 shadow-[0_-5px_20px_rgba(0,0,0,0.08)] z-[150] py-2 sm:py-3 lg:py-4 px-2 sm:px-8">
                {/* Desktop View (Show form) */}
                <div className="hidden sm:flex max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
                    {/* Left Icon Info */}
                    <div className="flex items-center gap-4 w-full lg:w-auto justify-center lg:justify-start">
                        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-orange-100/50 rounded-full flex items-center justify-center text-[#C8A24D] shrink-0">
                            <Phone className="w-4 h-4 lg:w-5 lg:h-5 fill-current" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-extrabold text-[13px] lg:text-sm text-[#111111] tracking-wide">SCHEDULE A SITE VISIT</span>
                            <span className="text-[11px] lg:text-xs text-gray-500">Get Instant Callback</span>
                        </div>
                    </div>

                    {/* Right Form Inputs */}
                    <form className="flex w-full lg:w-auto flex-col sm:flex-row gap-3 items-center justify-center lg:justify-end flex-1">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full sm:w-[220px] bg-white border border-gray-200 rounded px-4 py-2.5 lg:py-3 text-[13px] outline-none focus:border-[#C8A24D] text-gray-800 shadow-sm"
                        />
                        <input
                            type="tel"
                            placeholder="+91 Phone"
                            className="w-full sm:w-[220px] bg-white border border-gray-200 rounded px-4 py-2.5 lg:py-3 text-[13px] outline-none focus:border-[#C8A24D] text-gray-800 shadow-sm"
                        />
                        <button
                            type="button"
                            className="w-full sm:w-auto bg-[#C8A24D] hover:bg-[#d84800] text-white px-8 py-2.5 lg:py-3 rounded font-bold text-[11px] sm:text-[12px] flex items-center justify-center gap-2 transition-colors whitespace-nowrap shadow-md uppercase tracking-wider"
                        >
                            <Send className="w-3.5 h-3.5" /> ENQUIRE NOW
                        </button>
                    </form>
                </div>

                {/* Mobile View (2 Buttons only) */}
                <div className="flex sm:hidden w-full items-center justify-between gap-2">
                    <a
                        href="tel:+919220034414"
                        className="flex-1 bg-white border-2 border-[#111111] text-[#111111] py-3 rounded text-[11px] font-bold flex items-center justify-center gap-2 shadow-sm"
                    >
                        <Phone className="w-4 h-4 fill-current" /> CALL NOW
                    </a>
                    <button
                        type="button"
                        className="flex-1 bg-[#C8A24D] text-white py-3 border-2 border-[#C8A24D] rounded text-[11px] font-bold flex items-center justify-center gap-2 shadow-md uppercase"
                    >
                        <Send className="w-4 h-4" /> ENQUIRE NOW
                    </button>
                </div>
            </div>

            {/* WA FLOAT BUTTON (MOVED UP SLIGHTLY TO NOT BE HIDDEN BY THE NEW STICKY BOTTOM BAR) */}
            <a
                href="https://wa.me/919220034414"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-[110px] right-6 lg:right-10 bg-[#25D366] text-white p-4 lg:p-4.5 rounded-full shadow-[0_5px_15px_rgba(37,211,102,0.4)] hover:-translate-y-1 transition-transform z-[200] border-2 border-white group"
            >
                <svg viewBox="0 0 32 32" className="w-7 h-7 lg:w-8 lg:h-8" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.132 6.744 3.052 9.38L1.056 31.2l6.076-1.952A15.913 15.913 0 0 0 16.004 32C24.828 32 32 24.824 32 16S24.828 0 16.004 0Zm9.424 22.604c-.396 1.116-2.312 2.132-3.228 2.268-.916.136-1.768.388-5.952-1.244-5.044-1.968-8.28-7.108-8.528-7.436-.248-.328-2.04-2.716-2.04-5.18 0-2.464 1.292-3.672 1.748-4.172.46-.5.996-.624 1.328-.624.332 0 .664.004.956.016.308.012.72-.116 1.124.86.408.984 1.392 3.396 1.512 3.644.12.248.2.54.04.868-.16.332-.24.536-.48.828-.24.288-.504.644-.72.868-.24.248-.492.516-.208.996.28.484 1.256 2.072 2.696 3.356 1.856 1.652 3.42 2.164 3.9 2.408.484.248.764.208 1.044-.124.284-.332 1.208-1.408 1.528-1.892.324-.484.644-.4 1.088-.24.44.16 2.808 1.324 3.288 1.564.48.244.8.364.916.564.116.196.116 1.152-.28 2.272Z" />
                </svg>
            </a>
            {/* LIGHTBOX IMPLEMENTATION */}
            {lightboxImage && (
                <div
                    className="fixed inset-0 z-[500] bg-black/90 flex items-center justify-center p-4 sm:p-8 backdrop-blur-sm cursor-zoom-out"
                    onClick={() => setLightboxImage(null)}
                >
                    {/* Close Button */}
                    <button
                        className="absolute top-6 right-6 text-white bg-black/50 hover:bg-[#C8A24D] border-2 border-white rounded-full w-12 h-12 flex items-center justify-center transition-colors shadow-lg z-[510] cursor-pointer"
                        onClick={(e) => { e.stopPropagation(); setLightboxImage(null); }}
                    >
                        <span className="text-2xl font-light leading-none mb-1">×</span>
                    </button>
                    {/* Image Render */}
                    <div className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center">
                        <img
                            src={lightboxImage}
                            alt="Gallery Lightbox"
                            className="max-w-full max-h-[85vh] object-contain shadow-[0_10px_50px_rgba(0,0,0,0.5)] border-4 border-white rounded-sm bg-white"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}

        </div>
    );
}
