"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function EnquirePopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [hasHydrated, setHasHydrated] = useState(false);

    useEffect(() => {
        setHasHydrated(true);
        // Show popup after 1 minute (60000 ms)
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 60000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isOpen) {
            const playBeep = () => {
                try {
                    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
                    const doPlay = () => {
                        const playTone = (freq: number, start: number, duration: number) => {
                            const osc = ctx.createOscillator();
                            const gain = ctx.createGain();
                            osc.connect(gain);
                            gain.connect(ctx.destination);
                            osc.type = "sine";
                            osc.frequency.setValueAtTime(freq, ctx.currentTime + start);
                            gain.gain.setValueAtTime(0.28, ctx.currentTime + start);
                            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + start + duration);
                            osc.start(ctx.currentTime + start);
                            osc.stop(ctx.currentTime + start + duration);
                        };
                        playTone(880, 0, 0.20);
                        playTone(1100, 0.22, 0.25);
                    };
                    if (ctx.state === "suspended") {
                        ctx.resume().then(doPlay).catch(() => {});
                    } else {
                        doPlay();
                    }
                } catch {
                    // AudioContext not supported — silent fallback
                }
            };
            playBeep();
        }
    }, [isOpen]);

    if (!hasHydrated || !isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle the form submission
        setIsOpen(false);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
            <div className="relative w-full max-w-md bg-white shadow-2xl animate-in fade-in zoom-in duration-300 overflow-hidden flex flex-col max-h-[90vh]">
                <div className="bg-[#111111] py-4 px-6 flex items-center justify-between shrink-0">
                    <div className="w-8"></div> {/* Spacer for centering */}
                    <h2 className="text-white font-bold tracking-wide text-lg text-center">ENQUIRE NOW</h2>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-[#FF5C00] transition-colors hover:bg-white/10 rounded-full"
                        aria-label="Close popup"
                    >
                        <X className="w-6 h-6" strokeWidth={2} />
                    </button>
                </div>

                {/* Body Form */}
                <form onSubmit={handleSubmit} className="p-6 md:p-8 bg-[#F5F5F5] flex flex-col gap-4 overflow-y-auto">
                    <div>
                        <input
                            type="text"
                            placeholder="Your Name*"
                            required
                            className="w-full bg-white border border-zinc-100 p-3.5 text-zinc-800 placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-[#FF5C00] shadow-sm text-sm"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Email Address*"
                            required
                            className="w-full bg-white border border-zinc-100 p-3.5 text-zinc-800 placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-[#FF5C00] shadow-sm text-sm"
                        />
                    </div>
                    <div>
                        <input
                            type="tel"
                            placeholder="Mobile Number*"
                            required
                            className="w-full bg-white border border-zinc-100 p-3.5 text-zinc-800 placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-[#FF5C00] shadow-sm text-sm"
                        />
                    </div>
                    <div>
                        <textarea
                            placeholder="Message"
                            rows={3}
                            className="w-full bg-white border border-zinc-100 p-3.5 text-zinc-800 placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-[#FF5C00] shadow-sm text-sm resize-none"
                        ></textarea>
                    </div>
                    
                    <div className="flex items-center gap-2 mt-2">
                        <input
                            type="checkbox"
                            id="whatsapp"
                            className="w-4 h-4 cursor-pointer accent-[#FF5C00]"
                            defaultChecked
                        />
                        <label htmlFor="whatsapp" className="text-sm text-zinc-800 cursor-pointer select-none">
                            Contact on WhatsApp
                        </label>
                    </div>

                    <div className="mt-4 flex justify-center">
                        <button
                            type="submit"
                            className="bg-[#FF5C00] hover:bg-[#e65300] text-white px-8 py-2.5 rounded-full font-semibold transition-colors shadow-md w-full sm:w-auto"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
