"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HeroSection        from "@/components/home/HeroSection";
import TickerSection      from "@/components/home/TickerSection";
import IntroSection       from "@/components/home/IntroSection";
import StatsSection       from "@/components/home/StatsSection";
import FeaturedProducts   from "@/components/home/FeaturedProducts";
import MaskSection        from "@/components/home/MaskSection";
import ProcessSection     from "@/components/home/ProcessSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSplitSection    from "@/components/home/CtaSplitSection";
import NewsletterSection  from "@/components/home/NewsletterSection";
import Footer             from "@/components/Footer";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Universal scroll fade-up
      gsap.utils.toArray<HTMLElement>("[data-scroll-fade]").forEach((el) => {
        gsap.fromTo(el,
          { y: 52, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 87%", once: true } }
        );
      });

      // SVG mask circle expand
      const maskCircle = document.querySelector("#mask-circle");
      if (maskCircle) {
        gsap.fromTo(maskCircle,
          { attr: { r: 0 } },
          { attr: { r: 900 }, duration: 2, ease: "power3.out",
            scrollTrigger: { trigger: "#mask-section", start: "top 60%", once: true } }
        );
      }

      // Product card 3D tilt on hover
      document.querySelectorAll<HTMLElement>(".product-card").forEach((card) => {
        card.addEventListener("mousemove", (e) => {
          const rect = card.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          gsap.to(card, { rotateY: x * 5, rotateX: -y * 5, duration: 0.4, ease: "power2.out", transformPerspective: 900 });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, { rotateY: 0, rotateX: 0, duration: 0.5, ease: "power3.out" });
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-bg">
      <HeroSection />
      <TickerSection />
      <IntroSection />
      <StatsSection />
      <FeaturedProducts />
      <MaskSection />
      <ProcessSection />
      <TestimonialsSection />
      <CtaSplitSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
