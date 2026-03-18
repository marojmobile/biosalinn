import { RecipeGrid } from "@/components/recipes/recipe-grid";
import { getRecipesByPlantSlug } from "@/services/recipes.service";

type PlantRelatedRecipesProps = {
  plantSlug: string;
};

export function PlantRelatedRecipes({ plantSlug }: PlantRelatedRecipesProps) {
  const recipes = getRecipesByPlantSlug(plantSlug);

  if (recipes.length === 0) {
    return null;
  }

  return (
    <section className="space-y-6 border-t border-neutral-200 pt-10">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">
          Recetas relacionadas
        </h2>
        <p className="text-neutral-600">
          Ideas para descubrir esta planta en cocina.
        </p>
      </div>

      <RecipeGrid recipes={recipes} />
    </section>
  );
}
