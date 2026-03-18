import type { Recipe } from "@/types/recipe";

export const recipes: Recipe[] = [
  {
    id: "ensalada-salicornia",
    slug: "ensalada-salicornia",
    title: "Ensalada con salicornia",
    excerpt:
      "Una receta fresca y sencilla para descubrir la textura crujiente y salina de la salicornia.",
    description:
      "Una propuesta ligera y fácil de preparar, ideal para un primer contacto con la salicornia en cocina.",
    image: "/images/recipes/ensalada-salicornia.jpg",
    ingredients: [
      "Salicornia",
      "Tomate",
      "Aceite de oliva virgen extra",
      "Cebolla tierna",
    ],
    steps: [
      "Lava bien todos los ingredientes.",
      "Corta el tomate y la cebolla tierna.",
      "Añade la salicornia al final para mantener su textura.",
      "Aliña con aceite de oliva y sirve.",
    ],
    plantSlugs: ["salicornia"],
    featured: true,
  },
  {
    id: "ficoide-fresco",
    slug: "ficoide-fresco",
    title: "Ficoide glacial en preparación fresca",
    excerpt:
      "Una forma simple de apreciar el aspecto brillante y la frescura del ficoide glacial.",
    description:
      "Receta pensada para resaltar el carácter visual y la textura de esta planta halófita.",
    image: "/images/recipes/ficoide-fresco.jpg",
    ingredients: ["Ficoide glacial", "Pepino", "Yogur natural", "Limón"],
    steps: [
      "Lava cuidadosamente el ficoide glacial.",
      "Corta el pepino en rodajas finas.",
      "Mezcla el yogur con unas gotas de limón.",
      "Sirve todo junto con el ficoide por encima.",
    ],
    plantSlugs: ["ficoide-glacial"],
    featured: true,
  },
  {
    id: "salteado-halofitas",
    slug: "salteado-halofitas",
    title: "Salteado de halófitas",
    excerpt:
      "Una receta sencilla para combinar varias plantas halófitas en una misma propuesta.",
    description:
      "Ideal para mostrar que estas especies pueden convivir en cocina y generar platos originales.",
    image: "/images/recipes/salteado-halofitas.jpg",
    ingredients: ["Salicornia", "Verdolaga marina", "Ajo", "Aceite de oliva"],
    steps: [
      "Calienta una sartén con un poco de aceite.",
      "Añade el ajo y sofríe ligeramente.",
      "Incorpora las plantas y saltea brevemente.",
      "Sirve como guarnición o plato vegetal.",
    ],
    plantSlugs: ["salicornia", "verdolaga-marina"],
    featured: false,
  },
];
