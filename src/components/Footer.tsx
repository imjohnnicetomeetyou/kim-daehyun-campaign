"use client";

import Link from "next/link";
import { Facebook, Instagram, Youtube, ArrowUpRight } from "lucide-react";
import { NAV_ITEMS, CANDIDATE } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white pt-24 pb-12 overflow-hidden border-t border-white/10">
      <div className="section-container">
        
        {/* Top Massive Branding */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-10">
          <div className="flex flex-col">
            <h2 className="text-[5rem] md:text-[8rem] font-black leading-none tracking-tighter text-white/5 uppercase">
              KIM DAE HYUN
            </h2>
            <div className="text-4xl md:text-6xl font-black mt-[-2rem] md:mt-[-3rem] z-10 text-white tracking-tight">
              격이 다르다, 대세는 김대현
            </div>
          </div>
          
          <div className="flex gap-4">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#E60012] hover:border-[#E60012] transition-all duration-300">
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>

        {/* Links & Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-16 mb-16">
          
          <div className="md:col-span-2">
            <div className="inline-flex items-center gap-3 px-4 py-1 rounded-full border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#E60012]" />
              <span className="text-xs font-bold tracking-widest uppercase">제9회 전국동시지방선거</span>
            </div>
            <p className="text-xl font-bold text-white mb-2">김대현 수성구청장 예비후보</p>
            <p className="text-[#737373] text-sm max-w-sm leading-relaxed">
              수성구의 새로운 미래를 위해 행동하는 구청장. <br/>
              교육, 정치, 경제, 문화 1번지 수성구를 만듭니다.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white/40 tracking-[0.2em] uppercase mb-6">Menu</h4>
            <ul className="space-y-4">
              {NAV_ITEMS.map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="group flex items-center justify-between text-white/70 hover:text-white font-bold transition-colors">
                    {item.label}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white/40 tracking-[0.2em] uppercase mb-6">Contact</h4>
            <ul className="space-y-4 text-white/70 text-sm font-medium">
              <li>대구광역시 수성구 달구벌대로 000</li>
              <li>T. 053-000-0000</li>
              <li>E. camp@kimdaehyun.com</li>
            </ul>
            <Link href="/participate" className="inline-block mt-8 text-[#C5A059] font-bold border-b border-[#C5A059] pb-1 hover:text-white hover:border-white transition-colors">
              자원봉사 및 후원 문의
            </Link>
          </div>

        </div>

        {/* Bottom Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs font-medium text-white/30">
          <p>© {new Date().getFullYear()} Kim Dae Hyun Campaign. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">개인정보처리방침</Link>
            <span>본 사이트는 공직선거법을 준수합니다.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}