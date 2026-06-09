import FactoryProFooter from "@/sections/factoryPro/FactoryProFooter";
import FactoryProNavbar from "@/sections/factoryPro/FactoryProNavbar";
import { Outlet } from "react-router-dom";

const FactoryProLayout = () => {

  return (
    <div className="bg-white min-h-screen flex flex-col overflow-hidden">
      {/* Navbar */}
      <div className="mx-auto w-full">
        <FactoryProNavbar />
      </div>

      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <FactoryProFooter />
    </div>
  );
};

export default FactoryProLayout;