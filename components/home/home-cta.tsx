import Link from "next/link";

export function HomeCTA() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center space-y-6">
        <h2 className="text-2xl font-semibold text-neutral-950 sm:text-3xl">
          ¿Quieres saber más o trabajar con nosotros?
        </h2>

        <p className="text-lg text-neutral-600">
          Contacta con nosotros para distribución, restauración o colaboración.
        </p>

        <Link
          href="/contacto"
          className="inline-flex items-center justify-center rounded-md bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800"
        >
          Contactar
        </Link>
      </div>
    </section>
  );
}
