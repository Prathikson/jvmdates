"use client";
import { useLang } from "@/context/LangContext";

interface TimelineItem {
  year: string;
  en: string;
  ta: string;
}

const timeline: TimelineItem[] = [
  { year: "2009", en: "Founded in Coimbatore",                  ta: "கோயம்புத்தூரில் நிறுவப்பட்டது" },
  { year: "2012", en: "Direct farm partnerships in Jordan",     ta: "ஜோர்டானில் நேரடி பண்ணை கூட்டாண்மை" },
  { year: "2016", en: "Expanded to 8 source countries",          ta: "8 நாடுகளுக்கு விரிவடைந்தது" },
  { year: "2019", en: "Introduced premium gift hampers",          ta: "பிரீமியம் பரிசு கூடைகள் அறிமுகம்" },
  { year: "2020", en: "Launched nationwide online store",         ta: "ஆன்லைன் கடை தொடங்கப்பட்டது" },
  { year: "2025", en: "10,000+ happy families served",           ta: "10,000+ மகிழ்ச்சியான குடும்பங்கள்" },
];

export default function AboutTimeline() {
  const { t } = useLang();
  return (
    <section className="relative w-full py-24 md:py-32 lg:py-48 bg-[#fdfdfb] px-6 md:px-12 lg:px-20 overflow-hidden">
      
      <div className="w-full mb-20 md:mb-32" data-scroll-fade>
        <div className="flex items-center gap-4 mb-8">
          <div className="h-[1.5px] w-14 bg-gold" />
          <p className="text-[11px] font-bold tracking-[0.4em] uppercase text-gold">
            {t("Our Journey", "எங்கள் பயணம்")}
          </p>
        </div>
        <h2 
          className="text-forest font-semibold leading-[1.05] tracking-tighter max-w-4xl"
          style={{ fontSize: "clamp(42px, 7vw, 88px)" }}
        >
          {t("From Coimbatore to kitchens across India.", "கோயம்புத்தூரிலிருந்து இந்தியா முழுவதும்.")}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-forest/10" data-scroll-fade>
        {timeline.map((item, i) => (
          <div 
            key={i} 
            className="group relative p-12 md:p-16 lg:p-20 border-b border-forest/10 md:even:border-l lg:border-l lg:nth-child(3n+1):border-l-0 transition-all duration-700 hover:bg-forest hover:text-white"
          >
            <p className="font-black text-gold group-hover:text-white transition-colors tracking-tighter leading-none mb-8" 
               style={{ fontSize: "clamp(60px, 6vw, 100px)" }}>
              {item.year}
            </p>
            <p className="text-2xl md:text-3xl font-medium text-forest group-hover:text-white/90 leading-tight transition-colors">
              {t(item.en, item.ta)}
            </p>
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gold transition-all duration-700 group-hover:w-full" />
          </div>
        ))}
      </div>
    </section>
  );
}