type Props = {
  title: string;
  period: string;
  price: string;
  color: string;
  features: {
    text: string;
    enabled: boolean;
  }[];
};

export default function PricingCard({
  title,
  period,
  price,
  color,
  features,
}: Props) {
  return (
    <div
      className="
        bg-white
        rounded-[30px]
        overflow-hidden
        shadow-[0_15px_35px_rgba(0,0,0,0.08)]
        w-full
        max-w-[320px]
        mx-auto
        transition
        duration-300
        hover:-translate-y-2
      "
    >
      {/* Header */}
      <div
        className="
          text-white
          text-center
          py-5
          font-bold
          text-[18px]
          uppercase
        "
        style={{
          background: color,
          borderBottomLeftRadius: "35px",
          borderBottomRightRadius: "35px",
        }}
      >
        {title}
      </div>


      {/* Content */}
      <div className="p-8">

        {/* Duration */}
        <h3
          className="
            text-center
            text-[36px]
            font-extrabold
            text-[#2A355E]
          "
        >
          {period}
        </h3>


        {/* Features */}
        <div className="mt-8 space-y-4">

          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3"
            >
              <span
                className={`
                  text-[16px]
                  font-bold
                  ${
                    feature.enabled
                      ? "text-[#00D14B]"
                      : "text-[#FF3B30]"
                  }
                `}
              >
                {feature.enabled ? "✔" : "✖"}
              </span>


              <p
                className="
                  text-[14px]
                  text-[#6E7391]
                  leading-5
                "
              >
                {feature.text}
              </p>

            </div>
          ))}

        </div>


        {/* Price */}
        <div className="mt-10 text-center">

          <span
            className="
              text-[44px]
              font-extrabold
              text-[#2A355E]
            "
          >
            {price}
          </span>

          <span
            className="
              ml-2
              text-[28px]
              font-medium
              text-[#2A355E]
            "
          >
            ₽
          </span>

        </div>

      </div>


      {/* Footer Button */}
      <button
        className="
          w-full
          h-[60px]
          bg-gradient-to-r
          from-[#FFB300]
          to-[#FF8A00]
          text-white
          text-[16px]
          font-semibold
          flex
          items-center
          justify-center
          gap-3
          transition
          duration-300
          hover:brightness-110
        "
      >
        Приобрести
        <span className="text-[22px]">→</span>
      </button>

    </div>
  );
}