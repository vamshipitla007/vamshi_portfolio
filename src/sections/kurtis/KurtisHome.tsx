/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ChevronDown,
  Menu,
  X,
  BookOpen,
  Presentation,
  Home,
  Smartphone,
  ArrowRight,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";
import logo from "@/assets/kurtis/Image7.png";
import heroIllustration from "@/assets/kurtis/Image1.png";
import createImg from "@/assets/kurtis/Image2.png";
import hostImg from "@/assets/kurtis/Image3.png";
import playImg from "@/assets/kurtis/Image4.png";
import customer1 from "@/assets/kurtis/Image5.png";
import illustration from "@/assets/kurtis/Image6.png";
import { useEffect, useState } from "react";

interface Card {
  title: string;
  subtitle: string;
  button: string;
  image: string;
  bg: string;
  text: string;
  imagePosition: "left" | "right";
  badge?: string;
}

interface Step {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

interface StatItem {
  color: string;
  text: string;
}

interface Testimonial {
  image: string;
  companyLogo: string;
  company: string;
  author: string;
  quote: string;
  description: string;
}

const aboutLinks = [
  "Company",
  "Leadership",
  "Jobs - HIRING!",
  "Pricing",
  "Press",
  "Investors",
];

const solutionLinks = ["At School", "At Work", "At Home"];

const resourceLinks = [
  "Study with Kurtis",
  "Blog",
  "Kurtis Certified",
  "Help Center",
  "Library",
  "Shop",
  "Safety Center",
];

const policyLinks = [
  "Terms and Conditions",
  "Privacy Policy",
  "US Privacy Laws",
  "Children's Privacy Policy",
  "Inclusion and Accessibility Policy",
];

const cards = [
  {
    icon: BookOpen,
    bgColor: "#3F5BFF",
    title: "At School",
    description:
      "Engaging group and distance learning for teachers and students.",
  },
  {
    icon: Presentation,
    bgColor: "#FFC233",
    title: "At work",
    description:
      "For training, e-learning, interactive presentations and more.",
  },
  {
    icon: Home,
    bgColor: "#43C4FF",
    title: "At home",
    description: "Apps and games for family fun or home study.",
  },
  {
    icon: Smartphone,
    bgColor: "#FF4C67",
    title: "Learning apps",
    description: "Engage kids with the Kahoot! family of learning apps.",
  },
];

const cardlist: Card[] = [
  {
    title: "Kurtis Classroom",
    subtitle: "The next generation of interactive learning.",
    button: "Learn more",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    bg: "#3F63D8",
    text: "#ffffff",
    imagePosition: "right",
  },
  {
    title: "Kurtis Classroom",
    subtitle: "The next generation of corporate learning.",
    button: "Learn more",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    bg: "#2F2923",
    text: "#ffffff",
    imagePosition: "right",
  },
  {
    title: "Premium for schools",
    subtitle: "Create and teach interactive lessons students will love.",
    button: "Learn more",
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
    bg: "#FFC21F",
    text: "#2F2923",
    imagePosition: "left",
  },
  {
    title: "Learn Anywhere",
    subtitle: "Education for everyone on every device.",
    button: "Learn more",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    bg: "#18B8F2",
    text: "#ffffff",
    imagePosition: "right",
  },
];

const steps: Step[] = [
  {
    title: "Create",
    description:
      "It only takes minutes to create a learning game or trivia quiz on any topic, in any language.",
    image: createImg,
  },
  {
    title: "Host or share",
    description:
      "Host a live game with questions on a big screen or share a game with remote players.",
    image: hostImg,
    reverse: true,
  },
  {
    title: "Play",
    description:
      "Game on! Join a Kurtis with a PIN provided by the host and answer questions on your device.",
    image: playImg,
  },
];

const testimonials: Testimonial[] = [
  {
    image: customer1,
    companyLogo: "",
    company: "Norwegian Air",
    author: "Martha",
    quote: "I love these games!",
    description:
      "Recusandae sunt voluptate repellat velit dolorem eos nostrum cupiditate. Labore porro cupiditate reiciendis enim neque. Modi eos autem expedita voluptatibus dignissimos repellat.\n\nSit et aut minus quod vitae. Aut occaecati cupiditate neque dolore amet beatae quasi aliquam.",
  },
  {
    image: customer1,
    companyLogo: "",
    company: "Google",
    author: "John",
    quote: "Amazing learning experience!",
    description:
      "Interactive quizzes make training more engaging. Teams collaborate better and learning outcomes improve dramatically.",
  },
  {
    image: customer1,
    companyLogo: "",
    company: "Spotify",
    author: "Sophia",
    quote: "Perfect for our company!",
    description:
      "Employees love participating in quizzes during meetings. It's fun, fast and increases participation.",
  },
];

const stats: StatItem[] = [
  {
    color: "#3F5BFF",
    text: "More than 50% of US teachers use Kurtis",
  },
  {
    color: "#3CC7FF",
    text: "Players in more than 200 countries",
  },
  {
    color: "#FF4D5A",
    text: "Over 30 million public games available",
  },
  {
    color: "#FFC327",
    text: "97% of the Fortune 500 use Kurtis",
  },
];

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="w-full bg-white border-b border-[#EEEEEE]">
      <div className="max-w-[1440px] mx-auto h-[92px] px-6 md:px-10 lg:px-14 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />

          <h2
            className="
              text-[48px]
              leading-none
              font-bold
              text-black
              hidden sm:block
            "
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Kurtis Classroom
          </h2>
        </div>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          <button className="flex items-center gap-1 text-[17px] font-medium text-[#333333] hover:text-[#3F5BFF] transition">
            EN
            <ChevronDown size={18} strokeWidth={2.5} />
          </button>

          <button
            className="
              w-[132px]
              h-[52px]
              rounded-md
              bg-[#3F5BFF]
              text-white
              font-semibold
              text-[17px]
              shadow-[0_4px_0_#2338B8]
              hover:bg-[#2F49EA]
              duration-300
            "
          >
            Sign up
          </button>

          <button
            className="
              w-[132px]
              h-[52px]
              rounded-md
              border
              border-[#D8D8D8]
              bg-white
              text-[#808080]
              text-[17px]
              font-semibold
              hover:border-[#3F5BFF]
              hover:text-[#3F5BFF]
              duration-300
            "
          >
            Log in
          </button>

          <button
            className="
              w-[48px]
              h-[48px]
              flex
              items-center
              justify-center
              rounded-md
              hover:bg-[#F5F5F5]
              duration-300
            "
          >
            <Menu size={34} strokeWidth={2.8} className="text-[#3F5BFF]" />
          </button>
        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="lg:hidden"
        >
          {mobileMenu ? (
            <X size={30} />
          ) : (
            <Menu size={30} className="text-[#3F5BFF]" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileMenu ? "max-h-[350px]" : "max-h-0"
        }`}
      >
        <div className="px-6 py-6 bg-white border-t">
          <button className="flex items-center gap-2 text-[16px] font-medium mb-5">
            EN
            <ChevronDown size={18} />
          </button>

          <button className="w-full h-[50px] rounded-md bg-[#3F5BFF] text-white font-semibold mb-4">
            Sign up
          </button>

          <button className="w-full h-[50px] rounded-md border border-[#D9D9D9] text-[#707070] font-semibold">
            Log in
          </button>
        </div>
      </div>
    </header>
  );
};

const Hero1 = () => {
  return (
    <section className="w-full bg-[#FAFAFA]">
      <div
        className="
          max-w-[1280px]
          mx-auto
          px-6
          md:px-10
          lg:px-20
          py-14
          lg:py-20
        "
      >
        <div
          className="
            grid
            lg:grid-cols-2
            gap-12
            items-center
          "
        >
          {/* Left */}

          <div className="order-2 lg:order-1">
            <h1
              className="
                text-[#2F2923]
                font-extrabold
                leading-[1.05]
                tracking-[-1px]
                text-[48px]
                sm:text-[58px]
                lg:text-[76px]
              "
            >
              Make
              <br />
              learning fun!
            </h1>

            <p
              className="
                mt-8
                text-[#5D5D5D]
                text-[18px]
                md:text-[22px]
                leading-[34px]
                max-w-[470px]
                font-medium
              "
            >
              Any subject, in any language, on any device, for all ages!
            </p>

            <button
              className="
                mt-10
                w-[230px]
                h-[58px]
                rounded-lg
                bg-[#3B5BFF]
                text-white
                font-semibold
                text-[18px]
                shadow-md
                hover:bg-[#2847ea]
                transition-all
                duration-300
              "
            >
              Sign up for free
            </button>

            <div className="mt-10">
              <p className="text-[#242424] font-semibold text-[16px]">
                Or download the app:
              </p>

              <div className="flex items-center gap-4 mt-5">
                <a
                  href="https://apps.apple.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="Download on the App Store"
                    className="h-12 w-auto hover:scale-105 transition-transform duration-300"
                  />
                </a>

                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                    className="h-12 w-auto hover:scale-105 transition-transform duration-300"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right */}

          <div
            className="
              order-1
              lg:order-2
              flex
              justify-center
            "
          >
            <img
              src={heroIllustration}
              alt="Hero"
              className="
                w-full
                max-w-[600px]
                object-contain
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Hero2 = () => {
  return (
    <section className="w-full bg-[#F7F7F7] py-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Heading */}

        <div className="text-center">
          <h2
            className="
              text-[#2F2923]
              font-extrabold
              text-[34px]
              md:text-[46px]
              leading-tight
            "
          >
            Who is Kurtis for?
          </h2>

          <div className="w-[90px] h-[6px] bg-[#3F5BFF] rounded-full mx-auto mt-4" />
        </div>

        {/* Cards */}

        <div
          className="
            mt-20
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-y-16
            gap-x-10
          "
        >
          {cards.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="group">
                <div
                  className="
                            w-16
                            h-16
                            rounded-2xl
                            flex
                            items-center
                            justify-center
                            transition-transform
                            duration-300
                            group-hover:scale-110
                            "
                  style={{ backgroundColor: item.bgColor }}
                >
                  <Icon size={28} strokeWidth={2.2} className="text-white" />
                </div>

                <h3 className="mt-8 text-[18px] font-bold text-[#2F2923]">
                  {item.title}
                </h3>

                <p className="mt-4 text-[16px] leading-8 text-[#555]">
                  {item.description}
                </p>

                <button className="mt-6 font-bold text-[#2F2923] hover:text-[#3F5BFF]">
                  Learn more
                </button>
              </div>
            );
          })}
        </div>

        {/* CTA */}

        <div className="flex justify-center mt-20">
          <button
            className="
              w-[170px]
              h-[56px]
              rounded-md
              bg-[#3F5BFF]
              text-white
              font-bold
              text-[18px]
              shadow-[0_4px_0_#2236B8]
              hover:bg-[#2948F2]
              duration-300
            "
          >
            SIGN UP NOW
          </button>
        </div>
      </div>
    </section>
  );
};

const Hero3 = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % cards.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Heading */}

        <div className="text-center">
          <h2 className="text-[34px] md:text-[48px] font-extrabold text-[#2F2923]">
            Amazing things are happening
          </h2>

          <div className="w-[120px] h-[6px] rounded-full bg-[#3F5BFF] mx-auto mt-4" />
        </div>

        {/* Slider */}

        <div className="mt-16 overflow-hidden">
          <div
            className="flex transition-transform duration-700"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {cardlist.map((card, index) => (
              <div key={index} className="min-w-full flex justify-center">
                <div
                  className="
                    grid
                    lg:grid-cols-2
                    w-full
                    max-w-[1100px]
                    rounded-[34px]
                    overflow-hidden
                    shadow-xl
                  "
                >
                  {card.imagePosition === "left" && (
                    <img
                      src={card.image}
                      alt=""
                      className="w-full h-[320px] lg:h-[430px] object-cover"
                    />
                  )}

                  <div
                    style={{
                      background: card.bg,
                      color: card.text,
                    }}
                    className="
                      flex
                      flex-col
                      justify-center
                      px-10
                      lg:px-14
                      py-10
                    "
                  >
                    {card.badge && (
                      <span
                        className="
                          w-fit
                          bg-[#2F2923]
                          text-white
                          px-5
                          py-2
                          rounded-full
                          font-semibold
                          mb-8
                        "
                      >
                        {card.badge}
                      </span>
                    )}

                    <h3 className="text-[34px] lg:text-[50px] font-extrabold leading-tight">
                      {card.title}
                    </h3>

                    <p className="mt-6 text-[18px] leading-8 max-w-md font-medium opacity-90">
                      {card.subtitle}
                    </p>

                    <button
                      className="
                        mt-10
                        text-[20px]
                        font-bold
                        text-left
                        hover:underline
                      "
                    >
                      {card.button}
                    </button>
                  </div>

                  {card.imagePosition === "right" && (
                    <img
                      src={card.image}
                      alt=""
                      className="w-full h-[320px] lg:h-[430px] object-cover"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}

        <div className="flex justify-center gap-4 mt-14">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-4 h-4 rounded-full transition-all ${
                current === index ? "bg-[#3F5BFF] scale-110" : "bg-[#E6E6E6]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Hero4 = () => {
  const [code, setCode] = useState("");

  const handleJoin = () => {
    if (!code.trim()) {
      alert("Please enter a game code.");
      return;
    }

    alert(`Joining game: ${code}`);
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1380px] mx-auto px-6">
        {/* Heading */}

        <div className="text-center">
          <h2
            className="
              text-[#2F2923]
              font-extrabold
              text-[32px]
              md:text-[42px]
              leading-tight
            "
          >
            Do you have a game code?
          </h2>

          <p
            className="
              mt-3
              text-[#595959]
              text-[18px]
              md:text-[22px]
              font-medium
            "
          >
            Let's play for a while!
          </p>
        </div>

        {/* Yellow Card */}

        <div
          className="
            mt-10
            rounded-[30px]
            overflow-hidden
            bg-gradient-to-br
            from-[#FFD54E]
            to-[#FFC126]
            min-h-[520px]
            flex
            justify-center
            items-center
            shadow-lg
          "
        >
          <div className="text-center w-full max-w-[520px]">
            {/* Logo */}

            {/* <img
              src="https://dummyimage.com/330x70/ffffff/ffffff.png&text=Kurtis+Classroom"
              alt="Logo"
              className="mx-auto h-[60px] object-contain"
            /> */}

            {/* Input */}

            <div
              className="
                mt-10
                flex
                items-center
                bg-white
                rounded-full
                h-[68px]
                px-7
                shadow-md
              "
            >
              <input
                value={code}
                onChange={(e) => setCode(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleJoin();
                }}
                placeholder="Write the code here"
                className="
                  flex-1
                  bg-transparent
                  outline-none
                  text-[24px]
                  text-[#555]
                  placeholder:text-[#9E9E9E]
                  font-semibold
                "
              />

              <button
                onClick={handleJoin}
                className="
                  w-12
                  h-12
                  rounded-full
                  hover:bg-[#F5F5F5]
                  transition
                "
              >
                <ArrowRight size={34} className="text-[#8A8A8A]" />
              </button>
            </div>

            <button
              className="
                mt-5
                text-[#777777]
                text-[18px]
                hover:text-[#3F5BFF]
                duration-300
              "
            >
              Or try with 1234
            </button>
          </div>
        </div>

        {/* Bottom */}

        <div
          className="
            mt-12
            text-center
            text-[24px]
            md:text-[36px]
            font-medium
          "
        >
          <span className="text-[#2F2923]">Still more?</span>

          <button
            className="
              ml-3
              text-[#3559FF]
              underline
              font-bold
              hover:text-[#2645E5]
            "
          >
            Take a look to our features games
          </button>
        </div>
      </div>
    </section>
  );
};

const Hero5 = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-[1250px] mx-auto px-6">
        {/* Heading */}

        <div className="text-center">
          <h2
            className="
              text-[34px]
              md:text-[48px]
              font-extrabold
              text-[#2F2923]
            "
          >
            How does Kurtis work?
          </h2>

          <div className="w-[85px] h-[5px] bg-[#3F5BFF] rounded-full mx-auto mt-4" />
        </div>

        {/* Steps */}

        <div className="mt-20 space-y-28">
          {steps.map((item, index) => (
            <div
              key={index}
              className={`
                grid
                lg:grid-cols-2
                gap-16
                items-center
                ${item.reverse ? "lg:[&>*:first-child]:order-2" : ""}
              `}
            >
              {/* Image */}

              <div className="flex justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full
                    max-w-[430px]
                    object-contain
                    transition
                    duration-300
                    hover:scale-105
                  "
                />
              </div>

              {/* Content */}

              <div className="text-center lg:text-left">
                <h3
                  className="
                    text-[32px]
                    lg:text-[42px]
                    font-bold
                    text-[#2F2923]
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-6
                    text-[18px]
                    lg:text-[22px]
                    leading-10
                    text-[#4B4B4B]
                    font-medium
                    max-w-[520px]
                    mx-auto
                    lg:mx-0
                  "
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Hero6 = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const item = testimonials[active];

  return (
    <section className="bg-[#3F5BFF] py-20 lg:py-28">
      <div className="max-w-[1250px] mx-auto px-6">
        {/* Heading */}

        <div className="text-center">
          <h2 className="text-white text-[34px] md:text-[48px] font-extrabold">
            Our best customers
          </h2>

          <div className="w-[95px] h-[6px] bg-white rounded-full mx-auto mt-5" />
        </div>

        {/* Content */}

        <div className="mt-20 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}

          <div className="relative flex flex-col items-center">
            {/* Speech Bubble */}

            <div
              className="
                bg-white
                rounded-[26px]
                px-12
                py-10
                text-center
                text-[#2F2923]
                text-[32px]
                font-semibold
                shadow-xl
                relative
                w-full
                max-w-[460px]
              "
            >
              {item.quote}

              <div
                className="
                  absolute
                  bottom-[-12px]
                  right-12
                  w-6
                  h-6
                  bg-white
                  rotate-45
                "
              />
            </div>

            <img
              src={item.image}
              alt={item.author}
              className="
                w-[170px]
                h-[170px]
                rounded-full
                object-cover
                border-4
                border-white
                shadow-xl
                -mt-4
              "
            />
          </div>

          {/* Right */}

          <div className="border-l-2 border-white/50 pl-10">
            <h3 className="text-white text-[30px] font-bold">
              {item.author} | {item.company}
            </h3>

            <p
              className="
                mt-8
                text-white/90
                text-[18px]
                leading-9
                whitespace-pre-line
              "
            >
              {item.description}
            </p>

            {/* <img
              src={item.companyLogo}
              alt=""
              className="mt-10 h-[58px] object-contain"
            /> */}
          </div>
        </div>

        {/* Dots */}

        <div className="flex justify-center gap-5 mt-20">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`w-5 h-5 rounded-full transition-all ${
                active === index ? "bg-[#FFC533] scale-110" : "bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Hero7 = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        {/* Stats */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {stats.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div
                className="w-[4px] h-[42px] rounded-full mt-1"
                style={{ backgroundColor: item.color }}
              />

              <p
                className="
                  text-[#2F2923]
                  font-bold
                  text-[15px]
                  leading-6
                "
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Content */}

        <div
          className="
            mt-24
            grid
            lg:grid-cols-2
            gap-16
            items-center
          "
        >
          {/* Illustration */}

          <div className="flex justify-center">
            <img
              src={illustration}
              alt="Learning Illustration"
              className="
                w-full
                max-w-[460px]
                object-contain
                transition-transform
                duration-300
                hover:scale-105
              "
            />
          </div>

          {/* Text */}

          <div className="text-center lg:text-left">
            <h2
              className="
                text-[#2F2923]
                font-extrabold
                text-[44px]
                md:text-[56px]
                lg:text-[72px]
                leading-[1.08]
              "
            >
              Ready for make
              <br />
              learning fun!
            </h2>

            <button
              className="
                mt-12
                w-[220px]
                h-[60px]
                rounded-md
                bg-[#3F5BFF]
                text-white
                font-semibold
                text-[18px]
                shadow-[0_5px_0_#2437B8]
                hover:bg-[#2947F0]
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              Sign up for free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#3F5BFF] text-white">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-12">
          {/* Left */}

          <div>
            <img
              src="https://dummyimage.com/230x50/3F5BFF/ffffff&text=Kurtis+Classroom"
              alt="logo"
              className="h-12 object-contain"
            />

            <h4 className="mt-10 text-[16px] font-bold">Get the app</h4>

            <div className="space-y-3 mt-5">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt=""
                className="h-12 cursor-pointer hover:scale-105 duration-300"
              />

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt=""
                className="h-12 cursor-pointer hover:scale-105 duration-300"
              />

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/72/Huawei_AppGallery_badge_EN.png"
                alt=""
                className="h-12 cursor-pointer hover:scale-105 duration-300"
              />
            </div>

            <h4 className="mt-12 text-[16px] font-bold">Follow us:</h4>

            <div className="flex gap-4 mt-5">
              {[
                FaLinkedinIn,
                FaFacebookF,
                FaInstagram,
                FaTwitter,
                FaTiktok,
              ].map((Icon, index) => (
                <button
                  key={index}
                  className="
                    w-11
                    h-8
                    rounded-full
                    bg-white
                    text-[#3F5BFF]
                    flex
                    items-center
                    justify-center
                    hover:scale-110
                    duration-300
                  "
                >
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>

          {/* About */}

          <FooterColumn title="About" links={aboutLinks} />

          {/* Solutions */}

          <FooterColumn title="Solutions" links={solutionLinks} />

          {/* Resources */}

          <FooterColumn title="Resources" links={resourceLinks} />

          {/* Terms */}

          <div>
            <h3 className="font-bold text-[28px]">Terms and conditions</h3>

            <ul className="mt-8 space-y-5">
              {policyLinks.map((item) => (
                <li
                  key={item}
                  className="hover:text-[#FFD44D] duration-300 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex gap-4 mt-10">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
                className="bg-white rounded p-3 h-16"
                style={{ width: "80px", height: "50px" }}
                alt=""
              />

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                className="bg-white rounded p-3 h-16"
                style={{ width: "80px", height: "50px" }}
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div
          className="
            border-t
            border-white/20
            mt-20
            pt-8
            text-center
            lg:text-left
            text-[15px]
            text-white/80
          "
        >
          Copyright © 2026, Kurtis. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

interface FooterColumnProps {
  title: string;
  links: string[];
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="font-bold text-[28px]">{title}</h3>

      <ul className="mt-8 space-y-5">
        {links.map((item) => (
          <li
            key={item}
            className="
              text-[17px]
              cursor-pointer
              hover:text-[#FFD44D]
              duration-300
            "
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

const KurtisHome = () => {
  return (
    <div>
      <Navbar />
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <Hero5 />
      <Hero6 />
      <Hero7 />
      <Footer />
    </div>
  );
};

export default KurtisHome;
