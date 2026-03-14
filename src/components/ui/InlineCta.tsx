"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { profile } from "@/src/data/profile";

type Props = {
  heading: string;
  body: string;
  buttonLabel: string;
  targetId: string;
};

export function InlineCta({ heading, body, buttonLabel, targetId }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: [0.19, 1, 0.22, 1] }}
      className="relative mx-auto my-4 max-w-7xl overflow-hidden rounded-2xl border border-indigo-500/[0.12] bg-gradient-to-r from-indigo-500/[0.06] via-transparent to-purple-500/[0.04] px-7 py-6 sm:px-10 sm:py-7"
    >
      {/* Subtle inner glow */}
      <div
        className="pointer-events-none absolute left-0 top-1/2 h-32 w-48 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <p className="mb-1 text-sm font-semibold text-white/85 md:text-base">
            {heading}
          </p>
          <p className="text-xs leading-relaxed text-slate-400 md:text-sm">
            {body}
          </p>
        </div>

        <a
          href={`mailto:${profile.contact.email}`}
          className="group flex shrink-0 items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-500/10 px-5 py-2.5 text-sm font-medium text-indigo-300 transition-all duration-200 hover:border-indigo-400/40 hover:bg-indigo-500/20 hover:text-indigo-200"
          onClick={(e) => {
            const el = document.querySelector(targetId);
            if (el) {
              e.preventDefault();
              el.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          {buttonLabel}
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
        </a>
      </div>
    </motion.div>
  );
}
