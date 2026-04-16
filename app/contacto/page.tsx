import type { Metadata } from "next";
import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";
import { siteConfig } from "@/content/site-config";

const contactEmail = "info@biosalinn.com";

const enquiryTypes = [
  {
    title: "Restauración",
    description:
      "Para cocinas, restaurantes y espacios gastronómicos que quieran trabajar el producto o conocer mejor sus aplicaciones.",
  },
  {
    title: "Distribución",
    description:
      "Para tiendas, canales especializados y negocios que quieran valorar encaje comercial o presencia en punto de venta.",
  },
  {
    title: "Colaboraciones y prensa",
    description:
      "Para proyectos, divulgación, investigación, medios o conversaciones ligadas a innovación agrícola y territorio.",
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
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
            Contacto
          </h1>
          <p className="max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
            Hablemos de producto, distribución o colaboraciones. Si encaja con
            tu negocio o proyecto, te ayudamos a dar el siguiente paso.
          </p>
        </div>

        <div className="mt-8 space-y-8 sm:mt-10 sm:space-y-10">
          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {enquiryTypes.map((type) => (
              <article
                key={type.title}
                className="rounded-[1.75rem] border border-neutral-200 bg-white p-6"
              >
                <h2 className="text-xl font-semibold text-neutral-950">
                  {type.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-neutral-600 sm:text-base">
                  {type.description}
                </p>
              </article>
            ))}
          </section>

          <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div className="rounded-[2rem] border border-neutral-200 bg-white p-6 sm:p-8">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                  Escríbenos
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
                    placeholder="Explícanos brevemente tu interés, tu negocio o el tipo de colaboración que te gustaría valorar."
                    className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-neutral-500"
                  />
                </label>

                <div className="space-y-3 pt-1">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full bg-[#35542f] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                  >
                    Enviar consulta
                  </button>

                  <p className="text-sm leading-6 text-neutral-500">
                    El formulario queda preparado para conectar el envío con el
                    canal definitivo de contacto. Mientras tanto, también puedes
                    escribirnos directamente.
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

              <div className="rounded-[2rem] border border-neutral-200 bg-white p-6 sm:p-8">
                <p className="text-xs uppercase tracking-[0.28em] text-[#8d7a63]">
                  Qué puede ayudarte a avanzar
                </p>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-neutral-600 sm:text-base">
                  <li>Indicar si tu interés es comercial, gastronómico o técnico.</li>
                  <li>Contar brevemente qué tipo de negocio o proyecto tienes.</li>
                  <li>Explicar si buscas producto, distribución o colaboración.</li>
                </ul>
              </div>

              <div className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-neutral-950">
                  ¿Aún no conoces bien el producto?
                </h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600 sm:text-base">
                  Antes de escribir, puede ayudarte ver las plantas y entender
                  mejor cómo se presentan.
                </p>
                <Link
                  href="/productos"
                  className="mt-4 inline-flex text-sm font-medium text-[#35542f] hover:underline"
                >
                  Ver productos
                </Link>
              </div>
            </aside>
          </section>
        </div>
      </PageContainer>
    </section>
  );
}
