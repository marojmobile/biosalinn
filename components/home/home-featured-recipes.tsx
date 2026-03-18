import Link from "next/link";

import { getFeaturedRecipes } from "@/services/recipes.service";
import { RecipeGrid } from "@/components/recipes/recipe-grid";

export function HomeFeaturedRecipes() {
  const recipes = getFeaturedRecipes();

  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 space-y-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-neutral-950">Recetas</h2>
            <p className="text-neutral-600">
              Ideas para cocinar con plantas halófitas.
            </p>
          </div>

          <Link
            href="/recetas"
            className="text-sm font-medium text-neutral-900 hover:underline"
          >
            Ver todas
          </Link>
        </div>

        <RecipeGrid recipes={recipes} />
      </div>
    </section>
  );
}
