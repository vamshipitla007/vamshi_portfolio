import aboutHero from "@/assets/factorypro/Image10.png";
import HeroBanner from "./HeroBanner";
import ServicesCategoryPage from "./ServicesCategoryPage";

export default function Customer() {
  return (
    <div>
      <HeroBanner
        image={aboutHero}
        height="400px"
        title={
            "Custom Manufacturing Solution"
        }
        description="Home / services / Custom Manufacturing Solution"
      />
      <ServicesCategoryPage />
    </div>
  );
}
