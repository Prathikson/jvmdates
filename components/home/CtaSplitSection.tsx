"use client";
import Link from "next/link";
import { Leaf, Package, ChevronRight } from "lucide-react";
import { useLang } from "@/context/LangContext";
import ParallaxImage from "@/components/ParallaxImage";

const ORGANIC_IMG = "/images/farm2.jpg";

export default function CtaSplitSection() {
  const { t } = useLang();

  return (
    <section className="relative w-full py-24 md:py-32 lg:py-48 bg-[#fdfdfb] px-6 md:px-12 lg:px-20 overflow-hidden">
      
      <div className="w-full mb-20 md:mb-32" data-scroll-fade>
        <div className="flex items-center gap-4 mb-8">
          <div className="h-[1.5px] w-14 bg-gold" />
          <p className="text-[11px] font-bold tracking-[0.4em] uppercase text-gold">
            {t("Next Steps", "அடுத்த படிகள்")}
          </p>
        </div>
        <h2 
          className="text-forest font-semibold leading-[1.05] tracking-tighter max-w-4xl"
          style={{ fontSize: "clamp(42px, 7vw, 88px)" }}
        >
          {t("Ready to experience the finest?", "சிறந்ததை அனுபவிக்க தயாரா?")}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16" data-scroll-fade>
        {/* Natural card */}
        <div className="group bg-[#f8f7f2] rounded-[48px] p-12 md:p-16 lg:p-20 flex flex-col justify-between min-h-[650px] relative overflow-hidden transition-all duration-700">
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-forest flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
              <Leaf size={32} className="text-beige" />
            </div>
            <h3 className="text-forest font-semibold leading-[1.1] tracking-tighter mb-8"
              style={{ fontSize: "clamp(32px, 4vw, 64px)" }}>
              {t("100% Natural. Zero Additives.", "100% இயற்கை. சேர்க்கை இல்லை.")}
            </h3>
            <p className="text-muted leading-relaxed max-w-md text-lg italic">
              {t("No artificial preservatives, colours, or flavours. Every product is exactly as nature intended — pure and raw.", "செயற்கை பதிமங்கள், நிறங்கள் அல்லது சுவைகள் இல்லை.")}
            </p>
          </div>
          <div className="relative mt-12 rounded-[32px] overflow-hidden shadow-xl">
             <ParallaxImage src={ORGANIC_IMG} alt="Organic" className="object-cover" />
          </div>
        </div>

        {/* Action card */}
        <div className="group bg-forest rounded-[48px] p-12 md:p-16 lg:p-20 flex flex-col justify-between min-h-[650px] relative overflow-hidden transition-all duration-700">
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-gold flex items-center justify-center mb-10">
              <Package size={32} className="text-forest" />
            </div>
            <h3 className="text-beige font-semibold leading-[1.1] tracking-tighter mb-8"
              style={{ fontSize: "clamp(32px, 4vw, 64px)" }}>
              {t("Go ahead and try it.", "முன்வந்து முயற்சி செய்யுங்கள்.")}
            </h3>
          </div>

          <div className="relative z-10 space-y-2">
            {[
              { en: "Buy JVM online",    ta: "ஆன்லைனில் வாங்க",   href: "/products" },
              { en: "Find JVM in store",   ta: "கடையில் வாங்க",    href: "/contact" },
              { en: "Retailer inquiries",   ta: "சில்லறை விற்பனை",    href: "/contact" },
            ].map((item, i) => (
              <Link key={i} href={item.href}
                className="flex items-center justify-between py-8 border-b border-white/10 text-beige hover:text-gold transition-all group/link no-underline">
                <span className="text-2xl md:text-3xl font-semibold tracking-tighter group-hover/link:pl-4 transition-all duration-500">
                    {t(item.en, item.ta)}
                </span>
                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover/link:bg-gold group-hover/link:text-forest group-hover/link:border-gold transition-all">
                    <ChevronRight size={28} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}