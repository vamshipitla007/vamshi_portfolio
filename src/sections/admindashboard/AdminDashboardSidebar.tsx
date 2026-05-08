import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  Heart,
  MessageSquare,
  ClipboardList,
  Database,
  BadgeDollarSign,
  CalendarDays,
  ClipboardCheck,
  Users,
  Receipt,
  PanelsTopLeft,
  UserRound,
  Table2,
  Settings,
  LogOut,
} from "lucide-react";

import AdminDashboardNavbar from "./AdminDashboardNavbar";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/admin-dashboard/dashboard",
  },
  {
    title: "Products",
    icon: Package,
    path: "/admin-dashboard/products",
  },
  {
    title: "Favorites",
    icon: Heart,
    path: "/admin-dashboard/favorites",
  },
  {
    title: "Inbox",
    icon: MessageSquare,
    path: "/admin-dashboard/inbox",
  },
  {
    title: "Order Lists",
    icon: ClipboardList,
    path: "/admin-dashboard/orders",
  },
  {
    title: "Product Stock",
    icon: Database,
    path: "/admin-dashboard/product-stock",
  },
];

const pageItems = [
  {
    title: "Pricing",
    icon: BadgeDollarSign,
    path: "/admin-dashboard/pricing",
  },
  {
    title: "Calender",
    icon: CalendarDays,
    path: "/admin-dashboard/calendar",
  },
  {
    title: "To-Do",
    icon: ClipboardCheck,
    path: "/admin-dashboard/todo",
  },
  {
    title: "Contact",
    icon: Users,
    path: "/admin-dashboard/contact",
  },
  {
    title: "Invoice",
    icon: Receipt,
    path: "/admin-dashboard/invoice",
  },
  {
    title: "UI Elements",
    icon: PanelsTopLeft,
    path: "/admin-dashboard/ui-elements",
  },
  {
    title: "Team",
    icon: UserRound,
    path: "/admin-dashboard/team",
  },
  {
    title: "Table",
    icon: Table2,
    path: "/admin-dashboard/table",
  },
];

const AdminDashboardSidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(true);

  return (
    <div className="h-screen bg-[#F5F6FA] flex overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`fixed lg:relative top-0 left-0 z-50 h-screen bg-white border-r border-[#ECECEC] transition-all duration-300 flex flex-col ${
          openSidebar
            ? "w-[220px] h-screen translate-x-0"
            : "w-0 -translate-x-full h-screen lg:w-[100px] lg:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="h-[90px] border-b border-[#F1F1F1] flex items-center justify-between px-8">
          {openSidebar && (
            <h1 className="text-[24px] font-bold tracking-tight">
              <span className="text-[#4F7CF3]">Dash</span>
              <span className="text-[#232323]">Stack</span>
            </h1>
          )}
        </div>

        {/* Main Menu */}
        <div className="flex-1 overflow-y-auto">
          <div className="px-5 pt-8">
            <div className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.title}
                    to={item.path}
                    className={({ isActive }) =>
                      `h-[44px] rounded-2xl flex items-center gap-4 px-2 transition-all ${
                        isActive
                          ? "bg-[#4F7CF3] text-white shadow-lg"
                          : "text-[#555] hover:bg-[#F5F6FA]"
                      }`
                    }
                  >
                    <Icon className="w-5 h-5 min-w-[20px]" />

                    {openSidebar && (
                      <span className="text-[16px] font-medium">
                        {item.title}
                      </span>
                    )}
                  </NavLink>
                );
              })}
            </div>
          </div>

          {/* Pages */}
          <div className="mt-10 border-t border-[#F1F1F1] pt-1 px-5">
            {openSidebar && (
              <p className="text-[13px] font-semibold text-[#9B9B9B] tracking-wider mb-5 px-3">
                PAGES
              </p>
            )}

            <div className="space-y-1">
              {pageItems.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.title}
                    to={item.path}
                    className={({ isActive }) =>
                      `h-[44px] rounded-2xl flex items-center gap-4 px-2 transition-all ${
                        isActive
                          ? "bg-[#4F7CF3] text-white"
                          : "text-[#555] hover:bg-[#F5F6FA]"
                      }`
                    }
                  >
                    <Icon className="w-5 h-5 min-w-[20px]" />

                    {openSidebar && (
                      <span className="text-[16px] font-medium">
                        {item.title}
                      </span>
                    )}
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-[#F1F1F1] p-5 space-y-2">
          <NavLink
            to="/settings"
            className="h-[44px] rounded-2xl flex items-center gap-4 px-2 text-[#555] hover:bg-[#F5F6FA]"
          >
            <Settings className="w-5 h-5 min-w-[20px]" />

            {openSidebar && (
              <span className="text-[16px] font-medium">Settings</span>
            )}
          </NavLink>

          <button className="w-full h-[44px] rounded-2xl flex items-center gap-4 px-2 text-[#555] hover:bg-[#F5F6FA]">
            <LogOut className="w-5 h-5 min-w-[20px]" />

            {openSidebar && (
              <span className="text-[16px] font-medium">Logout</span>
            )}
          </button>
        </div>
      </aside>

      {/* Overlay */}
      {openSidebar && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setOpenSidebar(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminDashboardNavbar
          handleMenu={() => setOpenSidebar((prev) => !prev)}
        />

        <main className="flex-1 overflow-y-auto p-5 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboardSidebar;
