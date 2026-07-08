import { motion } from 'framer-motion';

const brands = [
  {
    alt: "Verizon",
    src: "https://cdn.simpleicons.org/verizon/CD040B",
  },
  {
    alt: "Lenovo",
    src: "https://cdn.simpleicons.org/lenovo/E2231A",
  },
  {
    alt: "Slack",
    src: "https://cdn.simpleicons.org/slack/4A154B",
  },
  {
    alt: "YouTube",
    src: "https://cdn.simpleicons.org/youtube/FF0000",
  },
  {
    alt: "Amazon",
    src: "https://cdn.simpleicons.org/amazon/232F3E",
  },
  {
    alt: "Google",
    src: "https://cdn.simpleicons.org/google/4285F4",
  },
  {
    alt: "Microsoft",
    src: "https://cdn.simpleicons.org/microsoft/5E5E5E",
  },
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
            <div
              key={brand.alt}
              className="flex h-24 items-center justify-center rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={brand.src}
                alt={brand.alt}
                className="h-10 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;
