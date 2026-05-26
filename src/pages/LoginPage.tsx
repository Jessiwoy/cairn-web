import { PageShell } from "@/components/templates/PageShell";

export function LoginPage() {
  return (
    <PageShell eyebrow="Conta" title="Entrar">
      <p className="max-w-2xl text-cairn-gray">
        Autenticacao real com JWT e persistencia de sessao sera integrada com o
        backend no MVP.
      </p>
    </PageShell>
  );
}
