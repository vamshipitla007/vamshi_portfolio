const RestaurantFooter = () => {
  return (
    <footer className="bg-[#311F09] text-[#E3E2E0] px-6 md:px-20 py-16">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Description */}
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#FF8A00] rounded-full flex items-center justify-center font-bold text-white">
              D
            </div>
            <span className="text-[#FF8A00] font-semibold text-lg">
              Delizioso
            </span>
          </div>

          <p className="mt-6 text-sm leading-relaxed max-w-[250px]">
            Viverra gravida morbi egestas facilisis tortor netus non duis
            tempor.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {/* Twitter */}
            <div className="w-10 h-10 bg-[#E3E2E0] text-[#311F09] rounded-full flex items-center justify-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M22 5.8c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.3 1.7-2.2-.8.5-1.7.9-2.6 1.1A4 4 0 0012 8.1c0 .3 0 .6.1.9A11.3 11.3 0 013 4.9a4 4 0 001.2 5.3c-.6 0-1.2-.2-1.7-.5 0 2 1.4 3.7 3.3 4-.3.1-.7.1-1 .1-.2 0-.5 0-.7-.1.5 1.6 2 2.8 3.8 2.8A8.1 8.1 0 012 18.6 11.5 11.5 0 008.3 20c7.5 0 11.6-6.2 11.6-11.6v-.5c.8-.6 1.5-1.3 2.1-2.1z" />
              </svg>
            </div>

            {/* Instagram */}
            <div className="w-10 h-10 bg-[#E3E2E0] text-[#311F09] rounded-full flex items-center justify-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 5.5A4.5 4.5 0 1112 16a4.5 4.5 0 010-9zm5.5-.9a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0zM12 9a3 3 0 100 6 3 3 0 000-6z" />
              </svg>
            </div>

            {/* Facebook */}
            <div className="w-10 h-10 bg-[#E3E2E0] text-[#311F09] rounded-full flex items-center justify-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M13 22v-9h3l1-4h-4V7c0-1.2.3-2 2-2h2V1.3C16.6 1.1 15.5 1 14.3 1 11.7 1 10 2.6 10 5.5V9H7v4h3v9h3z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Page Links */}
        <div>
          <h4 className="text-[#FF8A00] font-semibold mb-4">Page</h4>
          <ul className="space-y-3 text-sm">
            <li>Home</li>
            <li>Menu</li>
            <li>Order online</li>
            <li>Catering</li>
            <li>Reservation</li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h4 className="text-[#FF8A00] font-semibold mb-4">Information</h4>
          <ul className="space-y-3 text-sm">
            <li>About us</li>
            <li>Testimonial</li>
            <li>Event</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[#FF8A00] font-semibold mb-4">Get in touch</h4>
          <ul className="space-y-3 text-sm leading-relaxed">
            <li>
              3247 Johnson Ave, Bronx, NY <br />
              10463, Amerika Serikat
            </li>
            <li>delizioso@gmail.com</li>
            <li>+123 4567 8901</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm mt-16 text-[#E3E2E0]/80">
        Copyright © 2022 Delizioso
      </div>
    </footer>
  );
};

export default RestaurantFooter;
