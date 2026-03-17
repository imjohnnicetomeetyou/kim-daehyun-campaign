"use client";

import { motion } from "framer-motion";
import { CANDIDATE } from "@/lib/data";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F4F4F5] text-[#050505] pt-24 md:pt-32 pb-32">
      
      {/* Editorial Header */}
      <section className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b border-black/10 pb-12"
        >
          <div>
            <span className="text-[#E60012] font-bold tracking-[0.3em] uppercase mb-4 block text-sm">About Candidate</span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9]">
              진짜가<br/>왔다.
            </h1>
          </div>
          <div className="max-w-md text-right md:text-left">
            <p className="text-xl md:text-2xl font-bold text-[#737373] leading-snug break-keep">
              수성구의 새로운 도약을 위해 준비된 리더,<br />
              김대현의 이야기를 시작합니다.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Massive Statement & Photo */}
      <section className="section-container mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[3/4] bg-[#050505] rounded-[2rem] overflow-hidden relative flex items-center justify-center group"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_#262626_0%,_#050505_100%)] z-0" />
            <Image
              src="/images/candidate-front-original.jpg"
              alt="김대현 후보 프로필"
              fill
              className="object-cover object-center z-10 transition-transform duration-1000 group-hover:scale-105 filter grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-20 pointer-events-none" />
            <div className="absolute bottom-10 left-10 z-30 pointer-events-none">
              <p className="text-[#C5A059] font-bold tracking-[0.2em] drop-shadow-md">CANDIDATE PORTRAIT</p>
            </div>
          </motion.div>

          <div className="flex flex-col justify-center">
            <motion.h3 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black leading-[1.2] mb-10"
            >
              "행정은 디테일입니다.<br/>
              차갑고 딱딱한 행정이 아닌,<br/>
              <span className="text-[#E60012]">따뜻하고 품격 있는 행정</span>으로<br/>
              증명하겠습니다."
            </motion.h3>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-12"
            >
              <div>
                <h4 className="text-sm font-bold text-[#737373] tracking-widest uppercase mb-4 border-b border-black/10 pb-2">학력사항</h4>
                <ul className="space-y-3">
                  {CANDIDATE.education.map((edu, i) => (
                    <li key={i} className="text-xl font-bold text-[#050505]">{edu}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold text-[#737373] tracking-widest uppercase mb-4 border-b border-black/10 pb-2">주요경력</h4>
                <ul className="space-y-6">
                  {CANDIDATE.career.slice(0, 4).map((item, i) => (
                    <li key={i} className="group">
                      <div className="flex gap-4 items-baseline">
                        <span className="text-sm font-black text-[#C5A059] w-12">{item.year.slice(-2)}</span>
                        <div>
                          <p className="text-xl font-bold text-[#050505] group-hover:text-[#E60012] transition-colors">{item.title}</p>
                          <p className="text-[#737373] font-medium">{item.desc}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee Separator */}
      <div className="w-full bg-[#E60012] py-6 overflow-hidden mb-32 transform -rotate-1 relative z-10">
        <div className="animate-marquee flex gap-12 text-white font-black text-3xl tracking-widest whitespace-nowrap">
          <span>새로운 리더십</span><span>◆</span>
          <span>더 나은 수성구</span><span>◆</span>
          <span>말이 아닌 실행으로</span><span>◆</span>
          <span>새로운 리더십</span><span>◆</span>
          <span>더 나은 수성구</span><span>◆</span>
          <span>말이 아닌 실행으로</span><span>◆</span>
        </div>
      </div>

    </main>
  );
}