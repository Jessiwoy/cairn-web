import { PageShell } from "@/components/templates/PageShell";

export function CheckoutPage() {
  return (
    <PageShell eyebrow="Compra" title="Finalizacao de compra simulada">
      <p className="max-w-2xl text-cairn-gray">
        O MVP tera fluxo de finalizacao plausivel sem integracao com Stripe.
      </p>
    </PageShell>
  );
}
