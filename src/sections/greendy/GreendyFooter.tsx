import {
  ChevronDown,
} from "lucide-react";

import { FaFacebook, FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

export default function GreendyFooter() {
  return (
    <footer className="w-full bg-[#081120] text-white">
      
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-14 lg:py-16">
        
        {/* Top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          
          {/* Logo + Description */}
          <div>
            
            {/* Logo */}
            <div
              className="
                w-[42px]
                h-[24px]
                bg-[#10B981]
                rounded-[2px]
                flex
                items-center
                justify-center
              "
            >
              <span className="text-[8px] font-bold text-white">
                LOGO
              </span>
            </div>

            {/* Description */}
            <p
              className="
                mt-5
                text-[13px]
                leading-7
                text-[#D1D5DB]
                max-w-[240px]
              "
            >
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              Accumsan, pellentesque aenean sed
              vel non suspendisse.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h3
              className="
                text-[18px]
                font-semibold
                mb-5
              "
            >
              Menu
            </h3>

            <div className="flex flex-col gap-4">
              
              <a
                href="/"
                className="
                  text-[13px]
                  text-[#F8FAFC]
                  hover:text-[#10B981]
                  transition-colors
                "
              >
                Who we are
              </a>

              <a
                href="/"
                className="
                  flex
                  items-center
                  gap-1
                  text-[13px]
                  text-[#F8FAFC]
                  hover:text-[#10B981]
                  transition-colors
                "
              >
                What we do

                <ChevronDown size={13} />
              </a>

              <a
                href="/"
                className="
                  text-[13px]
                  text-[#F8FAFC]
                  hover:text-[#10B981]
                  transition-colors
                "
              >
                Reviews
              </a>

              <a
                href="/"
                className="
                  text-[13px]
                  text-[#F8FAFC]
                  hover:text-[#10B981]
                  transition-colors
                "
              >
                Blog
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="
                text-[18px]
                font-semibold
                mb-5
              "
            >
              Contact
            </h3>

            <div className="space-y-5">
              
              <a
                href="tel:+1875401027"
                className="
                  block
                  text-[14px]
                  font-semibold
                  text-[#10B981]
                "
              >
                +1 (875) 40 1027
              </a>

              <a
                href="mailto:support@company.com"
                className="
                  block
                  text-[14px]
                  font-semibold
                  text-[#10B981]
                "
              >
                Support@company.com
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <div
              className="
                flex
                items-center
                gap-6
                lg:justify-end
              "
            >
              
              <a
                href="/"
                className="
                  text-[#10B981]
                  hover:opacity-80
                  transition-opacity
                "
              >
                <BsInstagram size={28} />
              </a>

              <a
                href="/"
                className="
                  text-[#10B981]
                  hover:opacity-80
                  transition-opacity
                "
              >
                <FaFacebook size={28} />
              </a>

              <a
                href="/"
                className="
                  text-[#10B981]
                  hover:opacity-80
                  transition-opacity
                "
              >
                <FaTwitter size={28} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="
            w-full
            h-[1px]
            bg-[#10B981]
            mt-12
            lg:mt-14
          "
        />

        {/* Bottom */}
        <div
          className="
            pt-7
            flex
            flex-col
            sm:flex-row
            items-center
            justify-between
            gap-5
          "
        >
          
          {/* Copyright */}
          <p
            className="
              text-[13px]
              text-[#F8FAFC]
              text-center
              sm:text-left
            "
          >
            Copyright 2021 Greendy All Right
            Reserve
          </p>

          {/* Policies */}
          <div
            className="
              flex
              items-center
              gap-6
            "
          >
            <a
              href="/"
              className="
                text-[13px]
                text-[#F8FAFC]
                hover:text-[#10B981]
                transition-colors
              "
            >
              Term of use
            </a>

            <a
              href="/"
              className="
                text-[13px]
                text-[#F8FAFC]
                hover:text-[#10B981]
                transition-colors
              "
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}