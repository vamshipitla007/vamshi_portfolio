import GreendyFooter from "@/sections/greendy/GreendyFooter";
import GreendyNavbar from "@/sections/greendy/GreendyNavbar";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const GreendyLayout = () => {
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
        <GreendyNavbar />
      </div>

      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <GreendyFooter />
    </div>
  );
};

export default GreendyLayout;
