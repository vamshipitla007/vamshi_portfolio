import HeroBanner from "./HeroBanner";
import aboutHero from "@/assets/factorypro/Image10.png";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

const categories = [
  "All",
  "Automation",
  "Development",
  "Infrastructure",
  "Manufacturing",
  "Sustainability",
];

const projects: Project[] = [
  {
    id: 1,
    title: "Total Quality Management Implementation",
    category: "Development",
    image:
      "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 2,
    title: "Advanced Research In Material Science",
    category: "Automation",
    image:
      "https://images.pexels.com/photos/8297544/pexels-photo-8297544.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 3,
    title: "Workplace Safety Enhancement Initiative",
    category: "Infrastructure",
    image:
      "https://images.pexels.com/photos/3846554/pexels-photo-3846554.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 4,
    title: "Robotic Process Automation Deployment",
    category: "Infrastructure",
    image:
      "https://images.pexels.com/photos/8566486/pexels-photo-8566486.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 5,
    title: "Energy-Efficient Manufacturing Systems",
    category: "Development",
    image:
      "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 6,
    title: "Redesigning Factory Layouts For Efficiency",
    category: "Development",
    image:
      "https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export default function ProjectPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;

    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <div>
      <HeroBanner
        image={aboutHero}
        height="380px"
        title={
          <div className="flex items-start gap-3 justify-start">
            Our Project
          </div>
        }
        description="Home / Projects"
      />
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          {/* FILTERS */}

          <div
            className="
          flex
          flex-wrap
          justify-center
          gap-4
          md:gap-6
          mb-16
          "
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                text-[14px]
                font-medium
                transition-all

                ${
                  activeCategory === category ? "text-[#F59E0B]" : "text-[#222]"
                }
              `}
              >
                {category}
              </button>
            ))}
          </div>

          {/* PROJECTS */}

          <div
            className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-10
          lg:gap-x-8
          lg:gap-y-14
          "
          >
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="
              group
              transition-all
              duration-300
              hover:-translate-y-2
              "
              >
                {/* IMAGE */}

                <div
                  className="
                relative
                overflow-hidden
                rounded-[30px]
                "
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                    w-full
                    h-[260px]
                    md:h-[320px]
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-105
                  "
                  />

                  {/* CATEGORY */}

                  <div
                    className="
                  absolute
                  top-5
                  left-5
                  px-4
                  py-2
                  rounded-xl
                  bg-white/20
                  backdrop-blur-md
                  text-white
                  text-[13px]
                  "
                  >
                    {project.category}
                  </div>
                </div>

                {/* TITLE */}

                <div className="pt-5">
                  <div
                    className="
                  flex
                  items-center
                  justify-between
                  gap-4
                  "
                  >
                    <h3
                      className="
                    text-[24px]
                    font-medium
                    text-[#222]
                    leading-snug
                    "
                    >
                      {project.title}
                    </h3>

                    <button
                      className="
                    w-11
                    h-11
                    rounded-full
                    bg-[#F59E0B]
                    text-white
                    flex
                    items-center
                    justify-center
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    "
                    >
                      <ArrowUpRight size={18} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
