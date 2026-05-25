import { Link } from "react-router-dom";

import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { Typography } from "@/components/atoms/Typography";
import { FeaturedProducts } from "@/components/features/products/FeaturedProducts";
import { products } from "@/data/products";

export function HomePage() {
  const featuredProducts = products.filter((product) => product.featured).slice(0, 3);

  return (
    <>
      <section className="bg-cairn-black text-white">
        <Container className="grid min-h-[calc(100vh-4rem)] items-end py-16 lg:grid-cols-[1fr_0.8fr] lg:py-24">
          <div className="max-w-2xl">
            <Typography className="mb-5 text-cairn-sand" variant="eyebrow">
              Outdoor retail premium
            </Typography>
            <Typography as="h1" variant="display">
              Gear built for the long route.
            </Typography>
            <Typography className="mt-6 max-w-xl text-white/72 md:text-lg" variant="body">
              Equipamentos e vestuario outdoor para trilhas, acampamentos,
              trekking e exploracao com desempenho tecnico e visual sobrio.
            </Typography>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary">
                <Link to="/catalog">Explorar produtos</Link>
              </Button>
              <Button
                asChild
                className="border-white/30 text-white hover:border-cairn-sand hover:text-cairn-sand"
                size="lg"
                variant="outline"
              >
                <Link to="/catalog?collection=field-tested">Field tested</Link>
              </Button>
            </div>
          </div>

          <div className="mt-12 hidden border-l border-white/12 pl-10 text-sm leading-7 text-white/64 lg:block">
            <p>Hiking</p>
            <p>Camping</p>
            <p>Trekking</p>
            <p>Bushcraft</p>
          </div>
        </Container>
      </section>
      <FeaturedProducts products={featuredProducts} />
    </>
  );
}
