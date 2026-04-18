import Link from "next/link";

export function HomeIntro() {
  return (
    <section className="bg-[#f4f1ec] py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#d8e2d5] via-[#f2f2ef] to-[#bfc9b1] p-8 shadow-sm">
          <div className="absolute -left-6 bottom-8 h-24 w-24 rounded-[45%] bg-[#35542f]" />
          <div className="absolute right-6 top-6 h-16 w-16 rounded-[40%] bg-[#48c7bb]/70" />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
              Sobre nosotros
            </p>
            <h2 className="mt-4 max-w-sm text-3xl tracking-tight text-[#b3946a] sm:text-4xl">
              De una inquietud personal a una huerta marina
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-[#4f4a42]">
              VERDESAL nace de una pregunta muy concreta: qué agricultura tiene
              sentido en un territorio donde la sal, el agua y el suelo ya no
              se pueden mirar como antes.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <p className="max-w-2xl text-lg leading-8 text-[#4f4a42]">
            Alicia Picazo, ingeniera técnica agrícola, llevaba tiempo buscando
            un proyecto propio que no solo fuera viable, sino que también
            ayudara a mejorar el entorno. La respuesta apareció al conocer las
            halófitas y ver en ellas una manera distinta de cultivar.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            <article className="rounded-[1.5rem] border border-[#ddd2c5] bg-white/80 p-5">
              <p className="text-sm font-medium text-[#35542f]">
                Territorio
              </p>
              <p className="mt-2 text-sm leading-6 text-[#666057]">
                No trabajamos contra el lugar, sino con lo que realmente puede
                crecer en él.
              </p>
            </article>

            <article className="rounded-[1.5rem] border border-[#ddd2c5] bg-white/80 p-5">
              <p className="text-sm font-medium text-[#35542f]">
                Halófitas
              </p>
              <p className="mt-2 text-sm leading-6 text-[#666057]">
                Plantas adaptadas a la salinidad, con interés agronómico y valor
                gastronómico real.
              </p>
            </article>

            <article className="rounded-[1.5rem] border border-[#ddd2c5] bg-white/80 p-5">
              <p className="text-sm font-medium text-[#35542f]">
                Cocina
              </p>
              <p className="mt-2 text-sm leading-6 text-[#666057]">
                Ingredientes útiles, sabrosos y comprensibles, pensados para
                tener sitio real en la mesa.
              </p>
            </article>
          </div>

          <Link
            href="/quienes-somos"
            className="inline-flex items-center justify-center rounded-full border border-[#b8aa97] px-5 py-3 text-sm font-medium text-[#35542f] transition hover:bg-white"
          >
            Conocer el proyecto
          </Link>
        </div>
      </div>
    </section>
  );
}
