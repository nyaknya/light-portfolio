import Image from "next/image";
import Link from "next/link";

export default function DevProject(){
  return(
    <section className="w-full py-20">
      <div className="w-[1440px] m-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-5xl font-bold">Dev Projects</h2>
          <p className="text-2xl font-bold flex gap-1">
            지난 3년간 100개 이상의 프로젝트를 제작했습니다. <Link href={"https://diamond-nerve-9e2.notion.site/44dc3f3a136a463e9a9152f4577c15e9?source=copy_link"} className="text-[#34CDE8] flex gap-1"  target="_blank"> 더 많은 프로젝트는 이쪽에서 조회해보세요. <Image width={12} height={14} src={"/img/more_link.svg"} alt="더보기" /></Link>
            </p>
        </div>
      </div>
    </section>
  )
}