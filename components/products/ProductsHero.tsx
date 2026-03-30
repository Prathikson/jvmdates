"use client";
import { useLang } from "@/context/LangContext";

export default function ProductsHero() {
  const { t } = useLang();
  return (
    <section className="relative w-full pt-24 pb-12 bg-[#fdfdfb] px-6 md:px-12 lg:px-20 overflow-hidden">
      <div data-hero-fade>
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[1.5px] w-12 bg-gold" />
          <p className="text-[11px] font-bold tracking-[0.4em] uppercase text-gold">
            {t("Our Store", "எங்கள் கடை")}
          </p>
        </div>
        <h1 
          className="text-forest font-semibold leading-[1.05] tracking-tighter max-w-4xl"
          style={{ fontSize: "clamp(42px, 7vw, 88px)" }}
        >
          {t("Choose wisely.", "புத்திசாலித்தனமாக தேர்வு செய்யுங்கள்.")}
        </h1>
      </div>
    </section>
  );
}