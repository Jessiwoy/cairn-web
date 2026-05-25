import { cn } from "@/lib/utils";

type ProductPriceProps = {
  className?: string;
  compareAtPrice?: number;
  price: number;
};

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  currency: "BRL",
  style: "currency",
});

export function ProductPrice({ className, compareAtPrice, price }: ProductPriceProps) {
  return (
    <div className={cn("flex items-baseline gap-2", className)}>
      <span className="text-base font-semibold text-cairn-black">
        {currencyFormatter.format(price)}
      </span>
      {compareAtPrice ? (
        <span className="text-sm text-cairn-gray line-through">
          {currencyFormatter.format(compareAtPrice)}
        </span>
      ) : null}
    </div>
  );
}
