"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("preloader-done")) { setDone(true); return; }
    const container = containerRef.current;
    if (!container) return;
    const tl = gsap.timeline();

    tl.to({ val: 0 }, {
      val: 100, duration: 2.2, ease: "power2.inOut",
      onUpdate: function() {
        setCount(Math.round((this.targets()[0] as { val: number }).val));
      },
    }, 0);

    const strokes = container.querySelectorAll<SVGElement>(".jvm-stroke");
    strokes.forEach((el) => {
      const len = (el as SVGPathElement).getTotalLength?.() || 200;
      gsap.set(el, { strokeDasharray: len, strokeDashoffset: len });
    });
    tl.to(strokes, { strokeDashoffset: 0, duration: 1.8, ease: "power3.inOut", stagger: 0.12 }, 0.1);
    tl.to(container.querySelectorAll(".jvm-fill"), { opacity: 1, duration: 0.5, stagger: 0.08, ease: "power2.out" }, 1.6);
    tl.to(container, {
      yPercent: -100, duration: 0.9, ease: "expo.inOut", delay: 0.4,
      onComplete: () => { setDone(true); sessionStorage.setItem("preloader-done","1"); },
    });
    return () => { tl.kill(); };
  }, []);

  if (done) return null;

  return (
    <div ref={containerRef} className="preloader">
      {/* JVM SVG draw animation */}
      <svg viewBox="0 0 360 130" xmlns="http://www.w3.org/2000/svg"
        style={{ width: "clamp(160px,25vw,300px)", height: "auto", overflow: "visible" }}>
        {/* J */}
        <path className="jvm-stroke" d="M 28 20 L 28 82 Q 28 106 14 106 Q 4 106 4 94"
          fill="none" stroke="#C8A84B" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
        <line className="jvm-stroke" x1="10" y1="20" x2="46" y2="20" stroke="#C8A84B" strokeWidth="9" strokeLinecap="round" />
        <path className="jvm-fill" opacity="0" d="M 28 20 L 28 82 Q 28 106 14 106 Q 4 106 4 94"
          fill="none" stroke="#F5EDD8" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
        {/* V */}
        <polyline className="jvm-stroke" points="74,20 104,96 134,20"
          fill="none" stroke="#C8A84B" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
        <polyline className="jvm-fill" opacity="0" points="74,20 104,96 134,20"
          fill="none" stroke="#F5EDD8" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
        {/* M */}
        <polyline className="jvm-stroke" points="172,96 172,20 214,74 256,20 256,96"
          fill="none" stroke="#C8A84B" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
        <polyline className="jvm-fill" opacity="0" points="172,96 172,20 214,74 256,20 256,96"
          fill="none" stroke="#F5EDD8" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <p className="text-beige/25 text-xs tracking-[0.2em] uppercase font-semibold mt-6">
        Pure · Natural · Nourishing
      </p>

      {/* Giant counter */}
      <div className="absolute bottom-10 left-12 font-bold leading-none tracking-tighter select-none pointer-events-none"
        style={{ fontSize: "clamp(96px,16vw,220px)", color: "rgba(245,237,216,0.05)", fontVariantNumeric: "tabular-nums" }}>
        {String(count).padStart(2, "0")}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-beige/5">
        <div className="h-full bg-gold transition-[width] duration-75 ease-linear" style={{ width: `${count}%` }} />
      </div>
    </div>
  );
}
