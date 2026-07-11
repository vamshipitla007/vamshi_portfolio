import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./FlowerSidebar";
import Navbar from "./FlowerNavbar";


const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Open sidebar on desktop by default
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F8FC]">
      {/* Sidebar */}
      <Sidebar
        openSidebar={sidebarOpen}
        setOpenSidebar={setSidebarOpen}
      />

      {/* Main */}
      <div
        className={`min-h-screen flex flex-col transition-all duration-300
        ${sidebarOpen ? "lg:ml-[250px]" : "lg:ml-[80px]"}`}
      >
        {/* Navbar */}
        <div
          className={`fixed top-0 right-0 z-40 transition-all duration-300
          ${sidebarOpen ? "lg:left-[250px]" : "lg:left-[80px]"} left-0`}
        >
          <Navbar
            openSidebar={sidebarOpen}
            setOpenSidebar={setSidebarOpen}
          />
        </div>

        {/* Overlay */}
        {/* {sidebarOpen && (
          <div
            onClick={() => setOpenSidebar(false)}
            className="fixed inset-0 bg-black/30 z-30 lg:hidden"
          />
        )} */}

        {/* Page */}
        <main className="pt-[72px] p-5">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;