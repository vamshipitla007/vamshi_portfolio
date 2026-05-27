/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  Plus,
  Minus,
  ArrowRight,
} from "lucide-react";

const criteriaData = [
  {
    title: "Relevance",
    content:
      "Projects should provide meaningful value to the dYdX ecosystem and align with strategic goals.",
  },

  {
    title: "Benefit",
    content:
      "Applications must demonstrate measurable impact for users, developers or governance.",
  },

  {
    title: "Feasibility",
    content:
      "The proposal should include realistic timelines, milestones and technical execution plans.",
  },

  {
    title: "Execution",
    content:
      "Applicants should demonstrate the ability to successfully deliver the proposed project.",
  },

  {
    title: "Qualification",
    content:
      "Relevant background, technical expertise and previous work will be evaluated.",
  },

  {
    title: "Originality",
    content:
      "The project should provide unique contributions and not duplicate existing efforts.",
  },

  {
    title: "Cost",
    content:
      "Funding requests should be justified with clear breakdowns and reasonable expectations.",
  },
];

export default function ApplyGrant() {
  const [openItems, setOpenItems] :any = useState({
    0: true,
  });

  const [formData, setFormData] :any= useState({
    name: "",
    email: "",
    about: "",
    links: "",
  });

  const [errors, setErrors] :any = useState({});

  const toggleAccordion = (index: any) => {
    setOpenItems((prev:any) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleChange = (e:any) => {
    const { name, value } = e.target;

    setFormData((prev:any) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev:any) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors :any= {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.about.trim()) {
      newErrors.about = "About section is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form Submitted:", formData);

      alert("Grant application submitted!");

      setFormData({
        name: "",
        email: "",
        about: "",
        links: "",
      });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#17172B] py-20 md:py-28">
      {/* Grid */}
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

      <div className="relative z-20 max-w-[860px] mx-auto px-5 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h1
            className="
              text-white
              text-[40px]
              md:text-[68px]
              font-semibold
              tracking-[-0.04em]
              leading-[1.05]
            "
          >
            Apply for a grant
          </h1>

          <p
            className="
              text-[#B8B8D4]
              text-[13px]
              md:text-[14px]
              mt-5
            "
          >
            Please complete the application below for
            Grant consideration!
          </p>
        </div>

        {/* Criteria Section */}
        <div className="mt-24">
          <h2
            className="
              text-white
              text-[24px]
              md:text-[34px]
              font-semibold
              leading-[1.2]
            "
          >
            How are grants selected?
          </h2>

          <p
            className="
              text-[#B8B8D4]
              text-[13px]
              md:text-[14px]
              leading-[1.9]
              mt-5
              max-w-[650px]
            "
          >
            When assessing applications, the Grants team
            follows standard criteria using the questions
            below to guide our decision making.
          </p>

          {/* Accordion */}
          <div className="mt-12 border-t border-[#2F2F4D]">
            {criteriaData.map((item, index) => {
              const isOpen = openItems[index];

              return (
                <div
                  key={index}
                  className="border-b border-[#2F2F4D]"
                >
                  <button
                    onClick={() =>
                      toggleAccordion(index)
                    }
                    className="
                      w-full
                      flex
                      items-center
                      justify-between
                      gap-6
                      py-6
                      text-left
                    "
                  >
                    <span
                      className="
                        text-white
                        text-[14px]
                        md:text-[15px]
                      "
                    >
                      {item.title}
                    </span>

                    <span className="text-white">
                      {isOpen ? (
                        <Minus size={18} />
                      ) : (
                        <Plus size={18} />
                      )}
                    </span>
                  </button>

                  {/* Content */}
                  <div
                    className={`
                      overflow-hidden
                      transition-all
                      duration-300
                      ${
                        isOpen
                          ? "max-h-[200px] pb-6 opacity-100"
                          : "max-h-0 opacity-0"
                      }
                    `}
                  >
                    <p
                      className="
                        text-[#B8B8D4]
                        text-[13px]
                        md:text-[14px]
                        leading-[2]
                        pr-6
                      "
                    >
                      {item.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Form Section */}
        <div className="mt-24">
          <h2
            className="
              text-white
              text-[28px]
              md:text-[40px]
              font-semibold
              tracking-[-0.03em]
            "
          >
            Grant application
          </h2>

          {/* Form Card */}
          <div
            className="
              mt-10
              rounded-[24px]
              bg-[#F5F5F7]
              p-6
              md:p-10
            "
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              {/* Name */}
              <div>
                <label
                  className="
                    block
                    text-[#1C1C28]
                    text-[13px]
                    font-medium
                    mb-3
                  "
                >
                  Name{" "}
                  <span className="text-red-500">
                    *
                  </span>
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="
                    w-full
                    h-[52px]
                    rounded-[12px]
                    border
                    border-[#D6D6E7]
                    bg-white
                    px-4
                    text-[14px]
                    outline-none
                    focus:border-[#5E5BFF]
                  "
                />

                {errors?.name && (
                  <p className="text-red-500 text-[12px] mt-2">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  className="
                    block
                    text-[#1C1C28]
                    text-[13px]
                    font-medium
                    mb-2
                  "
                >
                  Email{" "}
                  <span className="text-red-500">
                    *
                  </span>
                </label>

                <p
                  className="
                    text-[#6E6E87]
                    text-[12px]
                    mb-3
                  "
                >
                  Primary contact if applying as a
                  team/company
                </p>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="
                    w-full
                    h-[52px]
                    rounded-[12px]
                    border
                    border-[#D6D6E7]
                    bg-white
                    px-4
                    text-[14px]
                    outline-none
                    focus:border-[#5E5BFF]
                  "
                />

                {errors.email && (
                  <p className="text-red-500 text-[12px] mt-2">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* About */}
              <div>
                <label
                  className="
                    block
                    text-[#1C1C28]
                    text-[13px]
                    font-medium
                    mb-2
                  "
                >
                  About You{" "}
                  <span className="text-red-500">
                    *
                  </span>
                </label>

                <p
                  className="
                    text-[#6E6E87]
                    text-[12px]
                    mb-3
                  "
                >
                  Tell us about yourself and/or your
                  team
                </p>

                <textarea
                  rows={5}
                  name="about"
                  value={formData.about}
                  onChange={handleChange}
                  className="
                    w-full
                    rounded-[12px]
                    border
                    border-[#D6D6E7]
                    bg-white
                    px-4
                    py-4
                    text-[14px]
                    outline-none
                    resize-none
                    focus:border-[#5E5BFF]
                  "
                />

                {errors.about && (
                  <p className="text-red-500 text-[12px] mt-2">
                    {errors.about}
                  </p>
                )}
              </div>

              {/* Links */}
              <div>
                <label
                  className="
                    block
                    text-[#1C1C28]
                    text-[13px]
                    font-medium
                    mb-2
                  "
                >
                  Additional Links
                </label>

                <p
                  className="
                    text-[#6E6E87]
                    text-[12px]
                    mb-3
                  "
                >
                  If helpful, please share any links
                  about you (e.g. Website, GitHub,
                  Twitter)
                </p>

                <textarea
                  rows={4}
                  name="links"
                  value={formData.links}
                  onChange={handleChange}
                  className="
                    w-full
                    rounded-[12px]
                    border
                    border-[#D6D6E7]
                    bg-white
                    px-4
                    py-4
                    text-[14px]
                    outline-none
                    resize-none
                    focus:border-[#5E5BFF]
                  "
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="
                  h-[52px]
                  px-7
                  rounded-[12px]
                  bg-[#5E5BFF]
                  text-white
                  text-[14px]
                  font-medium
                  inline-flex
                  items-center
                  gap-2
                  hover:bg-[#716EFF]
                  transition-all
                "
              >
                Submit Application

                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}