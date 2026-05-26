import DxdyLayout from "@/components/layout/DxdyLayout";
import HomePage from "@/sections/dxdygrant/HomePage";
import { Route, Routes } from "react-router-dom";

export default function DydxGrantsapp() {
  return (
    <Routes>
      <Route path="/" element={<DxdyLayout />}>
        <Route path="/homepage" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
