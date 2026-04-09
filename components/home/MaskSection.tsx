"use client";
import { useLang } from "@/context/LangContext";

const NUTS_IMG = "/images/datesbyjvm.webp";

export default function MaskSection() {
  const { t } = useLang();

  return (
    <section id="mask-section" className="mx-5 sm:mx-8 lg:mx-12 mb-20 rounded-4xl overflow-hidden">
      <div className="bg-forest relative min-h-[420px] md:min-h-[480px] px-8 md:px-20 py-20 md:py-28 flex items-center">
        {/* SVG circle-reveal image mask */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="text-mask">
              <rect width="100%" height="100%" fill="black" />
              <circle id="mask-circle" cx="75%" cy="50%" r="0" fill="white" />
            </mask>
          </defs>
          <image href={NUTS_IMG} width="100%" height="100%" preserveAspectRatio="xMidYMid slice"
            mask="url(#text-mask)" style={{ opacity: 0.85 }} />
        </svg>

        <div className="relative z-10 max-w-xl" data-scroll-fade>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-gold flex-shrink-0" />
            <p className="text-xs font-bold tracking-[0.14em] uppercase text-gold">
              {t("Trusted","நம்பகமான")}
            </p>
          </div>
          <h2 className="text-beige font-bold leading-none tracking-tighter mb-6"
            style={{ fontSize: "clamp(34px,5.5vw,80px)" }}>
            {t(
              "Trusted by the best in every home.",
              "ஒவ்வொரு வீட்டிலும் சிறந்தவர்களால் நம்பப்படுகிறது."
            )}
          </h2>
          <p className="text-beige/55 leading-[1.75]" style={{ fontSize: "clamp(15px,1.4vw,17px)" }}>
            {t(
              "From households across Tamil Nadu to premium hospitality — JVM is the choice of those who refuse to compromise on quality.",
              "தமிழ்நாடு முழுவதும் உள்ள வீடுகளிலிருந்து பிரீமியம் விருந்தோம்பல் வரை — JVM சிறந்தவர்களின் தேர்வு."
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
