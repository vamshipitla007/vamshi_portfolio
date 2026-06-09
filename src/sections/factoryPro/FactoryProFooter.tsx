import React from "react";
import {
  ArrowUpRight,
  Phone,
  MapPin,
  Mail,
} from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const quickLinks = [
  "Home",
  "About Us",
  "Blog",
  "Services",
];

const securityLinks = [
  "Term & Condition",
  "Privacy Policy",
  "Help",
  "Contact Us",
];

const FactoryProFooter: React.FC = () => {
  return (
    <footer className="relative overflow-hidden bg-[#181818] text-white">
      {/* Background Watermark */}

      <div
        className="
        absolute
        bottom-0
        left-0
        opacity-[0.04]
        pointer-events-none
        select-none
      "
      >
        <img
          src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=80"
          alt=""
          className="w-[600px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top CTA */}

        <div
          className="
          py-16
          lg:py-20
          flex
          flex-col
          lg:flex-row
          items-start
          lg:items-center
          justify-between
          gap-10
          "
        >
          <div>
            <h2
              className="
              text-[42px]
              md:text-[56px]
              font-light
              leading-tight
              "
            >
              Ready to work with us?
            </h2>

            <p
              className="
              mt-4
              text-[#B5B5B5]
              text-[15px]
              leading-8
              max-w-[700px]
              "
            >
              Join us to experience cutting-edge
              industrial solutions that drive
              innovation and lasting success.
            </p>
          </div>

          {/* Circle Button */}

          <button
            className="
            w-28
            h-28
            rounded-full
            bg-[#F59E0B]
            flex
            items-center
            justify-center
            text-white
            transition-all
            duration-300
            hover:scale-105
          "
          >
            <ArrowUpRight size={32} />
          </button>
        </div>

        {/* Divider */}

        <div className="border-t border-white/10" />

        {/* Main Footer */}

        <div
          className="
          py-14
          grid
          lg:grid-cols-4
          md:grid-cols-2
          gap-12
          "
        >
          {/* Company */}

          <div>
            <div className="flex items-center gap-3">
              <div
                className="
                w-12
                h-12
                rounded-lg
                bg-[#F59E0B]
                flex
                items-center
                justify-center
                font-bold
                text-black
              "
              >
                FP
              </div>

              <h3 className="text-3xl font-bold">
                FactoryPro
              </h3>
            </div>

            <p
              className="
              mt-6
              text-[#B5B5B5]
              text-[15px]
              leading-8
              "
            >
              We are committed to providing
              personalized industrial solutions.
            </p>

            {/* Social */}

            <div className="flex gap-4 mt-8">
              {[FaFacebook, FaInstagram].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="
                    w-10
                    h-10
                    rounded-full
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    hover:bg-[#F59E0B]
                    transition
                  "
                  >
                    <Icon size={16} />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h4
              className="
              text-[24px]
              font-semibold
              mb-8
              "
            >
              Quick Links
            </h4>

            <ul className="space-y-5">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="
                    text-[#B5B5B5]
                    hover:text-[#F59E0B]
                    transition
                  "
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Security */}

          <div>
            <h4
              className="
              text-[24px]
              font-semibold
              mb-8
              "
            >
              Security
            </h4>

            <ul className="space-y-5">
              {securityLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="
                    text-[#B5B5B5]
                    hover:text-[#F59E0B]
                    transition
                  "
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h4
              className="
              text-[24px]
              font-semibold
              mb-8
              "
            >
              Contact
            </h4>

            <div className="space-y-5">
              <div className="flex gap-3">
                <Phone
                  size={18}
                  className="text-[#F59E0B] mt-1"
                />

                <span className="text-[#B5B5B5]">
                  +91 123654789
                </span>
              </div>

              <div className="flex gap-3">
                <Mail
                  size={18}
                  className="text-[#F59E0B] mt-1"
                />

                <span className="text-[#B5B5B5]">
                  info@domainname.com
                </span>
              </div>

              <div className="flex gap-3">
                <MapPin
                  size={18}
                  className="text-[#F59E0B] mt-1"
                />

                <span className="text-[#B5B5B5]">
                  520, West Valley,
                  <br />
                  Amin and minim
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}

        <div className="border-t border-white/10" />

        {/* Copyright */}

        <div
          className="
          py-8
          text-center
          text-[#B5B5B5]
          text-[15px]
          "
        >
          Copyright © 2024 All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default FactoryProFooter;