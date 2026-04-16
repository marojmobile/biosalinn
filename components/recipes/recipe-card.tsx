import Image from "next/image";
import Link from "next/link";
import type { Recipe } from "@/types/recipe";

type RecipeCardProps = {
  recipe: Recipe;
};

export function RecipeCard({ recipe }: RecipeCardProps) {
  const hasImage = Boolean(recipe.image?.trim());

  return (
    <article className="overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:border-neutral-300 hover:shadow-sm">
      <Link
        href={`/recetas/${recipe.slug}`}
        className="group flex h-full flex-col"
      >
        <div className="relative aspect-4/3 overflow-hidden bg-neutral-100">
          {hasImage ? (
            <Image
              src={recipe.image}
              alt={`Imagen de la receta ${recipe.title}`}
              fill
              className="object-cover transition duration-300 group-hover:scale-[1.02]"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-neutral-100 px-6 text-center text-sm text-neutral-500">
              Imagen de la receta disponible muy pronto
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col space-y-4 p-5">
          <div className="space-y-1">
            <h3 className="text-xl font-semibold text-neutral-950 transition group-hover:underline">
              {recipe.title}
            </h3>
          </div>

          <p className="flex-1 text-sm leading-6 text-neutral-600">
            {recipe.excerpt}
          </p>

          <span className="inline-flex text-sm font-medium text-neutral-900 group-hover:underline">
            Ver receta
          </span>
        </div>
      </Link>
    </article>
  );
}
