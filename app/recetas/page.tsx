import { PageContainer } from "@/components/layout/page-container";
import { RecipeGrid } from "@/components/recipes/recipe-grid";
import { PageHeader } from "@/components/shared/page-header";
import { getPlantBySlug } from "@/services/plants.service";
import { getRecipesFiltered } from "@/services/recipes.service";

type RecetasPageProps = {
  searchParams?: Promise<{
    planta?: string | string[];
  }>;
};

export default async function RecetasPage({ searchParams }: RecetasPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const plantParam = resolvedSearchParams?.planta;
  const plantSlug = Array.isArray(plantParam) ? plantParam[0] : plantParam;
  const plant = plantSlug ? getPlantBySlug(plantSlug) : null;
  const recipes = getRecipesFiltered({
    plantSlug: plant ? plant.slug : undefined,
  });

  const title = plant
    ? `Recetas con ${plant.name}`
    : "Del plato diario a la cocina con identidad";
  const description = plant
    ? `Ideas y propuestas para cocinar con ${plant.name.toLowerCase()} y descubrir su potencial gastronómico.`
    : "Las halófitas se pueden usar de forma muy sencilla: en fresco, en ensalada, salteadas, al vapor, encurtidas o como guarnición.";
  const hasUnknownPlantFilter = Boolean(plantSlug) && !plant;

  return (
    <section className="py-10 sm:py-14">
      <PageContainer>
        <PageHeader title={title} description={description} />

        {hasUnknownPlantFilter ? (
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-neutral-700">
            No hemos encontrado una planta asociada a ese enlace. Puedes explorar
            aquí todas nuestras recetas disponibles.
          </div>
        ) : recipes.length > 0 ? (
          <RecipeGrid recipes={recipes} />
        ) : (
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-neutral-700">
            Estamos preparando nuevas recetas para {plant?.name.toLowerCase()}.
            Vuelve pronto y te enseñaremos más ideas para cocinarla.
          </div>
        )}
      </PageContainer>
    </section>
  );
}
