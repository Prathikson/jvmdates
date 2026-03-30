"use client";
import { useState } from "react";
import { Plus, Star, MapPin, SearchX } from "lucide-react";
import { useLang } from "@/context/LangContext";
import { type Product } from "@/data/products";
import { PRODUCT_IMGS, DEFAULT_IMG } from "@/app/products/page";

export default function ProductGrid({ products, onOpen }: { products: Product[]; onOpen: (p: Product) => void }) {
  const { t } = useLang();

  if (products.length === 0) {
    return (
      <section className="w-full px-6 md:px-12 lg:px-20 pb-20">
        <div className="flex flex-col items-center justify-center py-20 text-center gap-6 bg-[#f8f7f2] rounded-[32px]">
          <SearchX size={48} className="text-gold opacity-20" />
          <h3 className="text-xl font-semibold text-forest tracking-tight">
            {t("No products found", "பொருட்கள் எதுவும் இல்லை")}
          </h3>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full px-6 md:px-12 lg:px-20 pb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onOpen={onOpen} />
        ))}
      </div>
    </section>
  );
}

function ProductCard({ product: p, onOpen }: { product: Product; onOpen: (p: Product) => void }) {
  const { t } = useLang();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group cursor-pointer flex flex-col h-full bg-white rounded-[32px] border border-forest/5 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-gold/5"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onOpen(p)}
    >
      <div className="relative aspect-square overflow-hidden bg-[#f8f7f2]">
        <img
          src={PRODUCT_IMGS[p.id] || DEFAULT_IMG}
          alt={p.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out"
          style={{ transform: hovered ? "scale(1.08)" : "scale(1)" }}
        />
        {p.badge && (
          <div className="absolute top-6 left-6 z-10 bg-gold text-forest text-[9px] font-black px-3 py-1 rounded-full tracking-widest uppercase">
            {t(p.badge, p.badgeTa ?? p.badge)}
          </div>
        )}
        <div className="absolute bottom-6 right-6 z-10 w-12 h-12 rounded-full bg-forest text-gold flex items-center justify-center shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <Plus size={20} />
        </div>
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3 opacity-60">
          <MapPin size={12} className="text-gold" />
          <p className="text-[9px] font-bold text-forest uppercase tracking-[0.2em]">
            {t(p.category, p.categoryTa ?? p.category)} · {t(p.origin, p.originTa ?? p.origin)}
          </p>
        </div>

        <div className="flex justify-between items-start gap-4 mb-4">
          <h3 className="text-xl md:text-2xl font-semibold text-forest tracking-tight group-hover:text-gold transition-colors">
            {t(p.name, p.nameTa ?? p.name)}
          </h3>
          <div className="text-right">
            <p className="text-2xl font-bold text-forest tracking-tighter leading-none">₹{p.price}</p>
            <p className="text-[10px] font-bold text-muted uppercase mt-1">/{p.unit}</p>
          </div>
        </div>

        <div className="mt-auto flex items-center gap-1 pt-6 border-t border-forest/5">
          {[...Array(5)].map((_, s) => (
            <Star key={s} size={12} className={s < Math.round(p.rating) ? "text-gold fill-gold" : "text-border fill-border"} />
          ))}
          <span className="text-[10px] font-bold text-muted ml-2">({p.reviews})</span>
        </div>
      </div>
    </div>
  );
}