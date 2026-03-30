"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLang } from "@/context/LangContext";
import ParallaxImage from "@/components/ParallaxImage";

const FARM_IMG = "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80";
const ORGANIC_IMG = "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80";

export default function IntroSection() {
  const { t } = useLang();

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white px-6 md:px-12 lg:px-20 py-24 md:py-32">
      {/* Container - Removed max-width to use full available space */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

        {/* Text Content - Spans 7 columns on large screens */}
        <div data-scroll-fade className="lg:col-span-7 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-gold flex-shrink-0" />
            <p className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-gold">
              {t("Who We Are", "நாங்கள் யார்")}
            </p>
          </div>

          <h2 
            className="text-forest font-semibold leading-[0.9] tracking-tighter mb-10"
            style={{ fontSize: "clamp(28px, 9vw, 80px)" }} // Gigantic font size
          >
            {t(
              "From the world's finest farms to your table.",
              "உலகின் சிறந்த பண்ணைகளில் இருந்து உங்கள் மேசைக்கு."
            )}
          </h2>

          <div className="max-w-2xl">
            <p className="text-muted/80 font-light leading-[1.6] mb-6" style={{ fontSize: "clamp(18px, 1.5vw, 22px)" }}>
              {t(
                "Founded in Coimbatore in 2009, JVM was built on one belief — everyone deserves access to the finest quality dates and dry fruits. We source directly from heritage farms across Jordan, Saudi Arabia, Iran, and Kashmir.",
                "2009 இல் கோயம்புத்தூரில் நிறுவப்பட்ட JVM ஒரு நம்பிக்கையுடன் கட்டப்பட்டது — அனைவருக்கும் சிறந்த தர பேரீச்சம்பழம் கிடைக்க வேண்டும்."
              )}
            </p>
            <p className="text-forest/60 font-medium tracking-wide mb-12" style={{ fontSize: "clamp(16px, 1.2vw, 18px)" }}>
              {t("No middlemen. No additives. Just the real thing.", "இடைத்தரகர்கள் இல்லை. சேர்க்கைகள் இல்லை. உண்மையானது மட்டுமே.")}
            </p>
          </div>

          {/* Large Stats Section */}
          <div className="flex flex-wrap gap-x-16 gap-y-8 mb-16">
            {[
              { n: "15+", l: t("Years", "ஆண்டுகள்") },
              { n: "50+", l: t("Origins", "மூலங்கள்") },
              { n: "10k+", l: t("Customers", "வாடிக்கையாளர்கள்") },
            ].map((s) => (
              <div key={s.l} className="group">
                <p className="text-5xl md:text-7xl font-light text-forest tracking-tighter leading-none transition-transform group-hover:scale-110 duration-500">
                  {s.n}
                </p>
                <p className="text-[10px] uppercase tracking-widest text-muted font-bold mt-4 opacity-60">{s.l}</p>
              </div>
            ))}
          </div>

          <Link href="/about"
            className="inline-flex items-center gap-4 text-forest font-medium text-lg hover:text-gold transition-all group border-b border-forest/10 pb-2 w-fit">
            {t("Read our story", "எங்கள் கதையை படிக்கவும்")}
            <div className="bg-forest text-white p-2 rounded-full group-hover:bg-gold transition-colors">
                <ArrowUpRight size={20} />
            </div>
          </Link>
        </div>

        {/* Images Grid - Spans 5 columns on large screens */}
        <div data-scroll-fade className="lg:col-span-5 h-full flex flex-col justify-center gap-8">
          <div className="relative w-full aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
            <ParallaxImage src={FARM_IMG} alt="Farm" className="object-cover" />
          </div>
          
          <div className="grid grid-cols-2 gap-6 h-[250px] md:h-[350px]">
            <div className="relative rounded-[30px] overflow-hidden">
                <ParallaxImage src={ORGANIC_IMG} alt="Organic"  className="object-cover" />
            </div>
            <div className="rounded-[30px] bg-forest p-8 text-beige flex flex-col justify-between">
              <div className="w-10 h-10 border border-beige/20 rounded-full flex items-center justify-center text-[10px] font-bold">JVM</div>
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-60 mb-2">
                  {t("Certified", "சான்றளிக்கப்பட்டது")}
                </p>
                <p className="text-3xl md:text-4xl font-light leading-tight">
                  {t("100%\nNatural", "100%\nஇயற்கை")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}