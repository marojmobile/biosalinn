import type { Plant } from "@/types/plant";

export const plants: Plant[] = [
  {
    id: "salicornia",
    slug: "salicornia",
    name: "Salicornia",
    scientificName: "Salicornia europaea",
    shortDescription:
      "Una halófita crujiente y sorprendente, ideal para introducirse en el mundo de las plantas de marisma.",
    description:
      "La salicornia es una planta halófita comestible apreciada por su textura crujiente y su perfil salino natural. En cocina puede utilizarse en ensaladas, salteados, guarniciones o como ingrediente diferencial en propuestas contemporáneas.",
    images: [
      "/images/plants/salicornia/cover.webp",
      "/images/plants/salicornia/detail-1.webp",
      "/images/plants/salicornia/detail-2.webp",
    ],
    culinaryUses: ["Ensaladas", "Salteados", "Guarniciones"],
    seasons: ["Primavera", "Verano"],
    featured: true,
  },
  {
    id: "ficoide-glacial",
    slug: "ficoide-glacial",
    name: "Ficoide glacial",
    scientificName: "Mesembryanthemum crystallinum",
    shortDescription:
      "Una planta de aspecto brillante y textura fresca, con gran potencial gastronómico.",
    description:
      "El ficoide glacial destaca por su apariencia cristalina y por aportar frescor y singularidad visual al plato. Puede utilizarse en crudo, como parte de mezclas vegetales o para dar un toque original a elaboraciones creativas.",
    images: [
      "/images/plants/ficoide-glacial/cover.webp",
      "/images/plants/ficoide-glacial/detail-1.webp",
      "/images/plants/ficoide-glacial/detail-2.webp",
    ],
    culinaryUses: ["En crudo", "Mezclas vegetales", "Emplatados creativos"],
    seasons: ["Primavera", "Verano"],
    featured: true,
  },
  {
    id: "verdolaga-marina",
    slug: "verdolaga-marina",
    name: "Verdolaga marina",
    scientificName: "Sesuvium portulacastrum",
    shortDescription:
      "Una halófita versátil con textura carnosa y aplicaciones culinarias muy interesantes.",
    description:
      "La verdolaga marina ofrece una textura agradable y una personalidad propia que la hace útil tanto en preparaciones frescas como en propuestas más elaboradas. Es una forma excelente de acercar al consumidor a nuevos vegetales adaptados a suelos salinos.",
    images: [
      "/images/plants/verdolaga-marina/cover.webp",
      "/images/plants/verdolaga-marina/detail-1.webp",
      "/images/plants/verdolaga-marina/detail-2.webp",
    ],
    culinaryUses: ["Ensaladas", "Guarniciones", "Cocina creativa"],
    seasons: ["Primavera", "Verano"],
    featured: false,
  },
];
