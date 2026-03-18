"use client";

import { useEffect, useRef } from "react";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";
import { profile } from "@/src/data/profile";

/* 各行の遅延 */
const headline = [
  { text: "あなたの「作りたい」を、", gradient: false },
  { text: "伴走して形にします。", gradient: true },
];

export function Hero() {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springX = useSpring(mouseX, { stiffness: 40, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 18 });

  const glowX = useTransform(springX, [0, 1], ["-20%", "120%"]);
  const glowY = useTransform(springY, [0, 1], ["-20%", "120%"]);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[75svh] sm:min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 sm:px-8"
    >
      {/* ── 背景レイヤー ── */}

      {/* Mouse tracking glow */}
      <motion.div
        className="pointer-events-none absolute rounded-full"
        style={{
          width: "min(800px, 130vw)",
          height: "min(800px, 130vw)",
          left: glowX,
          top: glowY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.16) 0%, rgba(99,102,241,0.04) 45%, transparent 68%)",
          filter: "blur(40px)",
        }}
      />

      {/* Top static glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[70vh]"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% -10%, rgba(99,102,241,0.14) 0%, transparent 65%)",
        }}
      />

      {/* Floating orbs */}
      <div className="animate-float-slow pointer-events-none absolute left-[8%] top-[20%] h-64 w-64 rounded-full opacity-30 blur-[80px]"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)" }} />
      <div className="animate-float-medium pointer-events-none absolute right-[10%] top-[35%] h-48 w-48 rounded-full opacity-20 blur-[70px]"
        style={{ background: "radial-gradient(circle, rgba(52,211,153,0.2) 0%, transparent 70%)" }} />
      <div className="animate-float-fast pointer-events-none absolute bottom-[20%] left-[20%] h-40 w-40 rounded-full opacity-15 blur-[60px]"
        style={{ background: "radial-gradient(circle, rgba(244,114,182,0.18) 0%, transparent 70%)" }} />

      {/* Fine grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* ── コンテンツ ── */}
      <div className="relative z-10 w-full max-w-5xl text-center pt-16 sm:pt-20">

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
          className="mb-10 inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          <span className="text-[11px] font-medium tracking-wide text-slate-300">
            {profile.availableText}
          </span>
        </motion.div>

        {/* Main headline — each line slides up individually */}
        <div className="mb-8 space-y-1">
          {headline.map((line, i) => (
            <div key={i} className="overflow-hidden leading-none">
              <motion.div
                initial={{ y: "105%", opacity: 0, filter: "blur(12px)" }}
                animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                transition={{
                  duration: 1.0,
                  delay: 0.35 + i * 0.13,
                  ease: [0.19, 1.0, 0.22, 1.0],
                }}
                style={{
                  fontSize: "clamp(1.75rem, 6.5vw, 5.0rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                  paddingBottom: "0.08em",
                }}
                className={
                  line.gradient
                    ? "bg-gradient-to-r from-indigo-300 via-violet-300 to-indigo-400 bg-clip-text text-transparent"
                    : "text-white"
                }
              >
                {line.text}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Decorative divider with name */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.85, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="mb-8 flex items-center justify-center gap-3 sm:gap-5"
        >
          <span className="hidden h-px w-12 bg-gradient-to-r from-transparent to-white/15 sm:block sm:w-28" />
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="whitespace-nowrap text-sm font-semibold tracking-wider text-white/80 sm:tracking-widest">
              {profile.name}
            </span>
            <span className="h-3.5 w-px bg-white/15" />
            <span className="whitespace-nowrap font-mono text-[10px] tracking-[0.12em] text-indigo-400/80 uppercase sm:text-[11px] sm:tracking-[0.18em]">
              {profile.titleShort}
            </span>
          </div>
          <span className="hidden h-px w-12 bg-gradient-to-l from-transparent to-white/15 sm:block sm:w-28" />
        </motion.div>

        {/* Sub copy */}
        <motion.p
          initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.19, 1, 0.22, 1] }}
          className="mx-auto mb-12 max-w-md text-sm leading-relaxed text-slate-400 sm:text-base"
        >
          AI・設計・開発の力を統合して、
          <br />
          ビジネスの課題を価値に変える。
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 pb-10 sm:pb-20"
        >
          <button
            onClick={() =>
              document.querySelector("#works")?.scrollIntoView({ behavior: "smooth" })
            }
            className="group relative overflow-hidden rounded-full bg-indigo-500 px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:shadow-indigo-400/35 active:scale-[0.97]"
          >
            {/* Shimmer overlay */}
            <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-500 group-hover:translate-x-[100%]" />
            <span className="relative">実績を見る</span>
          </button>
          <button
            onClick={() =>
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-full border border-white/[0.09] bg-white/[0.03] px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-medium text-slate-300 backdrop-blur-sm transition-all duration-200 hover:border-white/[0.18] hover:bg-white/[0.07] hover:text-white active:scale-[0.97]"
          >
            お問い合わせ
          </button>
        </motion.div>

      </div>

      {/* Scroll indicator — growing line */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        onClick={() =>
          document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-label="下にスクロール"
      >
        <span className="relative h-10 w-px overflow-hidden rounded-full bg-white/[0.06]">
          <span
            className="animate-scroll-line absolute inset-x-0 top-0 origin-top rounded-full bg-gradient-to-b from-indigo-400 to-transparent"
            style={{ height: "100%" }}
          />
        </span>
      </motion.button>
    </section>
  );
}
