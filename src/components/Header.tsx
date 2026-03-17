"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_ITEMS } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isDarkBg = pathname === "/" || pathname === "/vision";
  const headerBg = scrolled ? "bg-white/60 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.05)] border-b border-white/50" : "bg-transparent";
  const textColor = scrolled ? "text-black" : (isDarkBg ? "text-white" : "text-black");
  const logoColor = scrolled ? "#E60012" : (isDarkBg ? "#FFFFFF" : "#E60012");

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}>
        <div className="section-container flex items-center justify-between h-20 md:h-24">
          
          {/* Logo */}
          <Link href="/" className="relative z-[60] flex items-center gap-3 group">
            <div className="flex flex-col leading-none">
              <span className="text-2xl md:text-3xl font-black tracking-tighter transition-colors duration-300" style={{ color: menuOpen ? '#E60012' : logoColor }}>
                김대현
              </span>
              <span className={`text-[10px] md:text-xs font-bold tracking-[0.2em] transition-colors duration-300 ${menuOpen ? 'text-black' : (scrolled ? 'text-gray-500' : (isDarkBg ? 'text-white/70' : 'text-gray-500'))}`}>
                수성구청장 예비후보
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {NAV_ITEMS.map((item) => {
              const active = pathname.startsWith(item.href) && item.href !== "/" || (item.href === "/" && pathname === "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-bold uppercase tracking-widest relative group transition-colors duration-300 ${textColor} hover:text-[#E60012]`}
                >
                  {item.label}
                  <span className={`absolute -bottom-2 left-0 h-[2px] bg-[#E60012] transition-all duration-300 ${active ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              );
            })}
            <Link
              href="/participate"
              className={`ml-4 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 border-2 ${scrolled ? 'border-black text-black hover:bg-black hover:text-white' : (isDarkBg ? 'border-white text-white hover:bg-white hover:text-black' : 'border-black text-black hover:bg-black hover:text-white')}`}
            >
              함께하기
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden relative z-[60] w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-current mix-blend-difference"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={24} color="black" /> : <Menu size={24} color="white" />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile/Mega Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at top right)" }}
            animate={{ clipPath: "circle(150% at top right)" }}
            exit={{ clipPath: "circle(0% at top right)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 bg-[#F4F4F5] flex flex-col justify-center px-6 md:px-20"
          >
            <nav className="flex flex-col gap-6">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: "easeOut" }}
                >
                  <Link
                    href={item.href}
                    className="text-5xl md:text-7xl font-black text-black hover:text-[#E60012] transition-colors tracking-tighter"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-8"
              >
                <Link
                  href="/participate"
                  className="inline-flex items-center gap-4 text-2xl font-bold text-white bg-[#E60012] px-8 py-4 rounded-full"
                >
                  함께하기 <ArrowRight />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}