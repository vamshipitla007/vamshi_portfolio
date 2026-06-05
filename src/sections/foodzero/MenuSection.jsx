export default function MenuSection() {
  const menuItems = [
    {
      price: "$20",
      title: "Deep Sea Snow White Cod Fillet",
      desc: "Lorem ipsum dolor sit amet.",
    },
    {
      price: "$22",
      title: "Steak With Rosemary Butter",
      desc: "Lorem ipsum dolor sit amet.",
    },
    {
      price: "$18",
      title: "Cucumber Salad",
      desc: "Lorem ipsum dolor sit amet.",
    },
    {
      price: "$90",
      title: "Natural Wine Pairing",
      desc: "Lorem ipsum dolor sit amet.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-14">
          <h2 className="font-serif text-4xl md:text-6xl">
            Our Menu
          </h2>

          <p className="mt-3 text-xs text-gray-500">
            This is a section of your menu.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {menuItems.map((item) => (
            <div key={item.title}>
              <div className="mb-2 flex justify-end">
                <span className="font-serif text-xl text-[#233000]">
                  {item.price}
                </span>
              </div>

              <div className="border-t border-black pt-4">
                <h3 className="font-serif text-xl md:text-3xl text-[#233000]">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs text-gray-500 ">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}