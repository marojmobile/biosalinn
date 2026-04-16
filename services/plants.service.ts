import { plants } from "@/data/plants";
import { normalizePlantImages } from "@/lib/plant-images";

export function getPlants() {
  return plants.map(normalizePlantImages);
}

export function getFeaturedPlants() {
  return getPlants().filter((plant) => plant.featured);
}

export function getPlantBySlug(slug: string) {
  const plant = plants.find((candidate) => candidate.slug === slug);
  return plant ? normalizePlantImages(plant) : null;
}
