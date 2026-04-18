import type { Metadata } from "next";
import Image from "next/image";
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
            Cultivar donde parecía que ya no se podía
          </h1>
          <p className="max-w-3xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
            Cada vez hay menos suelo fértil disponible y más problemas de
            salinización, degradación y escasez de agua dulce. A eso se suma
            una agricultura muy dependiente de unos pocos cultivos y de
            recursos cada vez más tensionados.
          </p>
        </div>

        <div className="mt-12 space-y-14 sm:mt-16 sm:space-y-20">
          <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                  El problema
                </p>
                <h2 className="text-3xl tracking-tight text-[#b3946a] sm:text-4xl">
                  El reto no es solo producir más, sino producir mejor.
                </h2>
              </div>

              <div className="relative aspect-4/3 overflow-hidden rounded-[2rem] bg-neutral-100">
                <Image
                  src="/images/plants/salicornia/detail-2.webp"
                  alt="Detalle de cultivo en un entorno salino"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 38vw"
                />
              </div>
            </div>

            <div className="space-y-5 text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
              <p>
                Y hacerlo también en lugares donde el modelo convencional ya no
                responde.
              </p>

              <p>
                No basta con insistir en lo de siempre si las condiciones del
                suelo y del agua ya no acompañan. Hace falta abrir espacio a
                otras formas de cultivar más ajustadas al territorio real.
              </p>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-[1.5rem] bg-neutral-50 p-4">
                  <p className="text-sm font-medium text-neutral-900">
                    Salinización
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-neutral-50 p-4">
                  <p className="text-sm font-medium text-neutral-900">
                    Escasez de agua
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-neutral-50 p-4">
                  <p className="text-sm font-medium text-neutral-900">
                    Suelos degradados
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
                  Las halófitas abren una vía distinta porque están preparadas
                  para crecer en condiciones salinas.
                </h2>
              </div>

              <div className="space-y-5">
                <div className="space-y-5 text-base leading-7 text-[#4f4a42] sm:text-lg sm:leading-8">
                  <p>
                    Requieren menos agua dulce y pueden crecer en terrenos que
                    hoy se consideran marginales para la agricultura habitual.
                    No son una promesa teórica: son plantas adaptadas de verdad
                    a ese entorno, capaces de convertir una limitación en
                    posibilidad.
                  </p>

                  <p>
                    Nuestro trabajo parte de esa capacidad de adaptación para
                    traducirla en cultivo real, en producto y en una manera de
                    producir más coherente con el contexto climático y
                    territorial.
                  </p>
                </div>

                <div className="relative aspect-4/3 overflow-hidden rounded-[2rem] bg-neutral-100">
                  <Image
                    src="/images/plants/ficoide-glacial/detail-2.webp"
                    alt="Ficoide glacial como ejemplo de planta adaptada a condiciones salinas"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 44vw"
                  />
                </div>
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
                  Lo que proponemos no es sustituirlo todo, sino ampliar el
                  mapa de lo que puede cultivarse con sentido.
                </h2>
              </div>

              <div className="space-y-6">
                <article className="grid gap-4 border-l-2 border-[#35542f] pl-5 sm:grid-cols-[110px_1fr] sm:pl-6">
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#35542f]">
                    Paso 1
                  </p>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-neutral-950">
                      Recuperar valor agrícola
                    </h3>
                    <p className="text-sm leading-6 text-neutral-600 sm:text-base">
                      Este modelo permite volver a mirar suelos en desuso o con
                      limitaciones salinas como espacios que todavía pueden
                      aportar valor productivo.
                    </p>
                  </div>
                </article>

                <article className="grid gap-4 border-l-2 border-[#35542f] pl-5 sm:grid-cols-[110px_1fr] sm:pl-6">
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#35542f]">
                    Paso 2
                  </p>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-neutral-950">
                      Diversificar cultivos
                    </h3>
                    <p className="text-sm leading-6 text-neutral-600 sm:text-base">
                      Introducir halófitas no significa desplazar todo lo
                      existente, sino sumar especies que responden mejor a unas
                      condiciones que ya están cambiando.
                    </p>
                  </div>
                </article>

                <article className="grid gap-4 border-l-2 border-[#35542f] pl-5 sm:grid-cols-[110px_1fr] sm:pl-6">
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#35542f]">
                    Paso 3
                  </p>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-neutral-950">
                      Acercar producto con contexto
                    </h3>
                    <p className="text-sm leading-6 text-neutral-600 sm:text-base">
                      La innovación aquí no se queda en el campo: llega al
                      mercado en forma de productos con base científica,
                      aplicación culinaria y una historia agronómica clara.
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
                Este enfoque se mide por lo que hace posible.
              </h2>
            </div>

            <div className="space-y-6">
              <article className="border-b border-neutral-200 pb-5">
                <h3 className="text-xl font-semibold text-neutral-950">
                  Ambiental
                </h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600 sm:text-base">
                  Reduce la dependencia de agua dulce y abre una agricultura más
                  ajustada a contextos donde la salinidad ya forma parte de la
                  realidad del terreno.
                </p>
              </article>

              <article className="border-b border-neutral-200 pb-5">
                <h3 className="text-xl font-semibold text-neutral-950">
                  Productivo
                </h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600 sm:text-base">
                  Permite recuperar suelos infrautilizados y convertirlos en una
                  base de trabajo agrario con especies preparadas para responder
                  mejor a ese entorno.
                </p>
              </article>

              <article>
                <h3 className="text-xl font-semibold text-neutral-950">
                  Gastronómico
                </h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600 sm:text-base">
                  Acerca al mercado ingredientes con identidad propia, capaces
                  de llegar a cocina como algo más que una rareza: como producto
                  útil, sabroso y con sentido.
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
                  La mejor forma de entender este enfoque es verlo convertido en
                  plantas concretas y usos reales.
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
