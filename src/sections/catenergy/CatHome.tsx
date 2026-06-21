import { useState } from "react";
import logoIcon from "@/assets/catenergy/Image8.png";
import logo from "@/assets/catenergy/Image3.png";
import heroProduct from "@/assets/catenergy/Image2.png";
// import heroCat from "@/assets/catenergy/Image1.png";
import slimCat from "@/assets/catenergy/Image6.png";
import proCat from "@/assets/catenergy/Image7.png";
import beforeCat from "@/assets/catenergy/Image4.png";
import afterCat from "@/assets/catenergy/Image5.png";
import { Leaf, CookingPot, Utensils, AlarmClock } from "lucide-react";
import {
  ChevronRight,
} from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

/**
 * Hero1 — Cat Energy landing page hero section
 * Pixel-matched to Figma:
 *  - Mobile/Tablet (<1024px): single green card, white headline, centered jar
 *  - Desktop (>=1024px): split layout — white left panel / green right panel
 *
 * Colors (sampled from Figma):
 *  - Brand green:      #8DC63F
 *  - Brand yellow:      #F7A823
 *  - Headline black:    #1A1A1A
 *  - Body gray:         #6B7280
 *  - Nav active green:  #8DC63F
 */

interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

const NAV_LINKS: NavLink[] = [
  { label: "ГЛАВНАЯ", href: "#main", active: true },
  { label: "КАТАЛОГ ПРОДУКЦИИ", href: "#catalog" },
  { label: "ПОДБОР ПРОГРАММЫ", href: "#program" },
];

interface Hero1Props {
  onSelectProgram?: () => void;
}




const Hero4 = () => {
  return (
    <section className="bg-[#F2F2F2] mt-10">
      {/* MAP SECTION */}
      <div className="relative">
        <iframe
          title="Cat Energy Location"
          src="https://maps.google.com/maps?q=Saint%20Petersburg%20Russia&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="
            w-full
            h-[360px]
            md:h-[500px]
            lg:h-[400px]
            border-0
            grayscale-[15%]
          "
          loading="lazy"
        />

        {/* Desktop Dealer Card */}
        <div
          className="
            hidden
            lg:flex
            absolute
            left-[8%]
            top-1/2
            -translate-y-1/2
            bg-white
            w-[570px]
            h-[200px]
            px-14
            items-center
            justify-between
            shadow-sm
            z-20
          "
        >
          <div>
            <h3
              className="
                text-[30px]
                leading-[1.1]
                uppercase
                font-medium
                text-[#111111]
                max-w-[220px]
              "
            >
              Приглашаем
              <br />
              к сотрудничеству
              <br />
              дилеров!
            </h3>
          </div>

          <div>
            <p
              className="
                text-[18px]
                text-[#444444]
                leading-8
              "
            >
              ул. Большая
              <br />
              Конюшенная, д. 19/8
            </p>

            <p
              className="
                mt-4
                text-[18px]
                text-[#444444]
              "
            >
              Санкт-Петербург
            </p>
          </div>
        </div>

        {/* Desktop Marker */}
        <div
          className="
            hidden
            lg:block
            absolute
            left-[66%]
            top-[50%]
            -translate-x-1/2
            -translate-y-1/2
            z-20
          "
        >
          <div className="relative">
            <img
              src={logoIcon}
              alt="marker"
              className="w-[80px]"
            />

            <div
              className="
                absolute
                left-1/2
                -translate-x-1/2
                bottom-[-12px]
                w-[40px]
                h-[12px]
                bg-black/20
                blur-md
                rounded-full
              "
            />
          </div>
        </div>
      </div>

      {/* Mobile Address Block */}
      <div className="lg:hidden bg-white px-6 py-8">
        <div className="flex justify-between gap-6">
          <h3
            className="
              text-[18px]
              uppercase
              font-medium
              leading-[1.2]
              text-[#111111]
            "
          >
            Приглашаем
            <br />
            к сотрудничеству
            <br />
            дилеров!
          </h3>

          <div>
            <p
              className="
                text-[14px]
                leading-6
                text-[#444444]
              "
            >
              ул. Большая
              <br />
              Конюшенная,
              <br />
              д. 19/8
            </p>

            <p
              className="
                mt-3
                text-[14px]
                text-[#444444]
              "
            >
              Санкт-Петербург
            </p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-[#F2F2F2]">
        <div
          className="
            max-w-[1220px]
            mx-auto
            px-6
            py-10
          "
        >
          <div
            className="
              flex
              flex-col
              md:flex-row
              items-center
              justify-between
              gap-8
            "
          >
            {/* Logo */}
            <h2
              className="
                text-[34px]
                md:text-[40px]
                font-bold
                uppercase
                text-[#111111]
              "
            >
              CAT
              <span className="font-normal ml-2">
                ENERGY
              </span>
            </h2>

            {/* Social */}
            <div
              className="
                flex
                items-center
                gap-8
                text-[#666666]
              "
            >
              <button className="hover:text-[#68B738] transition-colors">
                VK
              </button>

              <button className="hover:text-[#68B738] transition-colors">
                <FaInstagram size={22} />
              </button>

              <button className="hover:text-[#68B738] transition-colors">
                <FaFacebook size={22} />
              </button>
            </div>

            {/* HTML Academy */}
            <div
              className="
                flex
                items-center
                gap-4
              "
            >
              <span
                className="
                  text-[16px]
                  text-[#444444]
                "
              >
                HTML Academy
              </span>

              <div
                className="
                  w-10
                  h-10
                  border
                  border-[#BEBEBE]
                  flex
                  items-center
                  justify-center
                  text-[#666666]
                "
              >
                <ChevronRight size={18} />
              </div>
            </div>
          </div>

          {/* Mobile Dividers */}
          <div className="md:hidden mt-8 border-t border-[#D9D9D9]" />
        </div>
      </footer>
    </section>
  );
};


const Hero3 = () => {
  const [position, setPosition] = useState(50);

  return (
    <section className="bg-[#F2F2F2] overflow-hidden">
      <div className="max-w-[1220px] mx-auto">
        <div className="grid lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="px-6 md:px-10 lg:px-0 py-12 lg:py-20">
            <h2
              className="
                text-[#111111]
                font-medium
                text-[42px]
                md:text-[52px]
                lg:text-[60px]
                leading-none
              "
            >
              Живой пример
            </h2>

            <p
              className="
                mt-10
                text-[#444444]
                text-[14px]
                md:text-[16px]
                leading-8
                max-w-[440px]
              "
            >
              Борис сбросил 5 кг за 2 месяца, просто заменив свой обычный корм
              на Cat Energy Slim. Отличный результат без изнуряющих тренировок!
              При этом он не менял своих привычек и по-прежнему спит по 16 часов
              в день.
            </p>

            {/* STATS */}
            <div className="flex gap-4 md:gap-8 mt-10">
              <div
                className="
                  w-[125px]
                  md:w-[165px]
                  h-[80px]
                  border
                  border-[#CDCDCD]
                  flex
                  flex-col
                  items-center
                  justify-center
                "
              >
                <h3 className="text-[28px] font-medium text-[#111111]">5 КГ</h3>

                <span className="text-[12px] text-[#666666]">
                  снижение веса
                </span>
              </div>

              <div
                className="
                  w-[125px]
                  md:w-[165px]
                  h-[80px]
                  border
                  border-[#CDCDCD]
                  flex
                  flex-col
                  items-center
                  justify-center
                "
              >
                <h3 className="text-[28px] font-medium text-[#111111]">
                  60 ДНЕЙ
                </h3>

                <span className="text-[12px] text-[#666666]">
                  затрачено времени
                </span>
              </div>
            </div>

            {/* COST */}
            <div
              className="
                mt-10
                flex
                flex-col
                md:flex-row
                gap-2
                md:gap-10
              "
            >
              <span
                className="
                  uppercase
                  text-[18px]
                  font-medium
                  text-[#111111]
                "
              >
                Затраты на питание:
              </span>

              <span
                className="
                  uppercase
                  text-[18px]
                  font-medium
                  text-[#111111]
                "
              >
                15 000 РУБ.
              </span>
            </div>
          </div>

          {/* RIGHT IMAGE COMPARISON */}
          <div
            className="
              relative
              bg-[#EAEAEA]
              min-h-[500px]
              lg:min-h-[640px]
              flex
              items-center
              justify-center
              px-6
            "
          >
            <div
              className="
                relative
                w-full
                max-w-[520px]
                h-[420px]
                md:h-[500px]
              "
            >
              {/* BEFORE */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${position}%` }}
              >
                <img
                  src={beforeCat}
                  alt=""
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-contain
                  "
                />
              </div>
              <div
                className="absolute inset-0 overflow-hidden"
              >
                {/* AFTER */}
                <img
                  src={afterCat}
                  alt=""
                  className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-contain
                  
                "
                  style={{ marginLeft: "250px", marginBottom:"100px" }}
                />
              </div>
              {/* DIVIDER */}
              <div
                className="
                  absolute
                  top-0
                  bottom-0
                  w-[2px]
                  bg-white
                  shadow
                "
                style={{ left: `${position}%` }}
              />

              {/* RANGE */}
              <input
                type="range"
                min="0"
                max="100"
                value={position}
                onChange={(e) => setPosition(Number(e.target.value))}
                className="
                  absolute
                  bottom-[-70px]
                  left-0
                  w-full
                  accent-[#68B738]
                "
              />
            </div>

            {/* LABELS */}
            <div
              className="
                absolute
                bottom-8
                left-8
                text-[20px]
                uppercase
                font-medium
                text-[#111111]
              "
            >
              Было
            </div>

            <div
              className="
                absolute
                bottom-8
                right-8
                text-[20px]
                uppercase
                font-medium
                text-[#111111]
              "
            >
              Стало
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Hero1: React.FC<Hero1Props> = ({ onSelectProgram }) => {
  return (
    <section className="w-full bg-white">
      {/* ============ MOBILE / TABLET (<lg) ============ */}
      <div className="lg:hidden">
        <div className="mx-auto max-w-[480px] px-4 pt-4">
          {/* Logo + burger row */}
          <div className="flex items-center justify-between py-3">
            <a href="#main" className="flex items-center gap-2">
              <img src={logo} alt="Cat Energy" className="h-7 w-7" />
              <span className="text-base font-extrabold tracking-tight text-[#1A1A1A]">
                CAT <span className="font-semibold">ENERGY</span>
              </span>
            </a>
            <button
              aria-label="Открыть меню"
              className="flex h-8 w-8 flex-col items-center justify-center gap-[3px]"
            >
              <span className="h-[2px] w-5 bg-[#1A1A1A]" />
              <span className="h-[2px] w-5 bg-[#1A1A1A]" />
              <span className="h-[2px] w-5 bg-[#1A1A1A]" />
            </button>
          </div>

          {/* Green hero card */}
          <div className="relative overflow-hidden rounded-md bg-[#8DC63F] px-5 pb-6 pt-7">
            {/* decorative circles */}
            <span className="pointer-events-none absolute -right-6 top-16 h-16 w-16 rounded-full bg-white/10" />
            <span className="pointer-events-none absolute right-4 top-40 h-20 w-20 rounded-full bg-[#F7A823]" />

            <h1 className="relative z-10 max-w-[230px] text-[26px] font-extrabold leading-[1.15] text-white">
              Функциональное питание для котов
            </h1>

            <p className="relative z-10 mt-3 max-w-[220px] text-[12px] font-semibold uppercase tracking-wide text-white/90">
              Занялся собой? Займись котом!
            </p>

            {/* Jar image */}
            <div className="relative z-10 mx-auto mt-2 flex h-[210px] w-full items-center justify-center">
              <img
                src={heroProduct}
                alt="Cat Energy Pro — Курица, 500 г"
                className="h-[200px] w-auto -rotate-[8deg] object-contain drop-shadow-xl"
              />
            </div>

            <button
              type="button"
              onClick={onSelectProgram}
              className="relative z-10 mt-2 w-full rounded-sm border-2 border-white bg-[#8DC63F] py-3 text-[13px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-[#8DC63F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Подобрать программу
            </button>
          </div>
        </div>
      </div>

      {/* ============ DESKTOP (>=lg) ============ */}
      <div className="hidden lg:block">
        <div className="flex min-h-[560px] w-full">
          {/* LEFT — white panel */}
          <div className="flex w-1/2 flex-col px-10 xl:px-20">
            {/* Logo */}
            <div className="flex items-center gap-3 pt-8">
              <img src={logo} alt="Cat Energy" className="h-10 w-10" />
              <span className="text-xl font-extrabold tracking-tight text-[#1A1A1A]">
                CAT <span className="font-semibold">ENERGY</span>
              </span>
            </div>

            {/* Copy block, vertically centered in remaining space */}
            <div className="flex flex-1 flex-col justify-center pb-16">
              <h1 className="max-w-[480px] text-[44px] font-extrabold leading-[1.15] text-[#1A1A1A] xl:text-[52px]">
                Функциональное питание для котов
              </h1>

              <p className="mt-5 text-[15px] font-semibold uppercase tracking-wide text-[#6B7280]">
                Занялся собой? Займись котом!
              </p>

              <button
                type="button"
                onClick={onSelectProgram}
                className="mt-7 w-fit rounded-sm bg-[#8DC63F] px-7 py-4 text-[14px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#7AB332] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8DC63F]"
              >
                Подобрать программу
              </button>
            </div>
          </div>

          {/* RIGHT — green panel */}
          <div className="relative flex w-1/2 items-center overflow-hidden bg-[#8DC63F]">
            {/* faded cat face background (optional decorative image) */}
            <div className="absolute inset-0 bg-[#8DC63F]" />

            {/* Nav */}
            <nav className="absolute left-0 right-0 top-0 z-20 flex items-center justify-center gap-10 py-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-[13px] font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-80 ${
                    link.active ? "border-b-2 border-white pb-1" : "opacity-90"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* decorative circles */}
            <span className="pointer-events-none absolute left-12 top-1/3 h-6 w-6 rounded-full bg-white/15" />
            <span className="pointer-events-none absolute bottom-20 left-24 h-28 w-28 rounded-full bg-[#F7A823]" />

            {/* Jar image */}
            <div className="relative z-10 flex w-full items-center justify-center">
              <img
                src={heroProduct}
                alt="Cat Energy Pro — Курица, 500 г"
                className="h-[300px] w-auto -rotate-[10deg] object-contain xl:h-[300px] mr-60"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const programs = [
  {
    id: 1,
    title: "ПОХУДЕНИЕ",
    image: slimCat,
    catalog: "КАТАЛОГ SLIM",
    description:
      "Ваш кот весит больше собаки и почти утратил способность лазить по деревьям? Пора на диету! Cat Energy Slim поможет вашему питомцу сбросить лишний вес.",
  },
  {
    id: 2,
    title: "НАБОР МАССЫ",
    image: proCat,
    catalog: "КАТАЛОГ PRO",
    description:
      "Заработать авторитет среди дворовых котов и даже собак? Серия Cat Energy Pro поможет вашему коту нарастить необходимые мышцы!",
  },
];

const steps = [
  {
    id: "1",
    icon: Leaf,
    text: "Функциональное питание содержит только полезные питательные вещества.",
  },
  {
    id: "2",
    icon: CookingPot,
    text: "Выпускается в виде порошка, который нужно лишь залить кипятком и готово.",
  },
  {
    id: "3",
    icon: Utensils,
    text: "Замените один-два приема обычной еды на наше функциональное питание.",
  },
  {
    id: "4",
    icon: AlarmClock,
    text: "Уже через месяц наслаждайтесь изменениями к лучшему вашего питомца!",
  },
];

const Hero2 = () => {
  return (
    <section className="w-full bg-[#F2F2F2] py-10 md:py-14 lg:py-20">
      <div className="max-w-[1220px] mx-auto px-5 md:px-8 lg:px-0">
        {/* PROGRAMS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          {programs.map((item) => (
            <div
              key={item.id}
              className="
                bg-[#F7F7F7]
                p-6
                md:p-8
                lg:p-10
                relative
                overflow-hidden
                min-h-[280px]
              "
            >
              <div className="flex items-center gap-5">
                <div
                  className="
                    w-[70px]
                    h-[70px]
                    md:w-[90px]
                    md:h-[90px]
                    rounded-full
                    bg-[#68B738]
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-[65px] md:w-[85px] object-contain"
                  />
                </div>

                <h3
                  className="
                    text-[#111111]
                    font-medium
                    text-[24px]
                    md:text-[30px]
                  "
                >
                  {item.title}
                </h3>
              </div>

              <p
                className="
                  mt-8
                  text-[#444444]
                  leading-7
                  text-[15px]
                  md:text-[16px]
                  max-w-[460px]
                "
              >
                {item.description}
              </p>

              <div
                className="
                  w-full
                  h-[1px]
                  bg-[#D9D9D9]
                  my-7
                "
              />

              <button
                className="
                  flex
                  items-center
                  gap-4
                  uppercase
                  text-[#111111]
                  text-[16px]
                  font-medium
                  hover:gap-6
                  duration-300
                "
              >
                {item.catalog}
                <span>→</span>
              </button>
            </div>
          ))}
        </div>

        {/* HOW IT WORKS */}
        <div className="mt-14 lg:mt-20">
          <h2
            className="
              text-[#111111]
              text-[42px]
              md:text-[52px]
              font-medium
            "
          >
            Как это работает
          </h2>

          <div
            className="
              mt-12
              grid
              grid-cols-2
              lg:grid-cols-4
              gap-8
              lg:gap-10
            "
          >
            {steps.map((step) => (
              <div
                key={step.id}
                className="
                  relative
                  min-h-[240px]
                "
              >
                <div
                  className="
                    absolute
                    right-0
                    top-0
                    text-[120px]
                    md:text-[180px]
                    font-bold
                    text-[#F0F0F0]
                    leading-none
                    z-0
                  "
                >
                  {step.id}
                </div>

                <div className="relative z-10">
                  <div
                    className="
                      w-[80px]
                      h-[80px]
                      bg-[#68B738]
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <step.icon
                      size={32}
                      strokeWidth={1.8}
                      className="text-white"
                    />
                  </div>

                  <p
                    className="
                      mt-8
                      text-[#444444]
                      text-[15px]
                      leading-7
                      max-w-[220px]
                    "
                  >
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CatHome = () => {
  return (
    <div className=" min-h-screen bg-[#F5F5F7]">
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Hero4 />
    </div>
  );
};

export default CatHome;
