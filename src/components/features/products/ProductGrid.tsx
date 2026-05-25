import type { ReactNode } from "react";

import { Button } from "@/components/atoms/Button";
import { ProductCard } from "@/components/features/products/ProductCard";
import { EmptyState } from "@/components/shared/EmptyState";
import type { Product } from "@/types/product";

type ProductGridProps = {
  emptyAction?: ReactNode;
  products: Product[];
};

export function ProductGrid({ emptyAction, products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <EmptyState
        action={emptyAction ?? <Button variant="outline">Ajustar filtros</Button>}
        description="Ajuste busca, categoria ou faixa de preco para encontrar produtos no catalogo."
        title="Nenhum produto encontrado"
      />
    );
  }

  return (
    <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
