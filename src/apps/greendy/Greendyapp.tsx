import { Route, Routes } from "react-router-dom";
import GreendyLayout from "@/components/layout/GreendyLayout";
import GreendyHomepage from "@/sections/greendy/GreendyHomepage";

export default function GreendyApp() {
  return (
    <Routes>
      <Route path="/" element={<GreendyLayout />}>
        <Route path="homepage" element={<GreendyHomepage />} />
      </Route>
    </Routes>
  );
}
