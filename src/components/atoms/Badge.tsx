import { type HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type BadgeVariant = "neutral" | "accent" | "dark";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

const variantClasses: Record<BadgeVariant, string> = {
  neutral: "bg-cairn-black/7 text-cairn-black",
  accent: "bg-cairn-sand text-cairn-black",
  dark: "bg-cairn-black text-white",
};

export function Badge({ className, variant = "neutral", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex h-7 items-center px-3 text-xs font-semibold uppercase tracking-[0.12em]",
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}
