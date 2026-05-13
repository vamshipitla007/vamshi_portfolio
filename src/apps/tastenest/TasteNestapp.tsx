import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import TasteNestLayout from "@/components/layout/TasteNestLayout";

export default function TasteNestapp() {
  return (
    <Routes>
      <Route path="/" element={<TasteNestLayout />}>
        <Route path="homepage" element={<Homepage/>} />
      </Route>
    </Routes>
  )
}