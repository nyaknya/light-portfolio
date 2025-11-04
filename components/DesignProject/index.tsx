"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function DesignProject() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const detailItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const otherTitleRef = useRef(null);
  const otherItemsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    // 타이틀 애니메이션
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

    // 서브타이틀 애니메이션
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

    // 상세/랜딩페이지 아이템들
    detailItemsRef.current.forEach((item, index) => {
      if (item) {
        gsap.from(item, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.15,
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

    // 기타 디자인 타이틀
    gsap.from(otherTitleRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: otherTitleRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // 기타 디자인 아이템들
    otherItemsRef.current.forEach((item, index) => {
      if (item) {
        gsap.from(item, {
          scale: 0.9,
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
      <div className="w-full max-w-[1440px] m-auto px-5">
        <div className="flex justify-between items-center py-8 mb-4">
          <h2 ref={titleRef} className="text-5xl font-bold">
            Design Works
          </h2>
          <p ref={subtitleRef} className="text-2xl font-bold flex gap-1">
            클릭해서 더 큰 이미지로 확인해보세요!
          </p>
        </div>
        <ul className="flex gap-10 items-end">
          <li
            ref={(el) => {
              detailItemsRef.current[0] = el;
            }}
          >
            <Link href={"/img/detail_all.png"} target="_blank">
              <h3 className="text-2xl font-bold mb-3">상세페이지</h3>{" "}
              <Image
                src="/img/detail_01.png"
                width={340}
                height={620}
                alt="상세페이지 예시1"
              />
            </Link>
          </li>
          <li
            ref={(el) => {
              detailItemsRef.current[1] = el;
            }}
          >
            <Link href={"/img/detail_all.png"} target="_blank">
              <Image
                src="/img/detail_02.png"
                width={340}
                height={620}
                alt="상세페이지 예시2"
              />
            </Link>
          </li>
          <li
            ref={(el) => {
              detailItemsRef.current[2] = el;
            }}
          >
            <Link href={"/img/sato_detail.png"} target="_blank">
              <h3 className="text-2xl font-bold mb-3">랜딩페이지</h3>{" "}
              <Image
                src="/img/detail_03.png"
                width={340}
                height={620}
                alt="상세페이지 예시3"
              />
            </Link>
          </li>
          <li
            ref={(el) => {
              detailItemsRef.current[3] = el;
            }}
          >
            <Link href={"/img/nulsol.jpg"} target="_blank">
              <Image
                src="/img/detail_04.png"
                width={340}
                height={620}
                alt="상세페이지 예시4"
              />
            </Link>
          </li>
        </ul>

        <h3 ref={otherTitleRef} className="pt-20 text-2xl mb-5 font-bold">
          PPT 등 이외 여러 디자인
        </h3>
        <ul className="grid grid-cols-3 gap-5">
          <li
            ref={(el) => {
              otherItemsRef.current[0] = el;
            }}
            className="col-span-1 relative"
          >
            <Link href={"/img/cosmos.pdf"} target="_blank">
              <span className="absolute right-8 bottom-4 text-white">PPT</span>{" "}
              <Image
                src="/img/ppt_01.png"
                width={460}
                height={260}
                alt="기타 디자인 예시1"
              />
            </Link>
          </li>
          <li
            ref={(el) => {
              otherItemsRef.current[1] = el;
            }}
            className="col-span-1 relative"
          >
            <Link href={"/img/task.png"} target="_blank">
              <span className="absolute right-8 bottom-4 text-black">PPT</span>{" "}
              <Image
                src="/img/ppt_02.png"
                width={460}
                height={260}
                alt="기타 디자인 예시2"
              />
            </Link>
          </li>
          <li
            ref={(el) => {
              otherItemsRef.current[2] = el;
            }}
            className="col-span-1 relative"
          >
            <Link href={"/img/insta_01.jpg"} target="_blank">
              <span className="absolute right-8 bottom-4 text-white">
                인스타 배너
              </span>{" "}
              <Image
                src="/img/ppt_03.png"
                width={460}
                height={260}
                alt="기타 디자인 예시3"
              />
            </Link>
          </li>
          <li
            ref={(el) => {
              otherItemsRef.current[3] = el;
            }}
            className="col-span-1 relative"
          >
            <Link href={"/img/insta_02.jpg"} target="_blank">
              <span className="absolute right-8 bottom-4 text-white">
                인스타 배너
              </span>{" "}
              <Image
                src="/img/ppt_04.png"
                width={460}
                height={260}
                alt="기타 디자인 예시4"
              />
            </Link>
          </li>
          <li
            ref={(el) => {
              otherItemsRef.current[4] = el;
            }}
            className="col-span-1 relative"
          >
            <Link href={"/img/web.png"} target="_blank">
              <span className="absolute right-8 bottom-4 text-white">
                웹 배너
              </span>{" "}
              <Image
                src="/img/ppt_05.png"
                width={460}
                height={260}
                alt="기타 디자인 예시5"
              />
            </Link>
          </li>
          <li
            ref={(el) => {
              otherItemsRef.current[5] = el;
            }}
            className="col-span-1 relative"
          >
            <Link href={"/img/popup.png"} target="_blank">
              <span className="absolute right-8 bottom-4 text-white">팝업</span>{" "}
              <Image
                src="/img/ppt_06.png"
                width={460}
                height={260}
                alt="기타 디자인 예시6"
              />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
