import React from "react";
import {
  ArrowUpRight,

} from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Ronald Richards",
    role: "Manufacturing Executive",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    name: "Brooklyn Simmons",
    role: "Industrial Engineer",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    name: "Cameron Williamson",
    role: "Production Supervisor",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 4,
    name: "Darlene Robertson",
    role: "Manufacturing Executive",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const OurTeamSection: React.FC = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />

              <span
                className="
                uppercase
                tracking-[3px]
                text-[12px]
                font-medium
                text-[#555]
                "
              >
                Our Team
              </span>
            </div>

            <h2
              className="
              text-[38px]
              md:text-[52px]
              leading-tight
              font-light
              text-[#222]
              "
            >
              Core strengths in
              <br />
              <span className="font-bold">
                industrial innovation
              </span>
            </h2>
          </div>

          {/* CTA */}

          <button
            className="
            self-start
            flex
            items-center
            overflow-hidden
            rounded-xl
            border
            border-[#F59E0B]
            "
          >
            <span
              className="
              px-6
              py-3
              text-[15px]
              font-medium
              text-[#222]
              bg-white
              "
            >
              All Member
            </span>

            <span
              className="
              bg-[#F59E0B]
              text-white
              px-4
              py-3
              flex
              items-center
              justify-center
              "
            >
              <ArrowUpRight size={18} />
            </span>
          </button>
        </div>

        {/* Team Grid */}

        <div
          className="
          grid
          sm:grid-cols-2
          lg:grid-cols-4
          gap-8
          "
        >
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group"
            >
              {/* Image */}

              <div
                className="
                relative
                overflow-hidden
                rounded-[24px]
                "
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="
                  h-[340px]
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-110
                  "
                />

                {/* Overlay */}

                <div
                  className="
                  absolute
                  inset-0
                  bg-black/50
                  opacity-0
                  group-hover:opacity-100
                  transition
                  flex
                  items-center
                  justify-center
                  gap-4
                  "
                >
                  <a
                    href="#"
                    className="
                    w-10
                    h-10
                    rounded-full
                    bg-white
                    flex
                    items-center
                    justify-center
                    "
                  >
                    <FaFacebook size={18} />
                  </a>

                  <a
                    href="#"
                    className="
                    w-10
                    h-10
                    rounded-full
                    bg-white
                    flex
                    items-center
                    justify-center
                    "
                  >
                    <FaInstagram size={18} />
                  </a>

                  <a
                    href="#"
                    className="
                    w-10
                    h-10
                    rounded-full
                    bg-white
                    flex
                    items-center
                    justify-center
                    "
                  >
                    <FaLinkedin size={18} />
                  </a>
                </div>
              </div>

              {/* Content */}

              <div className="pt-5 text-center">
                <h3
                  className="
                  text-[24px]
                  font-medium
                  text-[#222]
                  "
                >
                  {member.name}
                </h3>

                <p
                  className="
                  mt-2
                  text-[15px]
                  text-[#7A7A7A]
                  "
                >
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;