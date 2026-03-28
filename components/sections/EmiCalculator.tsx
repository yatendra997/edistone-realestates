"use client";

import { useState, useEffect } from "react";
import { Calculator, IndianRupee, PieChart } from "lucide-react";

export default function EmiCalculator() {
    const [principal, setPrincipal] = useState<number>(5000000); // 50 Lakhs
    const [interestRate, setInterestRate] = useState<number>(8.5); // 8.5%
    const [tenureYears, setTenureYears] = useState<number>(20); // 20 Years

    const [emi, setEmi] = useState<number>(0);
    const [totalInterest, setTotalInterest] = useState<number>(0);
    const [totalAmount, setTotalAmount] = useState<number>(0);

    useEffect(() => {
        // EMI = P * r * (1+r)^n / ((1+r)^n - 1)
        // r = interest rate per month (annual rate / 12 / 100)
        // n = tenure in months
        const P = principal;
        const r = interestRate / 12 / 100;
        const n = tenureYears * 12;

        if (P > 0 && r > 0 && n > 0) {
            const emiValue = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
            setEmi(Math.round(emiValue));
            const totalPayment = emiValue * n;
            setTotalAmount(Math.round(totalPayment));
            setTotalInterest(Math.round(totalPayment - P));
        } else if (r === 0) {
            const emiValue = P / n;
            setEmi(Math.round(emiValue));
            setTotalAmount(P);
            setTotalInterest(0);
        } else {
            setEmi(0);
            setTotalAmount(0);
            setTotalInterest(0);
        }
    }, [principal, interestRate, tenureYears]);

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0,
        }).format(val);
    };

    return (
        <section id="emi-calculator" className="w-full bg-[#FAFAFA] py-10 sm:py-16 shrink-0 relative border-t border-zinc-200">
            <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Header */}
                <div className="flex flex-col items-center mb-8 sm:mb-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-zinc-100 border border-zinc-200 rounded-full mb-4">
                        <Calculator className="w-3.5 h-3.5 text-[#FF5C00]" />
                        <span className="text-zinc-700 text-[10px] font-bold uppercase tracking-widest">Financial Tools</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-[#111111] text-center mb-3">
                        Home Loan <span className="font-bold">EMI Calculator</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-[#6B6B6B] max-w-2xl text-center leading-relaxed">
                        Plan your dream home purchase effortlessly. Adjust the sliders below to estimate your monthly installments.
                    </p>
                </div>

                {/* Calculator Area */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                    
                    {/* Left: Interactive Sliders */}
                    <div className="lg:col-span-7 bg-white p-5 sm:p-6 lg:p-8 rounded-3xl shadow-xl border border-zinc-100 flex flex-col gap-6 sm:gap-8 justify-center">
                        
                        {/* Principal Amount Slider */}
                        <div className="flex flex-col gap-3">
                            <div className="flex justify-between items-end">
                                <label className="text-xs sm:text-sm font-bold text-[#111111] uppercase tracking-wider">Loan Amount</label>
                                <div className="bg-[#111111] text-[#FF5C00] font-bold px-3 py-1.5 rounded-md shadow-inner text-sm sm:text-base">
                                    {formatCurrency(principal)}
                                </div>
                            </div>
                            <input 
                                type="range" 
                                min="100000" 
                                max="100000000" 
                                step="100000" 
                                value={principal} 
                                onChange={(e) => setPrincipal(Number(e.target.value))}
                                className="w-full h-1.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-[#FF5C00]"
                            />
                            <div className="flex justify-between text-[10px] sm:text-xs font-medium text-zinc-400">
                                <span>₹ 1L</span>
                                <span>₹ 10Cr</span>
                            </div>
                        </div>

                        {/* Interest Rate Slider */}
                        <div className="flex flex-col gap-3">
                            <div className="flex justify-between items-end">
                                <label className="text-xs sm:text-sm font-bold text-[#111111] uppercase tracking-wider">Interest Rate (P.A.)</label>
                                <div className="bg-[#111111] text-[#FF5C00] font-bold px-3 py-1.5 rounded-md shadow-inner text-sm sm:text-base">
                                    {interestRate}%
                                </div>
                            </div>
                            <input 
                                type="range" 
                                min="5" 
                                max="15" 
                                step="0.1" 
                                value={interestRate} 
                                onChange={(e) => setInterestRate(Number(e.target.value))}
                                className="w-full h-1.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-[#FF5C00]"
                            />
                            <div className="flex justify-between text-[10px] sm:text-xs font-medium text-zinc-400">
                                <span>5%</span>
                                <span>15%</span>
                            </div>
                        </div>

                        {/* Tenure Slider */}
                        <div className="flex flex-col gap-3">
                            <div className="flex justify-between items-end">
                                <label className="text-xs sm:text-sm font-bold text-[#111111] uppercase tracking-wider">Loan Tenure</label>
                                <div className="bg-[#111111] text-[#FF5C00] font-bold px-3 py-1.5 rounded-md shadow-inner text-sm sm:text-base">
                                    {tenureYears} Years
                                </div>
                            </div>
                            <input 
                                type="range" 
                                min="1" 
                                max="30" 
                                step="1" 
                                value={tenureYears} 
                                onChange={(e) => setTenureYears(Number(e.target.value))}
                                className="w-full h-1.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-[#FF5C00]"
                            />
                            <div className="flex justify-between text-[10px] sm:text-xs font-medium text-zinc-400">
                                <span>1 Year</span>
                                <span>30 Years</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Results Dashboard */}
                    <div className="lg:col-span-5 bg-[#111111] p-6 sm:p-8 lg:p-10 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col justify-center">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5C00]/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                        
                        <div className="relative z-10 flex flex-col gap-6">
                            
                            <div className="flex flex-col gap-1.5">
                                <span className="text-zinc-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                                    <IndianRupee className="w-3.5 h-3.5" /> Monthly EMI
                                </span>
                                <h3 className="text-3xl sm:text-4xl font-black text-[#FF5C00] tracking-tight">
                                    {formatCurrency(emi)}
                                </h3>
                            </div>

                            <div className="w-full h-px bg-white/10" />

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1.5">
                                    <span className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5">
                                        <PieChart className="w-3 h-3" /> Principal Amt
                                    </span>
                                    <span className="text-white text-lg sm:text-xl font-semibold">
                                        {formatCurrency(principal)}
                                    </span>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <span className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5">
                                        <PieChart className="w-3 h-3" /> Total Interest
                                    </span>
                                    <span className="text-white text-lg sm:text-xl font-semibold">
                                        {formatCurrency(totalInterest)}
                                    </span>
                                </div>
                            </div>

                            <div className="bg-white/5 border border-white/10 p-4 rounded-xl mt-2">
                                <span className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest mb-1 block">
                                    Total Amount Payable
                                </span>
                                <span className="text-white text-xl font-bold">
                                    {formatCurrency(totalAmount)}
                                </span>
                            </div>

                            <a href="#contact" className="w-full py-3.5 bg-[#FF5C00] hover:bg-white text-white hover:text-[#111111] rounded-xl text-center text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-xl mt-1">
                                Apply for Home Loan
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
