"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Heart,
  Cpu,
  MessageCircle,
  Palette,
  TrendingUp,
  Globe,
  ArrowLeft,
  ArrowRight,
  LayoutGrid,
  type LucideProps,
} from "lucide-react";
import { VISIONS } from "@/lib/data";
import ShareButtons from "@/components/ShareButtons";
import { type ComponentType } from "react";
import { type Variants, type Transition } from "framer-motion";

// Map icon string → lucide component
const ICON_MAP: Record<string, ComponentType<LucideProps>> = {
  GraduationCap,
  Heart,
  Cpu,
  MessageCircle,
  Palette,
  TrendingUp,
  Globe,
};

const EASE: Transition = { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] };

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { ...EASE, delay: i * 0.12 },
  }),
};

export default function VisionDetailPage() {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : Array.isArray(params.slug) ? params.slug[0] : "";

  const index = VISIONS.findIndex((v) => v.slug === slug);
  const vision = index !== -1 ? VISIONS[index] : null;

  if (!vision) {
    return (
      <main className="min-h-screen bg-[#050505] flex flex-col items-center justify-center gap-8 text-white px-6">
        <p className="text-2xl font-bold text-white/60">비전을 찾을 수 없습니다</p>
        <Link
          href="/vision"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors font-bold text-sm"
        >
          <LayoutGrid size={16} />
          전체 비전 보기
        </Link>
      </main>
    );
  }

  const IconComponent = ICON_MAP[vision.icon] ?? Globe;
  const visionNumber = String(vision.id).padStart(2, "0");
  const prevVision = index > 0 ? VISIONS[index - 1] : null;
  const nextVision = index < VISIONS.length - 1 ? VISIONS[index + 1] : null;

  const pageUrl =
    typeof window !== "undefined"
      ? window.location.href
      : `https://example.com/vision/${vision.slug}`;

  return (
    <main className="min-h-screen bg-[#050505] text-white">

      {/* ── Hero ── */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden pb-16 md:pb-24">
        {/* Watermark number */}
        <div
          className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
          aria-hidden="true"
        >
          <span
            className="font-black leading-none"
            style={{
              fontSize: "clamp(12rem, 40vw, 30rem)",
              WebkitTextStroke: `2px ${vision.color}22`,
              color: "transparent",
              letterSpacing: "-0.05em",
            }}
          >
            {visionNumber}
          </span>
        </div>

        {/* Color accent gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 60% 50% at 80% 60%, ${vision.color}20 0%, transparent 70%)`,
          }}
        />

        {/* Bottom border accent */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: `linear-gradient(to right, transparent, ${vision.color}60, transparent)` }}
        />

        <div className="section-container relative z-10 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {/* Short badge */}
            <motion.div custom={0} variants={fadeUp} className="mb-6 flex items-center gap-4">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold tracking-wider"
                style={{ backgroundColor: `${vision.color}25`, color: vision.color }}
              >
                <IconComponent size={16} strokeWidth={2.5} />
                Vision {visionNumber}
              </span>
              <span
                className="text-sm font-bold tracking-[0.25em] uppercase"
                style={{ color: vision.color }}
              >
                {vision.shortTitle}
              </span>
            </motion.div>

            {/* Main title */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1] max-w-4xl break-keep"
            >
              {vision.title}
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="bg-white text-[#171717] py-20 md:py-32">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">

            {/* Icon accent */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-16 flex items-center gap-5"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${vision.color}15` }}
              >
                <IconComponent size={32} strokeWidth={2} style={{ color: vision.color }} />
              </div>
              <div
                className="h-px flex-1"
                style={{ background: `linear-gradient(to right, ${vision.color}40, transparent)` }}
              />
            </motion.div>

            {/* Detail paragraphs */}
            <div className="space-y-10 mb-16">
              {vision.details.map((detail, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex gap-6 items-start"
                >
                  <span
                    className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-black mt-1"
                    style={{ backgroundColor: vision.color }}
                  >
                    {i + 1}
                  </span>
                  <p className="text-lg md:text-xl font-medium leading-relaxed text-[#171717] break-keep">
                    {detail}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Keywords */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#737373] mb-4">
                핵심 키워드
              </p>
              <div className="flex flex-wrap gap-3">
                {vision.keywords.map((kw, ki) => (
                  <span
                    key={ki}
                    className="px-4 py-2 rounded-full text-sm font-bold tracking-wide"
                    style={{
                      backgroundColor: `${vision.color}12`,
                      color: vision.color,
                      border: `1.5px solid ${vision.color}30`,
                    }}
                  >
                    #{kw}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Share ── */}
      <section className="bg-[#F4F4F5] py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#737373] mb-3">
                Share
              </p>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-[#171717] mb-8">
                이 비전을 공유해주세요
              </h2>
              <ShareButtons title={vision.title} url={pageUrl} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Navigation ── */}
      <section className="bg-[#050505] border-t border-white/5 py-16">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">

            {/* Prev / Next */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {prevVision ? (
                <Link
                  href={`/vision/${prevVision.slug}`}
                  className="group flex items-center gap-4 p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300"
                >
                  <ArrowLeft
                    size={20}
                    className="shrink-0 text-white/40 group-hover:text-white transition-colors group-hover:-translate-x-1 duration-300"
                    style={{ transition: "transform 0.3s ease, color 0.3s ease" }}
                  />
                  <div className="min-w-0">
                    <p className="text-xs text-white/40 font-bold tracking-wider uppercase mb-1">이전 비전</p>
                    <p className="text-sm font-bold text-white/70 group-hover:text-white transition-colors truncate break-keep">
                      {prevVision.title}
                    </p>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextVision ? (
                <Link
                  href={`/vision/${nextVision.slug}`}
                  className="group flex items-center gap-4 p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 md:flex-row-reverse md:text-right"
                >
                  <div className="min-w-0">
                    <p className="text-xs text-white/40 font-bold tracking-wider uppercase mb-1">다음 비전</p>
                    <p className="text-sm font-bold text-white/70 group-hover:text-white transition-colors truncate break-keep">
                      {nextVision.title}
                    </p>
                  </div>
                  <ArrowRight
                    size={20}
                    className="shrink-0 text-white/40 group-hover:text-white transition-colors"
                    style={{ transition: "color 0.3s ease" }}
                  />
                </Link>
              ) : (
                <div />
              )}
            </div>

            {/* Back to all */}
            <div className="flex justify-center">
              <Link
                href="/vision"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/30 transition-all duration-300 text-sm font-bold text-white/70 hover:text-white"
              >
                <LayoutGrid size={15} strokeWidth={2.5} />
                전체 비전 보기
              </Link>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
