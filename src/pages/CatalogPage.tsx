import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { Typography } from "@/components/atoms/Typography";
import { ProductFilters } from "@/components/features/products/ProductFilters";
import { ProductGrid } from "@/components/features/products/ProductGrid";
import { products } from "@/data/products";
import { filterProducts } from "@/features/products/productFilters";
import type { ProductCategory, ProductSort } from "@/types/product";

export function CatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") as ProductCategory | null;
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ProductCategory | undefined>(
    initialCategory ?? undefined,
  );
  const [maxPrice, setMaxPrice] = useState<number | undefined>();
  const [sort, setSort] = useState<ProductSort>("featured");

  const filteredProducts = useMemo(
    () =>
      filterProducts(products, {
        category,
        maxPrice,
        query,
        sort,
        stock: "available",
      }),
    [category, maxPrice, query, sort],
  );

  const handleCategoryChange = (nextCategory?: ProductCategory) => {
    setCategory(nextCategory);
    setSearchParams(nextCategory ? { category: nextCategory } : {});
  };

  const clearFilters = () => {
    setCategory(undefined);
    setMaxPrice(undefined);
    setQuery("");
    setSort("featured");
    setSearchParams({});
  };

  return (
    <section className="py-14 lg:py-20">
      <Container>
        <div className="mb-10 max-w-3xl">
          <Typography variant="eyebrow">Catalogo</Typography>
          <Typography as="h1" className="mt-4" variant="h1">
            Produtos outdoor selecionados
          </Typography>
          <Typography className="mt-4 text-cairn-gray" variant="body">
            Equipamentos, vestuario e acessorios para trilha, camping, trekking
            e exploracao com foco em durabilidade e uso real.
          </Typography>
        </div>

        <div className="grid gap-8 lg:grid-cols-[18rem_1fr]">
          <ProductFilters
            category={category}
            maxPrice={maxPrice}
            onCategoryChange={handleCategoryChange}
            onMaxPriceChange={setMaxPrice}
            onQueryChange={setQuery}
            onSortChange={setSort}
            query={query}
            sort={sort}
          />
          <div>
            <div className="mb-5 flex items-center justify-between border-b border-cairn-black/10 pb-4 text-sm text-cairn-gray">
              <span>{filteredProducts.length} produtos</span>
              <span>Dados locais simulados</span>
            </div>
            <ProductGrid
              emptyAction={
                <Button onClick={clearFilters} variant="outline">
                  Limpar filtros
                </Button>
              }
              products={filteredProducts}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
