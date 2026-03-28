"use client";

import { useState } from "react";
import Image from "next/image";
import { Briefcase, MapPin, Clock, ChevronRight, Send, User, Phone, Mail, X, CheckCircle, ArrowRight, Star, Zap, Shield, Heart, Trophy, Users } from "lucide-react";

const OPENINGS = [
  {
    id: 1,
    title: "Tele-Caller",
    department: "Inside Sales",
    location: "Ghaziabad (On-site)",
    type: "Full-time",
    experience: "0–1 Years",
    description:
      "Handle inbound and outbound calls, qualify leads, follow up on enquiries, and schedule site visits for our sales team. We are looking for candidates with excellent Hindi and English communication skills. Freshers with great communication are welcome!",
    skills: ["Hindi/English Communication", "Lead Qualification", "Telecalling", "CRM Entry", "Target-oriented"],
  },
  {
    id: 2,
    title: "Sales Executive",
    department: "Sales & Business Development",
    location: "Ghaziabad / NCR",
    type: "Full-time",
    experience: "0–6 Years",
    description:
      "Drive property sales for our residential, commercial, and industrial portfolio across NCR. Build enduring client relationships, conduct site visits, and exceed monthly sales targets. A passion for real estate and strong interpersonal skills are key.",
    skills: ["Property Sales", "Client Management", "Site Visits", "Negotiation", "NCR Market Knowledge"],
  },
  {
    id: 3,
    title: "Senior Sales Executive",
    department: "Sales & Business Development",
    location: "Ghaziabad / NCR",
    type: "Full-time",
    experience: "6+ Years",
    description:
      "Lead high-value property sales transactions and manage key client accounts. Develop strategic sales plans, mentor junior team members, and consistently deliver premium results in residential and commercial real estate.",
    skills: ["Strategic Sales", "Key Account Management", "Team Mentoring", "High-Value Deals", "Portfolio Management"],
  },
  {
    id: 4,
    title: "CRM Manager",
    department: "Operations & Client Relations",
    location: "Ghaziabad (On-site)",
    type: "Full-time",
    experience: "2–5 Years",
    description:
      "Oversee the entire client relationship management system, manage post-sale documentation, coordinate with the sales and operations teams, and ensure a seamless client journey from first inquiry to final possession.",
    skills: ["CRM Software", "Client Communication", "Documentation", "Process Management", "MS Excel"],
  },
  {
    id: 5,
    title: "Digital Marketing Executive",
    department: "Marketing",
    location: "Ghaziabad (On-site / Hybrid)",
    type: "Full-time",
    experience: "1–4 Years",
    description:
      "Execute impactful digital campaigns across Google, Meta, YouTube, and Instagram. Handle SEO, SEM, lead generation, and content strategy for our real estate brand. Experience in real estate marketing is a strong plus.",
    skills: ["SEO/SEM", "Meta & Google Ads", "Content Strategy", "Lead Generation", "Analytics", "Social Media"],
  },
  {
    id: 6,
    title: "HR & Admin Executive",
    department: "Human Resources",
    location: "Ghaziabad (On-site)",
    type: "Full-time",
    experience: "1–3 Years",
    description:
      "Manage end-to-end HR operations including recruitment, onboarding, payroll coordination, and office administration. Maintain a positive work culture and support the company's growth through efficient HR practices.",
    skills: ["Recruitment", "Onboarding", "Payroll", "Office Administration", "Employee Relations"],
  },
  {
    id: 7,
    title: "Property Advisor",
    department: "Sales – Advisory",
    location: "Noida / Greater Noida / GZB",
    type: "Full-time",
    experience: "1–4 Years",
    description:
      "Provide expert property advisory services to clients across residential, commercial, and industrial segments. Deep knowledge of NCR real estate market and the ability to guide clients through investment decisions is essential.",
    skills: ["Property Advisory", "Market Analysis", "Client Counseling", "NCR Knowledge", "Investment Guidance"],
  },
  {
    id: 8,
    title: "Real Estate Associate",
    department: "Sales & Operations",
    location: "NCR (Multiple Locations)",
    type: "Full-time",
    experience: "0–3 Years",
    description:
      "Assist clients in identifying the right properties, coordinate site visits, manage documentation, and support the senior sales team. An excellent opportunity for ambitious individuals to build a rewarding career in real estate.",
    skills: ["Property Sales", "Client Coordination", "Documentation", "Site Visits", "Communication"],
  },
  {
    id: 9,
    title: "GM Sales",
    department: "Senior Leadership",
    location: "Ghaziabad – Head Office",
    type: "Full-time",
    experience: "2–10+ Years",
    description:
      "Lead and scale our entire sales division across NCR. Set sales strategy, build and mentor a high-performance team, drive revenue targets, and represent Edistone at the highest client and developer levels. This is a leadership role for proven real estate sales professionals.",
    skills: ["Sales Leadership", "Team Building", "Revenue Strategy", "Developer Relations", "P&L Management"],
  },
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
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-white">

      {/* ── Hero Banner ── */}
      <section className="w-full bg-[#111111] py-24 sm:py-36 relative overflow-hidden">
        {/* Background image & overlays */}
        <div className="absolute inset-0 bg-[url('/career.jpg')] bg-cover bg-center bg-no-repeat opacity-100" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-transparent" />
        
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#FF5C00]/40 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#FF5C00]/30 to-transparent rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF5C00] to-transparent z-20" />

        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full mb-8 shadow-xl">
            <Briefcase className="w-4 h-4 text-[#FF5C00]" />
            <span className="text-white text-xs font-bold uppercase tracking-widest">We&apos;re Hiring</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-light text-white tracking-tight mb-6 drop-shadow-xl">
            Build Your <span className="font-black text-[#FF5C00] drop-shadow-2xl">Career</span><br />
            <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-white/90 drop-shadow-lg">With Edistone</span>
          </h1>
          <p className="text-white/90 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-light mb-12 drop-shadow-md">
            Join a team that is redefining real estate in NCR. At Edistone, we value ambition, integrity, and the desire to make a lasting impact on people&apos;s lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#openings"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#FF5C00] text-white text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#111111] transition-all duration-300 shadow-lg shadow-[#FF5C00]/20">
              View Current Openings
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="mailto:info@edistonerealestates.com"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-zinc-500 text-zinc-300 text-sm font-bold uppercase tracking-widest hover:border-[#FF5C00] hover:text-[#FF5C00] transition-colors">
              <Mail className="w-4 h-4" /> Send Your CV
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <div className="w-full bg-[#FF5C00] py-6">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { value: "9+", label: "Open Positions" },
              { value: "NCR", label: "Pan-India Presence" },
              { value: "100%", label: "Growth Culture" },
              { value: "∞", label: "Career Potential" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-white font-black text-2xl sm:text-3xl">{stat.value}</span>
                <span className="text-white/80 text-xs sm:text-sm font-medium uppercase tracking-widest mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Why Work with Edistone ── */}
      <section className="w-full py-20 sm:py-28 bg-white">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Text Content */}
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl sm:text-5xl font-bold text-[#333333] leading-tight">
                Why Work with Edistone?
              </h2>
              <p className="text-[#6B6B6B] text-[17px] leading-relaxed">
                Edistone promotes a culture of impacting clients&apos; lives with our real estate innovations. And we are looking for people who share, understand our vision and contribute to it. Our company facilitates an environment with open communication, togetherness, and equal opportunities.
              </p>
              <p className="text-[#6B6B6B] text-[17px] leading-relaxed">
                We&apos;re passionate about constantly expanding and forever keen to find dynamic talent. Join us to level up not just the company&apos;s benchmarks but your own as well.
              </p>
            </div>
            
            {/* Image */}
            <div className="relative w-full aspect-[4/3] overflow-hidden shadow-2xl group">
              <Image 
                src="/career man.jpg" 
                alt="Professional working on laptop at desk"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Current Openings ── */}
      <section id="openings" className="w-full py-20 sm:py-28 bg-[#F7F7F5]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-12 h-1 bg-[#FF5C00] mx-auto mb-5" />
            <h2 className="text-3xl sm:text-4xl font-light text-[#111111] mb-3">
              Current <span className="font-bold">Openings</span>
            </h2>
            <p className="text-[#6B6B6B] text-[15px] max-w-xl mx-auto">
              Find a role that matches your skill set and ambition. All positions are full-time and based across NCR.
            </p>
          </div>

          <div className="flex flex-col gap-5 max-w-4xl mx-auto">
            {OPENINGS.map((job) => (
              <div key={job.id} className={`bg-white rounded-xl transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl ${activeJob === job.id ? "border-2 border-[#FF5C00] ring-4 ring-[#FF5C00]/10" : "border border-zinc-200 hover:border-[#FF5C00]/50"}`}>
                {/* Job header row */}
                <button
                  onClick={() => setActiveJob(activeJob === job.id ? null : job.id)}
                  className="w-full text-left p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5 transition-colors hover:bg-zinc-50/50"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#FF5C00]/10 flex items-center justify-center shrink-0 shadow-sm">
                        <Briefcase className="w-5 h-5 text-[#FF5C00]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#111111] transition-colors">{job.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm font-medium text-[#6B6B6B] sm:ml-14">
                      <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4 text-[#FF5C00]" />{job.department}</span>
                      <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[#FF5C00]" />{job.location}</span>
                      <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#FF5C00]" />{job.type} &bull; {job.experience}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="hidden sm:inline-flex px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest bg-[#FF5C00]/10 text-[#FF5C00] border border-[#FF5C00]/20 rounded-full">
                      {job.experience}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${activeJob === job.id ? 'bg-[#FF5C00] text-white' : 'bg-zinc-100 text-zinc-400'}`}>
                      <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${activeJob === job.id ? "rotate-90" : ""}`} />
                    </div>
                  </div>
                </button>

                {/* Expanded details */}
                {activeJob === job.id && (
                  <div className="border-t border-zinc-100 px-6 sm:px-8 pb-8 pt-6 flex flex-col gap-6 bg-[#FAFAFA]">
                    <p className="text-[#6B6B6B] text-[15px] leading-relaxed max-w-3xl">{job.description}</p>
                    <div>
                      <p className="text-xs font-bold text-[#111111] uppercase tracking-widest mb-4 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#FF5C00]" /> Key Skills Required
                      </p>
                      <div className="flex flex-wrap gap-2.5">
                        {job.skills.map((s) => (
                          <span key={s} className="px-4 py-1.5 text-[13px] font-semibold bg-white border border-zinc-200 text-[#111111] rounded-full shadow-sm">{s}</span>
                        ))}
                      </div>
                    </div>
                    <div className="pt-4">
                      <button
                        onClick={() => handleApply(job.title)}
                        className="group flex items-center justify-center gap-3 px-10 py-4 bg-[#FF5C00] text-white text-sm font-bold uppercase tracking-widest rounded-lg hover:bg-[#111111] transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto"
                      >
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Apply For This Role
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Application Modal ── */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 z-[200] flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setShowForm(false)}>
          <div
            className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative rounded-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-zinc-100 bg-[#111111]">
              <div>
                <h3 className="text-xl font-bold text-white">Apply for Position</h3>
                <p className="text-sm text-[#FF5C00] font-semibold mt-0.5">{applyFor}</p>
              </div>
              <button onClick={() => setShowForm(false)} className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-20 gap-5 text-center px-8">
                <div className="w-20 h-20 rounded-full bg-[#FF5C00]/10 flex items-center justify-center border-2 border-[#FF5C00]/30">
                  <CheckCircle className="w-10 h-10 text-[#FF5C00]" />
                </div>
                <h4 className="text-2xl font-bold text-[#111111]">Application Submitted!</h4>
                <p className="text-[#6B6B6B] text-[15px] leading-relaxed max-w-sm">
                  Thank you for your interest. Our HR team will review your application and reach out within 3–5 business days.
                </p>
                <button onClick={() => setShowForm(false)}
                  className="px-8 py-3 bg-[#FF5C00] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#111111] transition-colors">
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#111111] uppercase tracking-wider">Full Name <span className="text-[#FF5C00]">*</span></label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full pl-9 pr-4 py-3 border border-zinc-200 bg-[#FAFAFA] text-sm text-[#111111] focus:outline-none focus:border-[#FF5C00] transition-colors" />
                  </div>
                </div>
                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#111111] uppercase tracking-wider">Phone Number <span className="text-[#FF5C00]">*</span></label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 00000 00000"
                      className="w-full pl-9 pr-4 py-3 border border-zinc-200 bg-[#FAFAFA] text-sm text-[#111111] focus:outline-none focus:border-[#FF5C00] transition-colors" />
                  </div>
                </div>
                {/* Email */}
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label className="text-xs font-bold text-[#111111] uppercase tracking-wider">Email Address <span className="text-[#FF5C00]">*</span></label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full pl-9 pr-4 py-3 border border-zinc-200 bg-[#FAFAFA] text-sm text-[#111111] focus:outline-none focus:border-[#FF5C00] transition-colors" />
                  </div>
                </div>
                {/* Position */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#111111] uppercase tracking-wider">Position Applied For</label>
                  <input value={form.position} readOnly className="w-full px-4 py-3 border border-zinc-200 bg-zinc-100 text-sm text-[#6B6B6B] cursor-not-allowed" />
                </div>
                {/* Experience */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#111111] uppercase tracking-wider">Years of Experience</label>
                  <input value={form.experience} onChange={(e) => setForm({ ...form, experience: e.target.value })}
                    placeholder="e.g. 3 years"
                    className="w-full px-4 py-3 border border-zinc-200 bg-[#FAFAFA] text-sm text-[#111111] focus:outline-none focus:border-[#FF5C00] transition-colors" />
                </div>
                {/* Message */}
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label className="text-xs font-bold text-[#111111] uppercase tracking-wider">Cover Note</label>
                  <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4} placeholder="Tell us why you are a great fit for this role..."
                    className="w-full px-4 py-3 border border-zinc-200 bg-[#FAFAFA] text-sm text-[#111111] focus:outline-none focus:border-[#FF5C00] transition-colors resize-none" />
                </div>
                {/* Submit */}
                <div className="sm:col-span-2">
                  <button type="submit"
                    className="w-full flex items-center justify-center gap-3 py-4 bg-[#FF5C00] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#111111] transition-all duration-300 shadow-md">
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
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF5C00]/5 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5C00]/5 rounded-full blur-3xl" />
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="w-12 h-1 bg-[#FF5C00] mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4">
            Don&apos;t see your role?{" "}
            <span className="font-bold text-[#FF5C00]">Reach out anyway.</span>
          </h2>
          <p className="text-zinc-400 text-[15px] leading-relaxed mb-8 max-w-xl mx-auto">
            We are always looking for talented, passionate, and driven individuals. Send us your CV and we will keep you in mind for future opportunities.
          </p>
          <a href="mailto:info@edistonerealestates.com"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#FF5C00] text-white text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#111111] transition-all duration-300 shadow-lg shadow-[#FF5C00]/20">
            <Mail className="w-4 h-4" /> info@edistonerealestates.com
          </a>
        </div>
      </section>

    </div>
  );
}
