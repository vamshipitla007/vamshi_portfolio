import { useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  Utensils,
  Coffee,
  Landmark,
  Briefcase,
  Globe2,
  MessageSquare,
  Gamepad2,
  Plane,
  Factory,
  Home,
  GraduationCap,
  Flower2,
  User,
  Palette,
  LayoutDashboard,
  ChefHat,
  Leaf,
  Trophy,
  Wallet,
} from "lucide-react";

const apps = [
  {
    title: "Food Delivery",
    route: "/food-delivery",
    icon: Utensils,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Portfolio",
    route: "/portfolio",
    icon: User,
    color: "from-violet-500 to-indigo-500",
  },
  {
    title: "Restaurant",
    route: "/restaurant",
    icon: ChefHat,
    color: "from-red-500 to-pink-500",
  },
  {
    title: "Chef Restaurant",
    route: "/chefrestaurant/dashboard",
    icon: ChefHat,
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "Coffee App",
    route: "/coffeeapp",
    icon: Coffee,
    color: "from-amber-700 to-yellow-600",
  },
  {
    title: "Base",
    route: "/Base/login",
    icon: LayoutDashboard,
    color: "from-slate-600 to-slate-800",
  },
  {
    title: "Admin Dashboard",
    route: "/admin-dashboard/signin",
    icon: Briefcase,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Taste Nest",
    route: "/tastenest/homepage",
    icon: Utensils,
    color: "from-rose-500 to-red-500",
  },
  {
    title: "Bank Dashboard",
    route: "/bankdash/dashboard",
    icon: Landmark,
    color: "from-emerald-500 to-green-700",
  },
  {
    title: "Task Management",
    route: "/taskmanagement",
    icon: LayoutDashboard,
    color: "from-indigo-500 to-purple-600",
  },
  {
    title: "Euro Tracks",
    route: "/eurotracks",
    icon: Globe2,
    color: "from-blue-500 to-sky-500",
  },
  {
    title: "Greendy",
    route: "/greendy/homepage",
    icon: Leaf,
    color: "from-green-500 to-lime-600",
  },
  {
    title: "DYDX Grants",
    route: "/dydx/homepage",
    icon: Wallet,
    color: "from-slate-700 to-black",
  },
  {
    title: "Chat App",
    route: "/chat/chat",
    icon: MessageSquare,
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Creators",
    route: "/creators",
    icon: Palette,
    color: "from-pink-500 to-fuchsia-600",
  },
  {
    title: "Food Zero",
    route: "/foodzero",
    icon: Utensils,
    color: "from-orange-400 to-yellow-500",
  },
  {
    title: "Travel",
    route: "/travel/homepage",
    icon: Plane,
    color: "from-sky-500 to-cyan-500",
  },
  {
    title: "Factory Pro",
    route: "/factorypro/home",
    icon: Factory,
    color: "from-gray-700 to-slate-900",
  },
  {
    title: "PUBG",
    route: "/pubg",
    icon: Trophy,
    color: "from-yellow-500 to-orange-600",
  },
  {
    title: "Esports",
    route: "/esports",
    icon: Gamepad2,
    color: "from-purple-600 to-pink-600",
  },
  {
    title: "Cat Energy",
    route: "/catenergy/home",
    icon: ShoppingCart,
    color: "from-lime-500 to-green-600",
  },
  {
    title: "Real Estate",
    route: "/realestate",
    icon: Home,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Kurtis Classroom",
    route: "/kurtisclassroom",
    icon: GraduationCap,
    color: "from-indigo-600 to-blue-700",
  },
  {
    title: "Belalea",
    route: "/belalea/homepage",
    icon: ShoppingCart,
    color: "from-pink-500 to-rose-600",
  },
  {
    title: "Loujain Portfolio",
    route: "/loujainportfolio",
    icon: User,
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "Flower",
    route: "/flower/login",
    icon: Flower2,
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "E-Commerce",
    route: "/ecommerce",
    icon: ShoppingCart,
    color: "from-indigo-500 to-blue-700",
  },
  {
    title: "Chat Application",
    route: "/chat-application",
    icon: MessageSquare,
    color: "from-blue-500 to-indigo-600",
  }
];

const AppsDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <h1 className="text-4xl font-bold text-slate-800">
          My Applications
        </h1>

        <p className="mt-2 text-slate-500">
          Select an application to open.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {apps.map((app) => {
            const Icon = app.icon;

            return (
              <button
                key={app.route}
                onClick={() => navigate(app.route)}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div
                  className={`h-32 bg-gradient-to-r ${app.color} flex items-center justify-center`}
                >
                  <Icon
                    size={42}
                    className="text-white transition group-hover:scale-110"
                  />
                </div>

                <div className="p-5">
                  <h2 className="text-lg font-semibold text-slate-800">
                    {app.title}
                  </h2>

                  <p className="mt-2 text-sm text-slate-500">
                    {app.route}
                  </p>

                  <div className="mt-5 rounded-lg bg-slate-100 py-2 text-center text-sm font-medium text-slate-700 transition group-hover:bg-slate-800 group-hover:text-white">
                    Open Application
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AppsDashboard;