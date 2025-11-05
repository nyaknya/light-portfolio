import Image from "next/image";
import FallText from "../FallText";
import SkillIcon from "../SkillIcon";
import Toggle from "../Toggle";
import TypeText from "../TypeText";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface MainVisualProps {
  isOn: boolean;
  toggleDark: () => void;
}

export default function MainVisual({ isOn, toggleDark }: MainVisualProps) {
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
    <section className="w-full h-[760px] md:h-screen flex justify-center items-center">
      <div className="w-full max-w-[1440px] h-[540px] xl:h-[680px] m-auto flex flex-col justify-between items-center px-5">
        <div className="flex flex-col md:flex-row gap-5 justify-between items-center w-full">
          <Image
            src={isOn ? "/img/logo-dark.png" : "/img/logo.png"}
            width={70}
            height={62}
            alt="로고"
          />
          <TypeText text="만나서 반갑습니다!" className="text-xl font-medium" />
          <span className="text-xl font-medium dark:text-white hidden md:block">
            Sim Eun ju
          </span>
        </div>
        <div className="relative">
          <FallText text="Portfolio" className="text-6xl md:text-8xl font-medium italic" />
          <span
            className="font-sans text-9xl  xl:text-[240px] font-bold absolute right-1/2 bottom-1/2 translate-1/2 -z-10 blur-sm"
            style={{ color: "var(--blur-bg)" }}
          >
            2025
          </span>
        </div>
        <div className="flex xl:justify-between w-full items-center justify-center">
          <div className="w-50 hidden xl:block">
            <Toggle isOn={isOn} onChange={toggleDark} />
          </div>
          <ul ref={skillsRef} className="flex self-center gap-2.5 xl:gap-5">
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
          <span className="w-50 text-right dark:text-white hidden xl:block">
            sim784442@gmail.com
          </span>
        </div>
      </div>
    </section>
  );
}
