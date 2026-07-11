import React, { useState } from "react";
import {
  LayoutDashboard,
  CheckSquare,
  ShoppingCart,
  CalendarDays,
  Mail,
  MessageSquare,
  FolderKanban,
  Folder,
  StickyNote,
  Users,
  Search,
  X,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { NavLink } from "react-router-dom";

interface SidebarProps {
  openSidebar: boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

interface MenuItem {
  title: string;
  icon: React.ReactNode;
  path?: string;
  badge?: number;
  dot?: boolean;
  children?: {
    title: string;
    path: string;
  }[];
}

const menuItems: MenuItem[] = [
  {
    title: "Dashboard",
    icon: <LayoutDashboard size={20} />,
    path: "/flower/dashboard",
  },
  {
    title: "Task",
    icon: <CheckSquare size={20} />,
    path: "/flower/task",
  },
  {
    title: "E-Commerce",
    icon: <ShoppingCart size={20} />,
    children: [
      {
        title: "Products",
        path: "/flower/ecommerce/products",
      },
      {
        title: "Orders",
        path: "/flower/ecommerce/orders",
      },
      {
        title: "Customers",
        path: "/flower/ecommerce/customers",
      },
    ],
  },
  {
    title: "Calendar",
    icon: <CalendarDays size={20} />,
    path: "/flower/calendar",
  },
  {
    title: "Mail",
    icon: <Mail size={20} />,
    path: "/flower/mail",
    badge: 8,
  },
  {
    title: "Chat",
    icon: <MessageSquare size={20} />,
    path: "/flower/chat",
  },
  {
    title: "Projects",
    icon: <FolderKanban size={20} />,
    path: "/flower/projects",
  },
  {
    title: "File Manager",
    icon: <Folder size={20} />,
    path: "/flower/files",
  },
  {
    title: "Notes",
    icon: <StickyNote size={20} />,
    path: "/flower/notes",
    dot: true,
  },
  {
    title: "Contacts",
    icon: <Users size={20} />,
    path: "/flower/contacts",
  },
];

const Sidebar: React.FC<SidebarProps> = ({ openSidebar, setOpenSidebar }) => {
  const collapsed = window.innerWidth >= 1024 && !openSidebar;
  const [openMenu, setOpenMenu] = useState<string | null>("E-Commerce");

  return (
    <>
      {/* Mobile Overlay */}
      {openSidebar && (
        <div
          onClick={() => setOpenSidebar(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
        fixed
        top-0
        left-0
        z-50
        h-screen
        bg-white
        border-r
        border-[#EEF2F7]
        shadow-sm
        transition-all
        duration-300
        flex
        flex-col

        ${collapsed ? "lg:w-[80px]" : "w-[250px]"}

        ${openSidebar ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        {/* Logo */}
        <div className="h-[72px] border-b border-[#EEF2F7] flex items-center justify-between px-6">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="w-10 h-10 rounded-full bg-[#22C55E] flex items-center justify-center text-white font-bold text-lg">
              A
            </div>

            {!collapsed && (
              <div>
                <h2 className="text-[18px] font-medium text-[#111827] leading-none">
                  Flower
                </h2>
              </div>
            )}
          </div>

          {/* Mobile Close */}
          <button onClick={() => setOpenSidebar(false)} className="lg:hidden">
            <X size={22} color="#333" />
          </button>
        </div>

        {/* Search */}
        {!collapsed && (
          <div className="px-5 mt-2">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search..."
                className="
                  w-full
                  h-11
                  rounded-xl
                  bg-[#F7F8FC]
                  text-[#111827]
                  pl-10
                  pr-4
                  text-[14px]
                  outline-none
                  border
                  border-transparent
                  focus:border-[#22C55E]
                  transition
                "
              />
            </div>
          </div>
        )}

        {/* Collapse Button */}
        {/* <button
          onClick={() => {
            if (window.innerWidth >= 1024) {
              setOpenSidebar((prev) => !prev);
            }
          }}
          className="
          hidden
          lg:flex
          absolute
          -right-3
          top-24
          w-7
          h-7
          rounded-full
          bg-white
          border
          shadow
          items-center
          justify-center
        "
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button> */}

        {!collapsed && (
          <div className="mt-4 ml-8">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              MAIN MENU
            </p>
          </div>
        )}

        {/* Navigation starts here */}
        <nav className="flex-1 mt-2 overflow-y-auto px-3 space-y-1">
          {menuItems.map((item) => {
            const hasChildren = !!item.children?.length;
            const expanded = openMenu === item.title;

            if (hasChildren) {
              return (
                <div key={item.title}>
                  {/* Parent */}

                  <button
                    onClick={() => setOpenMenu(expanded ? null : item.title)}
                    className={`
                        group
                        relative
                        flex
                        items-center
                        rounded-xl
                        transition-all
                        duration-200
                        h-[40px]
                        w-full
                        ${collapsed ? "justify-center px-0" : "justify-between px-4"}
                        ${expanded ? "bg-[#B9EB8E]" : "hover:bg-[#B9EB8E]"}
                    `}
                  >
                    {expanded && (
                      <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-[#21943A]" />
                    )}

                    <div
                      className={`flex items-center ${collapsed ? "" : "gap-3"}`}
                    >
                      <span
                        className={`transition-colors ${
                          "text-[#1D2025] group-hover:text-[#1D2025]"
                        }`}
                      >
                        {item.icon}
                      </span>

                      {!collapsed && (
                        <span className="text-[15px] font-medium text-[#1D2025]">
                          {item.title}
                        </span>
                      )}
                    </div>

                    {!collapsed &&
                      (expanded ? (
                        <ChevronDown size={18} color="#1D2025" />
                      ) : (
                        <ChevronRight size={18} color="#1D2025" />
                      ))}

                    {collapsed && (
                      <div className="pointer-events-none absolute left-[88px] z-50 whitespace-nowrap rounded-lg bg-[#111827] px-3 py-2 text-sm text-white opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100">
                        {item.title}
                      </div>
                    )}
                  </button>

                  {/* Children */}

                  {expanded && !collapsed && (
                    <div className="mt-2 ml-8 space-y-1">
                      {item.children!.map((child) => (
                        <NavLink
                          key={child.title}
                          to={child.path}
                          className={({ isActive }) =>
                            `flex items-center gap-4 rounded-xl px-4 py-2 transition ${
                              isActive ? "bg-[#EAF8D9]" : "hover:bg-[#F5FAEE]"
                            }`
                          }
                        >
                          {({ isActive }) => (
                            <>
                              <span
                                className={`h-2.5 w-2.5 rounded-full ${
                                  isActive ? "bg-[#1D2025]" : "bg-[#9CA3AF]"
                                }`}
                              />

                              <span
                                className={`text-[15px] font-medium ${
                                  isActive ? "text-[#1D2025]" : "text-[#4B5563]"
                                }`}
                              >
                                {child.title}
                              </span>
                            </>
                          )}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            /* --------------------- Normal Menu --------------------- */

            return (
              <NavLink
                key={item.title}
                to={item.path ?? ""}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `
                    group
                    relative
                    flex
                    items-center
                    rounded-xl
                    transition-all
                    duration-200
                    h-[40px]
                    ${collapsed ? "justify-center px-0" : "justify-between px-4"}
                    ${isActive ? "bg-[#B9EB8E]" : "hover:bg-[#B9EB8E]"}
                `
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-[#21943A]" />
                    )}

                    <div
                      className={`flex items-center ${
                        collapsed ? "" : "gap-3"
                      }`}
                    >
                      <span
                        className={`transition-colors ${
                          isActive
                            ? "text-[#1D2025]"
                            : "text-[#1D2025] group-hover:text-[#1D2025]"
                        }`}
                      >
                        {item.icon}
                      </span>
                      {!collapsed && (
                        <span className="text-[15px] font-medium text-[#1D2025]">
                          {item.title}
                        </span>
                      )}
                    </div>

                    {!collapsed && (
                      <>
                        {item.badge && (
                          <span className="flex h-6 min-w-[24px] items-center justify-center rounded-full bg-[#EF4444] px-2 text-xs font-medium text-white">
                            {item.badge}
                          </span>
                        )}

                        {item.dot && (
                          <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]" />
                        )}
                      </>
                    )}

                    {collapsed && (
                      <div className="pointer-events-none absolute left-[88px] z-50 whitespace-nowrap rounded-lg bg-[#111827] px-3 py-2 text-sm text-white opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100">
                        {item.title}
                      </div>
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
