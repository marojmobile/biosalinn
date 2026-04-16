import type { Metadata } from "next";
import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";
import { siteConfig } from "@/content/site-config";

const enquiryTypes = [
  {
    title: "Restauración",
    description:
      "Estamos preparando el canal para restaurantes, cocinas y espacios gastronómicos.",
  },
  {
    title: "Distribución",
    description:
      "Muy pronto activaremos la vía de contacto para tiendas, distribuidores y puntos de venta.",
  },
  {
    title: "Colaboraciones y prensa",
    description:
      "También habilitaremos un canal específico para proyectos, medios y colaboraciones.",
  },
];

export const metadata: Metadata = {
  title: `Contacto | ${siteConfig.name}`,
  description:
    "Página temporal de contacto de VERDESAL mientras se activan los nuevos canales corporativos para producto, distribución y colaboraciones.",
};

export default function ContactoPage() {
  return (
    <section className="py-10 sm:py-14">
      <PageContainer>
        <div className="space-y-4 border-b border-neutral-200 pb-8 sm:pb-10">
          <p className="text-xs uppercase tracking-[0.32em] text-[#8d7a63]">
            Contacto
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
            Canales de contacto en actualización
          </h1>
          <p className="max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
            Estamos terminando la nueva web de VERDESAL y preparando los
            canales corporativos para producto, distribución y colaboraciones.
            En breve estarán disponibles con información actualizada.
          </p>
        </div>

        <div className="mt-8 space-y-8 sm:mt-10 sm:space-y-12">
          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {enquiryTypes.map((type, index) => (
              <article
                key={type.title}
                className={[
                  "rounded-[1.5rem] border p-5 sm:p-6",
                  index === 1
                    ? "border-[#ddd2c5] bg-[#f4f1ec]"
                    : "border-neutral-200 bg-white",
                ].join(" ")}
              >
                <h2 className="text-lg font-semibold text-neutral-950">
                  {type.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-neutral-600 sm:text-base">
                  {type.description}
                </p>
              </article>
            ))}
          </section>

          <section className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
            <div className="rounded-[2rem] border border-[#ddd2c5] bg-[#f4f1ec] p-6 sm:p-8">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                  Mensaje temporal
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
                  Muy pronto activaremos el contacto corporativo
                </h2>
                <p className="max-w-2xl text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
                  Estamos ajustando los canales definitivos para atender
                  consultas de restauración, distribución, colaboraciones y
                  prensa con una información más clara y actualizada.
                </p>
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-white/70 bg-white/70 p-5 sm:p-6">
                <p className="text-sm font-medium text-neutral-900">
                  Mientras tanto
                </p>
                <p className="mt-2 text-sm leading-6 text-neutral-600 sm:text-base">
                  Esta página queda en modo temporal para evitar formularios o
                  accesos que todavía no podríamos atender correctamente.
                </p>
              </div>
            </div>

            <aside className="space-y-4">
              <div className="rounded-[2rem] bg-white p-6 ring-1 ring-neutral-200 sm:p-8">
                <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                  Estado actual
                </p>

                <div className="mt-5 space-y-5">
                  <div>
                    <p className="text-sm font-medium text-neutral-900">
                      Canales corporativos
                    </p>
                    <p className="mt-2 text-sm leading-6 text-neutral-600 sm:text-base">
                      Email y línea de atención disponibles en breve.
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-neutral-900">
                      Ubicación del proyecto
                    </p>
                    <p className="mt-2 text-sm leading-6 text-neutral-600 sm:text-base">
                      Castelló d&apos;Empúries
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-neutral-900">
                      Web
                    </p>
                    <p className="mt-2 text-sm text-neutral-600 sm:text-base">
                      {siteConfig.url.replace(/^https?:\/\//, "")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-neutral-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-neutral-950">
                  Qué estamos preparando
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-neutral-600 sm:text-base">
                  <li>
                    Un canal claro para consultas sobre producto y restauración.
                  </li>
                  <li>
                    Información actualizada para distribución y puntos de venta.
                  </li>
                  <li>
                    Una vía específica para colaboraciones, medios y proyectos.
                  </li>
                </ul>
              </div>

              <Link
                href="/productos"
                className="inline-flex items-center text-sm font-medium text-[#35542f] hover:underline"
              >
                Descubrir las plantas mientras activamos el contacto
              </Link>
            </aside>
          </section>
        </div>
      </PageContainer>
    </section>
  );
}
