"use client";
import { createContext, useContext, useState, useCallback, ReactNode } from "react";

export type WeightOption = "250g" | "500g" | "1kg" | "2kg" | "custom";

export type CartItem = {
  id: string;
  name: string;
  nameTa: string;
  price: number; // per 500g base
  weight: WeightOption;
  customGrams?: number;
  qty: number;
  imgSrc: string;
  category: string;
};

function getMultiplier(weight: WeightOption, customGrams?: number): number {
  switch (weight) {
    case "250g": return 0.5;
    case "500g": return 1;
    case "1kg":  return 2;
    case "2kg":  return 4;
    case "custom": return customGrams ? customGrams / 500 : 1;
    default: return 1;
  }
}

export function getItemPrice(basePrice: number, weight: WeightOption, customGrams?: number) {
  return Math.round(basePrice * getMultiplier(weight, customGrams));
}

export function weightLabel(weight: WeightOption, customGrams?: number) {
  if (weight === "custom") return `${customGrams ?? 500}g`;
  return weight;
}

type CartCtx = {
  items: CartItem[];
  count: number;
  total: number;
  open: boolean;
  setOpen: (v: boolean) => void;
  addItem: (item: Omit<CartItem, "qty">) => void;
  removeItem: (id: string, weight: WeightOption, customGrams?: number) => void;
  updateQty: (id: string, weight: WeightOption, qty: number, customGrams?: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartCtx>({
  items: [], count: 0, total: 0, open: false,
  setOpen: () => {}, addItem: () => {}, removeItem: () => {},
  updateQty: () => {}, clearCart: () => {},
});

function cartKey(id: string, weight: WeightOption, customGrams?: number) {
  return `${id}__${weight}${weight === "custom" ? `__${customGrams}` : ""}`;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

  const addItem = useCallback((item: Omit<CartItem, "qty">) => {
    setItems(prev => {
      const existing = prev.find(i =>
        i.id === item.id && i.weight === item.weight &&
        (item.weight !== "custom" || i.customGrams === item.customGrams)
      );
      if (existing) {
        return prev.map(i =>
          i.id === item.id && i.weight === item.weight
            ? { ...i, qty: i.qty + 1 }
            : i
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
    setOpen(true);
  }, []);

  const removeItem = useCallback((id: string, weight: WeightOption, customGrams?: number) => {
    setItems(prev => prev.filter(i =>
      !(i.id === id && i.weight === weight &&
        (weight !== "custom" || i.customGrams === customGrams))
    ));
  }, []);

  const updateQty = useCallback((id: string, weight: WeightOption, qty: number, customGrams?: number) => {
    if (qty < 1) { removeItem(id, weight, customGrams); return; }
    setItems(prev => prev.map(i =>
      i.id === id && i.weight === weight &&
      (weight !== "custom" || i.customGrams === customGrams)
        ? { ...i, qty }
        : i
    ));
  }, [removeItem]);

  const clearCart = useCallback(() => setItems([]), []);

  const count = items.reduce((s, i) => s + i.qty, 0);
  const total = items.reduce((s, i) => s + getItemPrice(i.price, i.weight, i.customGrams) * i.qty, 0);

  return (
    <CartContext.Provider value={{ items, count, total, open, setOpen, addItem, removeItem, updateQty, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
