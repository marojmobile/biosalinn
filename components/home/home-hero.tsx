import Link from "next/link";

export function HomeHero() {
  return (
    <section className="bg-neutral-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl space-y-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            VERDESAL
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
            Agricultura biosalina y plantas halófitas comestibles
          </h1>

          <p className="text-lg leading-8 text-neutral-600">
            Cultivamos plantas adaptadas a entornos salinos con alto valor
            gastronómico. Una propuesta agrícola innovadora conectada con la
            cocina y el territorio.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/productos"
              className="inline-flex items-center justify-center rounded-md bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800"
            >
              Ver plantas
            </Link>

            <Link
              href="/recetas"
              className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-100"
            >
              Ver recetas
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
