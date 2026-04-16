import type { Metadata } from "next";
import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";
import { siteConfig } from "@/content/site-config";

const salePoints = [
  {
    name: "Restaurant Can Roca de la Sal",
    type: "Restaurante",
    locality: "Castelló d'Empúries",
    description:
      "Cocina de producto con propuestas estacionales donde las halófitas se integran en carta.",
    href: "#",
    actionLabel: "Ver disponibilidad",
  },
  {
    name: "Empordà Gourmet",
    type: "Tienda gourmet",
    locality: "Figueres",
    description:
      "Selección de productos locales y vegetales singulares para público especializado.",
    href: "#",
    actionLabel: "Consultar tienda",
  },
  {
    name: "Mercat Verd Setmanal",
    type: "Mercado",
    locality: "Roses",
    description:
      "Punto de encuentro semanal con producto fresco y enfoque en productores del territorio.",
    href: "#",
    actionLabel: "Ver horario",
  },
  {
    name: "Distribuciones Costa Brava Fresh",
    type: "Distribuidor",
    locality: "Girona",
    description:
      "Canal orientado a hostelería y negocios que buscan producto diferencial y de proximidad.",
    href: "/contacto",
    actionLabel: "Solicitar contacto",
  },
  {
    name: "La Botiga del Port",
    type: "Tienda especializada",
    locality: "L'Escala",
    description:
      "Espacio de producto local donde descubrir vegetales con identidad y valor gastronómico.",
    href: "#",
    actionLabel: "Más información",
  },
  {
    name: "Cuina Oberta Lab",
    type: "Espacio gastronómico",
    locality: "Barcelona",
    description:
      "Entorno de cocina y divulgación gastronómica donde el producto se presenta en contexto de uso.",
    href: "#",
    actionLabel: "Ver espacio",
  },
];

export const metadata: Metadata = {
  title: `Puntos de venta | ${siteConfig.name}`,
  description:
    "Encuentra dónde comprar o descubrir los productos VERDESAL en tiendas, restaurantes, mercados y distribución especializada.",
};

export default function PuntosDeVentaPage() {
  return (
    <section className="py-10 sm:py-14">
      <PageContainer>
        <div className="space-y-4 border-b border-neutral-200 pb-8 sm:pb-10">
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
            Puntos de venta
          </h1>
          <p className="max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
            Encuentra dónde comprar o descubrir nuestros productos.
          </p>
        </div>

        <div className="mt-8 space-y-8 sm:mt-10 sm:space-y-10">
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-sm leading-6 text-neutral-600 sm:p-6 sm:text-base">
            Consulta algunos espacios donde el producto puede encontrarse o
            descubrirse en contexto de compra, cocina o distribución. La
            disponibilidad puede variar según temporada y formato.
          </div>

          <section className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl font-semibold text-neutral-950 sm:text-2xl">
                Listado de puntos de venta
              </h2>
              <p className="text-sm text-neutral-500">
                {salePoints.length} ubicaciones
              </p>
            </div>

            <div className="grid gap-4">
              {salePoints.map((point) => (
                <article
                  key={`${point.name}-${point.locality}`}
                  className="rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0 space-y-3">
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
                          {point.type}
                        </span>
                        <span className="rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-600">
                          {point.locality}
                        </span>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-neutral-950 sm:text-xl">
                          {point.name}
                        </h3>
                        {point.description ? (
                          <p className="max-w-3xl text-sm leading-6 text-neutral-600 sm:text-base">
                            {point.description}
                          </p>
                        ) : null}
                      </div>
                    </div>

                    <div className="sm:shrink-0">
                      <Link
                        href={point.href}
                        className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-4 py-2.5 text-sm font-medium text-neutral-900 transition hover:border-neutral-400 hover:bg-neutral-50"
                      >
                        {point.actionLabel}
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] bg-[#e8dfd2] p-6 sm:p-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                  Distribución
                </p>
                <h2 className="max-w-2xl text-2xl tracking-tight text-[#35542f] sm:text-3xl">
                  ¿Quieres ofrecer VERDESAL en tu negocio?
                </h2>
                <p className="max-w-2xl text-base leading-7 text-[#4f4a42]">
                  Si estás valorando incorporar nuestras plantas en tienda,
                  restauración o distribución, podemos estudiar contigo el mejor
                  encaje.
                </p>
              </div>

              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-full bg-[#35542f] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Contactar para distribución
              </Link>
            </div>
          </section>
        </div>
      </PageContainer>
    </section>
  );
}
