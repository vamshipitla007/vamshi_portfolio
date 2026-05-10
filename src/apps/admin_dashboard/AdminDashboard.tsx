import AdminDashboardSidebar from "@/sections/admindashboard/AdminDashboardSidebar";
import CalendarDashboard from "@/sections/admindashboard/CalendarScreen";
import ContactScreen from "@/sections/admindashboard/ContactScreen";
import DashStackDashboard from "@/sections/admindashboard/DashStackDashboard";
import DashStackEmails from "@/sections/admindashboard/DashStackEmails";
import DashStackFavorite from "@/sections/admindashboard/DashStackFavorite";
import DashStackProducts from "@/sections/admindashboard/DashStackProducts";
import InvoiceScreen from "@/sections/admindashboard/InvoiceScreen";
import OrderListScreen from "@/sections/admindashboard/OrderList";
import PricingScreen from "@/sections/admindashboard/PricingScreen";
import ProductStockScreen from "@/sections/admindashboard/ProductStock";
import TableUIScreen from "@/sections/admindashboard/TableScreen";
import TeamScreen from "@/sections/admindashboard/TeamScreen";
import TodoListScreen from "@/sections/admindashboard/TodoListScreen";
import UIElementsScreen from "@/sections/admindashboard/UIElementsScreen";
import { Route, Routes } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <Routes>
      <Route element={<AdminDashboardSidebar />}>
        <Route path="/dashboard" element={<DashStackDashboard />} />
        <Route path="/products" element={<DashStackProducts />} />
        <Route path="/favorites" element={<DashStackFavorite />} />
        <Route path="/inbox" element={<DashStackEmails />} />
        <Route path="/orders" element={<OrderListScreen />} />
        <Route path="/product-stock" element={<ProductStockScreen />} />
        <Route path="/pricing" element={<PricingScreen />} />
        <Route path="/todo" element={<TodoListScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/invoice" element={<InvoiceScreen />} />
        <Route path="/team" element={<TeamScreen />} />
        <Route path="/table" element={<TableUIScreen />} />
        <Route path="/ui-elements" element={<UIElementsScreen />} />
        <Route path="/calendar" element={<CalendarDashboard />} />
      </Route>
    </Routes>
  );
}
