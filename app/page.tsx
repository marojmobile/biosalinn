import { PageContainer } from "@/components/layout/page-container";

export default function HomePage() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <PageContainer>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              Agricultura biosalina
            </p>

            <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
              Plantas halófitas comestibles con enfoque agrícola, gastronómico e
              innovador.
            </h1>

            <p className="max-w-xl text-lg leading-8 text-neutral-600">
              En VERDESAL cultivamos especies adaptadas a entornos salinos para
              acercarlas a la cocina actual y abrir nuevas posibilidades en
              agricultura y alimentación.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/productos"
                className="inline-flex items-center justify-center rounded-md bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
              >
                Ver productos
              </a>

              <a
                href="/recetas"
                className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50"
              >
                Explorar recetas
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 p-8">
            <div className="aspect-[4/3] rounded-xl bg-neutral-200" />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
