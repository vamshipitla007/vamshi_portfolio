/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import banner from "@/assets/belalea/Image15.png";

const blogs = [
  {
    id: 1,
    date: "25",
    month: "Nov",
    title: "The Benefits of Vitamin D & How to Get It",
    description:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&q=80",
  },
  {
    id: 2,
    date: "25",
    month: "Nov",
    title: "The Benefits of Vitamin D & How to Get It",
    description:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1200&q=80",
  },
  {
    id: 3,
    date: "25",
    month: "Nov",
    title: "Benefits of Vitamin C & How to Get It",
    description:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80",
  },
  {
    id: 4,
    date: "25",
    month: "Nov",
    title: "Research More Organic Foods",
    description:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1200&q=80",
  },
  {
    id: 5,
    date: "25",
    month: "Nov",
    title: "Everyday Fresh Fruits",
    description:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    image:
      "https://images.unsplash.com/photo-1519996529931-28324d5a630e?w=1200&q=80",
  },
  {
    id: 6,
    date: "25",
    month: "Nov",
    title: "Don't Use Plastic Product! It's Kill Nature",
    description:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    image:
      "https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=1200&q=80",
  },
];

interface Blog {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
  month: string;
}

interface Props {
  blog: Blog;
}

const BlogCard = ({ blog }: Props) => {
  const navigate = useNavigate();

  return (
    <article
      onClick={() => navigate(`/belalea/blog/${blog.id}`)}
      className="group cursor-pointer h-[500px]"
    >
      <div className="relative h-full">

        {/* Image */}
        <div className="h-[340px] overflow-hidden rounded-[28px]">
          <img
            src={blog.image}
            alt={blog.title}
            className="
              w-full
              h-full
              object-cover
              object-center
              transition-transform
              duration-700
              group-hover:scale-110
            "
          />
        </div>

        {/* Date */}
        <div
          className="
            absolute
            top-5
            left-5
            w-16
            h-16
            rounded-full
            bg-white
            shadow-lg
            flex
            flex-col
            items-center
            justify-center
            z-20
          "
        >
          <span className="text-xl font-bold text-[#274C5B]">
            {blog.date}
          </span>

          <span className="text-xs font-medium text-[#274C5B]">
            {blog.month}
          </span>
        </div>

        {/* Floating Card */}
        <div
          className="
            absolute
            left-6
            right-6
            bottom-0
            translate-y-1/2
            h-[180px]
            bg-white
            rounded-[24px]
            shadow-2xl
            p-7
            flex
            flex-col
            justify-between
            transition-all
            duration-300
            group-hover:-translate-y-1
          "
        >
          <div>
            <h3 className="text-[24px] font-bold text-[#274C5B] line-clamp-2">
              {blog.title}
            </h3>

            <p className="mt-3 text-[15px] text-[#6B7280] leading-6 line-clamp-2">
              {blog.description}
            </p>
          </div>

          <button className="inline-flex items-center gap-2 font-semibold text-[#274C5B]">
            Read More
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </article>
  );
}

const BelaleaBlog = () => {
  return (
    <section className="relative">
      <img
        src={banner}
        alt="About Banner"
        className="w-full h-[220px] md:h-[300px] lg:h-[360px] object-cover"
      />
      <div className="max-w-[1280px] mx-auto px-5 pt-10">
        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-x-10
          gap-y-28
          "
        >
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BelaleaBlog;
