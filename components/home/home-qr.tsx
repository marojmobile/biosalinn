import Link from "next/link";

export function HomeQR() {
  return (
    <section className="bg-[#35542f] py-16 text-white sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.3em] text-white/65">
            Experiencia móvil
          </p>

          <h2 className="max-w-xl text-3xl tracking-tight sm:text-4xl">
            Escanea el envase y descubre cómo cocinarlo
          </h2>

          <p className="max-w-2xl text-base leading-7 text-white/80">
            Queremos que cada planta se entienda rápido y bien. El acceso desde
            QR conecta producto, contexto y recetas en una vista clara, útil y
            pensada para móvil.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/recetas"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#35542f] transition hover:opacity-90"
            >
              Ver recetas
            </Link>

            <Link
              href="/productos"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Ver plantas
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] bg-white/10 p-6 backdrop-blur-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] bg-white/10 p-5">
              <p className="text-sm font-medium">1. Escanea</p>
              <p className="mt-2 text-sm leading-6 text-white/75">
                Accede directamente desde el envase sin tener que buscar nada.
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-white/10 p-5">
              <p className="text-sm font-medium">2. Entiende</p>
              <p className="mt-2 text-sm leading-6 text-white/75">
                Descubre qué planta es, cómo se usa y qué la hace especial.
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-white/10 p-5">
              <p className="text-sm font-medium">3. Cocina</p>
              <p className="mt-2 text-sm leading-6 text-white/75">
                Encuentra recetas y aplicaciones culinarias visibles en pocos
                segundos.
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-white/10 p-5">
              <p className="text-sm font-medium">4. Conecta</p>
              <p className="mt-2 text-sm leading-6 text-white/75">
                Del producto al proyecto, con una lectura más completa de todo
                lo que hay detrás.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
