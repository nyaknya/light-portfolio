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
    <li 
      className={`w-10 h-10 md:w-14 md:h-14 xl:w-20 xl:h-20 ${isFill ? 'rounded-2xl' : 'rounded-xl'} shadow-xl flex justify-center items-center`}
      style={!isFill ? { backgroundColor: 'var(--skill-bg)' } : {}}
    >
      <Image
        src={src}
        alt={name}
        width={width}
        height={height}
        className={`${isFill ? "object-fill" : ""} xl:w-9 xl:h-auto w-6`}
      />
    </li>
  );
}