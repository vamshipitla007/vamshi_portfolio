
import BaseLogin from "@/sections/Base/BaseLogin";
import BaseSignup from "@/sections/Base/BaseSignup";
import { Routes, Route } from "react-router-dom";

export default function Base() {
  return (
   <Routes>
            <Route path="/Login/*" element={<BaseLogin />} />
<Route path="/Signup/*" element={<BaseSignup />} />
      {/* <Route element={<BaseSidebar />}>
        <Route path="/dashboard" element={<BankDashDashboard />} />
        <Route path="/transactions" element={<BankDashTransaction />} />
        <Route path="/accounts" element={<BankDashAccount />} />
        <Route path="/investments" element={<BankDashInvestment />} />
        <Route path="/cards" element={<BankDashCreditCard />} />
        <Route path="/loans" element={<BankDashLoans />} />
        <Route path="/services" element={<BankDashServices />} />
        <Route path="/privileges" element={<div className="p-5">My Privileges Page</div>} />
        <Route path="/settings" element={<BankDashSettings />} />
      </Route> */}
    </Routes>
  );
}
