import type { Metadata } from "next";
import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";
import { siteConfig } from "@/content/site-config";

type SalePoint = {
  name: string;
  type: "Restaurante" | "Tienda" | "Distribuidor" | "Mercado";
  locality: string;
  area: string;
  description?: string;
  contact?: string;
  href?: string;
  actionLabel?: string;
};

const salePoints: SalePoint[] = [
  {
    name: "Restaurant Marina Vella",
    type: "Restaurante",
    locality: "Roses",
    area: "Alt Empordà",
    description:
      "Cocina de producto con propuestas de temporada donde las halófitas aparecen en carta y sugerencias.",
    contact: "Reservas y carta según temporada",
  },
  {
    name: "Cuina de Sal",
    type: "Restaurante",
    locality: "Cadaqués",
    area: "Costa Brava",
    description:
      "Espacio gastronómico donde el producto vegetal local se trabaja con enfoque contemporáneo.",
    contact: "Consulta disponibilidad en servicio",
  },
  {
    name: "Botiga del Mercat",
    type: "Tienda",
    locality: "Figueres",
    area: "Alt Empordà",
    description:
      "Selección de producto local y gourmet con interés en vegetales singulares y de proximidad.",
    contact: "Venta directa en tienda",
  },
  {
    name: "Despensa de l'Empordà",
    type: "Tienda",
    locality: "Girona",
    area: "Girona",
    description:
      "Tienda especializada en producto regional y propuestas alimentarias con identidad de territorio.",
    contact: "Consulta stock semanal",
  },
  {
    name: "Mercat de Productors del Dissabte",
    type: "Mercado",
    locality: "Castelló d'Empúries",
    area: "Empordà",
    description:
      "Mercado local orientado a producto fresco y pequeños productores con presencia estacional.",
    contact: "Sábados por la mañana",
  },
  {
    name: "Canal Fresc Foodservice",
    type: "Distribuidor",
    locality: "Girona",
    area: "Catalunya",
    description:
      "Distribución para hostelería y negocios que buscan producto diferencial con relato agrícola claro.",
    contact: "Canal profesional",
    href: "/contacto",
    actionLabel: "Solicitar contacto",
  },
];

const groupedSalePoints = {
  Restaurantes: salePoints.filter((point) => point.type === "Restaurante"),
  Tiendas: salePoints.filter((point) => point.type === "Tienda"),
  Mercados: salePoints.filter((point) => point.type === "Mercado"),
  Distribución: salePoints.filter((point) => point.type === "Distribuidor"),
};

const typeStyles: Record<SalePoint["type"], string> = {
  Restaurante: "bg-[#35542f] text-white",
  Tienda: "bg-neutral-100 text-neutral-700",
  Distribuidor: "bg-[#e8dfd2] text-[#35542f]",
  Mercado: "bg-[#d9ca7a]/40 text-neutral-800",
};

export const metadata: Metadata = {
  title: `Puntos de venta | ${siteConfig.name}`,
  description:
    "Encuentra dónde comprar o descubrir productos VERDESAL en restaurantes, tiendas, mercados y distribución especializada.",
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
          <p className="max-w-3xl text-sm leading-6 text-neutral-500 sm:text-base">
            La disponibilidad puede variar según temporada, formato y canal.
            Si buscas un punto concreto o quieres trabajar con VERDESAL, te
            ayudamos a orientarlo.
          </p>
        </div>

        <div className="mt-8 space-y-10 sm:mt-10 sm:space-y-12">
          {Object.entries(groupedSalePoints).map(([groupName, points]) => (
            <section key={groupName} className="space-y-4">
              <div className="flex items-end justify-between gap-4 border-b border-neutral-200 pb-3">
                <div className="space-y-1">
                  <h2 className="text-xl font-semibold text-neutral-950 sm:text-2xl">
                    {groupName}
                  </h2>
                  <p className="text-sm text-neutral-500">
                    {points.length} {points.length === 1 ? "punto" : "puntos"}
                  </p>
                </div>
              </div>

              <div className="grid gap-4">
                {points.map((point) => (
                  <article
                    key={`${point.name}-${point.locality}`}
                    className="rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6"
                  >
                    <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[minmax(0,1fr)_220px] lg:items-start">
                      <div className="min-w-0 space-y-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <span
                            className={[
                              "rounded-full px-3 py-1 text-xs font-medium",
                              typeStyles[point.type],
                            ].join(" ")}
                          >
                            {point.type}
                          </span>
                          <span className="text-sm font-medium text-neutral-900">
                            {point.locality}
                          </span>
                          <span className="text-sm text-neutral-500">
                            · {point.area}
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

                      <div className="space-y-3 rounded-xl bg-neutral-50 p-4 lg:justify-self-end">
                        <div>
                          <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
                            Ubicación
                          </p>
                          <p className="mt-1 text-sm font-medium text-neutral-900">
                            {point.locality}
                          </p>
                        </div>

                        {point.contact ? (
                          <div>
                            <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
                              Información
                            </p>
                            <p className="mt-1 text-sm text-neutral-600">
                              {point.contact}
                            </p>
                          </div>
                        ) : null}

                        {point.href && point.actionLabel ? (
                          <Link
                            href={point.href}
                            className="inline-flex items-center text-sm font-medium text-[#35542f] hover:underline"
                          >
                            {point.actionLabel}
                          </Link>
                        ) : null}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}

          <section className="border-t border-neutral-200 pt-6 sm:pt-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                  Canal profesional
                </p>
                <h2 className="text-2xl tracking-tight text-neutral-950 sm:text-3xl">
                  ¿Quieres ofrecer nuestros productos?
                </h2>
                <p className="max-w-2xl text-base leading-7 text-neutral-600">
                  Si tienes una tienda, un restaurante o un canal de
                  distribución, podemos estudiar contigo el mejor encaje.
                </p>
              </div>

              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-full bg-[#35542f] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                ¿Quieres trabajar con nosotros?
              </Link>
            </div>
          </section>
        </div>
      </PageContainer>
    </section>
  );
}
