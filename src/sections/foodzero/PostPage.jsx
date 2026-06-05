import { Search } from "lucide-react";
import HeroImage from "@/assets/foodzero/post1.png";
import CommentsSection from "./CommentsSection";

export default function PostPage() {
  const recentPosts = [
    {
      id: 1,
      title: "Vegan baked oatmeal with fresh berries",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&q=80",
    },
    {
      id: 2,
      title: "Fresh garden vegetables",
      image:
        "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&q=80",
    },
    {
      id: 3,
      title: "Healthy breakfast bowl",
      image:
        "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=300&q=80",
    },
    {
      id: 4,
      title: "Fresh lemon recipes",
      image:
        "https://images.unsplash.com/photo-1553531889-56cc480ac5cb?w=300&q=80",
    },
  ];

  return (
    <div className="bg-white pt-20">
      {/* HERO */}

      <section className="relative h-[400px] md:h-[320px] overflow-hidden">
        <img
          src={HeroImage}
          alt=""
          style={{ height: "320px", width: "100%", objectFit: "cover" }}
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-6xl px-6">
            <span
              className="
                inline-block
                border
                border-white
                px-4
                py-1
                text-[10px]
                text-white
              "
            >
              Fashion
            </span>

            <h1
              className="
                mt-6
                max-w-3xl
                font-serif
                text-white
                text-[38px]
                md:text-[72px]
                leading-[1.1]
              "
            >
              Three Ideas for Cooking Goat Meat at Home
            </h1>

            <div className="mt-6 flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
                alt=""
                className="h-10 w-10 rounded-full object-cover"
              />

              <div className="text-[10px] text-white">
                Julie Christie • October 17, 2021 • 3:33 pm • 2 comments
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-14 lg:grid-cols-[2fr_1fr]">
          {/* LEFT CONTENT */}

          <div>
            {/* Breadcrumb */}

            <p className="text-[10px] text-[#999]">
              Home / Blog / Three Ideas for Cooking Goat Meat at Home
            </p>

            {/* Intro */}

            <p className="mt-10 text-[12px] leading-7 text-[#666]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              lorem id penatibus imperdiet. Turpis egestas ultricies purus
              auctor tincidunt lacus nunc.
            </p>

            {/* Gallery */}

            <div className="mt-10 grid gap-5 md:grid-cols-[2fr_1fr]">
              <img
                src="https://images.unsplash.com/photo-1559847844-5315695dadae?w=1200&q=80"
                alt=""
                className="h-[500px] w-full object-cover"
              />

              <div className="space-y-5">
                <img
                  src="https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?w=800&q=80"
                  alt=""
                  className="h-[240px] w-full object-cover"
                />

                <img
                  src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=800&q=80"
                  alt=""
                  className="h-[240px] w-full object-cover"
                />
              </div>
            </div>

            {/* Text */}

            <p className="mt-10 text-[12px] leading-7 text-[#666]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              lorem id penatibus imperdiet. Turpis egestas ultricies purus
              auctor tincidunt lacus nunc.
            </p>

            {/* Quote */}

            <blockquote
              className="
                my-14
                border-l-4
                border-[#9CAA00]
                pl-8
                font-serif
                text-[24px]
                italic
                text-[#9CAA00]
              "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              lorem id penatibus imperdiet.
            </blockquote>

            {/* Content */}

            <p className="text-[12px] leading-7 text-[#666]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              lorem id penatibus imperdiet. Turpis egestas ultricies purus
              auctor tincidunt lacus nunc.
            </p>

            {/* Tags */}

            <div className="mt-12 flex flex-wrap gap-2">
              <span className="text-[12px]">Tags:</span>

              {[
                "Design",
                "Photography",
                "Images",
                "Video",
                "Music",
                "Travel",
              ].map((tag) => (
                <button
                  key={tag}
                  className="
                    border
                    px-3
                    py-1
                    text-[10px]
                  "
                >
                  {tag}
                </button>
              ))}
            </div>
            <div className="mt-20">
              <h3
                className="
        font-serif
        text-[32px]
        md:text-[42px]
        text-[#233000]
        leading-none
      "
              >
                Tags
              </h3>

              <div className="mt-4 border-t border-dashed border-[#233000]" />

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Design",
                  "Photography",
                  "Images",
                  "Video",
                  "Music",
                  "Travel",
                ].map((tag) => (
                  <button
                    key={tag}
                    className="
            border
            border-[#233000]
            px-4
            py-2
            text-[12px]
            text-[#233000]
            transition-all
            hover:bg-[#233000]
            hover:text-white
          "
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Author */}

            <div className="mt-16 flex gap-5 border-t pt-10">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80"
                alt=""
                className="h-20 w-20 rounded-full object-cover"
              />

              <div>
                <h3 className="font-serif text-2xl text-[#233000]">
                  Julie Christie
                </h3>

                <p className="mt-2 text-[12px] text-[#666]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>

          <aside className="lg:pl-6">
            {/* SEARCH */}

            <div>
              <div className="flex items-center border-b border-[#233000] pb-3">
                <input
                  placeholder="Search....."
                  className="
          w-full
          bg-transparent
          text-[16px]
          text-[#233000]
          placeholder:text-[#666]
          outline-none
        "
                />

                <Search size={20} className="text-[#233000]" />
              </div>
            </div>

            {/* CATEGORIES */}

            <div className="mt-20">
              <h3
                className="
        font-serif
        text-[32px]
        md:text-[42px]
        text-[#233000]
        leading-none
      "
              >
                Categories
              </h3>

              <div className="mt-4 border-t border-dashed border-[#233000]" />

              <div className="mt-8 space-y-5">
                {[
                  ["Fashion", 16],
                  ["Food", 20],
                  ["Music", 12],
                  ["Travel", 36],
                ].map(([name, count]) => (
                  <div
                    key={name}
                    className="
            flex
            justify-between
            text-[16px]
            text-[#233000]
          "
                  >
                    <span>{name}</span>
                    <span>{count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RECENT COMMENTS */}

            <div className="mt-20">
              <h3
                className="
        font-serif
        text-[32px]
        md:text-[42px]
        text-[#233000]
        leading-none
      "
              >
                Recent Comments
              </h3>

              <div className="mt-4 border-t border-dashed border-[#233000]" />

              <div
                className="
        mt-8
        space-y-5
        text-[14px]
        leading-7
        text-[#666]
      "
              >
                <p>John on Vegan baked oatmeal with fresh berries</p>

                <p>Alex on Fresh garden vegetables salad</p>

                <p>Sarah on Lemon Water For Better Health</p>

                <p>William on Fresh Summer Salad</p>
              </div>
            </div>

            {/* ARCHIVES */}

            <div className="mt-20">
              <h3
                className="
        font-serif
        text-[32px]
        md:text-[42px]
        text-[#233000]
        leading-none
      "
              >
                Archives
              </h3>

              <div className="mt-4 border-t border-dashed border-[#233000]" />

              <div className="mt-8 space-y-5">
                {[
                  ["October 2021", 12],
                  ["September 2021", 6],
                  ["August 2021", 23],
                ].map(([month, count]) => (
                  <div
                    key={month}
                    className="
            flex
            justify-between
            text-[16px]
            text-[#233000]
          "
                  >
                    <span>{month}</span>
                    <span>{count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RECENT POSTS */}

            <div className="mt-20">
              <h3
                className="
        font-serif
        text-[32px]
        md:text-[42px]
        text-[#233000]
        leading-none
      "
              >
                Recent Posted
              </h3>

              <div className="mt-4 border-t border-dashed border-[#233000]" />

              <div className="mt-8 space-y-6">
                {recentPosts.map((post) => (
                  <div key={post.id} className="flex gap-4">
                    <img
                      src={post.image}
                      alt=""
                      className="
              h-24
              w-24
              object-cover
              rounded-sm
            "
                    />

                    <div>
                      <h4
                        className="
                text-[14px]
                leading-6
                text-[#233000]
              "
                      >
                        {post.title}
                      </h4>

                      <p
                        className="
                mt-2
                text-[12px]
                text-[#888]
              "
                      >
                        October 17, 2021
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* TAGS */}

            <div className="mt-20">
              <h3
                className="
        font-serif
        text-[32px]
        md:text-[42px]
        text-[#233000]
        leading-none
      "
              >
                Tags
              </h3>

              <div className="mt-4 border-t border-dashed border-[#233000]" />

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Design",
                  "Photography",
                  "Images",
                  "Video",
                  "Music",
                  "Travel",
                ].map((tag) => (
                  <button
                    key={tag}
                    className="
            border
            border-[#233000]
            px-4
            py-2
            text-[12px]
            text-[#233000]
            transition-all
            hover:bg-[#233000]
            hover:text-white
          "
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CommentsSection />
    </div>
  );
}
