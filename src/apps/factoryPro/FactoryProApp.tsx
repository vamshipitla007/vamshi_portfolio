import FactoryProLayout from "@/components/layout/FactoryProLayout";
import About from "@/sections/factoryPro/AboutPage";
import BlogPage from "@/sections/factoryPro/BlogPage";
import ContactPage from "@/sections/factoryPro/ContactPage";
import Customer from "@/sections/factoryPro/Customer";
import FactoryProHomepage from "@/sections/factoryPro/FactoryProHomepage";
import ProjectPage from "@/sections/factoryPro/ProjectPage";
import { Route, Routes } from "react-router-dom";


export default function FactoryProApp() {
  return (
    <Routes>
      <Route   element={<FactoryProLayout />}>
        <Route path="/home" element={<FactoryProHomepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Customer/>} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/projects" element={<ProjectPage  />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}