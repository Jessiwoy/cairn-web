import { PageShell } from "@/components/templates/PageShell";

export function CartPage() {
  return (
    <PageShell eyebrow="Carrinho" title="Resumo da compra">
      <p className="max-w-2xl text-cairn-gray">
        O carrinho tera itens, quantidades, subtotal e persistencia local na
        fase mock.
      </p>
    </PageShell>
  );
}
