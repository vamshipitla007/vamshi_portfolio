/* eslint-disable @typescript-eslint/no-explicit-any */
const HeroBanner = ({
  title,
  description,
  image,
  showButton = false,
  height = "h-screen min-h-[750px]",
}:any) => {
  return (
    <section
      className="
      relative
      h-screen
      "
      style={{ height }}
    >
      <img
        src={image}
        alt=""
        className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        "
      />

      <div
        className="
        absolute
        inset-0
        bg-black/55
        "
      />

      <div
        className="
        relative
        z-10
        h-full
        flex
        items-center
        "
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <h1
              className="
              text-white
              text-5xl
              lg:text-7xl
              font-light
              leading-tight
              "
            >
              {title}
            </h1>

            <p
              className="
              mt-6
              text-white/80
              text-base
              leading-8
              "
            >
              {description}
            </p>

            {showButton && (
              <button
                className="
                mt-10
                px-8
                py-4
                bg-white
                text-black
                rounded-lg
                font-medium
                hover:bg-[#ff9f1c]
                hover:text-white
                transition
                "
              >
                Explore More →
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;