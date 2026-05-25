import { Badge } from "@/components/atoms/Badge";

type ProductBadgeProps = {
  label: string;
  tone?: "neutral" | "accent" | "dark";
};

export function ProductBadge({ label, tone = "neutral" }: ProductBadgeProps) {
  return <Badge variant={tone}>{label}</Badge>;
}
