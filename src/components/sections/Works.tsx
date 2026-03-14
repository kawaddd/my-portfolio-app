"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight, X, ExternalLink,
  Bot, Globe, BarChart2, Lightbulb,
} from "lucide-react";
import { SectionHeader } from "@/src/components/ui/SectionHeader";
import { Badge } from "@/src/components/ui/Badge";
import { AnimatedSection } from "@/src/components/ui/AnimatedSection";
import { projects, type Project } from "@/src/data/projects";
import { staggerContainer, scaleIn } from "@/src/lib/motion";

/* ── カテゴリ別ビジュアル設定 ── */
const categoryTheme: Record<
  string,
  { gradient: string; iconColor: string; icon: React.ReactNode; glow: string }
> = {
  "AI / Automation": {
    gradient: "linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #4338ca 100%)",
    iconColor: "#818cf8",
    icon: <Bot className="h-8 w-8" />,
    glow: "rgba(99,102,241,0.25)",
  },
  "Web Development": {
    gradient: "linear-gradient(135deg, #0c1a2e 0%, #0e3460 40%, #0ea5e9 100%)",
    iconColor: "#38bdf8",
    icon: <Globe className="h-8 w-8" />,
    glow: "rgba(56,189,248,0.2)",
  },
  "Data / Visualization": {
    gradient: "linear-gradient(135deg, #1c1306 0%, #451a03 40%, #d97706 100%)",
    iconColor: "#fbbf24",
    icon: <BarChart2 className="h-8 w-8" />,
    glow: "rgba(251,191,36,0.2)",
  },
  "Product Design": {
    gradient: "linear-gradient(135deg, #1a0a1e 0%, #4a044e 40%, #a21caf 100%)",
    iconColor: "#e879f9",
    icon: <Lightbulb className="h-8 w-8" />,
    glow: "rgba(232,121,249,0.2)",
  },
};

const fallbackTheme = categoryTheme["AI / Automation"];

const statusLabel: Record<Project["status"], string> = {
  completed: "完成",
  "in-progress": "進行中",
  concept: "コンセプト",
};
const statusColor: Record<Project["status"], string> = {
  completed: "#34D399",
  "in-progress": "#F59E0B",
  concept: "#818CF8",
};

/* ── ビジュアルエリア（画像あれば画像、なければグラデーション） ── */
function VisualArea({
  project,
  index,
  minHeight = "160px",
  iconSize = "h-8 w-8",
}: {
  project: Project;
  index: number;
  minHeight?: string;
  iconSize?: string;
}) {
  const theme = categoryTheme[project.category] ?? fallbackTheme;
  const num = String(index + 1).padStart(2, "0");

  if (project.image) {
    return (
      <div
        className="relative overflow-hidden"
        style={{ minHeight }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Bottom fade overlay */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0a0c14] to-transparent" />
        {/* Status dot */}
        <div className="absolute left-4 top-4">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[9px] font-semibold backdrop-blur-sm"
            style={{
              background: `${statusColor[project.status]}22`,
              color: statusColor[project.status],
              border: `1px solid ${statusColor[project.status]}40`,
            }}
          >
            <span className="h-1 w-1 rounded-full" style={{ background: statusColor[project.status] }} />
            {statusLabel[project.status]}
          </span>
        </div>
      </div>
    );
  }

  /* 画像なし — グラデーション + アイコン */
  return (
    <div
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight, background: theme.gradient }}
    >
      <span
        className="pointer-events-none absolute right-4 top-3 select-none font-mono font-black opacity-[0.07]"
        style={{
          color: theme.iconColor,
          fontSize: iconSize === "h-8 w-8" ? "4.5rem" : "3rem",
        }}
        aria-hidden
      >
        {num}
      </span>
      <div className="absolute h-24 w-24 rounded-full blur-2xl" style={{ background: theme.glow }} />
      <span style={{ color: theme.iconColor }} className={`relative opacity-90 [&>svg]:${iconSize}`}>
        {theme.icon}
      </span>
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
    </div>
  );
}

/* ── Featured カード（横長・大型） ── */
function FeaturedCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (p: Project) => void;
}) {
  return (
    <motion.article
      variants={scaleIn}
      onClick={() => onOpen(project)}
      className="card-glow group relative cursor-pointer overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0a0c14] transition-all duration-500 hover:-translate-y-1 md:grid md:grid-cols-[1fr_1.6fr]"
    >
      <VisualArea project={project} index={index} minHeight="220px" />

      {/* Content area */}
      <div className="p-4 sm:p-6 md:p-8">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            {/* status badge は画像なし時のみ（画像ありはVisualArea内に表示済み） */}
            {!project.image && (
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px] font-semibold"
                style={{
                  background: `${statusColor[project.status]}18`,
                  color: statusColor[project.status],
                }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: statusColor[project.status] }} />
                {statusLabel[project.status]}
              </span>
            )}
            <span className="font-mono text-[11px] text-slate-500">{project.year}</span>
          </div>
          <div className="flex items-center gap-2">
            {project.duration && (
              <span className="rounded-full border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] text-slate-400">
                ⏱ {project.duration}
              </span>
            )}
            <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-white/[0.08] text-slate-500 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:border-white/20 group-hover:text-white">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>

        <p className="mb-1 text-xs font-medium tracking-widest text-slate-500 uppercase">
          {project.category}
        </p>
        <h3 className="mb-3 text-xl font-bold leading-tight text-white/90 transition-colors duration-200 group-hover:text-white md:text-2xl">
          {project.title}
        </h3>
        <p className="mb-5 text-sm leading-relaxed text-slate-400 md:text-[0.9375rem]">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 5).map((tag) => (
            <Badge key={tag} variant="default">{tag}</Badge>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

/* ── Regular カード（縦型・小） ── */
function SmallCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (p: Project) => void;
}) {
  return (
    <motion.article
      variants={scaleIn}
      onClick={() => onOpen(project)}
      className="card-glow group relative cursor-pointer overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0a0c14] transition-all duration-500 hover:-translate-y-1.5"
    >
      <VisualArea project={project} index={index} minHeight="128px" iconSize="h-6 w-6" />

      {/* Content */}
      <div className="p-5">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {!project.image && (
              <span
                className="inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[9px] font-semibold"
                style={{
                  background: `${statusColor[project.status]}18`,
                  color: statusColor[project.status],
                }}
              >
                <span className="h-1 w-1 rounded-full" style={{ background: statusColor[project.status] }} />
                {statusLabel[project.status]}
              </span>
            )}
            <span className="font-mono text-[10px] text-slate-600">{project.year}</span>
          </div>
          <div className="flex items-center gap-1.5">
            {project.duration && (
              <span className="rounded-full border border-white/[0.07] bg-white/[0.03] px-2 py-0.5 font-mono text-[9px] text-slate-500">
                ⏱ {project.duration}
              </span>
            )}
            <ArrowUpRight className="h-3.5 w-3.5 text-slate-600 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:text-slate-300" />
          </div>
        </div>
        <h3 className="mb-2 text-base font-bold leading-snug text-white/85 transition-colors duration-200 group-hover:text-white">
          {project.title}
        </h3>
        <p className="mb-3 line-clamp-2 text-xs leading-relaxed text-slate-500">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="subtle">{tag}</Badge>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

/* ── Modal ── */
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const theme = categoryTheme[project.category] ?? fallbackTheme;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/75 backdrop-blur-2xl" />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.97 }}
        transition={{ duration: 0.38, ease: [0.19, 1, 0.22, 1] }}
        className="relative z-10 flex h-[90vh] w-full max-w-2xl flex-col rounded-t-3xl border border-white/[0.09] bg-[#0d0f1a] shadow-2xl sm:h-auto sm:max-h-[90vh] sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ドラッグハンドル (モバイルのみ) */}
        <div className="flex shrink-0 justify-center pt-3 pb-1 sm:hidden" aria-hidden>
          <div className="h-1 w-10 rounded-full bg-white/20" />
        </div>

        {/* スクロール領域 */}
        <div className="flex-1 overflow-y-auto">

        {/* Modal visual header — 画像あれば画像を表示 */}
        {project.image ? (
          <div className="relative h-32 sm:h-52 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f1a] via-black/20 to-transparent" />
            <button
              onClick={onClose}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white/70 backdrop-blur-sm transition-all hover:bg-black/70 hover:text-white"
              aria-label="閉じる"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <div
            className="relative flex h-28 items-center justify-between px-7 sm:h-36"
            style={{ background: theme.gradient }}
          >
            <div className="flex items-center gap-3">
              <span style={{ color: theme.iconColor }} className="opacity-90">
                {theme.icon}
              </span>
              <div>
                <p className="text-xs font-medium opacity-70" style={{ color: theme.iconColor }}>
                  {project.category}
                </p>
                <p className="text-[11px] text-white/50">{project.year}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-black/30 text-white/60 transition-all hover:bg-black/50 hover:text-white"
              aria-label="閉じる"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}

        <div className="px-4 sm:px-7 py-5 sm:py-7">
          <div className="mb-4 flex items-center gap-2.5">
            <span
              className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
              style={{ background: `${statusColor[project.status]}18`, color: statusColor[project.status] }}
            >
              {statusLabel[project.status]}
            </span>
            <span className="text-xs text-slate-500">{project.year}</span>
          </div>

          <h2 className="mb-2 text-xl sm:text-2xl font-bold text-white">{project.title}</h2>
          <p className="mb-8 text-[0.9375rem] leading-relaxed text-slate-300">{project.description}</p>

          <div className="space-y-6">
            {[
              { label: "課題", text: project.challenge },
              { label: "解決アプローチ", text: project.solution },
              { label: "成果", text: project.outcome },
            ].map(({ label, text }) => (
              <div key={label}>
                <p className="mb-2 text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">
                  {label}
                </p>
                <p className="text-sm leading-relaxed text-slate-300">{text}</p>
              </div>
            ))}

            <div>
              <p className="mb-2.5 text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">
                使用技術
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="accent">{tag}</Badge>
                ))}
              </div>
            </div>
          </div>

          {/* 公開URLがある場合のみ表示 */}
          {project.url && (
            <div className="mt-8">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-indigo-500/15 px-5 py-2.5 text-sm font-medium text-indigo-300 ring-1 ring-indigo-500/30 transition-all hover:bg-indigo-500/25"
              >
                <ExternalLink className="h-4 w-4" /> サイトを見る
              </a>
            </div>
          )}
        </div>
        </div>{/* /スクロール領域 */}
      </motion.div>
    </motion.div>
  );
}

/* ── Section ── */
export function Works() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [mounted, setMounted] = useState(false);
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  useEffect(() => { setMounted(true); }, []);

  /* モーダル開閉時にスクロールをロック（iOS Safari対応: html要素に適用） */
  useEffect(() => {
    const el = document.documentElement;
    if (selected) {
      el.style.overflow = "hidden";
    } else {
      el.style.overflow = "";
    }
    return () => { el.style.overflow = ""; };
  }, [selected]);

  return (
    <section id="works" className="relative py-16 md:py-24">
      <div
        className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[350px] opacity-10"
        style={{ background: "radial-gradient(ellipse at right, rgba(244,114,182,0.25) 0%, transparent 70%)" }}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-12">
        <SectionHeader
          index="03"
          label="Works"
          title="実績・制作物"
          description="課題の発見から解決まで、設計と実装の両面で取り組んだプロジェクトです。"
        />

        {/* Featured */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px 0px" }}
          className="mb-4 space-y-4"
        >
          {featured.map((p, i) => (
            <FeaturedCard key={p.id} project={p} index={i} onOpen={setSelected} />
          ))}
        </motion.div>

        {/* Others grid */}
        {others.length > 0 && (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px 0px" }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {others.map((p, i) => (
              <SmallCard key={p.id} project={p} index={featured.length + i} onOpen={setSelected} />
            ))}
          </motion.div>
        )}

        {/* More note */}
        <AnimatedSection delay={0.2} className="mt-6">
          <div className="flex items-center justify-center rounded-2xl border border-dashed border-white/[0.05] py-5 text-center">
            <p className="text-xs text-slate-600">
              制作物は随時追加予定です。
            </p>
          </div>
        </AnimatedSection>
      </div>

      {/* モーダルはportalでbody直下にレンダリング（fixed positioningの制約を回避） */}
      {mounted && createPortal(
        <AnimatePresence>
          {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
