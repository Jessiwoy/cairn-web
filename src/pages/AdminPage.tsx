import { PageShell } from "@/components/templates/PageShell";

export function AdminPage() {
  return (
    <PageShell eyebrow="Admin" title="Dashboard administrativo MVP">
      <p className="max-w-2xl text-cairn-gray">
        A area admin tera rotas protegidas, role `admin`, CRUD de produtos e
        gerenciamento simples de pedidos.
      </p>
    </PageShell>
  );
}
