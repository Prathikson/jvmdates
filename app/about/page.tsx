"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutHero     from "@/components/about/AboutHero";
import AboutValues   from "@/components/about/AboutValues";
import AboutTimeline from "@/components/about/AboutTimeline";
import NewsletterSection from "@/components/home/NewsletterSection";
import Footer        from "@/components/Footer";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-scroll-fade]").forEach((el) => {
        gsap.fromTo(el,
          { y: 48, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 86%", once: true } }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-bg">
      <AboutHero />
      <AboutValues />
      <AboutTimeline />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
