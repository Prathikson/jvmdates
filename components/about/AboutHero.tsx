"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/context/LangContext";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const HERO_IMG = "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1400&q=80";

export default function AboutHero() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-screen bg-[#948d84] p-4 md:p-6 flex flex-col overflow-hidden font-sans">
      {/* THE MAIN ROUNDED CONTAINER (BG image lives here) */}
      <div className="relative flex-1 w-full rounded-[40px] md:rounded-[60px] overflow-hidden flex flex-col justify-between shadow-2xl">
        
        {/* Parallax Background Image */}
        <div ref={imageRef} className="absolute inset-0 z-0 scale-110">
          <Image
            src={HERO_IMG}
            alt="JVM Farm Landscape"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* 1. TOP UI: Label */}
        <div className="relative z-10 w-full p-8 md:p-12 lg:p-16 flex justify-start" data-scroll-fade>
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-12 bg-gold" />
            <p className="text-[11px] font-bold tracking-[0.4em] uppercase text-gold">
              {t("Our Story", "எங்கள் கதை")}
            </p>
          </div>
        </div>

        {/* 2. MIDDLE UI: Gigantic Headline */}
        <div className="relative z-10 px-8 md:px-16 lg:px-20 mb-20 pointer-events-none" data-scroll-fade>
          <h1 
            className="text-white font-semibold leading-[0.95] tracking-tighter max-w-5xl"
            style={{ fontSize: "clamp(48px, 8.5vw, 100px)" }}
          >
            {t("Rooted in nature. Built on trust.", "இயற்கையில் வேரூன்றியது. நம்பிக்கையின் மேல் கட்டப்பட்டது.")}
          </h1>
        </div>

        {/* 3. BOTTOM UI: Quote section */}
        <div className="relative z-10 w-full p-8 md:p-16 lg:p-20 flex flex-col lg:flex-row items-end justify-between gap-8">
           <div className="max-w-2xl bg-white/10 backdrop-blur-xl p-8 md:p-12 rounded-[40px] border border-white/10">
              <blockquote className="text-white text-2xl md:text-3xl font-medium tracking-tight leading-tight mb-6">
                &quot;{t("We don't just sell dates. We sell the promise of purity.", "நாங்கள் வெறும் பேரீச்சம்பழம் விற்கவில்லை. நாங்கள் தூய்மையின் வாக்குறுதியை விற்கிறோம்.")}&quot;
              </blockquote>
              <p className="text-gold text-xs font-black tracking-widest uppercase">
                — {t("JVM Dates & Dry Fruits", "JVM பேரீச்சம்பழம்")}
              </p>
           </div>
           
           <div className="hidden lg:block pb-10">
              <div className="flex flex-col items-center opacity-60 text-white">
                 <span className="text-[10px] uppercase tracking-[0.3em] font-bold mb-1">Explore Journey</span>
                 <div className="w-px h-16 bg-white/20" />
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}