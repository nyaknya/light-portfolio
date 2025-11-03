"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Toggle from "../Toggle";

interface HeaderProps {
  isDark: boolean;
  onToggle: () => void;
}

export default function Header({ isDark, onToggle }: HeaderProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollY / windowHeight) * 100;

      setScrollProgress(progress);
      setIsVisible(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ backgroundColor: "var(--background)" }}
    >
      <span
        className="block h-1 transition-all duration-300"
        style={{
          width: `${scrollProgress}%`,
          backgroundColor: "var(--progress-bar)",
        }}
        aria-hidden
      />
      <div className="w-[1440px] m-auto py-3 flex justify-between items-center">
        <div className="flex gap-2.5 items-center">
          <h1>
            <Link href="/">
              <Image
                src={isDark ? "/img/logo-dark.png" : "/img/logo.png"}
                width={70}
                height={60}
                alt="로고"
              />
            </Link>
          </h1>
        </div>
        <nav>
          <ul className="flex items-center gap-10 dark:text-white">
            <li className="mt-2">
              <Toggle isOn={isDark} onChange={onToggle} />
            </li>
            <li>
              <Link href="#introduce">About</Link>
            </li>
            <li>
              <Link href="#project">Project</Link>
            </li>
            <li>
              <Link href="#contact">
                <span className="block py-2 px-8 rounded-4xl bg-black dark:bg-white text-white dark:text-black">
                  Contact
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
