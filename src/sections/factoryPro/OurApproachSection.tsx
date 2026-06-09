import { useState } from "react";
import {
  Target,
  Eye,
  Gem,
  CheckCircle,
} from "lucide-react";

const tabs = [
  {
    id: "mission",
    label: "Our Mission",
    icon: <Target size={20} />,
    image:
      "https://images.pexels.com/photos/3846554/pexels-photo-3846554.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description:
      "Our mission is to transform factory and industry sectors through sustainable practices, innovation, and advanced technology.",
    points: [
      "Sustainable Manufacturing Practices",
      "Advanced Technology Integration",
      "Community And Environmental Responsibility",
      "Innovation-Driven Growth",
    ],
  },
  {
    id: "vision",
    label: "Our Vision",
    icon: <Eye size={20} />,
    image:
      "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description:
      "To become the global leader in industrial innovation and sustainable manufacturing excellence.",
    points: [
      "Global Industry Leadership",
      "Future Ready Technology",
      "Sustainable Ecosystems",
      "Continuous Improvement",
    ],
  },
  {
    id: "value",
    label: "Our Value",
    icon: <Gem size={20} />,
    image:
      "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description:
      "Our values guide every decision we make and every solution we deliver.",
    points: [
      "Integrity",
      "Innovation",
      "Customer Focus",
      "Operational Excellence",
    ],
  },
];

export default function OurApproachSection() {
  const [active, setActive] = useState(tabs[0]);

  return (
    <section className="pb-20">
      {/* Hero Banner */}

      <div className="relative h-[350px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 h-full">
          <div className="grid lg:grid-cols-2 gap-10 items-center h-full">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                <span className="text-white uppercase tracking-[3px] text-[12px]">
                  Our Approach
                </span>
              </div>

              <h2 className="text-white text-[36px] md:text-[52px] leading-tight font-light">
                Empowering sustainable
                <br />
                <span className="font-bold">
                  growth in industry
                </span>
              </h2>
            </div>

            <p className="text-white/80 text-[15px] leading-8">
              We provide a wide range of services
              tailored to the unique needs of
              modern industries.
            </p>
          </div>
        </div>
      </div>

      {/* Tab Card */}

      <div className="max-w-6xl mx-auto px-5 -mt-20 relative z-20">
        <div className="bg-white rounded-[32px] shadow-xl overflow-hidden">
          {/* Tabs */}

          <div className="grid md:grid-cols-3 border-b">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab)}
                className={`
                  flex items-center justify-center gap-3
                  py-8 transition

                  ${
                    active.id === tab.id
                      ? "bg-[#F59E0B] text-white"
                      : "bg-white text-[#222]"
                  }
                `}
              >
                {tab.icon}
                <span className="font-medium">
                  {tab.label}
                </span>
              </button>
            ))}
          </div>

          {/* Content */}

          <div className="p-8 lg:p-14">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[#777] leading-8">
                  {active.description}
                </p>

                <div className="mt-8 space-y-4">
                  {active.points.map((point) => (
                    <div
                      key={point}
                      className="flex gap-3 items-center"
                    >
                      <CheckCircle
                        size={18}
                        className="text-[#F59E0B]"
                      />
                      <span className="text-[#777]">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <img
                src={active.image}
                alt=""
                className="rounded-[28px] w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}