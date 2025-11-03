"use client";

import Header from "@/components/header";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isOn, setIsOn] = useState<boolean>(true);

  return (
    <>
      {/* <Header /> 임시 헤더 주석(스크롤 내리고 넣을거라)*/}
      <main>
        <section className="w-full h-screen flex justify-center items-center">
          <div className="w-[1440px] h-[680px] m-auto flex flex-col justify-between items-center ">
            <div className="flex justify-between items-center w-full">
              <Image src="/img/logo.png" width={70} height={62} alt="로고" />
              <p className="text-xl font-medium">만나서 반갑습니다!</p>
              <span className="text-xl font-medium">Sim Eun ju</span>
            </div>
            <div className="relative">
              <h2 className="text-8xl font-medium italic">Portfolio</h2>
              <span className="text-[#F3F5F7] font-sans text-[240px] blur-md font-bold absolute right-1/2 bottom-1/2 translate-1/2 -z-10">
                2025
              </span>
            </div>
            <div className="flex justify-between w-full">
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
              <ul className="flex self-center gap-5">
                <li className="w-20 h-20 rounded-2xl shadow-xl flex justify-center items-center">
                  <Image
                    src="/img/hero_photoshop.png"
                    alt="포토샵 아이콘"
                    width={80}
                    height={78}
                    className="object-fill"
                  />
                </li>
                <li className="w-20 h-20 rounded-2xl shadow-xl flex justify-center items-center">
                  <Image
                    src="/img/hero_ai.png"
                    alt="일러스트레이터 아이콘"
                    width={80}
                    height={78}
                    className="object-fill"
                  />
                </li>
                <li className="w-20 h-20 rounded-xl shadow-xl flex justify-center items-center">
                  <Image
                    src="/img/hero_figma.png"
                    alt="피그마 아이콘"
                    width={40}
                    height={60}
                  />
                </li>
                <li className="w-20 h-20 rounded-xl shadow-xl flex justify-center items-center">
                  <Image
                    src="/img/hero_next.png"
                    alt="넥스트 아이콘"
                    width={60}
                    height={54}
                  />
                </li>
                <li className="w-20 h-20 rounded-xl shadow-xl flex justify-center items-center">
                  <Image
                    src="/img/hero_react.png"
                    alt="리액트 아이콘"
                    width={56}
                    height={56}
                  />
                </li>
                <li className="w-20 h-20 rounded-xl shadow-xl flex justify-center items-center">
                  <Image
                    src="/img/hero_js.png"
                    alt="자바스크립트 아이콘"
                    width={48}
                    height={48}
                  />
                </li>
                <li className="w-20 h-20 rounded-xl shadow-xl flex justify-center items-center">
                  <Image
                    src="/img/hero_ts.png"
                    alt="타입스크립트 아이콘"
                    width={48}
                    height={48}
                  />
                </li>
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
