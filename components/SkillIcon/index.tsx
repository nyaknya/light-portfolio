import Image from "next/image";

interface SkillIconProps {
  name: string;
  src: string;
  isFill: boolean;
  width: number;
  height: number;
}

export default function SkillIcon({ name, src, isFill, width, height }: SkillIconProps) {
  return (
    <li className="w-20 h-20 rounded-2xl shadow-xl flex justify-center items-center">
      <Image
        src={src}
        alt={name}
        width={width}
        height={height}
        className={isFill ? "object-fill" : ""}
      />
    </li>
  );
}
