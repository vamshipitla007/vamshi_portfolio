import { Route, Routes } from "react-router-dom";
import "./App.css";
import Portfolio from "./apps/Portfolio";
import Restaurantapp from "./apps/restaurantapp/Restaurantapp";

function App() {
  return (
    <div className="bg-[#f1f1f1] text-white">
      <Routes>
        {/* Default */}
        <Route path="/" element={<Restaurantapp />} />

        {/* Portfolio App */}
        <Route path="/portfolio/*" element={<Portfolio />} />

        {/* Restaurant App */}
        <Route path="/restaurant/*" element={<Restaurantapp />} />
      </Routes>
    </div>
  );
}

export default App;
