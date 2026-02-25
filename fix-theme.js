const fs = require('fs');
let file = fs.readFileSync('app/residential/page.tsx', 'utf8');

// 1. Remove the solid orange navbar and make it white + gold like the main website
file = file.replace(/bg-\[#ef4f00\] sticky/g, 'bg-white sticky');
file = file.replace(/text-white shadow-md">\n                <div className="max-w-\[1400px\] mx-auto px-4 sm:px-8 py-3 sm:py-4 flex justify-between items-center">\n                    {\/\* Logo Area \*\/}\n                    <div className="flex flex-col tracking-tight cursor-pointer" onClick=\{\(\) => window.scrollTo\(0, 0\)\}>\n                        <span className="text-2xl sm:text-3xl font-extrabold uppercase leading-none font-serif tracking-wide text-white">EDISTONE<\/span>\n                        <span className="text-\[9px\] sm:text-\[10px\] font-semibold tracking-\[0.25em\] uppercase mt-1 text-white\/90">REAL ESTATES<\/span>/g,
    `text-[#111111] shadow-md border-b border-zinc-100">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-3 sm:py-4 flex justify-between items-center">
                    {/* Logo Area */}
                    <div className="flex flex-col tracking-tight cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                        <div className="flex items-center gap-2">
                            <span className="text-2xl sm:text-3xl font-extrabold uppercase leading-none font-serif tracking-wide text-[#111111]">EDISTONE</span>
                        </div>
                        <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.25em] uppercase mt-1 text-[#6B6B6B]">REAL ESTATE PVT LTD</span>`);

// 2. Nav links should be grey/black, hovering gold
file = file.replace(/text-\[12px\] font-bold tracking-widest uppercase">\n                        <button onClick=\{\(\) => scrollTo\('about'\)\} className="hover:text-amber-200 transition-colors">ABOUT<\/button>/g, `text-[12px] font-bold tracking-widest uppercase text-zinc-700">
                        <button onClick={() => scrollTo('about')} className="hover:text-[#C8A24D] transition-colors">ABOUT</button>`);
file = file.replace(/hover:text-amber-200/g, 'hover:text-[#C8A24D]');

// 3. Right nav button text color
file = file.replace(/bg-white text-\[#ef4f00\]/g, 'bg-[#C8A24D] text-white');

// 4. Change all remaining colors to match the premium theme completely
file = file.replace(/#ef4f00/g, '#C8A24D');
file = file.replace(/#2b3a55/g, '#111111');

// 5. Update floating buttons
file = file.replace(/bg-\[#25D366\]/g, 'bg-[#25D366]');
file = file.replace(/text-white shadow-md border-b/g, 'text-[#111111] shadow-md border-b');

fs.writeFileSync('app/residential/page.tsx', file);
console.log("Colors replaced successfully.");
