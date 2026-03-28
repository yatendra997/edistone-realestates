"use client";

import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="w-full bg-[#111111] relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FF5C00]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FF5C00]/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
                    
                    {/* Left Column: Text & Info */}
                    <div className="lg:col-span-5 flex flex-col pt-0">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FF5C00]/10 border border-[#FF5C00]/20 rounded-full mb-6 w-max">
                            <span className="w-2 h-2 rounded-full bg-[#FF5C00] animate-pulse" />
                            <span className="text-[#FF5C00] text-xs font-bold uppercase tracking-widest">Connect With Us</span>
                        </div>
                        
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-white tracking-tight mb-4">
                            Get In <span className="font-black text-[#FF5C00]">Touch</span>
                        </h2>
                        
                        <p className="text-zinc-400 text-base leading-relaxed mb-8 max-w-lg">
                            Whether you are looking for your dream home or a lucrative commercial investment, our team of experts is ready to assist you every step of the way.
                        </p>

                        <div className="flex flex-col gap-4">
                            {/* Corporate Office Card */}
                            <div className="group p-5 sm:p-6 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 hover:border-[#FF5C00]/50 rounded-2xl transition-all duration-500">
                                <div className="flex items-start gap-5">
                                    <div className="w-12 h-12 bg-[#FF5C00]/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#FF5C00] transition-colors duration-500">
                                        <MapPin className="w-6 h-6 text-[#FF5C00] group-hover:text-white transition-colors duration-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold tracking-widest uppercase mb-2">Corporate Office</h4>
                                        <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                                            Office No 626, Sixth Floor,<br />
                                            Aditya High Street, NH 24,<br />
                                            Ghaziabad, Uttar Pradesh 201009
                                        </p>
                                        <div className="flex flex-col gap-2">
                                            <a href="tel:+919220034414" className="flex items-center gap-3 text-sm text-zinc-300 hover:text-[#FF5C00] transition-colors font-medium">
                                                <Phone className="w-4 h-4 text-zinc-500" /> +91 9220034414 / 0120 2989566
                                            </a>
                                            <a href="mailto:director@edistonerealestates.com" className="flex items-center gap-3 text-sm text-zinc-300 hover:text-[#FF5C00] transition-colors">
                                                <Mail className="w-4 h-4 text-zinc-500" /> director@edistonerealestates.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Sales Team Card */}
                            <div className="group p-5 sm:p-6 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 hover:border-[#FF5C00]/50 rounded-2xl transition-all duration-500">
                                <div className="flex items-start gap-5">
                                    <div className="w-12 h-12 bg-[#FF5C00]/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#FF5C00] transition-colors duration-500">
                                        <Phone className="w-6 h-6 text-[#FF5C00] group-hover:text-white transition-colors duration-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold tracking-widest uppercase mb-2">Sales Team</h4>
                                        <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                                            Available Mon-Sat, 10:00 AM to 7:00 PM for all your property inquiries and site visits.
                                        </p>
                                        <div className="flex flex-col gap-2">
                                            <a href="tel:+919220034416" className="flex items-center gap-3 text-sm text-zinc-300 hover:text-[#FF5C00] transition-colors font-medium">
                                                <Phone className="w-4 h-4 text-zinc-500" /> +91 9220034416 / +91 9220034418
                                            </a>
                                            <a href="mailto:sales@edistonerealestates.com" className="flex items-center gap-3 text-sm text-zinc-300 hover:text-[#FF5C00] transition-colors">
                                                <Mail className="w-4 h-4 text-zinc-500" /> sales@edistonerealestates.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Premium Form */}
                    <div className="lg:col-span-7 lg:pl-10 relative mt-8 lg:mt-0">
                        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-2xl relative z-10 flex flex-col">
                            <h3 className="text-2xl font-bold text-[#111111] mb-2">Send a Message</h3>
                            <p className="text-[#6B6B6B] mb-6 text-sm">Fill out the form below and we will get back to you immediately.</p>
                            
                            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-xs font-bold text-[#111111] uppercase tracking-widest">Full Name *</label>
                                        <input type="text" placeholder="John Doe" className="w-full bg-[#F7F7F5] border border-transparent rounded-xl px-4 py-3 text-sm outline-none focus:border-[#FF5C00] focus:ring-4 focus:ring-[#FF5C00]/10 transition-all text-[#111111] placeholder:text-zinc-400" required />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-xs font-bold text-[#111111] uppercase tracking-widest">Phone Number *</label>
                                        <input type="tel" placeholder="+91 00000 00000" className="w-full bg-[#F7F7F5] border border-transparent rounded-xl px-4 py-3 text-sm outline-none focus:border-[#FF5C00] focus:ring-4 focus:ring-[#FF5C00]/10 transition-all text-[#111111] placeholder:text-zinc-400" required />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-bold text-[#111111] uppercase tracking-widest">Email Address</label>
                                    <input type="email" placeholder="john@example.com" className="w-full bg-[#F7F7F5] border border-transparent rounded-xl px-4 py-3 text-sm outline-none focus:border-[#FF5C00] focus:ring-4 focus:ring-[#FF5C00]/10 transition-all text-[#111111] placeholder:text-zinc-400" />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-bold text-[#111111] uppercase tracking-widest">Your Message *</label>
                                    <textarea placeholder="How can we help you?" rows={3} className="w-full bg-[#F7F7F5] border border-transparent rounded-xl px-4 py-3 text-sm outline-none focus:border-[#FF5C00] focus:ring-4 focus:ring-[#FF5C00]/10 transition-all text-[#111111] placeholder:text-zinc-400 resize-none" required></textarea>
                                </div>
                                <button type="submit" className="group mt-2 w-full sm:w-auto self-start bg-[#FF5C00] text-white px-8 py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-[#111111] transition-all duration-300 shadow-lg hover:-translate-y-0.5 uppercase tracking-widest">
                                    Submit Request <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>

                        {/* Aesthetic shadow backdrop for the form */}
                        <div className="absolute -bottom-8 -right-8 w-full h-full bg-[#1A1A1A] rounded-3xl -z-10 hidden lg:block border border-white/5" />
                    </div>

                </div>
            </div>

            {/* Edge-to-Edge Full Width Map */}
            <div className="w-full h-[300px] sm:h-[350px] bg-zinc-100 relative grayscale-[20%] contrast-[1.1] border-t border-white/5">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28014.599351088258!2d77.457933!3d28.635009!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ced85448b6375%3A0xf83e6e4a1005395c!2sEdistone%20Real%20Estates%20Private%20Limited!5e0!3m2!1sen!2sus!4v1771956359926!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full"
                ></iframe>
                {/* Subtle dark overlay to map so it matches theme better */}
                <div className="absolute inset-0 bg-black/20 pointer-events-none" />
            </div>
        </section>
    );
}
