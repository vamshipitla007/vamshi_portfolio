import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import DxdyFooter from "../ui/DxdyFooter";
import DxdyNavbar from "../ui/DxdyNavbar";

const DxdyLayout = () => {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const updateTheme = () => {
      document.documentElement.classList.toggle("dark", mediaQuery.matches);
    };

    updateTheme();

    mediaQuery.addEventListener("change", updateTheme);

    return () => mediaQuery.removeEventListener("change", updateTheme);
  }, []);
  return (
    <div className="bg-white min-h-screen flex flex-col overflow-hidden">
      {/* Navbar */}
      <div className="mx-auto w-full">
        <DxdyNavbar />
      </div>

      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <DxdyFooter />
    </div>
  );
};

export default DxdyLayout;
