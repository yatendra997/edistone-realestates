"use client";

import { useState } from "react";
import { MapPin, IndianRupee, ChevronRight, Phone } from "lucide-react";

const LOCATIONS = ["GZB", "Greater Noida", "Noida", "Yamuna", "Other Locations"] as const;
type Location = typeof LOCATIONS[number];

const PROPERTY_TYPES = ["Residential", "Commercial", "Industrial"] as const;
type PropertyType = typeof PROPERTY_TYPES[number];

interface Project {
  id: number;
  location: Location;
  type: PropertyType;
  title: string;
  info: string;
  price: string;
  area: string;
  badge?: string;
}

const NEW_PROJECTS: Project[] = [
  // GZB — Residential
  { id: 1, location: "GZB", type: "Residential", title: "Gaur Crestella", info: "2/3/4 BHK Premium Apartments", price: "₹ 85L Onwards", area: "Raj Nagar Ext., GZB", badge: "Hot" },
  { id: 2, location: "GZB", type: "Residential", title: "VVIP Addresses", info: "3/4 BHK Signature Residences", price: "₹ 1.2Cr Onwards", area: "Indirapuram, GZB" },
  // GZB — Commercial
  { id: 3, location: "GZB", type: "Commercial", title: "SKA Arcadia", info: "Retail Shops & Premium Offices", price: "₹ 50L Onwards", area: "NH-58, GZB", badge: "New" },
  { id: 4, location: "GZB", type: "Commercial", title: "Iris Trehan", info: "Commercial Spaces & Co-working", price: "₹ 40L Onwards", area: "Crossings Republik, GZB" },
  { id: 5, location: "GZB", type: "Commercial", title: "KB West Walk", info: "Retail & Food Court Units", price: "₹ 35L Onwards", area: "Vaishali, GZB" },
  // GZB — Industrial
  { id: 6, location: "GZB", type: "Industrial", title: "Factory Units – GZB", info: "Ready-to-Move Factory Sheds", price: "Price On Request", area: "UPSIDC Industrial Area, GZB" },
  { id: 7, location: "GZB", type: "Industrial", title: "Warehouse – GZB", info: "Grade-A Warehousing (UPSIDA Approved)", price: "Price On Request", area: "Loni Industrial Area, GZB" },

  // Greater Noida — Residential
  { id: 8, location: "Greater Noida", type: "Residential", title: "VVIP Namah", info: "3/4 BHK Luxury Residences", price: "₹ 1.5Cr Onwards", area: "Greater Noida West", badge: "Premium" },
  { id: 9, location: "Greater Noida", type: "Residential", title: "The Kutumb", info: "2/3 BHK Family Apartments", price: "₹ 95L Onwards", area: "Techzone 4, Greater Noida" },
  { id: 10, location: "Greater Noida", type: "Residential", title: "ACE Hane", info: "3/4 BHK Smart Homes", price: "₹ 1.1Cr Onwards", area: "Sector 12, Greater Noida West" },
  { id: 11, location: "Greater Noida", type: "Residential", title: "Palm Adela", info: "3/4 BHK Premium Apartments", price: "₹ 1.6Cr Onwards", area: "Greater Noida West", badge: "Hot" },
  // Greater Noida — Commercial
  { id: 12, location: "Greater Noida", type: "Commercial", title: "SKA Arcadia – GN", info: "Commercial Shops & Office Suites", price: "₹ 55L Onwards", area: "Greater Noida West" },
  // Greater Noida — Industrial
  { id: 13, location: "Greater Noida", type: "Industrial", title: "Industrial Land – GN", info: "UPSIDA-Approved Industrial Land Plots", price: "Price On Request", area: "UPSIDC Sector, Greater Noida" },

  // Noida — Residential
  { id: 14, location: "Noida", type: "Residential", title: "Solutairion City", info: "2/3/4 BHK Modern Residences", price: "₹ 90L Onwards", area: "Sector 137, Noida" },
  { id: 15, location: "Noida", type: "Residential", title: "TNT (Rajhans)", info: "3/4 BHK Ultra Premium Flats", price: "₹ 2Cr Onwards", area: "Sector 150, Noida", badge: "Premium" },
  // Noida — Commercial
  { id: 16, location: "Noida", type: "Commercial", title: "KB West Walk – Noida", info: "Retail & Commercial Hub Units", price: "₹ 60L Onwards", area: "Sector 62, Noida" },
  // Noida — Industrial
  { id: 17, location: "Noida", type: "Industrial", title: "Warehouse – Noida", info: "Grade-A Logistics & Warehousing", price: "Price On Request", area: "Sector 57, Noida" },

  // Yamuna — Residential
  { id: 18, location: "Yamuna", type: "Residential", title: "VVIP Namah – Yamuna", info: "3/4 BHK Expressway Homes", price: "₹ 1.3Cr Onwards", area: "Sector 22D, Yamuna Expressway", badge: "New" },
  // Yamuna — Commercial
  { id: 19, location: "Yamuna", type: "Commercial", title: "Aerocity Yamuna", info: "Commercial Plots & Business Suites", price: "Price On Request", area: "Yamuna Expressway" },
  // Yamuna — Industrial
  { id: 20, location: "Yamuna", type: "Industrial", title: "Industrial Plots – Yamuna", info: "UPSIDA-Approved Industrial Land", price: "Price On Request", area: "Tappal, Yamuna Expressway" },

  // Other Locations
  { id: 21, location: "Other Locations", type: "Residential", title: "Premium Residences", info: "2/3/4 BHK Apartments", price: "Price On Request", area: "NCR – Various Locations" },
  { id: 22, location: "Other Locations", type: "Commercial", title: "Commercial Spaces", info: "Retail & Office Units", price: "Price On Request", area: "NCR – Various Locations" },
  { id: 23, location: "Other Locations", type: "Industrial", title: "Industrial Units", info: "Factory & Warehouse (UPSIDA Approved)", price: "Price On Request", area: "NCR – Various Locations" },
];

const BADGE_COLORS: Record<string, string> = {
  Hot: "bg-red-500 text-white",
  New: "bg-green-600 text-white",
  Premium: "bg-[#C8A24D] text-white",
};

export default function NewProjectsPage() {
  const [activeLocation, setActiveLocation] = useState<Location>("GZB");
  const [activeType, setActiveType] = useState<PropertyType>("Residential");

  const filtered = NEW_PROJECTS.filter(
    (p) => p.location === activeLocation && p.type === activeType
  );

  return (
    <div className="w-full bg-white">

      {/* ── Hero ── */}
      <section className="w-full bg-[#111111] py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1600')] bg-cover bg-center opacity-10" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C8A24D] to-transparent" />
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="w-16 h-1 bg-[#C8A24D] mb-6 mx-auto" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight mb-5">
            New <span className="font-bold text-[#C8A24D]">Projects</span>
          </h1>
          <p className="text-zinc-300 text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Explore our latest residential, commercial, and industrial projects across GZB, Greater Noida, Noida, and Yamuna Expressway.
          </p>
        </div>
      </section>

      {/* ── Projects Browser ── */}
      <section className="w-full py-16 sm:py-20 bg-[#F7F7F5]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Location Tabs */}
          <div className="mb-8">
            <p className="text-xs font-bold text-[#6B6B6B] uppercase tracking-widest mb-3">Select Location</p>
            <div className="flex flex-wrap gap-2">
              {LOCATIONS.map((loc) => (
                <button key={loc} onClick={() => setActiveLocation(loc)}
                  className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider border-2 transition-all duration-200 ${activeLocation === loc
                    ? "bg-[#111111] text-[#C8A24D] border-[#111111]"
                    : "bg-white text-[#111111] border-zinc-300 hover:border-[#111111]"}`}>
                  {loc}
                </button>
              ))}
            </div>
          </div>

          {/* Property Type Pills */}
          <div className="mb-10">
            <p className="text-xs font-bold text-[#6B6B6B] uppercase tracking-widest mb-3">Property Type</p>
            <div className="flex flex-wrap gap-2">
              {PROPERTY_TYPES.map((type) => (
                <button key={type} onClick={() => setActiveType(type)}
                  className={`flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 rounded-full border-2 ${activeType === type
                    ? "bg-[#C8A24D] text-white border-[#C8A24D]"
                    : "bg-white text-[#6B6B6B] border-zinc-300 hover:border-[#C8A24D] hover:text-[#C8A24D]"}`}>
                  <ChevronRight className="w-3 h-3" /> {type}
                </button>
              ))}
            </div>
          </div>

          {/* Breadcrumb / count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-[#6B6B6B]">
              Showing <strong className="text-[#111111]">{filtered.length}</strong> project{filtered.length !== 1 ? "s" : ""} in{" "}
              <strong className="text-[#111111]">{activeLocation}</strong> — {activeType}
            </p>
          </div>

          {/* Cards */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <div key={p.id} className="bg-white border border-zinc-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group relative">
                  {/* Badge */}
                  {p.badge && (
                    <span className={`absolute top-4 right-4 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider z-10 ${BADGE_COLORS[p.badge]}`}>
                      {p.badge}
                    </span>
                  )}

                  {/* Image placeholder with gradient */}
                  <div className="w-full h-48 bg-gradient-to-br from-[#111111] to-[#2a2a2a] flex items-end p-5 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=600')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700" />
                    <div className="relative z-10">
                      <span className="text-[10px] font-bold text-[#C8A24D] uppercase tracking-widest">{activeLocation} · {activeType}</span>
                      <h3 className="text-white font-bold text-lg mt-1 leading-snug group-hover:text-[#C8A24D] transition-colors">{p.title}</h3>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-5 flex flex-col gap-3 flex-grow">
                    <p className="text-[#6B6B6B] text-[13px]">{p.info}</p>
                    <div className="flex items-center gap-2 text-[13px] text-[#6B6B6B]">
                      <MapPin className="w-3.5 h-3.5 text-[#C8A24D] shrink-0" />
                      <span>{p.area}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[13px]">
                      <IndianRupee className="w-3.5 h-3.5 text-[#C8A24D] shrink-0" />
                      <span className="font-bold text-[#111111]">{p.price}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-2 border-t border-zinc-100">
                    <button className="py-3.5 text-xs font-bold uppercase tracking-wider text-[#6B6B6B] bg-[#F7F7F5] hover:bg-zinc-200 transition-colors border-r border-zinc-100">
                      Details
                    </button>
                    <a href="tel:+919220034418"
                      className="py-3.5 text-xs font-bold uppercase tracking-wider text-[#111111] bg-[#efefef] hover:bg-[#C8A24D] hover:text-white transition-colors text-center flex items-center justify-center gap-1.5">
                      <Phone className="w-3 h-3" /> Enquire
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center bg-white border border-zinc-200 rounded">
              <p className="text-[#6B6B6B] font-medium">
                No projects currently listed for <strong>{activeLocation} – {activeType}</strong>.
              </p>
              <p className="text-sm text-zinc-400 mt-2">Please contact our team for the latest availability.</p>
              <a href="tel:+919220034418"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-[#111111] text-[#C8A24D] text-sm font-bold uppercase tracking-widest hover:bg-[#C8A24D] hover:text-white transition-colors">
                <Phone className="w-4 h-4" /> Call Sales Team
              </a>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="w-full py-16 bg-[#111111]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-light text-white mb-3">
            Looking for something <span className="font-bold text-[#C8A24D]">specific?</span>
          </h2>
          <p className="text-zinc-400 text-[15px] mb-8 leading-relaxed">
            Our sales team can help you find the perfect property that matches your needs and budget.
          </p>
          <a href="tel:+919220034418"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#C8A24D] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#b8913d] transition-colors">
            <Phone className="w-4 h-4" /> +91 92200 34418
          </a>
        </div>
      </section>
    </div>
  );
}
