"use client";

import { useState } from "react";
import { Building2, MapPin, IndianRupee, ShieldCheck, ChevronDown, ChevronRight, Send, User, Phone, Home } from "lucide-react";

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

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
}

const NEW_PROJECTS: Project[] = [
  // GZB
  { id: 1, location: "GZB", type: "Residential", title: "Gaur Crestella", info: "2/3/4 BHK Apartments", price: "₹ 85L Onwards", area: "Raj Nagar Ext., GZB" },
  { id: 2, location: "GZB", type: "Residential", title: "VVIP Addresses", info: "3/4 BHK Premium Flats", price: "₹ 1.2Cr Onwards", area: "Indirapuram, GZB" },
  { id: 3, location: "GZB", type: "Commercial", title: "SKA Arcadia", info: "Retail Shops & Offices", price: "₹ 50L Onwards", area: "NH-58, GZB" },
  { id: 4, location: "GZB", type: "Commercial", title: "Iris Trehan", info: "Commercial Spaces", price: "₹ 40L Onwards", area: "Crossings Republik, GZB" },
  { id: 5, location: "GZB", type: "Commercial", title: "KB West Walk", info: "Retail & Food Court", price: "₹ 35L Onwards", area: "Vaishali, GZB" },
  { id: 6, location: "GZB", type: "Industrial", title: "Factory Units – GZB", info: "Ready-to-Move Factory Sheds", price: "Price On Request", area: "UPSIDC Industrial Area, GZB" },
  { id: 7, location: "GZB", type: "Industrial", title: "Warehouse – GZB", info: "Grade-A Warehousing (UPSIDA Approved)", price: "Price On Request", area: "Loni Industrial Area, GZB" },

  // Greater Noida
  { id: 8, location: "Greater Noida", type: "Residential", title: "VVIP Namah", info: "3/4 BHK Luxury Residences", price: "₹ 1.5Cr Onwards", area: "Greater Noida West" },
  { id: 9, location: "Greater Noida", type: "Residential", title: "The Kutumb", info: "2/3 BHK Family Apartments", price: "₹ 95L Onwards", area: "Techzone 4, Greater Noida" },
  { id: 10, location: "Greater Noida", type: "Residential", title: "ACE Hane", info: "3/4 BHK Smart Homes", price: "₹ 1.1Cr Onwards", area: "Sector 12, Greater Noida West" },
  { id: 11, location: "Greater Noida", type: "Residential", title: "Palm Adela", info: "3/4 BHK Premium Apartments", price: "₹ 1.6Cr Onwards", area: "Greater Noida West" },
  { id: 12, location: "Greater Noida", type: "Commercial", title: "SKA Arcadia – GN", info: "Commercial Shops & Suites", price: "₹ 55L Onwards", area: "Greater Noida West" },
  { id: 13, location: "Greater Noida", type: "Industrial", title: "Industrial Land – GN", info: "UPSIDA-Approved Industrial Land", price: "Price On Request", area: "UPSIDC Sector, Greater Noida" },

  // Noida
  { id: 14, location: "Noida", type: "Residential", title: "Solutairion City", info: "2/3/4 BHK Residences", price: "₹ 90L Onwards", area: "Sector 137, Noida" },
  { id: 15, location: "Noida", type: "Residential", title: "TNT (Rajhans)", info: "3/4 BHK Ultra Premium Flats", price: "₹ 2Cr Onwards", area: "Sector 150, Noida" },
  { id: 16, location: "Noida", type: "Commercial", title: "KB West Walk – Noida", info: "Retail & Commercial Hub", price: "₹ 60L Onwards", area: "Sector 62, Noida" },
  { id: 17, location: "Noida", type: "Industrial", title: "Warehouse – Noida", info: "Grade-A Logistics & Warehousing", price: "Price On Request", area: "Sector 57, Noida" },

  // Yamuna
  { id: 18, location: "Yamuna", type: "Residential", title: "VVIP Namah – Yamuna", info: "3/4 BHK Expressway Homes", price: "₹ 1.3Cr Onwards", area: "Sector 22D, Yamuna Expressway" },
  { id: 19, location: "Yamuna", type: "Commercial", title: "Aerocity Yamuna", info: "Commercial Plots & Suites", price: "Price On Request", area: "Yamuna Expressway" },
  { id: 20, location: "Yamuna", type: "Industrial", title: "Industrial Land – Yamuna", info: "UPSIDA-Approved Industrial Plots", price: "Price On Request", area: "Tappal, Yamuna Expressway" },

  // Other Locations
  { id: 21, location: "Other Locations", type: "Residential", title: "Premium Residences", info: "2/3/4 BHK Apartments", price: "Price On Request", area: "NCR – Various Locations" },
  { id: 22, location: "Other Locations", type: "Commercial", title: "Commercial Spaces", info: "Retail & Office Units", price: "Price On Request", area: "NCR – Various Locations" },
  { id: 23, location: "Other Locations", type: "Industrial", title: "Industrial Units", info: "Factory & Warehouse (UPSIDA Approved)", price: "Price On Request", area: "NCR – Various Locations" },
];

const ONGOING_CATEGORIES = ["Residential", "Commercial", "Premium", "Industrial"] as const;
type OngoingCategory = typeof ONGOING_CATEGORIES[number];

interface OngoingProject {
  title: string;
  info: string;
  location: string;
  category: OngoingCategory;
}

const ONGOING_PROJECTS: OngoingProject[] = [
  // Residential
  { title: "VVIP Namah", info: "3/4 BHK Luxury Residences", location: "Greater Noida West", category: "Residential" },
  { title: "The Kutumb", info: "2/3 BHK Family Apartments", location: "Yamuna Expressway", category: "Residential" },
  { title: "ACE Hane", info: "3/4 BHK Smart Homes", location: "GZB – Raj Nagar Ext.", category: "Residential" },
  { title: "Solutairion City", info: "2/3/4 BHK Societies", location: "Sector 137, Noida", category: "Residential" },

  // Commercial
  { title: "SKA Arcadia", info: "Retail Shops, Offices & Food Court", location: "Greater Noida West", category: "Commercial" },
  { title: "Iris Trehan", info: "Commercial Spaces & Co-working", location: "Crossings Republik, GZB", category: "Commercial" },
  { title: "KB West Walk", info: "Retail & Entertainment Hub", location: "Vaishali, GZB", category: "Commercial" },

  // Premium
  { title: "Palm Adela", info: "3/4 BHK Super Premium Apartments", location: "Greater Noida West", category: "Premium" },
  { title: "VVIP Addresses", info: "3/4 BHK Signature Residences", location: "Indirapuram, GZB", category: "Premium" },
  { title: "Gaur Crestella", info: "3/4 BHK Premium Living", location: "Raj Nagar Ext., GZB", category: "Premium" },
  { title: "TNT (Rajhans)", info: "Ultra-Premium 3/4 BHK Flats", location: "Sector 150, Noida", category: "Premium" },

  // Industrial
  { title: "Factory Units", info: "Ready-to-Move Factory Sheds", location: "UPSIDC Area, GZB", category: "Industrial" },
  { title: "Warehouse", info: "Grade-A Logistics & Warehousing", location: "Loni Industrial Area", category: "Industrial" },
  { title: "Industrial Land (UPSIDA Approved)", info: "Approved Plots for Manufacturing", location: "NCR – Multiple Locations", category: "Industrial" },
];

// ─────────────────────────────────────────────
// RESALE FORM
// ─────────────────────────────────────────────
function ResaleForm() {
  const [formData, setFormData] = useState({
    name: "", contact: "", propertyType: "", preferredLocation: "",
    size: "", budget: "", city: "", state: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-6 text-center">
        <div className="w-16 h-16 rounded-full bg-[#C8A24D]/10 flex items-center justify-center">
          <ShieldCheck className="w-8 h-8 text-[#C8A24D]" />
        </div>
        <h3 className="text-2xl font-bold text-[#111111]">Thank You!</h3>
        <p className="text-[#6B6B6B] max-w-md text-[15px] leading-relaxed">
          Your resale enquiry has been submitted. Our team will contact you within 24 hours with the best matching properties.
        </p>
        <button
          onClick={() => { setSubmitted(false); setFormData({ name: "", contact: "", propertyType: "", preferredLocation: "", size: "", budget: "", city: "", state: "" }); }}
          className="px-6 py-2.5 border-2 border-[#111111] text-sm font-semibold hover:bg-[#111111] hover:text-white transition-colors uppercase tracking-wide"
        >
          Submit Another
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <h3 className="text-2xl sm:text-3xl font-semibold text-[#111111] mb-3">Find Your Resale Property</h3>
        <p className="text-[#6B6B6B] text-[15px] leading-relaxed">
          Share your requirements and our experts will connect you with the best resale options across NCR — quickly and transparently.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white border border-zinc-200 shadow-sm p-8 sm:p-10 grid grid-cols-1 sm:grid-cols-2 gap-6">

        {/* Name */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-[#111111] uppercase tracking-wider">Full Name <span className="text-[#C8A24D]">*</span></label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input required name="name" value={formData.name} onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full pl-10 pr-4 py-3 border border-zinc-200 bg-[#FAFAFA] text-sm text-[#111111] focus:outline-none focus:border-[#C8A24D] transition-colors" />
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-[#111111] uppercase tracking-wider">Contact Number <span className="text-[#C8A24D]">*</span></label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input required name="contact" value={formData.contact} onChange={handleChange}
              placeholder="+91 00000 00000" type="tel"
              className="w-full pl-10 pr-4 py-3 border border-zinc-200 bg-[#FAFAFA] text-sm text-[#111111] focus:outline-none focus:border-[#C8A24D] transition-colors" />
          </div>
        </div>

        {/* Property Type */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-[#111111] uppercase tracking-wider">Property Type <span className="text-[#C8A24D]">*</span></label>
          <div className="relative">
            <Home className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
            <select required name="propertyType" value={formData.propertyType} onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-zinc-200 bg-[#FAFAFA] text-sm text-[#111111] focus:outline-none focus:border-[#C8A24D] transition-colors appearance-none">
              <option value="">Select property type</option>
              <option value="Flat">Flat</option>
              <option value="Villa">Villa</option>
              <option value="Plot">Plot</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
          </div>
        </div>

        {/* Preferred Location */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-[#111111] uppercase tracking-wider">Preferred Location <span className="text-[#C8A24D]">*</span></label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
            <select required name="preferredLocation" value={formData.preferredLocation} onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-zinc-200 bg-[#FAFAFA] text-sm text-[#111111] focus:outline-none focus:border-[#C8A24D] transition-colors appearance-none">
              <option value="">Select location</option>
              <option>GZB (Ghaziabad)</option>
              <option>Greater Noida</option>
              <option>Noida</option>
              <option>Yamuna Expressway</option>
              <option>Other Locations</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
          </div>
        </div>

        {/* Size */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-[#111111] uppercase tracking-wider">Size (sq. ft.)</label>
          <div className="relative">
            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input name="size" value={formData.size} onChange={handleChange}
              placeholder="e.g. 1200 sq. ft."
              className="w-full pl-10 pr-4 py-3 border border-zinc-200 bg-[#FAFAFA] text-sm text-[#111111] focus:outline-none focus:border-[#C8A24D] transition-colors" />
          </div>
        </div>

        {/* Budget */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-[#111111] uppercase tracking-wider">Budget <span className="text-[#C8A24D]">*</span></label>
          <div className="relative">
            <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
            <select required name="budget" value={formData.budget} onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-zinc-200 bg-[#FAFAFA] text-sm text-[#111111] focus:outline-none focus:border-[#C8A24D] transition-colors appearance-none">
              <option value="">Select budget range</option>
              <option>Below ₹ 50 Lakhs</option>
              <option>₹ 50L – ₹ 1 Cr</option>
              <option>₹ 1Cr – ₹ 2Cr</option>
              <option>₹ 2Cr – ₹ 5Cr</option>
              <option>Above ₹ 5Cr</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
          </div>
        </div>

        {/* City */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-[#111111] uppercase tracking-wider">City</label>
          <input name="city" value={formData.city} onChange={handleChange}
            placeholder="e.g. Noida"
            className="w-full px-4 py-3 border border-zinc-200 bg-[#FAFAFA] text-sm text-[#111111] focus:outline-none focus:border-[#C8A24D] transition-colors" />
        </div>

        {/* State */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-[#111111] uppercase tracking-wider">State</label>
          <input name="state" value={formData.state} onChange={handleChange}
            placeholder="e.g. Uttar Pradesh"
            className="w-full px-4 py-3 border border-zinc-200 bg-[#FAFAFA] text-sm text-[#111111] focus:outline-none focus:border-[#C8A24D] transition-colors" />
        </div>

        {/* Submit */}
        <div className="sm:col-span-2">
          <button type="submit"
            className="w-full flex items-center justify-center gap-3 py-4 bg-[#111111] text-[#C8A24D] text-sm font-bold uppercase tracking-widest hover:bg-[#C8A24D] hover:text-white transition-all duration-300">
            <Send className="w-4 h-4" />
            Submit Enquiry
          </button>
          <p className="text-center text-xs text-zinc-400 mt-3">
            Your information is secure. We do not share your details with third parties.
          </p>
        </div>
      </form>
    </div>
  );
}

// ─────────────────────────────────────────────
// NEW PROJECTS PANEL
// ─────────────────────────────────────────────
function NewProjectsPanel() {
  const [activeLocation, setActiveLocation] = useState<Location>("GZB");
  const [activeType, setActiveType] = useState<PropertyType>("Residential");

  const filtered = NEW_PROJECTS.filter(
    (p) => p.location === activeLocation && p.type === activeType
  );

  return (
    <div className="flex flex-col gap-8">
      {/* Location tabs */}
      <div className="flex flex-wrap gap-2">
        {LOCATIONS.map((loc) => (
          <button key={loc} onClick={() => setActiveLocation(loc)}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border-2 transition-all duration-200 ${activeLocation === loc
              ? "bg-[#111111] text-[#C8A24D] border-[#111111]"
              : "bg-white text-[#111111] border-zinc-300 hover:border-[#111111]"}`}>
            {loc}
          </button>
        ))}
      </div>

      {/* Property type sub-tabs */}
      <div className="flex flex-wrap gap-2 border-b border-zinc-200 pb-4">
        {PROPERTY_TYPES.map((type) => (
          <button key={type} onClick={() => setActiveType(type)}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 rounded-full border ${activeType === type
              ? "bg-[#C8A24D] text-white border-[#C8A24D]"
              : "bg-transparent text-zinc-600 border-zinc-300 hover:border-[#C8A24D] hover:text-[#C8A24D]"}`}>
            <ChevronRight className="w-3 h-3" /> {type}
          </button>
        ))}
      </div>

      {/* Project cards */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <div key={p.id} className="bg-white border border-zinc-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group">
              {/* Card header */}
              <div className="p-5 border-b border-zinc-100 flex flex-col gap-1">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#C8A24D] uppercase tracking-widest">
                  <ChevronRight className="w-3 h-3" />{activeLocation} · {activeType}
                </span>
                <h3 className="text-base font-bold text-[#111111] group-hover:text-[#C8A24D] transition-colors">{p.title}</h3>
                <p className="text-[13px] text-[#6B6B6B]">{p.info}</p>
              </div>
              {/* Card details */}
              <div className="p-5 flex flex-col gap-3 text-[13px] text-[#6B6B6B] flex-grow">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#C8A24D] shrink-0" />
                  <span>{p.area}</span>
                </div>
                <div className="flex items-center gap-2">
                  <IndianRupee className="w-3.5 h-3.5 text-[#C8A24D] shrink-0" />
                  <span className="font-semibold text-[#111111]">{p.price}</span>
                </div>
              </div>
              {/* Card action */}
              <div className="border-t border-zinc-100">
                <button className="w-full py-3 text-xs font-bold uppercase tracking-widest text-[#111111] hover:bg-[#C8A24D] hover:text-white transition-colors">
                  Enquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-16 text-center text-[#6B6B6B] font-medium">
          No projects currently listed for <strong>{activeLocation} – {activeType}</strong>. Please contact our team.
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// ONGOING PROJECTS PANEL
// ─────────────────────────────────────────────
function OngoingProjectsPanel() {
  const [activeCategory, setActiveCategory] = useState<OngoingCategory>("Residential");
  const filtered = ONGOING_PROJECTS.filter((p) => p.category === activeCategory);

  const categoryColors: Record<OngoingCategory, string> = {
    Residential: "bg-blue-50 text-blue-700 border-blue-200",
    Commercial: "bg-amber-50 text-amber-700 border-amber-200",
    Premium: "bg-purple-50 text-purple-700 border-purple-200",
    Industrial: "bg-zinc-100 text-zinc-700 border-zinc-300",
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Category tabs */}
      <div className="flex flex-wrap gap-2">
        {ONGOING_CATEGORIES.map((cat) => (
          <button key={cat} onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider border-2 transition-all duration-200 ${activeCategory === cat
              ? "bg-[#111111] text-[#C8A24D] border-[#111111]"
              : "bg-white text-[#111111] border-zinc-300 hover:border-[#111111]"}`}>
            {cat}
          </button>
        ))}
      </div>

      {/* Project list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p, idx) => (
          <div key={idx} className="bg-white border border-zinc-200 shadow-sm hover:shadow-lg transition-all duration-300 p-6 flex flex-col gap-4 group">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-base font-bold text-[#111111] group-hover:text-[#C8A24D] transition-colors leading-snug">{p.title}</h3>
              <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded border shrink-0 ${categoryColors[p.category]}`}>
                {p.category}
              </span>
            </div>
            <p className="text-[13px] text-[#6B6B6B] leading-relaxed">{p.info}</p>
            <div className="flex items-center gap-2 text-[13px] text-[#6B6B6B] mt-auto">
              <MapPin className="w-3.5 h-3.5 text-[#C8A24D] shrink-0" />
              <span>{p.location}</span>
            </div>
            <button className="w-full py-2.5 border-2 border-[#111111] text-xs font-bold uppercase tracking-widest text-[#111111] hover:bg-[#111111] hover:text-[#C8A24D] transition-all">
              Know More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// MAIN EXPORT
// ─────────────────────────────────────────────
const MAIN_TABS = ["New Projects", "Ongoing Projects", "Resale Projects"] as const;
type MainTab = typeof MAIN_TABS[number];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<MainTab>("New Projects");

  return (
    <section id="projects" className="w-full py-20 sm:py-28 bg-[#F7F7F5] shrink-0">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="flex flex-col items-center mb-12">
          <div className="w-16 h-1 bg-[#C8A24D] mb-6" />
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-[#111111] text-center mb-4">
            Our <span className="font-bold">Projects</span>
          </h2>
          <p className="text-sm text-[#6B6B6B] uppercase tracking-widest font-semibold text-center">
            Residential · Commercial · Industrial — Across NCR
          </p>
        </div>

        {/* Main tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12 border-b-2 border-zinc-200 pb-4">
          {MAIN_TABS.map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 border-b-2 -mb-[17px] ${activeTab === tab
                ? "border-[#C8A24D] text-[#C8A24D]"
                : "border-transparent text-zinc-500 hover:text-[#111111]"}`}>
              {tab}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="mt-8">
          {activeTab === "New Projects" && <NewProjectsPanel />}
          {activeTab === "Ongoing Projects" && <OngoingProjectsPanel />}
          {activeTab === "Resale Projects" && <ResaleForm />}
        </div>

      </div>
    </section>
  );
}
