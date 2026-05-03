// pages/Homepage.tsx
import Hero from "@/sections/restauranthomepage/Hero";
import WelcomeSection from "@/sections/restauranthomepage/WelcomeSection";
import MenuSection from "@/sections/restauranthomepage/MenuSection";
import ReservationSection from "@/sections/restauranthomepage/ReservationSection";
import ChefSection from "@/sections/restauranthomepage/ChefSection";
import TestimonialSection from "@/sections/restauranthomepage/TestimonialSection";
import OpenHoursCard from "@/sections/restauranthomepage/OpenHoursCard";

const Homepage = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <Hero />
      </div>

      <WelcomeSection />
      <MenuSection />
      <ReservationSection />
      <ChefSection />
      <TestimonialSection />
      <OpenHoursCard />
    </>
  );
};

export default Homepage;