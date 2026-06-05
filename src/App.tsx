import { Route, Routes } from "react-router-dom";
import "./App.css";
import Portfolio from "./apps/Portfolio";
import Restaurantapp from "./apps/restaurantapp/Restaurantapp";
import ChefRestaurantapp from "./apps/restaurantapp/ChefRestaurantapp";
import CoffeeApp from "./apps/CoffeeApp";
import AdminDashboard from "./apps/admin_dashboard/AdminDashboard";
import LoginScreen from "./sections/admindashboard/LoginScreen";
import TasteNestapp from "./apps/tastenest/TasteNestapp";
import BankDashapp from "./apps/bankdash/BankDashapp";
import TaskManagement from "./apps/taskmanagment/TaskManagement";
import EuroTracksapp from "./apps/euro_tracks/EuroTracksapp";
import GreendyApp from "./apps/greendy/Greendyapp";
import FoodDeliveryApp from "./apps/FoodDeliveryApp";
import DydxGrantsapp from "./apps/dydx_grants/DydxGrantsapp";
import CMChatapp from "./apps/CMChat/CMChatapp";
import CreatorsApp from "./pages/CreatorsApp.jsx";
import FoodZero from "./pages/FoodZero.jsx";

function App() {
  return (
    <div className="bg-[#f1f1f1] text-white">
      <Routes>

        {/* Food Delivery App */}
        <Route path="/food-delivery/*" element={<FoodDeliveryApp />} />

        {/* Portfolio */}
        <Route path="/portfolio/*" element={<Portfolio />} />

        {/* Restaurant */}
        <Route path="/restaurant/*" element={<Restaurantapp />} />

        <Route path="/chefrestaurant/*" element={<ChefRestaurantapp />} />

        <Route path="/coffeeapp/*" element={<CoffeeApp />} />

        <Route path="/admin-dashboard/*" element={<AdminDashboard/>} />
        <Route path="/admin-dashboard/signin" element={<LoginScreen />} />
        <Route path="/tastenest/*" element={<TasteNestapp />} />
        <Route path="/bankdash/*" element={<BankDashapp />} />
        <Route path="/taskmanagement/*" element={<TaskManagement />} />
        <Route path="/eurotracks/*" element={<EuroTracksapp />} />
        <Route path="/greendy/*" element={<GreendyApp />} />
        <Route path="/dydx/*" element={<DydxGrantsapp />} />
        <Route path="/chat/*" element={<CMChatapp />} />
        <Route path="/creators" element={<CreatorsApp />} />
        <Route path="/foodzero/*" element={<FoodZero />} />
      </Routes>
    </div>
  );
}

export default App;
