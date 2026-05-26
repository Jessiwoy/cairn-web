import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { Typography } from "@/components/atoms/Typography";
import { ProductImage } from "@/components/features/products/ProductImage";
import { QuantitySelector } from "@/components/molecules/QuantitySelector";
import { EmptyState } from "@/components/shared/EmptyState";
import { getCartItemKey, useCartStore } from "@/store/cartStore";

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  currency: "BRL",
  style: "currency",
});

const MOCK_SHIPPING = 0;

export function CartPage() {
  const clearCart = useCartStore((state) => state.clearCart);
  const itemCount = useCartStore((state) => state.itemCount);
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const subtotal = useCartStore((state) => state.subtotal);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  const total = subtotal + MOCK_SHIPPING;

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
            description="Adicione equipamentos ao carrinho para revisar sua compra."
            title="Seu carrinho esta vazio"
          />
        </Container>
      </section>
    );
  }

  return (
    <section className="bg-cairn-off-white py-14 lg:py-20">
      <Container>
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Typography variant="eyebrow">Carrinho</Typography>
            <Typography as="h1" className="mt-4" variant="h1">
              Resumo da compra
            </Typography>
            <Typography className="mt-3 text-cairn-gray" variant="body">
              {itemCount} {itemCount === 1 ? "item selecionado" : "itens selecionados"}
            </Typography>
          </div>
          <Button onClick={clearCart} variant="outline">
            Limpar carrinho
          </Button>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_24rem]">
          <div className="grid gap-4">
            {items.map((item) => {
              const itemKey = getCartItemKey(item);
              const variantLabel = [item.variant?.color, item.variant?.size]
                .filter(Boolean)
                .join(" / ");

              return (
                <article
                  key={itemKey}
                  className="grid gap-4 border border-cairn-black/10 bg-white p-4 md:grid-cols-[8rem_1fr_auto]"
                >
                  <Link to={`/products/${item.slug}`}>
                    <ProductImage className="aspect-square" tone={item.image} />
                  </Link>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cairn-gray">
                      {item.subcategory}
                    </p>
                    <Link
                      to={`/products/${item.slug}`}
                      className="mt-2 block font-heading text-lg font-semibold text-cairn-black transition hover:text-cairn-copper"
                    >
                      {item.name}
                    </Link>
                    {variantLabel ? (
                      <p className="mt-2 text-sm text-cairn-gray">{variantLabel}</p>
                    ) : null}
                    <p className="mt-4 text-sm font-semibold text-cairn-black">
                      {currencyFormatter.format(item.price)}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 md:flex-col md:items-end md:justify-between">
                    <QuantitySelector
                      max={item.stock}
                      onChange={(quantity) => updateQuantity(itemKey, quantity)}
                      value={item.quantity}
                    />
                    <Button
                      aria-label={`Remover ${item.name} do carrinho`}
                      onClick={() => removeItem(itemKey)}
                      size="icon"
                      variant="ghost"
                    >
                      <Trash2 size={18} />
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>

          <aside className="self-start border border-cairn-black/10 bg-white p-6">
            <Typography as="h2" variant="h2">
              Pedido
            </Typography>
            <dl className="mt-6 grid gap-4 text-sm">
              <div className="flex justify-between gap-4 text-cairn-gray">
                <dt>Subtotal</dt>
                <dd className="font-semibold text-cairn-black">
                  {currencyFormatter.format(subtotal)}
                </dd>
              </div>
              <div className="flex justify-between gap-4 text-cairn-gray">
                <dt>Frete</dt>
                <dd className="font-semibold text-cairn-black">Calculado no checkout</dd>
              </div>
              <div className="flex justify-between gap-4 border-t border-cairn-black/10 pt-4 text-base font-semibold text-cairn-black">
                <dt>Total estimado</dt>
                <dd>{currencyFormatter.format(total)}</dd>
              </div>
            </dl>
            <Button asChild className="mt-6 w-full" size="lg">
              <Link to="/checkout">Finalizar compra</Link>
            </Button>
            <Button asChild className="mt-3 w-full" variant="outline">
              <Link to="/catalog">Continuar comprando</Link>
            </Button>
          </aside>
        </div>
      </Container>
    </section>
  );
}
