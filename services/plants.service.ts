import { plants } from "@/data/plants";

export function getPlants() {
  return plants;
}

export function getFeaturedPlants() {
  return plants.filter((plant) => plant.featured);
}

export function getPlantBySlug(slug: string) {
  return plants.find((plant) => plant.slug === slug) ?? null;
}
