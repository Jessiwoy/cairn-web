import { Link } from "react-router-dom";

import { PageShell } from "@/components/templates/PageShell";

export function NotFoundPage() {
  return (
    <PageShell eyebrow="404" title="Pagina nao encontrada">
      <Link
        to="/"
        className="inline-flex h-11 items-center bg-cairn-black px-5 text-sm font-semibold text-white transition hover:bg-cairn-green"
      >
        Voltar para home
      </Link>
    </PageShell>
  );
}
