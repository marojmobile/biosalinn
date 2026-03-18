import Link from "next/link";
import type { Recipe } from "@/types/recipe";

type RecipeCardProps = {
  recipe: Recipe;
};

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:border-neutral-300 hover:shadow-sm">
      <div className="aspect-[4/3] bg-neutral-200" />

      <div className="space-y-4 p-5">
        <div className="space-y-1">
          <h3 className="text-xl font-semibold text-neutral-950">
            <Link href={`/recetas/${recipe.slug}`} className="hover:underline">
              {recipe.title}
            </Link>
          </h3>
        </div>

        <p className="text-sm leading-6 text-neutral-600">{recipe.excerpt}</p>

        <Link
          href={`/recetas/${recipe.slug}`}
          className="inline-flex text-sm font-medium text-neutral-900 hover:underline"
        >
          Ver receta
        </Link>
      </div>
    </article>
  );
}
