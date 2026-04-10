"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ShoppingBag, Menu, X, Globe } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useLang } from "@/context/LangContext";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastY = useRef(0);

  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const { lang, toggle, t } = useLang();
  const { count, setOpen: setCartOpen } = useCart();
  const pathname = usePathname();

  // Handle Mounting & Entrance Animation
  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 10);
    gsap.fromTo(containerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power4.out", delay: 1.5 }
    );
    return () => clearTimeout(timer);
  }, []);

  // Handle Scroll Visibility
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 100) { setHidden(false); lastY.current = y; return; }
      if (y > lastY.current + 15) setHidden(true);
      else if (y < lastY.current - 15) setHidden(false);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── NAVBAR BAR ── */}
      <div
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-[100] transition-transform duration-500 ease-in-out px-4 py-4 md:px-12 md:py-8 ${
          hidden && !mobileOpen ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div
          ref={containerRef}
          className="max-w-screen-2xl mx-auto flex items-center justify-between bg-white/80 backdrop-blur-2xl border border-forest/5 rounded-[40px] px-5 py-3 md:px-10 md:py-5 shadow-2xl shadow-forest/5 transition-all"
        >
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3 flex-shrink-0">
            <div className="w-6 h-6 bg-forest rounded-sm rotate-45 group-hover:rotate-90 transition-transform duration-500" />
            <span className="text-2xl md:text-3xl font-black tracking-tighter text-forest uppercase italic">
              {siteConfig.shortName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {siteConfig.nav.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                    active
                      ? "bg-forest text-gold shadow-lg"
                      : "text-forest/60 hover:text-forest hover:bg-forest/5"
                  }`}
                >
                  {isMounted ? t(item.label, item.labelTa) : item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">

            {/* Language Toggle — desktop only */}
            <button
              onClick={toggle}
              className="hidden sm:flex items-center gap-2 px-4 md:px-6 py-3 rounded-full border border-forest/10 text-[10px] font-black uppercase tracking-[0.2em] text-forest hover:bg-forest hover:text-gold transition-all"
            >
              <Globe size={14} />
              {isMounted ? (lang === "en" ? "தமிழ்" : "English") : "தமிழ்"}
            </button>

            {/* Shopping Bag */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative px-5 py-3 md:px-8 md:py-4 rounded-full bg-forest text-gold flex items-center gap-3 hover:bg-forest-light transition-all shadow-xl group"
            >
              <ShoppingBag size={20} className="group-hover:scale-110 transition-transform" />
              <span className="text-xs font-black uppercase tracking-widest hidden md:block">Cart</span>
              {count > 0 && (
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gold text-forest text-[11px] font-black flex items-center justify-center shadow-lg border-2 border-white">
                  {count > 9 ? "9+" : count}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-11 h-11 md:w-14 md:h-14 rounded-full bg-forest/5 flex items-center justify-center hover:bg-forest/10 transition-colors flex-shrink-0"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── MOBILE OVERLAY MENU ── */}
      <div
        className={`fixed inset-0 z-[90] bg-[#fdfdfb] flex flex-col transition-all duration-700 ease-in-out ${
          mobileOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        {/*
          pt-32 clears the navbar height so the first nav item is never hidden.
          flex-1 + overflow-y-auto lets the nav scroll if content is tall.
        */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-20 pt-32 overflow-y-auto">
          <nav className="flex flex-col">
            {siteConfig.nav.map((item) => {
              const label = isMounted ? t(item.label, item.labelTa) : item.label;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="group flex items-center justify-between border-b border-forest/5 py-6"
                >
                  {/*
                    min-w-0 + truncate on the text span prevents Tamil long words
                    from pushing the + icon off screen.
                    The icon has flex-shrink-0 so it never collapses.
                  */}
                  <span
                    className="text-forest font-semibold tracking-tighter transition-all group-hover:translate-x-4 group-hover:text-gold duration-500 min-w-0 mr-4 leading-tight"
                    style={{ fontSize: "clamp(36px, 10vw, 80px)" }}
                  >
                    {label}
                  </span>
                  <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full border border-forest/10 flex items-center justify-center group-hover:bg-forest group-hover:border-forest group-hover:text-gold transition-all duration-500">
                    <X size={28} className="rotate-45 text-forest group-hover:text-gold transition-colors" />
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Mobile Language Toggle — always visible at bottom */}
        <div className="flex-shrink-0 px-8 md:px-20 py-8 border-t border-forest/5">
          <button
            onClick={() => { toggle(); setMobileOpen(false); }}
            className="w-full py-6 rounded-full border-2 border-forest text-forest text-lg font-bold hover:bg-forest hover:text-gold transition-all uppercase tracking-widest flex items-center justify-center gap-3"
          >
            <Globe size={20} />
            {isMounted ? (lang === "en" ? "தமிழில் மாற்றவும்" : "Switch to English") : "Language"}
          </button>
        </div>
      </div>
    </>
  );
}