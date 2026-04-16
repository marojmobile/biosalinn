import Image from "next/image";
import Link from "next/link";
import type { Plant } from "@/types/plant";

type PlantCardProps = {
  plant: Plant;
};

export function PlantCard({ plant }: PlantCardProps) {
  const imageSrc = plant.images[0] || "/images/plants/placeholder.jpg";
  const featuredUses = plant.culinaryUses?.slice(0, 3) ?? [];
  const seasonLabel = plant.seasons?.join(" · ");

  return (
    <article className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:border-neutral-300 hover:shadow-sm">
      <Link
        href={`/productos/${plant.slug}`}
        className="flex h-full flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2"
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

        <div className="flex flex-1 flex-col space-y-4 p-5">
          <div className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#8d7a63]">
              Planta halófita
            </p>

            <div className="space-y-1">
              <h2 className="text-xl font-semibold text-neutral-950 transition group-hover:underline">
                {plant.name}
              </h2>

              {plant.scientificName ? (
                <p className="text-sm italic text-neutral-500">
                  {plant.scientificName}
                </p>
              ) : null}
            </div>
          </div>

          <p className="text-sm leading-6 text-neutral-600">
            {plant.shortDescription}
          </p>

          {featuredUses.length ? (
            <div className="space-y-2">
              <p className="text-sm font-medium text-neutral-900">
                Ideal para
              </p>

              <ul className="flex flex-wrap gap-2">
                {featuredUses.map((use) => (
                  <li
                    key={use}
                    className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700"
                  >
                    {use}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {seasonLabel ? (
            <p className="text-sm text-neutral-500">
              Temporada: <span className="text-neutral-700">{seasonLabel}</span>
            </p>
          ) : null}

          <span className="mt-auto inline-flex text-sm font-medium text-[#35542f] group-hover:underline">
            Descubrir planta
          </span>
        </div>
      </Link>
    </article>
  );
}
