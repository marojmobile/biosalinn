import { recipes } from "@/data/recipes";

export function getRecipes() {
  return recipes;
}

export function getFeaturedRecipes() {
  return recipes.filter((recipe) => recipe.featured);
}

export function getRecipeBySlug(slug: string) {
  return recipes.find((recipe) => recipe.slug === slug) ?? null;
}

export function getRecipesByPlantSlug(plantSlug: string) {
  return recipes.filter((recipe) => recipe.plantSlugs.includes(plantSlug));
}
