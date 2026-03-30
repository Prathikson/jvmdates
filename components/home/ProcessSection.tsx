"use client";
import { useLang } from "@/context/LangContext";

// Icons
const GlobeIcon = () => (
  <svg width="42" height="42" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="14" cy="14" r="11"/><path d="M3 14h22M14 3C11 7 9.5 10.5 9.5 14S11 21 14 25M14 3c3 4 4.5 7.5 4.5 11S17 21 14 25"/>
  </svg>
);
const TestIcon = () => (
  <svg width="42" height="42" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 4v10l-4 8h16l-4-8V4"/><path d="M9 4h10"/><circle cx="14" cy="17" r="1.5" fill="currentColor" stroke="none"/>
  </svg>
);
const PackIcon = () => (
  <svg width="42" height="42" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="10" width="22" height="15" rx="2"/><path d="M3 10l4-6h14l4 6"/><path d="M11 10v6h6v-6"/>
  </svg>
);
const DeliverIcon = () => (
  <svg width="42" height="42" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="10" width="16" height="12" rx="2"/><path d="M18 14h4l4 4v4h-8"/><circle cx="7" cy="22" r="2"/><circle cx="21" cy="22" r="2"/><path d="M2 14h16"/>
  </svg>
);

const steps = [
  { num: "01", en: "Source",  ta: "மூலம்",   desc: "Direct from heritage farms in Jordan, Saudi Arabia, Iran & Kashmir.", descTa: "ஜோர்டான், சவுதி அரேபியா, ஈரான் மற்றும் காஷ்மீர் பண்ணைகளிலிருந்து நேரடியாக.", Icon: GlobeIcon },
  { num: "02", en: "Test",    ta: "சோதனை",  desc: "Every batch tested for purity, moisture & freshness before packing.", descTa: "ஒவ்வொரு தொகுதியும் தூய்மை மற்றும் புத்துணர்ச்சிக்காக சோதிக்கப்படுகிறது.", Icon: TestIcon },
  { num: "03", en: "Pack",    ta: "பொதி",   desc: "Sealed in eco-friendly, resealable packaging within 24 hours.", descTa: "24 மணி நேரத்திற்குள் சுற்றுச்சூழல் நட்பு பொதியில் சீல் செய்யப்படுகிறது.", Icon: PackIcon },
  { num: "04", en: "Deliver", ta: "வழங்கு", desc: "Express delivery across India in 2–5 business days.", descTa: "இந்தியா முழுவதும் 2–5 வேலை நாட்களில் விரைவு விநியோகம்.", Icon: DeliverIcon },
];

export default function ProcessSection() {
  const { t } = useLang();

  return (
    <section className="relative w-full py-24 md:py-32 lg:py-48 bg-[#fbfbf9] overflow-hidden">
      
      {/* 1. Header - Semibold & Gigantic */}
      <div className="w-full px-6 md:px-12 lg:px-20 mb-20 md:mb-32" data-scroll-fade>
        <div className="flex items-center gap-4 mb-8">
          <div className="h-[1.5px] w-14 bg-gold" />
          <p className="text-[11px] font-bold tracking-[0.4em] uppercase text-gold">
            {t("Our Process", "எங்கள் செயல்முறை")}
          </p>
        </div>
        
        <h2 
          className="text-forest font-semibold leading-[1.05] tracking-tighter"
          style={{ fontSize: "clamp(42px, 7vw, 88px)" }}
        >
          {t("From farm to your doorstep.", "பண்ணையிலிருந்து உங்கள் வீட்டு வாசல் வரை.")}
        </h2>
      </div>

      {/* 2. Full Width Grid - No stagger on items to fix the delay */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-forest/10" data-scroll-fade>
        {steps.map((step, i) => (
          <div 
            key={i}
            className="group relative p-12 md:p-16 lg:p-20 flex flex-col justify-between min-h-[480px] border-b lg:border-b-0 lg:border-r border-forest/10 last:border-r-0 transition-colors duration-500 hover:bg-forest hover:text-white"
          >
            {/* Background Number */}
            <span className="absolute top-12 right-12 text-[100px] lg:text-[140px] font-black leading-none opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
              {step.num}
            </span>

            <div className="relative z-10 flex flex-col gap-14">
              <div className="text-gold transition-colors duration-500 group-hover:text-white">
                <step.Icon />
              </div>
              
              <div className="space-y-4">
                <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-gold group-hover:text-gold-light">
                    {t("Step", "படி")} {step.num}
                </p>
                <h3 className="text-4xl md:text-5xl font-semibold tracking-tighter leading-tight">
                    {t(step.en, step.ta)}
                </h3>
              </div>
            </div>

            <p className="relative z-10 text-lg md:text-xl font-light leading-relaxed text-muted group-hover:text-white/80 mt-14 max-w-xs transition-colors duration-500">
              {t(step.desc, step.descTa)}
            </p>

            {/* Bottom Progress Indicator */}
            <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gold transition-all duration-700 group-hover:w-full" />
          </div>
        ))}
      </div>

      <div className="mt-24 px-6 opacity-30 text-center">
        <p className="text-[10px] font-bold tracking-[0.6em] uppercase text-forest">
            {t("Certified Quality Control", "சான்றளிக்கப்பட்ட தரக் கட்டுப்பாடு")}
        </p>
      </div>
    </section>
  );
}