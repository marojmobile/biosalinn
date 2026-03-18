export type Recipe = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  description?: string;
  image: string;
  ingredients: string[];
  steps: string[];
  plantSlugs: string[];
  featured?: boolean;
};
