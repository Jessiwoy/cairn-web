import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/atoms/Button";
import { ProductBadge } from "@/components/molecules/ProductBadge";
import { ProductPrice } from "@/components/molecules/ProductPrice";
import { RatingSummary } from "@/components/molecules/RatingSummary";
import { ProductImage } from "@/components/features/products/ProductImage";
import { useWishlistStore } from "@/store/wishlistStore";
import type { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const isFavorite = useWishlistStore((state) => state.isFavorite(product.id));
  const toggleItem = useWishlistStore((state) => state.toggleItem);
  const stockLabel =
    product.stockStatus === "low_stock"
      ? "Baixo estoque"
      : product.stockStatus === "out_of_stock"
        ? "Esgotado"
        : undefined;

  return (
    <article className="group">
      <div className="relative bg-white">
        <Link to={`/products/${product.slug}`} className="block">
          <ProductImage tone={product.images[0]} />
          <div className="absolute left-4 top-4 flex gap-2">
            {product.featured ? <ProductBadge label="Destaque" tone="dark" /> : null}
            {stockLabel ? <ProductBadge label={stockLabel} tone="accent" /> : null}
          </div>
        </Link>
        <Button
          aria-label={
            isFavorite
              ? `Remover ${product.name} dos favoritos`
              : `Adicionar ${product.name} aos favoritos`
          }
          className="absolute right-3 top-3 bg-white/85 text-cairn-black hover:bg-cairn-sand"
          onClick={() => toggleItem(product)}
          aria-pressed={isFavorite}
          size="icon"
          variant="ghost"
        >
          <Heart className={isFavorite ? "fill-cairn-copper text-cairn-copper" : ""} size={18} />
        </Button>
      </div>
      <Link to={`/products/${product.slug}`} className="block pt-4">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cairn-gray">
          {product.subcategory}
        </p>
        <h3 className="mt-2 font-heading text-lg font-semibold text-cairn-black">
          {product.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-cairn-gray">
          {product.description}
        </p>
        <div className="mt-4 flex flex-col gap-2">
          <ProductPrice compareAtPrice={product.compareAtPrice} price={product.price} />
          <RatingSummary rating={product.rating} reviewCount={product.reviewCount} />
        </div>
      </Link>
    </article>
  );
}
