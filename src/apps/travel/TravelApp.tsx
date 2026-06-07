import TravelHome from "@/sections/travel/TravelHome";
import { Route, Routes } from "react-router-dom";


export default function TravelApp() {
  return (
    <Routes>
      <Route >
        <Route path="homepage" element={<TravelHome />} />
      </Route>
    </Routes>
  );
}