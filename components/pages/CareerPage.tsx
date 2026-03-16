"use client";

import { useState } from "react";
import { Briefcase, MapPin, Clock, ChevronRight, Send, User, Phone, Mail, X } from "lucide-react";

const OPENINGS = [
  {
    id: 1,
    title: "Senior Sales Executive",
    department: "Sales & Business Development",
    location: "Ghaziabad / Greater Noida",
    type: "Full-time",
    experience: "2–5 Years",
    description:
      "Drive property sales for our residential and commercial portfolio. Build client relationships, conduct site visits, and achieve monthly targets. Strong communication and a passion for real estate required.",
    skills: ["Property Sales", "Client Management", "CRM Tools", "Negotiation", "NCR Market Knowledge"],
  },
  {
    id: 2,
    title: "Digital Marketing Manager",
    department: "Marketing",
    location: "Ghaziabad (On-site)",
    type: "Full-time",
    experience: "3–6 Years",
    description:
      "Lead digital campaigns across Google, Meta, and YouTube. Manage SEO, SEM, content strategy, and lead generation pipelines. Real estate marketing experience preferred.",
    skills: ["SEO/SEM", "Meta Ads", "Google Ads", "Content Strategy", "Lead Generation", "Analytics"],
  },
  {
    id: 3,
    title: "CRM & Operations Executive",
    department: "Operations",
    location: "Ghaziabad (On-site)",
    type: "Full-time",
    experience: "1–3 Years",
    description:
      "Manage client records, post-sale documentation, and coordinate with internal teams to ensure seamless transaction management. Detail-oriented professionals preferred.",
    skills: ["CRM Software", "MS Excel", "Documentation", "Client Communication", "Follow-ups"],
  },
  {
    id: 4,
    title: "Property Advisor – Industrial",
    department: "Sales – Industrial Division",
    location: "Noida / Greater Noida",
    type: "Full-time",
    experience: "2–4 Years",
    description:
      "Assist industrial clients in identifying UPSIDA-approved factory, warehouse, and land options across NCR. Prior experience in industrial real estate is a strong advantage.",
    skills: ["Industrial Properties", "B2B Sales", "UPSIDA Knowledge", "Site Coordination", "Client Advisory"],
  },
  {
    id: 5,
    title: "Junior Graphic Designer",
    department: "Creative & Design",
    location: "Ghaziabad (On-site / Hybrid)",
    type: "Full-time",
    experience: "1–2 Years",
    description:
      "Create marketing collateral, social media creatives, brochures, and property presentations. Proficiency in Adobe Suite and Canva required. Real estate design experience is a plus.",
    skills: ["Photoshop", "Illustrator", "Canva", "Social Media Design", "Brochure Design"],
  },
  {
    id: 6,
    title: "Telecaller / Pre-Sales Executive",
    department: "Inside Sales",
    location: "Ghaziabad (On-site)",
    type: "Full-time",
    experience: "0–2 Years",
    description:
      "Handle inbound and outbound calls, qualify leads, and schedule site visits. Excellent Hindi and English communication skills required. Freshers with great communication skills welcome.",
    skills: ["Lead Qualification", "Telecalling", "Hindi/English Fluency", "CRM Entry", "Target-oriented"],
  },
];

const PERKS = [
  { icon: "💼", title: "Competitive Compensation", desc: "Market-leading salaries with performance bonuses and incentives." },
  { icon: "📈", title: "Growth-First Culture", desc: "Clear career progression paths and internal promotion opportunities." },
  { icon: "🏠", title: "Real Estate Benefits", desc: "Special employee pricing on properties and referral rewards." },
  { icon: "🎓", title: "Learning & Development", desc: "Sponsored training, certifications, and industry workshops." },
  { icon: "🤝", title: "Collaborative Team", desc: "Work with experienced professionals in a dynamic, inclusive environment." },
  { icon: "📍", title: "Prime Locations", desc: "Offices across Ghaziabad, Noida, and Greater Noida NCR belt." },
];

interface ApplicationForm {
  name: string;
  phone: string;
  email: string;
  position: string;
  experience: string;
  message: string;
}

export default function CareerPage() {
  const [activeJob, setActiveJob] = useState<number | null>(null);
  const [applyFor, setApplyFor] = useState<string>("");
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<ApplicationForm>({
    name: "", phone: "", email: "", position: "", experience: "", message: "",
  });

  const handleApply = (jobTitle: string) => {
    setApplyFor(jobTitle);
    setForm((f) => ({ ...f, position: jobTitle }));
    setShowForm(true);
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-white">

      {/* ── Hero Banner ── */}
      <section className="w-full bg-[#111111] py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600')] bg-cover bg-center opacity-10" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C8A24D] to-transparent" />
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="w-16 h-1 bg-[#C8A24D] mb-6 mx-auto" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight mb-6">
            Build Your <span className="font-bold text-[#C8A24D]">Career</span> With Us
          </h1>
          <p className="text-zinc-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-light">
            Join a team that is redefining real estate in NCR. At Edistone, we value ambition, integrity, and the desire to make a lasting impact.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#openings"
              className="px-8 py-3.5 bg-[#C8A24D] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#b8913d] transition-colors">
              View Openings
            </a>
            <a href="#apply"
              className="px-8 py-3.5 border border-zinc-500 text-zinc-300 text-sm font-bold uppercase tracking-widest hover:border-[#C8A24D] hover:text-[#C8A24D] transition-colors">
              Send Your CV
            </a>
          </div>
        </div>
      </section>

      {/* ── Why Edistone ── */}
      <section className="w-full py-20 sm:py-24 bg-[#F7F7F5]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="w-12 h-1 bg-[#C8A24D] mx-auto mb-5" />
            <h2 className="text-3xl sm:text-4xl font-light text-[#111111] mb-3">
              Why Work at <span className="font-bold">Edistone?</span>
            </h2>
            <p className="text-[#6B6B6B] text-[15px] max-w-xl mx-auto leading-relaxed">
              We are not just a company — we are a community of real estate professionals committed to growth, excellence, and impact.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PERKS.map((perk, idx) => (
              <div key={idx} className="bg-white border border-zinc-200 p-7 hover:shadow-lg transition-all duration-300 hover:border-[#C8A24D]/30 group">
                <span className="text-3xl mb-4 block">{perk.icon}</span>
                <h3 className="text-base font-bold text-[#111111] mb-2 group-hover:text-[#C8A24D] transition-colors">{perk.title}</h3>
                <p className="text-[#6B6B6B] text-[13px] leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Current Openings ── */}
      <section id="openings" className="w-full py-20 sm:py-24 bg-white">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="w-12 h-1 bg-[#C8A24D] mx-auto mb-5" />
            <h2 className="text-3xl sm:text-4xl font-light text-[#111111] mb-3">
              Current <span className="font-bold">Openings</span>
            </h2>
            <p className="text-[#6B6B6B] text-[15px] max-w-xl mx-auto">
              Find a role that matches your skill set and ambition.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {OPENINGS.map((job) => (
              <div key={job.id} className="border border-zinc-200 bg-white hover:border-[#C8A24D]/40 transition-all duration-200">
                {/* Job header row */}
                <button
                  onClick={() => setActiveJob(activeJob === job.id ? null : job.id)}
                  className="w-full text-left p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-lg font-bold text-[#111111]">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 text-[13px] text-[#6B6B6B]">
                      <span className="flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5 text-[#C8A24D]" />{job.department}</span>
                      <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#C8A24D]" />{job.location}</span>
                      <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#C8A24D]" />{job.type} · {job.experience}</span>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 text-[#C8A24D] shrink-0 transition-transform duration-200 ${activeJob === job.id ? "rotate-90" : ""}`}
                  />
                </button>

                {/* Expanded details */}
                {activeJob === job.id && (
                  <div className="border-t border-zinc-100 px-6 pb-6 pt-5 flex flex-col gap-5">
                    <p className="text-[#6B6B6B] text-[14px] leading-relaxed">{job.description}</p>
                    <div>
                      <p className="text-xs font-bold text-[#111111] uppercase tracking-widest mb-3">Key Skills</p>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((s) => (
                          <span key={s} className="px-3 py-1 text-xs font-semibold bg-[#F7F7F5] border border-zinc-200 text-[#6B6B6B]">{s}</span>
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={() => handleApply(job.title)}
                      className="self-start flex items-center gap-2 px-6 py-3 bg-[#111111] text-[#C8A24D] text-xs font-bold uppercase tracking-widest hover:bg-[#C8A24D] hover:text-white transition-all"
                    >
                      <Send className="w-3.5 h-3.5" /> Apply Now
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Application Modal / Form ── */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 z-[200] flex items-center justify-center p-4" onClick={() => setShowForm(false)}>
          <div
            className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-zinc-100">
              <div>
                <h3 className="text-xl font-bold text-[#111111]">Apply for Position</h3>
                <p className="text-sm text-[#C8A24D] font-semibold mt-0.5">{applyFor}</p>
              </div>
              <button onClick={() => setShowForm(false)} className="p-2 text-zinc-400 hover:text-zinc-700 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-20 gap-5 text-center px-8">
                <div className="w-16 h-16 rounded-full bg-[#C8A24D]/10 flex items-center justify-center">
                  <Send className="w-7 h-7 text-[#C8A24D]" />
                </div>
                <h4 className="text-2xl font-bold text-[#111111]">Application Submitted!</h4>
                <p className="text-[#6B6B6B] text-[15px] leading-relaxed max-w-sm">
                  Thank you for your interest. Our HR team will review your application and reach out within 3–5 business days.
                </p>
                <button onClick={() => setShowForm(false)}
                  className="px-6 py-2.5 border-2 border-[#111111] text-sm font-semibold text-[#111111] hover:bg-[#111111] hover:text-white transition-colors uppercase tracking-wide">
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#111111] uppercase tracking-wider">Full Name <span className="text-[#C8A24D]">*</span></label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full pl-9 pr-4 py-3 border border-zinc-200 bg-[#FAFAFA] text-sm text-[#111111] focus:outline-none focus:border-[#C8A24D] transition-colors" />
                  </div>
                </div>
                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#111111] uppercase tracking-wider">Phone Number <span className="text-[#C8A24D]">*</span></label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 00000 00000"
                      className="w-full pl-9 pr-4 py-3 border border-zinc-200 bg-[#FAFAFA] text-sm text-[#111111] focus:outline-none focus:border-[#C8A24D] transition-colors" />
                  </div>
                </div>
                {/* Email */}
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label className="text-xs font-bold text-[#111111] uppercase tracking-wider">Email Address <span className="text-[#C8A24D]">*</span></label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full pl-9 pr-4 py-3 border border-zinc-200 bg-[#FAFAFA] text-sm text-[#111111] focus:outline-none focus:border-[#C8A24D] transition-colors" />
                  </div>
                </div>
                {/* Position */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#111111] uppercase tracking-wider">Position Applied For</label>
                  <input value={form.position} readOnly
                    className="w-full px-4 py-3 border border-zinc-200 bg-zinc-100 text-sm text-[#6B6B6B] cursor-not-allowed" />
                </div>
                {/* Experience */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#111111] uppercase tracking-wider">Years of Experience</label>
                  <input value={form.experience} onChange={(e) => setForm({ ...form, experience: e.target.value })}
                    placeholder="e.g. 3 years"
                    className="w-full px-4 py-3 border border-zinc-200 bg-[#FAFAFA] text-sm text-[#111111] focus:outline-none focus:border-[#C8A24D] transition-colors" />
                </div>
                {/* Message */}
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label className="text-xs font-bold text-[#111111] uppercase tracking-wider">Cover Note</label>
                  <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4} placeholder="Tell us why you are a great fit for this role..."
                    className="w-full px-4 py-3 border border-zinc-200 bg-[#FAFAFA] text-sm text-[#111111] focus:outline-none focus:border-[#C8A24D] transition-colors resize-none" />
                </div>
                {/* Submit */}
                <div className="sm:col-span-2">
                  <button type="submit"
                    className="w-full flex items-center justify-center gap-3 py-4 bg-[#111111] text-[#C8A24D] text-sm font-bold uppercase tracking-widest hover:bg-[#C8A24D] hover:text-white transition-all">
                    <Send className="w-4 h-4" /> Submit Application
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ── General Application CTA ── */}
      <section id="apply" className="w-full py-20 bg-[#111111] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C8A24D]/5 to-transparent pointer-events-none" />
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="w-12 h-1 bg-[#C8A24D] mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-4">
            Don&apos;t see your role? <span className="font-bold text-[#C8A24D]">Reach out anyway.</span>
          </h2>
          <p className="text-zinc-400 text-[15px] leading-relaxed mb-8">
            We are always looking for talented and passionate individuals. Send us your CV and we will keep you in mind for future opportunities.
          </p>
          <a href="mailto:info@edistonerealestates.com"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#C8A24D] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#b8913d] transition-colors">
            <Mail className="w-4 h-4" /> info@edistonerealestates.com
          </a>
        </div>
      </section>

    </div>
  );
}
