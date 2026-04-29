import CursorImage from "@/assets/cursor.png";

type Props = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  reverse?: boolean;
};

export default function ProjectRow({
  title,
  subtitle,
  description,
  image,
  reverse,
}: Props) {
  return (
    <div className="relative grid md:grid-cols-2 items-center gap-10">
      <div
        className="
        absolute top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2
        w-[400px] h-[300px]
        rounded-full
        bg-purple-600 opacity-30 blur-3xl
        pointer-events-none
        ml-30
    "
      />

      <div
        className="
        absolute top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2
        w-[400px] h-[300px]
        rounded-full
        border-[#7127BA]
        pointer-events-none
        ml-30
    "
      />
      {/* IMAGE SIDE */}
      <div
        className={`relative flex justify-center ${reverse ? "md:order-2" : "md:order-1"}`}
      >
        <div className="absolute w-[500px] h-[300px] bg-[radial-gradient(circle,#7c3aed_0%,transparent_70%)] opacity-40 blur-3xl" />
        <div
          className="
            absolute
            top-[-20px] left-[-20px]
            w-[520px]
            bg-[#2B0B3A]
            rounded-xl
            blur-[60px]
            opacity-70
            z-0
            "
        />
        <img src={image} alt="" className="relative w-[520px] rounded-xl" />
      </div>

      {/* TEXT SIDE */}
      <div className={`relative ${reverse ? "md:order-1" : "md:order-2"}`}>
        <p
          className={`text-purple-400 text-sm mb-2 ${reverse ? "text-left" : "text-right"}`}
        >
          {subtitle}
        </p>

        <h2
          className={`text-3xl font-semibold mb-6 ${reverse ? "text-left" : "text-right"}`}
        >
          {title}
        </h2>

        <div
          className={`
    relative z-10
    p-7 rounded-xl
    bg-white/5 backdrop-blur-md border border-white/10
    w-[560px]
    ${reverse ? "ml-auto md:-mr-20" : "mr-auto md:-ml-20"}
  `}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent rounded-xl" />

          <p className="relative text-gray-300 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        <div className={`flex gap-2 mt-2 ${reverse ? "justify-start" : "justify-end"}`}>
          <img
            src={CursorImage}
            alt=""
            className="relative w-[30px] h-[30px]"
          />
          <img
            src={CursorImage}
            alt=""
            className="relative w-[30px] h-[30px]"
          />
        </div>
      </div>
    </div>
  );
}
