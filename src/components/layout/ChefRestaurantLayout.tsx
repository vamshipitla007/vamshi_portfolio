import ChefRestaurantFooter from "@/sections/chefrestaurant/FooterSection";
import ChefNavbar from "@/sections/navbar/ChefNavbar";
import { Outlet } from "react-router-dom";

const ChefRestaurantLayout = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col overflow-hidden">
      {/* Navbar */}
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-5 w-full">
        <ChefNavbar />
      </div>

      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <ChefRestaurantFooter />
    </div>
  );
};

export default ChefRestaurantLayout;
