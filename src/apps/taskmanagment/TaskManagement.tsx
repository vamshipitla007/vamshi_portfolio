import DashboardScreen from "@/sections/taskmanagement/DashboardScreen";
import OnboardingScreen from "@/sections/taskmanagement/OnboardingScreen";
import ProfileScreen from "@/sections/taskmanagement/ProfileScreen";
import Signup from "@/sections/taskmanagement/Signup";
import WorkProfileScreen from "@/sections/taskmanagement/WorkProfileScreen";
import { Route, Routes } from "react-router-dom";

export default function TaskManagement() {
    return (
        <Routes>
             <Route path="/" element={<OnboardingScreen />} />
             <Route path="/Signup" element={<Signup />} />
             <Route path="/home" element={<DashboardScreen/>} />
             <Route path="/profile" element={<ProfileScreen/>} />
             <Route path="/workprofile" element={<WorkProfileScreen/>} />
        </Routes>
    );
}