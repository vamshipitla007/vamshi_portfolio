// DashboardLayout.tsx

import {
  CreditCard,
  Hammer,
  Home,
  Settings,
  User,
  Wallet,
  CircleDollarSign,
  X,
} from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import Logo from "@/assets/bankdash/logo.png";
import BankDashNavbar from "./BankDashNavbar";

const sidebarMenus = [
  {
    title: "Dashboard",
    icon: Home,
    path: "/bankdash/dashboard",
  },
  {
    title: "Transactions",
    icon: Wallet,
    path: "/bankdash/transactions",
  },
  {
    title: "Accounts",
    icon: User,
    path: "/bankdash/accounts",
  },
  {
    title: "Investments",
    icon: CircleDollarSign,
    path: "/bankdash/investments",
  },
  {
    title: "Credit Cards",
    icon: CreditCard,
    path: "/bankdash/cards",
  },
  {
    title: "Loans",
    icon: Wallet,
    path: "/bankdash/loans",
  },
  {
    title: "Services",
    icon: Hammer,
    path: "/bankdash/services",
  },
  {
    title: "My Privileges",
    icon: User,
    path: "/bankdash/privileges",
  },
  {
    title: "Setting",
    icon: Settings,
    path: "/bankdash/settings",
  },
];

const Sidebar = ({
  openSidebar,
  setOpenSidebar,
}: {
  openSidebar: boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      {/* Mobile Overlay */}
      <div
        onClick={() => setOpenSidebar(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-all duration-300 lg:hidden ${
          openSidebar ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      <aside
        className={`
          fixed top-0 left-0 z-50 h-screen bg-white border-r border-[#E6EFF5]
          transition-all duration-300 flex flex-col
        
          w-[250px]

          ${openSidebar ? "translate-x-0" : "-translate-x-full"}

          lg:translate-x-0
        `}
      >
        {/* Logo */}
        <div className="h-[92px] border-b border-[#E6EFF5] flex items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="logo" className="w-[40px] h-[40px]" />

            <h1 className="text-[28px] font-bold text-[#343C6A]">BankDash.</h1>
          </div>

          {/* Close Button Mobile */}
          <button onClick={() => setOpenSidebar(false)} className="lg:hidden">
            <X className="w-6 h-6 text-[#343C6A]" />
          </button>
        </div>

        {/* Menu */}
        <div className="flex-1 overflow-y-auto pt-6">
          <div className="space-y-1">
            {sidebarMenus.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.title}
                  to={item.path}
                  onClick={() => setOpenSidebar(false)}
                  className={({ isActive }) =>
                    `relative h-[58px] flex items-center gap-5 px-8 transition-all ${
                      isActive
                        ? "text-[#2D60FF] font-semibold"
                        : "text-[#B1B1B1] hover:text-[#2D60FF]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <div className="absolute left-0 w-[6px] h-[58px] bg-[#2D60FF] rounded-r-full" />
                      )}

                      <Icon className="w-6 h-6 min-w-[24px]" />

                      <span className="text-[17px]">{item.title}</span>
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
};

const BankDashSidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      {/* Sidebar */}
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />

      {/* Main Content */}
      <div className="lg:ml-[250px] min-h-screen flex flex-col">
        {/* FIXED NAVBAR */}
        <div className="fixed top-0 right-0 left-0 lg:left-[250px] z-40 bg-white">
          <BankDashNavbar
            openSidebar={openSidebar}
            setOpenSidebar={setOpenSidebar}
          />
        </div>

        <main className="flex-1 pt-[140px] mt-20 md:pt-[100px] p-4 md:p-5 lg:p-6 overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default BankDashSidebar;
