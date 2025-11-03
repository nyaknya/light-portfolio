import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

interface TypeTextProps {
  text: string;
  className?: string;
}

export default function TypeText({ text, className = "" }: TypeTextProps) {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    gsap.to(textRef.current, {
      duration: 2,
      text: text,
      ease: "none",
    });
  }, [text]);

  return (
    <p ref={textRef} className={`${className} relative`}>
      <span className="animate-blink">|</span>
    </p>
  );
}