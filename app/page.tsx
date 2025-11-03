"use client";

import FallText from "@/components/FallText";
import Header from "@/components/header";
import SkillIcon from "@/components/SkillIcon";
import Toggle from "@/components/Toggle";
import TypeText from "@/components/TypeText";
import gsap from "gsap";
import Lenis from "lenis";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isOn, setIsOn] = useState<boolean>(false);

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

    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    if (isOn) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isOn]);

  return (
    <>
      <Header isDark={isOn} onToggle={() => setIsOn(!isOn)} />
      <main>
        <section className="w-full h-screen flex justify-center items-center">
          <div className="w-[1440px] h-[680px] m-auto flex flex-col justify-between items-center">
            <div className="flex justify-between items-center w-full">
              <Image
                src={isOn ? "/img/logo-dark.png" : "/img/logo.png"}
                width={70}
                height={62}
                alt="로고"
              />
              <TypeText
                text="만나서 반갑습니다!"
                className="text-xl font-medium"
              />
              <span className="text-xl font-medium dark:text-white">
                Sim Eun ju
              </span>
            </div>
            <div className="relative">
              <FallText
                text="Portfolio"
                className="text-8xl font-medium italic"
              />
              <span
                className="font-sans text-[240px] font-bold absolute right-1/2 bottom-1/2 translate-1/2 -z-10 blur-sm"
                style={{ color: "var(--blur-bg)" }}
              >
                2025
              </span>
            </div>
            <div className="flex justify-between w-full items-center">
              <div className="w-50">
                <Toggle isOn={isOn} onChange={() => setIsOn(!isOn)} />
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
              <span className="w-50 text-right dark:text-white">
                sim784442@gmail.com
              </span>
            </div>
          </div>
        </section>
        <section className="w-full py-40">
          <div className="w-[1440px] h-[680px] m-auto">
            <h2 className="text-5xl font-bold mb-8">introduce Me</h2>
            <div className="flex gap-10 line">
              <Image
                src="/img/introduce_profile.png"
                alt="프로필 이미지"
                width={290}
                height={290}
              />
              <div>
                <h3 className="text-4xl font-bold leading-12">
                  포트폴리오를 클릭해주셔서 감사합니다. <br />
                  유연한 사고를 가진
                  <strong className="bg-[#79EAFE] p-1 font-bold inline-block mx-2 ">
                    만능 엔터테이너
                  </strong>
                  심은주입니다!
                </h3>
                <p className="text-lg mt-6 leading-8">
                  지난 3년 간 웹 프로젝트를 경험하며 느낀 점은, 언제나 변수가
                  생길 것을 생각하여 유연하게 대응해야 한다는 것입니다.
                  <br /> 변화가 있어야 발전하는 것이라고 믿고 열심히 배우며
                  정진하고 있습니다. <br />
                  저의 장점은 <strong>빠르게 적응하고, 능동적으로 소통하며, 업무의
                  맥락을 파악하는 능력</strong>입니다.
                  <br /> 코드란 보여지는 것. 즉 비주얼과 가장 멀어보이는데,
                  텍스트로 화면을 표현해낸다는 점에서 프론트엔드에 큰 흥미를
                  느낍니다.
                  <br /> 일에 있어서는 책임과 소통, 제안을 중요하게 생각합니다.
                  열린 마음으로 뭐든 시도하고 받아들며 디자인과 개발을 넘나들어
                  성장하겠습니다!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}
