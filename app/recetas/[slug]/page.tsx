import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";
import { getRecipeBySlug } from "@/services/recipes.service";
import { getPlants } from "@/services/plants.service";

type RecipeDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: RecipeDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    return {
      title: "Receta no encontrada | VERDESAL",
    };
  }

  return {
    title: `${recipe.title} | VERDESAL`,
    description: recipe.excerpt,
  };
}

export default async function RecipeDetailPage({
  params,
}: RecipeDetailPageProps) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    notFound();
  }

  const relatedPlants = getPlants().filter((plant) =>
    recipe.plantSlugs.includes(plant.slug),
  );

  return (
    <section className="py-10 sm:py-14">
      <PageContainer>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                Receta
              </p>

              <h1 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
                {recipe.title}
              </h1>

              <p className="max-w-3xl text-lg leading-8 text-neutral-600">
                {recipe.description ?? recipe.excerpt}
              </p>
            </div>

            {relatedPlants.length > 0 ? (
              <div className="space-y-3">
                <h2 className="text-lg font-semibold text-neutral-950">
                  Plantas relacionadas
                </h2>

                <ul className="flex flex-wrap gap-2">
                  {relatedPlants.map((plant) => (
                    <li key={plant.slug}>
                      <Link
                        href={`/productos/${plant.slug}`}
                        className="inline-flex rounded-full border border-neutral-200 px-3 py-1 text-sm text-neutral-700 transition hover:bg-neutral-50 hover:text-neutral-950"
                      >
                        {plant.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-neutral-950">
                  Ingredientes
                </h2>

                <ul className="space-y-3">
                  {recipe.ingredients.map((ingredient) => (
                    <li
                      key={ingredient}
                      className="rounded-xl border border-neutral-200 px-4 py-3 text-neutral-700"
                    >
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-neutral-950">
                  Elaboración
                </h2>

                <ol className="space-y-3">
                  {recipe.steps.map((step, index) => (
                    <li
                      key={`${recipe.id}-${index}`}
                      className="rounded-xl border border-neutral-200 px-4 py-3 text-neutral-700"
                    >
                      <span className="mr-2 font-semibold text-neutral-950">
                        {index + 1}.
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
            <div className="aspect-[4/5] rounded-xl bg-neutral-200" />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
