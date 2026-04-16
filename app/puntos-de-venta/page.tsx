import type { Metadata } from "next";
import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/shared/page-header";
import { siteConfig } from "@/content/site-config";

const channels = [
  {
    title: "Restauración",
    description:
      "Plantas pensadas para aportar valor en cocina profesional, con identidad propia y aplicaciones comprensibles desde el primer contacto.",
  },
  {
    title: "Distribución especializada",
    description:
      "Un canal natural para trasladar el proyecto hacia cliente profesional, retail selectivo o propuestas ligadas a producto diferencial.",
  },
  {
    title: "Puntos de venta afines",
    description:
      "Espacios donde el relato de agricultura biosalina, innovación aplicada y valor gastronómico pueda entenderse con claridad.",
  },
];

const criteria = [
  "Venta alineada con el sentido del proyecto y del producto",
  "Presentación clara de cada planta y su potencial de uso",
  "Canales capaces de explicar valor agrícola y gastronómico",
];

const howItWorks = [
  {
    step: "01",
    title: "Conocer el producto",
    description:
      "Antes de pensar en punto de venta, es importante entender qué planta es cada una, cómo se presenta y qué tipo de valor ofrece.",
  },
  {
    step: "02",
    title: "Evaluar el encaje comercial",
    description:
      "No todos los canales son iguales: el producto necesita un contexto donde pueda explicarse bien y conservar su singularidad.",
  },
  {
    step: "03",
    title: "Abrir la conversación",
    description:
      "Si existe interés en distribución o presencia comercial, el siguiente paso natural es contactar para valorar formato, enfoque y posibilidades.",
  },
];

export const metadata: Metadata = {
  title: `Puntos de venta | ${siteConfig.name}`,
  description:
    "Información sobre distribución y puntos de venta de VERDESAL, con foco en producto, encaje comercial y contexto agrícola.",
};

export default function PuntosDeVentaPage() {
  return (
    <section className="py-10 sm:py-14">
      <PageContainer>
        <PageHeader
          title="Puntos de venta"
          description="Una sección pensada para orientar cómo puede encontrarse o distribuirse el producto, manteniendo siempre el contexto del proyecto."
        />

        <div className="space-y-10 sm:space-y-14">
          <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
            <article className="rounded-[2rem] bg-[#f4f1ec] p-6 sm:p-8 lg:p-10">
              <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                Distribución
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl tracking-tight text-[#b3946a] sm:text-4xl">
                El punto de venta debe ayudar a explicar el producto, no solo a
                colocarlo.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[#5f5950] sm:text-lg sm:leading-8">
                En VERDESAL la distribución tiene sentido cuando respeta la
                lógica del proyecto: primero una base agrícola sólida, después
                un producto bien entendido y finalmente su encaje comercial. Por
                eso esta página funciona hoy como guía y contexto, más que como
                un listado cerrado de ubicaciones.
              </p>
            </article>

            <aside className="rounded-[2rem] border border-neutral-200 bg-white p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                Criterios
              </p>
              <ul className="mt-5 space-y-4">
                {criteria.map((item) => (
                  <li
                    key={item}
                    className="rounded-[1.5rem] border border-neutral-200 bg-neutral-50 px-4 py-4 text-sm leading-6 text-neutral-700 sm:text-base"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </section>

          <section className="space-y-6">
            <div className="max-w-3xl space-y-3">
              <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                Canales afines
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
                Dónde encaja mejor una propuesta como VERDESAL
              </h2>
              <p className="text-base leading-7 text-neutral-600">
                Los puntos de venta no se entienden solo por ubicación, sino por
                su capacidad para presentar bien el producto y su singularidad.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {channels.map((channel) => (
                <article
                  key={channel.title}
                  className="rounded-[1.75rem] border border-neutral-200 bg-white p-6"
                >
                  <h3 className="text-lg font-semibold text-neutral-950">
                    {channel.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-600 sm:text-base">
                    {channel.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-6 sm:p-8 lg:p-10">
            <div className="max-w-3xl space-y-3">
              <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                Cómo avanzar
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
                Del interés comercial a una conversación útil
              </h2>
              <p className="text-base leading-7 text-neutral-600">
                Mientras no exista un directorio público de puntos de venta, la
                mejor forma de trabajar esta sección es orientar bien el
                recorrido comercial y facilitar el siguiente paso.
              </p>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {howItWorks.map((item) => (
                <article
                  key={item.step}
                  className="rounded-[1.5rem] border border-neutral-200 bg-white p-5 sm:p-6"
                >
                  <p className="text-sm font-medium text-[#35542f]">
                    {item.step}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-neutral-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-600 sm:text-base">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-6 rounded-[2rem] bg-[#e8dfd2] p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-end lg:p-10">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                Siguiente paso
              </p>
              <h2 className="max-w-2xl text-2xl tracking-tight text-[#35542f] sm:text-3xl">
                Si quieres explorar distribución o presencia comercial, empieza
                por el producto y luego abre la conversación.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-[#4f4a42]">
                Así será más fácil valorar encaje, narrativa comercial y forma
                de presentación desde una base compartida y realista.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/productos"
                className="inline-flex items-center justify-center rounded-full bg-[#35542f] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Ver productos
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-full border border-[#b8aa97] bg-white/70 px-6 py-3 text-sm font-medium text-[#35542f] transition hover:bg-white"
              >
                Contactar
              </Link>
            </div>
          </section>
        </div>
      </PageContainer>
    </section>
  );
}
