// layouts/BaseSidebar.ts

import { Menu } from "lucide-react";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function BaseSidebar() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div
      className="
        min-h-screen
        bg-[#F5F5F7]
        dark:bg-slate-950
        transition-colors
        duration-300
      "
    >
      <Sidebar
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
      />

      <div className="lg:ml-[240px]">
        {/* Mobile Header */}
        <div
          className="
            lg:hidden
            h-[60px]
            bg-white
            dark:bg-gray-900
            border-b
            border-gray-200
            dark:border-gray-800
            flex
            items-center
            px-4
          "
        >
          <button onClick={() => setOpenSidebar(true)}>
            <Menu
              className="
                w-6
                h-6
                text-[#1E1E3F]
                dark:text-white
              "
            />
          </button>
        </div>

        <main className="p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
