"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import type { Variants } from "framer-motion";
import { revealUp } from "@/src/lib/motion";

type Props = {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  once?: boolean;
};

export function AnimatedSection({
  children,
  className,
  variants = revealUp,
  delay = 0,
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-80px 0px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={delay ? { delay } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
}
