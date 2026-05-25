import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <section className="bg-cairn-black text-white">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-end px-5 py-16 lg:grid-cols-[1fr_0.8fr] lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-cairn-sand">
            Outdoor retail premium
          </p>
          <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
            Gear built for the long route.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/72 md:text-lg">
            Equipamentos e vestuario outdoor para trilhas, acampamentos,
            trekking e exploracao com desempenho tecnico e visual sobrio.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/catalog"
              className="inline-flex h-12 items-center justify-center bg-white px-6 text-sm font-semibold text-cairn-black transition hover:bg-cairn-sand"
            >
              Explorar produtos
            </Link>
            <Link
              to="/catalog?collection=field-tested"
              className="inline-flex h-12 items-center justify-center border border-white/30 px-6 text-sm font-semibold text-white transition hover:border-cairn-sand hover:text-cairn-sand"
            >
              Field tested
            </Link>
          </div>
        </div>

        <div className="mt-12 hidden border-l border-white/12 pl-10 text-sm leading-7 text-white/64 lg:block">
          <p>Hiking</p>
          <p>Camping</p>
          <p>Trekking</p>
          <p>Bushcraft</p>
        </div>
      </div>
    </section>
  );
}
