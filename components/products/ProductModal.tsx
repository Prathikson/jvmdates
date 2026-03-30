"use client";
import { useState, useMemo } from "react";
import { X, Minus, Plus, ShoppingBag, Star, MapPin, Weight, CheckCircle } from "lucide-react";
import { useLang } from "@/context/LangContext";
import { useCart, type WeightOption, getItemPrice } from "@/context/CartContext";
import { type Product } from "@/data/products";
import { PRODUCT_IMGS, DEFAULT_IMG } from "@/app/products/page";

interface Props {
  product: Product;
  imgSrc: string;
  open: boolean;
  onClose: () => void;
}

// Custom Weight Icons
const WeightIcons = {
  "250g": () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 10h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2z"/><path d="M10 10V7a2 2 0 0 1 4 0v3"/></svg>,
  "500g": () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 9h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></svg>,
  "1kg": () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="8" width="18" height="13" rx="2"/><path d="M8 8V5a4 4 0 0 1 8 0v3"/><path d="M12 12v5"/></svg>,
  "2kg": () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="8" width="20" height="13" rx="2"/><path d="M7 8V4a5 5 0 0 1 10 0v4"/><path d="M10 13h4M12 11v4"/></svg>,
  "custom": () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>
};

export default function ProductModal({ product: p, open, onClose }: Props) {
  const { t } = useLang();
  const { addItem } = useCart();
  
  // FIXED: No useEffect for state reset to avoid cascading renders.
  // We use the ID as part of a unique key elsewhere or simply manage reset on open.
  const [weight, setWeight] = useState<WeightOption>("500g");
  const [customGrams, setCustomGrams] = useState(500);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  // Derived Values
  const price = useMemo(() => getItemPrice(p.price, weight, weight === "custom" ? customGrams : undefined), [p.price, weight, customGrams]);
  const totalPrice = price * qty;

  const handleAdd = () => {
    addItem({
      id: p.id,
      name: p.name,
      nameTa: p.nameTa,
      price: p.price,
      weight,
      customGrams: weight === "custom" ? customGrams : undefined,
      imgSrc: PRODUCT_IMGS[p.id] || DEFAULT_IMG,
      category: p.category,
    });
    setAdded(true);
    setTimeout(() => { setAdded(false); onClose(); }, 1500);
  };

  return (
    <>
      <div className={`product-modal-backdrop ${open ? "open" : ""}`} onClick={onClose} />

      <div className={`product-modal-sheet lg:rounded-[48px] overflow-hidden ${open ? "open" : ""}`}>
        {/* Mobile Handle */}
        <div className="flex justify-center pt-4 pb-2 lg:hidden">
          <div className="w-12 h-1.5 rounded-full bg-forest/10" />
        </div>

        <div className="overflow-y-auto max-h-[90vh] pb-24 md:pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Image: Gigantic Square */}
            <div className="relative aspect-square p-6 lg:p-12">
              <div className="relative w-full h-full rounded-[32px] overflow-hidden shadow-2xl bg-[#f8f7f2]">
                <img src={PRODUCT_IMGS[p.id] || DEFAULT_IMG} alt={p.name} className="absolute inset-0 w-full h-full object-cover" />
                {p.badge && (
                   <div className="absolute top-6 left-6 bg-gold text-forest text-[10px] font-black px-4 py-1.5 rounded-full tracking-widest uppercase">{t(p.badge, p.badgeTa ?? p.badge)}</div>
                )}
              </div>
            </div>

            {/* Details Content */}
            <div className="p-8 lg:p-16 flex flex-col gap-10">
              <div className="flex justify-between items-start">
                <div>
                   <p className="text-[11px] font-bold text-gold uppercase tracking-[0.3em] mb-4">{t(p.category, p.categoryTa)} · {t(p.origin, p.originTa)}</p>
                   <h2 className="text-4xl lg:text-6xl font-semibold text-forest tracking-tighter leading-tight">{t(p.name, p.nameTa)}</h2>
                </div>
                <button onClick={onClose} className="w-12 h-12 rounded-full bg-forest/5 flex items-center justify-center hover:bg-forest/10 transition-colors"><X size={20}/></button>
              </div>

              <div className="flex items-center gap-2">
                 {[...Array(5)].map((_, s) => <Star key={s} size={16} className={s < Math.round(p.rating) ? "text-gold fill-gold" : "text-border fill-border"} />)}
                 <span className="text-sm font-bold text-muted ml-2">{p.rating} · {p.reviews} {t("reviews", "மதிப்பீடுகள்")}</span>
              </div>

              <p className="text-lg text-muted leading-relaxed italic">&quot;{t(p.description, p.descriptionTa)}&quot;</p>

              {/* Weight Selector */}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-forest/40 mb-6 flex items-center gap-2"><Weight size={14}/> {t("Choose Weight", "எடை")}</p>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                  {(["250g", "500g", "1kg", "2kg", "custom"] as WeightOption[]).map((val) => {
                    const Icon = WeightIcons[val];
                    return (
                      <button key={val} onClick={() => setWeight(val)} className={`flex flex-col items-center gap-3 py-6 px-2 rounded-3xl border-2 transition-all duration-300 ${weight === val ? "border-forest bg-forest text-beige shadow-xl" : "border-forest/5 bg-white text-forest hover:border-forest/20"}`}>
                        <Icon />
                        <span className="text-xs font-black uppercase tracking-tighter">{val === "custom" ? t("Custom", "தனிப்பயன்") : val}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Actions Footer */}
              <div className="mt-10 pt-10 border-t border-forest/5 flex flex-col gap-8">
                <div className="flex items-center justify-between">
                   <div className="flex flex-col">
                      <span className="text-xs font-bold text-gold uppercase tracking-widest mb-1">{t("Total Price", "மொத்த விலை")}</span>
                      <span className="text-5xl font-bold text-forest tracking-tighter">₹{totalPrice.toLocaleString()}</span>
                   </div>
                   <div className="flex items-center bg-forest/5 rounded-full p-2">
                      <button onClick={() => setQty(q => Math.max(1, q-1))} className="w-12 h-12 flex items-center justify-center hover:bg-white rounded-full transition-all"><Minus size={18}/></button>
                      <span className="w-12 text-center text-xl font-bold text-forest">{qty}</span>
                      <button onClick={() => setQty(q => q+1)} className="w-12 h-12 flex items-center justify-center hover:bg-white rounded-full transition-all"><Plus size={18}/></button>
                   </div>
                </div>

                <button onClick={handleAdd} disabled={!p.inStock} className={`w-full py-6 rounded-full font-black text-xl flex items-center justify-center gap-4 transition-all duration-500 shadow-2xl ${added ? "bg-green-600 text-white" : "bg-forest text-beige hover:bg-forest-light hover:scale-[1.02]"}`}>
                   {added ? <><CheckCircle size={24}/> {t("Added!", "சேர்க்கப்பட்டது!")}</> : <><ShoppingBag size={24}/> {t("Add to Cart", "கூடையில் சேர்")}</>}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}