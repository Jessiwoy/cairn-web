import { cn } from "@/lib/utils";

type ProductImageProps = {
  className?: string;
  tone: string;
};

const toneClasses: Record<string, string> = {
  black: "from-cairn-black via-cairn-green to-cairn-black",
  copper: "from-cairn-copper via-cairn-sand to-cairn-black",
  forest: "from-cairn-green via-cairn-black to-cairn-sand",
  gray: "from-cairn-gray via-cairn-off-white to-cairn-black",
  sand: "from-cairn-sand via-cairn-off-white to-cairn-copper",
  stone: "from-cairn-gray via-cairn-sand to-cairn-green",
};

export function ProductImage({ className, tone }: ProductImageProps) {
  return (
    <div
      className={cn(
        "relative aspect-[4/5] overflow-hidden bg-gradient-to-br",
        toneClasses[tone] ?? toneClasses.stone,
        className,
      )}
    >
      <div className="absolute inset-x-8 bottom-8 h-1/3 border border-white/25 bg-white/10" />
      <div className="absolute left-8 top-8 h-16 w-16 border border-white/20" />
      <div className="absolute inset-0 bg-cairn-black/10" />
    </div>
  );
}
