import { ArrowUpRight } from "lucide-react";
import HeroBanner from "./HeroBanner";
import aboutHero from "@/assets/factorypro/Image10.png";
import { Link } from "react-router-dom";

export interface Blog {
  id: number;
  title: string;
  image: string;
  slug: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "Sustainable Practices Reducing Waste in Industrial Production",
    slug: "sustainable-practices",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Advanced Robotics Revolutionizing Industrial Workflows",
    slug: "advanced-robotics",
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Top Benefits of Robotics in Manufacturing",
    slug: "robotics-benefits",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Leveraging Data Analytics for Smarter Production",
    slug: "data-analytics",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    title: "Reducing Operational Costs Through Automation",
    slug: "cost-reduction",
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    title: "The Advantages of Customized Manufacturing Solutions",
    slug: "custom-manufacturing",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=80",
  },
];

interface Props {
  blog: Blog;
}

const BlogCard = ({ blog }: Props) => {
  return (
    <article className="group">
      <Link to={`/blog/${blog.slug}`}>
        {/* IMAGE */}

        <div className="overflow-hidden rounded-[28px]">
          <img
            src={blog.image}
            alt={blog.title}
            className="
              h-[280px]
              w-full
              object-cover
              transition-all
              duration-500
              group-hover:scale-105
            "
          />
        </div>

        {/* CONTENT */}

        <div className="pt-5">
          <h3
            className="
              text-[26px]
              leading-[1.4]
              font-medium
              text-[#222]
              transition
              group-hover:text-[#F59E0B]
            "
          >
            {blog.title}
          </h3>

          <div
            className="
              mt-5
              flex
              items-center
              gap-2
              text-[#F59E0B]
              text-[14px]
              font-medium
            "
          >
            <span>Read More</span>

            <ArrowUpRight size={15} />
          </div>
        </div>
      </Link>
    </article>
  );
};


export default function BlogPage() {
  return (
    <div>
      <HeroBanner
        image={aboutHero}
        height="380px"
        title={
          <div className="flex items-start gap-3 justify-start">
            Latest Post
          </div>
        }
        description="Home / Blog"
      />
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div
            className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-x-10
            gap-y-16
          "
          >
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
