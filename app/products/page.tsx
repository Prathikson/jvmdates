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
  "medjool-dates": "/images/products/medjool-dates.webp",
  "ajwa-dates":    "/images/products/ajwa-dates.webp",
  "deglet-noor":   "/images/products/deglet-noor.webp",
  "khudri-dates":  "/images/products/khudri-dates.webp",
  "cashews":       "/images/products/cashews.webp",
  "almonds":       "/images/products/almonds.webp",
  "pistachios":    "/images/products/pistachios.webp",
  "walnuts":       "/images/products/walnuts.webp",
  "raisins":       "/images/products/raisins.webp",
  "figs":          "/images/products/figs.webp",
  "apricots":      "/images/products/apricots.webp",
  "gift-hamper":   "/images/products/gift.webp",
};
export const DEFAULT_IMG = "/images/products/medjool-dates.webp";

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
