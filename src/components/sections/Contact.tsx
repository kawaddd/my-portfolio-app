"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Mail, ArrowRight,
  Zap, Bot, Globe, MessageCircle,
} from "lucide-react";
import { SectionHeader } from "@/src/components/ui/SectionHeader";
import { profile } from "@/src/data/profile";
import { staggerContainer, revealUp } from "@/src/lib/motion";

/* ── 悩み別相談カード ── */
const consultingCases = [
  {
    icon: Zap,
    color: "#F59E0B",
    title: "業務が非効率で困っている",
    description:
      "「この作業、毎日手作業で2時間かかる」そんな課題があれば、自動化・効率化の具体的な方法を一緒に考えます。",
    tag: "業務改善・自動化",
  },
  {
    icon: Bot,
    color: "#818CF8",
    title: "AIを導入したいが何から始めればいい？",
    description:
      "ChatGPT・Claude等のAIツールを業務にどう活かすか、適切な使い方と注意点も含めてご提案します。",
    tag: "AI活用支援",
  },
  {
    icon: Globe,
    color: "#34D399",
    title: "Webサービス・ツールを作りたい",
    description:
      "「こんなものが欲しい」というアイデアを、設計・実装・公開まで一気通貫でサポートします。",
    tag: "Web開発・実装",
  },
  {
    icon: MessageCircle,
    color: "#60A5FA",
    title: "まず話を聞くだけでもOK",
    description:
      "具体的な依頼がなくても大丈夫です。「こういうことできる？」程度の雑談ベースの相談から歓迎します。",
    tag: "無料相談",
  },
];


export function Contact() {
  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-60px 0px" });

  return (
    <section id="contact" className="relative py-16 md:py-24">
      {/* Bottom glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[350px] w-[min(700px,95vw)] -translate-x-1/2 opacity-15"
        style={{
          background: "radial-gradient(ellipse at bottom, rgba(99,102,241,0.35) 0%, transparent 65%)",
        }}
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-12">
        <SectionHeader
          index="07"
          label="Contact"
          title="ご相談・お問い合わせ"
          description="実績が少なくても、進め方と思考力で価値を届けます。まずお気軽にどうぞ。"
          align="center"
        />

        {/* ── 悩み別カード ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px 0px" }}
          className="mb-14 grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2"
        >
          {consultingCases.map((c) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                variants={revealUp}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0a0c14] p-4 sm:p-6 transition-all duration-300 hover:border-white/[0.10]"
              >
                <div
                  className="pointer-events-none absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: `radial-gradient(circle, ${c.color}15, transparent 70%)` }}
                  aria-hidden
                />
                <div className="mb-4 flex items-start gap-4">
                  <div
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl"
                    style={{ background: `${c.color}15`, color: c.color }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <span
                      className="mb-1.5 inline-block rounded-full px-2 py-0.5 text-[9px] font-bold tracking-wider uppercase"
                      style={{ background: `${c.color}12`, color: c.color }}
                    >
                      {c.tag}
                    </span>
                    <h3 className="text-sm font-bold text-white/90 md:text-base">{c.title}</h3>
                  </div>
                </div>
                <p className="pl-12 sm:pl-14 text-xs leading-relaxed text-slate-500 md:text-sm">
                  {c.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── メインCTA ── */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
          animate={ctaInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.85, ease: [0.19, 1, 0.22, 1] }}
          className="mx-auto max-w-2xl"
        >
          <div className="relative overflow-hidden rounded-3xl border border-indigo-500/[0.18] bg-gradient-to-br from-indigo-500/[0.09] via-transparent to-purple-500/[0.05] p-5 sm:p-8 text-center md:p-12">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden>
              <div
                className="h-64 w-64 rounded-full blur-[80px] opacity-25"
                style={{ background: "radial-gradient(circle, rgba(99,102,241,0.5) 0%, transparent 70%)" }}
              />
            </div>

            <div className="relative">
              {/* Available badge + availability chips */}
              <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-300">
                    {profile.availableText}
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5">
                  <span className="text-[11px] text-slate-400">週15h以上稼働可</span>
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5">
                  <span className="text-[11px] text-slate-400">12時間以内に返信</span>
                </div>
              </div>

              <h3 className="mb-3 text-xl sm:text-2xl font-bold text-white md:text-3xl">
                一緒に、課題を解決しませんか?
              </h3>
              <p className="mb-8 text-sm leading-relaxed text-slate-300 md:text-[0.9375rem]">
                「こういうことできる?」という軽い相談から大歓迎です。
                <br className="hidden sm:block" />
                まずは気軽にメッセージを送ってみてください。
              </p>

              <a
                href={`mailto:${profile.contact.email}`}
                className="group relative inline-flex items-center gap-2 sm:gap-3 overflow-hidden rounded-full bg-indigo-500 px-5 sm:px-8 py-3 sm:py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:shadow-indigo-400/35 active:scale-[0.97]"
              >
                <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-500 group-hover:translate-x-[100%]" />
                <Mail className="relative h-4 w-4" />
                <span className="relative">メールで相談する</span>
                <ArrowRight className="relative h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>

              <p className="mt-4 text-[11px] text-slate-600">
                {profile.contact.email}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
