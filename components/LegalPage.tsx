"use client";
import { useLang } from "@/context/LangContext";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";

type Section = { heading: string; headingTa: string; body: string; bodyTa: string; };

export default function LegalPage({ title, titleTa, lastUpdated, sections }: {
  title: string; titleTa: string; lastUpdated: string; sections: Section[];
}) {
  const { t } = useLang();
  return (
    <div className="bg-bg pt-28 md:pt-32">
      <section className="px-5 sm:px-8 lg:px-12 pb-24 max-w-3xl mx-auto">
        <p className="text-xs font-bold tracking-widest uppercase text-gold mb-4">{siteConfig.name}</p>
        <h1 className="text-forest font-bold leading-none tracking-tighter mb-4"
          style={{ fontSize: "clamp(36px,5vw,72px)" }}>
          {t(title, titleTa)}
        </h1>
        <p className="text-xs text-muted mb-16">
          {t("Last updated:", "கடைசியாக புதுப்பிக்கப்பட்டது:")} {lastUpdated}
        </p>
        <div className="flex flex-col gap-10">
          {sections.map((s, i) => (
            <div key={i}>
              <h2 className="text-lg font-bold text-forest tracking-tight mb-3">{t(s.heading, s.headingTa)}</h2>
              <p className="text-sm text-muted leading-[1.8]">{t(s.body, s.bodyTa)}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
