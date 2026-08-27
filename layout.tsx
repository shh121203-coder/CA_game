import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BIO LAB | 생명공학 생활형 RPG",
  description: "식물을 기르고 배양 실험과 생명공학 퀘스트를 수행하며 연구소를 성장시키는 픽셀 아트 RPG",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
