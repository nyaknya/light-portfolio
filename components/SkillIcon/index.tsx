import Image from "next/image";

interface SkillIconProps {
  name: string;
  src: string;
  isFill: boolean;
}

export default function SkillIcon({ name, src, isFill }: SkillIconProps) {
  return (
    <li className="w-20 h-20 rounded-2xl shadow-xl flex justify-center items-center">
      <Image
        src={src}
        alt={name}
        width={80}
        height={78}
        className={isFill ? "object-fill" : ""}
      />
    </li>
  );
}
