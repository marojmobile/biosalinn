import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/shared/page-header";

export default function ProductosPage() {
  return (
    <section className="py-10 sm:py-14">
      <PageContainer>
        <PageHeader
          title="Noticias"
          description="Actualidad del proyecto y presencia en medios."
        />

        <p className="text-neutral-600">Aquí irá el catálogo de plantas.</p>
      </PageContainer>
    </section>
  );
}
