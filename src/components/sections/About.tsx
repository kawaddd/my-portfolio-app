"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "@/src/components/ui/SectionHeader";
import { profile } from "@/src/data/profile";
import { staggerContainer, revealUp, revealLeft, revealRight, staggerSlow } from "@/src/lib/motion";

/* 強みアイコン（シンプルなテキスト絵文字で軽量化） */
const strengthIcons = ["💡", "📚", "🏃"] as const;

export function About() {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-60px 0px" });

  return (
    <section id="about" className="relative py-16 md:py-24">
      {/* Right accent glow */}
      <div
        className="pointer-events-none absolute right-0 top-1/3 h-[450px] w-[300px] opacity-15"
        style={{ background: "radial-gradient(ellipse at right, rgba(52,211,153,0.18) 0%, transparent 65%)" }}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-12">
        <SectionHeader
          index="01"
          label="About"
          title="私について"
          description="コンサル営業から Web開発・AI活用へ。課題解決を軸に、スキルの幅を広げ続けています。"
        />

        {/* ── Bio + Stats グリッド ── */}
        <div className="mb-20 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_420px] lg:gap-20 xl:gap-28">

          {/* Left: Avatar + Bio + values */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px 0px" }}
          >
            {/* Avatar */}
            <motion.div
              variants={revealUp}
              className="mb-8 flex items-center gap-5"
            >
              <div className="relative shrink-0">
                <div className="h-28 w-28 sm:h-36 sm:w-36 overflow-hidden rounded-full ring-2 ring-indigo-500/25 ring-offset-4 ring-offset-[#07080F]">
                  <img
                    src="/picture.png"
                    alt="川畑 大輝"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div
                  className="pointer-events-none absolute inset-0 rounded-full blur-2xl opacity-30"
                  style={{ background: "radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)" }}
                  aria-hidden
                />
              </div>
              <div>
                <p className="text-lg font-bold text-white/90">{profile.name}</p>
                <p className="mt-0.5 font-mono text-[11px] tracking-[0.18em] text-indigo-400/70 uppercase">{profile.titleShort}</p>
              </div>
            </motion.div>

            {/* Bio paragraphs */}
            <div className="mb-12 space-y-5">
              {profile.bio.map((paragraph, i) => (
                <motion.p
                  key={i}
                  variants={revealLeft}
                  className="text-[0.9375rem] leading-[1.95] text-slate-300 md:text-base"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Core values — 2x2 grid */}
            <motion.div variants={revealUp}>
              <p className="mb-4 text-[10px] font-semibold tracking-[0.22em] text-indigo-400/60 uppercase">
                Core Values
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {profile.values.map((v, i) => (
                  <motion.div
                    key={v.label}
                    variants={revealUp}
                    custom={i}
                    className="group relative overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.025] p-4 transition-all duration-300 hover:border-indigo-500/[0.18] hover:bg-white/[0.045]"
                  >
                    <div className="pointer-events-none absolute right-0 top-0 h-10 w-10 translate-x-3 -translate-y-3 rounded-full bg-indigo-500/10 blur-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <p className="mb-1.5 text-sm font-semibold text-white/85">{v.label}</p>
                    <p className="text-xs leading-relaxed text-slate-500">{v.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Stats + Philosophy */}
          <div className="space-y-5">
            {/* Stats 2x2 */}
            <motion.div
              ref={statsRef}
              variants={staggerSlow}
              initial="hidden"
              animate={statsInView ? "visible" : "hidden"}
              className="grid grid-cols-2 gap-3"
            >
              {profile.stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={revealRight}
                  className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4 sm:p-5"
                >
                  <p
                    className="mb-1 text-3xl font-extrabold tracking-tight md:text-4xl"
                    style={{
                      background: "linear-gradient(135deg, #818CF8 0%, #34D399 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-[11px] font-medium text-slate-500">{stat.label}</p>
                  <div className="pointer-events-none absolute right-0 top-0 h-14 w-14 translate-x-4 -translate-y-4 rounded-full bg-indigo-500/10 blur-2xl" />
                </motion.div>
              ))}
            </motion.div>

            {/* Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px 0px" }}
              transition={{ duration: 0.85, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
              className="relative overflow-hidden rounded-2xl border border-indigo-500/[0.18] bg-gradient-to-br from-indigo-500/[0.07] to-purple-500/[0.03] p-5 sm:p-7"
            >
              <div className="pointer-events-none absolute right-0 top-0 h-44 w-44 translate-x-14 -translate-y-14 rounded-full bg-indigo-500/10 blur-3xl" />
              <p className="mb-4 text-[10px] font-semibold tracking-[0.22em] text-indigo-400/60 uppercase">
                Philosophy
              </p>
              <blockquote className="relative text-[0.9375rem] font-medium leading-[1.8] text-white/75 md:text-base">
                <span className="absolute -left-1 -top-1 select-none text-3xl leading-none text-indigo-500/30">"</span>
                AIは道具、設計は思考、コードは表現。
                <br />
                三つが揃って、はじめて価値になる。
                <span className="absolute -bottom-3 right-0 select-none text-3xl leading-none text-indigo-500/30">"</span>
              </blockquote>
              <p className="mt-6 text-xs text-slate-500">— {profile.nameEn}</p>
            </motion.div>
          </div>
        </div>

        {/* ── 強みセクション ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px 0px" }}
        >
          <motion.div variants={revealUp} className="mb-8">
            <p className="text-[10px] font-semibold tracking-[0.22em] text-indigo-400/60 uppercase">
              Strengths
            </p>
            <h3 className="mt-2 text-xl font-bold text-white/90 md:text-2xl">
              私が提供できる価値
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {profile.strengths.map((s, i) => (
              <motion.div
                key={s.title}
                variants={revealUp}
                custom={i}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4 sm:p-6 transition-all duration-300 hover:border-indigo-500/[0.15] hover:bg-white/[0.05]"
              >
                {/* Accent glow */}
                <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 translate-x-6 -translate-y-6 rounded-full bg-indigo-500/8 blur-2xl opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

                <div className="mb-4 flex items-center gap-3">
                  <span className="text-2xl" role="img" aria-hidden>
                    {strengthIcons[i]}
                  </span>
                  <div
                    className="h-px flex-1 opacity-20"
                    style={{ background: "linear-gradient(90deg, #818CF8, transparent)" }}
                  />
                </div>

                <h4 className="mb-2 text-sm font-bold leading-snug text-white/90 md:text-base">
                  {s.title}
                </h4>
                <p className="text-xs leading-relaxed text-slate-500 md:text-[0.8125rem]">
                  {s.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
