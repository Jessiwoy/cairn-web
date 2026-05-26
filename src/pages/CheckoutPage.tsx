import { type FormEvent, useMemo, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { Input } from "@/components/atoms/Input";
import { Typography } from "@/components/atoms/Typography";
import { EmptyState } from "@/components/shared/EmptyState";
import { useCartStore } from "@/store/cartStore";

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  currency: "BRL",
  style: "currency",
});

const shippingOptions = [
  {
    description: "Entrega em 5 a 7 dias uteis",
    id: "standard",
    label: "Entrega padrao",
    price: 0,
  },
  {
    description: "Entrega em 2 a 3 dias uteis",
    id: "express",
    label: "Entrega expressa",
    price: 39,
  },
];

type CheckoutFormState = {
  address: string;
  city: string;
  document: string;
  email: string;
  name: string;
  phone: string;
  state: string;
  zipCode: string;
};

const initialFormState: CheckoutFormState = {
  address: "",
  city: "",
  document: "",
  email: "",
  name: "",
  phone: "",
  state: "",
  zipCode: "",
};

export function CheckoutPage() {
  const clearCart = useCartStore((state) => state.clearCart);
  const itemCount = useCartStore((state) => state.itemCount);
  const items = useCartStore((state) => state.items);
  const subtotal = useCartStore((state) => state.subtotal);
  const [formState, setFormState] = useState(initialFormState);
  const [selectedShippingId, setSelectedShippingId] = useState(shippingOptions[0].id);
  const [orderCode, setOrderCode] = useState<string | null>(null);

  const selectedShipping = useMemo(
    () =>
      shippingOptions.find((option) => option.id === selectedShippingId) ??
      shippingOptions[0],
    [selectedShippingId],
  );

  const total = subtotal + selectedShipping.price;

  const updateField = (field: keyof CheckoutFormState, value: string) => {
    setFormState((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOrderCode(`CAIRN-${Date.now().toString().slice(-6)}`);
    clearCart();
  };

  if (orderCode) {
    return (
      <section className="bg-cairn-off-white py-14 lg:py-20">
        <Container>
          <div className="grid min-h-96 place-items-center bg-white px-6 py-14 text-center">
            <div className="max-w-xl">
              <CheckCircle2 className="mx-auto h-12 w-12 text-cairn-copper" strokeWidth={1.8} />
              <Typography as="h1" className="mt-6" variant="h1">
                Pedido recebido
              </Typography>
              <Typography className="mt-4 text-cairn-gray" variant="body">
                Sua compra foi registrada como pedido simulado. Codigo do pedido:{" "}
                <span className="font-semibold text-cairn-black">{orderCode}</span>.
              </Typography>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button asChild>
                  <Link to="/catalog">Continuar comprando</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/account">Ver minha conta</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  }

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
            description="Adicione itens ao carrinho antes de iniciar a finalizacao."
            title="Nao ha itens para finalizar"
          />
        </Container>
      </section>
    );
  }

  return (
    <section className="bg-cairn-off-white py-14 lg:py-20">
      <Container>
        <div className="mb-10 max-w-3xl">
          <Typography variant="eyebrow">Compra</Typography>
          <Typography as="h1" className="mt-4" variant="h1">
            Finalizacao de compra
          </Typography>
          <Typography className="mt-4 text-cairn-gray" variant="body">
            Fluxo simulado para validar dados de entrega e resumo do pedido.
          </Typography>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_24rem]">
          <form className="grid gap-8" onSubmit={handleSubmit}>
            <section className="bg-white p-6 lg:p-8">
              <Typography as="h2" variant="h2">
                Dados de contato
              </Typography>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <Input
                  label="Nome completo"
                  onChange={(event) => updateField("name", event.target.value)}
                  required
                  value={formState.name}
                />
                <Input
                  label="CPF"
                  onChange={(event) => updateField("document", event.target.value)}
                  required
                  value={formState.document}
                />
                <Input
                  label="E-mail"
                  onChange={(event) => updateField("email", event.target.value)}
                  required
                  type="email"
                  value={formState.email}
                />
                <Input
                  label="Telefone"
                  onChange={(event) => updateField("phone", event.target.value)}
                  required
                  value={formState.phone}
                />
              </div>
            </section>

            <section className="bg-white p-6 lg:p-8">
              <Typography as="h2" variant="h2">
                Entrega
              </Typography>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <Input
                  label="CEP"
                  onChange={(event) => updateField("zipCode", event.target.value)}
                  required
                  value={formState.zipCode}
                />
                <Input
                  label="Endereco"
                  onChange={(event) => updateField("address", event.target.value)}
                  required
                  value={formState.address}
                />
                <Input
                  label="Cidade"
                  onChange={(event) => updateField("city", event.target.value)}
                  required
                  value={formState.city}
                />
                <Input
                  label="Estado"
                  maxLength={2}
                  onChange={(event) => updateField("state", event.target.value.toUpperCase())}
                  required
                  value={formState.state}
                />
              </div>

              <div className="mt-8 grid gap-3">
                <p className="text-sm font-semibold text-cairn-black">Metodo de entrega</p>
                {shippingOptions.map((option) => (
                  <label
                    key={option.id}
                    className={`flex cursor-pointer items-center justify-between gap-4 border p-4 text-sm transition ${
                      selectedShippingId === option.id
                        ? "border-cairn-black bg-cairn-black text-white"
                        : "border-cairn-black/15 bg-white text-cairn-black hover:border-cairn-copper"
                    }`}
                  >
                    <span>
                      <span className="block font-semibold">{option.label}</span>
                      <span className="mt-1 block opacity-72">{option.description}</span>
                    </span>
                    <span className="font-semibold">
                      {option.price ? currencyFormatter.format(option.price) : "Gratis"}
                    </span>
                    <input
                      checked={selectedShippingId === option.id}
                      className="sr-only"
                      name="shipping"
                      onChange={() => setSelectedShippingId(option.id)}
                      type="radio"
                    />
                  </label>
                ))}
              </div>
            </section>

            <section className="bg-white p-6 lg:p-8">
              <Typography as="h2" variant="h2">
                Pagamento
              </Typography>
              <p className="mt-4 text-sm leading-6 text-cairn-gray">
                Pagamento simulado para o MVP. A integracao com gateway fica para uma fase
                posterior.
              </p>
              <Button className="mt-6 w-full md:w-auto" size="lg" type="submit">
                Confirmar pedido
              </Button>
            </section>
          </form>

          <aside className="self-start border border-cairn-black/10 bg-white p-6">
            <Typography as="h2" variant="h2">
              Resumo
            </Typography>
            <div className="mt-6 grid gap-4">
              {items.map((item) => {
                const variantLabel = [item.variant?.color, item.variant?.size]
                  .filter(Boolean)
                  .join(" / ");

                return (
                  <div
                    key={`${item.productId}-${item.variant?.id ?? "default"}`}
                    className="border-b border-cairn-black/10 pb-4 last:border-b-0 last:pb-0"
                  >
                    <div className="flex justify-between gap-4 text-sm">
                      <div>
                        <p className="font-semibold text-cairn-black">{item.name}</p>
                        {variantLabel ? (
                          <p className="mt-1 text-cairn-gray">{variantLabel}</p>
                        ) : null}
                        <p className="mt-1 text-cairn-gray">Qtd. {item.quantity}</p>
                      </div>
                      <p className="font-semibold text-cairn-black">
                        {currencyFormatter.format(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <dl className="mt-6 grid gap-4 border-t border-cairn-black/10 pt-5 text-sm">
              <div className="flex justify-between gap-4 text-cairn-gray">
                <dt>Itens</dt>
                <dd>{itemCount}</dd>
              </div>
              <div className="flex justify-between gap-4 text-cairn-gray">
                <dt>Subtotal</dt>
                <dd className="font-semibold text-cairn-black">
                  {currencyFormatter.format(subtotal)}
                </dd>
              </div>
              <div className="flex justify-between gap-4 text-cairn-gray">
                <dt>Entrega</dt>
                <dd className="font-semibold text-cairn-black">
                  {selectedShipping.price
                    ? currencyFormatter.format(selectedShipping.price)
                    : "Gratis"}
                </dd>
              </div>
              <div className="flex justify-between gap-4 border-t border-cairn-black/10 pt-4 text-base font-semibold text-cairn-black">
                <dt>Total</dt>
                <dd>{currencyFormatter.format(total)}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </Container>
    </section>
  );
}
