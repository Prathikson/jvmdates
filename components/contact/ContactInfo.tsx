"use client";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, ChevronRight } from "lucide-react";
import { useLang } from "@/context/LangContext";
import { siteConfig } from "@/config/site";

export default function ContactInfo() {
  const { t } = useLang();

  const info = [
    { Icon: MapPin, label: t("Address", "முகவரி"), value: t(siteConfig.address, siteConfig.addressTa ?? siteConfig.address) },
    { Icon: Mail, label: t("Email", "மின்னஞ்சல்"), value: siteConfig.email },
    { Icon: Phone, label: t("Phone", "தொலைபேசி"), value: siteConfig.phone },
    { Icon: Clock, label: t("Hours", "நேரம்"), value: t("Mon–Sat, 9am–7pm IST", "திங்கள்–சனி, 9-7 மணி") },
  ];

  return (
    <div className="flex flex-col gap-16">
      <div data-scroll-fade>
        <h2 
          className="text-forest font-semibold leading-[1.05] tracking-tighter mb-8"
          style={{ fontSize: "clamp(42px, 6vw, 80px)" }}
        >
          {t("Go ahead and try it.", "முன்வந்து முயற்சி செய்யுங்கள்.")}
        </h2>
        <p className="text-muted text-xl leading-relaxed italic opacity-80 max-w-xl">
          {t(
            "Experience the purity of nature. Reach out to our team for orders, tastings, or wholesale inquiries.",
            "இயற்கையின் தூய்மையை அனுபவியுங்கள். ஆர்டர்கள் அல்லது விசாரணைகளுக்கு எங்களை தொடர்பு கொள்ளவும்."
          )}
        </p>
      </div>

      {/* Premium Directory Links */}
      <div className="flex flex-col border-t border-forest/10" data-scroll-fade>
        {[
          { en:"I want to buy JVM online",   ta:"ஆன்லைனில் JVM வாங்க விரும்புகிறேன்",  href:"/products" },
          { en:"Find JVM in retail stores",  ta:"கடையில் JVM வாங்க விரும்புகிறேன்",   href: "#" },
          { en:"Corporate & Bulk Gifting",  ta:"மொத்த ஆர்டர்கள்",            href: "#" },
        ].map((item, i) => (
          <Link key={i} href={item.href}
            className="flex items-center justify-between py-10 border-b border-forest/10 group no-underline">
            <span className="text-2xl md:text-3xl font-semibold text-forest tracking-tight group-hover:text-gold group-hover:pl-4 transition-all duration-500">
              {t(item.en, item.ta)}
            </span>
            <div className="w-14 h-14 rounded-full border border-forest/10 flex items-center justify-center group-hover:bg-gold group-hover:text-forest group-hover:border-gold transition-all duration-500">
              <ChevronRight size={28} />
            </div>
          </Link>
        ))}
      </div>

      {/* Gigantic Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" data-scroll-fade>
        {info.map(({ Icon, label, value }) => (
          <div key={label} className="bg-white border border-forest/5 rounded-[32px] p-10 hover:shadow-xl transition-all duration-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold">
                <Icon size={24} />
              </div>
              <p className="text-[11px] font-black tracking-[0.4em] uppercase text-gold">{label}</p>
            </div>
            <p className="text-xl font-semibold text-forest leading-snug tracking-tight">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}