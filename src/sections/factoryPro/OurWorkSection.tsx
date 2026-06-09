import { useState } from "react";

const categories = [
  "All",
  "Automation",
  "Development",
  "Infrastructure",
  "Manufacturing",
  "Sustainability",
];

const projects = [
  {
    category: "Development",
    title: "Total Quality Management Implementation",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Automation",
    title: "Advanced Research In Material Science",
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1200&q=80",
  },
  {
    category: "Infrastructure",
    title: "Workplace Safety Enhancement Initiative",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80",
  },
  {
    category: "Infrastructure",
    title: "Robotic Process Automation Deployment",
    image:
      "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=1200&q=80",
  },
];

export default function OurWorkSection() {
  const [active, setActive] = useState("All");

  const filteredProjects =
    active === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category === active,
        );

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}

        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />

              <span className="uppercase tracking-[3px] text-[12px] text-[#666]">
                Our Work
              </span>
            </div>

            <h2 className="text-[36px] md:text-[52px] leading-tight font-light text-[#222]">
              Our successful project
              <br />
              <span className="font-bold">
                initiatives
              </span>
            </h2>
          </div>

          <div className="flex items-center">
            <p className="text-[#7A7A7A] leading-8 text-[15px]">
              Our successful project initiatives
              showcase our commitment to
              excellence and innovation across
              various industries.
            </p>
          </div>
        </div>

        {/* Filters */}

        <div className="flex flex-wrap gap-6 justify-center mt-16">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`
                text-sm
                transition

                ${
                  active === item
                    ? "text-[#F59E0B]"
                    : "text-[#666]"
                }
              `}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Grid */}

        <div className="grid md:grid-cols-2 gap-8 mt-14">
          {filteredProjects.map((project) => (
            <div key={project.title}>
              <div
                className="
                overflow-hidden
                rounded-[28px]
                group
              "
              >
                <img
                  src={project.image}
                  alt=""
                  className="
                  h-[300px]
                  w-full
                  object-cover
                  transition
                  duration-500
                  group-hover:scale-110
                "
                />
              </div>

              <div className="mt-4">
                <span className="text-[#999] text-xs">
                  {project.category}
                </span>

                <h3 className="mt-2 text-[20px] font-medium text-[#222]">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}