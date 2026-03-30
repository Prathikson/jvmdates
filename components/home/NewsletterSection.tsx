"use client";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { useLang } from "@/context/LangContext";

export default function NewsletterSection() {
  const { t } = useLang();
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="relative w-full px-6 md:px-12 lg:px-20 pb-24 md:pb-32 lg:pb-48 overflow-hidden">
      <div className="w-full bg-forest rounded-[50px] px-8 md:px-20 py-24 md:py-32 text-center flex flex-col items-center relative overflow-hidden shadow-2xl">
        {/* Background Visuals */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" 
          style={{ background: "radial-gradient(circle at 50% 50%, #c8a84b 0%, transparent 70%)" }} />
        <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl w-full" data-scroll-fade>
          <div className="flex flex-col items-center gap-4 mb-8">
            <p className="text-[11px] font-bold tracking-[0.5em] uppercase text-gold">
              {t("Stay Updated","புதுப்பிக்கப்பட்டிருங்கள்")}
            </p>
          </div>
          
          <h2 
            className="text-beige font-semibold leading-[1.05] tracking-tighter mb-10"
            style={{ fontSize: "clamp(42px, 7vw, 88px)" }}
          >
            {t("Seasonal arrivals. First to know.", "பருவகால வரவு. முதலில் அறிய.")}
          </h2>
          
          <p className="text-beige/60 text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed italic">
            {t(
              "Get notified when new batches arrive, exclusive offers, and nutrition tips directly from our farm partners.",
              "புதிய தொகுதிகள் வரும்போது அறிவிப்பு மற்றும் சிறப்பு சலுகைகள் பெறுங்கள்."
            )}
          </p>

          {done ? (
            <div className="flex items-center justify-center gap-4 bg-gold text-forest rounded-full px-12 py-6 text-xl font-bold animate-in">
              <Check size={28} />
              {t("You're subscribed!","சந்தா செய்யப்பட்டீர்கள்!")}
            </div>
          ) : (
            <form 
              onSubmit={(e) => { e.preventDefault(); if(email.includes("@")) setDone(true); }}
              className="flex flex-col md:flex-row items-center gap-4 max-w-2xl mx-auto"
            >
              <input
                type="email"
                required
                placeholder={t("Your email address","உங்கள் மின்னஞ்சல் முகவரி")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border-2 border-white/10 rounded-full px-10 py-6 text-xl text-beige placeholder:text-beige/30 focus:outline-none focus:border-gold transition-all"
              />
              <button
                type="submit"
                className="w-full md:w-auto flex-shrink-0 flex items-center justify-center gap-3 px-12 py-6 rounded-full bg-gold text-forest text-lg font-black hover:scale-105 transition-all shadow-xl"
              >
                {t("Subscribe","சந்தா")} <ArrowRight size={20} />
              </button>
            </form>
          )}

          <p className="text-beige/20 text-xs mt-10 font-bold tracking-widest uppercase">
            {t("No spam. Unsubscribe at any time.","ஸ்பாம் இல்லை. எப்போது வேண்டுமானாலும் நீக்கலாம்.")}
          </p>
        </div>
      </div>
    </section>
  );
}