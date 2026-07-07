import { motion } from 'framer-motion';
import cbiLogo from '@/assets/cbi.png';
import cursorLogo from '@/assets/cursor.png';
import heroLogo from '@/assets/hero.png';
import profileLogo from '@/assets/profile.png';
import project1Logo from '@/assets/project1.png';
import project2Logo from '@/assets/project2.png';
import work2Logo from '@/assets/work2.png';

const brands = [
  { alt: 'Verizon', src: cbiLogo },
  { alt: 'Lenovo', src: cursorLogo },
  { alt: 'Slack', src: heroLogo },
  { alt: 'YouTube', src: profileLogo },
  { alt: 'Amazon', src: project1Logo },
  { alt: 'Google', src: project2Logo },
  { alt: 'Microsoft', src: work2Logo },
];

const Brands = () => {
  return (
    <section className="border-t border-slate-200 bg-[#fbf6f0] py-12">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7"
        >
          {brands.map((brand) => (
            <div key={brand.alt} className="flex items-center justify-center rounded-3xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <img src={brand.src} alt={brand.alt} className="h-8 object-contain" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;
