import Image from "next/image";
import Link from "next/link";

export default function DesignProject() {
  return (
    <section className="w-full py-20">
      <div className="w-[1440px] m-auto">
        <div className="flex justify-between items-center py-8 mb-4">
          <h2 className="text-5xl font-bold">Design Works</h2>
          <p className="text-2xl font-bold flex gap-1">
            클릭해서 더 큰 이미지로 확인해보세요!
          </p>
        </div>
        <ul className="flex gap-10 items-end">
          <li><Link href={"/img/detail_all.png"} target="_blank"><h3 className="text-2xl font-bold mb-3">상세페이지</h3> <Image src="/img/detail_01.png" width={340} height={620} alt="상세페이지 예시1" /></Link></li>
          <li><Link href={"/img/detail_all.png"} target="_blank"><Image src="/img/detail_02.png" width={340} height={620} alt="상세페이지 예시2" /></Link></li>
          <li><Link href={"/img/sato_detail.png"} target="_blank"><h3 className="text-2xl font-bold mb-3">랜딩페이지</h3> <Image src="/img/detail_03.png" width={340} height={620} alt="상세페이지 예시3" /></Link></li>
          <li><Link href={"/img/nulsol.jpg"} target="_blank"><Image src="/img/detail_04.png" width={340} height={620} alt="상세페이지 예시4" /></Link></li>
        </ul>

        <h3 className="pt-20 text-2xl mb-5 font-bold">PPT 등 이외 여러 디자인</h3>
        <ul className="grid grid-cols-3 gap-5">
          <li className="col-span-1 relative"><Link href={"/img/cosmos.pdf"} target="_blank"><span className="absolute right-8 bottom-4 text-white">PPT</span> <Image src="/img/ppt_01.png" width={460} height={260} alt="기타 디자인 예시1" /></Link></li>
          <li className="col-span-1 relative"><Link href={"/img/task.png"} target="_blank"><span className="absolute right-8 bottom-4 text-black">PPT</span> <Image src="/img/ppt_02.png" width={460} height={260} alt="기타 디자인 예시2" /></Link></li>
          <li className="col-span-1 relative"><Link href={"/img/insta_01.png"} target="_blank"><span className="absolute right-8 bottom-4 text-white">인스타 배너</span> <Image src="/img/ppt_03.png" width={460} height={260} alt="기타 디자인 예시3" /></Link></li>
          <li className="col-span-1 relative"><Link href={"/img/insta_02.png"} target="_blank"><span className="absolute right-8 bottom-4 text-white">인스타 배너</span> <Image src="/img/ppt_04.png" width={460} height={260} alt="기타 디자인 예시4" /></Link></li>
          <li className="col-span-1 relative"><Link href={"/img/web.png"} target="_blank"><span className="absolute right-8 bottom-4 text-white">웹 배너</span> <Image src="/img/ppt_05.png" width={460} height={260} alt="기타 디자인 예시5" /></Link></li>
          <li className="col-span-1 relative"><Link href={"/img/popup.png"} target="_blank"><span className="absolute right-8 bottom-4 text-white">팝업</span> <Image src="/img/ppt_06.png" width={460} height={260} alt="기타 디자인 예시6" /></Link></li>
        </ul>
      </div>
    </section>
  );
}
