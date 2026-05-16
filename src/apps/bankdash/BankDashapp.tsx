import BankDashAccount from "@/sections/bankdash/BankDashAccount";
import BankDashCreditCard from "@/sections/bankdash/BankDashCreditCard";
import BankDashDashboard from "@/sections/bankdash/BankDashDashboard";
import BankDashInvestment from "@/sections/bankdash/BankDashInvestment";
import BankDashLoans from "@/sections/bankdash/BankDashLoans";
import BankDashServices from "@/sections/bankdash/BankDashServices";
import BankDashSettings from "@/sections/bankdash/BankDashSettings";
import BankDashSidebar from "@/sections/bankdash/BankDashSidebar";
import BankDashTransaction from "@/sections/bankdash/BankDashTransaction";
import { Route, Routes } from "react-router-dom";

export default function BankDashapp() {
  return (
    <Routes>
      <Route element={<BankDashSidebar />}>
        <Route path="/dashboard" element={<BankDashDashboard />} />
        <Route path="/transactions" element={<BankDashTransaction />} />
        <Route path="/accounts" element={<BankDashAccount />} />
        <Route path="/investments" element={<BankDashInvestment />} />
        <Route path="/cards" element={<BankDashCreditCard />} />
        <Route path="/loans" element={<BankDashLoans />} />
        <Route path="/services" element={<BankDashServices />} />
        <Route path="/privileges" element={<div className="p-5">My Privileges Page</div>} />
        <Route path="/settings" element={<BankDashSettings />} />
      </Route>
    </Routes>
  );
}
