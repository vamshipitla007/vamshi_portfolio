// layouts/FoodZeroLayout.tsx
import { Outlet } from "react-router-dom";
import FoodzeroNavbar from "../../sections/foodzero/FoodzeroNavbar";
import FoodzeroFooter from "../../sections/foodzero/FoodzeroFooter";


const FoodZeroLayout = () => {
  return (
    <div className="bg-[#f5f5f5] min-h-screen flex flex-col">

      {/* Navbar */}
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-5 w-full">
        <FoodzeroNavbar />
      </div>

      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <FoodzeroFooter />
    </div>
  );
};

export default FoodZeroLayout;