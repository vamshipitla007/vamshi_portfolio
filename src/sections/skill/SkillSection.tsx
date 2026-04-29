import SkillImage from "../../assets/skill.png";

export default function SkillSection() {
  return (
    <section id="skills" className="relative min-h-screen w-full bg-[#0b001a]">
      <div className="max-w-7xl mx-auto px-30 items-center mt-10">
         <img src={SkillImage} alt="" className="w-895 h-240 object-contain" />
      </div>
    </section>
  )
}

