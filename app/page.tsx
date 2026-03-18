import { HomeHero } from "@/components/home/home-hero";
import { HomeIntro } from "@/components/home/home-intro";
import { HomeFeaturedPlants } from "@/components/home/home-featured-plants";
import { HomeFeaturedRecipes } from "@/components/home/home-featured-recipes";
import { HomeQR } from "@/components/home/home-qr";
import { HomeCTA } from "@/components/home/home-cta";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeIntro />
      <HomeFeaturedPlants />
      <HomeFeaturedRecipes />
      <HomeQR />
      <HomeCTA />
    </>
  );
}
