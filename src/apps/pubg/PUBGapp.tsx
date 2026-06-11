import FAQ from '@/sections/pubg/FAQ';
import FeaturesSection from '@/sections/pubg/FeaturesSection';
import Footer from '@/sections/pubg/Footer';
import Pricing from '@/sections/pubg/Pricing';
import PubgHero from '@/sections/pubg/PubgHero';
import PubgNavBar from '@/sections/pubg/PubgNavBar';
import Testimonials from '@/sections/pubg/Testimonials';

function PUBGapp() {
   return (
    <main className="overflow-hidden bg-[#F2F4F8]">
      <PubgNavBar />
      <PubgHero />
      <FeaturesSection />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer/>
    </main>
  );
}

export default PUBGapp