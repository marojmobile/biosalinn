import Link from "next/link";

export function HomeCTA() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#f4f1ec] px-6 py-12 sm:px-10 lg:px-14">
          <div className="absolute -left-8 bottom-0 h-28 w-28 rounded-[45%] bg-[#7a4b78]" />
          <div className="absolute right-8 top-8 h-20 w-20 rounded-[40%] bg-[#48c7bb]" />
          <div className="absolute right-24 bottom-[-1.5rem] h-24 w-24 rounded-[45%] bg-[#d6c56f]" />

          <div className="relative max-w-2xl space-y-5">
            <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
              Contacto
            </p>

            <h2 className="text-3xl tracking-tight text-[#b3946a] sm:text-4xl">
              ¿Quieres saber más o trabajar con nosotros?
            </h2>

            <p className="text-base leading-7 text-[#5f5950]">
              Restauración, distribución, colaboración o información general
              sobre el proyecto: estaremos encantados de escucharte.
            </p>

            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-full bg-[#35542f] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Contactar
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
