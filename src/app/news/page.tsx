"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NEWS_ARTICLES = [
  {
    id: 1,
    date: "2026.03.16",
    title: "김대현 수성구청장 예비후보, '글로벌 랜드마크 수성못 조성'",
    excerpt: "수성못~두산오거리~수성아트피아를 잇는 친환경 녹지보도를 구축해 글로벌 랜드마크로 조성하겠다는 공약을 발표했다.",
    url: "https://n.news.naver.com/article/088/0001001435?sid=100",
  },
  {
    id: 2,
    date: "2026.03.16",
    title: "김대현, 'AI 기반 미래산업 도시로… 수성구 경쟁력 높이겠다'",
    excerpt: "수성알파시티, 연호지구에 AI기업지원시스템을 구축하고 글로벌 디지털 밸리를 조성하는 경제 공약을 발표했다.",
    url: "http://www.weeklytoday.com/news/articleView.html?idxno=765255",
  },
  {
    id: 3,
    date: "2026.03.16",
    title: "김대현, '수성못~두산오거리 글로벌 랜드마크 조성'",
    excerpt: "동대구역~수성못 '대통령의 길'로 명명하여 조국 근대화의 성지로 역사를 보존하겠다고 밝혔다.",
    url: "https://www.kbmaeil.com/article/20260316500052",
  },
  {
    id: 4,
    date: "2026.03.14",
    title: "'서울 강남 능가하는 교육수도'… 김대현, 교육 공약 발표",
    excerpt: "구청장 직속 교육특별 담당관 제도 도입으로 명품교육 마스터플랜을 수립하겠다고 밝혔다.",
    url: "https://news.bbsi.co.kr/news/articleView.html?idxno=4071918",
  },
  {
    id: 5,
    date: "2026.03.13",
    title: "김대현, '수성구 미래 30년 설계'… 대한민국 대표 교육수도 공약 제시",
    excerpt: "AI안전 환경길 조성으로 아이들이 안전하게 꿈을 키우는 도시를 만들겠다고 강조했다.",
    url: "https://www.kbmaeil.com/article/20260313500214",
  },
  {
    id: 6,
    date: "2026.03.13",
    title: "김대현, '수성의 미래 30년 다시 설계' 교육 공약 발표",
    excerpt: "격이 다르다 대세는 김대현 — 실행형 구청장으로서 수성구의 미래를 설계하겠다고 선언했다.",
    url: "http://m.breaknews.com/1191607",
  },
  {
    id: 7,
    date: "2026.03.11",
    title: "김대현 수성구청장 예비후보, 출마 선언 이후 행보 본격화",
    excerpt: "현장 중심의 구민 소통을 강화하며 실행형 구청장으로서의 행보를 본격화했다.",
    url: "https://www.kbmaeil.com/article/20260311500289",
  },
  {
    id: 8,
    date: "2026.03.10",
    title: "김대현 수성구청장 예비후보, 수성구 미래 비전 제시",
    excerpt: "교육 정치 경제 문화 1번지 수성구를 위한 7대 비전을 구체적으로 제시했다.",
    url: "https://www.dg1news.com/news/articleView.html?idxno=22217",
  },
  {
    id: 9,
    date: "2026.02.26",
    title: "김대현, 수성구청장 출마 공식 선언",
    excerpt: "김대현 예비후보가 2026년 6월 지방선거에서 수성구청장 출마를 공식 선언했다.",
    url: "https://biz.heraldcorp.com/article/10683631",
  },
];

function OgImage({ url, title }: { url: string; title: string }) {
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/og-image?url=${encodeURIComponent(url)}`)
      .then((r) => r.json())
      .then((data) => {
        setImgSrc(data.imageUrl);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [url]);

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[#F4F4F5]">
        <div className="w-8 h-8 border-2 border-[#E60012] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!imgSrc) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[#F4F4F5] text-black/20 font-bold text-sm">
        {title.slice(0, 20)}...
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={imgSrc}
      alt={title}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
  );
}

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-white text-[#050505] pt-24 md:pt-32 pb-32">

      <section className="section-container mb-24 border-b border-black/10 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-[#E60012] font-bold tracking-[0.3em] uppercase mb-4 block text-sm">Press & Media</span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9]">
            활동 소식
          </h1>
        </motion.div>
      </section>

      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {NEWS_ARTICLES.map((article, i) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
                <div className="aspect-[4/3] bg-[#F4F4F5] rounded-2xl mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <OgImage url={article.url} title={article.title} />
                </div>
                <div className="flex gap-4 items-center mb-4">
                  <span className="text-xs font-bold bg-[#050505] text-white px-3 py-1 rounded-full">보도자료</span>
                  <span className="text-sm font-bold text-[#737373]">{article.date}</span>
                </div>
                <h2 className="text-2xl font-black leading-snug mb-3 group-hover:text-[#E60012] transition-colors">
                  {article.title}
                </h2>
                <p className="text-[#737373] font-medium leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </a>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
