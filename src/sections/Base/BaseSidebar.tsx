// layouts/BaseSidebar.ts

import { Menu } from "lucide-react";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function BaseSidebar() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F5F7]">

      <Sidebar
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
      />

      <div className="lg:ml-[240px]">

        {/* Mobile Header */}
        <div className="lg:hidden h-[60px] bg-white flex items-center px-4 shadow-sm">
          <button onClick={() => setOpenSidebar(true)}>
            <Menu className="w-6 h-6 text-[#1E1E3F]" />
          </button>
        </div>
        <main className="p-4 md:p-6">
          <Outlet />
        </main>

      </div>

    </div>
  );
}
