import ChefRestaurantLayout from "@/components/layout/ChefRestaurantLayout";
import Dashboard from "@/sections/chefrestaurant/Dashboard";
import { Route, Routes } from "react-router-dom";

export default function ChefRestaurantapp() {
  return (
    <Routes>
      <Route path="/" element={<ChefRestaurantLayout />}>
        <Route path="dashboard" element={<Dashboard/>} />
      </Route>
    </Routes>
  );
}
