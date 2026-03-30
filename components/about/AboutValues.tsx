"use client";
import { useLang } from "@/context/LangContext";

interface ValueItem {
  en: string;
  ta: string;
  desc: string;
  descTa: string;
  Icon: React.FC;
}

const PurityIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
);
const FarmIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 10V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4"/><path d="M9 22h6"/><path d="M12 2v20"/><path d="M12 10H3v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V10h-9z"/>
  </svg>
);
const LeafIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 8.5C18.5 16 16.5 21 11 20z"/><path d="M11 20c-1.5-1-2.5-3.5-2.5-6.5"/>
  </svg>
);
const CommunityIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const values: ValueItem[] = [
  { en: "Purity First", ta: "தூய்மை முதலில்", desc: "Every batch lab-tested for purity. No shortcuts, just natural goodness.", descTa: "ஒவ்வொரு தொகுதியும் தூய்மைக்காக சோதிக்கப்படுகிறது.", Icon: PurityIcon },
  { en: "Direct Sourcing", ta: "நேரடி சேகரிப்பு", desc: "We work directly with heritage farms, ensuring fair trade and unmatched quality.", descTa: "நாங்கள் நேரடியாக பண்ணைகளுடன் பணிபுரிகிறோம்.", Icon: FarmIcon },
  { en: "Sustainable", ta: "நிலையான", desc: "Eco-friendly, reusable packaging and ethically responsible sourcing.", descTa: "சுற்றுச்சூழல் நட்பு பொதி மற்றும் நெறிமுறை சேகரிப்பு.", Icon: LeafIcon },
  { en: "Community", ta: "சமூகம்", desc: "Supporting farming families and local communities since our very first day.", descTa: "விவசாய குடும்பங்களை ஆதரிக்கிறோம்.", Icon: CommunityIcon },
];

export default function AboutValues() {
  const { t } = useLang();
  return (
    <section className="relative w-full py-24 md:py-32 lg:py-48 bg-forest px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold opacity-[0.03] blur-[150px] pointer-events-none" />
      
      <div className="w-full mb-20 md:mb-32" data-scroll-fade>
        <div className="flex items-center gap-4 mb-8">
          <div className="h-[1.5px] w-14 bg-gold" />
          <p className="text-[11px] font-bold tracking-[0.4em] uppercase text-gold">
            {t("Our Values", "எங்கள் மதிப்புகள்")}
          </p>
        </div>
        <h2 
          className="text-beige font-semibold leading-[1.05] tracking-tighter max-w-4xl"
          style={{ fontSize: "clamp(42px, 7vw, 88px)" }}
        >
          {t("What we stand for.", "நாங்கள் எதற்காக நிற்கிறோம்.")}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12" data-scroll-fade>
        {values.map((v, i) => (
          <div key={i} className="group bg-white/5 border border-white/10 rounded-[48px] p-10 md:p-14 flex flex-col justify-between min-h-[500px] transition-all duration-700 hover:bg-gold hover:border-gold">
            <div className="space-y-12 transition-colors duration-500 group-hover:text-forest">
               <div className="text-gold group-hover:text-forest transition-colors"><v.Icon /></div>
               <h3 className="text-4xl font-semibold tracking-tighter leading-tight text-beige group-hover:text-forest">
                 {t(v.en, v.ta)}
               </h3>
            </div>
            <p className="text-lg text-beige/50 group-hover:text-forest font-medium leading-relaxed transition-colors mt-12">
              {t(v.desc, v.descTa)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}