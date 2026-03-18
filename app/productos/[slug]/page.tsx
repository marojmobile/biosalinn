import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/page-container";
import { PlantDetail } from "@/components/plants/plant-detail";
import { getPlantBySlug } from "@/services/plants.service";

type PlantDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PlantDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const plant = getPlantBySlug(slug);

  if (!plant) {
    return {
      title: "Producto no encontrado | VERDESAL",
    };
  }

  return {
    title: `${plant.name} | VERDESAL`,
    description: plant.shortDescription,
  };
}

export default async function PlantDetailPage({
  params,
}: PlantDetailPageProps) {
  const { slug } = await params;
  const plant = getPlantBySlug(slug);

  if (!plant) {
    notFound();
  }

  return (
    <section className="py-10 sm:py-14">
      <PageContainer>
        <PlantDetail plant={plant} />
      </PageContainer>
    </section>
  );
}
