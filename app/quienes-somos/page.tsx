import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";
import { siteConfig } from "@/content/site-config";

const teamMembers = [
  {
    name: "Alicia",
    role: "Origen y mirada del proyecto",
    bio: "Ingeniera técnica agrícola, llevaba tiempo buscando un proyecto propio que no solo fuera viable, sino que también ayudara a mejorar el entorno en la medida de lo posible. Esa búsqueda es la que acaba dando forma a VERDESAL.",
  },
  {
    name: "Jordi",
    role: "Cultivo y trabajo de campo",
    bio: "Acompaña la parte más práctica del proyecto: observar, probar y entender qué ocurre realmente cuando estas plantas se cultivan en un entorno salino. Su trabajo ayuda a que la idea se sostenga sobre experiencia real y no solo sobre intuición.",
  },
];

export const metadata: Metadata = {
  title: `Quiénes somos | ${siteConfig.name}`,
  description:
    "Conoce el origen de VERDESAL, su vínculo con el territorio y las personas que sostienen el proyecto entre agricultura biosalina, experimentación y producto.",
};

export default function QuienesSomosPage() {
  return (
    <section className="py-10 sm:py-14">
      <PageContainer>
        <section className="relative overflow-hidden rounded-[2.5rem] bg-[#f4f1ec] px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
          <div className="absolute -left-8 bottom-0 h-28 w-28 rounded-[45%] bg-[#35542f]" />
          <div className="absolute right-8 top-8 h-20 w-20 rounded-[40%] bg-[#48c7bb]/50" />

          <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.32em] text-[#8d7a63]">
                Quiénes somos
              </p>

              <h1 className="max-w-4xl text-4xl tracking-tight text-neutral-950 sm:text-5xl">
                De una inquietud personal a una huerta marina
              </h1>

              <p className="max-w-2xl text-base leading-7 text-[#4f4a42] sm:text-lg sm:leading-8">
                VERDESAL nace de una pregunta muy concreta: qué agricultura
                tiene sentido en un territorio donde la sal, el agua y el suelo
                ya no se pueden mirar como antes.
              </p>
            </div>

            <div className="space-y-4">
              <div className="relative aspect-4/3 overflow-hidden rounded-[2rem] bg-neutral-100 shadow-sm">
                <Image
                  src="/images/plants/salicornia/cover.webp"
                  alt="Salicornia cultivada en el proyecto VERDESAL"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

              <div className="relative overflow-hidden rounded-[2rem] bg-white/70 p-6 shadow-sm sm:p-8">
                <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                  Una idea de partida
                </p>
                <p className="mt-4 text-lg leading-8 text-[#4f4a42]">
                  Alicia Picazo, ingeniera técnica agrícola, llevaba tiempo
                  buscando un proyecto propio que no solo fuera viable, sino que
                  también ayudara a mejorar el entorno en la medida de lo
                  posible.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-12 space-y-14 sm:mt-16 sm:space-y-20">
          <section className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div className="relative aspect-4/3 overflow-hidden rounded-[2rem] bg-neutral-100">
              <Image
                src="/images/plants/verdolaga-marina/cover.webp"
                alt="Cultivo de verdolaga marina en un entorno ligado al litoral"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                  Nuestra historia
                </p>
                <h2 className="text-3xl tracking-tight text-[#b3946a] sm:text-4xl">
                  La respuesta apareció al conocer las halófitas.
                </h2>
              </div>

              <div className="space-y-5 text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                <p>
                  La respuesta apareció al conocer las halófitas: plantas que
                  crecen de forma natural en suelos salinos y que pueden vivir
                  con agua salobre o incluso marina.
                </p>

                <p>
                  Ahí vimos una manera distinta de cultivar, más conectada con
                  el paisaje litoral y con una lógica agrícola que aprovecha lo
                  que otros cultivos no pueden.
                </p>

                <p>
                  VERDESAL nace precisamente en ese cruce entre observación,
                  cultivo y producto, con la voluntad de hacer legible algo que
                  parte del territorio y de una necesidad real.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-8">
            <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                  Qué hacemos
                </p>
                <h2 className="text-3xl tracking-tight text-[#b3946a] sm:text-4xl">
                  Eso es lo que hace diferente a VERDESAL.
                </h2>

                <div className="relative aspect-4/3 overflow-hidden rounded-[2rem] bg-neutral-100">
                  <Image
                    src="/images/plants/ficoide-glacial/detail-1.webp"
                    alt="Detalle de ficoide glacial como ejemplo de producto con valor gastronómico"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 36vw"
                  />
                </div>
              </div>

              <div className="space-y-8">
                <article className="border-b border-neutral-200 pb-6">
                  <h3 className="text-xl font-semibold text-neutral-950">
                    No trabajamos contra el territorio
                  </h3>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-neutral-600 sm:text-base">
                    Trabajamos con especies que encajan con un entorno marcado
                    por la salinidad, en lugar de forzar modelos que necesitan
                    corregir continuamente lo que el lugar ya está diciendo.
                  </p>
                </article>

                <article className="border-b border-neutral-200 pb-6">
                  <h3 className="text-xl font-semibold text-neutral-950">
                    Cultivamos con valor gastronómico real
                  </h3>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-neutral-600 sm:text-base">
                    Nos interesan plantas que no solo puedan cultivarse, sino
                    que también tengan sentido en cocina y puedan llegar a la
                    mesa como producto útil, comprensible y atractivo.
                  </p>
                </article>

                <article>
                  <h3 className="text-xl font-semibold text-neutral-950">
                    Del campo a la cocina, sin artificio
                  </h3>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-neutral-600 sm:text-base">
                    Ligadas al Mediterráneo y a nuestra costa, las plantas que
                    cultivamos llegan a cocina con una mirada práctica, cercana
                    y honesta, sin separar lo agronómico de lo gastronómico.
                  </p>
                </article>
              </div>
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                Quién hay detrás
              </p>
              <h2 className="text-3xl tracking-tight text-[#b3946a] sm:text-4xl">
                VERDESAL también se entiende mejor cuando aparece la parte
                humana.
              </h2>
            </div>

            <div className="space-y-6">
              {teamMembers.map((member) => (
                <article
                  key={member.name}
                  className="grid gap-3 border-b border-neutral-200 pb-6 last:border-b-0 last:pb-0 sm:grid-cols-[220px_1fr]"
                >
                  <div className="space-y-1">
                    <h3 className="text-2xl font-semibold text-neutral-950">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-[#35542f]">
                      {member.role}
                    </p>
                  </div>

                  <p className="text-sm leading-6 text-neutral-600 sm:text-base">
                    {member.bio}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-8 rounded-[2.5rem] bg-[#e8dfd2] px-6 py-10 sm:px-8 sm:py-12 lg:grid-cols-[1fr_auto] lg:items-end lg:px-12">
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                Nuestro enfoque
              </p>

              <h2 className="max-w-3xl text-3xl tracking-tight text-[#35542f] sm:text-4xl">
                VERDESAL se construye desde una agricultura que escucha el lugar
                donde nace y busca convertir esa adaptación en valor real.
              </h2>

              <div className="max-w-3xl space-y-4 text-base leading-7 text-[#4f4a42]">
                <p>
                  Cultivamos con el territorio, no contra él. Esa es la base de
                  todo lo demás: del cultivo, del producto y de la manera en que
                  lo contamos.
                </p>
                <p>
                  Lo que hacemos parte de contenido real, de campo, de ensayo y
                  de cocina, y busca mantener siempre una relación clara con el
                  paisaje litoral que lo hace posible.
                </p>
              </div>
            </div>

            <Link
              href="/productos"
              className="inline-flex items-center justify-center rounded-full border border-[#b8aa97] bg-white/70 px-6 py-3 text-sm font-medium text-[#35542f] transition hover:bg-white"
            >
              Ver las plantas
            </Link>
          </section>
        </div>
      </PageContainer>
    </section>
  );
}
