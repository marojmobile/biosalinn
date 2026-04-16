"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Plant } from "@/types/plant";
import { PlantRelatedRecipes } from "@/components/plants/plant-related-recipes";

type PlantDetailProps = {
  plant: Plant;
};

export function PlantDetail({ plant }: PlantDetailProps) {
  const images = plant.images.filter(Boolean);
  const [selectedImage, setSelectedImage] = useState(0);
  const mainImage = images[0] || "/images/plants/placeholder.jpg";
  const currentImage = images[selectedImage] || mainImage;

  return (
    <div className="space-y-12">
      <div className="space-y-8 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-10 lg:space-y-0">
        <div className="order-1 space-y-6 lg:order-2">
          <div className="space-y-3">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8d7a63]">
              Producto
            </p>

            <h1 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
              {plant.name}
            </h1>

            {plant.scientificName ? (
              <p className="text-base italic text-neutral-500">
                {plant.scientificName}
              </p>
            ) : null}
          </div>

          <p className="max-w-3xl text-lg leading-8 text-neutral-600">
            {plant.description}
          </p>

          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 sm:p-6">
            <div className="space-y-5">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-neutral-950">
                  Una planta pensada para cocina
                </h2>
                <p className="text-sm leading-6 text-neutral-600 sm:text-base">
                  Descubre cómo integrarla en carta, retail o propuestas
                  gastronómicas a partir de sus usos más naturales.
                </p>
              </div>

              {plant.culinaryUses?.length ? (
                <div className="space-y-3">
                  <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
                    Usos culinarios
                  </h3>

                  <ul className="flex flex-wrap gap-2">
                    {plant.culinaryUses.map((use) => (
                      <li
                        key={use}
                        className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-sm text-neutral-700"
                      >
                        {use}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {plant.seasons?.length ? (
                <div className="space-y-3">
                  <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
                    Temporada
                  </h3>

                  <ul className="flex flex-wrap gap-2">
                    {plant.seasons.map((season) => (
                      <li
                        key={season}
                        className="rounded-full bg-white px-3 py-1 text-sm text-neutral-700"
                      >
                        {season}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="flex flex-col gap-3 pt-1 sm:flex-row">
                <Link
                  href={`/recetas?planta=${plant.slug}`}
                  className="inline-flex items-center justify-center rounded-full bg-[#35542f] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#2d4728]"
                >
                  Ver recetas con esta planta
                </Link>

                <Link
                  href="#recetas-relacionadas"
                  className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-900 transition hover:border-neutral-400 hover:bg-white"
                >
                  Inspiración culinaria
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="order-2 space-y-4 lg:order-1">
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50">
            <Image
              key={currentImage}
              src={currentImage}
              alt={`${plant.name} - imagen ${selectedImage + 1}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
          </div>

          {images.length > 1 ? (
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
              {images.map((image, index) => {
                const isActive = index === selectedImage;

                return (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setSelectedImage(index)}
                    className={[
                      "group relative aspect-4/3 overflow-hidden rounded-xl border bg-neutral-50 transition-all duration-200",
                      isActive
                        ? "border-neutral-900 ring-2 ring-neutral-900/20"
                        : "border-neutral-200 hover:border-neutral-400",
                    ].join(" ")}
                    aria-label={`Ver imagen ${index + 1} de ${plant.name}`}
                    aria-pressed={isActive}
                  >
                    <Image
                      src={image}
                      alt={`${plant.name} miniatura ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 30vw, (max-width: 1024px) 160px, 120px"
                      className={[
                        "object-cover transition duration-200",
                        isActive
                          ? "scale-[1.02]"
                          : "opacity-80 group-hover:opacity-100",
                      ].join(" ")}
                    />
                  </button>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>

      <PlantRelatedRecipes plant={plant} />
    </div>
  );
}
