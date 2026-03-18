export type Plant = {
  id: string;
  slug: string;
  name: string;
  scientificName?: string;
  shortDescription: string;
  description: string;
  images: string[];
  culinaryUses?: string[];
  seasons?: string[];
  featured?: boolean;
};
