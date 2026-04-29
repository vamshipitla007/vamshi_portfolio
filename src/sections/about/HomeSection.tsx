import AvatarGlow from "../../components/ui/AvatarGlow";
import { useTypingLoop } from "../../hooks/useTypingEffect";

export default function HomeSection() {
  const text = useTypingLoop(["Software Engineer"]);

  return (
    <section
      id="home"
      className="min-h-screen pt-28 w-full flex items-center bg-[#0b001a]"
    >
      <div className="max-w-7xl mx-auto px-6 items-center gap-10 pt-20">
        <div className="flex md:justify-start mr-50">
          <AvatarGlow />
          <div className="text-center md:text-left space-y-6">
            <p className="text-gray-400">A Designer who</p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Judges a book <br />
              by its <span className="text-[#7127BA]">cover...</span>
            </h1>

            <p className="text-gray-400 max-w-md">
              Because if the cover does not impress you what else can?
            </p>
          </div>
        </div>
        <div className="text-white mt-40 space-y-6 ">
          {/* Title */}
          <h1 className="text-[50px] font-normal tracking-[0.02em] leading-[1]">
            I’m a {text}
            <span className="animate-pulse">|</span>
          </h1>

          {/* Subtitle with Facebook */}
          <p className="text-[22px] tracking-[0.02em] m leading-[1] text-gray-300 flex items-center gap-2">
            Currently, I’m a Software Engineer at
            <span className="flex items-center gap-1 text-blue-500">
              {/* Facebook Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.4V9.41c0-2.37 1.4-3.68 3.56-3.68 1.03 0 2.11.18 2.11.18v2.32h-1.19c-1.17 0-1.53.73-1.53 1.47v1.77h2.6l-.42 2.9h-2.18V22c4.78-.8 8.44-4.94 8.44-9.93z" />
              </svg>
              Facebook
            </span>
            ,
          </p>

          {/* Description */}
          <p className="text-[22px] mt-20 tracking-[0.02em] leading-[1.6] text-gray-300">
            A self-taught UI/UX designer, functioning in the industry for 3+
            years now.
            <br />
            I make meaningful and delightful digital products that create an
            equilibrium
            <br />
            between user needs and business goals.
          </p>
        </div>
      </div>
    </section>
  );
}
