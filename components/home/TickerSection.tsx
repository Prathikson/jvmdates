"use client";
import { useLang } from "@/context/LangContext";

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M7 0l1.5 5.5L14 7l-5.5 1.5L7 14l-1.5-5.5L0 7l5.5-1.5z" fill="#C8A84B"/>
  </svg>
);

export default function TickerSection() {
  const { t } = useLang();

  const items = [
    t("Medjool Dates","மெட்ஜூல் பேரீச்சம்பழம்"),
    t("Ajwa Dates","அஜ்வா பேரீச்சம்பழம்"),
    t("Kashmiri Walnuts","காஷ்மீரி வால்நட்"),
    t("Iranian Pistachios","ஈரானிய பிஸ்தா"),
    t("California Almonds","கலிஃபோர்னியா பாதாம்"),
    t("Afghan Raisins","ஆஃப்கன் திராட்சை"),
    t("Turkish Figs","துர்க்கிய அத்திப்பழம்"),
    t("Hunza Apricots","ஹுன்சா ஆப்ரிக்காட்"),
  ];

  return (
    <div className="py-5 border-b border-border bg-bg overflow-hidden">
      <div className="ticker-wrap">
        <div className="ticker-track">
          {[...items, ...items, ...items].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-8 px-8 text-xs font-bold tracking-[0.1em] uppercase text-muted">
              {item}
              <StarIcon />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
