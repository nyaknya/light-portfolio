import Image from "next/image";
import Link from "next/link";

export default function DevProject() {
  return (
    <section className="w-full py-20" id="project">
      <div className="w-[1440px] m-auto">
        <div className="flex justify-between items-center py-8">
          <h2 className="text-5xl font-bold">Dev Projects</h2>
          <p className="text-2xl font-bold flex gap-1">
            지난 3년간 100개 이상의 프로젝트를 제작했습니다.{" "}
            <Link
              href={
                "https://diamond-nerve-9e2.notion.site/44dc3f3a136a463e9a9152f4577c15e9?source=copy_link"
              }
              className="text-[#34CDE8] flex gap-1"
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
          <li className="p-12 border-b flex items-center gap-20">
            <figure>
              <Image
                src={"/img/fitmon.png"}
                width={460}
                height={365}
                alt="fitmon"
              />
            </figure>
            <div className="flex-col flex gap-6">
              <h3 className="text-4xl items-center flex gap-6">
                <span className="text-2xl font-bold">01</span>{" "}
                <strong>FITMON</strong>
              </h3>
              <p className="text-lg leading-8">
                함께 챌린지를 달성하며 지속 가능한 운동을 도모하는 모임 플랫폼
                <br />
                <strong>팀프로젝트 (FE, 팀장)</strong> | FE 4인, BE 1인 | 디자인
                100% FE 25%
              </p>
              <ul className="flex gap-2">
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
              <ul className="text-xl font-bold flex gap-10">
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
                  <Link href={"https://fitmon-phi.vercel.app/"} target="_blank" className="flex gap-4 items-center">
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
          <li className="p-12 border-b flex items-center gap-20">
            <figure>
              <Image
                src={"/img/livingart.png"}
                width={460}
                height={365}
                alt="fitmon"
              />
            </figure>
            <div className="flex-col flex gap-6">
              <h3 className="text-4xl items-center flex gap-6">
                <span className="text-2xl font-bold">02</span>
                <strong>리빙아트</strong>
              </h3>
              <p className="text-lg leading-8">
                스테인레스 주방용품 전문생산기업 리빙아트<br />
                <strong>디자인 기여도 100%</strong> | 디자인 소요기간 1~2일
              </p>
              <ul className="flex gap-2">
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
              <ul className="text-xl font-bold flex gap-10">
                <li>
                  <Link
                    href={
                      ""
                    }
                    className="flex gap-4 items-center"
                    target="_blank"
                  >
                    <Image
                      src="/img/ps-icon.png"
                      alt="figma"
                      width={24}
                      height={32}
                    />
                    디자인 상세 링크(걸어야돼)
                    <Image
                      src={"/img/more_link_b.png"}
                      alt="링크 이동"
                      width={14}
                      height={14}
                    />
                  </Link>
                </li>
                <li>
                  <Link href={"https://www.livingart.co.kr/"} target="_blank" className="flex gap-4 items-center">
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
          <li className="p-12 border-b flex items-center gap-20">
            <figure>
              <Image
                src={"/img/rainbow.png"}
                width={460}
                height={365}
                alt="fitmon"
              />
            </figure>
            <div className="flex-col flex gap-6">
              <h3 className="text-4xl items-center flex gap-6">
                <span className="text-2xl font-bold">03</span>
                <strong>무지개동산</strong>
              </h3>
              <p className="text-lg leading-8">
                방문하는 반려동물 장례 / 화장 서비스, 무지개동산<br />
                <strong>디자인 및 퍼블리싱 기여도 100%</strong> | 디자인 소요기간 2~3일 | 퍼블리싱 4~5일
              </p>
              <ul className="flex gap-2">
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
              <ul className="text-xl font-bold flex gap-10">
                <li>
                  <Link
                    href={
                      ""
                    }
                    className="flex gap-4 items-center"
                    target="_blank"
                  >
                    <Image
                      src="/img/ps-icon.png"
                      alt="figma"
                      width={24}
                      height={32}
                    />
                    디자인 상세 링크(걸어야돼)
                    <Image
                      src={"/img/more_link_b.png"}
                      alt="링크 이동"
                      width={14}
                      height={14}
                    />
                  </Link>
                </li>
                <li>
                  <Link href={"http://md250515.interwise.co.kr/"} target="_blank" className="flex gap-4 items-center">
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
          <li className="p-12 border-b flex items-center gap-20">
            <figure>
              <Image
                src={"/img/shop.png"}
                width={460}
                height={365}
                alt="fitmon"
              />
            </figure>
            <div className="flex-col flex gap-6">
              <h3 className="text-4xl items-center flex gap-6">
                <span className="text-2xl font-bold">04</span>
                <strong>알싸한 홍어</strong>
              </h3>
              <p className="text-lg leading-8">
                인천 홍어 전문 대표 브랜드, 알싸한 홍어<br />
                <strong>디자인 및 퍼블리싱 기여도 100%</strong> | 디자인 소요기간 2~3일 | 퍼블리싱 7일
              </p>
              <ul className="flex gap-2">
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
              <ul className="text-xl font-bold flex gap-10">
                <li>
                  <Link
                    href={
                      ""
                    }
                    className="flex gap-4 items-center"
                    target="_blank"
                  >
                    <Image
                      src="/img/ps-icon.png"
                      alt="figma"
                      width={24}
                      height={32}
                    />
                    디자인 상세 링크(걸어야돼)
                    <Image
                      src={"/img/more_link_b.png"}
                      alt="링크 이동"
                      width={14}
                      height={14}
                    />
                  </Link>
                </li>
                <li>
                  <Link href={"https://xn--ow4bp6b7il84cp8a.com/"} target="_blank" className="flex gap-4 items-center">
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
          <li className="p-12 border-b flex items-center gap-20">
            <figure>
              <Image
                src={"/img/seahwa.png"}
                width={460}
                height={365}
                alt="fitmon"
              />
            </figure>
            <div className="flex-col flex gap-6">
              <h3 className="text-4xl items-center flex gap-6">
                <span className="text-2xl font-bold">05</span>
                <strong>세화엔스텍</strong>
              </h3>
              <p className="text-lg leading-8">
                 폐수 수탁처리업, 환경플랜트사업 분야, 환경오염 방지시설업, 귀금속 재생사업 우수 업체 세화엔스텍<br />
                <strong>디자인 및 퍼블리싱 기여도 100%</strong> | 디자인 소요기간 2~3일 | 퍼블리싱 10일
              </p>
              <ul className="flex gap-2">
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
              <ul className="text-xl font-bold flex gap-10">
                <li>
                  <Link
                    href={
                      ""
                    }
                    className="flex gap-4 items-center"
                    target="_blank"
                  >
                    <Image
                      src="/img/ps-icon.png"
                      alt="figma"
                      width={24}
                      height={32}
                    />
                    디자인 상세 링크(걸어야돼)
                    <Image
                      src={"/img/more_link_b.png"}
                      alt="링크 이동"
                      width={14}
                      height={14}
                    />
                  </Link>
                </li>
                <li>
                  <Link href={"https://sehwaetc.com/default/"} target="_blank" className="flex gap-4 items-center">
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
