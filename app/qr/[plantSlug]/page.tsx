import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageContainer } from "@/components/layout/page-container";
import { RecipeGrid } from "@/components/recipes/recipe-grid";
import { getPlantBySlug } from "@/services/plants.service";
import { getRecipesByPlantSlug } from "@/services/recipes.service";

type QRPlantPageProps = {
  params: Promise<{
    plantSlug: string;
  }>;
};

export async function generateMetadata({
  params,
}: QRPlantPageProps): Promise<Metadata> {
  const { plantSlug } = await params;
  const plant = getPlantBySlug(plantSlug);

  if (!plant) {
    return {
      title: "QR no encontrado | VERDESAL",
    };
  }

  return {
    title: `${plant.name} | Recetas y uso | VERDESAL`,
    description: `Descubre qué es ${plant.name}, cómo usarla y recetas relacionadas.`,
  };
}

export default async function QRPlantPage({ params }: QRPlantPageProps) {
  const { plantSlug } = await params;
  const plant = getPlantBySlug(plantSlug);

  if (!plant) {
    notFound();
  }

  const recipes = getRecipesByPlantSlug(plant.slug);

  return (
    <section className="bg-white py-8 sm:py-10">
      <PageContainer className="max-w-3xl">
        <div className="space-y-8">
          <div className="space-y-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Escaneado desde el envase
            </p>

            <div className="space-y-2">
              <h1 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
                {plant.name}
              </h1>

              {plant.scientificName ? (
                <p className="text-sm italic text-neutral-500">
                  {plant.scientificName}
                </p>
              ) : null}
            </div>

            <p className="text-base leading-7 text-neutral-700 sm:text-lg">
              {plant.shortDescription}
            </p>

            <div className="flex flex-wrap gap-2">
              {plant.culinaryUses?.map((use) => (
                <span
                  key={use}
                  className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-sm text-neutral-700"
                >
                  {use}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">
              ¿Cómo puedes usarla?
            </h2>

            <p className="text-neutral-600">
              Aquí tienes algunas ideas rápidas para empezar a cocinar con esta
              planta halófita.
            </p>
          </div>

          {recipes.length > 0 ? (
            <RecipeGrid recipes={recipes} />
          ) : (
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-neutral-600">
              Estamos preparando recetas para esta planta. Muy pronto podrás ver
              ideas de uso aquí.
            </div>
          )}

          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href={`/productos/${plant.slug}`}
              className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50"
            >
              Ver ficha completa de la planta
            </Link>

            <Link
              href="/recetas"
              className="inline-flex items-center justify-center rounded-md bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              Ver todas las recetas
            </Link>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
