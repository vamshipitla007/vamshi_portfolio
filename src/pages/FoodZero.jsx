import { Route, Routes } from "react-router-dom";
import GreendyLayout from "@/components/layout/GreendyLayout";
import GreendyHomepage from "@/sections/greendy/GreendyHomepage";
import FoodZeroLayout from "../components/layout/FoodZeroLayout";
import FoodZeroHomepage from "../sections/foodzero/FoodzeroHomepage";
import MenuPage from "../sections/foodzero/MenuPage";
import ContactPage from "../sections/foodzero/ContactPage";
import AboutPage from "../sections/foodzero/AboutPage";
import PortfolioPage from "../sections/foodzero/PortfolioPage";
import BlogsPage from "../sections/foodzero/BlogsPage";
import PostPage from "../sections/foodzero/PostPage";

export default function FoodZero() {
  return (
    <Routes>
      <Route path="/" element={<FoodZeroLayout />}>
        <Route path="homepage" element={<FoodZeroHomepage />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="blogs" element={<BlogsPage />} />
        <Route path="post" element={<PostPage />} />
      </Route>
    </Routes>
  );
}