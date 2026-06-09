import React from "react";
import {
  FlaskConical,
  Factory,
  BadgeCheck,
} from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: "Advanced Technology Integration",
    description:
      "We integrate cutting-edge technologies into every aspect of our operations, enhancing efficiency, precision, and innovation to deliver superior industrial solutions.",
    icon: <FlaskConical size={34} />,
  },
  {
    title: "Uncompromising Quality Standards",
    description:
      "We uphold the highest quality standards across all processes, ensuring consistency, reliability, and excellence in every product and service we deliver.",
    icon: <BadgeCheck size={34} />,
  },
  {
    title: "Continuous Innovation and R&D",
    description:
      "We prioritize ongoing research and development to drive continuous innovation, staying ahead of industry trends and creating advanced solutions that meet evolving market demands.",
    icon: <Factory size={34} />,
  },
];

const OurKeyFeaturesSection: React.FC = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}

        <div className="grid lg:grid-cols-2 gap-10 mb-14">
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
                Our Key Feature
              </span>
            </div>

            <h2
              className="
              text-[#222]
              text-[38px]
              md:text-[52px]
              font-light
              leading-tight
              "
            >
              Core strengths in
              <br />
              <span className="font-bold">
                industrial innovation
              </span>
            </h2>
          </div>

          <div className="flex items-center">
            <p
              className="
              text-[#7A7A7A]
              text-[15px]
              leading-8
              max-w-[520px]
              "
            >
              Our expertise in industrial innovation
              combines advanced technology,
              sustainable practices, and a skilled
              workforce to deliver efficient,
              future-ready solutions that drive
              industry progress.
            </p>
          </div>
        </div>

        {/* Feature Grid */}

        <div
          className="
          overflow-hidden
          rounded-[36px]
          border
          border-[#ECECEC]
          "
        >
          <div className="grid lg:grid-cols-2">
            {/* Feature 1 */}

            <div
              className="
              border-b
              lg:border-r
              border-[#ECECEC]
              p-10
              lg:p-12
              "
            >
              <div className="text-[#F59E0B] mb-6">
                {features[0].icon}
              </div>

              <h3
                className="
                text-[28px]
                font-medium
                text-[#222]
                leading-tight
                "
              >
                {features[0].title}
              </h3>

              <p
                className="
                mt-5
                text-[#7A7A7A]
                text-[15px]
                leading-8
                "
              >
                {features[0].description}
              </p>
            </div>

            {/* Feature 2 */}

            <div
              className="
              border-b
              border-[#ECECEC]
              p-10
              lg:p-12
              "
            >
              <div className="text-[#F59E0B] mb-6">
                {features[1].icon}
              </div>

              <h3
                className="
                text-[28px]
                font-medium
                text-[#222]
                leading-tight
                "
              >
                {features[1].title}
              </h3>

              <p
                className="
                mt-5
                text-[#7A7A7A]
                text-[15px]
                leading-8
                "
              >
                {features[1].description}
              </p>
            </div>

            {/* Feature 3 */}

            <div
              className="
              lg:border-r
              border-[#ECECEC]
              p-10
              lg:p-12
              "
            >
              <div className="text-[#F59E0B] mb-6">
                {features[2].icon}
              </div>

              <h3
                className="
                text-[28px]
                font-medium
                text-[#222]
                leading-tight
                "
              >
                {features[2].title}
              </h3>

              <p
                className="
                mt-5
                text-[#7A7A7A]
                text-[15px]
                leading-8
                "
              >
                {features[2].description}
              </p>
            </div>

            {/* Image */}

            <div className="relative min-h-[320px]">
              <img
                src="https://images.pexels.com/photos/162568/factory-worker-machine-production-162568.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Industrial Innovation"
                className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurKeyFeaturesSection;