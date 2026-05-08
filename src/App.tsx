import { Route, Routes } from "react-router-dom";
import "./App.css";
import Portfolio from "./apps/Portfolio";
import Restaurantapp from "./apps/restaurantapp/Restaurantapp";
import ChefRestaurantapp from "./apps/restaurantapp/ChefRestaurantapp";
import CoffeeApp from "./apps/CoffeeApp";
import AdminDashboard from "./apps/admin_dashboard/AdminDashboard";

function App() {
  return (
    <div className="bg-[#f1f1f1] text-white">
      <Routes>

        {/* Portfolio */}
        <Route path="/portfolio/*" element={<Portfolio />} />

        {/* Restaurant */}
        <Route path="/restaurant/*" element={<Restaurantapp />} />

        <Route path="/chefrestaurant/*" element={<ChefRestaurantapp />} />

        <Route path="/coffeeapp/*" element={<CoffeeApp />} />

        <Route path="/admin-dashboard/*" element={<AdminDashboard/>} />

      </Routes>
    </div>
  );
}

export default App;
