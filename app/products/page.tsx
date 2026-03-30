"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/context/LangContext";
import { products, categories, categoriesTa } from "@/data/products";
import Footer from "@/components/Footer";
import ProductsHero from "@/components/products/ProductsHero";
import ProductsControls from "@/components/products/ProductsControls";
import ProductGrid from "@/components/products/ProductGrid";
import { useState, useMemo } from "react";
import { type Product } from "@/data/products";
import ProductModal from "@/components/products/ProductModal";

if (typeof window !== "undefined") { gsap.registerPlugin(ScrollTrigger); }

export const PRODUCT_IMGS: Record<string, string> = {
  "medjool-dates": "https://images.unsplash.com/photo-1609171003004-3e04fa4f0d21?w=800&q=85",
  "ajwa-dates":    "https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?w=800&q=85",
  "deglet-noor":   "https://images.unsplash.com/photo-1574856344991-aaa31b6f4b96?w=800&q=85",
  "khudri-dates":  "https://images.unsplash.com/photo-1574856344991-aaa31b6f4b96?w=800&q=85",
  "cashews":       "https://images.unsplash.com/photo-1599599810694-b5b37304c041?w=800&q=85",
  "almonds":       "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=800&q=85",
  "pistachios":    "https://images.unsplash.com/photo-1590156562745-5a619a4eee2a?w=800&q=85",
  "walnuts":       "https://images.unsplash.com/photo-1572996993381-5e8c1e9c9937?w=800&q=85",
  "raisins":       "https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?w=800&q=85",
  "figs":          "https://images.unsplash.com/photo-1601206776960-a2e1a8e3c7fc?w=800&q=85",
  "apricots":      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=85",
  "gift-hamper":   "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&q=85",
};
export const DEFAULT_IMG = "https://images.unsplash.com/photo-1574856344991-aaa31b6f4b96?w=800&q=85";

type SortKey = "name" | "price-asc" | "price-desc" | "rating";

export default function ProductsPage() {
  const { t } = useLang();
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortKey>("name");
  const [modalProduct, setModalProduct] = useState<Product | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo("[data-hero-fade]",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", stagger: 0.1, delay: 0.3 }
      );
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modalOpen]);

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      const matchCat = activeCategory === "All" || p.category === activeCategory;
      const q = search.toLowerCase();
      const matchSearch = !q || p.name.toLowerCase().includes(q) || p.nameTa.includes(q) || p.category.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    else if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    else list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [activeCategory, search, sort]);

  const openModal = (p: Product) => { setModalProduct(p); setModalOpen(true); };
  const closeModal = () => { setModalOpen(false); setTimeout(() => setModalProduct(null), 400); };

  return (
    <div className="bg-bg min-h-screen">
      <ProductsHero />

      <ProductsControls
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        search={search}
        setSearch={setSearch}
        sort={sort as SortKey}
        setSort={setSort}
        count={filtered.length}
      />

      <ProductGrid
        products={filtered}
        onOpen={openModal}
      />

      {modalProduct && (
        <ProductModal
          product={modalProduct}
          imgSrc={PRODUCT_IMGS[modalProduct.id] || DEFAULT_IMG}
          open={modalOpen}
          onClose={closeModal}
        />
      )}

      <Footer />
    </div>
  );
}
