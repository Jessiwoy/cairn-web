import { Link } from "react-router-dom";

import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { Typography } from "@/components/atoms/Typography";
import { ProductGrid } from "@/components/features/products/ProductGrid";
import type { Product } from "@/types/product";

type FeaturedProductsProps = {
  products: Product[];
};

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <section className="bg-cairn-off-white py-16 lg:py-24">
      <Container>
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Typography variant="eyebrow">Field tested</Typography>
            <Typography as="h2" className="mt-3 max-w-2xl" variant="h2">
              Equipamentos centrais para a proxima rota.
            </Typography>
          </div>
          <Button asChild variant="outline">
            <Link to="/catalog">Ver catalogo</Link>
          </Button>
        </div>
        <ProductGrid products={products} />
      </Container>
    </section>
  );
}
