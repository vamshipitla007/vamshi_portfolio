import DxdyLayout from "@/components/layout/DxdyLayout";
import ApplyGrant from "@/sections/dxdygrant/ApplyGrant";
import BlogProfile from "@/sections/dxdygrant/BlogProfile";
import BlogSection from "@/sections/dxdygrant/BlogSection";
import CategoryDetails from "@/sections/dxdygrant/CategoryDetails";
import DiscoverInitiatives from "@/sections/dxdygrant/DiscoverInitiatives";
import FAQSection from "@/sections/dxdygrant/FAQSection";
import FundedGrants from "@/sections/dxdygrant/FundedGrants";
import HomePage from "@/sections/dxdygrant/HomePage";
import ProgramExpenses from "@/sections/dxdygrant/ProgramExpenses";
import RoundDetails from "@/sections/dxdygrant/RoundDetails";
import { Route, Routes } from "react-router-dom";

export default function DydxGrantsapp() {
  return (
    <Routes>
      <Route path="/" element={<DxdyLayout />}>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/discover-initiatives" element={<DiscoverInitiatives />} />
        <Route path="/funded-grants" element={<FundedGrants />} />
        <Route path="/expenses" element={<ProgramExpenses />} />
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/faq" element={<FAQSection />} />
        <Route path="/apply" element={<ApplyGrant />} />
        <Route path="/category" element={<CategoryDetails />} />
        <Route path="/blogprofile" element={<BlogProfile />} />
        <Route path="/rounddetails" element={<RoundDetails />} />
      </Route>
    </Routes>
  );
}
