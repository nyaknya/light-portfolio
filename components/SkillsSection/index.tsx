import Image from "next/image";

export default function SkillsSection() {
  return (
    <section className="w-full py-40">
      <div className="w-[1440px] h-[680px] m-auto">
        <h3 className="font-bold text-3xl mb-6">Prontend Skills</h3>
        <div className="flex justify-between gap-10">
          <div className="">
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
          <div className="">
            <h4 className="text-2xl font-bold mb-4">사용해본 경험이 있어요</h4>
            <ul className="grid grid-cols-4 gap-5">
              <li className="col-span-2 flex items-center gap-5">
                <figure className="rounded-4xl border border-gray-300 size-16 justify-center items-center flex">
                  <Image
                    src="/img/stylecomponent-icon.png"
                    width={50}
                    height={50}
                    alt="스타일 컴포넌트"
                  />
                </figure>
                <figure className="rounded-4xl border border-gray-300 size-16 justify-center items-center flex -ml-10 bg-white">
                  <Image
                    src="/img/scss-icon.png"
                    width={48}
                    height={48}
                    alt="scss"
                  />
                </figure>
                <figure className="rounded-4xl border border-gray-300 size-16 justify-center items-center flex -ml-10 bg-white">
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
          <div className="">
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
        <div className="grid grid-cols-12 mt-10">
          <div className="col-span-6">
            <h3 className="font-bold text-3xl mb-6">Design Skills</h3>
            <ul className="grid grid-cols-6 gap-5">
              <li className="col-span-2 flex items-center gap-5">
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
              <li className="col-span-2 flex items-center gap-5">
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
              <li className="col-span-2 flex items-center gap-5">
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
            <h3 className="font-bold text-3xl mb-6">Another Skills</h3>
            <ul className="grid grid-cols-6 gap-5">
              <li className="col-span-2 flex items-center gap-5">
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
              <li className="col-span-2 flex items-center gap-5">
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
              <li className="col-span-2 flex items-center gap-5">
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
