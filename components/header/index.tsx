import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full">
      <span className="w-10 bg-black block h-1" aria-hidden />
      <div className="w-[1440px] m-auto py-3 flex justify-between items-center">
        <div className="flex gap-2.5 items-center">
          <h1>
            <Link href="/">
              <Image src="/img/logo.png" width={70} height={60} alt="로고" />
            </Link>
          </h1>
          <div>테마 토글(off)</div>
        </div>
        <nav>
          <ul className="flex items-center gap-10">
            <li><Link href="#introduce"/>About</li>
            <li><Link href="#project"/>Project</li>
            <li><Link href="#contact"/><span className="block py-2 px-8 rounded-4xl bg-black text-white">Contact</span></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
