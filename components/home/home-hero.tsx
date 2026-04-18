import Image from "next/image";
import Link from "next/link";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[#e8dfd2] py-14 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8">
        <div className="relative z-10 max-w-3xl">
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#35542f]">
            VERDESAL
          </p>

          <div className="relative w-full max-w-[760px]">
            <Image
              src="/images/decor/01_morado.svg"
              alt=""
              width={1175}
              height={492}
              priority
              className="h-auto w-full"
            />

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-[9%]">
              <h1 className="text-center font-serif text-[clamp(2.4rem,6.2vw,5.8rem)] leading-[0.88] tracking-[-0.03em] text-white">
                <span className="block">Huerta marina</span>
                <span className="mt-[0.08em] block">ecológica</span>
              </h1>
            </div>
          </div>

          <p className="mt-8 max-w-2xl text-base leading-7 text-[#4f4a42] sm:text-lg sm:leading-8">
            Cultivamos halófitas con agua salobre en una agricultura biosalina
            conectada con el territorio, la base científica y el valor real en
            cocina.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/productos"
              className="inline-flex items-center justify-center rounded-full bg-[#35542f] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Ver productos
            </Link>

            <Link
              href="/recetas"
              className="inline-flex items-center justify-center rounded-full border border-[#b8aa97] bg-white/60 px-6 py-3 text-sm font-medium text-[#35542f] transition hover:bg-white"
            >
              Ver recetas
            </Link>
          </div>
        </div>

        <div className="relative hidden min-h-[420px] lg:block">
          <div className="absolute right-6 top-4 h-[320px] w-[260px] overflow-hidden rounded-[42%]">
            <Image
              src="/images/plants/placeholder.jpg"
              alt="Paisaje y entorno de VERDESAL"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute right-0 top-24 h-28 w-10 rounded-full bg-[#35542f]" />
          <div className="absolute right-2 top-[22rem] h-16 w-16 rounded-full bg-[#d9ca7a]/90" />
        </div>
      </div>
    </section>
  );
}
