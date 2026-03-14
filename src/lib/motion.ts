import type { Variants } from "framer-motion";

export const easings = {
  smooth: [0.25, 0.1, 0.25, 1] as const,
  spring: [0.43, 0.13, 0.23, 0.96] as const,
  out: [0.0, 0.0, 0.2, 1] as const,
  expo: [0.19, 1.0, 0.22, 1.0] as const,
};

/** フェードアップ（標準） */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: easings.spring },
  },
};

/** blur付き上品リビール — より洗練された登場 */
export const revealUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: easings.expo },
  },
};

/** 横方向blur付きリビール */
export const revealLeft: Variants = {
  hidden: { opacity: 0, x: -24, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: easings.expo },
  },
};

export const revealRight: Variants = {
  hidden: { opacity: 0, x: 24, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: easings.expo },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.65, ease: easings.smooth },
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.72, ease: easings.spring },
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.72, ease: easings.spring },
  },
};

/** スケール＋blur — カード登場 */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: easings.spring },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0,
    },
  },
};

export const staggerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

/** タイトル文字 — マスク越しの出現 */
export const slideUp: Variants = {
  hidden: { opacity: 0, y: 48, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: easings.expo },
  },
};
