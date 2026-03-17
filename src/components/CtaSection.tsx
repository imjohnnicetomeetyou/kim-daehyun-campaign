"use client";

import { motion } from "framer-motion";
import ShareButtons from "@/components/ShareButtons";

export default function CtaSection() {
  return (
    <section className="relative py-32 lg:py-48 bg-[#E60012] overflow-hidden flex items-center justify-center">
      {/* Dynamic Background Graphic Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_#ff3344_0%,_#E60012_100%)]" />

        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] right-[-10%] w-[80vw] h-[80vw] rounded-full bg-white/20 blur-[150px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-30%] left-[-20%] w-[70vw] h-[70vw] rounded-full bg-black/30 blur-[120px]"
        />

        <svg className="absolute inset-0 w-full h-full opacity-[0.15] mix-blend-overlay" xmlns="http://www.w3.org/2000/svg">
          <motion.line
            initial={{ x1: "-100%", x2: "0%", y1: "100%", y2: "0%" }}
            animate={{ x1: "100%", x2: "200%", y1: "0%", y2: "-100%" }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            stroke="white" strokeWidth="3"
          />
          <motion.line
            initial={{ x1: "-50%", x2: "50%", y1: "120%", y2: "20%" }}
            animate={{ x1: "150%", x2: "250%", y1: "20%", y2: "-80%" }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 5 }}
            stroke="white" strokeWidth="1"
          />
          <line x1="0" y1="100%" x2="100%" y2="0" stroke="black" strokeWidth="2" opacity="0.5" />
        </svg>

        <div
          className="absolute inset-0 opacity-[0.2] mix-blend-overlay"
          style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=0 0 200 200 xmlns=http://www.w3.org/2000/svg%3E%3Cfilter id=noiseFilter%3E%3CfeTurbulence type=fractalNoise baseFrequency=0.85 numOctaves=3 stitchTiles=stitch/%3E%3C/filter%3E%3Crect width=100%25 height=100%25 filter=url(%23noiseFilter)/%3E%3C/svg%3E')" }}
        />
      </div>

      <div className="section-container relative z-10 text-center flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white/80 font-bold tracking-[0.3em] uppercase mb-8"
        >
          Share The Vision
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-9xl font-black text-white leading-none tracking-tighter mb-6"
        >
          격이 다르다,<br/>대세는 김대현
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/70 text-lg md:text-xl font-medium mb-12 max-w-lg"
        >
          수성구의 변화, 주변에 널리 알려주세요
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <ShareButtons title="격이 다르다, 대세는 김대현 — 교육 정치 경제 문화 1번지 수성구를 위한 7대 비전" variant="light" />
        </motion.div>
      </div>
    </section>
  );
}
