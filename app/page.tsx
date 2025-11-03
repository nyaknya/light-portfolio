"use client";

import FallText from "@/components/FallText";
import Header from "@/components/header";
import SkillIcon from "@/components/SkillIcon";
import TypeText from "@/components/TypeText";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isOn, setIsOn] = useState<boolean>(false);

  const skills = [
    {
      src: "/img/hero_photoshop.png",
      alt: "포토샵 아이콘",
      width: 80,
      height: 78,
      isFill: true,
    },
    {
      src: "/img/hero_ai.png",
      alt: "일러스트레이터 아이콘",
      width: 80,
      height: 78,
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

  const skillsRef = useRef<HTMLUListElement>(null);

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
  }, []);
  

  return (
    <>
      <main>
        <section className="w-full h-screen flex justify-center items-center">
          <div className="w-[1440px] h-[680px] m-auto flex flex-col justify-between items-center">
            <div className="flex justify-between items-center w-full">
              <Image src="/img/logo.png" width={70} height={62} alt="로고" />
              <TypeText
                text="만나서 반갑습니다!"
                className="text-xl font-medium"
              />
              <span className="text-xl font-medium">Sim Eun ju</span>
            </div>
            <div className="relative">
              <FallText
                text="Portfolio"
                className="text-8xl font-medium italic"
              />
              <span className="text-[#F3F5F7] font-sans text-[240px] font-bold absolute right-1/2 bottom-1/2 translate-1/2 -z-10 blur-sm">
                2025
              </span>
            </div>
            <div className="flex justify-between w-full items-center">
              <div className="w-50">
                <button
                  onClick={() => setIsOn(!isOn)}
                  className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                    isOn ? "bg-gray-300" : "bg-gray-200"
                  }`}
                >
                  <div
                    className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${
                      isOn ? "translate-x-7" : "translate-x-0.5"
                    }`}
                  />
                </button>
              </div>
              <ul ref={skillsRef} className="flex self-center gap-5">
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
              <span className="w-50 text-right">sim784442@gmail.com</span>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}
