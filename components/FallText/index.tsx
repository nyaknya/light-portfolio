import { useRef, useEffect } from "react";
import gsap from "gsap";

interface FallTextProps {
  text: string;
  className?: string;
}

export default function FallText({ text, className = "" }: FallTextProps) {
  const letters = text.split("");
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
  if (!titleRef.current) return;
  
  gsap.from(titleRef.current.children, {
    y: -50,
    opacity: 0,
    duration: 0.5,
    stagger: 0.08,
    ease: "power2.out"
  });
}, []);

  return (
    <h2 ref={titleRef} className={className}>
      {letters.map((letter, i) => (
        <span key={i} className="inline-block">
          {letter}
        </span>
      ))}
    </h2>
  );
}
