import { ArrowUpRight } from "lucide-react";

const blogs = [
  {
    id: 1,
    title:
      "Sustainable Practices Reducing Waste in Industrial Production",
    image:
      "https://images.pexels.com/photos/8961064/pexels-photo-8961064.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 2,
    title:
      "Advanced Robotics Revolutionizing Industrial Workflows",
    image:
      "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export default function LatestBlogsSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}

        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />

              <span className="uppercase tracking-[3px] text-[12px] text-[#666]">
                Latest Blog
              </span>
            </div>

            <h2 className="text-[36px] md:text-[52px] leading-tight font-light text-[#222]">
              Insights from our
              <br />
              <span className="font-bold">
                latest blogs
              </span>
            </h2>
          </div>

          <div className="flex items-center">
            <p className="text-[#777] text-[15px] leading-8">
              Stay updated with the latest trends,
              innovations, and expert insights in
              the manufacturing and industrial
              sectors.
            </p>
          </div>
        </div>

        {/* Blog Cards */}

        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="group"
            >
              <div className="overflow-hidden rounded-[28px]">
                <img
                  src={blog.image}
                  alt=""
                  className="
                    h-[320px]
                    w-full
                    object-cover
                    transition
                    duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              <div className="flex items-end justify-between mt-5 gap-4">
                <h3
                  className="
                    text-[24px]
                    font-medium
                    text-[#222]
                    leading-snug
                    max-w-[85%]
                  "
                >
                  {blog.title}
                </h3>

                <button
                  className="
                    w-12
                    h-12
                    rounded-lg
                    bg-[#F59E0B]
                    text-white
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}