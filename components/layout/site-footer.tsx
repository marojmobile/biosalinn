import { PageContainer } from "@/components/layout/page-container";

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <PageContainer className="flex flex-col gap-3 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-neutral-900">VERDESAL</p>
          <p className="text-sm text-neutral-600">
            Proyecto agrícola de plantas halófitas comestibles.
          </p>
        </div>

        <div className="text-sm text-neutral-500">
          BioSalINN · Castelló d&apos;Empúries
        </div>
      </PageContainer>
    </footer>
  );
}
