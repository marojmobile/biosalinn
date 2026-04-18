import Image from "next/image";
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

        {!plant && !hasUnknownPlantFilter ? (
          <section className="mb-10 grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-start">
            <div className="space-y-5 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-sm leading-6 text-neutral-600 sm:p-6 sm:text-base">
              <p>
                También funcionan muy bien transformadas: en salmueras,
                vinagres, sales vegetales, aceites, salsas o incluso
                mermeladas y elaboraciones dulces en algunos casos.
              </p>
              <p>
                Hay usos muy concretos que ya forman parte de nuestra manera de
                trabajarlas. La salicornia puede ir cruda, escaldada o
                encurtida; el hinojo marino funciona muy bien en vinagre, en
                ensaladas, con pescado o como botánico; el ficoide glacial
                aporta frescor en crudo y da muy buen resultado deshidratado o
                en aceite.
              </p>
              <p>
                Son ingredientes que no piden artificio, sino saber
                acompañarlos. En cocina profesional y en casa dan mucho juego y
                ayudan a entender el producto desde algo tan directo como el
                plato.
              </p>
            </div>

            <div className="relative aspect-4/3 overflow-hidden rounded-[2rem] bg-neutral-100">
              <Image
                src="/images/recipes/ensalada-salicornia.webp"
                alt="Plato con salicornia como ejemplo de uso culinario real"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </section>
        ) : null}

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
