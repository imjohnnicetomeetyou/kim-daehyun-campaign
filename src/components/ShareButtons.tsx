"use client";

import { useState, useCallback } from "react";
import { Link2, Facebook, Twitter, MessageCircle } from "lucide-react";

interface ShareButtonsProps {
  title: string;
  url?: string;
  variant?: "dark" | "light";
}

export default function ShareButtons({ title, url, variant = "dark" }: ShareButtonsProps) {
  const isLight = variant === "light";
  const [copied, setCopied] = useState(false);
  const [activeBtn, setActiveBtn] = useState<string | null>(null);

  const getUrl = useCallback(() => {
    if (url) return url;
    if (typeof window !== "undefined") return window.location.href;
    return "";
  }, [url]);

  const handleKakao = () => {
    setActiveBtn("kakao");
    setTimeout(() => setActiveBtn(null), 200);

    const shareUrl = getUrl();
    if (typeof window !== "undefined" && (window as unknown as { Kakao?: { isInitialized?: () => boolean; Share?: { sendDefault: (opts: unknown) => void } } }).Kakao?.isInitialized?.()) {
      const Kakao = (window as unknown as { Kakao: { Share: { sendDefault: (opts: unknown) => void } } }).Kakao;
      Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: title,
          description: "김대현 수성구청장 예비후보 공약을 확인해보세요.",
          imageUrl: "https://example.com/og-image.jpg",
          link: { mobileWebUrl: shareUrl, webUrl: shareUrl },
        },
      });
    } else if (typeof navigator !== "undefined" && navigator.share) {
      navigator.share({ title, url: shareUrl }).catch(() => {});
    } else {
      // Fallback: copy to clipboard with kakao context
      navigator.clipboard?.writeText(shareUrl).catch(() => {});
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleCopyLink = async () => {
    setActiveBtn("copy");
    setTimeout(() => setActiveBtn(null), 200);
    const shareUrl = getUrl();
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for environments without clipboard API
      const el = document.createElement("textarea");
      el.value = shareUrl;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleFacebook = () => {
    setActiveBtn("facebook");
    setTimeout(() => setActiveBtn(null), 200);
    const shareUrl = encodeURIComponent(getUrl());
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, "_blank", "width=600,height=400");
  };

  const handleTwitter = () => {
    setActiveBtn("twitter");
    setTimeout(() => setActiveBtn(null), 200);
    const shareUrl = encodeURIComponent(getUrl());
    const text = encodeURIComponent(`${title} | 김대현 수성구청장 예비후보`);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${shareUrl}`, "_blank", "width=600,height=400");
  };

  return (
    <div className="relative">
      {/* Buttons Row */}
      <div className="flex flex-wrap gap-3">
        {/* 카카오톡 */}
        <button
          onClick={handleKakao}
          style={{
            backgroundColor: "#FEE500",
            color: "#3C1E1E",
            transform: activeBtn === "kakao" ? "scale(0.95)" : "scale(1)",
            transition: "transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-bold text-sm cursor-pointer border-0"
          aria-label="카카오톡으로 공유하기"
          title="카카오톡 공유"
        >
          <MessageCircle size={16} strokeWidth={2.5} />
          카카오톡 공유
        </button>

        {/* 링크 복사 */}
        <button
          onClick={handleCopyLink}
          style={{
            transform: activeBtn === "copy" ? "scale(0.95)" : "scale(1)",
            transition: "transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)",
            backgroundColor: copied ? "#059669" : isLight ? "#ffffff" : "#171717",
            color: isLight && !copied ? "#171717" : "#ffffff",
          }}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-bold text-sm cursor-pointer border-0"
          aria-label="링크 복사하기"
        >
          <Link2 size={16} strokeWidth={2.5} />
          {copied ? "복사됨!" : "링크 복사"}
        </button>

        {/* Facebook */}
        <button
          onClick={handleFacebook}
          style={{
            transform: activeBtn === "facebook" ? "scale(0.95)" : "scale(1)",
            transition: "transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)",
            backgroundColor: isLight ? "#ffffff" : "#1877F2",
            color: isLight ? "#1877F2" : "#ffffff",
          }}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-bold text-sm cursor-pointer border-0"
          aria-label="Facebook으로 공유하기"
        >
          <Facebook size={16} strokeWidth={2.5} />
          Facebook 공유
        </button>

        {/* X (Twitter) */}
        <button
          onClick={handleTwitter}
          style={{
            transform: activeBtn === "twitter" ? "scale(0.95)" : "scale(1)",
            transition: "transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)",
            backgroundColor: isLight ? "#ffffff" : "#000000",
            color: isLight ? "#171717" : "#ffffff",
          }}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-bold text-sm cursor-pointer border-0"
          aria-label="X(트위터)로 공유하기"
        >
          <Twitter size={16} strokeWidth={2.5} />
          X 공유
        </button>
      </div>

      {/* Toast notification */}
      <div
        aria-live="polite"
        style={{
          position: "fixed",
          bottom: "2rem",
          left: "50%",
          transform: copied ? "translate(-50%, 0)" : "translate(-50%, 1rem)",
          opacity: copied ? 1 : 0,
          pointerEvents: "none",
          transition: "opacity 0.3s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          zIndex: 9999,
        }}
      >
        <div
          className="flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white shadow-2xl"
          style={{ backgroundColor: "#059669" }}
        >
          <Link2 size={14} strokeWidth={2.5} />
          링크가 복사되었습니다
        </div>
      </div>
    </div>
  );
}
