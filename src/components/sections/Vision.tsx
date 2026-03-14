"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, Code2, Rocket, Users } from "lucide-react";
import { SectionHeader } from "@/src/components/ui/SectionHeader";
import { staggerContainer, fadeUp } from "@/src/lib/motion";

const visions = [
  {
    icon: Bot,
    title: "AI × 開発で価値を創る",
    description:
      "AIを道具として使いこなし、開発・設計・自動化の力で、従来の10倍の速度で価値を届けるエンジニアを目指す。",
    color: "#818CF8",
  },
  {
    icon: Code2,
    title: "フルスタックな表現者に",
    description:
      "バックエンドの設計力とフロントエンドの表現力を統合し、ビジネス課題を起点にプロダクトを一人で設計・実装できる力を磨く。",
    color: "#34D399",
  },
  {
    icon: Rocket,
    title: "自分のプロダクトを市場へ",
    description:
      "受託・業務委託で実力を磨きながら、最終的には自分が信じるプロダクトを市場に届けることを目標にしている。",
    color: "#F59E0B",
  },
  {
    icon: Users,
    title: "チームに還元できる人材に",
    description:
      "AI活用・設計思考・開発力を組み合わせ、チーム全体の生産性と品質を底上げできるエンジニアとして貢献する。",
    color: "#60A5FA",
  },
];

export function Vision() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <section id="vision" className="relative py-16 md:py-24">
      {/* Big statement background glow */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-20"
        aria-hidden
      >
        <div
          className="h-[600px] w-[min(600px,95vw)] rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-12">
        <SectionHeader
          index="06"
          label="Vision"
          title="目指すビジョン"
          description="技術は手段。最終的に作りたいのは、人の生活と仕事を変える体験です。"
          align="center"
        />

        {/* Big statement */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p
            className="text-xl font-bold leading-relaxed tracking-tight text-transparent md:text-2xl lg:text-3xl"
            style={{
              background:
                "linear-gradient(135deg, #E8EDF5 30%, #818CF8 60%, #34D399 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            "AIで加速し、設計で差別化し、
            <br />
            コードで具現化する。
            <br />
            その循環を、誰よりも速く回す。"
          </p>
        </motion.div>

        {/* Vision cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px 0px" }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {visions.map((v) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4 sm:p-6 transition-all duration-500 hover:border-white/[0.10] hover:bg-white/[0.05]"
              >
                <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle, ${v.color}15, transparent 70%)`,
                  }}
                />
                <div
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: `${v.color}18`, color: v.color }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-sm font-bold text-white/90">
                  {v.title}
                </h3>
                <p className="text-xs leading-relaxed text-slate-400">
                  {v.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
