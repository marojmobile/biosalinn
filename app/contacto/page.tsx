import type { Metadata } from "next";
import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/shared/page-header";
import { siteConfig } from "@/content/site-config";

const contactTopics = [
  {
    title: "Restauración y cocina profesional",
    description:
      "Si quieres conocer mejor las plantas, su valor culinario o posibles aplicaciones en carta, esta es una buena puerta de entrada.",
  },
  {
    title: "Distribución y puntos de venta",
    description:
      "Podemos explorar cómo presentar el producto, qué perfil tiene cada planta y cómo encaja dentro de una propuesta comercial real.",
  },
  {
    title: "Colaboraciones e investigación",
    description:
      "VERDESAL también puede abrir conversaciones ligadas a innovación agrícola, divulgación y desarrollo de nuevos cultivos.",
  },
];

const nextSteps = [
  "Cuéntanos el contexto de tu interés y el tipo de colaboración que buscas",
  "Te responderemos con la información más útil según proyecto, producto o aplicación",
  "Si tiene sentido, podremos aterrizar la conversación en producto, pruebas o colaboración",
];

export const metadata: Metadata = {
  title: `Contacto | ${siteConfig.name}`,
  description:
    "Contacto con VERDESAL para colaboraciones, producto, distribución o información general sobre el proyecto agrícola.",
};

export default function ContactoPage() {
  return (
    <section className="py-10 sm:py-14">
      <PageContainer>
        <PageHeader
          title="Contacto"
          description="Estamos abiertos a conversaciones sobre producto, distribución, colaboración e información general sobre VERDESAL."
        />

        <div className="space-y-10 sm:space-y-14">
          <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
            <article className="rounded-[2rem] bg-[#f4f1ec] p-6 sm:p-8 lg:p-10">
              <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                Hablemos
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl tracking-tight text-[#b3946a] sm:text-4xl">
                Una conversación útil empieza por entender bien el proyecto y
                el producto.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[#5f5950] sm:text-lg sm:leading-8">
                Si quieres saber más sobre VERDESAL, explorar colaboraciones o
                conocer mejor nuestras plantas halófitas, esta página reúne el
                contexto básico para iniciar la conversación de forma clara y
                ordenada.
              </p>
            </article>

            <aside className="rounded-[2rem] border border-neutral-200 bg-white p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                Referencia
              </p>
              <div className="mt-5 space-y-4">
                <div className="rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-5">
                  <p className="text-sm font-medium text-neutral-900">
                    Proyecto
                  </p>
                  <p className="mt-2 text-sm leading-6 text-neutral-600 sm:text-base">
                    {siteConfig.name} · {siteConfig.legalName}
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-5">
                  <p className="text-sm font-medium text-neutral-900">
                    Ubicación
                  </p>
                  <p className="mt-2 text-sm leading-6 text-neutral-600 sm:text-base">
                    Castelló d&apos;Empúries
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-5">
                  <p className="text-sm font-medium text-neutral-900">
                    Enfoque
                  </p>
                  <p className="mt-2 text-sm leading-6 text-neutral-600 sm:text-base">
                    Agricultura biosalina, base científica y valor gastronómico
                    aplicado al producto.
                  </p>
                </div>
              </div>
            </aside>
          </section>

          <section className="space-y-6">
            <div className="max-w-3xl space-y-3">
              <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                Tipos de consulta
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
                Podemos empezar por aquí
              </h2>
              <p className="text-base leading-7 text-neutral-600">
                El interés puede venir por el proyecto, por el producto o por
                su aplicación. En todos los casos, la conversación parte de una
                base agrícola clara.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {contactTopics.map((topic) => (
                <article
                  key={topic.title}
                  className="rounded-[1.75rem] border border-neutral-200 bg-white p-6"
                >
                  <h3 className="text-lg font-semibold text-neutral-950">
                    {topic.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-600 sm:text-base">
                    {topic.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-6 sm:p-8 lg:p-10">
            <div className="max-w-3xl space-y-3">
              <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                Cómo preparar el contacto
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
                Cuanto más claro sea el contexto, más útil será la respuesta
              </h2>
              <p className="text-base leading-7 text-neutral-600">
                Esta web todavía no muestra un canal directo publicado dentro
                del propio sitio, pero sí puede ayudarte a enfocar bien la
                conversación que quieras abrir con VERDESAL.
              </p>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {nextSteps.map((step, index) => (
                <article
                  key={step}
                  className="rounded-[1.5rem] border border-neutral-200 bg-white p-5 sm:p-6"
                >
                  <p className="text-sm font-medium text-[#35542f]">
                    0{index + 1}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-neutral-600 sm:text-base">
                    {step}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-6 rounded-[2rem] bg-[#e8dfd2] p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-end lg:p-10">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                Antes de escribir
              </p>
              <h2 className="max-w-2xl text-2xl tracking-tight text-[#35542f] sm:text-3xl">
                Si quieres aterrizar mejor la conversación, empieza por conocer
                el proyecto y las plantas.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-[#4f4a42]">
                Así será más fácil contextualizar una colaboración, una consulta
                comercial o una conversación técnica desde una base compartida.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/quienes-somos"
                className="inline-flex items-center justify-center rounded-full bg-[#35542f] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Conocer el proyecto
              </Link>
              <Link
                href="/productos"
                className="inline-flex items-center justify-center rounded-full border border-[#b8aa97] bg-white/70 px-6 py-3 text-sm font-medium text-[#35542f] transition hover:bg-white"
              >
                Ver productos
              </Link>
            </div>
          </section>
        </div>
      </PageContainer>
    </section>
  );
}
