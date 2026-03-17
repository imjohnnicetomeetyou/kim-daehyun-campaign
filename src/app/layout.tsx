import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FontSizeProvider from "@/components/FontSizeProvider";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "김대현 | 수성구청장 예비후보 - 격이 다르다 대세는 김대현",
  description:
    "김대현 수성구청장 예비후보 공식 캠페인 — 교육수도, 디지털 복지, 스마트 경제, 소통 행정, 문화 클러스터, 자산 가치, 글로벌 수성못. 격이 다르다 대세는 김대현.",
  keywords:
    "김대현, 수성구청장, 예비후보, 국민의힘, 교육수도, 디지털복지, 스마트경제, 소통행정, 문화클러스터, 자산가치, 수성못, 7대비전, 대구 수성구",
  authors: [{ name: "김대현 캠프" }],
  openGraph: {
    type: "website",
    title: "김대현 | 수성구청장 예비후보 - 격이 다르다 대세는 김대현",
    description: "교육 정치 경제 문화 1번지 수성구를 위한 7대 비전. 김대현이 해냅니다.",
    siteName: "김대현 캠프",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "김대현 | 수성구청장 예비후보 - 격이 다르다 대세는 김대현",
    description: "교육 정치 경제 문화 1번지 수성구를 위한 7대 비전. 김대현이 해냅니다.",
  },
  other: {
    "theme-color": "#E61E2B",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSansKR.variable} text-size-normal`}>
      <body className="antialiased" style={{ fontFamily: "var(--font-noto-sans-kr), sans-serif" }}>
        <FontSizeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </FontSizeProvider>
      </body>
    </html>
  );
}
