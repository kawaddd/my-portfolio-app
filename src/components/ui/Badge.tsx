import { cn } from "@/src/lib/utils";

type Props = {
  children: React.ReactNode;
  variant?: "default" | "accent" | "subtle" | "outline";
  className?: string;
};

export function Badge({ children, variant = "default", className }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variant === "default" &&
          "bg-white/5 text-slate-300 ring-1 ring-white/10",
        variant === "accent" &&
          "bg-indigo-500/15 text-indigo-300 ring-1 ring-indigo-500/30",
        variant === "subtle" && "bg-white/[0.03] text-slate-300",
        variant === "outline" &&
          "text-slate-300 ring-1 ring-white/10",
        className,
      )}
    >
      {children}
    </span>
  );
}
