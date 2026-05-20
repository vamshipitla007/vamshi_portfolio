import EurolandingScreen from "@/sections/eurotracks/EurolandingScreen";
import { Route, Routes } from "react-router-dom";

export default function EuroTracksapp() {
  return (
    <Routes>
          <Route path='/' element={<EurolandingScreen />}/>
    </Routes>
  );
}