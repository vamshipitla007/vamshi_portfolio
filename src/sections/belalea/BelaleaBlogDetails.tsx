import blogImage from "@/assets/belalea/Image17.png";

const blogDetails = {
  id: 1,

  image: blogImage,

  publishDate: "Январь 6, 2024",

  title: "Research More Organic Food",

  intro:
    "Established fact that a reader will be distracted by the readable content of a page when looking at its layout.",

  paragraph1:
    "Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements. Collaboratively expedite quality manufactured products via client-focused results quickly communicate enabled technology and turnkey leadership skills. Uniquely enable accurate supply chains rather than friction technology.",

  paragraph2:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",

  quote:
    "The first rule of any organic used in a business is that nature applied to an efficient operation will magnify the efficiency.",

  paragraph3:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
};

const BelaleaBlogDetails = () => {
  return (
    <section className="bg-white pb-24">
      <div className="max-w-[1400px] mx-auto">
        {/* Hero Image */}

        <img
          src={blogDetails.image}
          alt=""
          className="
          w-full
          h-[300px]
          md:h-[500px]
          lg:h-[650px]
          object-cover
          rounded-b-[30px]
          "
        />
      </div>

      {/* Floating Card */}

      <div className="max-w-[1100px] mx-auto px-5 -mt-28 relative z-20">
        <div
          className="
          bg-white
          rounded-[30px]
          shadow-2xl
          p-8
          md:p-12
          "
        >
          <p className="text-[#274C5B] text-sm font-medium">
            Дата публикации:
            <span className="text-[#6B7280] ml-2">
              {blogDetails.publishDate}
            </span>
          </p>

          <h1
            className="
            mt-5
            text-[#274C5B]
            font-bold
            text-[34px]
            md:text-[56px]
            leading-tight
            "
          >
            {blogDetails.title}
          </h1>

          <p
            className="
            mt-6
            text-[#6B7280]
            text-[17px]
            leading-8
            "
          >
            {blogDetails.intro}
          </p>
        </div>
      </div>

      {/* Content */}

      <div className="max-w-[900px] mx-auto px-5 mt-24">
        <p
          className="
          text-[#6B7280]
          leading-9
          text-[17px]
          "
        >
          {blogDetails.paragraph1}
        </p>

        <h2
          className="
          mt-14
          text-[#274C5B]
          text-[42px]
          font-bold
          "
        >
          Preferred Form of Vitamin D?
        </h2>

        <p
          className="
          mt-6
          text-[#6B7280]
          leading-9
          "
        >
          {blogDetails.paragraph2}
        </p>

        {/* Bullet List */}

        <ul
          className="
          mt-8
          space-y-4
          list-disc
          pl-7
          text-[#6B7280]
          "
        >
          <li>Publishing packages and web page Lorem Ipsum.</li>

          <li>Content here making it readable.</li>

          <li>Packages and web page Lorem Ipsum.</li>
        </ul>

        {/* Quote */}

        <div
          className="
          my-16
          bg-[#F8F5F2]
          rounded-[26px]
          px-10
          py-14
          text-center
          "
        >
          <p
            className="
            text-[#274C5B]
            font-semibold
            text-[24px]
            leading-10
            italic
            "
          >
            "{blogDetails.quote}"
          </p>
        </div>

        {/* Heading */}

        <h2
          className="
          text-[#274C5B]
          text-[42px]
          font-bold
          "
        >
          Make perfect organic product with us
        </h2>

        <p
          className="
          mt-6
          text-[#6B7280]
          leading-9
          "
        >
          {blogDetails.paragraph3}
        </p>

        {/* Number List */}

        <ol
          className="
          mt-8
          space-y-4
          list-decimal
          pl-7
          text-[#6B7280]
          "
        >
          <li>Publishing packages and web page Lorem Ipsum.</li>

          <li>Content here making it readable.</li>

          <li>Packages and web page Lorem Ipsum.</li>

          <li>Normal distribution of letters.</li>
        </ol>
      </div>
    </section>
  );
};

export default BelaleaBlogDetails;
