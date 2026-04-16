import type { Metadata } from "next";
import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: `Sostenibilidad e innovación | ${siteConfig.name}`,
  description:
    "Una explicación clara del enfoque VERDESAL: agricultura biosalina, halófitas, agua salobre y adaptación a entornos con salinidad.",
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
            Una forma de cultivar pensada para responder a la salinidad, a la
            escasez de agua dulce y a la necesidad de sistemas agrícolas más
            adaptados.
          </h1>
          <p className="max-w-3xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
            VERDESAL trabaja desde una idea concreta: si cambian las condiciones
            del territorio, también debe cambiar la forma de producir. La
            agricultura biosalina permite abrir una vía técnicamente rigurosa
            para cultivar con más adaptación y más claridad sobre el valor del
            producto.
          </p>
        </div>

        <div className="mt-12 space-y-14 sm:mt-16 sm:space-y-20">
          <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                El problema
              </p>
              <h2 className="text-3xl tracking-tight text-[#b3946a] sm:text-4xl">
                La presión hídrica y la salinidad obligan a repensar qué se
                cultiva y cómo se cultiva.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
              <p>
                En muchos entornos, el agua dulce disponible es cada vez más
                limitada y la salinidad condiciona directamente la capacidad
                productiva del suelo. No se trata solo de una restricción
                ambiental: también afecta a la estabilidad del cultivo y a su
                viabilidad económica.
              </p>

              <p>
                Cuando un sistema agrícola depende de condiciones que cada vez
                son más difíciles de sostener, deja de ser suficiente mejorar un
                poco el método. A veces hace falta revisar desde la base qué
                especies tienen sentido en ese contexto.
              </p>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-[1.5rem] bg-neutral-50 p-4">
                  <p className="text-sm font-medium text-neutral-900">
                    Menos agua dulce
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-neutral-50 p-4">
                  <p className="text-sm font-medium text-neutral-900">
                    Más condicionantes salinos
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-neutral-50 p-4">
                  <p className="text-sm font-medium text-neutral-900">
                    Mayor necesidad de resiliencia
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[2.5rem] bg-[#f4f1ec] px-6 py-8 sm:px-8 sm:py-10 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                  La solución VERDESAL
                </p>
                <h2 className="text-3xl tracking-tight text-[#35542f] sm:text-4xl">
                  Trabajar con halófitas y agua salobre desde una lógica de
                  adaptación, no de excepción.
                </h2>
              </div>

              <div className="space-y-5 text-base leading-7 text-[#4f4a42] sm:text-lg sm:leading-8">
                <p>
                  Las halófitas son plantas que toleran o aprovechan condiciones
                  salinas. Eso las convierte en un punto de partida especialmente
                  relevante cuando lo que se busca no es forzar el territorio,
                  sino entender con qué materiales vegetales puede trabajarse de
                  forma más coherente.
                </p>

                <p>
                  La agricultura biosalina no ofrece atajos. Lo que propone es
                  una adaptación mejor fundamentada: usar agua salobre cuando el
                  contexto lo permite, observar cómo responde cada especie y
                  decidir desde ahí qué puede convertirse en cultivo y en
                  producto.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-8">
            <div className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                  Cómo funciona
                </p>
                <h2 className="text-3xl tracking-tight text-[#b3946a] sm:text-4xl">
                  Un proceso didáctico de entender, aunque exigente en la
                  práctica.
                </h2>
              </div>

              <div className="space-y-6">
                <article className="grid gap-4 border-l-2 border-[#35542f] pl-5 sm:grid-cols-[110px_1fr] sm:pl-6">
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#35542f]">
                    Paso 1
                  </p>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-neutral-950">
                      Leemos el contexto
                    </h3>
                    <p className="text-sm leading-6 text-neutral-600 sm:text-base">
                      Partimos del suelo, del agua disponible y del grado de
                      salinidad real, porque cualquier decisión agronómica útil
                      tiene que empezar ahí.
                    </p>
                  </div>
                </article>

                <article className="grid gap-4 border-l-2 border-[#35542f] pl-5 sm:grid-cols-[110px_1fr] sm:pl-6">
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#35542f]">
                    Paso 2
                  </p>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-neutral-950">
                      Probamos especies con potencial
                    </h3>
                    <p className="text-sm leading-6 text-neutral-600 sm:text-base">
                      Seleccionamos halófitas, observamos su comportamiento y
                      ajustamos el aprendizaje sobre aquello que puede sostener
                      interés productivo y estabilidad.
                    </p>
                  </div>
                </article>

                <article className="grid gap-4 border-l-2 border-[#35542f] pl-5 sm:grid-cols-[110px_1fr] sm:pl-6">
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#35542f]">
                    Paso 3
                  </p>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-neutral-950">
                      Traducimos ese aprendizaje en producto
                    </h3>
                    <p className="text-sm leading-6 text-neutral-600 sm:text-base">
                      El cultivo deja de ser solo ensayo cuando se convierte en
                      una propuesta más clara: una planta con valor agrícola,
                      lectura comercial y aplicaciones reales.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                Impacto
              </p>
              <h2 className="text-3xl tracking-tight text-[#b3946a] sm:text-4xl">
                El valor del enfoque se mide en lo que permite hacer mejor.
              </h2>
            </div>

            <div className="space-y-6">
              <article className="border-b border-neutral-200 pb-5">
                <h3 className="text-xl font-semibold text-neutral-950">
                  Ambiental
                </h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600 sm:text-base">
                  Favorece una agricultura más alineada con contextos donde el
                  agua dulce es limitada y donde la adaptación deja de ser una
                  opción teórica para convertirse en una necesidad operativa.
                </p>
              </article>

              <article className="border-b border-neutral-200 pb-5">
                <h3 className="text-xl font-semibold text-neutral-950">
                  Productivo
                </h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600 sm:text-base">
                  Permite abrir nuevas posibilidades de cultivo allí donde otros
                  modelos encuentran más restricciones, y convierte ese margen
                  de adaptación en una base real de trabajo agrícola.
                </p>
              </article>

              <article>
                <h3 className="text-xl font-semibold text-neutral-950">
                  Gastronómico
                </h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600 sm:text-base">
                  Genera productos con identidad propia, capaces de llegar a
                  cocina con una historia agronómica sólida detrás y no solo con
                  un valor diferencial de presentación.
                </p>
              </article>
            </div>
          </section>

          <section className="border-t border-neutral-200 pt-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                  Ver el resultado
                </p>
                <h2 className="max-w-2xl text-2xl tracking-tight text-neutral-950 sm:text-3xl">
                  Este enfoque se entiende mejor cuando lo ves convertido en
                  plantas concretas y en usos reales.
                </h2>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/productos"
                  className="inline-flex items-center justify-center rounded-full bg-[#35542f] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Ver productos
                </Link>
                <Link
                  href="/recetas"
                  className="inline-flex items-center justify-center rounded-full border border-[#b8aa97] px-6 py-3 text-sm font-medium text-[#35542f] transition hover:bg-[#f4f1ec]"
                >
                  Descubrir aplicaciones culinarias
                </Link>
              </div>
            </div>
          </section>
        </div>
      </PageContainer>
    </section>
  );
}
