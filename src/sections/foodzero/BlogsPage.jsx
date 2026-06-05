import { ArrowRight } from "lucide-react";
import HeroImage from "@/assets/foodzero/blogs1.png";
import { useNavigate } from "react-router-dom";

const blogs = [
  {
    id: 1,
    category: "Fashion",
    title: "Fruit and vegetables and protection against diseases",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=1200&q=80",
  },
  {
    id: 2,
    category: "Fashion",
    title: "Asparagus Spring Salad with Rocket, Goat's Cheese",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=1200&q=80",
  },
  {
    id: 3,
    category: "Fashion",
    title: "The Best Style of Dough for Dumplings",
    image:
      "https://images.unsplash.com/photo-1563379091339-03246963d29a?w=1200&q=80",
  },
  {
    id: 4,
    category: "Fashion",
    title: "7 Reasons to Start Your Day With Lemon Water",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&q=80",
  },
  {
    id: 5,
    category: "Fashion",
    title: "Three Ideas for Cooking Goat Meat at Home",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=1200&q=80",
  },
  {
    id: 6,
    category: "Fashion",
    title: "12 Sparkling Wines We're Loving This Summer",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&q=80",
  },
];

export default function BlogsPage() {
    const navigate = useNavigate();
  return (
    <div className="bg-white pt-10">
      {/* HERO */}

      <section className="relative h-[400px] md:h-[320px] overflow-hidden">
        <img
          src={HeroImage}
          alt=""
          style={{ height: "320px", width: "100%", objectFit: "cover" }}
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1
              className="
                font-serif
                text-white
                text-[34px]
                md:text-[64px]
                leading-none
              "
            >
              Blogs - Two Columns
            </h1>

            <p className="mt-3 text-[11px] text-white/90">
              It is easy way to create your beautiful blog
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}

      <section className="mx-auto max-w-6xl px-5 py-12 md:py-20">
        {/* Breadcrumb */}

        <div className="mb-10 text-[10px] text-[#999]">
          Home / Blog / Blog Two Columns
        </div>

        {/* BLOG GRID */}

        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
          {blogs.map((blog) => (
            <article key={blog.id}  onClick={() => navigate(`/foodzero/post`)} className="cursor-pointer">
              {/* IMAGE */}

              <div className="relative overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="
                    h-[280px]
                    md:h-[360px]
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />

                <span
                  className="
                    absolute
                    right-0
                    top-0
                    bg-[#5E6600]
                    px-5
                    py-2
                    text-[10px]
                    text-white
                  "
                >
                  {blog.category}
                </span>
              </div>

              {/* META */}

              <div className="mt-5 flex items-center gap-2 text-[10px] text-[#777]">
                <div className="h-5 w-5 rounded-full bg-gray-300" />

                <span>John Doe</span>

                <span>•</span>

                <span>October 17,2021</span>

                <span>•</span>

                <span>3 Min</span>

                <span>•</span>

                <span>Comments</span>
              </div>

              {/* TITLE */}

              <h2
                className="
                  mt-4
                  border-b
                  border-[#DCDCDC]
                  pb-4
                  font-serif
                  text-[22px]
                  md:text-[34px]
                  leading-tight
                  text-[#233000]
                "
              >
                {blog.title}
              </h2>

              {/* DESCRIPTION */}

              <p
                className="
                  mt-4
                  text-[11px]
                  leading-6
                  text-[#777]
                "
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>

              {/* READ MORE */}

              <button
                className="
                  mt-5
                  flex
                  items-center
                  gap-2
                  text-[11px]
                  text-[#233000]
                "
              >
                Read More
                <ArrowRight size={14} />
              </button>
            </article>
          ))}
        </div>

        {/* PAGINATION */}

        <div className="mt-20 flex justify-center gap-2">
          <button
            className="
              border
              px-3
              py-1
              text-[11px]
              text-[#233000]
            "
          >
            Prev
          </button>

          {[1, 2, 3, 4].map((page) => (
            <button
              key={page}
              className={`
                border
                px-3
                py-1
                text-[11px]

                ${page === 2 ? "bg-[#233000] text-white" : "text-[#233000]"}
              `}
            >
              {page}
            </button>
          ))}

          <button
            className="
              border
              px-3
              py-1
              text-[11px]
              text-[#233000]
            "
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
}
