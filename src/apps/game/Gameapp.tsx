import CTA from "@/sections/game/CTA";
import Footer from "@/sections/game/Footer";
import Hero from "@/sections/game/Hero";
import MatchSchedule from "@/sections/game/MatchSchedule";
import Navbar from "@/sections/game/Navbar";
import Players from "@/sections/game/Players";
import Sponsors from "@/sections/game/Sponsors";
import Statistics from "@/sections/game/Statistics";
import Tournaments from "@/sections/game/Tournaments";


export default function Gameapp(){
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050816] via-[#07102a] to-[#060615] text-white">
      <Navbar />
      <main className="relative overflow-hidden">
        <Hero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
          <Tournaments />
          <Players />
          <MatchSchedule />
          <Statistics />
          <Sponsors />
          <CTA />
        </div>
      </main>
      <Footer />
    </div>
  )
}