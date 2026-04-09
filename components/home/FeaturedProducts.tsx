"use client";
import Link from "next/link";
import { ArrowRight, Star, MapPin, ChevronRight } from "lucide-react";
import { useLang } from "@/context/LangContext";
import { products, Product } from "@/data/products";
import { useState } from "react";

// 1. Types for full Type Safety
type TranslationFn = (en: string, ta?: string) => string;

const PRODUCT_IMGS: Record<string, string> = {
  "medjool-dates": "/images/products/medjool-dates.webp",
  "ajwa-dates":    "/images/products/ajwa-dates.webp",
  "pistachios":    "/images/products/pistachios.webp",
  "gift-hamper":   "/images/products/gift.webp",
};

const DEFAULT_IMG = "/images/products/cashews.webp";

interface ProductCardProps {
  p: Product;
  t: TranslationFn;
}

// Sub-component to handle local state (Hover) and avoid Hook loop errors
function ProductCard({ p, t }: ProductCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link 
      href={`/products`} 
      className="group no-underline block h-full focus:outline-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative flex flex-col h-full bg-white rounded-[48px] overflow-hidden border border-forest/5 transition-all duration-700 hover:shadow-2xl hover:shadow-gold/5">
        
        {/* EXACT SQUARE SHAPE FOR IMAGE */}
        <div className="relative aspect-square overflow-hidden bg-[#f8f7f2]">
          <img
            src={PRODUCT_IMGS[p.id] || DEFAULT_IMG}
            alt={p.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out"
            style={{ transform: hovered ? "scale(1.1)" : "scale(1)" }}
          />
          
          {p.badge && (
            <div className="absolute top-8 left-8 z-10 bg-gold text-forest text-[11px] font-black px-5 py-2 rounded-full tracking-[0.15em] uppercase shadow-lg">
              {t(p.badge, p.badgeTa ?? p.badge)}
            </div>
          )}

          <div className="absolute bottom-8 right-8 z-10 bg-white/95 backdrop-blur-md rounded-2xl px-5 py-2.5 flex items-center gap-2 shadow-xl border border-forest/5">
            <Star size={16} className="text-gold fill-gold" />
            <span className="text-base font-bold text-forest">{p.rating}</span>
          </div>
        </div>

        {/* Spacious Body Content */}
        <div className="p-10 md:p-14 flex flex-col flex-1">
          <div className="flex items-center gap-2.5 mb-5 opacity-60">
            <MapPin size={16} className="text-gold" />
            <p className="text-[12px] text-forest font-bold uppercase tracking-[0.25em] truncate">
              {t(p.origin, p.originTa)} · {t(p.category, p.categoryTa)}
            </p>
          </div>

          <h3 className="text-3xl md:text-5xl font-semibold text-forest tracking-tighter leading-[1.1] mb-6 group-hover:text-gold transition-colors duration-500">
            {t(p.name, p.nameTa)}
          </h3>

          <p className="text-muted leading-relaxed mb-12 line-clamp-2 text-lg italic opacity-80">
            &quot;{t(p.description, p.descriptionTa)}&quot;
          </p>

          <div className="mt-auto pt-10 border-t border-forest/5 flex items-center justify-between">
            <div className="flex flex-col">
                <span className="text-[11px] font-bold text-gold uppercase tracking-[0.3em] mb-2">{t("Starting from", "ஆரம்ப விலை")}</span>
                <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl md:text-5xl font-bold text-forest tracking-tighter">₹{p.price}</span>
                    <span className="text-base text-muted font-medium">/{t(p.unit, p.unitTa)}</span>
                </div>
            </div>
            
            <div className="w-16 h-16 rounded-full border border-forest/10 flex items-center justify-center group-hover:bg-forest group-hover:text-white group-hover:border-forest transition-all duration-500">
              <ChevronRight size={28} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function FeaturedProducts() {
  // Casting 't' to match our TranslationFn to fix the TypeScript parameter error
  const { t } = useLang() as { t: TranslationFn };
  
  // Filtering for featured items with badges
  const featured = products.filter((p) => p.badge).slice(0, 3);

  return (
    <section className="relative w-full py-24 md:py-32 lg:py-48 bg-[#fdfdfb] px-6 md:px-12 lg:px-20 overflow-hidden">
      
      {/* 1. GIGANTIC HEADER SECTION */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20 md:mb-32" data-scroll-fade>
        <div className="max-w-5xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-14 bg-gold flex-shrink-0" />
            <p className="text-[12px] md:text-sm font-bold tracking-[0.4em] uppercase text-gold">
              {t("Our Products", "எங்கள் பொருட்கள்")}
            </p>
          </div>
          <h2 
            className="text-forest font-semibold leading-[0.95] tracking-tighter"
            style={{ fontSize: "clamp(48px, 8vw, 100px)" }} // Even more gigantic: 100px
          >
            {t("Choose wisely.", "புத்திசாலித்தனமாக தேர்வு செய்யுங்கள்.")}
          </h2>
        </div>

        <Link href="/products"
          className="group flex items-center gap-5 text-forest font-bold text-xl border-b-2 border-forest/10 hover:border-gold transition-all pb-3 w-fit">
          {t("View all products", "அனைத்து பொருட்கள்")} 
          <div className="bg-forest text-white p-2.5 rounded-full group-hover:bg-gold group-hover:translate-x-1.5 transition-all duration-500">
             <ArrowRight size={24} />
          </div>
        </Link>
      </div>

      {/* 2. GIGANTIC SQUARE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 max-w-screen-2xl mx-auto">
        {featured.map((p) => (
          <ProductCard key={p.id} p={p} t={t} />
        ))}
      </div>

      {/* Subtle background luxury blur */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />
    </section>
  );
}