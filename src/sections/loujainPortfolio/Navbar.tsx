import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F7F4EF]">
      <div className="mx-auto max-w-[1500px] border-x border-[#E5E1DB]">

        <div className="h-20 px-8 lg:px-14 flex items-center justify-between">

          {/* Logo */}

          <Link to="/" className="flex items-center">
            <h1>logo</h1>
          </Link>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-12">

            {navLinks.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`transition duration-300
                ${
                  index === 0
                    ? "font-semibold text-[#1E1E1E]"
                    : "font-medium text-[#444444] hover:text-black"
                }
                text-[18px]`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA */}

          <div className="hidden lg:block text-[#f2f2f2] font-medium">
            <Link
              to="/contact"
              className="bg-[#2D2A2A] text-[#f2f2f2]
              text-[17px]
              font-medium
              px-8
              py-4
              rounded-full
              transition
              hover:bg-black"
              style={{color:"#f2f2f2"}}
            >
              let's Connect
            </Link>
          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden"
          >
            {open ? (
              <X size={30} />
            ) : (
              <Menu size={30} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden lg:hidden bg-[#F7F4EF] border-t border-[#E5E1DB]"
            >
              <div className="flex flex-col py-6">

                {navLinks.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="px-8 py-4 text-[18px] text-[#444] font-medium hover:text-black"
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="px-8 mt-6 text-[#f2f2f2] font-medium">
                  <Link
                    to="/contact"
                    className="block w-full rounded-full bg-[#2D2A2A] py-4 text-center text-[#f2f2f2] text-[17px] font-medium"
                  >
                    let's Connect
                  </Link>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
};

export default Navbar;
