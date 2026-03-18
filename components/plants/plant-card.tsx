import Link from "next/link";
import type { Plant } from "@/types/plant";

type PlantCardProps = {
  plant: Plant;
};

export function PlantCard({ plant }: PlantCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:border-neutral-300 hover:shadow-sm">
      <div className="aspect-[4/3] bg-neutral-200" />

      <div className="space-y-4 p-5">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold text-neutral-950">
            <Link href={`/productos/${plant.slug}`} className="hover:underline">
              {plant.name}
            </Link>
          </h2>

          {plant.scientificName && (
            <p className="text-sm italic text-neutral-500">
              {plant.scientificName}
            </p>
          )}
        </div>

        <p className="text-sm leading-6 text-neutral-600">
          {plant.shortDescription}
        </p>

        <Link
          href={`/productos/${plant.slug}`}
          className="inline-flex text-sm font-medium text-neutral-900 hover:underline"
        >
          Ver más
        </Link>
      </div>
    </article>
  );
}
