import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

export default function TestimonialsSection({
  starter,
  mainCourse,
  soup,
  avatar,
}) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center">
          <h2 className="font-serif text-5xl md:text-7xl text-[#233000]">
            Calories Energy
            <br />
            Balance
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <img
            src={starter}
            alt=""
            className="h-[350px] w-full object-cover"
          />

          <img
            src={mainCourse}
            alt=""
            className="h-[350px] w-full object-cover"
          />

          <img
            src={soup}
            alt=""
            className="h-[350px] w-full object-cover"
          />
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <blockquote className="font-serif text-2xl md:text-4xl text-[#233000]">
            “ Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. ”
          </blockquote>

          <div className="mt-10 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={avatar}
                alt=""
                className="h-14 w-14 rounded-full object-cover"
              />

              <div>
                <h4 className="font-semibold text-[#233000]">
                  John Doe
                </h4>

                <p className="text-xs text-gray-500">
                  Blogger
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <ArrowLeft />
              <ArrowRight />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}