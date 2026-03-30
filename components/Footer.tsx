"use client";
import React from "react";
import Link from "next/link";
import { Globe, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useLang } from "@/context/LangContext";

// 1. Custom Minimalist Brand Icons
const InstagramIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const XIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const LuxuryBagIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>
);

// 2. Strict Typing
interface SocialIconProps {
  Icon: React.FC;
  href: string;
}

const SocialIcon = ({ Icon, href }: SocialIconProps) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-14 h-14 rounded-full border border-beige/10 flex items-center justify-center hover:bg-gold hover:text-forest hover:border-gold transition-all duration-500 group"
  >
    <Icon />
  </a>
);

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  const socials: SocialIconProps[] = [
    { href: siteConfig.social.instagram, Icon: InstagramIcon },
    { href: siteConfig.social.facebook,  Icon: FacebookIcon },
    { href: siteConfig.social.twitter,   Icon: XIcon },
  ];

  const productLinks = [
    { en: "Medjool Dates",  ta: "மெட்ஜூல் பேரீச்சம்பழம்", href: "/products" },
    { en: "Ajwa Dates",     ta: "அஜ்வா பேரீச்சம்பழம்",    href: "/products" },
    { en: "Premium Nuts",   ta: "பிரீமியம் கொட்டைகள்",     href: "/products" },
    { en: "Gift Hampers",   ta: "பரிசு கூடைகள்",            href: "/products" },
  ];

  const companyLinks = [
    { en: "Our Story",       ta: "எங்கள் கதை",            href: "/about" },
    { en: "Find Us",         ta: "எங்களை கண்டறியவும்",    href: "/contact" },
    { en: "Sustainability",  ta: "நிலைத்தன்மை",          href: "/about" },
    { en: "Bulk Orders",     ta: "மொத்த ஆர்டர்கள்",       href: "/contact" },
  ];

  return (
    <footer className="bg-forest text-beige overflow-hidden">
      
      {/* 1. GIGANTIC CTA STRIP */}
      <div className="px-6 md:px-12 lg:px-20 py-24 md:py-40 border-b border-beige/5">
        <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-16">
          <div className="max-w-5xl">
            <p className="text-[11px] font-bold text-gold uppercase tracking-[0.5em] mb-8">
              {t("Ready to experience the finest?", "சிறந்ததை அனுபவிக்க தயாரா?")}
            </p>
            <h2
              className="font-semibold leading-[0.9] tracking-tighter"
              style={{ fontSize: "clamp(54px, 10vw, 120px)" }}
            >
              {t("Pure nature. Delivered.", "தூய இயற்கை. வழங்கப்படுகிறது.")}
            </h2>
          </div>
          
          {/* GIGANTIC SHOP BUTTON STAMP */}
          <Link
            href="/products"
            className="group relative flex-shrink-0 flex items-center justify-center w-56 h-56 md:w-72 md:h-72 rounded-full bg-gold text-forest transition-all duration-700 hover:scale-105 shadow-[0_30px_80px_-15px_rgba(200,168,75,0.4)]"
          >
            {/* Rotating Outer Text (Optional aesthetic) */}
            <div className="absolute inset-4 border-2 border-dashed border-forest/10 rounded-full animate-[spin_20s_linear_infinite] group-hover:border-forest/30 transition-colors" />
            
            <div className="flex flex-col items-center gap-4 relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
              <LuxuryBagIcon />
              <div className="flex flex-col items-center">
                <span className="text-xl md:text-2xl font-black uppercase tracking-tighter leading-none">{t("Shop", "வாங்கு")}</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] mt-2 opacity-60">{t("Collection", "சேகரிப்பு")}</span>
              </div>
              <ArrowRight size={24} className="mt-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
            </div>
          </Link>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION GRID */}
      <div className="px-6 md:px-12 lg:px-20 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Brand Identity */}
          <div className="lg:col-span-4 space-y-12">
            <div className="flex items-center gap-4">
               <div className="w-6 h-6 bg-gold rounded-sm rotate-45" />
               <span className="text-4xl font-black tracking-tighter uppercase italic">{siteConfig.shortName}</span>
            </div>
            <p className="text-xl md:text-2xl text-beige/40 leading-relaxed max-w-sm font-medium italic">
              {t(
                "Sourcing the world's most exquisite dates and dry fruits directly from heritage farms since 2009.",
                "2009 முதல் உலகின் நேர்த்தியான பேரீச்சம்பழங்களை நேரடியாக பண்ணைகளிலிருந்து சேகரிக்கிறோம்."
              )}
            </p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <SocialIcon key={social.href} Icon={social.Icon} href={social.href} />
              ))}
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-1" />

          {/* Links Columns */}
          <div className="lg:col-span-2 space-y-8">
            <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-gold opacity-50">
              {t("Collections", "சேகரிப்புகள்")}
            </p>
            <nav className="flex flex-col gap-6">
              {productLinks.map((item) => (
                <Link key={item.en} href={item.href} className="text-lg md:text-xl font-semibold text-beige/60 hover:text-gold transition-colors">
                  {t(item.en, item.ta)}
                </Link>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-gold opacity-50">
              {t("Company", "நிறுவனம்")}
            </p>
            <nav className="flex flex-col gap-6">
              {companyLinks.map((item) => (
                <Link key={item.en} href={item.href} className="text-lg md:text-xl font-semibold text-beige/60 hover:text-gold transition-colors">
                  {t(item.en, item.ta)}
                </Link>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-3 space-y-8">
            <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-gold opacity-50">
              {t("Find Us", "தொடர்புக்கு")}
            </p>
            <div className="space-y-6 text-lg md:text-xl font-semibold text-beige/60">
              <p className="hover:text-white transition-colors cursor-pointer">{siteConfig.email}</p>
              <p className="hover:text-white transition-colors cursor-pointer">{siteConfig.phone}</p>
              <p className="leading-relaxed opacity-40 text-base font-medium">
                {t(siteConfig.address, siteConfig.addressTa ?? siteConfig.address)}
              </p>
            </div>
          </div>
        </div>

        {/* 3. LEGAL BOTTOM BAR */}
        <div className="mt-24 md:mt-40 pt-12 border-t border-beige/5 flex flex-col lg:flex-row justify-between items-center gap-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] opacity-30 text-center lg:text-left">
            © {year} {siteConfig.name} · {t("Coimbatore, Tamil Nadu", "கோயம்புத்தூர், தமிழ்நாடு")}
          </p>

          <div className="flex items-center gap-3 opacity-20 hover:opacity-100 transition-opacity cursor-pointer">
             <Globe size={16} />
             <span className="text-[11px] font-bold uppercase tracking-widest">Global Sourcing Partner</span>
          </div>
        </div>
      </div>

      {/* Decorative Branding Watermark */}
      <div className="w-full text-center pb-12 pointer-events-none select-none overflow-hidden">
         <span className="text-[16vw] font-black text-white/5 tracking-tighter leading-none block transform translate-y-1/4">
            JVM DATES
         </span>
      </div>
    </footer>
  );
}