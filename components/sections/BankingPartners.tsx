"use client";


const BANKS = [
  {
    name: "ICICI Bank",
    logo: "/icici-bank.png",
  },
  {
    name: "State Bank of India",
    logo: "/sbi.png",
  },
  {
    name: "Kotak Mahindra Bank",
    logo: "/kotak.jpg",
  },
  {
    name: "PNB Housing Finance",
    logo: "/png housing.jpg",
  },
  {
    name: "Axis Bank",
    logo: "/axis-bank-logo.png",
  },
  {
    name: "Bandhan Bank",
    logo: "/bandhan-bank.jpg",
  },
];

// Triplicate for seamless loop
const ALL_BANKS = [...BANKS, ...BANKS, ...BANKS];

export default function BankingPartners() {

  return (
    <section className="w-full bg-[#F2F2F0] shrink-0 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-stretch min-h-[340px]">

        {/* ── LEFT: Text content ── */}
        <div className="flex-shrink-0 lg:w-[380px] xl:w-[420px] flex flex-col justify-center px-8 sm:px-12 lg:px-14 py-14 lg:py-16">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            <span className="text-[#0B132B]">Trusted</span>
            <br />
            <span className="text-[#FF5C00]">Banking Partners</span>
          </h2>
          <div className="w-16 h-1 bg-[#0B132B] mb-6 rounded-full" />
          <p className="text-[#555] text-[15px] leading-relaxed mb-8 max-w-sm">
            We have tied up with all major nationalized and private banks to ensure you get the best interest rates and hassle-free loan processing.
          </p>
          <button className="w-max flex items-center gap-2 px-7 py-3.5 bg-[#0B132B] hover:bg-[#FF5C00] text-white text-sm font-bold rounded-full transition-all duration-300 shadow-md hover:shadow-lg">
            Check Eligibility
          </button>
        </div>

        {/* ── RIGHT: Scrolling bank logos ── */}
        <div className="flex-1 flex items-center overflow-hidden relative py-10 lg:py-0">
          {/* Fade left */}
          <div className="absolute left-0 top-0 bottom-0 w-16 lg:w-20 bg-gradient-to-r from-[#F2F2F0] to-transparent z-10 pointer-events-none" />
          {/* Fade right */}
          <div className="absolute right-0 top-0 bottom-0 w-16 lg:w-20 bg-gradient-to-l from-[#F2F2F0] to-transparent z-10 pointer-events-none" />

          {/* Marquee track */}
          <div className="overflow-hidden w-full">
            <div
              className="flex gap-5 w-max bank-marquee"
            >
              {ALL_BANKS.map((bank, idx) => (
                <div
                  key={`${bank.name}-${idx}`}
                  className="flex-shrink-0 flex items-center justify-center bg-white rounded-[24px] shadow-md hover:shadow-xl transition-all duration-300 cursor-default"
                  style={{ width: "180px", height: "110px", padding: "18px 24px" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={bank.logo}
                    alt={bank.name}
                    title={bank.name}
                    className="max-h-12 max-w-[130px] w-auto object-contain"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback: show bank name text if logo fails
                      const target = e.currentTarget;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector(".bank-name-fallback")) {
                        const span = document.createElement("span");
                        span.className = "bank-name-fallback text-xs font-bold text-[#0B132B] text-center";
                        span.textContent = bank.name;
                        parent.appendChild(span);
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
