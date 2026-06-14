import { SPONSORS } from "@/data/gamingData";

export default function Sponsors() {
  return (
    <section id="sponsors" className="mt-12">
      <h2 className="text-3xl font-semibold mb-6">Sponsors & Partners</h2>
      <div className="w-full overflow-hidden">
        <div className="flex gap-8 animate-marquee">
          {SPONSORS.concat(SPONSORS).map((s, idx) => (
            <div
              key={s.id + idx}
              className="w-44 h-24 flex items-center justify-center"
            >
              <img
                src={s.logo}
                alt={s.name}
                className="
                h-8 
                object-contain 
                brightness-0 
                invert 
                opacity-50
                hover:opacity-100
                hover:drop-shadow-[0_0_12px_#7C3AED]
                hover:scale-110
                transition-all 
                duration-500
              "
              />
            </div>
          ))}
        </div>
      </div>
      <style>{`@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}} .animate-marquee{display:flex;animation:marquee 20s linear infinite;}`}</style>
    </section>
  );
}
