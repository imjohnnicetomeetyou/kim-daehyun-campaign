"use client";

import { motion } from "framer-motion";

export default function ParticipatePage() {
  return (
    <main className="min-h-screen bg-white text-[#050505] pt-24 md:pt-32 pb-32">
      
      <section className="section-container relative mb-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl"
        >
          <span className="text-[#E60012] font-bold tracking-[0.3em] uppercase mb-4 block text-sm">Get Involved</span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] mb-8">
            새로운 수성,<br/>당신과 함께.
          </h1>
          <p className="text-2xl font-bold text-[#737373]">
            혼자서는 할 수 없지만, 함께라면 반드시 해냅니다.
          </p>
        </motion.div>
      </section>

      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Volunteer Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#F4F4F5] rounded-[2rem] p-8 md:p-12 border border-black/5"
          >
            <h2 className="text-3xl font-black mb-2">자원봉사 신청</h2>
            <p className="text-[#737373] font-medium mb-10">현장에서 함께 뛸 동지를 찾습니다.</p>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2">이름</label>
                  <input type="text" className="w-full bg-white px-4 py-4 rounded-xl border-none outline-none focus:ring-2 focus:ring-[#E60012] transition-shadow" placeholder="홍길동" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">연락처</label>
                  <input type="tel" className="w-full bg-white px-4 py-4 rounded-xl border-none outline-none focus:ring-2 focus:ring-[#E60012] transition-shadow" placeholder="010-0000-0000" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">관심분야</label>
                <select className="w-full bg-white px-4 py-4 rounded-xl border-none outline-none focus:ring-2 focus:ring-[#E60012] transition-shadow appearance-none">
                  <option>유세지원</option>
                  <option>사무보조</option>
                  <option>SNS 홍보</option>
                </select>
              </div>
              <button className="w-full btn-primary py-5 rounded-xl text-lg mt-4">
                신청하기
              </button>
            </form>
          </motion.div>

          {/* Contact / Donation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-8"
          >
            <div className="bg-[#050505] text-white rounded-[2rem] p-8 md:p-12 relative overflow-hidden flex-1">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,_#E60012_0%,_transparent_60%)] opacity-30" />
              <div className="relative z-10">
                <h2 className="text-3xl font-black mb-2">후원 안내</h2>
                <p className="text-white/60 font-medium mb-10">깨끗한 정치를 위한 작은 정성</p>
                <div className="p-6 bg-white/10 rounded-xl backdrop-blur-md border border-white/20">
                  <p className="text-xl font-bold mb-1">농협 000-00-00000</p>
                  <p className="text-sm text-white/50">예금주: 김대현 후원회</p>
                </div>
                <p className="text-xs text-white/40 mt-6">
                  * 후원금은 정치자금법에 따라 투명하게 관리되며 세액공제 혜택을 받으실 수 있습니다.
                </p>
              </div>
            </div>

            <div className="bg-[#F4F4F5] rounded-[2rem] p-8 md:p-12 border border-black/5">
              <h2 className="text-2xl font-black mb-4">선거사무소 오시는 길</h2>
              <p className="font-bold text-[#050505]">대구광역시 수성구 달구벌대로 000</p>
              <p className="text-[#737373] text-sm mt-2 mb-6">수성구청역 1번 출구 도보 3분</p>
              <a href="#" className="inline-flex items-center gap-2 text-[#E60012] font-bold hover:underline">
                지도 보기 →
              </a>
            </div>
          </motion.div>

        </div>
      </section>
    </main>
  );
}