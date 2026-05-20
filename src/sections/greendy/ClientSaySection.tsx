import { Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna, tempor in penatibus ullamcorper. In quis purus pharetra scelerisque sed id eleifend erat. Integer imperdiet nullam eget lectus. Fames urna, ut lacus, et eu nunc integer consequat.",
    name: "Client name",
    role: "Post",
    active: false,
  },
  {
    id: 2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna, tempor in penatibus ullamcorper. In quis purus pharetra scelerisque sed id eleifend erat. Integer imperdiet nullam eget lectus. Fames urna, ut lacus, et eu nunc integer consequat.",
    name: "Client name",
    role: "Post",
    active: true,
  },
  {
    id: 3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna, tempor in penatibus ullamcorper. In quis purus pharetra scelerisque sed id eleifend erat. Integer imperdiet nullam eget lectus. Fames urna, ut lacus, et eu nunc integer consequat.",
    name: "Client name",
    role: "Post",
    active: false,
  },
];

export default function ClientSaySection() {
  const [email, setEmail] = useState("");

  return (
    <section
      className="
        w-full
        bg-white
        dark:bg-[#081120]
        transition-colors
        duration-300
        overflow-hidden
      "
    >
      <div
        className="
          max-w-[1280px]
          mx-auto
          px-5
          sm:px-8
          lg:px-10
          py-14
          lg:py-20
        "
      >
        
        {/* TESTIMONIALS */}
        <div>
          
          {/* Header */}
          <div className="text-center">
            
            <h2
              className="
                text-[34px]
                sm:text-[46px]
                lg:text-[56px]
                font-bold
                tracking-[-1px]
                leading-[115%]
                text-[#0F172A]
                dark:text-white
                transition-colors
              "
            >
              What our client say
            </h2>

            <p
              className="
                mt-4
                text-[13px]
                sm:text-[14px]
                leading-7
                text-[#6B7280]
                dark:text-[#94A3B8]
                max-w-[620px]
                mx-auto
                transition-colors
              "
            >
              We are flexible and cope with
              multiple tasks to make you a
              leader in the market.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div
            className="
              mt-12
              grid
              grid-cols-1
              lg:grid-cols-3
              gap-7
            "
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                className={`
                  relative
                  rounded-[14px]
                  p-7
                  transition-all
                  duration-300
                  ${
                    item.active
                      ? `
                        bg-white
                        dark:bg-[#0E1A2D]
                        shadow-[0_0_0_1px_rgba(16,185,129,0.08),0_12px_30px_rgba(16,185,129,0.08)]
                      `
                      : `
                        opacity-40
                        hidden
                        lg:block
                      `
                  }
                `}
              >
                
                {/* Quote */}
                <Quote
                  size={54}
                  className="
                    absolute
                    top-5
                    left-5
                    text-[#E5E7EB]
                    dark:text-[#FFFFFF14]
                    rotate-180
                  "
                  strokeWidth={1.5}
                />

                {/* Content */}
                <div className="relative z-10">
                  
                  {/* Description */}
                  <p
                    className="
                      text-[15px]
                      sm:text-[16px]
                      leading-[220%]
                      italic
                      font-medium
                      tracking-[0.1px]
                      text-[#111827]
                      dark:text-[#F8FAFC]
                      transition-colors
                    "
                    style={{
                      fontFamily:
                        "'Inter', sans-serif",
                    }}
                  >
                    {item.description}
                  </p>

                  {/* User */}
                  <div className="mt-8 flex items-center gap-4">
                    
                    {/* Avatar */}
                    <div
                      className="
                        w-11
                        h-11
                        rounded-full
                        bg-[#0F172A]
                        dark:bg-white
                        shrink-0
                      "
                    />

                    {/* Info */}
                    <div>
                      <h4
                        className="
                          text-[13px]
                          font-semibold
                          text-[#0F172A]
                          dark:text-white
                          transition-colors
                        "
                      >
                        {item.name}
                      </h4>

                      <p
                        className="
                          mt-1
                          text-[11px]
                          text-[#6B7280]
                          dark:text-[#94A3B8]
                          transition-colors
                        "
                      >
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* STAY UPDATE */}
        <div className="mt-20 lg:mt-24">
          
          {/* Header */}
          <div className="text-center">
            
            <h2
              className="
                text-[34px]
                sm:text-[46px]
                lg:text-[56px]
                font-bold
                tracking-[-1px]
                leading-[115%]
                text-[#0F172A]
                dark:text-white
                transition-colors
              "
            >
              Stay update
            </h2>

            <p
              className="
                mt-4
                text-[13px]
                sm:text-[14px]
                leading-7
                text-[#6B7280]
                dark:text-[#94A3B8]
                max-w-[620px]
                mx-auto
                transition-colors
              "
            >
              Subscribe to our newsletter to
              receive ou best daily , week and
              month offer.
            </p>
          </div>

          {/* Subscribe Box */}
          <div
            className="
              mt-10
              max-w-[760px]
              mx-auto
              rounded-[12px]
              bg-white
              dark:bg-[#0E1A2D]
              shadow-[0_0_0_1px_rgba(16,185,129,0.08),0_12px_30px_rgba(16,185,129,0.08)]
              p-4
            "
          >
            
            <div
              className="
                flex
                flex-col
                sm:flex-row
                gap-4
              "
            >
              
              {/* Input */}
              <input
                type="email"
                placeholder="email adress"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="
                  flex-1
                  h-[56px]
                  rounded-[8px]
                  bg-[#F8FAFC]
                  dark:bg-[#081120]
                  px-5
                  text-[14px]
                  text-[#0F172A]
                  dark:text-white
                  placeholder:text-[#9CA3AF]
                  outline-none
                  transition-colors
                "
              />

              {/* Button */}
              <button
                className="
                  h-[56px]
                  px-8
                  rounded-[8px]
                  bg-[#10B981]
                  hover:bg-[#059669]
                  transition-all
                  duration-300
                  text-white
                  text-[14px]
                  font-semibold
                  shrink-0
                "
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}