"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/context/LangContext";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const stats = [
  { n: 50,    s: "+", en: "Countries Sourced",       ta: "நாடுகள்" },
  { n: 12,    s: "+", en: "Product Varieties",       ta: "பொருள் வகைகள்" },
  { n: 10000, s: "+", en: "Happy Customers",         ta: "மகிழ்ச்சியான வாடிக்கையாளர்கள்" },
  { n: 15,    s: "+", en: "Years of Excellence",     ta: "சிறந்த ஆண்டுகள்" },
];

export default function StatsSection() {
  const { t } = useLang();

  useEffect(() => {
    document.querySelectorAll<HTMLElement>("[data-counter]").forEach((el) => {
      const target = parseInt(el.dataset.counter || "0");
      const suffix = el.dataset.suffix || "";
      ScrollTrigger.create({
        trigger: el, start: "top 80%", once: true,
        onEnter: () => {
          gsap.to({ val: 0 }, {
            val: target, duration: 2.4, ease: "power2.out",
            onUpdate: function () {
              const v = Math.round((this.targets()[0] as { val: number }).val);
              el.textContent = (target >= 1000 ? v.toLocaleString() : v) + suffix;
            },
          });
        },
      });
    });
  }, []);

  return (
    <section className="mx-5 sm:mx-8 lg:mx-12 mb-20 rounded-4xl overflow-hidden relative">
      <div className="bg-forest px-8 md:px-16 py-16 md:py-20 relative overflow-hidden">
        {/* decoration */}
        <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-gold/10 pointer-events-none" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 relative z-10">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-beige font-bold leading-none tracking-tighter mb-2"
                style={{ fontSize: "clamp(40px,5vw,72px)" }}>
                <span data-counter={s.n} data-suffix={s.s}>0{s.s}</span>
              </p>
              <p className="text-xs font-semibold tracking-widest uppercase text-beige/50">
                {t(s.en, s.ta)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
