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
};

const newsItems: NewsItem[] = [
  {
    title: "VERDESAL impulsa una nueva fase de cultivo biosalino en el Empordà",
    excerpt:
      "El proyecto avanza en la validación de plantas halófitas con interés agrícola y gastronómico, reforzando su enfoque de producto desde el territorio.",
    date: "2026-04-05",
    category: "Proyecto",
    image: "/images/plants/salicornia/cover.webp",
    featured: true,
  },
  {
    title: "Las halófitas ganan presencia en conversaciones sobre agricultura adaptada",
    excerpt:
      "La investigación aplicada en entornos salinos vuelve a situar estos cultivos como una vía con potencial productivo y valor diferencial.",
    date: "2026-03-21",
    category: "Divulgación",
    image: "/images/plants/ficoide-glacial/cover.webp",
  },
  {
    title: "Primeras pruebas de presentación comercial para canal gourmet",
    excerpt:
      "VERDESAL trabaja cómo traducir el relato agrícola y técnico en una propuesta clara para retail especializado y puntos de venta afines.",
    date: "2026-03-11",
    category: "Producto",
    image: "/images/plants/verdolaga-marina/cover.webp",
  },
  {
    title: "La cocina sigue funcionando como espacio de demostración de uso",
    excerpt:
      "Nuevas colaboraciones culinarias ayudan a visualizar aplicaciones concretas sin desplazar el foco principal del producto y su cultivo.",
    date: "2026-02-27",
    category: "Gastronomía",
    image: "/images/recipes/ensalada-salicornia.webp",
  },
  {
    title: "VERDESAL participa en un encuentro sobre innovación agraria y territorio",
    excerpt:
      "La presencia en contextos profesionales permite compartir aprendizajes sobre cultivo biosalino, adaptación y nuevas oportunidades productivas.",
    date: "2026-02-14",
    category: "Prensa",
  },
  {
    title: "Nuevos materiales divulgativos para explicar el valor de las plantas halófitas",
    excerpt:
      "El proyecto continúa afinando cómo comunicar mejor la relación entre base científica, uso culinario y propuesta comercial.",
    date: "2026-01-29",
    category: "Divulgación",
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
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
            Noticias
          </h1>
          <p className="max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
            Actualidad del proyecto, avances, apariciones y contenidos de
            divulgación.
          </p>
        </div>

        <div className="mt-8 space-y-10 sm:mt-10 sm:space-y-12">
          <article className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-white">
            <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative aspect-[16/10] bg-neutral-100 lg:aspect-auto lg:min-h-[360px]">
                {featuredPost.image ? (
                  <Image
                    src={featuredPost.image}
                    alt={`Imagen de ${featuredPost.title}`}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center px-6 text-center text-sm text-neutral-500">
                    Imagen disponible próximamente
                  </div>
                )}
              </div>

              <div className="flex flex-col justify-between p-6 sm:p-8">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-500">
                    {featuredPost.category ? (
                      <span className="rounded-full bg-neutral-100 px-3 py-1 font-medium text-neutral-700">
                        {featuredPost.category}
                      </span>
                    ) : null}
                    <time dateTime={featuredPost.date}>
                      {formatDate(featuredPost.date)}
                    </time>
                  </div>

                  <div className="space-y-3">
                    <h2 className="text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
                      {featuredPost.title}
                    </h2>
                    <p className="text-base leading-7 text-neutral-600 sm:text-lg">
                      {featuredPost.excerpt}
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-sm font-medium text-[#35542f]">
                  Noticia destacada
                </p>
              </div>
            </div>
          </article>

          <section className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl font-semibold text-neutral-950 sm:text-2xl">
                Más actualidad
              </h2>
              <p className="text-sm text-neutral-500">
                {newsItems.length} publicaciones
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {secondaryPosts.map((post) => (
                <article
                  key={`${post.title}-${post.date}`}
                  className="overflow-hidden rounded-2xl border border-neutral-200 bg-white"
                >
                  {post.image ? (
                    <div className="relative aspect-4/3 bg-neutral-100">
                      <Image
                        src={post.image}
                        alt={`Imagen de ${post.title}`}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                      />
                    </div>
                  ) : null}

                  <div className="space-y-4 p-5">
                    <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-500">
                      {post.category ? (
                        <span className="rounded-full bg-neutral-100 px-3 py-1 font-medium text-neutral-700">
                          {post.category}
                        </span>
                      ) : null}
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-neutral-950">
                        {post.title}
                      </h3>
                      <p className="text-sm leading-6 text-neutral-600 sm:text-base">
                        {post.excerpt}
                      </p>
                    </div>
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
