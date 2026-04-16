import { existsSync } from "node:fs";
import path from "node:path";
import type { Plant } from "@/types/plant";

function imageExists(imagePath: string) {
  if (!imagePath.startsWith("/")) {
    return false;
  }

  const normalizedPath = imagePath.replace(/^\/+/, "").replaceAll("/", path.sep);
  return existsSync(path.join(process.cwd(), "public", normalizedPath));
}

export function normalizePlantImages(plant: Plant): Plant {
  const images = plant.images.filter((image) => imageExists(image));

  return {
    ...plant,
    images,
  };
}
