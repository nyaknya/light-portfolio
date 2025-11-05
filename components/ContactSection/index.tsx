import FallText from "../FallText";
import SkillIcon from "../SkillIcon";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function ContactSection() {
  const skills = [
    {
      src: "/img/hero_photoshop.png",
      alt: "포토샵 아이콘",
      width: 80,
      height: 74,
      isFill: true,
    },
    {
      src: "/img/hero_ai.png",
      alt: "일러스트레이터 아이콘",
      width: 80,
      height: 74,
      isFill: true,
    },
    {
      src: "/img/hero_figma.png",
      alt: "피그마 아이콘",
      width: 40,
      height: 60,
      isFill: false,
    },
    {
      src: "/img/hero_next.png",
      alt: "넥스트 아이콘",
      width: 60,
      height: 54,
      isFill: false,
    },
    {
      src: "/img/hero_react.png",
      alt: "리액트 아이콘",
      width: 56,
      height: 56,
      isFill: false,
    },
    {
      src: "/img/hero_js.png",
      alt: "자바스크립트 아이콘",
      width: 48,
      height: 48,
      isFill: false,
    },
    {
      src: "/img/hero_ts.png",
      alt: "타입스크립트 아이콘",
      width: 48,
      height: 48,
      isFill: false,
    },
  ];

  useEffect(() => {
    if (!skillsRef.current) return;

    gsap.to(skillsRef.current.children, {
      y: -20,
      duration: 1.5,
      stagger: {
        each: 0.1,
        repeat: -1,
        yoyo: true,
      },
      ease: "power1.inOut",
    });
  });

  const skillsRef = useRef<HTMLUListElement>(null);

  return (
    <section
      className="w-full h-screen flex justify-center items-center"
      id="contact"
    >
      <div className="w-full max-w-[1440px] h-[560px] m-auto flex flex-col justify-between items-center">
        <div className="flex justify-center w-full items-center">
          <ul ref={skillsRef} className="flex self-center gap-2 sm:gap-5">
            {skills.map(({ src, alt, isFill, width, height }) => (
              <SkillIcon
                key={alt}
                src={src}
                name={alt}
                isFill={isFill}
                width={width}
                height={height}
              />
            ))}
          </ul>
        </div>

        <div className="relative w-full">
          <FallText
            text="감사합니다!"
            className="text-4xl lgtext-8xl font-medium text-center"
          />
          <span
            className="font-sans text-8xl xl:text-[240px] font-bold absolute right-1/2 bottom-1/2 translate-1/2 -z-10 blur-sm w-full text-center"
            style={{ color: "var(--blur-bg)" }}
          >
            Thank you
          </span>
        </div>
        <div className="flex justify-center items-start gap-4 w-full text-lg p-4">
          <strong>CONTACT</strong>
          <div>
            010-8582-0835 / sim784442@gmail.com
            <br />
            <Link href="https://github.com/nyaknya" target="_blank">
              https://github.com/nyaknya
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
