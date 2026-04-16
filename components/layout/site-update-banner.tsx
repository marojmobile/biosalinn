import { PageContainer } from "@/components/layout/page-container";

const bannerMessage =
  "Estamos construyendo la nueva web de VERDESAL. Algunas secciones aún están en proceso de actualización. Muy pronto activaremos nuevos canales de contacto para producto, distribución y colaboraciones.";

export function SiteUpdateBanner() {
  return (
    <section className="sticky top-16 z-30 border-b border-[#cdbca8] bg-[#efe6d8] shadow-[0_1px_0_rgba(141,122,99,0.08)]">
      <PageContainer className="py-3 sm:py-4">
        <div className="flex flex-col gap-4 sm:gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-4xl space-y-2">
            <p className="text-xs uppercase tracking-[0.32em] text-[#35542f]">
              Actualización web
            </p>
            <p className="text-sm leading-6 text-[#433d36] sm:text-base sm:leading-7">
              {bannerMessage}
            </p>
          </div>

          <button
            type="button"
            disabled
            aria-disabled="true"
            className="inline-flex cursor-not-allowed items-center justify-center rounded-full border border-[#ab9985] bg-white px-5 py-3 text-sm font-medium text-[#6f6558] opacity-90"
          >
            Contacto disponible en breve
          </button>
        </div>
      </PageContainer>
    </section>
  );
}
