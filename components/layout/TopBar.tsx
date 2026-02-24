import { Phone, Twitter, Facebook, Instagram, Youtube } from "lucide-react";

export default function TopBar() {
  return (
    <div className="w-full h-8 bg-[#111111] text-zinc-300 flex items-center justify-between px-4 sm:px-8 text-[11px] sm:text-xs shrink-0 font-medium">
      <div className="flex items-center gap-4">
        {/* Sales Mobile No */}
        <a href="tel:+919999999999" className="flex items-center gap-2 hover:text-[#E3C67A] transition-colors">
          <Phone className="w-3.5 h-3.5" />
          <span className="tracking-wide">Sales: +91 999 999 9999</span>
        </a>
      </div>
      <div className="flex items-center gap-5">
        <span className="hidden sm:inline-block text-zinc-400">Follow Us:</span>
        {/* Facebook Link */}
        <a href="https://www.facebook.com/photo/?fbid=122133194294886025&set=a.122110298894886025" target="_blank" rel="noopener noreferrer" className="hover:text-[#E3C67A] transition-colors">
          <Facebook className="w-4 h-4" />
        </a>
        {/* Twitter URL provided by user (X) */}
        <a href="https://x.com/R17516Edistone/status/1959898033669443691" target="_blank" rel="noopener noreferrer" className="hover:text-[#E3C67A] transition-colors">
          <Twitter className="w-4 h-4" />
        </a>
        {/* Instagram/Youtube placeholders */}
        <a href="#" className="hover:text-[#E3C67A] transition-colors">
          <Instagram className="w-4 h-4" />
        </a>
        <a href="#" className="hover:text-[#E3C67A] transition-colors">
          <Youtube className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
