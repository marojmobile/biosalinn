import Link from "next/link";

import { getFeaturedPlants } from "@/services/plants.service";
import { PlantGrid } from "@/components/plants/plant-grid";

export function HomeFeaturedPlants() {
  const plants = getFeaturedPlants();

  return (
    <section className="py-12 sm:py-16 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 space-y-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-neutral-950">Plantas</h2>
            <p className="text-neutral-600">
              Descubre nuestro catálogo de halófitas comestibles.
            </p>
          </div>

          <Link
            href="/productos"
            className="text-sm font-medium text-neutral-900 hover:underline"
          >
            Ver todas
          </Link>
        </div>

        <PlantGrid plants={plants} />
      </div>
    </section>
  );
}
