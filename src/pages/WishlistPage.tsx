import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { Typography } from "@/components/atoms/Typography";
import { ProductImage } from "@/components/features/products/ProductImage";
import { EmptyState } from "@/components/shared/EmptyState";
import { useWishlistStore } from "@/store/wishlistStore";

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  currency: "BRL",
  style: "currency",
});

export function WishlistPage() {
  const itemCount = useWishlistStore((state) => state.itemCount);
  const items = useWishlistStore((state) => state.items);
  const removeItem = useWishlistStore((state) => state.removeItem);

  if (!items.length) {
    return (
      <section className="bg-cairn-off-white py-14 lg:py-20">
        <Container>
          <EmptyState
            action={
              <Button asChild>
                <Link to="/catalog">Explorar produtos</Link>
              </Button>
            }
            description="Salve equipamentos para comparar e voltar depois."
            title="Sua lista de favoritos esta vazia"
          />
        </Container>
      </section>
    );
  }

  return (
    <section className="bg-cairn-off-white py-14 lg:py-20">
      <Container>
        <div className="mb-10 max-w-3xl">
          <Typography variant="eyebrow">Favoritos</Typography>
          <Typography as="h1" className="mt-4" variant="h1">
            Equipamentos salvos
          </Typography>
          <Typography className="mt-4 text-cairn-gray" variant="body">
            {itemCount} {itemCount === 1 ? "produto salvo" : "produtos salvos"} para
            comparacao.
          </Typography>
        </div>

        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <article key={item.productId} className="group">
              <div className="relative bg-white">
                <Link to={`/products/${item.slug}`} className="block">
                  <ProductImage tone={item.image} />
                </Link>
                <Button
                  aria-label={`Remover ${item.name} dos favoritos`}
                  className="absolute right-3 top-3 bg-white/85 text-cairn-black hover:bg-cairn-sand"
                  onClick={() => removeItem(item.productId)}
                  size="icon"
                  variant="ghost"
                >
                  <Trash2 size={18} />
                </Button>
              </div>
              <Link to={`/products/${item.slug}`} className="block pt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cairn-gray">
                  {item.subcategory}
                </p>
                <h2 className="mt-2 font-heading text-lg font-semibold text-cairn-black transition group-hover:text-cairn-copper">
                  {item.name}
                </h2>
                <p className="mt-4 text-sm font-semibold text-cairn-black">
                  {currencyFormatter.format(item.price)}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
