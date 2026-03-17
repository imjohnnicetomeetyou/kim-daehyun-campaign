"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { VISIONS } from "@/lib/data";

export default function VisionPreview() {
  return (
    <section className="py-32 bg-[#F4F4F5] relative overflow-hidden">
      {/* Background Enhancements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,_rgba(230,0,18,0.03)_0%,_transparent_70%)] blur-[80px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,_rgba(197,160,89,0.04)_0%,_transparent_70%)] blur-[100px]" />
        
        {/* Subtle dot pattern */}
        <div 
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: "radial-gradient(rgba(0,0,0,0.05) 1px, transparent 1px)",
            backgroundSize: "24px 24px"
          }}
        />
      </div>

      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-1 bg-[#E60012]" />
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#E60012]">Our Vision 2026</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black text-[#050505] leading-[1.1] tracking-tighter break-keep"
            >
              수성구의 내일,<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E60012] to-[#ff4d57]">7가지 약속</span>으로 증명합니다
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link href="/vision" className="btn-secondary rounded-full">
              전체 공약 보기
            </Link>
          </motion.div>
        </div>

        {/* Modern Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VISIONS.slice(0, 4).map((vision, i) => {
            const isDarkCard = i === 0 || i === 3; // Make large cards dark for high contrast
            return (
              <motion.div
                key={vision.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={isDarkCard ? 'lg:col-span-2' : ''}
              >
                <Link
                  href={`/vision#vision-${vision.id}`}
                  className={`group relative overflow-hidden rounded-[2rem] p-8 md:p-10 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-full block
                    ${isDarkCard ? 'bg-[#050505] text-white shadow-lg min-h-[360px]' : 'bg-[#F4F4F5] text-[#050505] min-h-[360px] border border-black/5'}
                  `}
                >
                  {/* Background Giant Number */}
                  <div className="absolute -right-6 -bottom-10 pointer-events-none select-none z-0">
                    <span 
                      className={`text-[12rem] font-black leading-none ${isDarkCard ? 'text-white/5' : 'text-black/5'}`}
                    >
                      {vision.id}
                    </span>
                  </div>

                  {/* Dynamic Background Hover Effect */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"
                    style={{ background: `radial-gradient(circle at 100% 100%, ${vision.color}${isDarkCard ? '30' : '15'} 0%, transparent 70%)` }}
                  />

                  {/* Top Row: Number & Icon */}
                  <div className="flex justify-between items-start relative z-10">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold tracking-widest uppercase mb-1" style={{ color: vision.color }}>
                        Vision 0{vision.id}
                      </span>
                      <span 
                        className={`text-5xl md:text-6xl font-black ${isDarkCard ? 'text-white' : 'text-black'}`} 
                      >
                        0{vision.id}
                      </span>
                    </div>
                    <div 
                      className={`w-14 h-14 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500 flex-shrink-0 ${isDarkCard ? 'bg-white/10' : 'bg-white'}`} 
                      style={{ color: vision.color }}
                    >
                      <div className="w-6 h-6 rounded-full border-[3px]" style={{ borderColor: "currentColor" }} />
                    </div>
                  </div>

                  {/* Bottom Row: Text */}
                  <div className="relative z-10 mt-12 md:mt-16">
                    <h3 className={`text-2xl md:text-3xl font-bold mb-4 transition-transform duration-500 ${isDarkCard ? 'text-white group-hover:-translate-y-1' : 'text-[#050505]'}`}>
                      {vision.shortTitle}
                    </h3>
                    <p className={`font-medium leading-relaxed line-clamp-2 transition-colors duration-500 ${isDarkCard ? 'text-white/60 group-hover:text-white/90' : 'text-[#737373] group-hover:text-[#050505]'}`}>
                      {vision.details[0]}
                    </p>
                    
                    {/* Arrow reveal */}
                    <div className="absolute right-0 bottom-0 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg" style={{ backgroundColor: vision.color }}>
                        →
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}