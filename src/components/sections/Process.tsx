"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Compass, Zap, Rocket } from "lucide-react";
import { SectionHeader } from "@/src/components/ui/SectionHeader";
import { staggerContainer, revealUp } from "@/src/lib/motion";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    color: "#818CF8",
    title: "課題を聞く",
    subtitle: "Discovery",
    description:
      "まず「何が困っているか」を丁寧に聞くことから始めます。技術的な話よりも、業務の文脈・目的・理想の状態を理解することを優先します。",
    outcome: "課題の本質を特定",
  },
  {
    number: "02",
    icon: Compass,
    color: "#34D399",
    title: "構造を設計する",
    subtitle: "Design",
    description:
      "課題が明確になったら、解決策の全体構造を先に設計します。実装に入る前に「何を作るか・なぜそれか」を言語化し、手戻りを最小化します。",
    outcome: "最適解の設計図",
  },
  {
    number: "03",
    icon: Zap,
    color: "#F59E0B",
    title: "AIで高速に構築",
    subtitle: "Build",
    description:
      "設計が固まったら、AIツールをフル活用して高速に実装。「AIに任せる部分」と「人間が判断すべき部分」を明確に分けることで、品質と速度を両立します。",
    outcome: "従来比10倍の実装速度",
  },
  {
    number: "04",
    icon: Rocket,
    color: "#60A5FA",
    title: "届けて改善する",
    subtitle: "Deliver",
    description:
      "リリースがゴールではありません。実際に使ってもらいながら改善を重ね、「作って終わり」ではなく「価値を届け続ける」サポートを行います。",
    outcome: "継続的な価値提供",
  },
];

export function Process() {
  const lineRef = useRef<HTMLDivElement>(null);
  const lineInView = useInView(lineRef, { once: true, margin: "-60px 0px" });

  return (
    <section id="process" className="relative py-16 md:py-24">
      {/* Subtle center glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center"
        aria-hidden
      >
        <div
          className="h-[400px] w-[min(600px,95vw)] rounded-full opacity-10 blur-[100px]"
          style={{
            background: "radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-12">
        <SectionHeader
          index="04"
          label="Process"
          title="私の進め方"
          description="実績の数より、どう考えどう動くかが信頼の根拠だと思っています。"
          align="center"
        />

        {/* Steps */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px 0px" }}
          className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* Connecting line (desktop only) */}
          <div
            ref={lineRef}
            className="pointer-events-none absolute left-0 right-0 top-[2.75rem] hidden h-px lg:block"
            aria-hidden
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={lineInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.4, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
              className="h-full origin-left"
              style={{
                background:
                  "linear-gradient(90deg, #818CF8, #34D399, #F59E0B, #60A5FA)",
                opacity: 0.15,
              }}
            />
          </div>

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                variants={revealUp}
                custom={i}
                className="group relative flex flex-col rounded-2xl border border-white/[0.07] bg-[#0a0c14] p-4 sm:p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.12]"
                style={{
                  boxShadow: "0 0 0 0 transparent",
                }}
                whileHover={{
                  boxShadow: `0 20px 60px -10px ${step.color}18`,
                }}
              >
                {/* Number + icon row */}
                <div className="mb-5 flex items-center justify-between">
                  <span
                    className="font-mono text-3xl font-black opacity-[0.38]"
                    style={{ color: step.color }}
                    aria-hidden
                  >
                    {step.number}
                  </span>
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-300"
                    style={{
                      background: `${step.color}18`,
                      color: step.color,
                    }}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                </div>

                {/* Text */}
                <p
                  className="mb-0.5 text-[10px] font-semibold tracking-[0.2em] uppercase"
                  style={{ color: `${step.color}80` }}
                >
                  {step.subtitle}
                </p>
                <h3 className="mb-3 text-base font-bold text-white/90">
                  {step.title}
                </h3>
                <p className="mb-5 flex-1 text-xs leading-relaxed text-slate-300">
                  {step.description}
                </p>

                {/* Outcome badge */}
                <div
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-semibold"
                  style={{
                    background: `${step.color}12`,
                    color: step.color,
                    border: `1px solid ${step.color}25`,
                  }}
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: step.color }}
                  />
                  {step.outcome}
                </div>

                {/* Step connector arrow (between cards, mobile/tablet) */}
                {i < steps.length - 1 && (
                  <div
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-slate-800 lg:hidden"
                    aria-hidden
                  >
                    ↓
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center text-xs text-slate-400"
        >
          プロセスは案件の性質に合わせて柔軟に調整します。まずはお気軽にご相談ください。
        </motion.p>
      </div>
    </section>
  );
}
