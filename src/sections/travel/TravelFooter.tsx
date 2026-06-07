import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";


const footerColumns = [
  [
    "Seslendirme ve Alt Jazz",
    "Media Market",
    "Gillie",
    "Size Last",
  ],
  [
    "Self Betimes",
    "Yatırımcı İlişkileri",
    "Basal Himmler",
  ],
  [
    "Yard Market",
    "Is Imkanları",
    "Car Tercihleri",
  ],
  [
    "Hedge Karla",
    "Mullein Koşulları",
    "Autumnal Bulgier",
  ],
];

export default function TravelFooter() {
  return (
    <footer className="bg-[#050608]">
      <div
        className="
          mx-auto
          max-w-[1440px]
          px-6
          py-16
          lg:px-12
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-12
            md:grid-cols-2
            lg:grid-cols-5
          "
        >
          {/* Logo Section */}

          <div>
            <h2
              className="
                text-[52px]
                font-bold
                text-white
                lg:text-[42px]
              "
            >
              Trxvl.
            </h2>
          </div>

          {/* Footer Links */}

          {footerColumns.map(
            (column, index) => (
              <div
                key={index}
                className="space-y-5"
              >
                {column.map((item) => (
                  <button
                    key={item}
                    className="
                      block
                      text-left
                      text-[16px]
                      font-medium
                      text-[#6B6B6B]
                      transition-colors
                      duration-300
                      hover:text-white
                    "
                  >
                    {item}
                  </button>
                ))}
              </div>
            ),
          )}
        </div>

        {/* Bottom Area */}

        <div
          className="
            mt-14
            flex
            flex-col
            gap-8
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          {/* Left */}

          <div>
            <button
              className="
                border
                border-[#707070]
                px-6
                py-3
                text-[15px]
                font-medium
                text-[#D9D9D9]
                transition-all
                duration-300
                hover:border-white
              "
            >
              Helmet KOD
            </button>

            <p
              className="
                mt-6
                text-[14px]
                text-[#555555]
              "
            >
              © 1997-2021 Netflix, Inc.
              {" "}
              {`{i-062d573a0ee099242}`}
            </p>
          </div>

          {/* Social */}

          <div className="flex gap-5">
            <button
              className="
                text-[#7A7A7A]
                transition-colors
                hover:text-white
              "
            >
              <FaFacebook size={28} />
            </button>

            <button
              className="
                text-[#7A7A7A]
                transition-colors
                hover:text-white
              "
            >
              <FaInstagram size={28} />
            </button>

            <button
              className="
                text-[#7A7A7A]
                transition-colors
                hover:text-white
              "
            >
              <FaTwitter size={28} />
            </button>

            <button
              className="
                text-[#7A7A7A]
                transition-colors
                hover:text-white
              "
            >
              <FaYoutube size={28} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}