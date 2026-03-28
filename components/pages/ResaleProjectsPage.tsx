"use client";

import { useState } from "react";
import { MapPin, IndianRupee, ChevronDown, User, Phone, Home, Building2, Send, ShieldCheck } from "lucide-react";

interface FormData {
  name: string;
  contact: string;
  propertyType: string;
  saleOrPurchase: string;
  preferredLocation: string;
  size: string;
  budget: string;
  city: string;
  state: string;
}

const RESALE_LISTINGS = [
  {
    id: 1,
    title: "3 BHK Ready-to-Move Flat",
    type: "Flat",
    location: "Indirapuram, GZB",
    size: "1450 sq. ft.",
    price: "₹ 95 Lakhs",
    floor: "8th Floor",
    age: "5 Years Old",
    highlights: ["Vastu Compliant", "Corner Unit", "Ample Parking"],
  },
  {
    id: 2,
    title: "2 BHK Semi-Furnished Flat",
    type: "Flat",
    location: "Sector 137, Noida",
    size: "1050 sq. ft.",
    price: "₹ 65 Lakhs",
    floor: "4th Floor",
    age: "3 Years Old",
    highlights: ["Metro Connectivity", "Gated Community", "Gym & Pool"],
  },
  {
    id: 3,
    title: "4 BHK Independent Villa",
    type: "Villa",
    location: "Greater Noida West",
    size: "3200 sq. ft.",
    price: "₹ 2.1 Cr",
    floor: "G+2",
    age: "8 Years Old",
    highlights: ["Private Garden", "2-Car Garage", "Modern Interiors"],
  },
  {
    id: 4,
    title: "Residential Plot – 200 Sq. Yd.",
    type: "Plot",
    location: "Yamuna Expressway",
    size: "200 Sq. Yards",
    price: "₹ 45 Lakhs",
    floor: "Plot",
    age: "Freehold",
    highlights: ["Clear Title", "RERA Approved Zone", "Highway Proximity"],
  },
  {
    id: 5,
    title: "3 BHK Premium Flat",
    type: "Flat",
    location: "Techzone 4, Greater Noida",
    size: "1680 sq. ft.",
    price: "₹ 1.15 Cr",
    floor: "12th Floor",
    age: "4 Years Old",
    highlights: ["High Floor View", "Club House", "24x7 Security"],
  },
  {
    id: 6,
    title: "Residential Plot – 120 Sq. Yd.",
    type: "Plot",
    location: "Raj Nagar Ext., GZB",
    size: "120 Sq. Yards",
    price: "₹ 28 Lakhs",
    floor: "Plot",
    age: "Registry Done",
    highlights: ["Road Facing", "Society Approved", "Registry Complete"],
  },
];

const TYPE_COLORS: Record<string, string> = {
  Flat: "bg-blue-50 text-blue-700 border-blue-200",
  Villa: "bg-amber-50 text-amber-700 border-amber-200",
  Plot: "bg-green-50 text-green-700 border-green-200",
};

export default function ResaleProjectsPage() {
  const [filterType, setFilterType] = useState<string>("All");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "", contact: "", propertyType: "", saleOrPurchase: "", preferredLocation: "",
    size: "", budget: "", city: "", state: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const filteredListings = filterType === "All"
    ? RESALE_LISTINGS
    : RESALE_LISTINGS.filter((l) => l.type === filterType);

  return (
    <div className="w-full bg-white">

      {/* ── Hero ── */}
      <section className="w-full bg-[#111111] py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600')] bg-cover bg-center opacity-10" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF5C00] to-transparent" />
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="w-16 h-1 bg-[#FF5C00] mb-6 mx-auto" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight mb-5">
            Resale <span className="font-bold text-[#FF5C00]">Properties</span>
          </h1>
          <p className="text-zinc-300 text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Verified resale flats, villas, and plots across NCR — curated by our experts for the best value deals.
          </p>
        </div>
      </section>

      {/* ── Resale Listings ── */}
      <section className="w-full py-16 sm:py-20 bg-[#F7F7F5]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6 mb-12">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-light text-[#111111]">
                Available <span className="font-bold">Resale Properties</span>
              </h2>
              <p className="text-[#6B6B6B] text-sm mt-1">All properties are verified and legally clear.</p>
            </div>
            {/* Type Filter - Centered and Larger */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {["All", "Flat", "Villa", "Plot"].map((t) => (
                <button key={t} onClick={() => setFilterType(t)}
                  className={`px-6 py-2.5 sm:px-8 sm:py-3 text-[13px] sm:text-[15px] font-extrabold uppercase tracking-wide rounded-full border-2 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 ${filterType === t
                    ? "bg-[#111111] text-white border-[#111111] shadow-md ring-4 ring-[#111111]/20"
                    : "bg-white text-[#111111] border-zinc-300 hover:border-[#111111] hover:bg-zinc-50"}`}>
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredListings.map((listing) => (
              <div key={listing.id} className="bg-white border border-zinc-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
                {/* Card header */}
                <div className="p-5 border-b border-zinc-100 flex justify-between items-start gap-3">
                  <div>
                    <h3 className="font-bold text-[#111111] text-base group-hover:text-[#FF5C00] transition-colors leading-snug">{listing.title}</h3>
                    <div className="flex items-center gap-1.5 mt-1.5 text-[13px] text-[#6B6B6B]">
                      <MapPin className="w-3.5 h-3.5 text-[#FF5C00] shrink-0" />
                      {listing.location}
                    </div>
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded border shrink-0 ${TYPE_COLORS[listing.type]}`}>
                    {listing.type}
                  </span>
                </div>

                {/* Card details */}
                <div className="p-5 flex flex-col gap-3 flex-grow">
                  <div className="grid grid-cols-2 gap-3 text-[13px]">
                    <div className="flex items-center gap-2 text-[#6B6B6B]">
                      <Building2 className="w-3.5 h-3.5 text-[#FF5C00]" />
                      {listing.size}
                    </div>
                    <div className="flex items-center gap-2 text-[#6B6B6B]">
                      <Home className="w-3.5 h-3.5 text-[#FF5C00]" />
                      {listing.floor}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[13px]">
                    <IndianRupee className="w-3.5 h-3.5 text-[#FF5C00] shrink-0" />
                    <span className="font-bold text-[#111111] text-base">{listing.price}</span>
                    <span className="text-zinc-400 text-[11px] ml-auto">{listing.age}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {listing.highlights.map((h) => (
                      <span key={h} className="text-[10px] font-semibold px-2 py-0.5 bg-[#F7F7F5] border border-zinc-200 text-[#6B6B6B]">{h}</span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="border-t border-zinc-100 grid grid-cols-2">
                  <button className="py-3.5 text-xs font-bold uppercase tracking-wide text-[#6B6B6B] bg-[#F7F7F5] hover:bg-zinc-200 transition-colors border-r border-zinc-100">
                    View Details
                  </button>
                  <a href="tel:+919220034416"
                    className="py-3.5 text-xs font-bold uppercase tracking-wide text-[#111111] bg-[#efefef] hover:bg-[#FF5C00] hover:text-white transition-colors text-center flex items-center justify-center gap-1.5">
                    <Phone className="w-3 h-3" /> Call Now
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* ── Lead Gen Form ── */}
          <div id="enquiry" className="bg-white border border-zinc-200 shadow-sm p-8 sm:p-12">
            <div className="text-center mb-10">
              <div className="w-12 h-1 bg-[#FF5C00] mx-auto mb-5" />
              <h2 className="text-2xl sm:text-3xl font-light text-[#111111] mb-3">
                Want to Purchase or <span className="font-bold">Resale?</span>
              </h2>
              <p className="text-[#6B6B6B] text-[15px] max-w-xl mx-auto leading-relaxed">
                Share your exact requirement and our resale experts will personally curate the best matching options across NCR — completely free of charge.
              </p>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 gap-5 text-center">
                <div className="w-16 h-16 rounded-full bg-[#FF5C00]/10 flex items-center justify-center">
                  <ShieldCheck className="w-8 h-8 text-[#FF5C00]" />
                </div>
                <h3 className="text-2xl font-bold text-[#111111]">Enquiry Received!</h3>
                <p className="text-[#6B6B6B] text-[15px] leading-relaxed max-w-sm">
                  Our team will contact you within 24 hours with the best matching resale properties.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: "", contact: "", propertyType: "", saleOrPurchase: "", preferredLocation: "", size: "", budget: "", city: "", state: "" }); }}
                  className="px-6 py-2.5 border-2 border-[#111111] text-sm font-semibold hover:bg-[#111111] hover:text-white transition-colors uppercase tracking-wide"
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-[#111111] uppercase tracking-wider">Full Name <span className="text-[#FF5C00]">*</span></label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <input required name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name"
                      className="w-full pl-10 pr-4 py-3 border border-zinc-200 bg-[#FAFAFA] text-sm text-[#111111] focus:outline-none focus:border-[#FF5C00] transition-colors" />
                  </div>
                </div>
                {/* Contact */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-[#111111] uppercase tracking-wider">Contact Number <span className="text-[#FF5C00]">*</span></label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <input required name="contact" value={formData.contact} onChange={handleChange} placeholder="+91 00000 00000" type="tel"
                      className="w-full pl-10 pr-4 py-3 border border-zinc-200 bg-[#FAFAFA] text-sm text-[#111111] focus:outline-none focus:border-[#FF5C00] transition-colors" />
                  </div>
                </div>
                {/* Property Type */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-[#111111] uppercase tracking-wider">Property Type <span className="text-[#FF5C00]">*</span></label>
                  <div className="relative">
                    <Home className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                    <select required name="propertyType" value={formData.propertyType} onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-zinc-200 bg-[#FAFAFA] text-sm text-[#111111] focus:outline-none focus:border-[#FF5C00] transition-colors appearance-none">
                      <option value="">Select property type</option>
                      <option>Flat</option>
                      <option>Villa</option>
                      <option>Plot</option>
                      <option>Independent House</option>
                      <option>Commercial</option>
                      <option>Industrial</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                  </div>
                </div>
                {/* Sale or Purchase */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-[#111111] uppercase tracking-wider">Requirement Type <span className="text-[#FF5C00]">*</span></label>
                  <div className="flex gap-6 pt-1">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input type="radio" name="saleOrPurchase" value="Purchase" checked={formData.saleOrPurchase === "Purchase"} onChange={handleChange}
                        className="accent-[#FF5C00] w-4 h-4" required />
                      <span className="text-sm font-semibold text-[#111111] group-hover:text-[#FF5C00] transition-colors">Purchase</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input type="radio" name="saleOrPurchase" value="Sale" checked={formData.saleOrPurchase === "Sale"} onChange={handleChange}
                        className="accent-[#FF5C00] w-4 h-4" />
                      <span className="text-sm font-semibold text-[#111111] group-hover:text-[#FF5C00] transition-colors">Sale</span>
                    </label>
                  </div>
                </div>
                {/* Location */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-[#111111] uppercase tracking-wider">Preferred Location <span className="text-[#FF5C00]">*</span></label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                    <select required name="preferredLocation" value={formData.preferredLocation} onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-zinc-200 bg-[#FAFAFA] text-sm text-[#111111] focus:outline-none focus:border-[#FF5C00] transition-colors appearance-none">
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
                    <input name="size" value={formData.size} onChange={handleChange} placeholder="e.g. 1200 sq. ft."
                      className="w-full pl-10 pr-4 py-3 border border-zinc-200 bg-[#FAFAFA] text-sm text-[#111111] focus:outline-none focus:border-[#FF5C00] transition-colors" />
                  </div>
                </div>
                {/* Budget – Manual text entry in Indian Rupees */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-[#111111] uppercase tracking-wider">Budget (₹) <span className="text-[#FF5C00]">*</span></label>
                  <div className="relative">
                    <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <input required name="budget" value={formData.budget} onChange={handleChange}
                      placeholder="e.g. 75 Lakhs or 1.5 Crore"
                      className="w-full pl-10 pr-4 py-3 border border-zinc-200 bg-[#FAFAFA] text-sm text-[#111111] focus:outline-none focus:border-[#FF5C00] transition-colors" />
                  </div>
                </div>
                {/* City */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-[#111111] uppercase tracking-wider">City</label>
                  <input name="city" value={formData.city} onChange={handleChange} placeholder="e.g. Noida"
                    className="w-full px-4 py-3 border border-zinc-200 bg-[#FAFAFA] text-sm text-[#111111] focus:outline-none focus:border-[#FF5C00] transition-colors" />
                </div>
                {/* State */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-[#111111] uppercase tracking-wider">State</label>
                  <input name="state" value={formData.state} onChange={handleChange} placeholder="e.g. Uttar Pradesh"
                    className="w-full px-4 py-3 border border-zinc-200 bg-[#FAFAFA] text-sm text-[#111111] focus:outline-none focus:border-[#FF5C00] transition-colors" />
                </div>
                {/* Submit */}
                <div className="sm:col-span-2">
                  <button type="submit"
                    className="w-full flex items-center justify-center gap-3 py-4 bg-[#111111] text-[#FF5C00] text-sm font-bold uppercase tracking-widest hover:bg-[#FF5C00] hover:text-white transition-all duration-300">
                    <Send className="w-4 h-4" /> Submit Resale Enquiry
                  </button>
                  <p className="text-center text-xs text-zinc-400 mt-3">
                    100% confidential. We never share your information with third parties.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
