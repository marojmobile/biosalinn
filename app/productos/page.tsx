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
          title="Plantas del litoral con mucho que aportar"
          description="Las halófitas son plantas que crecen de forma natural en ambientes salinos: marismas, zonas húmedas litorales, suelos cercanos al mar o terrenos afectados por exceso de sal."
        />

        <div className="mb-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-sm leading-6 text-neutral-600 sm:p-6 sm:text-base">
          Algunas forman parte del paisaje de nuestra costa desde siempre,
          aunque durante mucho tiempo han quedado fuera del cultivo y del
          consumo cotidiano. Lo especial de estas plantas no es solo que
          toleren la sal. También concentran matices vegetales y marinos muy
          singulares, texturas crujientes o carnosas, y una capacidad de
          adaptación que las hace especialmente interesantes para una
          agricultura distinta. En VERDESAL trabajamos con especies como la
          salicornia, el hinojo marino o el ficoide glacial, entre otras que
          vamos incorporando poco a poco. A nivel nutricional, son productos
          ligeros, con presencia natural de minerales y compuestos de interés
          alimentario. Algunas destacan también por su contenido en proteína
          vegetal, antioxidantes y grasas saludables. Dicho de forma simple:
          son plantas con personalidad en cocina y con un perfil nutricional
          que va mucho más allá de lo ornamental.
        </div>

        <PlantGrid plants={plants} />
      </PageContainer>
    </section>
  );
}
