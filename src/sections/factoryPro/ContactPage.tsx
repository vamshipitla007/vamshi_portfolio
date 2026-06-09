import HeroBanner from "./HeroBanner";
import aboutHero from "@/assets/factorypro/Image10.png";
import { Phone, Mail, MapPin } from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    title: "Contact",
    value: "+1 809 120 670",
  },
  {
    icon: Mail,
    title: "E-mail",
    value: "info@domainname.com",
  },
  {
    icon: MapPin,
    title: "Our Address",
    value: "37 San Juan Lane Graaf Florisstraat 22A, 3021 CH",
  },
];

function ContactPage() {
  return (
    <div>
      <HeroBanner
        image={aboutHero}
        height="380px"
        title={
          <div className="flex items-start gap-3 justify-start">Contact Us</div>
        }
        description="Home / Contact"
      />
      <section className="bg-[#F8F8F8] py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          {/* TOP SECTION */}

          <div
            className="
          grid
          lg:grid-cols-2
          gap-16
          items-start
          relative
          "
          >
            {/* LEFT */}

            <div className="relative">
              {/* Small Label */}

              <div className="flex items-center gap-2 mb-5">
                <div className="w-2 h-2 rounded-full bg-[#F59E0B]" />

                <span
                  className="
                uppercase
                tracking-[3px]
                text-[12px]
                font-medium
                text-[#222]
                "
                >
                  Contact Us
                </span>
              </div>

              <h2
                className="
              text-[42px]
              md:text-[56px]
              leading-tight
              font-light
              text-[#222]
              "
              >
                Get in touch <span className="font-bold">with us</span>
              </h2>

              <p
                className="
              mt-5
              text-[15px]
              leading-7
              text-[#7A7A7A]
              max-w-md
              "
              >
                Reach out for any inquiries, support, or to discuss how we can
                meet your industrial needs.
              </p>

              {/* CONTACT ITEMS */}

              <div className="mt-10 space-y-8">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="flex gap-4">
                      <div
                        className="
                      w-12
                      h-12
                      rounded-lg
                      bg-[#F59E0B]
                      flex
                      items-center
                      justify-center
                      text-white
                      shrink-0
                      "
                      >
                        <Icon size={20} />
                      </div>

                      <div>
                        <h4
                          className="
                        text-[18px]
                        font-medium
                        text-[#222]
                        "
                        >
                          {item.title}
                        </h4>

                        <p
                          className="
                        mt-1
                        text-[14px]
                        text-[#7A7A7A]
                        "
                        >
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Factory Illustration */}

              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt=""
                className="
                absolute
                bottom-[-80px]
                left-0
                w-[260px]
                opacity-[0.06]
                hidden
                lg:block
              "
              />
            </div>

            {/* RIGHT FORM */}

            <div
              className="
            bg-white
            rounded-[32px]
            shadow-sm
            p-6
            md:p-10
            "
            >
              <h3
                className="
              text-[46px]
              leading-tight
              font-light
              text-[#222]
              "
              >
                Contact <span className="font-bold">me</span>
              </h3>

              <form
                className="
              mt-8
              space-y-4
              "
              >
                <div
                  className="
                grid
                md:grid-cols-2
                gap-4
                "
                >
                  <input
                    placeholder="Enter first name"
                    className="
                    h-12
                    rounded-lg
                    border
                    border-[#E5E5E5]
                    px-4
                    text-[14px]
                    text-[#222]
                    outline-none
                    focus:border-[#F59E0B]
                  "
                  />

                  <input
                    placeholder="Enter last name"
                    className="
                    h-12
                    rounded-lg
                    border
                    border-[#E5E5E5]
                    px-4
                    text-[14px]
                     text-[#222]
                    outline-none
                    focus:border-[#F59E0B]
                  "
                  />
                </div>

                <input
                  placeholder="Enter your e-mail"
                  className="
                  w-full
                  h-12
                  rounded-lg
                  border
                  border-[#E5E5E5]
                  px-4
                  text-[14px]
                  text-[#222]
                "
                />

                <input
                  placeholder="Enter your phone no."
                  className="
                  w-full
                  h-12
                  rounded-lg
                  border
                  border-[#E5E5E5]
                  px-4
                  text-[14px]
                    text-[#222]
                "
                />

                <textarea
                  rows={5}
                  placeholder="Write Message"
                  className="
                  w-full
                  rounded-lg
                  border
                  border-[#E5E5E5]
                  px-4
                  py-4
                  text-[14px]
                  resize-none
                    text-[#222]
                "
                />

                <button
                  type="submit"
                  className="
                  mt-2
                  border
                  border-[#F59E0B]
                  text-[#222]
                  px-7
                  py-3
                  rounded-lg
                  text-[14px]
                  font-medium
                  hover:bg-[#F59E0B]
                  hover:text-white
                  transition
                "
                >
                  Submit Message
                </button>
              </form>
            </div>
          </div>

          {/* MAP */}

          <div className="mt-20">
            <div
              className="
            overflow-hidden
            rounded-[24px]
            h-[500px]
            relative
            "
            >
              <iframe
                title="Factory Location"
                src="https://maps.google.com/maps?q=london&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="
                absolute
                inset-0
                w-full
                h-full
                border-0
              "
              />

              {/* Location Card */}

              <div
                className="
              hidden
              md:block
              absolute
              top-6
              left-6
              bg-white
              rounded-xl
              shadow-lg
              p-4
              w-[260px]
              "
              >
                <img
                  src="https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="
                  h-28
                  w-full
                  object-cover
                  rounded-lg
                "
                />

                <h4
                  className="
                mt-3
                font-semibold
                text-[#222]
                "
                >
                  FactoryPro Headquarters
                </h4>

                <p
                  className="
                mt-1
                text-[13px]
                text-[#777]
                "
                >
                  London Industrial District, United Kingdom
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
