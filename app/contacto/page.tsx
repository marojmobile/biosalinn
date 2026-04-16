import type { Metadata } from "next";
import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";
import { siteConfig } from "@/content/site-config";

const contactEmail = "info@biosalinn.com";

const enquiryTypes = [
  {
    title: "Restauración",
    description: "Para cocinas y espacios gastronómicos que quieran trabajar el producto.",
  },
  {
    title: "Distribución",
    description: "Para tiendas, canales especializados y puntos de venta.",
  },
  {
    title: "Colaboraciones y prensa",
    description: "Para proyectos, medios, divulgación o iniciativas compartidas.",
  },
];

export const metadata: Metadata = {
  title: `Contacto | ${siteConfig.name}`,
  description:
    "Contacto comercial de VERDESAL para restauración, distribución, colaboraciones y consultas sobre producto.",
};

export default function ContactoPage() {
  return (
    <section className="py-10 sm:py-14">
      <PageContainer>
        <div className="space-y-4 border-b border-neutral-200 pb-8 sm:pb-10">
          <p className="text-xs uppercase tracking-[0.32em] text-[#8d7a63]">
            Contacto
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
            Hablemos
          </h1>
          <p className="max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
            Escríbenos si quieres trabajar el producto, valorar distribución o
            abrir una colaboración con VERDESAL.
          </p>
        </div>

        <div className="mt-8 space-y-8 sm:mt-10 sm:space-y-12">
          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {enquiryTypes.map((type, index) => (
              <article
                key={type.title}
                className={[
                  "rounded-[1.5rem] border p-5 sm:p-6",
                  index === 1
                    ? "border-[#ddd2c5] bg-[#f4f1ec]"
                    : "border-neutral-200 bg-white",
                ].join(" ")}
              >
                <h2 className="text-lg font-semibold text-neutral-950">
                  {type.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-neutral-600 sm:text-base">
                  {type.description}
                </p>
              </article>
            ))}
          </section>

          <section className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
            <div className="rounded-[2rem] border border-neutral-200 bg-white p-6 sm:p-8">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                  Formulario
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
                  Cuéntanos qué necesitas
                </h2>
              </div>

              <form className="mt-6 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="space-y-2">
                    <span className="text-sm font-medium text-neutral-900">
                      Nombre
                    </span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Tu nombre"
                      className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-neutral-500"
                    />
                  </label>

                  <label className="space-y-2">
                    <span className="text-sm font-medium text-neutral-900">
                      Email
                    </span>
                    <input
                      type="email"
                      name="email"
                      placeholder="tu@email.com"
                      className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-neutral-500"
                    />
                  </label>
                </div>

                <label className="space-y-2">
                  <span className="text-sm font-medium text-neutral-900">
                    Tipo de consulta
                  </span>
                  <select
                    name="type"
                    defaultValue=""
                    className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition focus:border-neutral-500"
                  >
                    <option value="" disabled>
                      Selecciona una opción
                    </option>
                    <option value="restauracion">Restauración</option>
                    <option value="distribucion">Distribución</option>
                    <option value="colaboraciones">
                      Colaboraciones / prensa / proyectos
                    </option>
                  </select>
                </label>

                <label className="space-y-2">
                  <span className="text-sm font-medium text-neutral-900">
                    Mensaje
                  </span>
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Explícanos brevemente tu interés, tu negocio o la colaboración que quieres valorar."
                    className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-neutral-500"
                  />
                </label>

                <div className="space-y-3 border-t border-neutral-200 pt-5">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full bg-[#35542f] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                  >
                    Enviar consulta
                  </button>

                  <p className="text-sm leading-6 text-neutral-500">
                    El formulario queda preparado para conectarlo al canal
                    definitivo de contacto.
                  </p>
                </div>
              </form>
            </div>

            <aside className="space-y-4">
              <div className="rounded-[2rem] bg-[#f4f1ec] p-6 sm:p-8">
                <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                  Contacto directo
                </p>

                <div className="mt-5 space-y-5">
                  <div>
                    <p className="text-sm font-medium text-neutral-900">
                      Email
                    </p>
                    <a
                      href={`mailto:${contactEmail}`}
                      className="mt-2 inline-flex text-base font-medium text-[#35542f] hover:underline"
                    >
                      {contactEmail}
                    </a>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-neutral-900">
                      Ubicación
                    </p>
                    <p className="mt-2 text-sm leading-6 text-neutral-600 sm:text-base">
                      Castelló d&apos;Empúries
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-neutral-900">
                      Web
                    </p>
                    <a
                      href={siteConfig.url}
                      className="mt-2 inline-flex text-sm text-[#35542f] hover:underline sm:text-base"
                    >
                      {siteConfig.url.replace(/^https?:\/\//, "")}
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-neutral-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-neutral-950">
                  Para avanzar más rápido
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-neutral-600 sm:text-base">
                  <li>Indica si tu consulta es comercial, gastronómica o técnica.</li>
                  <li>Cuéntanos qué tipo de negocio o proyecto tienes.</li>
                  <li>Explica si buscas producto, distribución o colaboración.</li>
                </ul>
              </div>

              <Link
                href="/productos"
                className="inline-flex items-center text-sm font-medium text-[#35542f] hover:underline"
              >
                Ver productos antes de escribir
              </Link>
            </aside>
          </section>
        </div>
      </PageContainer>
    </section>
  );
}
