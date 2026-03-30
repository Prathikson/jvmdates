"use client";
import { Star, Quote } from "lucide-react";
import { useLang } from "@/context/LangContext";

const testimonials = [
  { quote: "The Medjool dates are extraordinary. Rich, caramel-sweet and so fresh — better than anything I've found in stores.", quoteTa: "மெட்ஜூல் பேரீச்சம்பழம் மிகவும் அசாதாரணமானது. கடைகளில் கிடைப்பதை விட மிகவும் சிறந்தது.", name: "Priya Ramesh", location: "Chennai", rating: 5 },
  { quote: "Ordered the gift hamper for Diwali and everyone was so impressed. Premium quality, beautiful packaging. Will order again.", quoteTa: "தீபாவளிக்கு பரிசு கூடை ஆர்டர் செய்தேன், அனைவரும் மிகவும் ஈர்க்கப்பட்டனர். மீண்டும் ஆர்டர் செய்வேன்.", name: "Arun Kumar", location: "Coimbatore", rating: 5 },
  { quote: "As a nutritionist I'm very particular about quality. JVM's almonds and pistachios are consistently fresh and additive-free.", quoteTa: "ஒரு ஊட்டச்சத்து நிபுணராக, JVM கொட்டைகள் எப்போதும் புதியதாகவும் சேர்க்கை இல்லாமலும் உள்ளன.", name: "Dr. Meena S.", location: "Bangalore", rating: 5 },
];

export default function TestimonialsSection() {
  const { t } = useLang();

  return (
    <section className="relative w-full py-24 md:py-32 lg:py-48 bg-[#fdfdfb] px-6 md:px-12 lg:px-20 overflow-hidden border-t border-forest/5">
      
      {/* Header - Consistent Gigantic Style */}
      <div className="w-full mb-20 md:mb-32" data-scroll-fade>
        <div className="flex items-center gap-4 mb-8">
          <div className="h-[1.5px] w-14 bg-gold" />
          <p className="text-[11px] font-bold tracking-[0.4em] uppercase text-gold">
            {t("Testimonials", "சான்றுகள்")}
          </p>
        </div>
        <h2 
          className="text-forest font-semibold leading-[1.05] tracking-tighter max-w-4xl"
          style={{ fontSize: "clamp(42px, 7vw, 88px)" }}
        >
          {t("What our customers say.", "வாடிக்கையாளர்கள் என்ன சொல்கிறார்கள்.")}
        </h2>
      </div>

      {/* Gigantic Grid Reveal */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14" data-scroll-fade>
        {testimonials.map((item, i) => (
          <div 
            key={i} 
            className="group bg-white border border-forest/5 rounded-[48px] p-12 md:p-16 flex flex-col gap-10 transition-all duration-700 hover:shadow-2xl hover:shadow-gold/5" 
          >
            <div className="w-16 h-16 bg-[#f8f7f2] rounded-2xl flex items-center justify-center text-gold transition-colors duration-500 group-hover:bg-gold group-hover:text-white">
                <Quote size={32} fill="currentColor" />
            </div>

            <p className="text-forest font-medium leading-[1.5] italic flex-1" style={{ fontSize: "clamp(20px, 1.8vw, 26px)" }}>
              &quot;{t(item.quote, item.quoteTa)}&quot;
            </p>

            <div className="flex items-center gap-1.5">
              {[...Array(item.rating)].map((_, s) => (
                <Star key={s} size={20} className="text-gold fill-gold" />
              ))}
            </div>

            <div className="flex items-center gap-6 border-t border-forest/10 pt-10">
              <div className="w-16 h-16 rounded-full bg-forest text-beige flex items-center justify-center text-2xl font-bold flex-shrink-0">
                {item.name[0]}
              </div>
              <div className="space-y-1">
                <p className="text-xl md:text-2xl font-bold text-forest tracking-tight">{item.name}</p>
                <p className="text-[11px] font-black text-gold uppercase tracking-[0.25em] opacity-80">{item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}