import AdminDashboardSidebar from "@/sections/admindashboard/AdminDashboardSidebar";
import DashStackDashboard from "@/sections/admindashboard/DashStackDashboard";
import DashStackFavorite from "@/sections/admindashboard/DashStackFavorite";
import DashStackProducts from "@/sections/admindashboard/DashStackProducts";
import { Route, Routes } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <Routes>
      <Route element={<AdminDashboardSidebar />}>
        <Route path="/dashboard" element={<DashStackDashboard />} />
        <Route path="/products" element={<DashStackProducts />} />
        <Route path="/favorites" element={<DashStackFavorite />} />
        <Route path="/inbox" element={<div>inbox</div>} />
        <Route path="/orders" element={<div>orders</div>} />
      </Route>
    </Routes>
  );
}
