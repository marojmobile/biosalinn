import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/shared/page-header";
import { PlantGrid } from "@/components/plants/plant-grid";
import { getPlants } from "@/services/plants.service";

export default function ProductosPage() {
  const plants = getPlants();

  return (
    <section className="py-10 sm:py-14">
      <PageContainer>
        <PageHeader
          title="Productos"
          description="Descubre nuestras plantas halófitas cultivadas en el Empordà y su potencial gastronómico."
        />

        <PlantGrid plants={plants} />
      </PageContainer>
    </section>
  );
}
