"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, Mail, MessageCircle, ChevronDown } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Entrance Animation
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      
      tl.from(".hero-container", {
        scale: 0.95,
        opacity: 0,
        duration: 1.5,
      })
      .from(".animate-text", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
      }, "-=1")
      .from(".contact-pill", {
        x: -50,
        opacity: 0,
        duration: 1,
      }, "-=0.8");

      // 2. Parallax Effect on the background image
      gsap.to(imageRef.current, {
        yPercent: 20, // Moves the image slower than the container
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
    <section 
      ref={sectionRef}
      className="relative w-full h-screen bg-[#948d84] p-4 md:p-6 flex flex-col overflow-hidden font-sans"
    >
      {/* THE MAIN ROUNDED CONTAINER */}
      <div 
        ref={containerRef}
        className="hero-container relative flex-1 w-full rounded-[40px] md:rounded-[60px] overflow-hidden flex flex-col justify-between shadow-2xl bg-[#2d3a30]"
      >
        {/* Parallax Background Image */}
        <div ref={imageRef} className="absolute inset-0 z-0 scale-125">
          <Image
            src="/images/hero.jpg" // Your placeholder path
            alt="JVM Dates Hero"
            fill
            className="object-cover opacity-80 brightness-90"
            priority
          />
          {/* Subtle vignette/overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        </div>

        {/* 1. TOP UI: Logo Section */}
        <div className="relative z-10 w-full p-8 md:p-12 flex justify-end">
          <div className="flex items-center gap-2 animate-text">
            <div className="w-5 h-5 bg-[#3e9e4f] rounded-sm rotate-45 shadow-lg" />
            <span className="text-2xl font-black tracking-tighter text-white uppercase italic">JVM</span>
          </div>
        </div>

        {/* 2. MIDDLE UI: Large Headline */}
        <div className="relative z-10 px-8 md:px-16 lg:px-20 pointer-events-none">
          <h1 className="animate-text max-w-[1000px] text-[clamp(50px,11vw,160px)] font-medium leading-[0.85] tracking-tighter text-[#e5e1d8]">
            JVM Dates <br /> 
            and Dry <br />
            Fruits
          </h1>
        </div>

        {/* 3. BOTTOM UI: Subtext and Scroll Down */}
        <div className="relative z-10 w-full flex flex-col items-center pb-12">
          <div className="animate-text text-center space-y-4">
             <p className="text-[#F5EDD8] font-bold text-lg md:text-xl max-w-[340px] leading-tight mx-auto drop-shadow-sm">
              Organic Premium <br /> Dates & Dry Fruit Solution
            </p>
            <div className="flex flex-col items-center opacity-60 text-white">
               <span className="text-[10px] uppercase tracking-[0.4em] font-bold mb-1">scroll down</span>
               <div className="flex flex-col -space-y-1 animate-bounce">
                 <ChevronDown size={18} />
                 <ChevronDown size={18} className="opacity-40 -mt-2" />
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM LEFT: The Floating Contact Pill */}
      <div className="contact-pill absolute bottom-4 left-4 md:bottom-6 md:left-6 z-20">
        <div className="bg-[#d9d4cc] px-10 py-6 rounded-tr-[45px] rounded-bl-[15px] flex items-center gap-8 text-[#1a2e21] shadow-xl border border-white/10">
          <a href="tel:+919876543210" className="hover:scale-110 transition-transform duration-300">
            <Phone size={22} fill="currentColor" stroke="none" />
          </a>
          <a href="https://wa.me/919876543210" className="hover:scale-110 transition-transform duration-300">
            <MessageCircle size={25} fill="currentColor" stroke="none" />
          </a>
          <a href="mailto:jvmdates@gmail.com" className="hover:scale-110 transition-transform duration-300">
            <Mail size={25} fill="currentColor" stroke="none" />
          </a>
        </div>
      </div>

      {/* Frame decoration (Optional subtle inner border) */}
      <div className="absolute inset-8 border border-white/5 rounded-[50px] pointer-events-none z-30" />
    </section>
  );
}