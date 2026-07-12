import CalendarScreen from "@/sections/flower/FlowerCalendar";
import FlowerChatScreen from "@/sections/flower/FlowerChatScreen";
import Contacts from "@/sections/flower/FlowerContacts";
import FlowerCustomers from "@/sections/flower/FlowerCustomers";
import FlowerDashboard from "@/sections/flower/FlowerDashboard";
import DesignPlanBoard from "@/sections/flower/FlowerDesign";
import FileManagerScreen from "@/sections/flower/FlowerFileManager";
import FlowerLayout from "@/sections/flower/FlowerLayout";
import FlowerLoginScreen from "@/sections/flower/FlowerLoginScreen";
import MailScreen from "@/sections/flower/FlowerMailScreen";
import Notes from "@/sections/flower/FlowerNotes";
import FlowerOrders from "@/sections/flower/FlowerOrders";
import FlowerProducts from "@/sections/flower/FlowerProducts";
import FlowerProfile from "@/sections/flower/FlowerProfile";
import ProjectsApp from "@/sections/flower/FlowerProjects";
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
        <Route path="/files" element={<FileManagerScreen />} />
        <Route path="/mail" element={<MailScreen />} />
        <Route path="/chat" element={<FlowerChatScreen />} />
        <Route path="/projects" element={<ProjectsApp />} />
        <Route path="/profile" element={<FlowerProfile />} />
        <Route path="/task" element={<DesignPlanBoard />} />
      </Route>
    </Routes>
  );
};

export default Flowerapp;
