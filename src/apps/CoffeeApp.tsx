import CoffeeDetailsScreen from "@/sections/coffeeapp/CoffeeDetailsScreen";
import DeliveryScreen from "@/sections/coffeeapp/DeliveryScreen";
import HomeScreen from "@/sections/coffeeapp/HomeScreen";
import OnboardingScreen from "@/sections/coffeeapp/OnboardingScreen";
import OrderDetailsScreen from "@/sections/coffeeapp/OrderDetailsScreen";
import { Route, Routes } from "react-router-dom";


export default function CoffeeApp() {
    return (
        <Routes>
            <Route path="/" element={<OnboardingScreen />} />
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/coffee-details" element={<CoffeeDetailsScreen />} />
            <Route path="/order-details" element={<OrderDetailsScreen />} />
            <Route path="/delivery" element={<DeliveryScreen />} />
        </Routes>
    )
};