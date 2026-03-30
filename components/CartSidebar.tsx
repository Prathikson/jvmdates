"use client";
import { useCart, getItemPrice, weightLabel } from "@/context/CartContext";
import { useLang } from "@/context/LangContext";
import { X, ShoppingBag, Minus, Plus, Trash2, ArrowRight } from "lucide-react";

export default function CartSidebar() {
  const { items, count, total, open, setOpen, updateQty, removeItem, clearCart } = useCart();
  const { t } = useLang();

  return (
    <>
      {/* Overlay */}
      <div
        className={`cart-overlay ${open ? "open" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* Sidebar */}
      <aside className={`cart-sidebar ${open ? "open" : ""}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <div className="flex items-center gap-3">
            <ShoppingBag size={20} className="text-forest" />
            <h2 className="text-lg font-bold text-forest tracking-tight">
              {t("Your Cart", "உங்கள் கூடை")}
            </h2>
            {count > 0 && (
              <span className="bg-gold text-forest text-xs font-bold px-2 py-0.5 rounded-full">
                {count}
              </span>
            )}
          </div>
          <button
            onClick={() => setOpen(false)}
            className="w-9 h-9 rounded-full bg-beige flex items-center justify-center hover:bg-border transition-colors"
          >
            <X size={16} className="text-forest" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 py-16 text-center">
              <div className="w-20 h-20 rounded-full bg-beige flex items-center justify-center">
                <ShoppingBag size={32} className="text-muted opacity-40" />
              </div>
              <p className="text-lg font-bold text-forest">
                {t("Your cart is empty", "உங்கள் கூடை காலியாக உள்ளது")}
              </p>
              <p className="text-sm text-muted">
                {t("Add some products to get started", "தொடங்க சில பொருட்களை சேர்க்கவும்")}
              </p>
              <button
                onClick={() => setOpen(false)}
                className="mt-2 px-6 py-3 rounded-full bg-forest text-beige text-sm font-bold hover:bg-forest-light transition-colors"
              >
                {t("Browse Products", "பொருட்களை உலாவு")}
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {items.map((item) => {
                const itemPrice = getItemPrice(item.price, item.weight, item.customGrams);
                return (
                  <div key={`${item.id}_${item.weight}_${item.customGrams}`}
                    className="flex gap-4 p-3 bg-white rounded-2xl border border-border"
                  >
                    {/* Image */}
                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                      <img src={item.imgSrc} alt={item.name} className="w-full h-full object-cover" />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-forest truncate">{item.name}</p>
                      <p className="text-xs text-muted font-medium mt-0.5">
                        {weightLabel(item.weight, item.customGrams)} · ₹{itemPrice}
                      </p>

                      {/* Qty controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQty(item.id, item.weight, item.qty - 1, item.customGrams)}
                          className="w-7 h-7 rounded-full bg-beige flex items-center justify-center hover:bg-border transition-colors"
                        >
                          <Minus size={12} className="text-forest" />
                        </button>
                        <span className="text-sm font-bold text-forest w-5 text-center">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.id, item.weight, item.qty + 1, item.customGrams)}
                          className="w-7 h-7 rounded-full bg-beige flex items-center justify-center hover:bg-border transition-colors"
                        >
                          <Plus size={12} className="text-forest" />
                        </button>
                      </div>
                    </div>

                    {/* Price + remove */}
                    <div className="flex flex-col items-end justify-between flex-shrink-0">
                      <button
                        onClick={() => removeItem(item.id, item.weight, item.customGrams)}
                        className="text-muted hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                      <p className="text-base font-bold text-forest">₹{itemPrice * item.qty}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-border bg-white">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-muted font-medium">{t("Subtotal", "மொத்தம்")}</span>
              <span className="text-xl font-bold text-forest">₹{total.toLocaleString()}</span>
            </div>
            <button className="w-full py-4 rounded-full bg-forest text-beige font-bold text-base flex items-center justify-center gap-2 hover:bg-forest-light transition-colors">
              {t("Proceed to Checkout", "செலுத்துவதற்கு தொடரவும்")}
              <ArrowRight size={18} />
            </button>
            <button
              onClick={clearCart}
              className="w-full mt-3 py-3 rounded-full border border-border text-muted text-sm font-medium hover:border-forest hover:text-forest transition-colors"
            >
              {t("Clear Cart", "கூடையை காலி செய்")}
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
