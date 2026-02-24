"use client";

import { useEffect, useState, useRef } from "react";

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                }
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [hasAnimated]);

    useEffect(() => {
        if (!hasAnimated) return;
        let startTime: number | null = null;
        let animationFrame: number;
        const duration = 2500;

        const updateCount = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            if (progress < duration) {
                const easeOut = 1 - Math.pow(1 - progress / duration, 3);
                setCount(Math.floor(end * easeOut));
                animationFrame = requestAnimationFrame(updateCount);
            } else {
                setCount(end);
            }
        };
        animationFrame = requestAnimationFrame(updateCount);
        return () => cancelAnimationFrame(animationFrame);
    }, [end, hasAnimated]);

    return (
        <div ref={ref} className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#C8A24D] mb-1 tracking-wide">
            {count.toLocaleString()}{suffix}
        </div>
    );
}

export default function Highlights() {
    const STATS = [
        { value: 25, suffix: "", label: "MN+ SQ.FT.\nAREA DEVELOPED" },
        { value: 80123, suffix: "+", label: "HAPPY CUSTOMERS" },
        { value: 21500, suffix: "+", label: "SUCCESSFULLY DELIVERED\nUNITS" },
        { value: 15400, suffix: "+", label: "POSSESSIONS GIVEN\n(2014-25)" },
        { value: 28, suffix: "+", label: "SUCCESSFULLY DELIVERED\nPROJECTS" },
        { value: 15, suffix: "", label: "YEARS OF UNFALTERING\nCOMMITMENT" },
    ];

    return (
        <section className="w-full bg-[#111111] shrink-0">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 divide-x divide-white/10">
                    {STATS.map((stat, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center justify-center text-center py-6 sm:py-8 px-3 sm:px-4 transition-colors hover:bg-white/5"
                        >
                            <Counter end={stat.value} suffix={stat.suffix} />
                            <p className="text-[10px] sm:text-[11px] font-semibold text-zinc-400 uppercase tracking-wider leading-tight whitespace-pre-line mt-1">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
