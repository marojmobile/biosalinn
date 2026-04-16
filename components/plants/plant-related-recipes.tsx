import Link from "next/link";
import type { Plant } from "@/types/plant";
import { RecipeGrid } from "@/components/recipes/recipe-grid";
import { getRecipesByPlantSlug } from "@/services/recipes.service";

type PlantRelatedRecipesProps = {
  plant: Pick<Plant, "name" | "slug">;
};

export function PlantRelatedRecipes({ plant }: PlantRelatedRecipesProps) {
  const recipes = getRecipesByPlantSlug(plant.slug);

  if (recipes.length === 0) {
    return null;
  }

  return (
    <section
      id="recetas-relacionadas"
      className="space-y-6 rounded-[2rem] border border-neutral-200 bg-neutral-50 p-6 sm:p-8"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#8d7a63]">
            Inspiración culinaria
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">
            Recetas con {plant.name}
          </h2>
          <p className="max-w-2xl text-neutral-600">
            Una selección pensada para que el salto de producto a uso real en
            cocina resulte inmediato.
          </p>
        </div>

        <Link
          href={`/recetas?planta=${plant.slug}`}
          className="inline-flex items-center text-sm font-medium text-[#35542f] hover:underline"
        >
          Ver todas las recetas con esta planta
        </Link>
      </div>

      <RecipeGrid recipes={recipes} />
    </section>
  );
}
