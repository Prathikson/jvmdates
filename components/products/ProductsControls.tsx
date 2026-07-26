"use client";
import { Search, SlidersHorizontal, Check } from "lucide-react";
import { useLang } from "@/context/LangContext";
import { categories, categoriesTa } from "@/data/products";

export type SortKey = "name" | "price-asc" | "price-desc" | "rating";

interface Props {
  activeCategory: string;
  setActiveCategory: (c: string) => void;
  search: string;
  setSearch: (s: string) => void;
  sort: SortKey;
  setSort: (s: SortKey) => void;
  count: number;
}

export default function ProductsControls({
  activeCategory, setActiveCategory,
  search, setSearch,
  sort, setSort,
  count,
}: Props) {
  const { t } = useLang();

  return (
    <section className="w-full px-6 md:px-12 lg:px-20 pb-12 bg-[#fdfdfb]">
      {/* Search & Sort Row */}
      <div className="flex flex-col lg:flex-row gap-6 justify-between items-stretch mb-10">
        <div className="relative flex-1 group">
          <Search size={24} className="absolute left-8 top-1/2 -translate-y-1/2 text-forest/20 group-focus-within:text-gold transition-colors" />
          <input
            type="text"
            placeholder={t("Search our collection...", "சேகரிப்பைத் தேடுங்கள்...")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-20 pr-10 py-7 bg-white border border-forest/5 rounded-[40px] text-xl text-forest placeholder:text-forest/20 outline-none focus:border-gold focus:shadow-2xl focus:shadow-gold/5 transition-all font-medium"
          />
        </div>

        <div className="relative min-w-[280px] group">
          <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gold pointer-events-none">
            <SlidersHorizontal size={18} />
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="w-full pl-16 pr-10 py-7 bg-white border border-forest/5 rounded-[40px] text-sm font-black uppercase tracking-[0.2em] text-forest outline-none cursor-pointer appearance-none focus:border-gold transition-all"
          >
            <option value="name">{t("Sort: Name", "பெயர்")}</option>
            <option value="price-asc">{t("Price: Low → High", "விலை: குறைவு")}</option>
            <option value="price-desc">{t("Price: High → Low", "விலை: அதிகம்")}</option>
            <option value="rating">{t("Top Rated", "மதிப்பீடு")}</option>
          </select>
        </div>
      </div>

      {/* Category Pills Row - IMPROVED */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-t border-forest/5 pt-12">
        
        {/* Scroll Container with Fading Edges */}
        <div className="relative w-full md:w-auto overflow-hidden">
          {/* Gradient Overlays for "Fade" effect */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#fdfdfb] to-transparent z-10 pointer-events-none md:hidden" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#fdfdfb] to-transparent z-10 pointer-events-none md:hidden" />

          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar scroll-smooth py-2 px-2">
            {categories.map((cat, i) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-8 py-3.5 rounded-full border-2 text-[14px] font-black uppercase tracking-[0.25em] transition-all duration-300 flex items-center gap-2 shrink-0 ${
                  activeCategory === cat
                    ? "bg-forest text-gold border-forest shadow-lg -translate-y-0.5"
                    : "bg-white text-forest/50 border-forest/5 hover:border-gold/30 hover:text-gold"
                }`}
              >
                {activeCategory === cat && <Check size={12} className="animate-in zoom-in duration-300" />}
                {t(cat, categoriesTa[i])}
              </button>
            ))}
          </div>
        </div>

        {/* Counter */}
        <div className="flex-shrink-0 bg-forest/5 px-4 py-2 rounded-full">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-forest/40">
            {count} <span className="text-forest/20">{t("Items", "பொருட்கள்")}</span>
          </p>
        </div>
      </div>
    </section>
  );
}