"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useLang } from "@/context/LangContext";

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    if (!sessionStorage.getItem("cookies-accepted")) {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => { sessionStorage.setItem("cookies-accepted","true"); setShow(false); };
  const decline = () => { sessionStorage.setItem("cookies-accepted","declined"); setShow(false); };

  return (
    <div className={`cookie-banner ${show ? "show" : ""}`}>
      <div className="flex items-start justify-between gap-3 mb-4">
        <p className="text-sm text-beige/80 leading-relaxed">
          {t(
            "We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.",
            "உங்கள் அனுபவத்தை மேம்படுத்த நாங்கள் குக்கீகளைப் பயன்படுத்துகிறோம்."
          )}
        </p>
        <button onClick={decline} className="flex-shrink-0 text-beige/40 hover:text-beige/70 transition-colors mt-0.5">
          <X size={16} />
        </button>
      </div>
      <div className="flex gap-3">
        <button onClick={accept}
          className="px-5 py-2.5 rounded-full bg-gold text-forest text-xs font-bold hover:bg-gold-light transition-colors">
          {t("Accept All","அனைத்தையும் ஏற்கவும்")}
        </button>
        <button onClick={decline}
          className="px-5 py-2.5 rounded-full border border-beige/20 text-beige/60 text-xs font-medium hover:border-beige/40 transition-colors">
          {t("Decline","மறுக்கவும்")}
        </button>
      </div>
    </div>
  );
}
