import Navbar from '@/sections/loujainPortfolio/Navbar';
import Hero from '@/sections/loujainPortfolio/Hero';
// import Brands from '@/sections/loujainPortfolio/Brands';
import Projects from '@/sections/loujainPortfolio/Projects';
import Skills from '@/sections/loujainPortfolio/Skills';
import Services from '@/sections/loujainPortfolio/Services';
import Testimonials from '@/sections/loujainPortfolio/Testimonials';
import CTA from '@/sections/loujainPortfolio/CTA';
import Contact from '@/sections/loujainPortfolio/Contact';
import Footer from '@/sections/loujainPortfolio/Footer';

const LoujainPortfolio = () => {
  return (
    <main className="bg-[#fdf7f1] text-slate-950">
      <Navbar />
      <Hero />
      {/* <Brands /> */}
      <Projects />
      <Skills />
      <Services />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
};

export default LoujainPortfolio;