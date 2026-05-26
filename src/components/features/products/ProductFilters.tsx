import type { ChangeEvent } from "react";

import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { categories } from "@/data/categories";
import type { ProductCategory, ProductSort } from "@/types/product";

type ProductFiltersProps = {
  category?: ProductCategory;
  maxPrice?: number;
  onCategoryChange: (category?: ProductCategory) => void;
  onMaxPriceChange: (price?: number) => void;
  onQueryChange: (query: string) => void;
  onSortChange: (sort: ProductSort) => void;
  query: string;
  sort: ProductSort;
};

export function ProductFilters({
  category,
  maxPrice,
  onCategoryChange,
  onMaxPriceChange,
  onQueryChange,
  onSortChange,
  query,
  sort,
}: ProductFiltersProps) {
  const handlePriceChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    onMaxPriceChange(value ? Number(value) : undefined);
  };

  return (
    <aside className="border border-cairn-black/10 bg-white p-5">
      <div className="grid gap-5">
        <Input
          label="Busca"
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Produto, categoria ou termo"
          type="search"
          value={query}
        />

        <label className="grid gap-2 text-sm font-medium text-cairn-black">
          Categoria
          <select
            className="h-11 border border-cairn-black/15 bg-white px-3 text-sm"
            onChange={(event) =>
              onCategoryChange(event.target.value ? (event.target.value as ProductCategory) : undefined)
            }
            value={category ?? ""}
          >
            <option value="">Todas</option>
            {categories.map((item) => (
              <option key={item.id} value={item.slug}>
                {item.name}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-2 text-sm font-medium text-cairn-black">
          Preco
          <select
            className="h-11 border border-cairn-black/15 bg-white px-3 text-sm"
            onChange={handlePriceChange}
            value={maxPrice ?? ""}
          >
            <option value="">Todos</option>
            <option value="500">Ate R$ 500</option>
            <option value="1000">Ate R$ 1.000</option>
            <option value="1500">Ate R$ 1.500</option>
          </select>
        </label>

        <label className="grid gap-2 text-sm font-medium text-cairn-black">
          Ordenacao
          <select
            className="h-11 border border-cairn-black/15 bg-white px-3 text-sm"
            onChange={(event) => onSortChange(event.target.value as ProductSort)}
            value={sort}
          >
            <option value="featured">Destaques</option>
            <option value="price-asc">Menor preco</option>
            <option value="price-desc">Maior preco</option>
            <option value="rating">Melhor avaliacao</option>
          </select>
        </label>

        <Button
          onClick={() => {
            onCategoryChange(undefined);
            onMaxPriceChange(undefined);
            onQueryChange("");
            onSortChange("featured");
          }}
          variant="outline"
        >
          Limpar filtros
        </Button>
      </div>
    </aside>
  );
}
