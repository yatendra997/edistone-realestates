"use client";

import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function Contact() {
    return (
        <section className="w-full bg-white py-16 sm:py-24 shrink-0 border-t border-zinc-200" id="contact">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] uppercase tracking-wide mb-4">
                        Get In <span className="text-[#C8A24D]">Touch</span>
                    </h2>
                    <p className="text-sm sm:text-base text-[#6B6B6B] max-w-2xl leading-relaxed">
                        We would love to hear from you. Whether you are looking for your dream home or a lucrative commercial investment, our team of experts is ready to assist you every step of the way.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left: Contact Info & Form */}
                    <div className="flex flex-col gap-10">
                        {/* Info Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {/* Corporate Office */}
                            <div className="flex flex-col">
                                <h4 className="text-[#111111] text-sm font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-[#C8A24D]" />
                                    Corporate Office
                                </h4>
                                <p className="text-[#6B6B6B] text-sm leading-relaxed mb-4">
                                    Office No 626, Sixth Floor,<br />
                                    Aditya High Street NH 24,<br />
                                    Ghaziabad, Uttar Pradesh 201009
                                </p>
                                <div className="flex flex-col gap-2 text-sm">
                                    <div className="flex items-center gap-3 text-[#6B6B6B]">
                                        <Phone className="w-4 h-4 text-[#C8A24D] shrink-0" />
                                        <div className="flex flex-wrap gap-1">
                                            <a href="tel:+919220034414" className="hover:text-[#C8A24D] transition-colors">+91 9220034414</a>
                                            <span>/</span>
                                            <a href="tel:01202989566" className="hover:text-[#C8A24D] transition-colors">0120 2989566</a>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 text-[#6B6B6B]">
                                        <Mail className="w-4 h-4 text-[#C8A24D] shrink-0" />
                                        <a href="mailto:director@edistonerealestates.com" className="hover:text-[#C8A24D] transition-colors break-all">director@edistonerealestates.com</a>
                                    </div>
                                </div>
                            </div>

                            {/* Sales Team */}
                            <div className="flex flex-col">
                                <h4 className="text-[#111111] text-sm font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
                                    <Phone className="w-4 h-4 text-[#C8A24D]" />
                                    Sales Team
                                </h4>
                                <div className="flex flex-col gap-3 text-sm">
                                    <div className="flex items-center gap-3 text-[#6B6B6B]">
                                        <Phone className="w-4 h-4 text-[#C8A24D] shrink-0" />
                                        <div className="flex flex-col">
                                            <a href="tel:+919220034415" className="hover:text-[#C8A24D] transition-colors">+91 9220034415</a>
                                            <a href="tel:+919220034416" className="hover:text-[#C8A24D] transition-colors">+91 9220034416</a>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 text-[#6B6B6B] mt-1">
                                        <Mail className="w-4 h-4 text-[#C8A24D] shrink-0" />
                                        <a href="mailto:Sales@edistonerealestates.com" className="hover:text-[#C8A24D] transition-colors break-all">Sales@edistonerealestates.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-[#F7F7F5] p-6 sm:p-8 rounded-lg border border-zinc-200">
                            <h3 className="text-lg font-bold text-[#111111] uppercase tracking-wide mb-6">Drop Us A Message</h3>
                            <form className="flex flex-col gap-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Your Name *"
                                        className="w-full bg-white border border-zinc-300 rounded px-4 py-3 text-sm outline-none focus:border-[#C8A24D] focus:ring-1 focus:ring-[#C8A24D] transition-shadow text-[#111111] placeholder:text-zinc-400"
                                        required
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Phone Number *"
                                        className="w-full bg-white border border-zinc-300 rounded px-4 py-3 text-sm outline-none focus:border-[#C8A24D] focus:ring-1 focus:ring-[#C8A24D] transition-shadow text-[#111111] placeholder:text-zinc-400"
                                        required
                                    />
                                </div>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full bg-white border border-zinc-300 rounded px-4 py-3 text-sm outline-none focus:border-[#C8A24D] focus:ring-1 focus:ring-[#C8A24D] transition-shadow text-[#111111] placeholder:text-zinc-400"
                                />
                                <textarea
                                    placeholder="Your Message..."
                                    rows={4}
                                    className="w-full bg-white border border-zinc-300 rounded px-4 py-3 text-sm outline-none focus:border-[#C8A24D] focus:ring-1 focus:ring-[#C8A24D] transition-shadow text-[#111111] placeholder:text-zinc-400 resize-none"
                                ></textarea>
                                <button
                                    type="submit"
                                    className="bg-[#C8A24D] text-white px-8 py-3.5 rounded text-sm font-bold flex items-center justify-center gap-2 hover:bg-[#111111] transition-colors shadow-md w-max mt-2 uppercase tracking-wider"
                                >
                                    <Send className="w-4 h-4" /> Send Request
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Right: Google Map */}
                    <div className="w-full h-[400px] lg:h-full min-h-[400px] bg-zinc-100 rounded-lg overflow-hidden border border-zinc-200 shadow-sm relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28014.599351088258!2d77.457933!3d28.635009!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ced85448b6375%3A0xf83e6e4a1005395c!2sEdistone%20Real%20Estates%20Private%20Limited!5e0!3m2!1sen!2sus!4v1771956359926!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 w-full h-full grayscale-[20%] contrast-[1.1]"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
