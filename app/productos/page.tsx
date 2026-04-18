import Image from "next/image";
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

        <section className="mb-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-5 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-sm leading-6 text-neutral-600 sm:p-6 sm:text-base">
            <p>
              Algunas forman parte del paisaje de nuestra costa desde siempre,
              aunque durante mucho tiempo han quedado fuera del cultivo y del
              consumo cotidiano.
            </p>
            <p>
              Lo especial de estas plantas no es solo que toleren la sal.
              También concentran matices vegetales y marinos muy singulares,
              texturas crujientes o carnosas, y una capacidad de adaptación que
              las hace especialmente interesantes para una agricultura
              distinta.
            </p>
            <p>
              En VERDESAL trabajamos con especies como la salicornia, el hinojo
              marino o el ficoide glacial, entre otras que vamos incorporando
              poco a poco.
            </p>
            <p>
              A nivel nutricional, son productos ligeros, con presencia natural
              de minerales y compuestos de interés alimentario. Algunas
              destacan también por su contenido en proteína vegetal,
              antioxidantes y grasas saludables.
            </p>
            <p>
              Dicho de forma simple: son plantas con personalidad en cocina y
              con un perfil nutricional que va mucho más allá de lo ornamental.
            </p>
          </div>

          <div className="relative aspect-4/3 overflow-hidden rounded-[2rem] bg-neutral-100">
            <Image
              src="/images/plants/ficoide-glacial/cover.webp"
              alt="Ficoide glacial fresco como muestra de las halófitas cultivadas por VERDESAL"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </section>

        <PlantGrid plants={plants} />
      </PageContainer>
    </section>
  );
}
