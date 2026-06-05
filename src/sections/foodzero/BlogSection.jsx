export default function BlogSection({
  fruitImage,
  asparagusImage,
}) {
  const posts = [
    {
      image: fruitImage,
      category: "Fashion",
      title:
        "Fruit and vegetables and protection against disease",
    },
    {
      image: asparagusImage,
      category: "Fashion",
      title:
        "Asparagus Spring Salad with Rocket, Goat Cheese",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2">
        {posts.map((post) => (
          <article key={post.title}>
            <div className="relative">
              <img
                src={post.image}
                alt=""
                className="h-[450px] w-full object-cover"
              />

              <span className="absolute right-4 top-4 bg-[#5E6600] px-4 py-1 text-xs text-white">
                Fashion
              </span>
            </div>

            <h3 className="mt-6 border-b pb-4 font-serif text-3xl text-[#233000]">
              {post.title}
            </h3>

            <p className="mt-4 text-xs text-gray-500">
              August 6, 2023
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}