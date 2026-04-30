import { Routes, Route } from "react-router-dom";
import SignUp from "@/sections/auth/SignUp";

export default function Restaurantapp() {
	return (
		<Routes>
			<Route path="/" element={<SignUp />} />
		</Routes>
	);
}