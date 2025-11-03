"use client";

import Header from "@/components/header";
import IntroduceSection from "@/components/IntroduceSection";
import MainVisual from "@/components/MainVisual";
import SkillsSection from "@/components/SkillsSection";
import Lenis from "lenis";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isOn, setIsOn] = useState<boolean>(false);

  useEffect(() => {
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
        <MainVisual isOn={isOn} toggleDark={() => setIsOn(!isOn)} />
        <IntroduceSection />
        <SkillsSection />
      </main>
      <footer></footer>
    </>
  );
}
