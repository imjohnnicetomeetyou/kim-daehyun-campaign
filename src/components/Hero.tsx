"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yImage = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative w-full h-[100svh] bg-black overflow-hidden flex items-center justify-center">
      {/* Absolute Background Video/Pattern */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#050505]">
        {/* Animated Aurora Mesh Gradients */}
        <motion.div 
          animate={{ 
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.3, 1.1, 1.4, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[50%] -left-[20%] w-[120vw] h-[120vw] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(230,0,18,0.25)_0%,_transparent_50%)] blur-[120px] mix-blend-screen"
        />
        <motion.div 
          animate={{ 
            rotate: [360, 270, 180, 90, 0],
            scale: [1.2, 1, 1.5, 1.1, 1.2],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] right-[-20%] w-[100vw] h-[100vw] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(197,160,89,0.2)_0%,_transparent_50%)] blur-[120px] mix-blend-screen"
        />
        <motion.div 
          animate={{ 
            x: [0, 100, -100, 0],
            y: [0, -100, 100, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-20%] left-[20%] w-[80vw] h-[80vw] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.08)_0%,_transparent_60%)] blur-[100px] mix-blend-screen"
        />
        
        {/* Topographic 3D Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: '4vw 4vw',
            transform: 'perspective(1000px) rotateX(70deg) translateY(-100px) scale(3)',
            transformOrigin: 'top center',
            maskImage: 'linear-gradient(to bottom, black 10%, transparent 60%)'
          }}
        />

        {/* Modern noise texture to tie it all together */}
        <div 
          className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=0 0 200 200 xmlns=http://www.w3.org/2000/svg%3E%3Cfilter id=noiseFilter%3E%3CfeTurbulence type=fractalNoise baseFrequency=0.8 numOctaves=3 stitchTiles=stitch/%3E%3C/filter%3E%3Crect width=100%25 height=100%25 filter=url(%23noiseFilter)/%3E%3C/svg%3E')" }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        
        {/* Top Space for Header */}
        <div className="h-24 md:h-32" />

        {/* Center Massive Typography */}
        <motion.div 
          style={{ y: yText, opacity: opacityText }}
          className="flex-1 flex flex-col justify-center items-center text-center px-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-2xl shadow-[0_8px_32px_rgba(255,255,255,0.1)] mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#E60012] animate-pulse" />
            <span className="text-white/90 text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
              수성구청장 예비후보 국민의힘
            </span>
          </motion.div>

          <div className="overflow-hidden mb-2 pt-4">
            <motion.h1 
              initial={{ y: "120%", rotate: 3, opacity: 0 }}
              animate={{ y: 0, rotate: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-[4rem] md:text-[8rem] lg:text-[11rem] font-black text-white leading-[0.85] tracking-tighter"
            >
              격이 다르다
            </motion.h1>
          </div>
          <div className="overflow-hidden pb-4">
            <motion.h1 
              initial={{ y: "120%", rotate: -3, opacity: 0 }}
              animate={{ y: 0, rotate: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-[4rem] md:text-[8rem] lg:text-[11rem] font-black text-transparent leading-[0.9] tracking-tighter"
              style={{ WebkitTextStroke: "2px rgba(255,255,255,0.9)" }}
            >
              대세는 <span className="text-[#E60012]" style={{ WebkitTextStroke: "0px" }}>김대현</span>
            </motion.h1>
          </div>
        </motion.div>

        {/* Bottom Marquee & CTA */}
        <div className="w-full relative pb-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 z-20"
          >
            <a href="/vision" className="group flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-[0_10px_30px_rgba(255,255,255,0.2)]">
              7대 비전 확인하기
              <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white group-hover:bg-[#E60012] group-hover:rotate-45 transition-all duration-300">
                <ArrowRight size={16} />
              </div>
            </a>
          </motion.div>

          {/* Endless Marquee */}
          <div className="w-full border-t border-b border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] py-4 overflow-hidden flex">
            <div className="animate-marquee flex gap-12 text-white/50 text-2xl md:text-4xl font-black tracking-widest whitespace-nowrap">
              <span>수성구의 새로운 시대</span>
              <span className="text-[#E60012]">◆</span>
              <span>비전 2026</span>
              <span className="text-[#C5A059]">◆</span>
              <span>김대현</span>
              <span className="text-[#E60012]">◆</span>
              <span>말이 아닌 실행으로</span>
              <span className="text-[#C5A059]">◆</span>
              <span>수성구의 새로운 시대</span>
              <span className="text-[#E60012]">◆</span>
              <span>비전 2026</span>
              <span className="text-[#C5A059]">◆</span>
              <span>김대현</span>
              <span className="text-[#E60012]">◆</span>
              <span>말이 아닌 실행으로</span>
              <span className="text-[#C5A059]">◆</span>
              <span>수성구의 새로운 시대</span>
              <span className="text-[#E60012]">◆</span>
              <span>비전 2026</span>
              <span className="text-[#C5A059]">◆</span>
              <span>김대현</span>
              <span className="text-[#E60012]">◆</span>
              <span>말이 아닌 실행으로</span>
              <span className="text-[#C5A059]">◆</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom fade out to blend with the next section naturally */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent z-20 pointer-events-none" />
    </section>
  );
}