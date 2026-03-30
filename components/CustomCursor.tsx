"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      gsap.to(dot, { x: mx, y: my, duration: 0.08 });
    };

    const raf = () => {
      rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
      gsap.set(ring, { x: rx, y: ry });
      requestAnimationFrame(raf);
    };

    window.addEventListener("mousemove", onMove);
    const id = requestAnimationFrame(raf);

    const grow = () => gsap.to([dot, ring], { scale: 2.2, duration: 0.3 });
    const shrink = () => gsap.to([dot, ring], { scale: 1, duration: 0.3 });

    document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(id);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor hidden lg:block" />
      <div ref={ringRef} className="cursor-follower hidden lg:block" />
    </>
  );
}
