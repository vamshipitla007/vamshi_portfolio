// import {
//   Instagram,
//   Twitter,
//   Facebook,
//   Youtube,
// } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#233000] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-14">
        {/* Top Section */}
        <div className="flex flex-col gap-14 lg:flex-row lg:justify-between">
          {/* Logo */}
          <div className="max-w-[180px]">
            <h1 className="font-serif text-[52px] leading-[0.95] tracking-tight md:text-[70px]">
              Food
              <br />
              Zero.
            </h1>
          </div>

          {/* Contact */}
          <div className="max-w-[260px]">
            <h3 className="mb-8 font-serif text-[24px] md:text-[30px]">
              Contact
            </h3>

            <div className="space-y-6 text-sm leading-7 text-white/90">
              <div>
                <p>+1+86 852 346 000</p>
                <p>info@foodzero.com</p>
              </div>

              <div>
                <p>1959 Sepulveda Blvd.</p>
                <p>Culver City, CA, 90230</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="w-full max-w-[620px]">
            <h3 className="mb-8 font-serif text-[24px] md:text-[30px]">
              Never Miss a Recipe
            </h3>

            {/* Input */}
            <div className="flex flex-col gap-4 md:flex-row">
              <input
                type="email"
                placeholder="Email Address"
                className="
                  h-[72px]
                  w-full
                  border
                  border-white
                  bg-transparent
                  px-6
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-white/70
                "
              />

              <button
                className="
                  h-[72px]
                  min-w-[200px]
                  bg-[#5E6600]
                  px-8
                  text-lg
                  font-semibold
                  transition
                  hover:opacity-90
                "
              >
                Subscribe
              </button>
            </div>

            <p className="mt-4 text-[11px] text-white/80">
              Join our subscribers and get best recipe
              delivered each week!
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-20 border-t border-dashed border-white/60 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            {/* Copyright */}
            <p className="text-sm text-white/90">
              © 2020 Zero Inc. All rights Reserved
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-5">
              <a
                href="/"
                className="transition hover:scale-110"
              >
                {/* <Instagram size={20} /> */}
              </a>

              <a
                href="/"
                className="transition hover:scale-110"
              >
                {/* <Twitter size={20} /> */}
              </a>

              <a
                href="/"
                className="transition hover:scale-110"
              >
                {/* <Facebook size={20} /> */}
              </a>

              <a
                href="/"
                className="transition hover:scale-110"
              >
                {/* <Youtube size={20} /> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}