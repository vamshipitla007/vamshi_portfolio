import BelaleaAbout from "@/sections/belalea/BelaleaAbout";
import BelaleaBlog from "@/sections/belalea/BelaleaBlog";
import BelaleaBlogDetails from "@/sections/belalea/BelaleaBlogDetails";
import Belaleacatalog from "@/sections/belalea/Belaleacatalog";
import Belaleacatalogdetails from "@/sections/belalea/Belaleacatalogdetails";
import Belaleadealers from "@/sections/belalea/Belaleadealers";
import BelaleaHome from "@/sections/belalea/BelaleaHome";
import Belalealayout from "@/sections/belalea/Belalealayout";
import { Route, Routes } from "react-router-dom";

const Belaleaapp = () => {
  return (
    <Routes>
      <Route path="/" element={<Belalealayout />}>
        <Route path="homepage" element={<BelaleaHome />} />
        <Route path="/about" element={<BelaleaAbout />} />
        <Route path="/catalog" element={<Belaleacatalog />} />
        <Route path="/news" element={<BelaleaBlog />} />
        <Route path="/blog/:id" element={<BelaleaBlogDetails />} />
        <Route path="/catalog/:id" element={<Belaleacatalogdetails />} />
        <Route path="/dealers" element={<Belaleadealers />} />
      </Route>
    </Routes>
  );
};

export default Belaleaapp;
