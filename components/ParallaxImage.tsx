"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

interface Props {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  scrollSpeed?: number;
}

export default function ParallaxImage({ src, alt, className = "", style = {}, scrollSpeed = 0.12 }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const img = imgRef.current;
    if (!container || !img) return;

    const st = ScrollTrigger.create({
      trigger: container,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        gsap.set(img, { yPercent: (self.progress - 0.5) * scrollSpeed * 100 });
      },
    });

    const onMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const dx = (e.clientX - rect.left) / rect.width - 0.5;
      gsap.to(img, { x: dx * -14, duration: 0.5, ease: "power2.out", overwrite: "auto" });
    };
    const onLeave = () => gsap.to(img, { x: 0, duration: 0.6, ease: "power3.out", overwrite: "auto" });

    container.addEventListener("mousemove", onMove);
    container.addEventListener("mouseleave", onLeave);

    return () => {
      st.kill();
      container.removeEventListener("mousemove", onMove);
      container.removeEventListener("mouseleave", onLeave);
    };
  }, [scrollSpeed]);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden rounded-3xl relative ${className}`}
      style={style}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="w-full object-cover"
        style={{ height: "115%", marginTop: "-7.5%", willChange: "transform" }}
      />
    </div>
  );
}
