"use client";

import { motion } from "framer-motion";
import { CANDIDATE } from "@/lib/data";
import Image from "next/image";

export default function ProfileSnapshot() {
  return (
    <section className="py-32 bg-[#050505] text-white overflow-hidden relative">
      
      {/* Dynamic Background Enhancements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#111111_0%,_#050505_100%)]" />
        <div className="absolute top-[20%] left-[-20%] w-[70vw] h-[70vw] rounded-full bg-[radial-gradient(circle,_rgba(230,0,18,0.05)_0%,_transparent_60%)] blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,_rgba(197,160,89,0.06)_0%,_transparent_60%)] blur-[100px]" />
        
        {/* Subtle noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
          style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=0 0 200 200 xmlns=http://www.w3.org/2000/svg%3E%3Cfilter id=noiseFilter%3E%3CfeTurbulence type=fractalNoise baseFrequency=0.8 numOctaves=3 stitchTiles=stitch/%3E%3C/filter%3E%3Crect width=100%25 height=100%25 filter=url(%23noiseFilter)/%3E%3C/svg%3E')" }}
        />
      </div>

      {/* Background Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03] z-0">
        <span className="text-[25vw] font-black tracking-tighter leading-none whitespace-nowrap">
          LEADER
        </span>
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left: Editorial Image / Philosophy */}
          <div className="lg:col-span-5 relative h-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-[600px] lg:h-full min-h-[600px] rounded-t-[100px] rounded-b-[20px] overflow-hidden bg-[#111] border border-white/10 group"
            >
              {/* Image with subtle zoom on hover */}
              <Image
                src="/images/candidate-front-original.jpg"
                alt="김대현 후보"
                fill
                className="object-cover object-center filter grayscale contrast-125 opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000"
              />
              
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-10 left-10 right-10 z-10">
                <div className="w-12 h-1 bg-[#C5A059] mb-6" />
                <h3 className="text-3xl font-bold leading-snug mb-4 drop-shadow-lg">
                  "말이 아닌 실행으로, <br/>결과로 증명합니다."
                </h3>
                <p className="text-white/50 text-sm tracking-widest uppercase">
                  {CANDIDATE.positioning}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Brutalist Timeline */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                경험이 만든<br/>
                <span className="text-[#E60012]">압도적 역량</span>
              </h2>
              <p className="text-xl text-white/60 font-light max-w-xl leading-relaxed break-keep">
                중앙과 지방을 아우르는 탄탄한 행정 경험.<br />
                수성구의 도약을 위해 준비된 리더의 길을 걸어왔습니다.
              </p>
            </motion.div>

            <div className="space-y-8">
              {CANDIDATE.career.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative pl-8 md:pl-12 border-l border-white/20 hover:border-[#E60012] transition-colors duration-500 py-2"
                >
                  {/* Glowing Node */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[5px] w-[9px] h-[9px] bg-white rounded-full group-hover:bg-[#E60012] group-hover:shadow-[0_0_15px_#E60012] transition-all duration-500" />
                  
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                    <span className="text-[#C5A059] font-mono text-xl md:text-2xl font-bold w-24 shrink-0">
                      {item.year}
                    </span>
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">
                        {item.title}
                      </h4>
                      <p className="text-white/50 text-sm md:text-base font-medium group-hover:text-white/80 transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Education Tag Array */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-16 flex flex-wrap gap-3"
            >
              {CANDIDATE.education.map((edu, i) => (
                <span key={i} className="px-5 py-2.5 rounded-full border border-white/20 text-sm font-medium text-white/70 hover:bg-white hover:text-black transition-colors duration-300 cursor-default">
                  {edu}
                </span>
              ))}
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}