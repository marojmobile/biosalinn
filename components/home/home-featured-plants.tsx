import Link from "next/link";

import { PlantGrid } from "@/components/plants/plant-grid";
import { getFeaturedPlants } from "@/services/plants.service";

export function HomeFeaturedPlants() {
  const plants = getFeaturedPlants();

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
              Nuestras plantas
            </p>
            <h2 className="max-w-md text-3xl tracking-tight text-[#b3946a] sm:text-4xl">
              Plantas del litoral con mucho que aportar
            </h2>
          </div>

          <div className="space-y-4 lg:justify-self-end lg:text-right">
            <p className="max-w-2xl text-base leading-7 text-[#5f5950]">
              Las halófitas crecen de forma natural en ambientes salinos y
              concentran matices, texturas y posibilidades que van mucho más
              allá de lo ornamental.
            </p>

            <Link
              href="/productos"
              className="inline-flex items-center text-sm font-medium text-[#35542f] hover:underline"
            >
              Ver todas las plantas
            </Link>
          </div>
        </div>

        <PlantGrid plants={plants} />
      </div>
    </section>
  );
}
