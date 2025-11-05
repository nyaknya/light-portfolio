"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function DevProject() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const projectItemsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    gsap.from(titleRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(subtitleRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: subtitleRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    projectItemsRef.current.forEach((item, index) => {
      if (item) {
        gsap.from(item, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.2,
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
    <section className="w-full py-20" id="project">
      <div className="w-full max-w-[1440px] m-auto px-5">
        <div className="flex flex-col js lg:flex-row lg:justify-between lg:items-center py-8 gap-5">
          <h2 ref={titleRef} className="text-4xl sm:text-5xl font-bold">
            Dev Projects
          </h2>
          <p
            ref={subtitleRef}
            className="text-base sm:text-2xl font-bold flex flex-col lg:flex-row  gap-2 lg:gap-1"
          >
            지난 3년간 100개 이상의
            <br className="block sm:hidden" /> 프로젝트를 제작했습니다.{" "}
            <Link
              href={
                "https://diamond-nerve-9e2.notion.site/44dc3f3a136a463e9a9152f4577c15e9?source=copy_link"
              }
              className="text-[#34CDE8] flex gap-1 transition-all hover:opacity-70"
              target="_blank"
            >
              {" "}
              더 많은 프로젝트는 이쪽에서 조회해보세요.{" "}
              <Image
                width={12}
                height={14}
                src={"/img/more_link.svg"}
                alt="더보기"
              />
            </Link>
          </p>
        </div>
        <ul className="border-t-4 border-[--color-background]">
          <li
            ref={(el) => {
              projectItemsRef.current[0] = el;
            }}
            className="p-4 py-8 lg:p-12 border-b flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-20"
          >
            <figure>
              <Image
                src={"/img/fitmon.png"}
                width={460}
                height={365}
                alt="fitmon"
              />
            </figure>
            <div className="flex-col flex gap-6">
              <h3 className="text-3xl sm:text-4xl items-center flex gap-4 sm:gap-6">
                <span className="text-2xl font-bold">01</span>{" "}
                <strong>FITMON</strong>
              </h3>
              <p className="text-base sm:text-lg leading-8">
                함께 챌린지를 달성하며 지속 가능한 운동을 도모하는 모임 플랫폼
                <br />
                <strong>팀프로젝트 (FE, 팀장)</strong> | FE 4인, BE 1인 | 디자인
                100% FE 25%
              </p>
              <p className="text-sm">
                [ localStorage 기반 입력 데이터 자동 저장 기능 구현 ]<br />
                단계별로 이동하며 데이터를 입력하는 폼 UI에서, 이전 단계로
                돌아가도 입력값이 유지되길 바라는 사용자 피드백 발생
                <br />
                입력 데이터를 localStorage에 저장하고 단계 전환 시 자동 불러오는
                구조로 구현
                <br /> 사용자 입력 데이터 손실을 방지하고, 폼 작성 경험 개선에
                기여
              </p>
              <p className="text-sm">
                [ SSR 적용을 통한 초기 렌더링 성능 향상 ]<br />
                홈(리스트) 화면 특성상 데이터가 자주 갱신되지 않는 점을 고려해,
                사용자 초기 진입 시 성능을 개선하고자 SSR 도입 결정
                <br />
                React Query의 프리패치 및 하이드레이션 기능을 활용해 서버 측에서
                데이터를 선반영
                <br /> 첫 화면 로딩 속도를 약 30% 개선하여 사용자 초기 경험
                향상에 기여
              </p>
              <p className="text-sm">
                [ 프로젝트 목표 설정 및 일정 관리 문화 조성 ]<br />
                팀장 역할을 맡아 주 단위 목표 설정 및 매일 아침 팀원들과의 진행
                상황 공유 루틴 도입
                <br />
                팀원 개별 대화를 통해 작업 진척도 파악 및 어려움 발생 시 분량
                재조정
                <br />
                팀원 모두가 서로의 작업 상황을 명확히 인지하고 빠르게 대응할 수
                있는 환경을 조성해
                <br /> 프로젝트를 기한 내 안정적으로 완수
              </p>
              <ul className="flex flex-wrap gap-2">
                <li className="px-5 py-2 rounded-3xl border border-gray-300 bg-black text-white font-semibold">
                  Next.js
                </li>
                <li className="px-5 py-2 rounded-3xl border border-gray-300 font-semibold">
                  Typescript
                </li>
                <li className="px-5 py-2 rounded-3xl border border-gray-300 font-semibold">
                  React Query
                </li>
                <li className="px-5 py-2 rounded-3xl border border-gray-300 font-semibold">
                  Zustand
                </li>
              </ul>
              <ul className="text-xl font-bold flex flex-col sm:flex-row gap-6 sm:gap-10">
                <li>
                  <Link
                    href={
                      "https://www.figma.com/design/bysBJxINW5iyK28ohcmON2/fitmon-%EB%94%94%EC%9E%90%EC%9D%B8?node-id=0-1&t=RXT7JyzOfvk3NoGC-1"
                    }
                    className="flex gap-4 items-center"
                    target="_blank"
                  >
                    <Image
                      src="/img/figma-icon.png"
                      alt="figma"
                      width={20}
                      height={30}
                    />
                    Figma 시안 링크
                    <Image
                      src={"/img/more_link_b.png"}
                      alt="링크 이동"
                      width={14}
                      height={14}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"https://github.com/nyaknya/fitmon"}
                    target="_blank"
                    className="flex gap-4 items-center"
                  >
                    <Image
                      src="/img/github.png"
                      alt="figma"
                      width={28}
                      height={28}
                    />
                    깃허브 링크
                    <Image
                      src={"/img/more_link_b.png"}
                      alt="링크 이동"
                      width={14}
                      height={14}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"https://fitmon-phi.vercel.app/"}
                    target="_blank"
                    className="flex gap-4 items-center"
                  >
                    <Image
                      src="/img/site_link.png"
                      alt="figma"
                      width={28}
                      height={28}
                    />
                    배포 링크
                    <Image
                      src={"/img/more_link_b.png"}
                      alt="링크 이동"
                      width={14}
                      height={14}
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li
            ref={(el) => {
              projectItemsRef.current[1] = el;
            }}
            className="p-4 py-8 lg:p-12 border-b flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-20"
          >
            <figure>
              <Image
                src={"/img/livingart.png"}
                width={460}
                height={365}
                alt="fitmon"
              />
            </figure>
            <div className="flex-col flex gap-6">
              <h3 className="text-3xl sm:text-4xl items-center flex gap-4 sm:gap-6">
                <span className="text-2xl font-bold">02</span>
                <strong>COSMOS</strong>
              </h3>
              <p className="text-base sm:text-lg leading-8">
                스테인레스 주방용품 전문생산기업 리빙아트
              </p>
              <ul className="flex flex-wrap gap-2">
                <li className="px-5 py-2 rounded-3xl border border-gray-300 bg-black text-white font-semibold">
                  Wordpress
                </li>
                <li className="px-5 py-2 rounded-3xl border border-gray-300 font-semibold">
                  HTML/CSS/JS
                </li>
                <li className="px-5 py-2 rounded-3xl border border-gray-300 font-semibold">
                  PHOTOSHOP
                </li>
              </ul>
              <ul className="text-xl font-bold flex flex-col sm:flex-row gap-6 sm:gap-10">
                <li>
                  <Link
                    href={"/img/livingart1.png"}
                    className="flex gap-4 items-center"
                    target="_blank"
                  >
                    <Image
                      src="/img/ps-icon.png"
                      alt="figma"
                      width={24}
                      height={32}
                    />
                    디자인 상세 링크
                    <Image
                      src={"/img/more_link_b.png"}
                      alt="링크 이동"
                      width={14}
                      height={14}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"https://www.livingart.co.kr/"}
                    target="_blank"
                    className="flex gap-4 items-center"
                  >
                    <Image
                      src="/img/site_link.png"
                      alt="figma"
                      width={28}
                      height={28}
                    />
                    배포 링크
                    <Image
                      src={"/img/more_link_b.png"}
                      alt="링크 이동"
                      width={14}
                      height={14}
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li
            ref={(el) => {
              projectItemsRef.current[2] = el;
            }}
            className="p-4 py-8 lg:p-12 border-b flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-20"
          >
            <figure>
              <Image
                src={"/img/rainbow.png"}
                width={460}
                height={365}
                alt="fitmon"
              />
            </figure>
            <div className="flex-col flex gap-6">
              <h3 className="text-3xl sm:text-4xl items-center flex gap-4 sm:gap-6">
                <span className="text-2xl font-bold">03</span>
                <strong>무지개동산</strong>
              </h3>
              <p className="text-base sm:text-lg leading-8">
                방문하는 반려동물 장례 / 화장 서비스, 무지개동산
                <br />
                <strong>디자인 및 퍼블리싱 기여도 100%</strong> | 디자인
                소요기간 2~3일 | 퍼블리싱 4~5일
              </p>
              <ul className="flex flex-wrap gap-2">
                <li className="px-5 py-2 rounded-3xl border border-gray-300 bg-black text-white font-semibold">
                  그누보드
                </li>
                <li className="px-5 py-2 rounded-3xl border border-gray-300 font-semibold">
                  HTML/CSS/JS
                </li>
                <li className="px-5 py-2 rounded-3xl border border-gray-300 font-semibold">
                  PHOTOSHOP
                </li>
              </ul>
              <ul className="text-xl font-bold flex flex-col sm:flex-row gap-6 sm:gap-10">
                <li>
                  <Link
                    href={"/img/rainbow1.png"}
                    className="flex gap-4 items-center"
                    target="_blank"
                  >
                    <Image
                      src="/img/ps-icon.png"
                      alt="figma"
                      width={24}
                      height={32}
                    />
                    디자인 상세 링크
                    <Image
                      src={"/img/more_link_b.png"}
                      alt="링크 이동"
                      width={14}
                      height={14}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"http://md250515.interwise.co.kr/"}
                    target="_blank"
                    className="flex gap-4 items-center"
                  >
                    <Image
                      src="/img/site_link.png"
                      alt="figma"
                      width={28}
                      height={28}
                    />
                    배포 링크
                    <Image
                      src={"/img/more_link_b.png"}
                      alt="링크 이동"
                      width={14}
                      height={14}
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li
            ref={(el) => {
              projectItemsRef.current[3] = el;
            }}
            className="p-4 py-8 lg:p-12 border-b flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-20"
          >
            <figure>
              <Image
                src={"/img/shop.png"}
                width={460}
                height={365}
                alt="fitmon"
              />
            </figure>
            <div className="flex-col flex gap-6">
              <h3 className="text-3xl sm:text-4xl items-center flex gap-4 sm:gap-6">
                <span className="text-2xl font-bold">04</span>
                <strong>알싸한 홍어</strong>
              </h3>
              <p className="text-base sm:text-lg leading-8">
                인천 홍어 전문 대표 브랜드, 알싸한 홍어
                <br />
                <strong>디자인 및 퍼블리싱 기여도 100%</strong> | 디자인
                소요기간 2~3일 | 퍼블리싱 7일
              </p>
              <ul className="flex flex-wrap gap-2">
                <li className="px-5 py-2 rounded-3xl border border-gray-300 bg-black text-white font-semibold">
                  카페24 쇼핑몰 커스텀
                </li>
                <li className="px-5 py-2 rounded-3xl border border-gray-300 font-semibold">
                  HTML/CSS/JS
                </li>
                <li className="px-5 py-2 rounded-3xl border border-gray-300 font-semibold">
                  PHOTOSHOP
                </li>
              </ul>
              <ul className="text-xl font-bold flex flex-col sm:flex-row gap-6 sm:gap-10">
                <li>
                  <Link
                    href={"/img/alssahan1.png"}
                    className="flex gap-4 items-center"
                    target="_blank"
                  >
                    <Image
                      src="/img/ps-icon.png"
                      alt="figma"
                      width={24}
                      height={32}
                    />
                    디자인 상세 링크
                    <Image
                      src={"/img/more_link_b.png"}
                      alt="링크 이동"
                      width={14}
                      height={14}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"https://xn--ow4bp6b7il84cp8a.com/"}
                    target="_blank"
                    className="flex gap-4 items-center"
                  >
                    <Image
                      src="/img/site_link.png"
                      alt="figma"
                      width={28}
                      height={28}
                    />
                    배포 링크
                    <Image
                      src={"/img/more_link_b.png"}
                      alt="링크 이동"
                      width={14}
                      height={14}
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li
            ref={(el) => {
              projectItemsRef.current[4] = el;
            }}
            className="p-4 py-8 lg:p-12 border-b flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-20"
          >
            <figure>
              <Image
                src={"/img/seahwa.png"}
                width={460}
                height={365}
                alt="fitmon"
              />
            </figure>
            <div className="flex-col flex gap-6">
              <h3 className="text-3xl sm:text-4xl items-center flex gap-4 sm:gap-6">
                <span className="text-2xl font-bold">05</span>
                <strong>세화엔스텍</strong>
              </h3>
              <p className="text-base sm:text-lg leading-8">
                폐수 수탁처리업, 환경플랜트사업 분야, 환경오염 방지시설업,
                귀금속 재생사업 우수 업체 세화엔스텍
                <br />
                <strong>디자인 및 퍼블리싱 기여도 100%</strong> | 디자인
                소요기간 2~3일 | 퍼블리싱 10일
              </p>
              <ul className="flex flex-wrap gap-2">
                <li className="px-5 py-2 rounded-3xl border border-gray-300 bg-black text-white font-semibold">
                  하드코딩
                </li>
                <li className="px-5 py-2 rounded-3xl border border-gray-300 font-semibold">
                  HTML/CSS/JS
                </li>
                <li className="px-5 py-2 rounded-3xl border border-gray-300 font-semibold">
                  PHOTOSHOP
                </li>
              </ul>
              <ul className="text-xl font-bold flex flex-col sm:flex-row gap-6 sm:gap-10">
                <li>
                  <Link
                    href={"/img/seahwa1.png"}
                    className="flex gap-4 items-center"
                    target="_blank"
                  >
                    <Image
                      src="/img/ps-icon.png"
                      alt="figma"
                      width={24}
                      height={32}
                    />
                    디자인 상세 링크
                    <Image
                      src={"/img/more_link_b.png"}
                      alt="링크 이동"
                      width={14}
                      height={14}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"https://sehwaetc.com/default/"}
                    target="_blank"
                    className="flex gap-4 items-center"
                  >
                    <Image
                      src="/img/site_link.png"
                      alt="figma"
                      width={28}
                      height={28}
                    />
                    배포 링크
                    <Image
                      src={"/img/more_link_b.png"}
                      alt="링크 이동"
                      width={14}
                      height={14}
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
