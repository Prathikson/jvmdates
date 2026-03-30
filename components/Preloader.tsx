"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const waveRef = useRef<SVGPathElement>(null);
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("preloader-done")) { setDone(true); return; }
    
    const container = containerRef.current;
    if (!container) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setDone(true);
        sessionStorage.setItem("preloader-done", "1");
      }
    });

    // 1. WAVE ANIMATION (Horizontal oscillation)
    // We animate the wave moving left to right to create the "liquid" feel
    gsap.to(waveRef.current, {
      x: -400,
      duration: 2,
      repeat: -1,
      ease: "none"
    });

    // 2. COUNTER LOGIC
    tl.to({ val: 0 }, {
      val: 100,
      duration: 4, // Viscous, slow honey feel
      ease: "power2.inOut",
      onUpdate: function() {
        setCount(Math.round((this.targets()[0] as { val: number }).val));
      },
    }, 0);

    // 3. FILLING ANIMATION (Rising Wave)
    // Moving the wave from y=150 (empty) to y=-20 (full)
    tl.to(".wave-container", {
      y: -140, 
      duration: 4,
      ease: "power1.inOut"
    }, 0);

    // 4. TEXT REVEAL
    tl.from(".preloader-subtext span", {
      y: 20,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out"
    }, 0.5);

    // 5. EXIT ANIMATION
    tl.to(container, {
      yPercent: -100,
      duration: 1.2,
      ease: "expo.inOut",
    }, "+=0.3");

    return () => { tl.kill(); };
  }, []);

  if (done) return null;

  return (
    <div ref={containerRef} className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#001a18] overflow-hidden">
      
      <div className="relative flex flex-col items-center">
        {/* SVG Container for JVM */}
        <svg 
          viewBox="0 0 500 150" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-[300px] md:w-[500px] h-auto overflow-visible"
        >
          <defs>
            {/* THE MASK: Extra Bold Typography */}
            <mask id="jvm-text-mask">
              <g fill="white">
                {/* J - Extra Bold */}
                <path d="M70 20h35v80c0 20-15 35-40 35S25 120 25 100h30c0 8 5 12 12 12s12-4 12-12V20z" />
                {/* V - Extra Bold */}
                <path d="M150 20h35l25 90 25-90h35l-45 115h-30L150 20z" />
                {/* M - Extra Bold */}
                <path d="M290 135V20h35l30 75 30-75h35v115h-28V55l-32 80h-15l-32-80v80h-23z" />
              </g>
            </mask>

            {/* Honey Gradient */}
            <linearGradient id="honey-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFD700" />
              <stop offset="50%" stopColor="#C8A84B" />
              <stop offset="100%" stopColor="#8B4513" />
            </linearGradient>
          </defs>

          {/* Background Static Outline */}
          <g fill="none" stroke="white" strokeWidth="0.5" opacity="0.1">
             <path d="M70 20h35v80c0 20-15 35-40 35S25 120 25 100h30c0 8 5 12 12 12s12-4 12-12V20z" />
             <path d="M150 20h35l25 90 25-90h35l-45 115h-30L150 20z" />
             <path d="M290 135V20h35l30 75 30-75h35v115h-28V55l-32 80h-15l-32-80v80h-23z" />
          </g>

          {/* THE WAVE FILLER */}
          <g mask="url(#jvm-text-mask)">
            <g className="wave-container" transform="translate(0, 150)">
              <path 
                ref={waveRef}
                d="M0,20 Q100,0 200,20 T400,20 T600,20 T800,20 T1000,20 V200 H0 Z" 
                fill="url(#honey-gradient)"
              />
              {/* Solid base to fill as wave rises */}
              <rect x="0" y="20" width="1000" height="300" fill="url(#honey-gradient)" />
            </g>
          </g>
        </svg>

        {/* Organic Tagline */}
        <div className="mt-10 preloader-subtext flex flex-col items-center gap-3">
          <p className="text-gold font-bold tracking-[0.6em] uppercase text-[10px]">
            {["Nature's", "Liquid", "Gold"].map((word, i) => (
              <span key={i} className="inline-block mx-1">{word}</span>
            ))}
          </p>
          <div className="h-px w-12 bg-white/10" />
          <p className="text-white/30 text-[9px] uppercase tracking-[0.3em]">Hand-Harvested Excellence</p>
        </div>
      </div>

      {/* GIGANTIC COUNTER - MOVED TO THE RIGHT */}
      <div className="absolute bottom-12 right-12 md:bottom-20 md:right-20 text-right">
        <div className="flex flex-col items-end">
             <span className="text-[15vw] font-black leading-[0.8] text-white/5 tracking-tighter tabular-nums">
                {count}
            </span>
            <div className="flex items-center gap-4 mt-2">
                 <span className="text-gold text-xs font-bold tracking-widest uppercase">Loading Assets</span>
                 <span className="w-8 h-px bg-gold/30" />
            </div>
        </div>
      </div>

      {/* COOL LOADING BAR - DRILLING EFFECT */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-white/5 overflow-hidden">
          <div 
            className="h-full bg-gold relative transition-all duration-200 ease-out" 
            style={{ width: `${count}%` }}
          >
            {/* The "Glow Head" of the loading bar */}
            <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-r from-transparent to-white/50 blur-md" />
            <div className="absolute top-0 right-0 h-full w-1 bg-white shadow-[0_0_15px_#fff]" />
          </div>
      </div>

      {/* Decorative background "Date" shapes */}
      <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[30vw] h-[30vw] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

    </div>
  );
}