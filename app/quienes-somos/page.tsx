import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";
import { siteConfig } from "@/content/site-config";

const teamMembers = [
  {
    name: "Alicia",
    role: "Visión y desarrollo del proyecto",
    bio: "Impulsa la dirección de VERDESAL y cuida que el trabajo del campo, la investigación y la forma de contarlo mantengan una misma coherencia. Su papel tiene mucho de escucha, de criterio y de insistencia en que el proyecto siga siendo legible y cercano.",
  },
  {
    name: "Jordi",
    role: "Trabajo agronómico y experimentación",
    bio: "Está vinculado a la parte más práctica del cultivo: observar, probar, corregir y entender qué ocurre realmente cuando las plantas se enfrentan a un entorno salino. Su mirada sostiene la parte técnica sin separarla nunca de la realidad del terreno.",
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
                VERDESAL es una forma de mirar el territorio y preguntarse qué
                puede crecer cuando aprendemos a trabajar con la sal, y no solo
                contra ella.
              </h1>

              <p className="max-w-2xl text-base leading-7 text-[#4f4a42] sm:text-lg sm:leading-8">
                Detrás del proyecto hay campo, observación, ensayo y una
                voluntad muy concreta de convertir esa búsqueda en algo útil,
                cultivable y comprensible.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] bg-white/70 p-6 shadow-sm sm:p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                Una idea de partida
              </p>
              <p className="mt-4 text-lg leading-8 text-[#4f4a42]">
                VERDESAL no nace para adornar un discurso sobre sostenibilidad.
                Nace de una inquietud real: entender si los entornos salinos
                podían abrir nuevas oportunidades agrícolas y convertirse, con
                trabajo y criterio, en un proyecto de verdad.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-12 space-y-14 sm:mt-16 sm:space-y-20">
          <section className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div className="relative aspect-4/3 overflow-hidden rounded-[2rem] bg-neutral-100">
              <Image
                src="/images/plants/placeholder.jpg"
                alt="Territorio y entorno de VERDESAL"
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
                  El proyecto empieza cuando la sal deja de verse solo como un
                  problema.
                </h2>
              </div>

              <div className="space-y-5 text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                <p>
                  En el origen de VERDESAL no hay una gran promesa publicitaria.
                  Hay una pregunta mucho más concreta: qué ocurre si, en lugar
                  de insistir en un modelo que no encaja del todo con las
                  condiciones del entorno, se empieza a observar qué especies
                  sí pueden adaptarse a él.
                </p>

                <p>
                  Esa pregunta lleva a las halófitas. No como rareza vegetal,
                  sino como una posibilidad agrícola real. A partir de ahí
                  aparecen el ensayo, la prueba, el aprendizaje lento y el
                  intento de traducir todo eso en un producto que pueda
                  entenderse sin simplificarlo.
                </p>

                <p>
                  VERDESAL crece precisamente en ese cruce: territorio,
                  experimentación y cultura del producto. La gastronomía entra
                  después, cuando hace falta mostrar de forma tangible que estas
                  plantas no solo pueden cultivarse, sino también tener sentido
                  en la mesa.
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
                  El proyecto se sostiene en tres movimientos que se tocan todo
                  el tiempo.
                </h2>
              </div>

              <div className="space-y-8">
                <article className="border-b border-neutral-200 pb-6">
                  <h3 className="text-xl font-semibold text-neutral-950">
                    Cultivar con adaptación real
                  </h3>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-neutral-600 sm:text-base">
                    Trabajamos con plantas halófitas desde una lógica agronómica
                    concreta: entender qué responde bien al contexto, qué puede
                    sostenerse en el tiempo y qué abre posibilidades nuevas para
                    un entorno condicionado por la salinidad.
                  </p>
                </article>

                <article className="border-b border-neutral-200 pb-6">
                  <h3 className="text-xl font-semibold text-neutral-950">
                    Investigar sin separar teoría y terreno
                  </h3>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-neutral-600 sm:text-base">
                    La base científica no aparece como una capa externa. Forma
                    parte del día a día del proyecto: observar, comparar,
                    corregir y sacar conclusiones útiles a partir de lo que
                    sucede realmente en cultivo.
                  </p>
                </article>

                <article>
                  <h3 className="text-xl font-semibold text-neutral-950">
                    Darle al producto una vida comprensible
                  </h3>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-neutral-600 sm:text-base">
                    Cuando la planta llega a cocina o a un contexto comercial, no
                    lo hace como simple curiosidad. Llega con una historia de
                    cultivo detrás y con una voluntad clara de ser entendida,
                    usada y valorada.
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
                Trabajamos desde una agricultura biosalina, agroecológica y
                regenerativa porque el proyecto solo tiene sentido si sigue
                conectado a la realidad del lugar donde nace.
              </h2>

              <div className="max-w-3xl space-y-4 text-base leading-7 text-[#4f4a42]">
                <p>
                  Eso significa adaptar el cultivo en lugar de imponerlo,
                  aprender del comportamiento de las plantas antes de prometer
                  resultados y construir valor a partir de lo que el territorio
                  hace posible.
                </p>
                <p>
                  También significa no separar el discurso ambiental del trabajo
                  agrícola ni la innovación del producto final. Todo forma parte
                  de una misma cadena.
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
