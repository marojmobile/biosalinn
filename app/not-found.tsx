import Link from "next/link";

import { PageContainer } from "@/components/layout/page-container";

export default function NotFound() {
  return (
    <section className="py-16 sm:py-24">
      <PageContainer>
        <div className="max-w-xl space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Error 404
          </p>

          <h1 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
            Página no encontrada
          </h1>

          <p className="text-lg text-neutral-600">
            La página que buscas no existe o ya no está disponible.
          </p>

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            Volver al inicio
          </Link>
        </div>
      </PageContainer>
    </section>
  );
}
