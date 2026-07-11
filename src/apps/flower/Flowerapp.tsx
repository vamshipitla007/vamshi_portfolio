import CalendarScreen from "@/sections/flower/FlowerCalendar";
import Contacts from "@/sections/flower/FlowerContacts";
import FlowerCustomers from "@/sections/flower/FlowerCustomers";
import FlowerDashboard from "@/sections/flower/FlowerDashboard";
import FlowerLayout from "@/sections/flower/FlowerLayout";
import FlowerLoginScreen from "@/sections/flower/FlowerLoginScreen";
import Notes from "@/sections/flower/FlowerNotes";
import FlowerOrders from "@/sections/flower/FlowerOrders";
import FlowerProducts from "@/sections/flower/FlowerProducts";
import FlowerRegisterScreen from "@/sections/flower/FlowerRegisterScreen";
import FlowerResetPasswordScreen from "@/sections/flower/FlowerResetPasswordScreen";
import { Route, Routes } from "react-router-dom";

const Flowerapp = () => {
  return (
    <Routes>
      <Route path="/register" element={<FlowerRegisterScreen />} />
      <Route path="/reset-password" element={<FlowerResetPasswordScreen />} />
      <Route path="/login" element={<FlowerLoginScreen />} />
      <Route element={<FlowerLayout />}>
        <Route path="/dashboard" element={<FlowerDashboard />} />
        <Route path="/ecommerce/products" element={<FlowerProducts />} />
        <Route path="/ecommerce/orders" element={<FlowerOrders />} />
        <Route path="/ecommerce/customers" element={<FlowerCustomers />} />
        <Route path="/calendar" element={<CalendarScreen />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};

export default Flowerapp;
