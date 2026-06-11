
const links = [
  "Главная",
  "Тарифы",
  "Отзывы",
  "FAQ",
  "Контакты",
  "Функционал",
];

export default function PubgNavBar() {
  return (
    <header
      className="
        absolute 
        z-50 
        w-full
      "
    >
      <div
        className="
        max-w-[1300px]
        mx-auto
        px-6
        h-20
        flex
        items-center
        justify-between
      "
      >
        {/* <img
          src={logo}
          className="h-8"
        /> */}

        <nav className="hidden lg:flex gap-10">
          {links.map((item, index) => (
            <button
              key={item}
              className={`
              text-[14px]
              uppercase
              font-semibold
              text-white
              ${
                index === 0 &&
                "border-b-2 border-[#FF9913]"
              }
              `}
            >
              {item}
            </button>
          ))}
        </nav>


        <div className="flex gap-3">

          <button
            className="
              bg-white 
              rounded-md 
              px-4
              h-10
              text-sm
              font-semibold
              text-[#2A355E]
              hover:bg-[#f2f2f2]
              transition
            "
          >
            RU
          </button>


          <button
            className="
            w-10
            h-10
            bg-[#FF9913]
            rounded-md
            text-white
            "
          >
            👤
          </button>

        </div>

      </div>
    </header>
  );
}