import type { Metadata } from "next";
import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/shared/page-header";
import { siteConfig } from "@/content/site-config";

const pillars = [
  {
    title: "Proyecto agrícola innovador",
    description:
      "VERDESAL parte de una pregunta concreta: cómo cultivar con sentido en entornos salinos y convertir esa realidad en una oportunidad productiva.",
  },
  {
    title: "Base científica y agronómica",
    description:
      "Trabajamos desde la observación, la experimentación y el conocimiento técnico para validar cultivos halófitos útiles y viables.",
  },
  {
    title: "Valor gastronómico real",
    description:
      "Las plantas no se presentan como curiosidad, sino como producto: comprensibles, cocinables y con aplicaciones claras para restauración y retail.",
  },
];

const approach = [
  {
    step: "01",
    title: "Investigamos el terreno",
    description:
      "Analizamos las posibilidades del cultivo biosalino desde una mirada práctica, ligada al territorio y a sus condiciones reales.",
  },
  {
    step: "02",
    title: "Cultivamos con criterio",
    description:
      "Seleccionamos plantas halófitas con interés agrícola y gastronómico, priorizando aquellas que pueden convertirse en producto comprensible.",
  },
  {
    step: "03",
    title: "Demostramos su uso",
    description:
      "La cocina entra como validación y demostración de valor, ayudando a visualizar cómo estas plantas pueden integrarse en propuestas reales.",
  },
];

const facts = [
  "Cultivo de plantas halófitas comestibles",
  "Enfoque mobile-first también en el relato de marca",
  "Relación entre agricultura, ciencia y cocina",
];

export const metadata: Metadata = {
  title: `Quiénes somos | ${siteConfig.name}`,
  description:
    "Conoce el origen de VERDESAL: un proyecto agrícola que une cultivo biosalino, base científica y valor gastronómico.",
};

export default function QuienesSomosPage() {
  return (
    <section className="py-10 sm:py-14">
      <PageContainer>
        <PageHeader
          title="Quiénes somos"
          description="VERDESAL es un proyecto agrícola que explora el cultivo de plantas halófitas comestibles con base científica y vocación gastronómica."
        />

        <div className="space-y-10 sm:space-y-14">
          <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
            <article className="rounded-[2rem] bg-[#f4f1ec] p-6 sm:p-8 lg:p-10">
              <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                El proyecto
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl tracking-tight text-[#b3946a] sm:text-4xl">
                Agricultura biosalina con una mirada clara: cultivar, validar y
                dar valor.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[#5f5950] sm:text-lg sm:leading-8">
                VERDESAL nace para demostrar que los entornos salinos pueden dar
                lugar a nuevos cultivos y nuevas formas de producir. El proyecto
                conecta campo, conocimiento técnico y aplicación culinaria para
                convertir las plantas halófitas en una propuesta creíble y
                útil.
              </p>
            </article>

            <aside className="rounded-[2rem] border border-neutral-200 bg-white p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                Qué nos define
              </p>
              <ul className="mt-5 space-y-4">
                {facts.map((fact) => (
                  <li
                    key={fact}
                    className="rounded-[1.5rem] border border-neutral-200 bg-neutral-50 px-4 py-4 text-sm leading-6 text-neutral-700 sm:text-base"
                  >
                    {fact}
                  </li>
                ))}
              </ul>
            </aside>
          </section>

          <section className="space-y-6">
            <div className="max-w-3xl space-y-3">
              <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                Nuestra base
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
                Un proyecto construido sobre tres capas complementarias
              </h2>
              <p className="text-base leading-7 text-neutral-600">
                La prioridad es agrícola y técnica. La dimensión gastronómica
                aparece para hacer visible el valor del producto, no para
                sustituirlo.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {pillars.map((pillar) => (
                <article
                  key={pillar.title}
                  className="rounded-[1.75rem] border border-neutral-200 bg-white p-6"
                >
                  <h3 className="text-lg font-semibold text-neutral-950">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-600 sm:text-base">
                    {pillar.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-6 sm:p-8 lg:p-10">
            <div className="max-w-3xl space-y-3">
              <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                Cómo trabajamos
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
                Del cultivo a la comprensión del producto
              </h2>
              <p className="text-base leading-7 text-neutral-600">
                El recorrido de VERDESAL busca traducir investigación y cultivo
                en una propuesta fácil de entender para cliente, distribuidor o
                cocina profesional.
              </p>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {approach.map((item) => (
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
                Explorar VERDESAL
              </p>
              <h2 className="max-w-2xl text-2xl tracking-tight text-[#35542f] sm:text-3xl">
                El proyecto se entiende mejor cuando ves las plantas y cómo se
                aplican.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-[#4f4a42]">
                Productos y recetas ayudan a aterrizar el trabajo de fondo:
                primero el cultivo y el valor del producto, después su uso en
                cocina.
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
