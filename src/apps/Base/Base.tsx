import BaseCalendar from "@/sections/Base/BaseCalendar";
import BaseCustomerList from "@/sections/Base/BaseCustomerList";
import BaseDashboard from "@/sections/Base/BaseDashboard";
import BaseInvoice from "@/sections/Base/BaseInvoice";
import BaseLogin from "@/sections/Base/BaseLogin";
import BaseMessage from "@/sections/Base/BaseMessage";
import ScheduleList from "@/sections/Base/BaseScheduleList";
import BaseSidebar from "@/sections/Base/BaseSidebar";
import BaseSignup from "@/sections/Base/BaseSignup";
import BaseTaskPreview from "@/sections/Base/BaseTaskPreview";
import CreateInvoice from "@/sections/Base/CreateInvoice";
import { Routes, Route } from "react-router-dom";

export default function Base() {
  return (
    <Routes>
      <Route path="/Login/*" element={<BaseLogin />} />
      <Route path="/Signup/*" element={<BaseSignup />} />
      <Route element={<BaseSidebar />}>
        <Route path="/dashboard" element={<BaseDashboard />} />
        <Route path="/analytics" element={<BaseCustomerList />} />
        <Route path="/invoice" element={<BaseInvoice />} />
        <Route path="/schedule" element={<ScheduleList />} />
        <Route path="/calendar" element={<BaseCalendar />} />
        <Route path="/messages" element={<BaseMessage />} />
        <Route path="/create-invoice" element={<CreateInvoice />} />
        <Route path="/notification" element={<div className="p-5">Notification Page</div>} />
        <Route path="/settings" element={<BaseTaskPreview />} />
      </Route>
    </Routes>
  );
}
