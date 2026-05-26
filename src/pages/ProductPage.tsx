import { useEffect, useMemo, useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import { Badge } from "@/components/atoms/Badge";
import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { Typography } from "@/components/atoms/Typography";
import { ProductImage } from "@/components/features/products/ProductImage";
import { ProductPrice } from "@/components/molecules/ProductPrice";
import { QuantitySelector } from "@/components/molecules/QuantitySelector";
import { RatingSummary } from "@/components/molecules/RatingSummary";
import { products } from "@/data/products";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";

const stockLabels = {
  in_stock: "Em estoque",
  low_stock: "Baixo estoque",
  out_of_stock: "Esgotado",
};

export function ProductPage() {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);
  const addItem = useCartStore((state) => state.addItem);
  const toggleFavorite = useWishlistStore((state) => state.toggleItem);
  const isFavorite = useWishlistStore((state) =>
    product ? state.isFavorite(product.id) : false,
  );
  const [quantity, setQuantity] = useState(1);
  const [wasAdded, setWasAdded] = useState(false);
  const [selectedVariantId, setSelectedVariantId] = useState<string | undefined>(
    product?.variants[0]?.id,
  );

  const selectedVariant = useMemo(
    () => product?.variants.find((variant) => variant.id === selectedVariantId),
    [product?.variants, selectedVariantId],
  );

  useEffect(() => {
    setSelectedVariantId(product?.variants[0]?.id);
    setQuantity(1);
  }, [product?.id, product?.variants]);

  if (!product) {
    return (
      <section className="py-16 lg:py-24">
        <Container>
          <Typography className="mb-4" variant="eyebrow">
            Produto
          </Typography>
          <Typography as="h1" className="max-w-2xl" variant="h1">
            Produto nao encontrado
          </Typography>
          <Typography className="mt-4 max-w-xl text-cairn-gray" variant="body">
            O item pode ter sido removido ou ainda nao esta disponivel no catalogo.
          </Typography>
          <Button asChild className="mt-8" variant="outline">
            <Link to="/catalog">Voltar ao catalogo</Link>
          </Button>
        </Container>
      </section>
    );
  }

  const maxQuantity = selectedVariant?.stock ?? (product.stockStatus === "low_stock" ? 4 : 10);
  const isUnavailable = product.stockStatus === "out_of_stock" || maxQuantity <= 0;

  const handleAddToCart = () => {
    addItem({ product, quantity, variant: selectedVariant });
    setWasAdded(true);
  };

  return (
    <section className="bg-cairn-off-white py-10 lg:py-16">
      <Container>
        <Link
          to="/catalog"
          className="mb-8 inline-flex text-sm font-semibold text-cairn-gray transition hover:text-cairn-copper"
        >
          Voltar ao catalogo
        </Link>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(26rem,0.75fr)] lg:gap-14">
          <div className="grid gap-4">
            <ProductImage className="bg-white" tone={product.images[0]} />
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((image, index) => (
                <ProductImage
                  key={`${image}-${index}`}
                  className="aspect-square border border-cairn-black/10"
                  tone={image}
                />
              ))}
            </div>
          </div>

          <div className="self-start bg-white p-6 lg:p-8">
            <div className="mb-5 flex flex-wrap items-center gap-2">
              {product.featured ? <Badge variant="dark">Destaque</Badge> : null}
              <Badge variant={product.stockStatus === "low_stock" ? "accent" : "neutral"}>
                {stockLabels[product.stockStatus]}
              </Badge>
            </div>

            <Typography className="text-cairn-copper" variant="eyebrow">
              {product.subcategory}
            </Typography>
            <Typography as="h1" className="mt-4 text-cairn-black" variant="h1">
              {product.name}
            </Typography>
            <Typography className="mt-4 text-cairn-gray" variant="body">
              {product.description}
            </Typography>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
              <ProductPrice
                className="[&>span:first-child]:text-2xl"
                compareAtPrice={product.compareAtPrice}
                price={product.price}
              />
              <RatingSummary rating={product.rating} reviewCount={product.reviewCount} />
            </div>

            {product.variants.length ? (
              <div className="mt-8 border-t border-cairn-black/10 pt-6">
                <p className="text-sm font-semibold text-cairn-black">Variantes</p>
                <div className="mt-3 grid gap-2">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.id}
                      className={`flex h-12 items-center justify-between border px-4 text-left text-sm transition ${
                        selectedVariantId === variant.id
                          ? "border-cairn-black bg-cairn-black text-white"
                          : "border-cairn-black/15 bg-white text-cairn-black hover:border-cairn-copper"
                      }`}
                      onClick={() => {
                        setSelectedVariantId(variant.id);
                        setQuantity(1);
                      }}
                      aria-pressed={selectedVariantId === variant.id}
                      type="button"
                    >
                      <span>
                        {[variant.color, variant.size].filter(Boolean).join(" / ")}
                      </span>
                      <span className="text-xs opacity-72">{variant.stock} un.</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="mt-8 border-t border-cairn-black/10 pt-6">
              <div className="flex flex-wrap items-end gap-4">
                <label className="grid gap-2 text-sm font-semibold text-cairn-black">
                  Quantidade
                  <QuantitySelector
                    max={Math.max(1, maxQuantity)}
                    onChange={setQuantity}
                    value={quantity}
                  />
                </label>
                <Button
                  className="min-w-56"
                  disabled={isUnavailable}
                  onClick={handleAddToCart}
                  size="lg"
                >
                  <ShoppingCart size={18} />
                  Adicionar ao carrinho
                </Button>
                <Button
                  aria-label={
                    isFavorite
                      ? "Remover dos favoritos"
                      : "Adicionar aos favoritos"
                  }
                  aria-pressed={isFavorite}
                  onClick={() => toggleFavorite(product)}
                  size="lg"
                  variant="outline"
                >
                  <Heart
                    className={isFavorite ? "fill-cairn-copper text-cairn-copper" : ""}
                    size={18}
                  />
                  {isFavorite ? "Favorito" : "Favoritar"}
                </Button>
              </div>
              {wasAdded ? (
                <p className="mt-3 text-sm font-medium text-cairn-green">
                  Produto adicionado ao carrinho.
                </p>
              ) : null}
            </div>

            <div className="mt-8 grid gap-6 border-t border-cairn-black/10 pt-6 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold text-cairn-black">Detalhes tecnicos</p>
                <ul className="mt-3 grid gap-2 text-sm text-cairn-gray">
                  {product.technicalDetails.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-cairn-black">Materiais</p>
                <ul className="mt-3 grid gap-2 text-sm text-cairn-gray">
                  {product.materials.map((material) => (
                    <li key={material}>{material}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
