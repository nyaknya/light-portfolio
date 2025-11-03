import type { Metadata } from "next";
import { Noto_Sans_KR, Work_Sans} from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
});

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "심은주 포트폴리오",
  description: "만나서 반갑습니다! 만능 엔터테이너 심은주의 포트폴리오 사이트입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${workSans.variable} ${notoSansKr.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
