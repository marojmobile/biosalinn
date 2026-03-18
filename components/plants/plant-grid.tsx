import type { Plant } from "@/types/plant";
import { PlantCard } from "@/components/plants/plant-card";

type PlantGridProps = {
  plants: Plant[];
};

export function PlantGrid({ plants }: PlantGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </div>
  );
}
