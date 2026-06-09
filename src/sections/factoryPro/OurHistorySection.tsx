import { useState } from "react";
import { CheckCircle } from "lucide-react";

const historyData = [
  {
    year: "1920 - Planning",
    title: "Company started",
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description:
      "Welcome to Industry, a leading industry innovator with a rich history of excellence.",
  },
  {
    year: "1922 - Journey Started",
    title: "Journey started",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description:
      "The company expanded operations and established strong industrial foundations.",
  },
  {
    year: "1925 - Journey Progress",
    title: "Expansion phase",
    image:
      "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description:
      "Significant investments accelerated growth and innovation.",
  },
  {
    year: "1930 - Global Reach",
    title: "Global reach",
    image:
      "https://images.pexels.com/photos/3862364/pexels-photo-3862364.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description:
      "International markets were successfully entered.",
  },
  {
    year: "1940 - Industry Leadership",
    title: "Industry leadership",
    image:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description:
      "Became one of the leading industrial organizations.",
  },
];

export default function OurHistorySection() {
  const [active, setActive] = useState(historyData[0]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}

        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-[#F59E0B] rounded-full" />
              <span className="uppercase text-[#777] tracking-[3px] text-[12px]">
                Our History
              </span>
            </div>

            <h2 className="text-[36px] text-[#777] md:text-[52px] font-light leading-tight">
              Foundation of excellences
              <br />
              <span className="text-[#777] font-bold">
                in industry
              </span>
            </h2>
          </div>

          <p className="text-[#777] leading-8">
            Built on a legacy of quality and innovation,
            we have established a strong foundation.
          </p>
        </div>

        {/* Content */}

        <div className="grid lg:grid-cols-[280px_1fr] gap-12">
          {/* Timeline */}

          <div className="rounded-[24px] overflow-hidden border border-[#eee]">
            {historyData.map((item) => (
              <button
                key={item.year}
                onClick={() => setActive(item)}
                className={`
                  w-full
                  p-6
                  text-left
                  border-b
                border-[#eee]
                  ${
                    active.year === item.year
                      ? "bg-[#F59E0B] text-white"
                      : "bg-white text-[#777]"
                  }
                `}
              >
                {item.year}
              </button>
            ))}
          </div>

          {/* Details */}

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className=" text-[#777] text-[44px] font-light">
                Company{" "}
                <span className="text-[#777] font-bold">
                  {active.title}
                </span>
              </h3>

              <p className="mt-6 text-[#777] leading-8">
                {active.description}
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Quality Control System",
                  "Building Quality Industrial",
                  "Environmental Responsibility",
                  "Building Quality Industrial",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-[#777]"
                  >
                    <CheckCircle
                      size={18}
                      className="text-[#F59E0B]"
                    />
                    {item}
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
    </section>
  );
}