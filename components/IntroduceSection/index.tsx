"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface HistoryItem {
  date: string;
  period?: string;
  company?: string;
  description?: string;
  title?: string;
  className?: string;
}

export default function IntroduceSection() {
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const historyTitleRef = useRef(null);
  const historyItemsRef = useRef<(HTMLLIElement | null)[]>([]);

  const historyData: HistoryItem[][] = [
    [
      {
        date: "2020.02",
        title: "홍익디자인고등학교 멀티미디어디자인과 졸업",
      },
      {
        date: "2020.01 ~ 2020.06",
        title: "스마트기기 UI/UX 웹디자인 (웹퍼블리셔) 교육 수료",
      },
      {
        date: "2020.12 ~ 2021.08",
        period: "9개월",
        company: "넛지커뮤니케이션즈",
        description: "웹 퍼블리셔 및 웹 디자이너\n워드프레스/카페24를 활용한 웹사이트, 쇼핑몰 개발",
      },
    ],
    [
      {
        date: "2021.11 ~ 2023.11",
        period: "2년",
        company: "여기다여기",
        description: "웹 퍼블리셔 및 웹 디자이너\n2년 간 다양한 업종의 웹사이트 100개 이상 제작",
        className: "pt-4 pb-10",
      },
      {
        date: "2020.01 ~ 2020.06",
        period: "6개월",
        company: "코드잇 스프린트 프론트엔드 트랙 3기(부트캠프)",
        description: "React, TS, Next.JS 등 프론트엔드 개발에 필요한\n요소들 학습, 3번의 팀 프로젝트 협업 경험",
      },
    ],
    [
      {
        date: "2024.12 ~ 2025.02",
        period: "2개월",
        company: "코드잇 스프린트 프론트엔드 단기심화 6기(부트캠프)",
        description: "Tailwind, Jest, CI/CD 등 테스트 코드에 대한 학습\n백엔드, 디자이너와의 협업을 통한 프로젝트",
        className: "pt-4 pb-10",
      },
      {
        date: "2025.05~",
        period: "6개월",
        company: "인터와이즈",
        description: "웹 퍼블리셔 및 웹 디자이너\n그누보드 기반, 다양한 업종의 웹사이트 및 랜딩페이지 제작",
      },
    ],
  ];

  useEffect(() => {
    gsap.from(imageRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(titleRef.current, {
      y: 60,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(textRef.current, {
      y: 40,
      opacity: 0,
      duration: 1,
      delay: 0.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(historyTitleRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: historyTitleRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    historyItemsRef.current.forEach((item, index) => {
      if (item) {
        gsap.from(item, {
          x: -50,
          opacity: 0,
          duration: 0.8,
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
    <section className="w-full py-20" id="introduce">
     <div className="w-full max-w-[1440px] m-auto px-5">
        <h2 className="text-5xl font-bold mb-8">introduce Me</h2>
        <div className="flex gap-10">
          <div ref={imageRef}>
            <Image
              src="/img/introduce_profile.png"
              alt="프로필 이미지"
              width={290}
              height={290}
            />
          </div>
          <div>
            <h3 ref={titleRef} className="text-4xl font-bold leading-12 dark:text-white">
              포트폴리오를 클릭해주셔서 감사합니다. <br />
              유연한 사고를 가진
              <strong className="bg-[#34CDE8] p-1 font-bold inline-block mx-2">
                만능 엔터테이너
              </strong>
              심은주입니다!
            </h3>
            <p ref={textRef} className="text-lg mt-6 leading-8 dark:text-white">
              지난 3년 간 웹 프로젝트를 경험하며 느낀 점은, 언제나 변수가 생길 것을 생각하여 유연하게 대응해야 한다는 것입니다.
              <br /> 변화가 있어야 발전하는 것이라고 믿고 열심히 배우며 정진하고 있습니다. <br /> 저의 장점은
              <strong> 빠르게 적응하고, 능동적으로 소통하며, 업무의 맥락을 파악하는 능력</strong>
              입니다.
              <br /> 코드란 보여지는 것. 즉 비주얼과 가장 멀어보이는데, 텍스트로 화면을 표현해낸다는 점에서 프론트엔드에 큰 흥미를 느낍니다.
              <br /> 일에 있어서는 책임과 소통, 제안을 중요하게 생각합니다. 열린 마음으로 뭐든 시도하고 받아들며 디자인과 개발을 넘나들어 성장하겠습니다!
            </p>
          </div>
        </div>
        <div className="mt-10">
          <h3 ref={historyTitleRef} className="font-bold text-3xl mb-8">
            이력
          </h3>
          <div className="grid grid-cols-12">
            {historyData.map((column, colIndex) => (
              <div key={colIndex} className="col-span-4">
                <ul className="pl-5 border-l-2 border-gray-300 h-full">
                  {column.map((item, itemIndex) => {
                    const globalIndex = historyData.slice(0, colIndex).flat().length + itemIndex;
                    return (
                      <li
                        key={itemIndex}
                        ref={(el) => {
                          historyItemsRef.current[globalIndex] = el;
                        }}
                        className={`${item.className || ""} ${itemIndex === column.length - 1 ? "" : "pb-8"} relative`}
                      >
                        <span className={`absolute -left-[25px] ${item.className?.includes('pt-4') ? 'top-7' : 'top-3'} w-2 h-2 bg-gray-300 dark:bg-gray-500 rounded-full`} />
                        <h4 className="text-2xl font-semibold pb-2">
                          {item.date}
                          {item.period && (
                            <span className="text-base text-gray-400 inline-block pl-2">
                              {item.period}
                            </span>
                          )}
                        </h4>
                        <p className="text-lg leading-8">
                          {item.company && <strong className="block">{item.company}</strong>}
                          {item.description ? item.description.split('\n').map((line, i) => (
                            <span key={i}>
                              {line}
                              {i < item.description!.split('\n').length - 1 && <br />}
                            </span>
                          )) : item.title}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}