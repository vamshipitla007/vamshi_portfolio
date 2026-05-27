import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const filters = [
  "Latest",
  "Funding round",
  "Spotlight",
  "News & updates",
];

const blogPosts = [
  {
    id: 1,
    category: "Funding round",
    title: "Round 9 of approvals",
    date: "January 1, 2022",
    type: "Latest",
  },

  {
    id: 2,
    category: "Funding round",
    title: "Round 8 of approvals",
    date: "January 1, 2022",
    type: "Funding round",
  },

  {
    id: 3,
    category: "Funding round",
    title: "Round 7 of approved grants",
    date: "January 1, 2022",
    type: "Spotlight",
  },

  {
    id: 4,
    category: "Funding round",
    title: "Round 6 of approved grants",
    date: "January 1, 2022",
    type: "Funding round",
  },

  {
    id: 5,
    category: "Funding round",
    title: "Fifth round of approvals",
    date: "January 1, 2022",
    type: "News & updates",
  },

  {
    id: 6,
    category: "Funding round",
    title: "Third round of approvals",
    date: "January 1, 2022",
    type: "Latest",
  },

  {
    id: 7,
    category: "Funding round",
    title: "Second round of approvals",
    date: "January 1, 2022",
    type: "Spotlight",
  },

  {
    id: 8,
    category: "Funding round",
    title: "Genesis grants approved",
    date: "January 1, 2022",
    type: "Funding round",
  },
];

export default function BlogSection() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] =
    useState("Latest");

  const [visiblePosts, setVisiblePosts] =
    useState(6);

  const filteredPosts = useMemo(() => {
    if (activeFilter === "Latest") {
      return blogPosts;
    }

    return blogPosts.filter(
      (post) => post.type === activeFilter,
    );
  }, [activeFilter]);

  const displayedPosts = filteredPosts.slice(
    0,
    visiblePosts,
  );

  const handleLoadMore = () => {
    setVisiblePosts((prev) => prev + 3);
  };

  const handleRoundDetailsClick = () =>{
    navigate("/dydx/rounddetails");
  }

  return (
    <section className="relative overflow-hidden bg-[#17172B] min-h-screen py-20 md:py-28">
      {/* Grid Background */}
      <div
        className="
          absolute
          inset-0
          opacity-30
          [background-image:linear-gradient(#2D2D52_1px,transparent_1px),linear-gradient(to_right,#2D2D52_1px,transparent_1px)]
          [background-size:32px_32px]
        "
      />

      {/* Glow */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[700px]
          bg-[#5E5BFF]
          opacity-[0.08]
          blur-[180px]
          rounded-full
        "
      />

      <div className="relative z-20 max-w-[1080px] mx-auto px-5 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h1
            className="
              text-white
              text-[42px]
              md:text-[68px]
              font-semibold
              tracking-[-0.04em]
              leading-[1.05]
            "
          >
            Blog
          </h1>
        </div>

        {/* Filters */}
        <div
          className="
            mt-12
            flex
            flex-wrap
            items-center
            justify-center
            gap-3
          "
        >
          {filters.map((filter) => {
            const active =
              activeFilter === filter;

            return (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setVisiblePosts(6);
                }}
                className={`
                  h-[38px]
                  px-5
                  rounded-[10px]
                  text-[12px]
                  md:text-[13px]
                  font-medium
                  transition-all
                  duration-300
                  whitespace-nowrap
                  ${
                    active
                      ? "bg-[#434064] text-white"
                      : "text-[#A8A8C7] hover:text-white"
                  }
                `}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Blog Grid */}
        <div
          className="
            mt-16
            grid
            grid-cols-1
            md:grid-cols-2
            gap-6
          "
        >
          {displayedPosts.map((post) => (
            <div
              key={post.id}
              className="
                rounded-[22px]
                overflow-hidden
                bg-[#3B3A5B]
                hover:translate-y-[-4px]
                transition-all
                duration-300
                cursor-pointer
              "
              onClick={handleRoundDetailsClick}
            >
              {/* Banner */}
              <div
                className="
                  relative
                  h-[180px]
                  bg-[#17172B]
                  border
                  border-[#5E5BFF]
                  overflow-hidden
                "
              >
                {/* Grid */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-20
                    [background-image:linear-gradient(#2D2D52_1px,transparent_1px),linear-gradient(to_right,#2D2D52_1px,transparent_1px)]
                    [background-size:24px_24px]
                  "
                />

                {/* Oval */}
                <div
                  className="
                    absolute
                    top-1/2
                    left-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                    w-[230px]
                    h-[95px]
                    border
                    border-[#5E5BFF]
                    rounded-full
                  "
                />

                {/* Corner Accent */}
                <div
                  className="
                    absolute
                    right-0
                    bottom-0
                    w-7
                    h-7
                    bg-[#5E5BFF]
                    rounded-tl-2xl
                  "
                />

                {/* Content */}
                <div className="relative z-20 p-7">
                  <p
                    className="
                      text-[#8F8FB2]
                      text-[11px]
                      tracking-[0.08em]
                    "
                  >
                    Funding round
                  </p>

                  <h2
                    className="
                      text-white
                      text-[28px]
                      md:text-[40px]
                      font-semibold
                      leading-[1.05]
                      tracking-[-0.03em]
                      mt-4
                      max-w-[240px]
                    "
                  >
                    {post.title
                      .replace(" of approvals", "")
                      .replace(
                        " of approved grants",
                        "",
                      )}
                  </h2>
                </div>
              </div>

              {/* Bottom */}
              <div className="p-6 md:p-7">
                <p
                  className="
                    text-[#8F8FB2]
                    text-[12px]
                    tracking-[0.08em]
                  "
                >
                  {post.category}
                </p>

                <h3
                  className="
                    text-white
                    text-[24px]
                    md:text-[28px]
                    font-semibold
                    leading-[1.2]
                    mt-4
                  "
                >
                  {post.title}
                </h3>

                <p
                  className="
                    text-[#9A9ABC]
                    text-[12px]
                    mt-12
                  "
                >
                  {post.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {displayedPosts.length === 0 && (
          <div className="text-center mt-20">
            <p
              className="
                text-[#A8A8C7]
                text-[15px]
              "
            >
              No blog posts found.
            </p>
          </div>
        )}

        {/* Load More */}
        {visiblePosts < filteredPosts.length && (
          <div className="flex justify-center mt-16">
            <button
              onClick={handleLoadMore}
              className="
                h-[44px]
                px-6
                rounded-[12px]
                bg-[#434064]
                text-white
                text-[13px]
                font-medium
                hover:bg-[#514E79]
                transition-all
                duration-300
                inline-flex
                items-center
                gap-2
              "
            >
              Load more posts

              <ArrowRight size={15} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}