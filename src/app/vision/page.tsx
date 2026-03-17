"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Share2, Link as LinkIcon, X } from "lucide-react";
import { VISIONS } from "@/lib/data";

function ShareMenu({ vision, isOpen, onClose }: { vision: typeof VISIONS[0], isOpen: boolean, onClose: () => void }) {
  const [copied, setCopied] = useState(false);
  
  // Create share URL (assuming domain is kimdaehyun.com for this mockup)
  const currentUrl = typeof window !== 'undefined' ? `${window.location.origin}/vision#vision-${vision.id}` : '';
  const shareTitle = `[김대현 7대 비전] ${vision.title}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleKakaoShare = () => {
    // In a real app, you would initialize Kakao SDK and use Kakao.Share.sendDefault
    const url = `https://share.kakao.com/send?appkey=YOUR_APP_KEY&ka=YOUR_KA_INFO&text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(currentUrl)}`;
    window.open(url, '_blank', 'width=600,height=600');
  };

  const handleBandShare = () => {
    const url = `https://band.us/plugin/share?body=${encodeURIComponent(`${shareTitle}\n${currentUrl}`)}&route=${encodeURIComponent(currentUrl)}`;
    window.open(url, '_blank', 'width=600,height=600');
  };

  const handleFacebookShare = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
    window.open(url, '_blank', 'width=600,height=600');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 bottom-full mb-4 w-72 bg-[#1A1A1A] border border-white/20 rounded-2xl p-5 shadow-2xl z-50 origin-bottom-left"
        >
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-sm font-bold text-white">비전 공유하기</h4>
            <button onClick={onClose} className="text-white/50 hover:text-white transition-colors">
              <X size={16} />
            </button>
          </div>
          
          <div className="grid grid-cols-4 gap-3 mb-4">
            <button onClick={handleKakaoShare} className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-full bg-[#FAE100] text-[#371D1E] flex items-center justify-center font-black group-hover:scale-110 transition-transform">
                K
              </div>
              <span className="text-[10px] text-white/70">카카오톡</span>
            </button>
            <button onClick={handleBandShare} className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-full bg-[#00C300] text-white flex items-center justify-center font-black group-hover:scale-110 transition-transform">
                B
              </div>
              <span className="text-[10px] text-white/70">네이버 밴드</span>
            </button>
            <button onClick={handleFacebookShare} className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-full bg-[#1877F2] text-white flex items-center justify-center font-black group-hover:scale-110 transition-transform">
                f
              </div>
              <span className="text-[10px] text-white/70">페이스북</span>
            </button>
            <button onClick={handleCopyLink} className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all">
                <LinkIcon size={18} />
              </div>
              <span className="text-[10px] text-white/70">{copied ? '복사됨!' : '링크복사'}</span>
            </button>
          </div>
          
          <div className="p-3 bg-black rounded-lg border border-white/10">
            <p className="text-xs text-white/40 truncate">{currentUrl}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function VisionSection({ vision, index }: { vision: typeof VISIONS[0], index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isShareOpen, setIsShareOpen] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  return (
    <section 
      ref={ref} 
      id={`vision-${vision.id}`}
      className="relative min-h-[100svh] flex items-center py-32 overflow-hidden border-b border-white/5 scroll-mt-20"
    >
      {/* Dynamic Background per Vision */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-20">
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-[10%] right-[10%] w-[40vw] h-[40vw] rounded-full blur-[120px] mix-blend-screen"
          style={{ backgroundColor: vision.color }}
        />
      </div>

      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left: Sticky Number & Title */}
          <div className="lg:col-span-5 h-full relative">
            <div className="lg:sticky lg:top-1/3">
              <motion.div style={{ opacity, scale }}>
                <span className="text-[10rem] md:text-[14rem] font-black leading-none text-transparent tracking-tighter" 
                      style={{ WebkitTextStroke: `2px rgba(255,255,255,0.1)` }}>
                  0{vision.id}
                </span>
                <div className="mt-[-3rem] md:mt-[-5rem] ml-2 md:ml-6 relative">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-1" style={{ backgroundColor: vision.color }} />
                      <span className="text-sm font-bold tracking-[0.3em] uppercase" style={{ color: vision.color }}>
                        {vision.shortTitle}
                      </span>
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight break-keep mb-8">
                    {vision.title}
                  </h2>
                  
                  {/* Share Button (Desktop) */}
                  <div className="relative hidden lg:block">
                    <button 
                      onClick={() => setIsShareOpen(!isShareOpen)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white text-sm font-bold transition-all duration-300 backdrop-blur-md"
                    >
                      <Share2 size={16} />
                      비전 공유하기
                    </button>
                    <ShareMenu vision={vision} isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right: Scrolling Details & "Product" Features */}
          <div className="lg:col-span-7">
            <motion.div style={{ y: y2 }} className="space-y-12">
              
              {/* Main Statement */}
              <div className="bg-[#111] p-8 md:p-12 rounded-[2rem] border border-white/5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-700" 
                     style={{ backgroundImage: `linear-gradient(to bottom right, transparent, ${vision.color})` }} />
                <h3 className="text-xl md:text-2xl font-bold text-white/90 leading-relaxed break-keep relative z-10">
                  {vision.details[0]}
                </h3>
                
                {/* Share Button (Mobile - rendered inside the card for better flow) */}
                <div className="relative mt-8 lg:hidden z-20">
                  <button 
                    onClick={() => setIsShareOpen(!isShareOpen)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-black text-white text-sm font-bold transition-all duration-300 w-full justify-center"
                  >
                    <Share2 size={16} />
                    이 공약 공유하기
                  </button>
                  {/* Mobile Share Menu drops down instead of up to avoid clipping */}
                  <AnimatePresence>
                    {isShareOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full mt-4 w-full bg-[#1A1A1A] border border-white/20 rounded-2xl p-5 shadow-2xl z-50 origin-top"
                      >
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="text-sm font-bold text-white">비전 공유하기</h4>
                          <button onClick={() => setIsShareOpen(false)} className="text-white/50 hover:text-white transition-colors">
                            <X size={16} />
                          </button>
                        </div>
                        
                        <div className="flex justify-around mb-4">
                          <button onClick={() => {
                            const url = `https://share.kakao.com/send?appkey=YOUR_APP_KEY&ka=YOUR_KA_INFO&text=${encodeURIComponent(`[김대현 7대 비전] ${vision.title}`)}&url=${encodeURIComponent(typeof window !== 'undefined' ? `${window.location.origin}/vision#vision-${vision.id}` : '')}`;
                            window.open(url, '_blank');
                          }} className="flex flex-col items-center gap-2">
                            <div className="w-12 h-12 rounded-full bg-[#FAE100] text-[#371D1E] flex items-center justify-center font-black">K</div>
                            <span className="text-[10px] text-white/70">카카오톡</span>
                          </button>
                          <button onClick={() => {
                            const url = `https://band.us/plugin/share?body=${encodeURIComponent(`[김대현 7대 비전] ${vision.title}\n`)}&route=${encodeURIComponent(typeof window !== 'undefined' ? `${window.location.origin}/vision#vision-${vision.id}` : '')}`;
                            window.open(url, '_blank');
                          }} className="flex flex-col items-center gap-2">
                            <div className="w-12 h-12 rounded-full bg-[#00C300] text-white flex items-center justify-center font-black">B</div>
                            <span className="text-[10px] text-white/70">밴드</span>
                          </button>
                          <button onClick={() => {
                            navigator.clipboard.writeText(typeof window !== 'undefined' ? `${window.location.origin}/vision#vision-${vision.id}` : '');
                            alert('링크가 복사되었습니다!');
                          }} className="flex flex-col items-center gap-2">
                            <div className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center"><LinkIcon size={18}/></div>
                            <span className="text-[10px] text-white/70">링크복사</span>
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Detailed Action Plans (Simulating deep content) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {vision.details.slice(1).map((detail, di) => (
                  <div key={di} className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-colors">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: `${vision.color}20`, color: vision.color }}>
                      <span className="font-black">{di + 1}</span>
                    </div>
                    <p className="text-white/80 font-medium leading-relaxed break-keep text-lg">
                      {detail}
                    </p>
                  </div>
                ))}
                
                {/* Fallback mockup for additional detail to make it feel like a deep dive if details are short */}
                {vision.details.length === 1 && (
                  <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-colors md:col-span-2">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: `${vision.color}20`, color: vision.color }}>
                      <span className="font-black">2</span>
                    </div>
                    <p className="text-white/80 font-medium leading-relaxed break-keep text-lg">
                      해당 공약을 실현하기 위한 구체적인 예산 확보 및 타임라인을 투명하게 공개하고, 주민들의 의견을 적극 수렴하여 강력하게 추진하겠습니다.
                    </p>
                  </div>
                )}
              </div>

              {/* Keyword Tags */}
              <div>
                <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">Key Initiatives</p>
                <div className="flex flex-wrap gap-2">
                  {vision.keywords.map((kw, ki) => (
                    <span key={ki} className="px-4 py-2 rounded-full bg-black border border-white/10 text-xs font-bold text-white/60 hover:bg-white hover:text-black transition-colors duration-300 cursor-default">
                      #{kw}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default function VisionPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      
      {/* Massive Editorial Header */}
      <section className="relative h-[80svh] flex items-center justify-center overflow-hidden">
        {/* Background Grid */}
        <div 
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
            backgroundSize: '4vw 4vw',
            transform: 'perspective(1000px) rotateX(60deg) translateY(-100px) scale(2.5)',
            transformOrigin: 'top center',
            maskImage: 'linear-gradient(to bottom, black 20%, transparent 80%)'
          }}
        />

        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-xs font-bold tracking-[0.3em] uppercase mb-8 text-[#C5A059]">
              Vision 2026 Blueprint
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-[0.95] mb-8 break-keep">
              수성구의 내일,<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E60012] via-[#ff4d57] to-[#C5A059]">
                7가지 약속
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/50 font-bold max-w-2xl mx-auto break-keep leading-relaxed">
              말이 아닌 실행으로, 구민이 체감할 수 있는 완벽한 변화를 만들어내겠습니다. 스크롤하여 구체적인 마스터플랜을 확인하세요.
            </p>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest font-bold text-white/50">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </section>

      {/* The 7 Visions (Storytelling Scroll) */}
      <div className="relative">
        {VISIONS.map((vision, i) => (
          <VisionSection key={vision.id} vision={vision} index={i} />
        ))}
      </div>

    </main>
  );
}