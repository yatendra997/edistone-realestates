"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Building2, MapPin, IndianRupee, ShieldCheck, ChevronDown, ChevronRight, Send, User, Phone, Home, Mail, MessageSquare } from "lucide-react";

import { LOCATIONS, PROPERTY_TYPES, NEW_PROJECTS, OTHER_LOCATIONS, type Location, type PropertyType, type Project } from "../../data/projects";

// ─────────────────────────────────────────────
// RESALE FORM
// ─────────────────────────────────────────────
function ResaleForm() {
  const [formData, setFormData] = useState({
    name: "", contact: "", email: "", propertyType: "", saleOrPurchase: "",
    preferredLocation: "", size: "", budget: "", city: "", state: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-6 text-center">
        <div className="w-16 h-16 rounded-full bg-[#FF5C00]/10 flex items-center justify-center">
          <ShieldCheck className="w-8 h-8 text-[#FF5C00]" />
        </div>
        <h3 className="text-2xl font-bold text-[#111111]">Thank You!</h3>
        <p className="text-[#6B6B6B] max-w-md text-[15px] leading-relaxed">
          Your enquiry has been submitted. Our team will contact you within 24 hours with the best matching properties.
        </p>
        <button
          onClick={() => { setSubmitted(false); setFormData({ name: "", contact: "", email: "", propertyType: "", saleOrPurchase: "", preferredLocation: "", size: "", budget: "", city: "", state: "" }); }}
          className="px-8 py-3 bg-white border-2 border-[#111111] text-[#111111] text-sm font-bold rounded-lg hover:bg-[#111111] hover:text-white transition-colors uppercase tracking-widest shadow-sm"
        >
          Submit Another
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <h3 className="text-2xl sm:text-3xl font-semibold text-[#111111] mb-3">Want to Purchase or Resale?</h3>
        <p className="text-[#6B6B6B] text-[15px] leading-relaxed">
          Share your requirements and our experts will connect you with the best resale options across NCR — quickly and transparently.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white border border-zinc-200 shadow-sm p-8 sm:p-10 grid grid-cols-1 sm:grid-cols-2 gap-6">

        {/* Name */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-[#111111] uppercase tracking-wider">Full Name <span className="text-[#FF5C00]">*</span></label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input required name="name" value={formData.name} onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full pl-10 pr-4 py-3 border border-zinc-200 bg-[#FAFAFA] text-sm text-[#111111] focus:outline-none focus:border-[#FF5C00] transition-colors" />
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-[#111111] uppercase tracking-wider">Contact Number <span className="text-[#FF5C00]">*</span></label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input required name="contact" value={formData.contact} onChange={handleChange}
              placeholder="+91 00000 00000" type="tel"
              className="w-full pl-10 pr-4 py-3 border border-zinc-200 bg-[#FAFAFA] text-sm text-[#111111] focus:outline-none focus:border-[#FF5C00] transition-colors" />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label className="text-xs font-bold text-[#111111] uppercase tracking-wider">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input name="email" value={formData.email} onChange={handleChange}
              placeholder="you@example.com" type="email"
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
              <option value="Flat">Flat</option>
              <option value="Villa">Villa</option>
              <option value="Plot">Plot</option>
              <option value="Independent House">Independent House</option>
              <option value="Commercial">Commercial</option>
              <option value="Industrial">Industrial</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
          </div>
        </div>

        {/* Sale or Purchase */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-[#111111] uppercase tracking-wider">Requirement Type <span className="text-[#FF5C00]">*</span></label>
          <div className="flex gap-4 pt-1">
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

        {/* Preferred Location */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-[#111111] uppercase tracking-wider">Preferred Location <span className="text-[#FF5C00]">*</span></label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
            <select required name="preferredLocation" value={formData.preferredLocation} onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-zinc-200 bg-[#FAFAFA] text-sm text-[#111111] focus:outline-none focus:border-[#FF5C00] transition-colors appearance-none">
              <option value="">Select location</option>
              <option>Ghaziabad</option>
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
              className="w-full pl-10 pr-4 py-3 border border-zinc-200 bg-[#FAFAFA] text-sm text-[#111111] focus:outline-none focus:border-[#FF5C00] transition-colors" />
          </div>
        </div>

        {/* Budget – Manual text field in Indian Rupees */}
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
          <input name="city" value={formData.city} onChange={handleChange}
            placeholder="e.g. Noida"
            className="w-full px-4 py-3 border border-zinc-200 bg-[#FAFAFA] text-sm text-[#111111] focus:outline-none focus:border-[#FF5C00] transition-colors" />
        </div>

        {/* State */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-[#111111] uppercase tracking-wider">State</label>
          <input name="state" value={formData.state} onChange={handleChange}
            placeholder="e.g. Uttar Pradesh"
            className="w-full px-4 py-3 border border-zinc-200 bg-[#FAFAFA] text-sm text-[#111111] focus:outline-none focus:border-[#FF5C00] transition-colors" />
        </div>

        {/* Submit */}
        <div className="sm:col-span-2 pt-2">
          <button type="submit"
            className="w-full flex items-center justify-center gap-3 py-4 bg-[#FF5C00] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#111111] rounded-lg transition-all duration-300 shadow-md hover:shadow-lg group">
            <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            Submit Enquiry
          </button>
          <p className="text-center text-xs text-zinc-500 mt-4">
            Your information is secure. We do not share your details with third parties.
          </p>
        </div>
      </form>
    </div>
  );
}

// ─────────────────────────────────────────────
// OTHER LOCATIONS REQUIREMENT FORM
// ─────────────────────────────────────────────
function OtherLocationsForm() {
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
      {/* Location Pills */}
      <div className="flex flex-col items-center mb-4">
        <div className="w-12 h-1 bg-[#FF5C00] mx-auto mb-5" />
        <h3 className="text-2xl sm:text-3xl font-light text-[#111111] mb-3 text-center">
          Projects in <span className="font-bold">Other Locations</span>
        </h3>
        <p className="text-[#6B6B6B] text-[15px] text-center max-w-xl mb-8">
          We have project availability and investment opportunities across India. Share your requirement and our expert team will assist you.
        </p>
        <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
          {OTHER_LOCATIONS.map((loc) => (
            <span key={loc} className="px-6 py-3 sm:px-8 sm:py-3.5 bg-zinc-50 text-[#111111] text-sm sm:text-base font-extrabold uppercase tracking-wide border-2 border-zinc-200 rounded-full shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-[#FF5C00] hover:text-[#FF5C00] transition-all duration-300 cursor-default">
              {loc}
            </span>
          ))}
        </div>
      </div>

      {/* Requirement Form */}
      <div className="bg-white border border-zinc-200 shadow-sm p-8 sm:p-10 max-w-2xl mx-auto w-full">
        <div className="text-center mb-8">
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
              className="px-8 py-3 bg-white border-2 border-[#111111] text-[#111111] text-sm font-bold rounded-lg hover:bg-[#111111] hover:text-white transition-colors uppercase tracking-widest shadow-sm">
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
            <div className="sm:col-span-2 pt-2">
              <button type="submit"
                className="w-full flex items-center justify-center gap-3 py-4 bg-[#FF5C00] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#111111] rounded-lg transition-all duration-300 shadow-md hover:shadow-lg group">
                <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" /> Submit Requirement
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

const ImageWithFallback = ({ title, defaultImage, alt, className }: { title: string, defaultImage: string, alt: string, className?: string }) => {
  const [imgSrc, setImgSrc] = useState(defaultImage);
  const [errorCount, setErrorCount] = useState(0);

  const getFallbacks = (title: string, defaultImg: string) => {
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const firstName = slug.split('-')[0];
    const secondWord = slug.split('-').length > 1 ? slug.split('-')[1] : '';

    const possiblePaths = [
      defaultImg,
      `/Project-images/${slug}.jpg`,
      `/Project-images/${slug}.png`,
      `/Project-images/${slug}.webp`,
      `/Project-images/${slug}.jpeg`,
      `/Project-images/${firstName}.jpg`,
      `/Project-images/${firstName}.png`,
      `/Project-images/${firstName}.webp`,
      `/Project-images/${firstName}.jpeg`,
      `/${slug}.jpg`,
      `/${slug}.png`,
      `/${slug}.webp`,
      `/${slug}.jpeg`,
      `/${firstName}.jpg`,
      `/${firstName}.png`,
      `/${firstName}.webp`,
      `/${firstName}.jpeg`,
    ];

    if (firstName === 'the' && secondWord) {
      possiblePaths.push(`/Project-images/${secondWord}.jpg`);
      possiblePaths.push(`/${secondWord}.jpg`);
    }

    return Array.from(new Set(possiblePaths));
  };

  const fallbacks = getFallbacks(title, defaultImage);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      className={className}
      onError={() => {
        if (errorCount < fallbacks.length - 1) {
          const nextIndex = errorCount + 1;
          setErrorCount(nextIndex);
          setImgSrc(fallbacks[nextIndex]);
        }
      }}
    />
  );
};

// ─────────────────────────────────────────────
// NEW / ONGOING PROJECTS PANEL (merged)
// ─────────────────────────────────────────────
function NewOngoingProjectsPanel() {
  const [activeLocation, setActiveLocation] = useState<Location>("Ghaziabad");
  const [activeType, setActiveType] = useState<PropertyType>("Residential");

  const filtered = NEW_PROJECTS.filter(
    (p) => p.location === activeLocation && p.type === activeType
  );

  let content;
  if (activeLocation === "Other Locations") {
    content = <OtherLocationsForm />;
  } else if (filtered.length > 0) {
    content = (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <div key={p.id} className="bg-white border border-zinc-200 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col group overflow-hidden rounded-xl hover:-translate-y-1">
            {/* Image Container */}
            <div className="relative w-full h-56 sm:h-64 overflow-hidden">
              <ImageWithFallback
                title={p.title}
                defaultImage={p.image}
                alt={p.title}
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Strong gradient for text overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
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
                <span className="text-[10px] font-bold text-white/90 uppercase tracking-widest">{activeLocation}</span>
              </div>
            </div>

            {/* Card body */}
            <div className="p-5 flex flex-col gap-2 flex-grow">
              <h3 className="text-lg font-bold text-[#111111] group-hover:text-[#FF5C00] transition-colors duration-300 leading-snug">{p.title}</h3>
              <p className="text-[13px] text-[#6B6B6B] leading-relaxed line-clamp-2">{p.info}</p>
            </div>

            {/* Card action */}
            <div className="px-5 pb-5 mt-auto">
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
    );
  } else {
    content = (
      <div className="py-16 text-center text-[#6B6B6B] font-medium">
        No projects currently listed for <strong>{activeLocation} – {activeType}</strong>. Please contact our team.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Filters Container — normal flow, not sticky */}
      <div className="bg-[#F7F7F5] py-4 flex flex-col gap-3 border border-zinc-200/60 rounded-xl px-4 sm:px-6">

        {/* Location tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {LOCATIONS.map((loc) => (
            <button key={loc} onClick={() => setActiveLocation(loc)}
              className={`px-4 py-2 sm:px-5 sm:py-2 text-[12px] sm:text-[13px] font-extrabold uppercase tracking-wide rounded-full border-2 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 ${activeLocation === loc
                ? "bg-[#111111] text-white border-[#111111] shadow-md"
                : "bg-white text-[#111111] border-zinc-300 hover:border-[#111111] hover:bg-zinc-50"}`}>
              {loc}
            </button>
          ))}
        </div>

        {/* Property type sub-tabs */}
        {activeLocation !== "Other Locations" && (
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 pt-1">
            {PROPERTY_TYPES.map((type) => (
              <button key={type} onClick={() => setActiveType(type)}
                className={`flex items-center gap-1.5 px-4 py-1.5 sm:px-5 sm:py-2 text-[12px] sm:text-[13px] font-bold uppercase tracking-wide transition-all duration-300 rounded-full border-2 hover:shadow-md hover:-translate-y-0.5 ${activeType === type
                  ? "bg-[#FF5C00] text-white border-[#FF5C00] shadow-md"
                  : "bg-white text-zinc-600 border-zinc-300 hover:border-[#FF5C00] hover:text-[#FF5C00]"}`}>
                <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-300 ${activeType === type ? 'rotate-90' : ''}`} /> {type}
              </button>
            ))}
          </div>
        )}
      </div>

      <div>
        {content}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// MAIN EXPORT
// ─────────────────────────────────────────────
const MAIN_TABS = ["New / Ongoing Projects", "Resale Projects"] as const;
type MainTab = typeof MAIN_TABS[number];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<MainTab>("New / Ongoing Projects");

  return (
    <section id="projects" className="w-full pt-10 pb-20 sm:pt-12 sm:pb-28 bg-[#F7F7F5] shrink-0">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-[#FF5C00]" />
            <Building2 className="w-5 h-5 text-[#FF5C00]" />
            <div className="w-12 h-0.5 bg-[#FF5C00]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-[#111111] text-center mb-3">
            Our <span className="font-bold">Projects</span>
          </h2>
          <p className="text-sm text-[#6B6B6B] uppercase tracking-widest font-semibold text-center">
            Residential · Commercial · Industrial — Across NCR &amp; India
          </p>
        </div>

        {/* Main tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white p-1.5 rounded-full border border-zinc-200 shadow-sm overflow-x-auto max-w-full hide-scrollbar">
            {MAIN_TABS.map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`px-6 sm:px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 rounded-full whitespace-nowrap ${activeTab === tab
                  ? "bg-[#111111] text-[#FF5C00] shadow-md"
                  : "bg-transparent text-zinc-500 hover:text-[#111111] hover:bg-zinc-50"}`}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <div className="mt-8">
          {activeTab === "New / Ongoing Projects" && <NewOngoingProjectsPanel />}
          {activeTab === "Resale Projects" && <ResaleForm />}
        </div>

      </div>
    </section>
  );
}
