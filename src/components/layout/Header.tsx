"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/src/lib/utils";
import { profile } from "@/src/data/profile";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Works", href: "#works" },
  { label: "Journey", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-500",
          scrolled
            ? "border-b border-white/[0.06] bg-[#07080F]/80 backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3 sm:py-4 md:px-12">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2.5 outline-none"
            aria-label="トップへ戻る"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500/20 ring-1 ring-indigo-500/40 transition-all duration-300 group-hover:bg-indigo-500/30 group-hover:ring-indigo-500/60">
              <span className="text-xs font-bold text-indigo-300">D</span>
            </span>
            <span className="hidden text-sm font-semibold tracking-wide text-white/90 sm:block">
              {profile.nameEn}
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="relative text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-indigo-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA + Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${profile.contact.email}`}
              className="hidden rounded-full bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-300 ring-1 ring-indigo-500/30 transition-all duration-200 hover:bg-indigo-500/20 hover:ring-indigo-400/50 md:block"
            >
              お問い合わせ
            </a>
            <button
              className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="メニューを開く"
            >
              <span
                className={cn(
                  "h-px w-5 bg-slate-300 transition-all duration-300",
                  mobileOpen && "translate-y-[5px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "h-px w-5 bg-slate-300 transition-all duration-300",
                  mobileOpen && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "h-px w-5 bg-slate-300 transition-all duration-300",
                  mobileOpen && "-translate-y-[5px] -rotate-45",
                )}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-[#07080F]/95 pt-20 backdrop-blur-2xl md:hidden"
          >
            <nav className="flex flex-col items-center gap-8 py-12">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                  onClick={() => handleNavClick(item.href)}
                  className="text-2xl font-semibold text-white/80 transition-colors hover:text-white"
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05 + 0.1 }}
                href={`mailto:${profile.contact.email}`}
                className="mt-4 rounded-full bg-indigo-500/15 px-8 py-3 text-base font-medium text-indigo-300 ring-1 ring-indigo-500/40"
              >
                お問い合わせ
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
