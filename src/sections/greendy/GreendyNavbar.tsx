import {
  ArrowRight,
  ChevronDown,
  LayoutGrid,
  MonitorPlay,
  Search,
  Share2,
  Menu,
  X,
} from "lucide-react";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    id: 1,
    title: "Design",
    description: "Create & developpe your brand",
    icon: LayoutGrid,
  },
  {
    id: 2,
    title: "Digital Advertising",
    description: "We grow your online visibility",
    icon: MonitorPlay,
  },
  {
    id: 3,
    title: "SEO",
    description: "We grow you website position",
    icon: Search,
  },
  {
    id: 4,
    title: "Social Media",
    description: "We manage you social media",
    icon: Share2,
  },
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [mobileDropdown, setMobileDropdown] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  /* Close dropdown outside click */
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    window.addEventListener("mousedown", handleClick);

    return () => window.removeEventListener("mousedown", handleClick);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* NAVBAR */}
      <header
        className="
          w-full
          bg-white
          dark:bg-[#081120]
          transition-colors
          duration-300
          border-b
          border-[#EEF2F7]
          dark:border-[#172033]
          relative
          z-50
        "
      >
        <div
          className="
            max-w-[1280px]
            mx-auto
            px-5
            sm:px-8
            lg:px-10
            h-[74px]
            flex
            items-center
            justify-between
          "
        >
          {/* Logo */}
          <div className="shrink-0">
            <div
              className="
                w-[46px]
                h-[28px]
                rounded-[3px]
                bg-[#10B981]
                flex
                items-center
                justify-center
              "
            >
              <span
                className="
                  text-[9px]
                  font-bold
                  tracking-wide
                  text-white
                "
              >
                LOGO
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav
            className="
              hidden
              lg:flex
              items-center
              gap-7
              relative
            "
          >
            <a
              href="/"
              className="
                text-[12px]
                font-medium
                text-[#0F172A]
                dark:text-white
                hover:text-[#10B981]
                transition-colors
              "
            >
              Who we are
            </a>

            {/* DROPDOWN */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="
                  flex
                  items-center
                  gap-1
                  text-[12px]
                  font-medium
                  text-[#10B981]
                "
              >
                What we do
                <ChevronDown
                  size={13}
                  className={`
                    transition-transform
                    duration-300
                    ${dropdownOpen ? "rotate-180" : ""}
                  `}
                />
              </button>

              {/* Dropdown Box */}
              <div
                className={`
                  absolute
                  left-1/2
                  -translate-x-1/2
                  top-[42px]
                  w-[310px]
                  rounded-[10px]
                  bg-white
                  dark:bg-[#0E1A2D]
                  shadow-[0_10px_40px_rgba(15,23,42,0.08)]
                  border
                  border-[#EEF2F7]
                  dark:border-[#172033]
                  p-4
                  transition-all
                  duration-300
                  ${
                    dropdownOpen
                      ? `
                        opacity-100
                        visible
                        translate-y-0
                      `
                      : `
                        opacity-0
                        invisible
                        -translate-y-2
                      `
                  }
                `}
              >
                <div className="space-y-2">
                  {services.map((item) => {
                    const Icon = item.icon;

                    return (
                      <button
                        key={item.id}
                        className="
                          w-full
                          flex
                          items-start
                          gap-4
                          rounded-[8px]
                          px-4
                          py-3
                          hover:bg-[#F8FAFC]
                          dark:hover:bg-[#081120]
                          transition-all
                          text-left
                        "
                      >
                        {/* Icon */}
                        <div
                          className="
                            w-10
                            h-10
                            rounded-[8px]
                            bg-[#10B981]/10
                            flex
                            items-center
                            justify-center
                            shrink-0
                          "
                        >
                          <Icon size={18} className="text-[#10B981]" />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h4
                            className="
                              text-[13px]
                              font-semibold
                              text-[#0F172A]
                              dark:text-white
                            "
                          >
                            {item.title}
                          </h4>

                          <p
                            className="
                              mt-1
                              text-[11px]
                              leading-5
                              text-[#6B7280]
                              dark:text-[#94A3B8]
                            "
                          >
                            {item.description}
                          </p>
                        </div>

                        <ArrowRight
                          size={14}
                          className="
                            text-[#10B981]
                            mt-1
                          "
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <a
              href="/"
              className="
                text-[12px]
                font-medium
                text-[#0F172A]
                dark:text-white
                hover:text-[#10B981]
                transition-colors
              "
            >
              Reviews
            </a>

            <a
              href="/"
              className="
                text-[12px]
                font-medium
                text-[#0F172A]
                dark:text-white
                hover:text-[#10B981]
                transition-colors
              "
            >
              Blog
            </a>
          </nav>

          {/* Right */}
          <div className="flex items-center gap-3">
            {/* CTA */}
            <button
              onClick={() => setOpenModal(true)}
              className="
                hidden
                sm:flex
                items-center
                gap-2
                h-[42px]
                px-5
                rounded-[5px]
                bg-[#10B981]
                hover:bg-[#059669]
                transition-all
                duration-300
                text-white
                text-[11px]
                font-semibold
              "
            >
              Get you free website review
              <ArrowRight size={14} />
            </button>

            {/* Mobile Menu */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="
                lg:hidden
                w-10
                h-10
                flex
                items-center
                justify-center
                text-[#10B981]
              "
            >
              {mobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            lg:hidden
            fixed
            inset-0
            bg-[#10B981]
            z-40
            transition-all
            duration-300
            ${
              mobileMenu
                ? `
                  opacity-100
                  visible
                `
                : `
                  opacity-0
                  invisible
                `
            }
          `}
        >
          {/* Top */}
          <div
            className="
              px-9
              h-[72px]
              flex
              items-center
              justify-between
              border-b
              border-white/10
            "
          >
            {/* Logo */}
            <div
              className="
                w-[50px]
                h-[30px]
                rounded-[3px]
                bg-white
                flex
                items-center
                justify-center
              "
            >
              <span
                className="
                  text-[10px]
                  font-bold
                  text-[#10B981]
                "
              >
                LOGO
              </span>
            </div>

            {/* Close */}
            <button onClick={() => setMobileMenu(false)} className="text-white">
              <X size={28} />
            </button>
          </div>

          {/* Menu */}
          <div
            className="
              px-10
              pt-10
              flex
              flex-col
              h-[calc(100vh-72px)]
            "
          >
            {/* Links */}
            <div className="space-y-8">
              <button
                className="
                  block
                  text-left
                  text-[24px]
                  font-semibold
                  text-white
                "
              >
                Who we are
              </button>

              {/* Mobile Dropdown */}
              <div>
                <button
                  onClick={() => setMobileDropdown(!mobileDropdown)}
                  className="
                    flex
                    items-center
                    gap-2
                    text-[24px]
                    font-semibold
                    text-white
                  "
                >
                  What we do
                  <ChevronDown
                    size={22}
                    className={`
                      transition-transform
                      duration-300
                      ${mobileDropdown ? "rotate-180" : ""}
                    `}
                  />
                </button>

                {/* Mobile Services */}
                <div
                  className={`
                    overflow-hidden
                    transition-all
                    duration-300
                    ${
                      mobileDropdown
                        ? `
                          max-h-[500px]
                          opacity-100
                          mt-6
                        `
                        : `
                          max-h-0
                          opacity-0
                        `
                    }
                  `}
                >
                  <div
                    className="
                      bg-white
                      rounded-[18px]
                      p-5
                      space-y-4
                    "
                  >
                    {services.map((item) => {
                      const Icon = item.icon;

                      return (
                        <button
                          key={item.id}
                          className="
                              flex
                              items-start
                              gap-4
                              text-left
                            "
                        >
                          <div
                            className="
                                w-10
                                h-10
                                rounded-[8px]
                                bg-[#10B981]/10
                                flex
                                items-center
                                justify-center
                                shrink-0
                              "
                          >
                            <Icon
                              size={18}
                              className="
                                  text-[#10B981]
                                "
                            />
                          </div>

                          <div>
                            <h4
                              className="
                                  text-[16px]
                                  font-semibold
                                  text-[#0F172A]
                                "
                            >
                              {item.title}
                            </h4>

                            <p
                              className="
                                  mt-1
                                  text-[13px]
                                  leading-5
                                  text-[#6B7280]
                                "
                            >
                              {item.description}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <button
                className="
                  block
                  text-left
                  text-[24px]
                  font-semibold
                  text-white
                "
              >
                Reviews
              </button>

              <button
                className="
                  block
                  text-left
                  text-[24px]
                  font-semibold
                  text-white
                "
              >
                Blog
              </button>
            </div>

            {/* Bottom CTA */}
            <div className="mt-auto pb-10">
              <button
                onClick={() => {
                  setOpenModal(true);
                  setMobileMenu(false);
                }}
                className="
                  w-full
                  h-[56px]
                  rounded-[8px]
                  bg-[#4ADE80]
                  text-white
                  text-[15px]
                  font-semibold
                  flex
                  items-center
                  justify-center
                  gap-2
                "
              >
                Get you free website review
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MODAL */}
      <div
        className={`
          fixed
          inset-0
          z-[60]
          flex
          items-center
          justify-center
          px-4
          transition-all
          duration-300
          ${
            openModal
              ? `
                opacity-100
                visible
              `
              : `
                opacity-0
                invisible
              `
          }
        `}
      >
        {/* Overlay */}
        <div
          onClick={() => setOpenModal(false)}
          className="
            absolute
            inset-0
            bg-black/40
            backdrop-blur-[2px]
          "
        />

        {/* Modal Card */}
        <div
          className="
            relative
            w-full
            max-w-[720px]
            rounded-[16px]
            bg-white
            p-6
            sm:p-8
            shadow-2xl
          "
        >
          {/* Close */}
          <button
            onClick={() => setOpenModal(false)}
            className="
              absolute
              -top-4
              -right-4
              w-12
              h-12
              rounded-full
              bg-white
              shadow-lg
              flex
              items-center
              justify-center
              text-[#0F172A]
            "
          >
            <X size={24} />
          </button>

          {/* Heading */}
          <h2
            className="
              text-[28px]
              sm:text-[38px]
              font-bold
              leading-[115%]
              text-[#0F172A]
              max-w-[520px]
            "
          >
            Get Your Free Website Checkup
          </h2>

          {/* Desc */}
          <p
            className="
              mt-4
              text-[14px]
              leading-7
              text-[#6B7280]
              max-w-[560px]
            "
          >
            Discover main benefits and issues of your website and how to fix
            them.
          </p>

          {/* Form */}
          <div
            className="
              mt-8
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-4
            "
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name*"
              className="
            h-[56px]
            rounded-[10px]
            border-2
            border-[#10B981]
            px-5
            text-[14px]
            text-[#0F172A]
            placeholder:text-[#94A3B8]
            placeholder:text-[14px]
            outline-none
  "
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Adress*"
              className="
                h-[56px]
                rounded-[10px]
                border
                border-[#CBD5E1]
                px-5
                text-[14px]
                            text-[#0F172A]
            placeholder:text-[#94A3B8]
            placeholder:text-[14px]
                outline-none
              "
            />

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="
                h-[56px]
                rounded-[10px]
                border
                border-[#CBD5E1]
                px-5
                text-[14px]
                            text-[#0F172A]
            placeholder:text-[#94A3B8]
            placeholder:text-[14px]
                outline-none
              "
            />

            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="Website Url"
              className="
                h-[56px]
                rounded-[10px]
                border
                border-[#CBD5E1]
                px-5
                text-[14px]
                            text-[#0F172A]
            placeholder:text-[#94A3B8]
            placeholder:text-[14px]
                outline-none
              "
            />
          </div>

          {/* Message */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message..."
            className="
              mt-4
              w-full
              h-[170px]
              rounded-[12px]
              border
              border-[#CBD5E1]
              p-5
              text-[14px]
              resize-none
                          text-[#0F172A]
            placeholder:text-[#94A3B8]
            placeholder:text-[14px]
              outline-none
            "
          />

          {/* Submit */}
          <button
            className="
              mt-5
              h-[50px]
              px-7
              rounded-[8px]
              bg-[#10B981]
              hover:bg-[#059669]
              transition-all
              duration-300
              text-white
              text-[13px]
              font-semibold
            "
          >
            Get My Free Checkup
          </button>
        </div>
      </div>
    </>
  );
}
