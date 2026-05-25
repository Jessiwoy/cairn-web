import { PageShell } from "@/components/templates/PageShell";

export function AccountPage() {
  return (
    <PageShell eyebrow="Usuario" title="Area autenticada">
      <p className="max-w-2xl text-cairn-gray">
        Conta, pedidos e wishlist serao protegidos por sessao autenticada.
      </p>
    </PageShell>
  );
}
