"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    if (!cursor || !cursorDot) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, {
        scale: 1.5,
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    const interactiveElements = document.querySelectorAll("a, button");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor fixed w-12 h-12 border-2 rounded-full pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{ borderColor: 'var(--color-text)' }}
      />
      <div
        ref={cursorDotRef}
        className="custom-cursor-dot fixed w-3 h-3 rounded-full pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2"
        style={{ backgroundColor: 'var(--color-text)' }}
      />
    </>
  );
}