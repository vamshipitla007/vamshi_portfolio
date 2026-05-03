import { Routes, Route } from "react-router-dom";
import SignUp from "@/sections/auth/SignUp";
import Homepage from "./Homepage";
import RestaurantLayout from "@/components/layout/RestaurantLayout";
import MenuSection from "@/sections/restauranthomepage/MenuSection";

export default function Restaurantapp() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/homepage" element={<RestaurantLayout />}>
        {/* Pages */}
        <Route index element={<Homepage />} />
        <Route path="menu" element={<MenuSection title="Menu" />} />
        <Route path="about" element={<div>About Page</div>} />
        <Route path="order" element={<div>Order Page</div>} />
        <Route path="reservation" element={<div>Reservation Page</div>} />
        <Route path="contact" element={<div>Contact Page</div>} />
      </Route>
    </Routes>
  );
}
