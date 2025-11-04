"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function SkillsSection() {
  const frontendTitleRef = useRef(null);
  const skillCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const designTitleRef = useRef(null);
  const designItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const anotherTitleRef = useRef(null);
  const anotherItemsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    // 프론트엔드 타이틀
    gsap.from(frontendTitleRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: frontendTitleRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // 스킬 카드들 순차 애니메이션
    skillCardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.from(card, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        });
      }
    });

    // 디자인 타이틀
    gsap.from(designTitleRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: designTitleRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // 디자인 아이템들
    designItemsRef.current.forEach((item, index) => {
      if (item) {
        gsap.from(item, {
          x: -30,
          opacity: 0,
          duration: 0.6,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        });
      }
    });

    // Another 타이틀
    gsap.from(anotherTitleRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: anotherTitleRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Another 아이템들
    anotherItemsRef.current.forEach((item, index) => {
      if (item) {
        gsap.from(item, {
          x: -30,
          opacity: 0,
          duration: 0.6,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        });
      }
    });
  }, []);

  return (
    <section className="w-full py-20">
      <div className="w-[1440px] m-auto">
        <h3 ref={frontendTitleRef} className="font-bold text-3xl mb-6">
          Prontend Skills
        </h3>
        <div className="flex justify-between gap-10">
          <div ref={(el) => { skillCardsRef.current[0] = el; }}>
            <h4 className="text-2xl font-bold mb-4">자주 사용해봤어요</h4>
            <ul className="grid grid-cols-4 gap-5">
              <li className="col-span-2 flex items-center gap-5">
                <figure className="rounded-4xl border border-gray-300 size-16 justify-center items-center flex">
                  <Image
                    src="/img/next-icon.png"
                    width={50}
                    height={50}
                    alt="넥스트"
                  />
                </figure>{" "}
                <span className="text-xl font-semibold">Next.JS</span>
              </li>
              <li className="col-span-2 flex items-center gap-5">
                <figure className="rounded-4xl border border-gray-300 size-16 justify-center items-center flex">
                  <Image
                    src="/img/js-icon.png"
                    width={36}
                    height={36}
                    alt="자바스크립트"
                  />
                </figure>{" "}
                <span className="text-xl font-semibold">JavaScript</span>
              </li>
              <li className="col-span-2 flex items-center gap-5">
                <figure className="rounded-4xl border border-gray-300 size-16 justify-center items-center flex">
                  <Image
                    src="/img/react-icon.png"
                    width={48}
                    height={42}
                    alt="리액트"
                  />
                </figure>
                <span className="text-xl font-semibold">React</span>
              </li>
              <li className="col-span-2 flex items-center gap-5">
                <figure className="rounded-4xl border border-gray-300 size-16 justify-center items-center flex">
                  <Image
                    src="/img/ts-icon.png"
                    width={36}
                    height={36}
                    alt="타입스크립트"
                  />
                </figure>
                <span className="text-xl font-semibold">TypeScript</span>
              </li>
            </ul>
          </div>
          <div ref={(el) => { skillCardsRef.current[1] = el; }}>
            <h4 className="text-2xl font-bold mb-4">사용해본 경험이 있어요</h4>
            <ul className="grid grid-cols-4 gap-5">
              <li className="col-span-2 flex items-center gap-5">
                <figure className="rounded-4xl border border-gray-300 size-16 justify-center items-center flex overflow-hidden">
                  <Image
                    src="/img/stylecomponent-icon.png"
                    width={50}
                    height={50}
                    alt="스타일 컴포넌트"
                  />
                </figure>
                <figure className="rounded-4xl border border-gray-300 size-16 justify-center items-center flex -ml-10">
                  <Image
                    src="/img/scss-icon.png"
                    width={48}
                    height={48}
                    alt="scss"
                  />
                </figure>
                <figure className="rounded-4xl border border-gray-300 size-16 justify-center items-center flex -ml-10">
                  <Image
                    src="/img/tailwind-icon.png"
                    width={44}
                    height={26}
                    alt="테일윈드"
                  />
                </figure>{" "}
                <span className="text-xl font-semibold">
                  CSS Styling
                  <br /> Libraries
                </span>
              </li>
              <li className="col-span-1 flex items-center gap-5">
                <figure className="rounded-4xl border border-gray-300 size-16 justify-center items-center flex">
                  <Image
                    src="/img/axios-icon.png"
                    width={32}
                    height={32}
                    alt="엑시오스"
                  />
                </figure>{" "}
                <span className="text-xl font-semibold">Axios</span>
              </li>
              <li className="col-span-1 flex items-center gap-5">
                <figure className="rounded-4xl border border-gray-300 size-16 justify-center items-center flex">
                  <Image
                    src="/img/jest-icon.png"
                    width={32}
                    height={32}
                    alt="제스트"
                  />
                </figure>{" "}
                <span className="text-xl font-semibold">Jest</span>
              </li>
              <li className="col-span-2 flex items-center gap-5">
                <figure className="rounded-4xl border border-gray-300 size-16 justify-center items-center flex">
                  <Image
                    src="/img/reactquery-icon.png"
                    width={48}
                    height={42}
                    alt="리액트 쿼리"
                  />
                </figure>
                <span className="text-xl font-semibold">
                  Tanstack Query
                  <br />
                  (React Query)
                </span>
              </li>
              <li className="col-span-2 flex items-center gap-5">
                <figure className="rounded-4xl border border-gray-300 size-16 justify-center items-center flex">
                  <Image
                    src="/img/reduxtoolkit-icon.png"
                    width={36}
                    height={36}
                    alt="리덕스 툴킷"
                  />
                </figure>
                <span className="text-xl font-semibold">Redux Toolkit</span>
              </li>
            </ul>
          </div>
          <div ref={(el) => { skillCardsRef.current[2] = el; }}>
            <h4 className="text-2xl font-bold mb-4">앞으로 배워보고 싶어요</h4>
            <ul className="grid grid-cols-2 gap-5">
              <li className="col-span-3 flex items-center gap-5">
                <figure className="rounded-4xl border border-gray-300 size-16 justify-center items-center flex">
                  <Image
                    src="/img/reactnative-icon.png"
                    width={52}
                    height={42}
                    alt="리액트 네이티브"
                  />
                </figure>{" "}
                <span className="text-xl font-semibold">React Native</span>
              </li>
              <li className="col-span-3 flex items-center gap-5">
                <figure className="rounded-4xl border border-gray-300 size-16 justify-center items-center flex">
                  <Image
                    src="/img/storybook-icon.png"
                    width={36}
                    height={36}
                    alt="스토리북"
                  />
                </figure>
                <span className="text-xl font-semibold">Storybook</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-12 mt-12">
          <div className="col-span-6">
            <h3 ref={designTitleRef} className="font-bold text-3xl mb-6">
              Design Skills
            </h3>
            <ul className="grid grid-cols-6 gap-5">
              <li
                ref={(el) => { designItemsRef.current[0] = el; }}
                className="col-span-2 flex items-center gap-5"
              >
                <figure className="rounded-4xl border border-gray-300 size-16 justify-center items-center flex">
                  <Image
                    src="/img/ps-icon.png"
                    width={36}
                    height={36}
                    alt="포토샵"
                  />
                </figure>{" "}
                <span className="text-xl font-semibold">PhotoShop</span>
              </li>
              <li
                ref={(el) => { designItemsRef.current[1] = el; }}
                className="col-span-2 flex items-center gap-5"
              >
                <figure className="rounded-4xl border border-gray-300 size-16 justify-center items-center flex">
                  <Image
                    src="/img/ai-icon.png"
                    width={36}
                    height={36}
                    alt="일러스트레이터"
                  />
                </figure>{" "}
                <span className="text-xl font-semibold">Illustrator</span>
              </li>
              <li
                ref={(el) => { designItemsRef.current[2] = el; }}
                className="col-span-2 flex items-center gap-5"
              >
                <figure className="rounded-4xl border border-gray-300 size-16 justify-center items-center flex">
                  <Image
                    src="/img/figma-icon.png"
                    width={30}
                    height={45}
                    alt="피그마"
                  />
                </figure>
                <span className="text-xl font-semibold">Figma</span>
              </li>
            </ul>
          </div>
          <div className="col-span-6">
            <h3 ref={anotherTitleRef} className="font-bold text-3xl mb-6">
              Another Skills
            </h3>
            <ul className="grid grid-cols-6 gap-5">
              <li
                ref={(el) => { anotherItemsRef.current[0] = el; }}
                className="col-span-2 flex items-center gap-5"
              >
                <figure className="rounded-4xl border border-gray-300 size-16 justify-center items-center flex">
                  <Image
                    src="/img/notion-icon.png"
                    width={38}
                    height={36}
                    alt="포토샵"
                  />
                </figure>{" "}
                <span className="text-xl font-semibold">Notion</span>
              </li>
              <li
                ref={(el) => { anotherItemsRef.current[1] = el; }}
                className="col-span-2 flex items-center gap-5"
              >
                <figure className="rounded-4xl border border-gray-300 size-16 justify-center items-center flex">
                  <Image
                    src="/img/excel-icon.png"
                    width={30}
                    height={41}
                    alt="엑셀"
                  />
                </figure>{" "}
                <span className="text-xl font-semibold">Excel</span>
              </li>
              <li
                ref={(el) => { anotherItemsRef.current[2] = el; }}
                className="col-span-2 flex items-center gap-5"
              >
                <figure className="rounded-4xl border border-gray-300 size-16 justify-center items-center flex">
                  <Image
                    src="/img/ppt-icon.png"
                    width={30}
                    height={45}
                    alt="파워포인트"
                  />
                </figure>
                <span className="text-xl font-semibold">Powerpoint</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}