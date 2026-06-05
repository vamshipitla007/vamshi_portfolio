import MenuSection from "./MenuSection";
import ChefSection from "./ChefSection";
import FeaturesSection from "./FeaturesSection";
import BlogSection from "./BlogSection";
import ReservationSection from "./ReservationSection";
import TestimonialsSection from "./TestimonialsSection";

export default function Hero2(props) {
  return (
    <div className="w-full">
      <MenuSection />
      <ChefSection chefImage={props.chefImage} />
      <FeaturesSection />
      <BlogSection
        fruitImage={props.fruitImage}
        asparagusImage={props.asparagusImage}
      />
      <ReservationSection />
      <TestimonialsSection
        starter={props.starter}
        mainCourse={props.mainCourse}
        soup={props.soup}
        avatar={props.avatar}
      />
    </div>
  );
}