import type { Metadata } from "next";
import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/shared/page-header";
import { siteConfig } from "@/content/site-config";

const principles = [
  {
    title: "Aprovechamiento de entornos salinos",
    description:
      "Exploramos cultivos capaces de desarrollarse en condiciones donde la agricultura convencional encuentra más limitaciones.",
  },
  {
    title: "Conocimiento aplicado",
    description:
      "La innovación en VERDESAL no es decorativa: se orienta a validar especies, mejorar procesos y construir una propuesta agrícola útil.",
  },
  {
    title: "Producto con sentido de uso",
    description:
      "La sostenibilidad también pasa por dar salida real al cultivo, conectándolo con valor gastronómico y comprensión comercial.",
  },
];

const lines = [
  {
    step: "01",
    title: "Territorio y adaptación",
    description:
      "Partimos de las condiciones reales del entorno, del agua disponible y del potencial de la agricultura biosalina para abrir nuevas posibilidades.",
  },
  {
    step: "02",
    title: "Experimentación agronómica",
    description:
      "Observamos, ensayamos y ajustamos para identificar qué plantas halófitas pueden responder con interés productivo y calidad suficiente.",
  },
  {
    step: "03",
    title: "Transferencia de valor",
    description:
      "Convertimos ese trabajo en una narrativa clara de producto para que la innovación se entienda desde el cultivo hasta su aplicación final.",
  },
];

const commitments = [
  "Mirada regenerativa y adaptada al territorio",
  "Base científica al servicio de decisiones concretas",
  "Innovación conectada con producto y mercado",
];

export const metadata: Metadata = {
  title: `Sostenibilidad e innovación | ${siteConfig.name}`,
  description:
    "Descubre cómo VERDESAL conecta agricultura biosalina, base científica e innovación aplicada para desarrollar nuevos cultivos halófitos.",
};

export default function SostenibilidadEInnovacionPage() {
  return (
    <section className="py-10 sm:py-14">
      <PageContainer>
        <PageHeader
          title="Sostenibilidad e innovación"
          description="Investigación, adaptación al territorio y agricultura biosalina para construir un proyecto productivo con base científica."
        />

        <div className="space-y-10 sm:space-y-14">
          <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
            <article className="rounded-[2rem] bg-[#f4f1ec] p-6 sm:p-8 lg:p-10">
              <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                Nuestra mirada
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl tracking-tight text-[#b3946a] sm:text-4xl">
                Sostenibilidad e innovación entendidas desde el campo, no desde
                el discurso.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[#5f5950] sm:text-lg sm:leading-8">
                En VERDESAL la innovación nace de una necesidad real: cultivar
                mejor en condiciones salinas y convertir ese aprendizaje en una
                propuesta agrícola viable. La sostenibilidad no se plantea como
                una capa estética, sino como una forma de producir con criterio,
                observación y utilidad.
              </p>
            </article>

            <aside className="rounded-[2rem] border border-neutral-200 bg-white p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                Compromisos
              </p>
              <ul className="mt-5 space-y-4">
                {commitments.map((commitment) => (
                  <li
                    key={commitment}
                    className="rounded-[1.5rem] border border-neutral-200 bg-neutral-50 px-4 py-4 text-sm leading-6 text-neutral-700 sm:text-base"
                  >
                    {commitment}
                  </li>
                ))}
              </ul>
            </aside>
          </section>

          <section className="space-y-6">
            <div className="max-w-3xl space-y-3">
              <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                Qué significa aquí innovar
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
                Tres principios para construir un proyecto sólido
              </h2>
              <p className="text-base leading-7 text-neutral-600">
                El foco sigue siendo agrícola. La ciencia ayuda a validar, y el
                valor gastronómico aparece como consecuencia natural de un
                producto bien desarrollado.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {principles.map((principle) => (
                <article
                  key={principle.title}
                  className="rounded-[1.75rem] border border-neutral-200 bg-white p-6"
                >
                  <h3 className="text-lg font-semibold text-neutral-950">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-600 sm:text-base">
                    {principle.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-6 sm:p-8 lg:p-10">
            <div className="max-w-3xl space-y-3">
              <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                Líneas de trabajo
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
                Un proceso que une investigación, cultivo y transferencia
              </h2>
              <p className="text-base leading-7 text-neutral-600">
                La sostenibilidad gana fuerza cuando se traduce en decisiones
                concretas y en un producto que puede entenderse, cultivarse y
                usarse con sentido.
              </p>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {lines.map((line) => (
                <article
                  key={line.step}
                  className="rounded-[1.5rem] border border-neutral-200 bg-white p-5 sm:p-6"
                >
                  <p className="text-sm font-medium text-[#35542f]">
                    {line.step}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-neutral-950">
                    {line.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-600 sm:text-base">
                    {line.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-6 rounded-[2rem] bg-[#e8dfd2] p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-end lg:p-10">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                Ver el resultado
              </p>
              <h2 className="max-w-2xl text-2xl tracking-tight text-[#35542f] sm:text-3xl">
                La mejor forma de entender esta línea de trabajo es ver cómo se
                convierte en producto real.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-[#4f4a42]">
                Las plantas muestran el valor del cultivo. Las recetas ayudan a
                visualizar su uso, pero siempre como apoyo a un proyecto que
                empieza en el terreno y en la investigación aplicada.
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
                href="/quienes-somos"
                className="inline-flex items-center justify-center rounded-full border border-[#b8aa97] bg-white/70 px-6 py-3 text-sm font-medium text-[#35542f] transition hover:bg-white"
              >
                Conocer el proyecto
              </Link>
            </div>
          </section>
        </div>
      </PageContainer>
    </section>
  );
}
