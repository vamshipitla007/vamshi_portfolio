import FooterPlate from "@/assets/chefrestaurant/footerplate.png";
import lines from "@/assets/chefrestaurant/lines.png";

export default function ChefRestaurantFooter() {
  return (
    <footer className="relative bg-lime-500 text-white mt-20 overflow-visible">
      {/* ABSOLUTE TOP IMAGE (PLATE) */}
      <img
        src={FooterPlate}
        className="absolute right-[-60px] top-[-120px] w-[320px] z-10"
      />
      <img
        src={lines}
        className="absolute right-[-60px] top-[-120px] w-[320px] z-10 rotate-[-15deg]"
      />

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-3 gap-10 relative z-20">
        {/* LEFT SECTION */}
        <div>
          {/* LOGO */}
          <div className="flex items-center gap-3 mb-6">
            <img src="/assets/logo.svg" className="w-10" />
            <div>
              <p className="font-bold">CHEF KITCHEN</p>
              <p className="text-xs">FOOD DELIVERY</p>
            </div>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mb-6">
            {/* TELEGRAM */}
            <svg
              className="w-5 h-5 text-white cursor-pointer hover:opacity-80"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9.04 15.47l-.39 4.52c.56 0 .8-.24 1.09-.53l2.62-2.5 5.43 3.97c1 .55 1.7.26 1.95-.92l3.53-16.55c.33-1.52-.55-2.12-1.52-1.75L1.6 9.3C.13 9.87.15 10.7 1.36 11.1l5.4 1.69L18.46 5.9c.55-.34 1.05-.15.64.2" />
            </svg>

            {/* INSTAGRAM */}
            <svg
              className="w-5 h-5 text-white cursor-pointer hover:opacity-80"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-2.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" />
            </svg>

            {/* FACEBOOK */}
            <svg
              className="w-5 h-5 text-white cursor-pointer hover:opacity-80"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22 12a10 10 0 10-11.5 9.9v-7h-3v-3h3v-2.3c0-3 1.8-4.7 4.6-4.7 1.3 0 2.7.24 2.7.24v3h-1.5c-1.5 0-2 .93-2 1.9V12h3.4l-.54 3h-2.86v7A10 10 0 0022 12z" />
            </svg>
          </div>

          {/* COPYRIGHT */}
          <p className="text-sm opacity-80">Chef Kitchen 2023</p>
        </div>

        {/* MIDDLE SECTION */}
        <div className="flex gap-16">
          <div className="space-y-3 text-sm">
            <p className="cursor-pointer">Menu</p>
            <p className="cursor-pointer">Delivery</p>
            <p className="cursor-pointer">FAQ</p>
            <p className="cursor-pointer">Contacts</p>
          </div>

          <div className="space-y-3 text-sm">
            <p className="cursor-pointer">Privacy Policy</p>
            <p className="cursor-pointer">Terms and Conditions</p>
            <p className="cursor-pointer">Terms and Conditions</p>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="space-y-4 text-sm">
          <p>📍 Tbilisi, Georgia</p>
          <p>📞 591902883 (9:00 - 18:00)</p>
          <p>✉ info@chef-kitchen.com</p>

          <div className="mt-6 space-y-2 text-xs opacity-90">
            <p>• Individual entrepreneur Nikita Mosin</p>
            <p>• Identification Number: 302252210</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
