"use client";

import { useState } from "react";
import { Building2, MapPin, IndianRupee, ShieldCheck } from "lucide-react";

const CATEGORIES = ["Residential", "Commercial", "Premium", "Luxury Collection", "Township"];

// Dummy data matching the reference
const PROJECTS_DATA = [
    // Premium Projects (Already existed)
    {
        id: 1,
        category: "Premium",
        title: "EDISTONE CHRYSALIS",
        logoImage: "https://placehold.co/600x450/ffffff/C8A24D?text=Edistone+Chrysalis+Logo",
        buildingImage: "https://placehold.co/600x450/27272a/ffffff?text=Premium+Building+Project",
        bhk: "3/4 BHK",
        location: "Sector 22-D, Yamuna Expressway",
        price: "Price On Request",
        rera: "RERA: UPRERAPRJ622344/11/2025",
        reraLink: "#",
    },
    {
        id: 2,
        category: "Premium",
        title: "ASPIRE LEISURE PARK BY EDISTONE",
        logoImage: "https://placehold.co/600x450/0f172a/C8A24D?text=Aspire+Leisure+Park+Logo",
        buildingImage: "https://placehold.co/600x450/18181b/ffffff?text=Luxury+Residences",
        bhk: "3/4 BHK",
        location: "Sector Techzone 4, Greater Noida",
        price: "Price On Request",
        rera: "HON'BLE SUPREME COURT MONITORED\nHOUSING PROJECTS",
        reraLink: "#",
    },
    {
        id: 3,
        category: "Premium",
        title: "ASPIRE CENTURIAN PARK BY EDISTONE",
        logoImage: "https://placehold.co/600x450/ffffff/111111?text=Centurian+Park+Logo",
        buildingImage: "https://placehold.co/600x450/3f3f46/ffffff?text=Grand+Luxury+Residences",
        bhk: "3/4 BHK",
        location: "Sector Techzone 4, Greater Noida",
        price: "Price On Request",
        rera: "HON'BLE SUPREME COURT MONITORED\nHOUSING PROJECTS",
        reraLink: "#",
    },

    // Residential Projects
    {
        id: 4,
        category: "Residential",
        title: "EDISTONE SAUNDARYAM",
        logoImage: "https://placehold.co/600x450/ffffff/C8A24D?text=Edistone+Saundaryam",
        buildingImage: "https://placehold.co/600x450/1e293b/ffffff?text=Residential+Towers",
        bhk: "3/4/5 BHK",
        location: "Techzone 4, Greater Noida West",
        price: "₹ 1.8 Cr Onwards",
        rera: "RERA: UPRERAPRJ5355",
        reraLink: "#",
    },
    {
        id: 5,
        category: "Residential",
        title: "EDISTONE CASCADE",
        logoImage: "https://placehold.co/600x450/ffffff/111111?text=Edistone+Cascade",
        buildingImage: "https://placehold.co/600x450/0f172a/ffffff?text=Family+Residences",
        bhk: "2/3/4 BHK",
        location: "Sector 16C, Greater Noida",
        price: "₹ 1.2 Cr Onwards",
        rera: "RERA: UPRERAPRJ7182",
        reraLink: "#",
    },
    {
        id: 6,
        category: "Residential",
        title: "7TH AVENUE EDISTONE CITY",
        logoImage: "https://placehold.co/600x450/ffffff/C8A24D?text=7th+Avenue+City",
        buildingImage: "https://placehold.co/600x450/334155/ffffff?text=Urban+Apartments",
        bhk: "2/3 BHK",
        location: "Greater Noida West",
        price: "Price On Request",
        rera: "RERA: UPRERAPRJ6695",
        reraLink: "#",
    },

    // Commercial Projects
    {
        id: 7,
        category: "Commercial",
        title: "EDISTONE CITY CENTER",
        logoImage: "https://placehold.co/600x450/ffffff/111111?text=Edistone+City+Center",
        buildingImage: "https://placehold.co/600x450/3f3f46/ffffff?text=Modern+Workspace",
        bhk: "Shops & Premium Offices",
        location: "Greater Noida West",
        price: "₹ 60 Lakhs Onwards",
        rera: "RERA: UPRERAPRJ4780",
        reraLink: "#",
    },
    {
        id: 8,
        category: "Commercial",
        title: "EDISTONE WORLD SMARTSTREET",
        logoImage: "https://placehold.co/600x450/ffffff/C8A24D?text=SmartStreet+Retail",
        buildingImage: "https://placehold.co/600x450/27272a/ffffff?text=Retail+Shops",
        bhk: "Retail & Food Court",
        location: "Sector 16B, Greater Noida",
        price: "₹ 45 Lakhs Onwards",
        rera: "RERA: UPRERAPRJ674297",
        reraLink: "#",
    },
    {
        id: 9,
        category: "Commercial",
        title: "AEROCITY YAMUNA BY EDISTONE",
        logoImage: "https://placehold.co/600x450/ffffff/111111?text=Yamuna+Aerocity",
        buildingImage: "https://placehold.co/600x450/18181b/ffffff?text=Commercial+Hub",
        bhk: "Commercial Plots & Suites",
        location: "Yamuna Expressway",
        price: "Price On Request",
        rera: "RERA: UPRERAPRJ342117",
        reraLink: "#",
    },

    // Luxury Collection Projects
    {
        id: 10,
        category: "Luxury Collection",
        title: "EDISTONE MULBERRY MANSIONS",
        logoImage: "https://placehold.co/600x450/0f172a/C8A24D?text=Mulberry+Mansions",
        buildingImage: "https://placehold.co/600x450/1e293b/ffffff?text=Ultra+Luxury+Villas",
        bhk: "6 BHK Mansions",
        location: "Sector 1, Greater Noida West",
        price: "Price On Request",
        rera: "RERA: UPRERAPRJ7057",
        reraLink: "#",
    },
    {
        id: 11,
        category: "Luxury Collection",
        title: "THE ISLANDS BY EDISTONE",
        logoImage: "https://placehold.co/600x450/ffffff/C8A24D?text=The+Islands",
        buildingImage: "https://placehold.co/600x450/0f172a/ffffff?text=Golf+Facing+Condos",
        bhk: "4/5 BHK Condominiums",
        location: "Jaypee Greens, Greater Noida",
        price: "₹ 4.5 Cr Onwards",
        rera: "RERA: UPRERAPRJ734569",
        reraLink: "#",
    },
    {
        id: 12,
        category: "Luxury Collection",
        title: "EDISTONE PLATINUM TOWERS",
        logoImage: "https://placehold.co/600x450/111111/ffffff?text=Platinum+Towers",
        buildingImage: "https://placehold.co/600x450/334155/C8A24D?text=Penthouse+%26+Suites",
        bhk: "4/5 BHK + Servant",
        location: "Sector 79, Noida",
        price: "Price On Request",
        rera: "RERA: UPRERAPRJ3528",
        reraLink: "#",
    },

    // Township Projects
    {
        id: 13,
        category: "Township",
        title: "EDISTONE YAMUNA CITY",
        logoImage: "https://placehold.co/600x450/ffffff/C8A24D?text=Yamuna+City",
        buildingImage: "https://placehold.co/600x450/27272a/ffffff?text=250+Acre+Township",
        bhk: "Plots, Villas & Apartments",
        location: "Yamuna Expressway",
        price: "From ₹ 50 L to ₹ 3.5 Cr",
        rera: "RERA: UPRERAPRJ14634",
        reraLink: "#",
    },
    {
        id: 14,
        category: "Township",
        title: "EDISTONE SMART CITY",
        logoImage: "https://placehold.co/600x450/ffffff/111111?text=Smart+City",
        buildingImage: "https://placehold.co/600x450/18181b/ffffff?text=Integrated+Smart+Township",
        bhk: "Lake View Residences & Plots",
        location: "Greater Noida West",
        price: "Price On Request",
        rera: "RERA: UPRERAPRJ99321",
        reraLink: "#",
    },
    {
        id: 15,
        category: "Township",
        title: "EDISTONE GREEN AVENUE",
        logoImage: "https://placehold.co/600x450/ffffff/C8A24D?text=Green+Avenue",
        buildingImage: "https://placehold.co/600x450/3f3f46/ffffff?text=Eco-Friendly+Township",
        bhk: "Studio, 2/3/4 BHK",
        location: "Ghaziabad",
        price: "From ₹ 65 Lakhs",
        rera: "RERA: UPRERAPRJ5521",
        reraLink: "#",
    },
];

export default function Projects() {
    const [activeTab, setActiveTab] = useState("Premium");

    // Filtering projects based on tab
    const filteredProjects = PROJECTS_DATA.filter(
        (project) => project.category === activeTab
    );

    return (
        <section className="w-full py-20 sm:py-28 bg-[#F7F7F5] shrink-0">
            <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* Title Section matching reference styling */}
                <div className="flex flex-col items-center mb-10">
                    <div className="w-full max-w-md border-t-2 border-[#111111] mb-2" />
                    <div className="w-full max-w-md border-t border-[#111111] mb-4" />
                    <h2 className="text-2xl sm:text-3xl font-medium tracking-widest text-[#111111] uppercase mb-4 text-center">
                        Ongoing Projects
                    </h2>
                    <div className="w-full max-w-md border-b border-[#111111] mb-2" />
                    <div className="w-full max-w-md border-b-2 border-[#111111]" />
                </div>

                {/* Tabs Desktop & Tablet */}
                <div className="hidden sm:flex flex-wrap items-center justify-center gap-2 mb-12 border-b border-zinc-300 w-full max-w-5xl mx-auto pb-1">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            className={`px-5 py-2.5 text-xs sm:text-sm uppercase tracking-wider font-semibold border transition-all duration-300 ${activeTab === cat
                                ? "bg-[#111111] text-[#C8A24D] border-[#111111]"
                                : "bg-transparent text-[#111111] border-[#111111] hover:bg-[#111111]/5"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Mobile Dropdown for Tabs */}
                <div className="sm:hidden w-full mb-10 px-4">
                    <select
                        value={activeTab}
                        onChange={(e) => setActiveTab(e.target.value)}
                        className="w-full p-3 border-2 border-[#111111] bg-white text-[#111111] font-bold uppercase tracking-wider"
                    >
                        {CATEGORIES.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-white border border-zinc-200 shadow-sm flex flex-col items-center group overflow-hidden transition-all duration-300 hover:shadow-xl"
                            >
                                {/* Image Container with Hover Swap */}
                                <div className="relative w-full aspect-[4/3] overflow-hidden bg-white">
                                    {/* Base Logo Image */}
                                    <img
                                        src={project.logoImage}
                                        alt={`${project.title} Logo`}
                                        className="absolute inset-0 w-full h-full object-cover p-2 transition-opacity duration-500 ease-in-out group-hover:opacity-0 z-10"
                                    />
                                    {/* Hover Building Image */}
                                    <img
                                        src={project.buildingImage}
                                        alt={`${project.title} Render`}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out scale-110 group-hover:scale-100 z-0"
                                    />
                                </div>

                                {/* Title */}
                                <div className="w-full text-center py-4 border-y border-zinc-200 bg-white z-20">
                                    <h3 className="text-sm font-bold text-[#111111] uppercase tracking-wide">
                                        {project.title}
                                    </h3>
                                </div>

                                {/* Information Details */}
                                <div className="w-full flex-grow p-5 sm:p-6 bg-white flex flex-col gap-4 text-xs sm:text-sm font-medium text-[#6B6B6B] z-20">
                                    <div className="flex items-start gap-3">
                                        <div className="bg-[#111111] text-[#C8A24D] p-1.5 rounded-full shrink-0">
                                            <Building2 className="w-3.5 h-3.5" />
                                        </div>
                                        <span className="mt-0.5">{project.bhk}</span>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="bg-[#111111] text-[#C8A24D] p-1.5 rounded-full shrink-0">
                                            <MapPin className="w-3.5 h-3.5" />
                                        </div>
                                        <span className="mt-0.5">{project.location}</span>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="bg-[#111111] text-[#C8A24D] p-1.5 rounded-full shrink-0">
                                            <IndianRupee className="w-3.5 h-3.5" />
                                        </div>
                                        <span className="mt-0.5">{project.price}</span>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="bg-[#111111] text-[#C8A24D] p-1.5 rounded-full shrink-0">
                                            <ShieldCheck className="w-3.5 h-3.5" />
                                        </div>
                                        <div className="mt-0.5 flex flex-col">
                                            <span className="whitespace-pre-line leading-relaxed">
                                                {project.rera}
                                            </span>
                                            {project.reraLink !== "#" && (
                                                <a
                                                    href={project.reraLink}
                                                    className="text-[#C8A24D] hover:underline mt-1 break-all"
                                                >
                                                    {project.reraLink}
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Footer Buttons */}
                                <div className="w-full grid grid-cols-2 mt-auto border-t border-zinc-200 z-20">
                                    <button className="py-3.5 text-xs font-bold tracking-widest text-[#6B6B6B] bg-[#f8f8f8] hover:bg-zinc-200 transition-colors uppercase border-r border-zinc-200">
                                        Explore
                                    </button>
                                    <button className="py-3.5 text-xs font-bold tracking-widest text-[#111111] bg-[#ececec] hover:bg-[#E3C67A] hover:text-white transition-colors uppercase">
                                        Enquire
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full py-20 text-center text-[#6B6B6B] font-medium">
                            No projects available in this category currently.
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
