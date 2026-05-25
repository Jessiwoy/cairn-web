import { PageShell } from "@/components/templates/PageShell";

export function RegisterPage() {
  return (
    <PageShell eyebrow="Conta" title="Cadastro">
      <p className="max-w-2xl text-cairn-gray">
        O cadastro sera validado com formulario tipado e integrado ao
        `cairn-api`.
      </p>
    </PageShell>
  );
}
