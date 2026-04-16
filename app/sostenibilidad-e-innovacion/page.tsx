import type { Metadata } from "next";
import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: `Sostenibilidad e innovación | ${siteConfig.name}`,
  description:
    "Una explicación clara del enfoque VERDESAL: agricultura biosalina, halófitas, uso de agua salobre y adaptación a entornos con salinidad.",
};

export default function SostenibilidadEInnovacionPage() {
  return (
    <section className="py-10 sm:py-14">
      <PageContainer>
        <div className="space-y-5 border-b border-neutral-200 pb-8 sm:pb-10">
          <p className="text-xs uppercase tracking-[0.32em] text-[#8d7a63]">
            Sostenibilidad e innovación
          </p>
          <h1 className="max-w-4xl text-4xl tracking-tight text-neutral-950 sm:text-5xl">
            Una agricultura pensada para responder a la salinidad, la escasez de
            agua dulce y la necesidad de nuevos cultivos.
          </h1>
          <p className="max-w-3xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
            VERDESAL trabaja desde una idea sencilla: si cambian las condiciones
            del territorio, también debe cambiar la forma de cultivar. La
            agricultura biosalina abre una vía para producir con más adaptación,
            más resiliencia y mayor claridad sobre el valor del producto.
          </p>
        </div>

        <div className="mt-10 space-y-12 sm:mt-14 sm:space-y-16">
          <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                El problema
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
                No todas las agriculturas responden bien a escenarios de
                salinidad y presión hídrica.
              </h2>
            </div>

            <div className="space-y-4 text-base leading-7 text-neutral-600">
              <p>
                En muchos entornos, la disponibilidad de agua dulce es cada vez
                más limitada y la salinidad condiciona de forma directa la
                capacidad productiva del suelo. Eso obliga a replantear qué se
                cultiva, cómo se cultiva y con qué expectativas de resiliencia.
              </p>
              <p>
                La cuestión no es solo ambiental. También es agronómica y
                económica: si un cultivo no se adapta bien al contexto, su
                viabilidad se reduce y el margen de innovación real se estrecha.
              </p>
              <div className="rounded-[1.75rem] border border-neutral-200 bg-neutral-50 p-5 sm:p-6">
                <ul className="space-y-3 text-sm leading-6 text-neutral-700 sm:text-base">
                  <li>Escasez creciente de agua dulce disponible.</li>
                  <li>Condiciones salinas que limitan muchos cultivos convencionales.</li>
                  <li>Necesidad de sistemas agrícolas más adaptados y resilientes.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="grid gap-8 rounded-[2rem] bg-[#f4f1ec] p-6 sm:p-8 lg:grid-cols-[1fr_1fr] lg:p-10">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                La solución VERDESAL
              </p>
              <h2 className="text-2xl tracking-tight text-[#35542f] sm:text-3xl">
                Trabajar con halófitas y agua salobre desde una lógica de
                adaptación.
              </h2>
            </div>

            <div className="space-y-4 text-base leading-7 text-[#4f4a42]">
              <p>
                Las halófitas son plantas adaptadas a condiciones de salinidad.
                En lugar de forzar cultivos menos adecuados, VERDESAL explora
                especies que pueden responder mejor al contexto real del
                territorio.
              </p>
              <p>
                La agricultura biosalina permite abrir nuevas opciones a partir
                del uso de agua salobre, siempre con una mirada técnica y
                experimental. No se trata solo de producir, sino de validar qué
                tiene sentido agronómico y cómo puede convertirse en producto.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <div className="max-w-3xl space-y-3">
              <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                Cómo funciona
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
                Un proceso sencillo de entender, aunque técnicamente exigente
              </h2>
            </div>

            <div className="space-y-4">
              <article className="rounded-[1.75rem] border border-neutral-200 bg-white p-6">
                <div className="grid gap-4 lg:grid-cols-[120px_1fr] lg:items-start">
                  <p className="text-sm font-medium text-[#35542f]">Paso 1</p>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-neutral-950">
                      Observamos el contexto
                    </h3>
                    <p className="text-sm leading-6 text-neutral-600 sm:text-base">
                      Partimos de las condiciones reales del suelo, del agua
                      disponible y del tipo de limitaciones que plantea un
                      entorno salino.
                    </p>
                  </div>
                </div>
              </article>

              <article className="rounded-[1.75rem] border border-neutral-200 bg-white p-6">
                <div className="grid gap-4 lg:grid-cols-[120px_1fr] lg:items-start">
                  <p className="text-sm font-medium text-[#35542f]">Paso 2</p>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-neutral-950">
                      Seleccionamos y ensayamos
                    </h3>
                    <p className="text-sm leading-6 text-neutral-600 sm:text-base">
                      Identificamos halófitas con potencial, evaluamos su
                      comportamiento y aprendemos qué especies pueden sostenerse
                      con interés productivo.
                    </p>
                  </div>
                </div>
              </article>

              <article className="rounded-[1.75rem] border border-neutral-200 bg-white p-6">
                <div className="grid gap-4 lg:grid-cols-[120px_1fr] lg:items-start">
                  <p className="text-sm font-medium text-[#35542f]">Paso 3</p>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-neutral-950">
                      Convertimos cultivo en producto
                    </h3>
                    <p className="text-sm leading-6 text-neutral-600 sm:text-base">
                      El trabajo técnico se traduce en una propuesta más clara:
                      plantas con valor agrícola, potencial comercial y
                      aplicaciones culinarias comprensibles.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                Impacto
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
                Lo relevante no es solo el método, sino lo que ese método hace
                posible
              </h2>
            </div>

            <div className="space-y-4">
              <div className="rounded-[1.75rem] border border-neutral-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-neutral-950">
                  Ambiental
                </h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600 sm:text-base">
                  Favorece una agricultura más adaptada a contextos donde el uso
                  de agua dulce y la presión salina obligan a pensar de otra
                  manera.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-neutral-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-neutral-950">
                  Productivo
                </h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600 sm:text-base">
                  Abre la puerta a nuevos cultivos y nuevas formas de construir
                  valor agrícola a partir de condiciones que antes se percibían
                  solo como límite.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-neutral-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-neutral-950">
                  Gastronómico
                </h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600 sm:text-base">
                  Genera productos con identidad propia, útiles para cocina y
                  capaces de trasladar al mercado una historia real de cultivo,
                  adaptación e innovación.
                </p>
              </div>
            </div>
          </section>

          <section className="grid gap-6 rounded-[2rem] bg-[#e8dfd2] p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-end lg:p-10">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                Ver el resultado
              </p>
              <h2 className="max-w-2xl text-2xl tracking-tight text-[#35542f] sm:text-3xl">
                La mejor manera de entender este enfoque es ver cómo se
                traduce en producto y en aplicaciones reales.
              </h2>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/productos"
                className="inline-flex items-center justify-center rounded-full bg-[#35542f] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Ver productos
              </Link>
              <Link
                href="/recetas"
                className="inline-flex items-center justify-center rounded-full border border-[#b8aa97] bg-white/70 px-6 py-3 text-sm font-medium text-[#35542f] transition hover:bg-white"
              >
                Descubrir aplicaciones culinarias
              </Link>
            </div>
          </section>
        </div>
      </PageContainer>
    </section>
  );
}
