import type { Metadata } from "next";
import Image from "next/image";
import { PageContainer } from "@/components/layout/page-container";
import { siteConfig } from "@/content/site-config";

type NewsItem = {
  title: string;
  excerpt: string;
  date: string;
  category?: string;
  image?: string;
  featured?: boolean;
  slug?: string;
};

const newsItems: NewsItem[] = [
  {
    title: "VERDESAL abre una nueva fase de cultivo biosalino en el Empordà",
    excerpt:
      "El proyecto entra en una etapa de validación más afinada, centrada en cómo convertir el aprendizaje de campo en producto comprensible y útil.",
    date: "2026-04-05",
    category: "Proyecto",
    image: "/images/plants/salicornia/cover.webp",
    featured: true,
    slug: "nueva-fase-cultivo-biosalino",
  },
  {
    title: "Las halófitas entran con más fuerza en el debate sobre agricultura adaptada",
    excerpt:
      "La conversación sobre resiliencia agrícola vuelve a mirar hacia cultivos capaces de responder mejor a contextos salinos y presión hídrica.",
    date: "2026-03-21",
    category: "Divulgación",
    image: "/images/plants/ficoide-glacial/cover.webp",
    slug: "halofitas-agricultura-adaptada",
  },
  {
    title: "Primeras pruebas de presentación comercial para canal gourmet",
    excerpt:
      "VERDESAL sigue afinando cómo presentar las plantas halófitas en contextos de retail especializado sin perder claridad ni identidad de producto.",
    date: "2026-03-11",
    category: "Producto",
    image: "/images/plants/verdolaga-marina/cover.webp",
    slug: "presentacion-comercial-canal-gourmet",
  },
  {
    title: "La cocina sigue siendo un espacio útil para demostrar uso real",
    excerpt:
      "Las colaboraciones culinarias ayudan a explicar mejor la planta y sus aplicaciones, siempre como apoyo a la propuesta agrícola.",
    date: "2026-02-27",
    category: "Gastronomía",
    image: "/images/recipes/ensalada-salicornia.webp",
    slug: "cocina-demostracion-uso-real",
  },
  {
    title: "VERDESAL participa en un encuentro sobre innovación agraria y territorio",
    excerpt:
      "La presencia en contextos profesionales permite compartir preguntas, aprendizajes y posibilidades alrededor de la agricultura biosalina.",
    date: "2026-02-14",
    category: "Prensa",
    slug: "encuentro-innovacion-agraria-territorio",
  },
  {
    title: "Nuevos materiales divulgativos para explicar mejor el proyecto",
    excerpt:
      "El trabajo de comunicación se centra ahora en traducir la base científica y agrícola en un relato más claro y más cercano.",
    date: "2026-01-29",
    category: "Divulgación",
    slug: "materiales-divulgativos-proyecto",
  },
];

const featuredPost = newsItems.find((item) => item.featured) ?? newsItems[0];
const secondaryPosts = newsItems.filter((item) => item !== featuredPost);

function formatDate(date: string) {
  return new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export const metadata: Metadata = {
  title: `Noticias | ${siteConfig.name}`,
  description:
    "Noticias, avances y publicaciones de VERDESAL sobre agricultura biosalina, producto, divulgación y presencia del proyecto.",
};

export default function NoticiasPage() {
  return (
    <section className="py-10 sm:py-14">
      <PageContainer>
        <div className="space-y-4 border-b border-neutral-200 pb-8 sm:pb-10">
          <p className="text-xs uppercase tracking-[0.32em] text-[#8d7a63]">
            Actualidad
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
            Noticias
          </h1>
          <p className="max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
            Avances del proyecto, apariciones, publicaciones y contenido para
            seguir el recorrido de VERDESAL con más contexto.
          </p>
        </div>

        <div className="mt-10 space-y-10 sm:mt-12 sm:space-y-14">
          <article
            data-slug={featuredPost.slug}
            className="overflow-hidden rounded-[2.5rem] border border-neutral-200 bg-[#f4f1ec]"
          >
            <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="relative aspect-[16/10] bg-neutral-100 lg:min-h-[420px]">
                {featuredPost.image ? (
                  <Image
                    src={featuredPost.image}
                    alt={`Imagen de ${featuredPost.title}`}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 56vw"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center px-6 text-center text-sm text-neutral-500">
                    Imagen disponible próximamente
                  </div>
                )}
              </div>

              <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                <div className="space-y-5">
                  <div className="flex flex-wrap items-center gap-3">
                    {featuredPost.category ? (
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#35542f]">
                        {featuredPost.category}
                      </span>
                    ) : null}
                    <time
                      dateTime={featuredPost.date}
                      className="text-sm font-medium text-neutral-500"
                    >
                      {formatDate(featuredPost.date)}
                    </time>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm font-medium text-[#35542f]">
                      Noticia destacada
                    </p>
                    <h2 className="max-w-xl text-3xl tracking-tight text-neutral-950 sm:text-4xl">
                      {featuredPost.title}
                    </h2>
                    <p className="max-w-xl text-base leading-7 text-[#5f5950] sm:text-lg sm:leading-8">
                      {featuredPost.excerpt}
                    </p>
                  </div>
                </div>

                <p className="mt-8 text-sm text-neutral-500">
                  Estructura preparada para futuras fichas o detalle de noticia.
                </p>
              </div>
            </div>
          </article>

          <section className="space-y-5">
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-1">
                <h2 className="text-xl font-semibold text-neutral-950 sm:text-2xl">
                  Más actualidad
                </h2>
                <p className="text-sm text-neutral-500">
                  {newsItems.length} publicaciones
                </p>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {secondaryPosts.map((post) => (
                <article
                  key={`${post.title}-${post.date}`}
                  data-slug={post.slug}
                  className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-white"
                >
                  <div className="relative aspect-[4/3] bg-neutral-100">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={`Imagen de ${post.title}`}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center px-6 text-center text-sm text-neutral-500">
                        Imagen disponible próximamente
                      </div>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col space-y-4 p-5 sm:p-6">
                    <div className="flex flex-wrap items-center gap-3">
                      {post.category ? (
                        <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-neutral-700">
                          {post.category}
                        </span>
                      ) : null}
                      <time
                        dateTime={post.date}
                        className="text-sm font-medium text-neutral-500"
                      >
                        {formatDate(post.date)}
                      </time>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-neutral-950">
                        {post.title}
                      </h3>
                      <p className="text-sm leading-6 text-neutral-600 sm:text-base">
                        {post.excerpt}
                      </p>
                    </div>

                    <p className="mt-auto text-sm font-medium text-[#35542f]">
                      Archivo editorial
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </PageContainer>
    </section>
  );
}
