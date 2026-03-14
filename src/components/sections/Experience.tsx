"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "@/src/components/ui/SectionHeader";
import { Badge } from "@/src/components/ui/Badge";
import { experiences } from "@/src/data/experience";
import { cn } from "@/src/lib/utils";

const typeConfig = {
  work: { color: "#818CF8", label: "実務" },
  learning: { color: "#34D399", label: "学習" },
  milestone: { color: "#F59E0B", label: "節目" },
  future: { color: "#60A5FA", label: "未来" },
};

function TimelineItem({
  item,
  index,
  isLast,
}: {
  item: (typeof experiences)[number];
  index: number;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });
  const config = typeConfig[item.type];

  return (
    <div ref={ref} className="relative flex gap-4 sm:gap-6 md:gap-10">
      {/* Timeline line */}
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 ring-4 ring-[#07080F]"
          style={{
            borderColor: config.color,
            background: `${config.color}18`,
            boxShadow: `0 0 20px ${config.color}30`,
          }}
        >
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ background: config.color }}
          />
        </motion.div>
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.3, ease: "easeOut" }}
            className="mt-2 w-px flex-1 origin-top"
            style={{
              background: `linear-gradient(to bottom, ${config.color}40, transparent)`,
              minHeight: "48px",
            }}
          />
        )}
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
        transition={{
          duration: 0.6,
          delay: index * 0.1 + 0.1,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
        className={cn(
          "mb-10 flex-1 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4 sm:p-5 md:p-6",
          item.type === "future" && "border-blue-500/20 bg-blue-500/[0.04]",
        )}
      >
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <span
            className="rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase"
            style={{
              background: `${config.color}18`,
              color: config.color,
            }}
          >
            {config.label}
          </span>
          <span className="font-mono text-sm font-bold text-slate-400">
            {item.year}
          </span>
        </div>

        <h3 className="mb-2 text-base font-bold text-white/90 md:text-lg">
          {item.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-slate-400">
          {item.description}
        </p>

        {item.tags && (
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <Badge key={tag} variant="subtle">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative py-16 md:py-24">
      <div
        className="pointer-events-none absolute left-0 bottom-0 h-[400px] w-[300px] opacity-10"
        style={{
          background:
            "radial-gradient(ellipse at bottom left, rgba(96,165,250,0.2) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <SectionHeader
          index="05"
          label="Journey"
          title="学習・成長の軌跡"
          description="過去から現在、そして未来へ。テクノロジーとの向き合い方を時系列で。"
        />

        <div className="mx-auto max-w-3xl">
          {experiences.map((item, i) => (
            <TimelineItem
              key={item.id}
              item={item}
              index={i}
              isLast={i === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
