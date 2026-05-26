import { Link } from "react-router-dom";

import { Badge } from "@/components/atoms/Badge";
import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { Typography } from "@/components/atoms/Typography";
import { ProductImage } from "@/components/features/products/ProductImage";
import { accountAddresses, accountOrders, accountUser } from "@/data/account";
import type { OrderStatus } from "@/types/account";

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  currency: "BRL",
  style: "currency",
});

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

const formatDate = (date: string) => dateFormatter.format(new Date(`${date}T12:00:00`));

const statusLabels: Record<OrderStatus, string> = {
  delivered: "Entregue",
  processing: "Em preparo",
  shipped: "Em transporte",
};

const accountNavItems = [
  { label: "Visao geral", to: "#visao-geral" },
  { label: "Pedidos", to: "#pedidos" },
  { label: "Endereco", to: "#endereco" },
  { label: "Favoritos", to: "/wishlist" },
];

export function AccountPage() {
  const latestOrder = accountOrders[0];
  const totalSpent = accountOrders.reduce((total, order) => total + order.total, 0);
  const primaryAddress = accountAddresses[0];

  return (
    <section className="bg-cairn-off-white py-14 lg:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[18rem_1fr]">
          <aside className="self-start bg-cairn-black p-6 text-white">
            <Typography variant="eyebrow">Conta</Typography>
            <h1 className="mt-4 font-heading text-3xl font-semibold leading-tight">
              {accountUser.name}
            </h1>
            <p className="mt-3 text-sm leading-6 text-white/72">{accountUser.email}</p>

            <nav aria-label="Navegacao da conta" className="mt-8 grid gap-2 text-sm">
              {accountNavItems.map((item) =>
                item.to.startsWith("/") ? (
                  <Link
                    className="border border-white/12 px-4 py-3 font-semibold text-white transition hover:border-cairn-copper hover:text-cairn-copper"
                    key={item.label}
                    to={item.to}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    className="border border-white/12 px-4 py-3 font-semibold text-white transition hover:border-cairn-copper hover:text-cairn-copper"
                    href={item.to}
                    key={item.label}
                  >
                    {item.label}
                  </a>
                ),
              )}
            </nav>
          </aside>

          <div className="grid gap-8">
            <header className="bg-white p-6 lg:p-8" id="visao-geral">
              <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
                <div>
                  <Typography variant="eyebrow">Area do cliente</Typography>
                  <Typography as="h2" className="mt-4" variant="h1">
                    Conta e pedidos
                  </Typography>
                  <Typography className="mt-4 max-w-2xl text-cairn-gray" variant="body">
                    Dados simulados para validar a experiencia da area autenticada antes
                    da integracao com API e JWT.
                  </Typography>
                </div>
                <Badge variant="accent">Sessao mock</Badge>
              </div>

              <dl className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="border border-cairn-black/10 p-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-cairn-gray">
                    Pedidos
                  </dt>
                  <dd className="mt-3 font-heading text-3xl font-semibold text-cairn-black">
                    {accountOrders.length}
                  </dd>
                </div>
                <div className="border border-cairn-black/10 p-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-cairn-gray">
                    Total historico
                  </dt>
                  <dd className="mt-3 font-heading text-3xl font-semibold text-cairn-black">
                    {currencyFormatter.format(totalSpent)}
                  </dd>
                </div>
                <div className="border border-cairn-black/10 p-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-cairn-gray">
                    Cliente desde
                  </dt>
                  <dd className="mt-3 font-heading text-3xl font-semibold text-cairn-black">
                    {new Date(accountUser.createdAt).getFullYear()}
                  </dd>
                </div>
              </dl>
            </header>

            <section className="grid gap-8 lg:grid-cols-[1fr_20rem]">
              <div className="bg-white p-6 lg:p-8" id="pedidos">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                  <div>
                    <Typography variant="eyebrow">Pedidos recentes</Typography>
                    <Typography as="h2" className="mt-3" variant="h2">
                      Historico de compra
                    </Typography>
                  </div>
                  <p className="text-sm font-semibold text-cairn-gray">
                    Ultimo pedido: {latestOrder.id}
                  </p>
                </div>

                <div className="mt-8 grid gap-5">
                  {accountOrders.map((order) => (
                    <article className="border border-cairn-black/10 p-4 lg:p-5" key={order.id}>
                      <div className="flex flex-col justify-between gap-4 border-b border-cairn-black/10 pb-4 sm:flex-row sm:items-start">
                        <div>
                          <h3 className="font-heading text-xl font-semibold text-cairn-black">
                            {order.id}
                          </h3>
                          <p className="mt-1 text-sm text-cairn-gray">
                            {formatDate(order.createdAt)}
                          </p>
                        </div>
                        <div className="flex flex-wrap items-center gap-3">
                          <Badge variant={order.status === "delivered" ? "neutral" : "accent"}>
                            {statusLabels[order.status]}
                          </Badge>
                          <p className="text-sm font-semibold text-cairn-black">
                            {currencyFormatter.format(order.total)}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 grid gap-4">
                        {order.items.map((item) => (
                          <div
                            className="grid grid-cols-[4.5rem_1fr] gap-4 sm:grid-cols-[5rem_1fr_auto] sm:items-center"
                            key={`${order.id}-${item.productId}`}
                          >
                            <Link to={`/products/${item.slug}`}>
                              <ProductImage className="aspect-square" tone={item.image} />
                            </Link>
                            <div>
                              <Link
                                className="font-semibold text-cairn-black transition hover:text-cairn-copper"
                                to={`/products/${item.slug}`}
                              >
                                {item.name}
                              </Link>
                              <p className="mt-1 text-sm text-cairn-gray">
                                {item.variantLabel ? `${item.variantLabel} - ` : ""}
                                Qtd. {item.quantity}
                              </p>
                            </div>
                            <p className="text-sm font-semibold text-cairn-black sm:text-right">
                              {currencyFormatter.format(item.price)}
                            </p>
                          </div>
                        ))}
                      </div>

                      <p className="mt-4 border-t border-cairn-black/10 pt-4 text-sm text-cairn-gray">
                        {order.deliveryEstimate}
                      </p>
                    </article>
                  ))}
                </div>
              </div>

              <aside className="grid gap-8 self-start">
                <section className="bg-white p-6" id="endereco">
                  <Typography variant="eyebrow">Endereco</Typography>
                  <Typography as="h2" className="mt-3" variant="h2">
                    Entrega salva
                  </Typography>
                  <div className="mt-5 text-sm leading-6 text-cairn-gray">
                    <p className="font-semibold text-cairn-black">{primaryAddress.label}</p>
                    <p>{primaryAddress.line1}</p>
                    {primaryAddress.line2 ? <p>{primaryAddress.line2}</p> : null}
                    <p>
                      {primaryAddress.city}, {primaryAddress.state}
                    </p>
                    <p>CEP {primaryAddress.zipCode}</p>
                  </div>
                </section>

                <section className="bg-white p-6">
                  <Typography variant="eyebrow">Proximo passo</Typography>
                  <Typography as="h2" className="mt-3" variant="h2">
                    Continuar jornada
                  </Typography>
                  <div className="mt-6 grid gap-3">
                    <Button asChild className="w-full" variant="outline">
                      <Link to="/wishlist">Ver favoritos</Link>
                    </Button>
                    <Button asChild className="w-full">
                      <Link to="/catalog">Explorar produtos</Link>
                    </Button>
                  </div>
                </section>
              </aside>
            </section>
          </div>
        </div>
      </Container>
    </section>
  );
}
