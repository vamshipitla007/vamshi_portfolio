import "./App.css";
import Navbar from "./components/layout/Navbar";
import HomeSection from "./sections/about/HomeSection";
import ContactSection from "./sections/contact/ContactSection";
import ExampleProjectSection from "./sections/exampleproject/ExampleProjectSeaction";
import SkillSection from "./sections/skill/SkillSection";
import Work from "./sections/work/Work";

function App() {

  return (
    <div className="bg-[#0b001a] text-white">
      <Navbar />
      <HomeSection/>
      <Work/>
      <SkillSection/>
      <ExampleProjectSection/>
      <ContactSection/>
    </div>
  );
}

export default App;
