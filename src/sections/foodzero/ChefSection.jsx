export default function ChefSection({
  chefImage,
}) {
  return (
    <section className="bg-[#EBF0E4] py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2">
        <img
          src={chefImage}
          alt=""
          className="w-full object-cover"
        />

        <div>
          <h2 className="font-serif text-5xl md:text-7xl text-[#233000]">
            Excellent
            <br />
            cook
          </h2>

          <p className="mt-6 max-w-md text-xs text-gray-600 leading-6">
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </section>
  );
}