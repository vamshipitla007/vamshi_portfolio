import Hero1 from "./Hero1";
import Hero2 from "./Hero2";

// Hero 1 Images
import MainDish from "@/assets/foodzero/plate.png";
import Spice1 from "@/assets/foodzero/termic.png";
import Spice2 from "@/assets/foodzero/seeds.png";
import Spice3 from "@/assets/foodzero/powder.png";
import Soup from "@/assets/foodzero/dish1.png";
import Pepper from "@/assets/foodzero/dish2.png";

// Hero 2 Images
import ChefImage from "@/assets/foodzero/cooking.png";
import FruitImage from "@/assets/foodzero/firut.png";
import AsparagusImage from "@/assets/foodzero/firut2.png";

import StarterImage from "@/assets/foodzero/Starters.png";
import MainCourseImage from "@/assets/foodzero/mains.png";
import SoupDishImage from "@/assets/foodzero/soups.png";

const FoodZeroHomepage = () => {
  return (
    <div>
      {/* Hero Section 1 */}
      <Hero1
        mainDish={MainDish}
        spice1={Spice1}
        spice2={Spice2}
        spice3={Spice3}
        soupImage={Soup}
        pepperImage={Pepper}
      />
      {/* Hero Section 2 */}
      <Hero2
        chefImage={ChefImage}
        fruitImage={FruitImage}
        asparagusImage={AsparagusImage}
        starter={StarterImage}
        mainCourse={MainCourseImage}
        soup={SoupDishImage}
        avatar={
          "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
        }
      />
    </div>
  );
};

export default FoodZeroHomepage;
