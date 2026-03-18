import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/shared/page-header";
import { RecipeGrid } from "@/components/recipes/recipe-grid";
import { getRecipes } from "@/services/recipes.service";

export default function RecetasPage() {
  const recipes = getRecipes();

  return (
    <section className="py-10 sm:py-14">
      <PageContainer>
        <PageHeader
          title="Recetas"
          description="Ideas y propuestas para cocinar con plantas halófitas."
        />

        <RecipeGrid recipes={recipes} />
      </PageContainer>
    </section>
  );
}
