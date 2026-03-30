"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useLang } from "@/context/LangContext";

const faqs = [
  { q:"What is the shelf life of your products?", qTa:"உங்கள் பொருட்களின் ஆயுட்காலம் என்ன?", a:"Our dates typically last 12–18 months when stored in a cool, dry place. Nuts and dry fruits last 6–12 months.", aTa:"எங்கள் பேரீச்சம்பழம் குளிர்ந்த, வறண்ட இடத்தில் 12–18 மாதங்கள் நீடிக்கும்." },
  { q:"Do you offer bulk or wholesale orders?", qTa:"மொத்த விற்பனை ஆர்டர்கள் வழங்குகிறீர்களா?", a:"Yes! We offer special pricing for bulk orders above 5kg. Contact our sales team and we'll get back to you within 24 hours.", aTa:"ஆம்! 5 கிலோவுக்கு மேல் மொத்த ஆர்டர்களுக்கு சிறப்பு விலை வழங்குகிறோம்." },
  { q:"Are your products organically certified?", qTa:"உங்கள் பொருட்கள் இயற்கை சான்றளிக்கப்பட்டவையா?", a:"Selected products carry organic certification. All products are free from artificial additives regardless of certification.", aTa:"சில பொருட்கள் இயற்கை சான்றிதழ் பெற்றவை." },
  { q:"How long does delivery take?", qTa:"விநியோகம் எவ்வளவு நேரம் ஆகும்?", a:"We deliver within 2–5 business days across India. Coimbatore orders typically arrive within 24 hours.", aTa:"இந்தியா முழுவதும் 2–5 வேலை நாட்களுக்குள்." },
];

export default function FaqSection() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full py-24 md:py-32 lg:py-48 bg-[#fbfbf9] px-6 md:px-12 lg:px-20 overflow-hidden">
      
      {/* FAQ Header - Standard Gigantic Style */}
      <div className="w-full mb-20 md:mb-32" data-scroll-fade>
        <div className="flex items-center gap-4 mb-8">
          <div className="h-[1.5px] w-14 bg-gold" />
          <p className="text-[11px] font-bold tracking-[0.4em] uppercase text-gold">
            {t("FAQ", "அடிக்கடி கேட்கப்படும் கேள்விகள்")}
          </p>
        </div>
        
        <h2 
          className="text-forest font-semibold leading-[0.95] tracking-tighter max-w-4xl"
          style={{ fontSize: "clamp(48px, 8vw, 88px)" }}
        >
          {t("Common questions.", "பொதுவான கேள்விகள்.")}
        </h2>
      </div>

      {/* Accordion - Massive Spacing */}
      <div className="w-full flex flex-col border-t border-forest/10" data-scroll-fade>
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-forest/10">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between py-12 text-left gap-10 group"
            >
              <span className="text-2xl md:text-4xl font-semibold text-forest tracking-tighter leading-tight group-hover:text-gold transition-colors duration-500">
                {t(faq.q, faq.qTa)}
              </span>
              <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${open === i ? 'bg-forest text-gold rotate-180' : 'bg-forest/5 text-forest group-hover:bg-gold'}`}>
                {open === i ? <Minus size={28} /> : <Plus size={28} />}
              </div>
            </button>
            
            <div className={`overflow-hidden transition-all duration-700 ease-in-out ${open === i ? "max-h-[500px] opacity-100 mb-12" : "max-h-0 opacity-0"}`}>
              <p className="text-xl md:text-2xl text-muted leading-relaxed italic max-w-4xl font-medium border-l-4 border-gold/20 pl-8">
                {t(faq.a, faq.aTa)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}