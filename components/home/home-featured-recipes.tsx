import Link from "next/link";

import { RecipeGrid } from "@/components/recipes/recipe-grid";
import { getFeaturedRecipes } from "@/services/recipes.service";

export function HomeFeaturedRecipes() {
  const recipes = getFeaturedRecipes();

  return (
    <section className="bg-[#f4f1ec] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
              Cómo usarlas
            </p>
            <h2 className="max-w-xl text-3xl tracking-tight text-[#b3946a] sm:text-4xl">
              Del plato diario a la cocina con identidad
            </h2>
            <p className="max-w-2xl text-base leading-7 text-[#5f5950]">
              Las halófitas se pueden usar en fresco, salteadas, al vapor,
              encurtidas o transformadas en sales, aceites, salsas y otras
              elaboraciones con mucho recorrido.
            </p>
          </div>

          <Link
            href="/recetas"
            className="inline-flex items-center text-sm font-medium text-[#35542f] hover:underline lg:justify-self-end"
          >
            Ver todas las recetas
          </Link>
        </div>

        <RecipeGrid recipes={recipes} />
      </div>
    </section>
  );
}
