import { ArrowLeft, ArrowRight } from "lucide-react";

const comments = [
  {
    id: 1,
    name: "Leslie Alexander",
    date: "March 12, 2020, 7:08 pm",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.",
  },
  {
    id: 2,
    name: "Jenifer Lopez",
    date: "March 12, 2020, 7:08 pm",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.",
  },
  {
    id: 3,
    name: "Jane Cooper",
    date: "March 12, 2020, 7:08 pm",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.",
  },
  {
    id: 4,
    name: "Jenny Wilson",
    date: "March 12, 2020, 7:08 pm",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.",
  },
];

export default function CommentsSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        {/* PREV NEXT POSTS */}

        <div className="grid overflow-hidden md:grid-cols-2">
          <div className="relative h-[180px]">
            <img
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&q=80"
              alt=""
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute inset-0 flex flex-col justify-center px-10 text-white">
              <ArrowLeft size={22} />

              <span className="mt-2 text-[11px] uppercase">
                Previous Post
              </span>

              <h3 className="mt-2 font-serif text-xl md:text-3xl">
                7 Reasons To Start Your Day With Lemon Water
              </h3>
            </div>
          </div>

          <div className="relative h-[180px]">
            <img
              src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&q=80"
              alt=""
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute inset-0 flex flex-col items-end justify-center px-10 text-right text-white">
              <ArrowRight size={22} />

              <span className="mt-2 text-[11px] uppercase">
                Next Post
              </span>

              <h3 className="mt-2 font-serif text-xl md:text-3xl">
                12 Sparkling Wines We’re Loving This Summer
              </h3>
            </div>
          </div>
        </div>

        {/* COMMENTS */}

        <div className="mx-auto mt-20 max-w-3xl">
          <h2
            className="
              text-center
              font-serif
              text-[36px]
              md:text-[48px]
              text-[#233000]
            "
          >
            5 Comments
          </h2>

          <div className="mt-14 space-y-10">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="flex gap-5"
              >
                <img
                  src={comment.image}
                  alt=""
                  className="
                    h-14
                    w-14
                    rounded-full
                    object-cover
                  "
                />

                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4
                        className="
                          text-[16px]
                          font-medium
                          text-[#233000]
                        "
                      >
                        {comment.name}
                      </h4>

                      <p
                        className="
                          mt-1
                          text-[12px]
                          text-[#888]
                        "
                      >
                        {comment.date}
                      </p>
                    </div>

                    <button
                      className="
                        text-[14px]
                        font-medium
                        text-[#233000]
                      "
                    >
                      Reply
                    </button>
                  </div>

                  <p
                    className="
                      mt-4
                      text-[14px]
                      leading-7
                      text-[#666]
                    "
                  >
                    {comment.comment}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* DIVIDER */}

          <div
            className="
              mt-16
              border-t
              border-dashed
              border-[#233000]
            "
          />

          {/* REPLY FORM */}

          <div className="mt-16">
            <h2
              className="
                text-center
                font-serif
                text-[32px]
                md:text-[42px]
                text-[#233000]
              "
            >
              Leave a Reply
            </h2>

            <form className="mt-14 space-y-8">
              <div>
                <label
                  className="
                    mb-3
                    block
                    text-[14px]
                    text-[#233000]
                  "
                >
                  Comment
                </label>

                <textarea
                  rows={8}
                  className="
                    w-full
                    border
                    border-[#233000]
                    p-4
                    outline-none
                    resize-none
                  "
                />
              </div>

              <div>
                <label
                  className="
                    mb-3
                    block
                    text-[14px]
                    text-[#233000]
                  "
                >
                  Name*
                </label>

                <input
                  type="text"
                  className="
                    h-14
                    w-full
                    border
                    border-[#233000]
                    px-4
                    outline-none
                  "
                />
              </div>

              <div>
                <label
                  className="
                    mb-3
                    block
                    text-[14px]
                    text-[#233000]
                  "
                >
                  Email*
                </label>

                <input
                  type="email"
                  className="
                    h-14
                    w-full
                    border
                    border-[#233000]
                    px-4
                    outline-none
                  "
                />
              </div>

              <div>
                <label
                  className="
                    mb-3
                    block
                    text-[14px]
                    text-[#233000]
                  "
                >
                  Website
                </label>

                <input
                  type="text"
                  className="
                    h-14
                    w-full
                    border
                    border-[#233000]
                    px-4
                    outline-none
                  "
                />
              </div>

              <button
                type="submit"
                className="
                  border
                  border-[#233000]
                  px-8
                  py-4
                  text-[14px]
                  text-[#233000]
                  transition-all
                  hover:bg-[#233000]
                  hover:text-white
                "
              >
                Post Comment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}