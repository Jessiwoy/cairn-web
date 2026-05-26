import { Star } from "lucide-react";

type RatingSummaryProps = {
  rating: number;
  reviewCount: number;
};

export function RatingSummary({ rating, reviewCount }: RatingSummaryProps) {
  return (
    <div className="flex items-center gap-2 text-sm text-cairn-gray">
      <span className="flex items-center gap-1 text-cairn-black">
        <Star className="h-4 w-4 fill-cairn-copper text-cairn-copper" />
        <span className="font-semibold">{rating.toFixed(1)}</span>
      </span>
      <span>{reviewCount} avaliacoes</span>
    </div>
  );
}
