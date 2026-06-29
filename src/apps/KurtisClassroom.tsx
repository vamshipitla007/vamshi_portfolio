import KurtisHome from "@/sections/kurtis/KurtisHome";
import { Route, Routes } from "react-router-dom";

const KurtisClassroom = () => {
  return (
    <Routes>
       <Route path="/" element={<KurtisHome />} />
    </Routes>
  );
};

export default KurtisClassroom;
