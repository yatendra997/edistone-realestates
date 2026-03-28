"use client";

import { useState } from "react";
import { MapPin, ChevronRight, Phone, Send, User, Mail, Home, MessageSquare, ShieldCheck, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { NEW_PROJECTS, LOCATIONS, PROPERTY_TYPES, OTHER_LOCATIONS, type Location, type PropertyType, type Project } from "../../data/projects";



const BADGE_COLORS: Record<string, string> = {
  Hot: "bg-red-500 text-white",
  New: "bg-green-600 text-white",
  Premium: "bg-[#FF5C00] text-white",
};

// Requirement form for Other Locations
function OtherLocationsSection() {
  const [formData, setFormData] = useState({
    name: "", contact: "", email: "", propertyType: "", location: "", comments: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="text-center">
        <h3 className="text-2xl sm:text-3xl font-light text-[#111111] mb-3">
          Projects in <span className="font-bold">Other Locations</span>
        </h3>
        <p className="text-[#6B6B6B] text-[15px] max-w-xl mx-auto mb-8">
          We have investment opportunities across India. Share your requirement and our expert team will assist you.
        </p>
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {OTHER_LOCATIONS.map((loc) => (
            <span key={loc} className="px-5 py-2.5 bg-[#111111] text-[#FF5C00] text-xs font-bold uppercase tracking-widest border border-[#FF5C00]/30">
              {loc}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-white border border-zinc-200 shadow-sm p-8 sm:p-10 max-w-2xl mx-auto w-full">
        <div className="text-center mb-8">
          <div className="w-10 h-1 bg-[#FF5C00] mx-auto mb-4" />
          <h4 className="text-xl font-bold text-[#111111] mb-2">Submit Your Requirement</h4>
          <p className="text-[#6B6B6B] text-sm">Tell us what you&apos;re looking for and we&apos;ll find the perfect match.</p>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center py-12 gap-5 text-center">
            <div className="w-16 h-16 rounded-full bg-[#FF5C00]/10 flex items-center justify-center">
              <ShieldCheck className="w-8 h-8 text-[#FF5C00]" />
            </div>
            <h3 className="text-xl font-bold text-[#111111]">Requirement Received!</h3>
            <p className="text-[#6B6B6B]">Our team will reach out to you within 24 hours.</p>
            <button onClick={() => { setSubmitted(false); setFormData({ name: "", contact: "", email: "", propertyType: "", location: "", comments: "" }); }}
              className="px-6 py-2.5 border-2 border-[#111111] text-sm font-semibold hover:bg-[#111111] hover:text-white transition-colors uppercase tracking-wide">
              Submit Another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-[#111111] uppercase tracking-wider">Name <span className="text-[#FF5C00]">*</span></label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <input required name="name" value={formData.name} onChange={handleChange} placeholder="Your full name"
                  className="w-full pl-10 pr-4 py-3 border border-zinc-200 bg-[#FAFAFA] text-sm text-[#111111] focus:outline-none focus:border-[#FF5C00] transition-colors" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-[#111111] uppercase tracking-wider">Contact <span className="text-[#FF5C00]">*</span></label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <input required name="contact" value={formData.contact} onChange={handleChange} placeholder="+91 00000 00000" type="tel"
                  className="w-full pl-10 pr-4 py-3 border border-zinc-200 bg-[#FAFAFA] text-sm text-[#111111] focus:outline-none focus:border-[#FF5C00] transition-colors" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label className="text-xs font-bold text-[#111111] uppercase tracking-wider">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <input name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" type="email"
                  className="w-full pl-10 pr-4 py-3 border border-zinc-200 bg-[#FAFAFA] text-sm text-[#111111] focus:outline-none focus:border-[#FF5C00] transition-colors" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-[#111111] uppercase tracking-wider">Property Type <span className="text-[#FF5C00]">*</span></label>
              <div className="relative">
                <Home className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                <select required name="propertyType" value={formData.propertyType} onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-zinc-200 bg-[#FAFAFA] text-sm text-[#111111] focus:outline-none focus:border-[#FF5C00] transition-colors appearance-none">
                  <option value="">Select type</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Industrial</option>
                  <option>Plot / Land</option>
                  <option>Villa</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-[#111111] uppercase tracking-wider">Preferred Location <span className="text-[#FF5C00]">*</span></label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                <select required name="location" value={formData.location} onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-zinc-200 bg-[#FAFAFA] text-sm text-[#111111] focus:outline-none focus:border-[#FF5C00] transition-colors appearance-none">
                  <option value="">Select location</option>
                  {OTHER_LOCATIONS.map((loc) => <option key={loc}>{loc}</option>)}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label className="text-xs font-bold text-[#111111] uppercase tracking-wider flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-[#FF5C00]" /> Comments
              </label>
              <textarea name="comments" value={formData.comments} onChange={handleChange}
                rows={3} placeholder="Tell us about your specific requirements..."
                className="w-full px-4 py-3 border border-zinc-200 bg-[#FAFAFA] text-sm text-[#111111] focus:outline-none focus:border-[#FF5C00] transition-colors resize-none" />
            </div>
            <div className="sm:col-span-2">
              <button type="submit"
                className="w-full flex items-center justify-center gap-3 py-4 bg-[#111111] text-[#FF5C00] text-sm font-bold uppercase tracking-widest hover:bg-[#FF5C00] hover:text-white transition-all duration-300">
                <Send className="w-4 h-4" /> Submit Requirement
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default function NewProjectsPage() {
  const [activeLocation, setActiveLocation] = useState<Location>("Ghaziabad");
  const [activeType, setActiveType] = useState<PropertyType>("Residential");

  const filtered = NEW_PROJECTS.filter(
    (p) => p.location === activeLocation && p.type === activeType
  );

  return (
    <div className="w-full bg-white">

      {/* ── Hero ── */}
      <section className="w-full bg-[#111111] min-h-[60vh] sm:min-h-[80vh] lg:min-h-screen flex items-center justify-center relative overflow-hidden py-28 sm:py-32">
        {/* Background image & overlays */}
        <div className="absolute inset-0 bg-[url('/Projects.jpg')] bg-cover bg-center bg-no-repeat opacity-100" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF5C00] to-transparent z-20" />

        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center mt-10">
          <div className="w-16 h-1.5 bg-[#FF5C00] mb-8 mx-auto shadow-lg rounded-full" />
          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white tracking-tight mb-6 sm:mb-8 drop-shadow-2xl">
            New / Ongoing <span className="font-black text-[#FF5C00]">Projects</span>
          </h1>
          <p className="text-white/95 text-base sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed font-light drop-shadow-lg">
            Explore our latest and ongoing residential, commercial, and industrial projects across Ghaziabad, Greater Noida, Noida, Yamuna Expressway and beyond.
          </p>
        </div>
      </section>

      {/* ── Projects Browser ── */}
      <section className="w-full py-16 sm:py-20 bg-[#F7F7F5]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Location Tabs */}
          <div className="mb-10 text-center">
            <p className="text-[11px] font-bold text-[#6B6B6B] uppercase tracking-[0.2em] mb-6">Select Location</p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {LOCATIONS.map((loc) => (
                <button key={loc} onClick={() => setActiveLocation(loc)}
                  className={`px-6 py-2.5 sm:px-8 sm:py-3 text-[13px] sm:text-[15px] font-extrabold uppercase tracking-wide rounded-full border-2 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 ${activeLocation === loc
                    ? "bg-[#111111] text-white border-[#111111] shadow-md ring-4 ring-[#111111]/20"
                    : "bg-white text-[#111111] border-zinc-300 hover:border-[#111111] hover:bg-zinc-50"}`}>
                  {loc}
                </button>
              ))}
            </div>
          </div>

          {activeLocation === "Other Locations" ? (
            <OtherLocationsSection />
          ) : (
            <>
              {/* Property Type Pills */}
              <div className="mb-12 text-center">
                <p className="text-[11px] font-bold text-[#6B6B6B] uppercase tracking-[0.2em] mb-6">Property Type</p>
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                  {PROPERTY_TYPES.map((type) => (
                    <button key={type} onClick={() => setActiveType(type)}
                      className={`flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-2.5 text-[13px] sm:text-[15px] font-bold uppercase tracking-wide transition-all duration-200 rounded-full border-2 hover:shadow-lg hover:-translate-y-1 ${activeType === type
                        ? "bg-[#FF5C00] text-white border-[#FF5C00] shadow-md ring-4 ring-[#FF5C00]/20"
                        : "bg-white text-[#6B6B6B] border-zinc-300 hover:border-[#FF5C00] hover:text-[#FF5C00]"}`}>
                      <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${activeType === type ? 'rotate-90' : ''}`} /> {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Count */}
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
                    <div key={p.id} className="bg-white border border-zinc-200 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col group overflow-hidden rounded-xl hover:-translate-y-1">
                      {/* Image Container */}
                      <div className="relative w-full h-56 sm:h-64 overflow-hidden">
                        <Image 
                          src={p.image} 
                          alt={p.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Strong gradient for text overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                        {/* Property type badge */}
                        <div className="absolute top-3 left-3 bg-[#FF5C00] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white rounded-full shadow-md">
                          {p.type}
                        </div>
                        {/* Status badge */}
                        {p.badge && (
                          <div className={`absolute top-3 right-3 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white rounded-full shadow-md ${
                            p.badge === 'Hot' ? 'bg-red-500' :
                            p.badge === 'New' ? 'bg-green-600' : 'bg-[#FF5C00]'
                          }`}>
                            {p.badge}
                          </div>
                        )}
                        {/* Location badge */}
                        <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
                          <MapPin className="w-3 h-3 text-[#FF5C00]" />
                          <span className="text-[10px] font-bold text-white/90 uppercase tracking-widest">{p.location}</span>
                        </div>
                      </div>

                      {/* Card body */}
                      <div className="p-5 flex flex-col gap-2 flex-grow bg-white">
                        <h3 className="text-lg font-bold text-[#111111] group-hover:text-[#FF5C00] transition-colors duration-300 leading-snug">{p.title}</h3>
                        <p className="text-[13px] text-[#6B6B6B] leading-relaxed line-clamp-2">{p.info}</p>
                      </div>
                      
                      {/* Card action */}
                      <div className="px-5 pb-5 mt-auto bg-white">
                        {p.slug ? (
                          <Link href={`/projects/${p.slug}`}
                            className="w-full py-3.5 text-xs font-bold uppercase tracking-widest text-white bg-[#FF5C00] hover:bg-[#111111] rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 group/btn shadow-md">
                            Enquire Now <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                        ) : (
                          <button className="w-full py-3.5 text-xs font-bold uppercase tracking-widest text-white bg-[#FF5C00] hover:bg-[#111111] rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 group/btn shadow-md">
                            Enquire Now <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </button>
                        )}
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
                  <a href="tel:+919220034416"
                    className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-[#111111] text-[#FF5C00] text-sm font-bold uppercase tracking-widest hover:bg-[#FF5C00] hover:text-white transition-colors">
                    <Phone className="w-4 h-4" /> Call Sales Team
                  </a>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="w-full py-16 bg-[#111111]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-light text-white mb-3">
            Looking for something <span className="font-bold text-[#FF5C00]">specific?</span>
          </h2>
          <p className="text-zinc-400 text-[15px] mb-8 leading-relaxed">
            Our sales team can help you find the perfect property that matches your needs and budget.
          </p>
          <a href="tel:+919220034416"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#FF5C00] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#cc4a00] transition-colors">
            <Phone className="w-4 h-4" /> +91 92200 34416
          </a>
        </div>
      </section>
    </div>
  );
}
