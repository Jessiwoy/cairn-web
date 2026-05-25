import { PageShell } from "@/components/templates/PageShell";

export function ProductPage() {
  return (
    <PageShell eyebrow="Produto" title="Detalhes tecnicos e variantes">
      <p className="max-w-2xl text-cairn-gray">
        Galeria, preco, estoque, variantes e acoes de carrinho serao
        implementados no epico de pagina de produto.
      </p>
    </PageShell>
  );
}
