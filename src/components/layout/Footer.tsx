import { profile } from "@/src/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.04] py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:px-6 md:flex-row md:px-12">
        <div className="flex items-center gap-2.5">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-indigo-500/20 text-xs font-bold text-indigo-300 ring-1 ring-indigo-500/30">
            D
          </span>
          <span className="text-xs font-medium text-slate-500">
            {profile.nameEn}
          </span>
        </div>

        <p className="text-xs text-slate-600">
          © {year} {profile.nameEn}. Built with Next.js & Framer Motion.
        </p>

        <a
          href={`mailto:${profile.contact.email}`}
          className="text-xs text-slate-500 transition-colors duration-200 hover:text-slate-300"
        >
          {profile.contact.email}
        </a>
      </div>
    </footer>
  );
}
