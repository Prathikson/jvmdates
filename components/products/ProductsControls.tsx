"use client";
import { Search, SlidersHorizontal, Check } from "lucide-react";
import { useLang } from "@/context/LangContext";
import { categories, categoriesTa } from "@/data/products";

// Correctly defining types to avoid 'any'
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
        
        {/* Massive Search Input */}
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

        {/* Premium Sort Dropdown */}
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
          <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none opacity-30 text-forest">
             <div className="w-2 h-2 border-r-2 border-b-2 border-current rotate-45" />
          </div>
        </div>
      </div>

      {/* Category Pills Row */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-t border-forest/5 pt-12">
        <div className="flex items-center gap-3 overflow-x-auto pb-4 md:pb-0 no-scrollbar w-full md:w-auto">
          {categories.map((cat, i) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-10 py-4 rounded-full border-2 text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-500 flex items-center gap-2 ${
                activeCategory === cat
                  ? "bg-forest text-gold border-forest shadow-xl scale-105"
                  : "bg-white text-forest/40 border-forest/5 hover:border-gold hover:text-gold"
              }`}
            >
              {activeCategory === cat && <Check size={14} />}
              {t(cat, categoriesTa[i])}
            </button>
          ))}
        </div>

        {/* Counter */}
        <div className="flex-shrink-0">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-forest/20">
            {count} {t("Results", "முடிவுகள்")}
          </p>
        </div>
      </div>
    </section>
  );
}