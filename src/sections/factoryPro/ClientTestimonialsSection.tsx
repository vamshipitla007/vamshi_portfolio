import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Brooklyn Simmons",
    role: "Homeowner",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
    testimonial:
      "The team's attention to detail and commitment to quality exceeded our expectations. They delivered on time, and their innovative solutions improved our production efficiency significantly.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Operations Manager",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
    testimonial:
      "Excellent service from planning to execution. Their manufacturing expertise helped us reduce costs while increasing output.",
  },
  {
    id: 3,
    name: "Michael Carter",
    role: "Plant Director",
    image:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=200",
    testimonial:
      "Highly professional team with strong technical knowledge. We continue to partner with them on multiple projects.",
  },
];

const logos = [
  "⚡ Logoipsum",
  "🌊 Logoipsum",
  "☀️ Logoipsum",
  "🛡️ Logoipsum",
  "✳️ Logoipsum",
];

export default function ClientTestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) =>
        (prev - 1 + testimonials.length) %
        testimonials.length,
    );
  };

  const testimonial = testimonials[current];

  return (
    <section className="bg-[#FAFAFA] py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}

          <div>
            <img
              src="https://images.pexels.com/photos/8297478/pexels-photo-8297478.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt=""
              className="
                w-full
                rounded-[32px]
                object-cover
                shadow-lg
              "
            />
          </div>

          {/* Content */}

          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />

              <span className="uppercase tracking-[3px] text-[12px] text-[#666]">
                Our Client Say
              </span>
            </div>

            <h2 className="text-[36px] md:text-[52px] leading-tight font-light text-[#222]">
              What our satisfied clients
              <br />
              <span className="font-bold">
                are saying
              </span>
            </h2>

            <p className="mt-10 text-[#777] text-[16px] leading-8">
              "{testimonial.testimonial}"
            </p>

            <div className="flex items-center justify-between mt-10">
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt=""
                  className="
                    w-14
                    h-14
                    rounded-full
                    object-cover
                  "
                />

                <div>
                  <h4 className="font-semibold text-[#222]">
                    {testimonial.name}
                  </h4>

                  <p className="text-sm text-[#777]">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={prevSlide}
                  className="
                    w-12
                    h-12
                    rounded-lg
                    bg-[#F59E0B]
                    text-white
                    flex
                    items-center
                    justify-center
                  "
                >
                  <ArrowLeft size={18} />
                </button>

                <button
                  onClick={nextSlide}
                  className="
                    w-12
                    h-12
                    rounded-lg
                    bg-[#F59E0B]
                    text-white
                    flex
                    items-center
                    justify-center
                  "
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Logos */}

        <div
          className="
            mt-20
            border-t
            border-gray-200
            pt-12
            grid
            grid-cols-2
            md:grid-cols-5
            gap-8
            text-center
          "
        >
          {logos.map((logo) => (
            <div
              key={logo}
              className="
                text-[#222]
                font-semibold
                text-lg
              "
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}