import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";
import { siteConfig } from "@/content/site-config";

const teamMembers = [
  {
    name: "Alicia",
    role: "Impulso del proyecto",
    bio: "Aporta la visión de conjunto y la sensibilidad para traducir el trabajo agrícola en una propuesta comprensible, cuidada y conectada con el territorio.",
  },
  {
    name: "Jordi",
    role: "Base técnica y agronómica",
    bio: "Sostiene la dimensión experimental del proyecto, vinculando observación, cultivo y validación de plantas halófitas con una mirada práctica.",
  },
];

const values = [
  "Agricultura biosalina",
  "Mirada agroecológica",
  "Aprendizaje desde el territorio",
  "Experimentación aplicada",
  "Relación natural con la gastronomía",
];

export const metadata: Metadata = {
  title: `Quiénes somos | ${siteConfig.name}`,
  description:
    "Conoce el origen de VERDESAL, las personas detrás del proyecto y su forma de unir agricultura biosalina, ciencia y aplicación gastronómica.",
};

export default function QuienesSomosPage() {
  return (
    <section className="py-10 sm:py-14">
      <PageContainer>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.32em] text-[#8d7a63]">
              Quiénes somos
            </p>

            <h1 className="max-w-3xl text-4xl tracking-tight text-neutral-950 sm:text-5xl">
              VERDESAL nace del deseo de cultivar de otra manera y demostrar que
              los suelos salinos también pueden generar valor.
            </h1>

            <p className="max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
              No es solo una idea sobre nuevas plantas. Es un proyecto real,
              ligado al Empordà, a la experimentación agronómica y a la búsqueda
              de una agricultura capaz de adaptarse, producir y abrir nuevas
              posibilidades de uso.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] bg-[#f4f1ec] p-6 sm:p-8">
            <div className="absolute -right-6 top-6 h-20 w-20 rounded-[40%] bg-[#48c7bb]/40" />
            <div className="absolute -left-8 bottom-0 h-28 w-28 rounded-[45%] bg-[#35542f]" />
            <div className="relative space-y-4">
              <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                El origen
              </p>
              <p className="text-lg leading-8 text-[#4f4a42]">
                VERDESAL surge al observar que las condiciones salinas del
                entorno no tenían por qué entenderse solo como una limitación.
                También podían ser el punto de partida para un cultivo distinto,
                con base científica y potencial real de producto.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 space-y-12 sm:mt-14 sm:space-y-16">
          <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="relative aspect-4/3 overflow-hidden rounded-[2rem] bg-neutral-100">
              <Image
                src="/images/plants/placeholder.jpg"
                alt="Entorno y origen de VERDESAL"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                  Nuestra historia
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
                  Por qué halófitas, por qué ahora y por qué aquí
                </h2>
              </div>

              <div className="space-y-5 text-base leading-7 text-neutral-600">
                <p>
                  El proyecto nace de una pregunta sencilla pero profunda: qué
                  puede pasar si en lugar de luchar contra la salinidad del
                  entorno aprendemos a trabajar con ella. A partir de ahí,
                  VERDESAL empieza a explorar el cultivo de halófitas como una
                  vía agrícola coherente con el territorio.
                </p>
                <p>
                  Esa exploración no se queda en la teoría. Se traduce en
                  ensayo, observación, selección de plantas y búsqueda de formas
                  reales de presentar el producto. La ciencia aporta criterio;
                  el campo aporta verdad; la cocina aparece como una manera de
                  demostrar uso y valor.
                </p>
                <p>
                  La visión de VERDESAL combina estas tres capas sin artificio:
                  agricultura, experimentación y aplicación. No se trata de
                  vestir un discurso verde, sino de construir una propuesta que
                  tenga sentido productivo y cultural al mismo tiempo.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <div className="max-w-3xl space-y-3">
              <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                Qué hacemos
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
                Un proyecto que se mueve entre cultivo, conocimiento y uso real
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <article className="space-y-3 rounded-[1.75rem] border border-neutral-200 bg-white p-6">
                <h3 className="text-xl font-semibold text-neutral-950">
                  Agricultura
                </h3>
                <p className="text-sm leading-6 text-neutral-600 sm:text-base">
                  Cultivamos plantas halófitas desde una lógica de adaptación al
                  territorio, observando cómo responder mejor a condiciones
                  salinas y cómo convertir ese cultivo en algo viable y legible.
                </p>
              </article>

              <article className="space-y-3 rounded-[1.75rem] border border-neutral-200 bg-white p-6">
                <h3 className="text-xl font-semibold text-neutral-950">
                  Investigación e innovación
                </h3>
                <p className="text-sm leading-6 text-neutral-600 sm:text-base">
                  Probamos, ajustamos y aprendemos. La innovación aquí no es un
                  eslogan, sino una forma de trabajar con método y curiosidad
                  para validar cultivos con futuro.
                </p>
              </article>

              <article className="space-y-3 rounded-[1.75rem] border border-neutral-200 bg-white p-6">
                <h3 className="text-xl font-semibold text-neutral-950">
                  Gastronomía y aplicación culinaria
                </h3>
                <p className="text-sm leading-6 text-neutral-600 sm:text-base">
                  La cocina ayuda a mostrar el potencial del producto. No ocupa
                  el centro del proyecto, pero sí permite explicar mejor cómo
                  estas plantas pueden formar parte de usos reales.
                </p>
              </article>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                Quién hay detrás
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
                Personas que sostienen una idea convertida en trabajo real
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {teamMembers.map((member) => (
                <article
                  key={member.name}
                  className="rounded-[1.75rem] border border-neutral-200 bg-[#f8f6f2] p-6"
                >
                  <p className="text-sm font-medium text-[#35542f]">
                    {member.role}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-neutral-950">
                    {member.name}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-neutral-600 sm:text-base">
                    {member.bio}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-8 rounded-[2rem] bg-[#e8dfd2] p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-end lg:p-10">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                Nuestro enfoque
              </p>
              <h2 className="max-w-2xl text-2xl tracking-tight text-[#35542f] sm:text-3xl">
                Biosalina, agroecológica, regenerativa y siempre conectada con
                la realidad del cultivo.
              </h2>
              <div className="flex flex-wrap gap-2">
                {values.map((value) => (
                  <span
                    key={value}
                    className="rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-[#35542f]"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href="/productos"
              className="inline-flex items-center justify-center rounded-full bg-[#35542f] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Descubrir las plantas
            </Link>
          </section>
        </div>
      </PageContainer>
    </section>
  );
}
