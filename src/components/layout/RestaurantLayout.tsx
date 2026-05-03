// layouts/RestaurantLayout.tsx
import RestaurantNavbar from "@/sections/navbar/RestaurantNavbar";
import RestaurantFooter from "@/sections/restauranthomepage/RestaurantFooter";
import { Outlet } from "react-router-dom";


const RestaurantLayout = () => {
  return (
    <div className="bg-[#f5f5f5] min-h-screen flex flex-col">

      {/* Navbar */}
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-5 w-full">
        <RestaurantNavbar />
      </div>

      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <RestaurantFooter />
    </div>
  );
};

export default RestaurantLayout;