import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/page-container";
import { getPlantBySlug } from "@/services/plants.service";
import { PlantRelatedRecipes } from "@/components/plants/plant-related-recipes";

type PlantDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PlantDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const plant = getPlantBySlug(slug);

  if (!plant) {
    return {
      title: "Producto no encontrado | VERDESAL",
    };
  }

  return {
    title: `${plant.name} | VERDESAL`,
    description: plant.shortDescription,
  };
}

export default async function PlantDetailPage({
  params,
}: PlantDetailPageProps) {
  const { slug } = await params;
  const plant = getPlantBySlug(slug);

  if (!plant) {
    notFound();
  }

  return (
    <section className="py-10 sm:py-14">
      <PageContainer>
        <div className="space-y-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                  Producto
                </p>

                <h1 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
                  {plant.name}
                </h1>

                {plant.scientificName ? (
                  <p className="text-base italic text-neutral-500">
                    {plant.scientificName}
                  </p>
                ) : null}
              </div>

              <p className="max-w-3xl text-lg leading-8 text-neutral-600">
                {plant.description}
              </p>

              {plant.culinaryUses?.length ? (
                <div className="space-y-3">
                  <h2 className="text-lg font-semibold text-neutral-950">
                    Usos culinarios
                  </h2>

                  <ul className="flex flex-wrap gap-2">
                    {plant.culinaryUses.map((use) => (
                      <li
                        key={use}
                        className="rounded-full border border-neutral-200 px-3 py-1 text-sm text-neutral-700"
                      >
                        {use}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {plant.seasons?.length ? (
                <div className="space-y-3">
                  <h2 className="text-lg font-semibold text-neutral-950">
                    Temporada
                  </h2>

                  <ul className="flex flex-wrap gap-2">
                    {plant.seasons.map((season) => (
                      <li
                        key={season}
                        className="rounded-full bg-neutral-100 px-3 py-1 text-sm text-neutral-700"
                      >
                        {season}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
              <div className="aspect-[4/5] rounded-xl bg-neutral-200" />
            </div>
          </div>

          <PlantRelatedRecipes plantSlug={plant.slug} />
        </div>
      </PageContainer>
    </section>
  );
}
