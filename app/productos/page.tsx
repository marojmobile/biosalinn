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

        <div className="mb-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-sm leading-6 text-neutral-600 sm:p-6 sm:text-base">
          Cada planta es un producto con identidad propia. En esta selección
          verás su perfil culinario, ideas de uso y la mejor forma de seguir
          explorándola en recetas.
        </div>

        <PlantGrid plants={plants} />
      </PageContainer>
    </section>
  );
}
