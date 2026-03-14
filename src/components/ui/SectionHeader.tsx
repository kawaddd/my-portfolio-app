"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/src/lib/utils";

type Props = {
  index: string;
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  index,
  label,
  title,
  description,
  align = "left",
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <div
      ref={ref}
      className={cn(
        "mb-8 sm:mb-10 md:mb-12",
        align === "center" && "text-center",
        className,
      )}
    >
      {/* Index + label row */}
      <motion.div
        initial={{ opacity: 0, x: align === "center" ? 0 : -16, filter: "blur(6px)" }}
        animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
        className="mb-5 flex items-center gap-3"
        style={{ justifyContent: align === "center" ? "center" : "flex-start" }}
      >
        <span className="font-mono text-[11px] font-semibold tracking-[0.22em] text-indigo-400/70">
          {index}
        </span>
        <span className="h-px w-6 bg-indigo-400/25" />
        <span className="text-[10px] font-bold tracking-[0.2em] text-indigo-400/60 uppercase">
          {label}
        </span>
      </motion.div>

      {/* Title */}
      <div className={cn("overflow-hidden", align === "center" && "flex justify-center")}>
        <motion.h2
          initial={{ opacity: 0, y: 36, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.85, delay: 0.08, ease: [0.19, 1, 0.22, 1] }}
          className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-[2.75rem]"
          style={{ letterSpacing: "-0.03em" }}
        >
          {title}
        </motion.h2>
      </div>

      {/* Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.75, delay: 0.18, ease: [0.19, 1, 0.22, 1] }}
          className={cn(
            "mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
