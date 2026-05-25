import { type HTMLAttributes, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type TypographyVariant = "eyebrow" | "display" | "h1" | "h2" | "body" | "muted";

type TypographyProps = HTMLAttributes<HTMLElement> & {
  as?: "p" | "span" | "h1" | "h2" | "h3";
  children: ReactNode;
  variant?: TypographyVariant;
};

const variantClasses: Record<TypographyVariant, string> = {
  eyebrow:
    "text-sm font-semibold uppercase tracking-[0.16em] text-cairn-copper",
  display: "font-heading text-5xl font-semibold leading-tight md:text-7xl",
  h1: "font-heading text-4xl font-semibold leading-tight md:text-6xl",
  h2: "font-heading text-2xl font-semibold leading-tight md:text-4xl",
  body: "text-base leading-7 text-current",
  muted: "text-sm leading-6 text-cairn-gray",
};

export function Typography({
  as,
  children,
  className,
  variant = "body",
  ...props
}: TypographyProps) {
  const Component = as ?? (variant === "h1" || variant === "display" ? "h1" : "p");

  return (
    <Component className={cn(variantClasses[variant], className)} {...props}>
      {children}
    </Component>
  );
}
