"use client";

import { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { Server, Monitor, Cpu, Layers, Wrench, Award, Cloud } from "lucide-react";
import { SectionHeader } from "@/src/components/ui/SectionHeader";
import { skillCategories } from "@/src/data/skills";
import { staggerContainer, fadeUp } from "@/src/lib/motion";

const iconMap: Record<string, React.ReactNode> = {
  Server: <Server className="h-4 w-4" />,
  Monitor: <Monitor className="h-4 w-4" />,
  Cpu: <Cpu className="h-4 w-4" />,
  Layers: <Layers className="h-4 w-4" />,
  Wrench: <Wrench className="h-4 w-4" />,
  Award: <Award className="h-4 w-4" />,
  Cloud: <Cloud className="h-4 w-4" />,
};

function SkillBar({
  name,
  level = 0,
  note,
  color,
  delay = 0,
}: {
  name: string;
  level?: number;
  note?: string;
  color: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px 0px" });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-white/80">{name}</span>
          {note && (
            <span className="text-[10px] text-slate-500">{note}</span>
          )}
        </div>
        <span className="font-mono text-xs text-slate-400">{level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{
            duration: 1.2,
            delay: delay,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}cc, ${color})` }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);

  const currentCategory =
    skillCategories.find((c) => c.id === activeCategory) ?? skillCategories[0];

  return (
    <section id="skills" className="relative py-16 md:py-24">
      {/* Background accent */}
      <div
        className="pointer-events-none absolute left-0 top-1/2 h-[500px] w-[min(400px,90vw)] -translate-y-1/2 opacity-15"
        style={{
          background:
            "radial-gradient(ellipse at left, rgba(99,102,241,0.2) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-12">
        <SectionHeader
          index="02"
          label="Skills"
          title="スキルセット"
          description="学習中の技術も含め、現時点での技術マップを可視化しています。"
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[280px_1fr]">
          {/* Category tabs */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-row gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
          >
            {skillCategories.map((cat) => (
              <motion.button
                key={cat.id}
                variants={fadeUp}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex min-w-max items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition-all duration-200 lg:min-w-0 lg:w-full ${
                  activeCategory === cat.id
                    ? "bg-white/[0.07] text-white ring-1 ring-white/10"
                    : "text-slate-400 hover:bg-white/[0.04] hover:text-slate-300"
                }`}
              >
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-lg transition-colors duration-200"
                  style={{
                    background:
                      activeCategory === cat.id
                        ? `${cat.color}22`
                        : "rgba(255,255,255,0.04)",
                    color:
                      activeCategory === cat.id ? cat.color : "#64748b",
                  }}
                >
                  {iconMap[cat.icon]}
                </span>
                <span className="leading-tight">{cat.label}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Skill bars */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 sm:p-6 md:p-8"
            >
              <div className="mb-6 flex items-center gap-3">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-xl"
                  style={{
                    background: `${currentCategory.color}18`,
                    color: currentCategory.color,
                  }}
                >
                  {iconMap[currentCategory.icon]}
                </span>
                <div>
                  <p className="font-semibold text-white">
                    {currentCategory.label}
                  </p>
                  <p className="text-xs text-slate-400">
                    {currentCategory.skills.length}{" "}
                    {currentCategory.id === "cert" ? "資格" : "スキル"}
                  </p>
                </div>
              </div>

              {/* 資格カテゴリは取得済みバッジ表示、それ以外はスキルバー */}
              {currentCategory.id === "cert" ? (
                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {currentCategory.skills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3"
                    >
                      <span
                        className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-[10px] font-bold"
                        style={{
                          background: `${currentCategory.color}20`,
                          color: currentCategory.color,
                        }}
                      >
                        ✓
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="truncate text-sm font-medium text-white/80">
                          {skill.name}
                        </p>
                        {skill.note && (
                          <p className="text-[10px] text-slate-500">{skill.note}</p>
                        )}
                      </div>
                      <span
                        className="flex-shrink-0 rounded-full px-2 py-0.5 text-[9px] font-bold tracking-wide uppercase"
                        style={{
                          background: `${currentCategory.color}15`,
                          color: currentCategory.color,
                        }}
                      >
                        取得済
                      </span>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="space-y-5">
                  {currentCategory.skills.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      note={skill.note}
                      color={currentCategory.color}
                      delay={i * 0.08}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Learning status note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex items-center gap-3 rounded-xl border border-white/[0.04] bg-white/[0.02] p-4"
        >
          <span className="relative flex h-2 w-2 flex-shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
          </span>
          <p className="text-xs leading-relaxed text-slate-400">
            スキルレベルは相対的な自己評価です。
            TypeScript / React / Next.js は現在積極的に学習・実践中です。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
