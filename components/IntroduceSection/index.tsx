"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function IntroduceSection() {
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.from(imageRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%",
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
      },
    });
  }, []);

  return (
    <section className="w-full py-40">
      <div className="w-[1440px] h-[680px] m-auto">
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
            <h3
              ref={titleRef}
              className="text-4xl font-bold leading-12 dark:text-white"
            >
              포트폴리오를 클릭해주셔서 감사합니다. <br />
              유연한 사고를 가진
              <strong className="bg-[#34CDE8] p-1 font-bold inline-block mx-2">
                만능 엔터테이너
              </strong>
              심은주입니다!
            </h3>
            <p ref={textRef} className="text-lg mt-6 leading-8 dark:text-white">
              지난 3년 간 웹 프로젝트를 경험하며 느낀 점은, 언제나 변수가 생길
              것을 생각하여 유연하게 대응해야 한다는 것입니다.
              <br /> 변화가 있어야 발전하는 것이라고 믿고 열심히 배우며 정진하고
              있습니다. <br /> 저의 장점은
              <strong>
                {" "}
                빠르게 적응하고, 능동적으로 소통하며, 업무의 맥락을 파악하는
                능력
              </strong>
              입니다.
              <br /> 코드란 보여지는 것. 즉 비주얼과 가장 멀어보이는데, 텍스트로
              화면을 표현해낸다는 점에서 프론트엔드에 큰 흥미를 느낍니다.
              <br /> 일에 있어서는 책임과 소통, 제안을 중요하게 생각합니다. 열린
              마음으로 뭐든 시도하고 받아들며 디자인과 개발을 넘나들어
              성장하겠습니다!
            </p>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="font-bold text-2xl mb-8">이력</h3>
          <div className="grid grid-cols-12">
            <div className="col-span-4">
              <ul className="pl-5 border-l-2 border-gray-300">
                <li className="pb-8 relative">
                  <span className="absolute -left-[25px] top-3 w-2 h-2 bg-gray-300 dark:bg-gray-500 rounded-full" />
                  <h4 className="text-2xl font-semibold pb-2">2020.02</h4>
                  <p className="text-lg">
                    홍익디자인고등학교 멀티미디어디자인과 졸업 
                  </p>
                </li>
                <li className="pb-8 relative">
                  <span className="absolute -left-[25px] top-3 w-2 h-2 bg-gray-300 dark:bg-gray-500 rounded-full" />
                  <h4 className="text-2xl font-semibold pb-2">
                    2020.01 ~ 2020.06
                  </h4>
                  <p className="text-lg">
                    스마트기기 UI/UX 웹디자인 (웹퍼블리셔) 교육 수료
                  </p>
                </li>
                <li className="relative">
                  <span className="absolute -left-[25px] top-3 w-2 h-2 bg-gray-300 dark:bg-gray-500 rounded-full" />
                  <h4 className="text-2xl font-semibold pb-2">
                    2020.12 ~ 2021.08
                    <span className="text-base text-gray-400 inline-block pl-2">
                      9개월
                    </span>
                  </h4>
                  <p className="text-lg leading-8">
                    <strong className="block ">넛지커뮤니케이션즈</strong>
                    웹 퍼블리셔 및 웹 디자이너
                    <br />
                    워드프레스/카페24를 활용한 웹사이트, 쇼핑몰 개발
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-span-4">
              <ul className="pl-5 border-l-2 border-gray-300 h-full">
                <li className="pt-4 pb-10 relative">
                  <span className="absolute -left-[25px] top-7 w-2 h-2 bg-gray-300 dark:bg-gray-500 rounded-full" />
                  <h4 className="text-2xl font-semibold pb-2">
                    2021.11 ~ 2023.11
                    <span className="text-base text-gray-400 inline-block pl-2">
                      2년
                    </span>
                  </h4>
                  <p className="text-lg leading-8">
                    <strong className="block">여기다여기</strong>
                    웹 퍼블리셔 및 웹 디자이너
                    <br />
                    2년 간 다양한 업종의 웹사이트 100개 이상 제작  
                  </p>
                </li>
                <li className=" relative">
                  <span className="absolute -left-[25px] top-3 w-2 h-2 bg-gray-300 dark:bg-gray-500 rounded-full" />
                  <h4 className="text-2xl font-semibold pb-2">
                    2020.01 ~ 2020.06
                    <span className="text-base text-gray-400 inline-block pl-2">
                      6개월
                    </span>
                  </h4>
                  <p className="text-lg leading-8">
                    <strong className="block">
                      코드잇 스프린트 프론트엔드 트랙 3기(부트캠프)
                    </strong>
                    React, TS, Next.JS 등 프론트엔드 개발에 필요한
                    <br />
                    요소들 학습, 3번의 팀 프로젝트 협업 경험
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-span-4">
              <ul className="pl-5 border-l-2 border-gray-300 h-full">
                <li className="pt-4 pb-10 relative">
                  <span className="absolute -left-[25px] top-7 w-2 h-2 bg-gray-300 dark:bg-gray-500 rounded-full" />
                  <h4 className="text-2xl font-semibold pb-2">
                    2024.12 ~ 2025.02
                    <span className="text-base text-gray-400 inline-block pl-2">
                      2개월
                    </span>
                  </h4>
                  <p className="text-lg leading-8">
                    <strong className="block">
                      코드잇 스프린트 프론트엔드 단기심화 6기(부트캠프)
                    </strong>
                    Tailwind, Jest, CI/CD 등 테스트 코드에 대한 학습
                    <br />
                    백엔드, 디자이너와의 협업을 통한 프로젝트
                  </p>
                </li>
                <li className=" relative">
                  <span className="absolute -left-[25px] top-3 w-2 h-2 bg-gray-300 dark:bg-gray-500 rounded-full" />
                  <h4 className="text-2xl font-semibold pb-2">
                  2025.05~
                    <span className="text-base text-gray-400 inline-block pl-2">
                      6개월
                    </span>
                  </h4>
                  <p className="text-lg leading-8">
                    <strong className="block">
                      인터와이즈
                    </strong>
웹 퍼블리셔 및 웹 디자이너<br />
그누보드 기반, 다양한 업종의 웹사이트 및 랜딩페이지 제작
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
