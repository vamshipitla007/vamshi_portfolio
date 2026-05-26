import { Link } from "react-router-dom";
import {
  DiscIcon,
  ExternalLink,
} from "lucide-react";

import Logo from "@/assets/dxdy/logo.png";
import { BsTwitter } from "react-icons/bs";

const footerLinks = [
  {
    title: "About",
    path: "/about",
  },
  {
    title: "FAQ",
    path: "/faq",
  },
  {
    title: "Brand assets",
    path: "/brand-assets",
  },
  {
    title: "dYdX Foundation",
    path: "/foundation",
    external: true,
  },
  {
    title: "dYdX trading",
    path: "/trading",
    external: true,
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t-2 border-[#2094FF] bg-[#17172B]">
      {/* Grid Background */}
      <div
        className="
          absolute
          inset-0
          opacity-30
          [background-image:linear-gradient(#2D2D52_1px,transparent_1px),linear-gradient(to_right,#2D2D52_1px,transparent_1px)]
          [background-size:32px_32px]
        "
      />

      <div className="relative z-20 max-w-[1400px] mx-auto px-6 lg:px-10">
        <div
          className="
            min-h-[110px]
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            gap-8
            py-8
          "
        >
          {/* Left Section */}
          <div
            className="
              flex
              flex-col
              lg:flex-row
              items-center
              gap-8
              w-full
              lg:w-auto
            "
          >
            {/* Logo */}
            <img
              src={Logo}
              alt="logo"
              className="w-[52px] object-contain"
            />

            {/* Links */}
            <div
              className="
                flex
                flex-wrap
                items-center
                justify-center
                lg:justify-start
                gap-x-8
                gap-y-5
              "
            >
              {footerLinks.map((item) => (
                <Link
                  key={item.title}
                  to={item.path}
                  className="
                    flex
                    items-center
                    gap-1
                    text-[15px]
                    text-[#D6D6E7]
                    hover:text-white
                    transition-all
                    duration-300
                    whitespace-nowrap
                  "
                >
                  {item.title}

                  {item.external && (
                    <ExternalLink size={14} strokeWidth={2} />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-5">
            <button
              className="
                text-[#D6D6E7]
                hover:text-white
                transition-all
                duration-300
              "
            >
              <BsTwitter size={20} />
            </button>

            <button
              className="
                text-[#D6D6E7]
                hover:text-white
                transition-all
                duration-300
              "
            >
              <DiscIcon size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}