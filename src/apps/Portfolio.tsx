import { Routes, Route } from "react-router-dom";

import Navbar from "@/components/layout/Navbar";
import HomeSection from "@/sections/about/HomeSection";
import ContactSection from "@/sections/contact/ContactSection";
import ExampleProjectSection from "@/sections/exampleproject/ExampleProjectSeaction";
import SkillSection from "@/sections/skill/SkillSection";
import Work from "@/sections/work/Work";

export default function Portfolio() {
	return (
		<div className="bg-[#0b001a] text-white">
			<Navbar />

			<Routes>
				<Route
					path="/"
					element={
						<>
							<HomeSection />
							<Work />
							<SkillSection />
							<ExampleProjectSection />
							<ContactSection />
						</>
					}
				/>
			</Routes>
		</div>
	);
}