import TasteNestFooter from "@/sections/tastenest/TasteNestFooter";
import TasteNestNavbar from "@/sections/tastenest/TasteNestNavbar";
import { Outlet } from "react-router-dom";

const TasteNestLayout = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col overflow-hidden">
      {/* Navbar */}
      <div className="bg-white max-w-[1100px] mx-auto w-full">
        <TasteNestNavbar />
      </div>

      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <TasteNestFooter />
    </div>
  );
};

export default TasteNestLayout;