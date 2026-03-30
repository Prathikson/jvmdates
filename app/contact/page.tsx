"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/context/LangContext";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import FaqSection  from "@/components/contact/FaqSection";
import Footer      from "@/components/Footer";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const { t } = useLang();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo("[data-hero-fade]",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", stagger: 0.1, delay: 0.3 }
      );
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
    <div className="bg-bg pt-28 md:pt-32">

      {/* Header */}
      <section className="px-5 sm:px-8 lg:px-12 pb-12 max-w-screen-xl mx-auto">
        <div data-hero-fade>
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold flex-shrink-0" />
            <p className="text-xs font-bold tracking-[0.14em] uppercase text-gold">
              {t("Get In Touch","தொடர்பு கொள்ளுங்கள்")}
            </p>
          </div>
          <h1 className="text-forest font-bold leading-none tracking-tighter"
            style={{ fontSize: "clamp(44px,6vw,88px)" }}>
            {t("We'd love to\nhear from you.", "நாங்கள் உங்களிடமிருந்து கேட்க விரும்புகிறோம்.")}
          </h1>
        </div>
      </section>

      {/* Form + Info */}
      <section id="form" className="px-5 sm:px-8 lg:px-12 pb-16 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div data-hero-fade>
            <ContactForm />
          </div>
          <div data-hero-fade>
            <ContactInfo />
          </div>
        </div>
      </section>

      {/* Map */}
      <section id="map" className="mx-5 sm:mx-8 lg:mx-12 mb-16 rounded-4xl overflow-hidden" data-scroll-fade>
        <div className="relative" style={{ height: "420px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.363!2d76.9558!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAxJzAwLjUiTiA3NsKwNTcnMjAuOSJF!5e0!3m2!1sen!2sin!4v1704067200000"
            width="100%" height="100%"
            style={{ border: 0, filter: "saturate(0.7) contrast(1.05)" }}
            allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute top-6 left-6 bg-forest text-beige rounded-2xl px-5 py-4 shadow-lg">
            <p className="text-sm font-bold mb-0.5">JVM Dates & Dry Fruits</p>
            <p className="text-xs text-beige/65">
              {t("24 Periya Thambi Nagar, Selvapuram, Coimbatore","24 பெரிய தம்பி நகர், செல்வபுரம், கோயம்புத்தூர்")}
            </p>
          </div>
        </div>
      </section>

      <FaqSection />
      <Footer />
    </div>
  );
}
