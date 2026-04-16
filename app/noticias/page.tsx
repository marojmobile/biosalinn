import type { Metadata } from "next";
import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/shared/page-header";
import { siteConfig } from "@/content/site-config";

const sections = [
  {
    title: "Actualidad del proyecto",
    description:
      "Avances, hitos y novedades relacionadas con el desarrollo de VERDESAL como proyecto agrícola innovador.",
  },
  {
    title: "Investigación y contexto",
    description:
      "Contenidos ligados a agricultura biosalina, validación de cultivos y conocimiento técnico aplicado al territorio.",
  },
  {
    title: "Presencia y difusión",
    description:
      "Apariciones, colaboraciones, eventos o menciones que ayuden a entender cómo el proyecto gana visibilidad.",
  },
];

const criteria = [
  "Noticias útiles para entender el proyecto, no solo para comunicar actividad",
  "Relato alineado con agricultura, ciencia y producto",
  "Tono claro, sobrio y creíble, evitando ruido promocional",
];

const nextContent = [
  {
    step: "01",
    title: "Novedades del cultivo",
    description:
      "Evolución del proyecto, líneas de trabajo y decisiones que explican cómo avanza VERDESAL sobre el terreno.",
  },
  {
    step: "02",
    title: "Aprendizajes e innovación",
    description:
      "Contenidos que traduzcan la base científica en ideas comprensibles para cliente, colaborador o lector general.",
  },
  {
    step: "03",
    title: "Difusión del producto",
    description:
      "Noticias que conecten ese trabajo con producto real, presencia pública y valor gastronómico cuando proceda.",
  },
];

export const metadata: Metadata = {
  title: `Noticias | ${siteConfig.name}`,
  description:
    "Actualidad de VERDESAL: proyecto agrícola, innovación biosalina, investigación aplicada y presencia en medios.",
};

export default function NoticiasPage() {
  return (
    <section className="py-10 sm:py-14">
      <PageContainer>
        <PageHeader
          title="Noticias"
          description="Actualidad del proyecto, avances en agricultura biosalina y presencia de VERDESAL en contextos de innovación, producto y territorio."
        />

        <div className="space-y-10 sm:space-y-14">
          <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
            <article className="rounded-[2rem] bg-[#f4f1ec] p-6 sm:p-8 lg:p-10">
              <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                Esta sección
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl tracking-tight text-[#b3946a] sm:text-4xl">
                Un espacio para seguir la evolución del proyecto con contexto y
                criterio.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[#5f5950] sm:text-lg sm:leading-8">
                La sección de noticias está pensada para reunir avances,
                aprendizajes y presencia pública de VERDESAL. No se plantea como
                un simple listado de publicaciones, sino como una forma de
                explicar mejor cómo evoluciona el proyecto y qué valor aporta.
              </p>
            </article>

            <aside className="rounded-[2rem] border border-neutral-200 bg-white p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                Criterio editorial
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
                Qué encontrarás aquí
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
                Noticias conectadas con el sentido del proyecto
              </h2>
              <p className="text-base leading-7 text-neutral-600">
                La actualidad de VERDESAL debe ayudar a entender mejor su
                dimensión agrícola, técnica y comercial. Esa es la lógica que
                ordena esta sección.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {sections.map((section) => (
                <article
                  key={section.title}
                  className="rounded-[1.75rem] border border-neutral-200 bg-white p-6"
                >
                  <h3 className="text-lg font-semibold text-neutral-950">
                    {section.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-600 sm:text-base">
                    {section.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-6 sm:p-8 lg:p-10">
            <div className="max-w-3xl space-y-3">
              <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                Próximos contenidos
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
                La sección crecerá desde el proyecto hacia el producto
              </h2>
              <p className="text-base leading-7 text-neutral-600">
                Cuando esta página incorpore publicaciones reales, la prioridad
                seguirá siendo clara: primero contexto de proyecto y cultivo,
                después innovación aplicada y finalmente visibilidad de producto
                y usos.
              </p>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {nextContent.map((item) => (
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
                Mientras tanto
              </p>
              <h2 className="max-w-2xl text-2xl tracking-tight text-[#35542f] sm:text-3xl">
                Si quieres entender mejor la actualidad del proyecto, empieza
                por sus bases y por el producto.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-[#4f4a42]">
                Así la futura sección de noticias tendrá más contexto: primero
                conoces el proyecto, después ves las plantas y entiendes mejor
                cada novedad cuando llegue.
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
