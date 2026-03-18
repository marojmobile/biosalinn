import Image from "next/image";
import Link from "next/link";
import type { Plant } from "@/types/plant";

type PlantCardProps = {
  plant: Plant;
};

export function PlantCard({ plant }: PlantCardProps) {
  const imageSrc = plant.images[0] || "/images/plants/placeholder.jpg";

  return (
    <article className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:border-neutral-300 hover:shadow-sm">
      <Link
        href={`/productos/${plant.slug}`}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2"
      >
        <div className="relative aspect-4/3 overflow-hidden bg-neutral-100">
          <Image
            src={imageSrc}
            alt={`Imagen de ${plant.name}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-300 group-hover:scale-[1.02]"
          />
        </div>
      </Link>

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
