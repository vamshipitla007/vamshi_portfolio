import { useState } from "react";
import { PinIcon } from "lucide-react";

import logo from "@/assets/belalea/Image1.png";

import newsletterBg from "@/assets/belalea/Image10.png"; // Your local image
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const NewsletterBanner = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) {
      alert("Please enter your email.");
      return;
    }

    console.log(email);
    setEmail("");
  };

  return (
    <section className="bg-white pt-20 pb-12">
      <div className="max-w-[1200px] mx-auto px-5">
        <div
          className="relative overflow-hidden rounded-[30px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${newsletterBg})`,
          }}
        >
          <div className="bg-[#F47A20]/55">
            <div className="px-8 lg:px-14 py-10 lg:py-14 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="max-w-[420px]">
                <h2 className="text-white text-[28px] md:text-[40px] font-bold leading-tight">
                  Узнайте первыми
                  <br />о новых акциях!
                </h2>
              </div>

              <form
                onSubmit={handleSubscribe}
                className="w-full lg:w-auto flex flex-col sm:flex-row gap-4"
              >
                <input
                  type="email"
                  placeholder="Введите ваш e-mail адрес"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="
                  w-full
                  sm:w-[360px]
                  h-[60px]
                  rounded-2xl
                  bg-white
                  px-6
                  text-[15px]
                  placeholder:text-gray-400
                  outline-none
                  "
                />

                <button
                  className="
                  h-[60px]
                  px-10
                  rounded-2xl
                  bg-[#7EB98A]
                  text-white
                  text-[16px]
                  font-semibold
                  hover:bg-[#6AAA79]
                  duration-300
                  "
                >
                  Подписаться
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Footer() {
  return (
    <footer className="bg-white pb-14">
      <NewsletterBanner />
      <div className="max-w-[1200px] mx-auto px-5">
        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-12
          pt-10
          "
        >
          {/* Left */}

          <div className="text-center lg:text-right lg:border-r border-gray-200 lg:pr-10">
            <h3 className="text-[36px] font-bold text-[#24485A] mb-8">
              Contact Us
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-[#24485A]">Email</h4>

                <p className="text-gray-500 mt-2">needhelp@organia.com</p>
              </div>

              <div>
                <h4 className="font-semibold text-[#24485A]">Phone</h4>

                <p className="text-gray-500 mt-2">666 888 888</p>
              </div>

              <div>
                <h4 className="font-semibold text-[#24485A]">Address</h4>

                <p className="text-gray-500 mt-2">
                  88 road, Brooklyn Street, USA
                </p>
              </div>
            </div>
          </div>

          {/* Center */}

          <div className="text-center lg:px-10 lg:border-r border-gray-200">
            <img src={logo} alt="" className="mx-auto h-20 object-contain" />

            <p className="text-gray-500 mt-6 leading-8">
              Следите за новостями и акциями
              <br />в наших социальных сетях, подпишитесь!
            </p>

            <div className="flex justify-center gap-5 mt-8">
              {[FaInstagram, FaFacebook, FaTwitter, PinIcon].map(
                (Icon, index) => (
                  <button
                    key={index}
                    className="
                  w-12
                  h-12
                  rounded-full
                  bg-[#EFF6F2]
                  hover:bg-[#7EB98A]
                  hover:text-white
                  duration-300
                  flex
                  items-center
                  justify-center
                  "
                  >
                    <Icon size={18} />
                  </button>
                ),
              )}
            </div>
          </div>

          {/* Right */}

          <div className="text-center lg:text-left">
            <h3 className="text-[36px] font-bold text-[#24485A] mb-8">
              Utility Pages
            </h3>

            <div className="space-y-5 text-gray-500">
              <a href="/" className="block hover:text-[#7EB98A]">
                Style Guide
              </a>

              <a href="/" className="block hover:text-[#7EB98A]">
                404 Not Found
              </a>

              <a href="/" className="block hover:text-[#7EB98A]">
                Password Protected
              </a>

              <a href="/" className="block hover:text-[#7EB98A]">
                Licences
              </a>

              <a href="/" className="block hover:text-[#7EB98A]">
                Changelog
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
