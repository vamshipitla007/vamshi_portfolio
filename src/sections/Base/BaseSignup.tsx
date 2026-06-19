import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import logo from "@/assets/base/Image3.png";
import illustration from "@/assets/base/Image2.png";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const BaseSignup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    terms: false,
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    terms: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    let valid = true;

    const newErrors = {
      fullName: "",
      email: "",
      username: "",
      password: "",
      terms: "",
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
      valid = false;
    } else if (formData.fullName.length < 3) {
      newErrors.fullName = "Minimum 3 characters";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
      valid = false;
    }

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
      valid = false;
    } else if (formData.username.length < 4) {
      newErrors.username = "Minimum 4 characters";
      valid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Minimum 6 characters";
      valid = false;
    }


    setErrors(newErrors);

    return valid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the validation errors");
      return;
    }

    sessionStorage.setItem("baseUserEmail", formData.email);

    sessionStorage.setItem("baseUserName", formData.fullName);

    toast.success("Account created successfully");

    setTimeout(() => {
      navigate("/Base/dashboard");
    }, 1000);
  };

  return (
    <div
      className="
      min-h-screen
      bg-[#E7E7E7]
      dark:bg-slate-950
      transition-colors
      duration-300
    "
    >
      <div
        className="
        min-h-screen
        flex
        flex-col
        lg:flex-row
        bg-[#F5F5F5]
        dark:bg-slate-900
        transition-colors
        duration-300
      "
      >
        {/* Left Section */}
        <section
          className="
          w-full
          lg:w-[40%]
          xl:w-[35%]
          2xl:w-[30%]
          bg-[#F8F8F8]
          dark:bg-gray-900
          flex
          justify-center
          items-center
          px-6
          sm:px-10
          lg:px-12
          py-10
          transition-colors
          duration-300
        "
        >
          <div className="w-full max-w-[420px]">
            {/* Logo */}
            <div className="flex justify-center">
              <img
                src={logo}
                alt="Logo"
                className="
                w-[72px]
                h-[72px]
                sm:w-[82px]
                sm:h-[82px]
              "
              />
            </div>

            {/* Heading */}
            <h1
              className="
              text-center
              text-[22px]
              sm:text-[26px]
              font-semibold
              text-gray-900
              dark:text-white
              mt-8
            "
            >
              Create Account
            </h1>

            <p
              className="
              text-center
              text-sm
              text-gray-500
              dark:text-gray-400
              mt-2
            "
            >
              Create your account and get started.
            </p>

            {/* Social Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                type="button"
                className="
                flex-1
                h-[48px]
                rounded-lg
                bg-[#EFEFEF]
                dark:bg-gray-800
                dark:text-white
                font-medium
                hover:bg-[#E4E4E4]
                dark:hover:bg-gray-700
                transition-all
              "
              >
                Google
              </button>

              <button
                type="button"
                className="
                flex-1
                h-[48px]
                rounded-lg
                bg-[#EFEFEF]
                dark:bg-gray-800
                dark:text-white
                font-medium
                hover:bg-[#E4E4E4]
                dark:hover:bg-gray-700
                transition-all
              "
              >
                Facebook
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center my-8">
              <div className="flex-1 h-[1px] bg-gray-300 dark:bg-gray-700" />

              <span
                className="
                mx-4
                text-sm
                text-gray-500
                dark:text-gray-400
              "
              >
                Or
              </span>

              <div className="flex-1 h-[1px] bg-gray-300 dark:bg-gray-700" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div>
                <label
                  className="
                  block
                  text-sm
                  font-medium
                  text-gray-800
                  dark:text-gray-200
                "
                >
                  Full Name
                </label>

                <input
                  name="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="
                  mt-2
                  w-full
                  h-[50px]
                  px-4
                  rounded-lg
                  bg-[#EFEFEF]
                  dark:bg-gray-800
                  text-gray-900
                  dark:text-white
                  border
                  border-transparent
                  focus:border-[#605BFF]
                  dark:focus:border-[#7C7AFF]
                  outline-none
                  transition-all
                "
                />
                {errors.fullName && (
                  <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  className="
                  block
                  text-sm
                  font-medium
                  text-gray-800
                  dark:text-gray-200
                "
                >
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="
                  mt-2
                  w-full
                  h-[50px]
                  px-4
                  rounded-lg
                  bg-[#EFEFEF]
                  dark:bg-gray-800
                  text-gray-900
                  dark:text-white
                  border
                  border-transparent
                  focus:border-[#605BFF]
                  dark:focus:border-[#7C7AFF]
                  outline-none
                "
                />

                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Username */}
              <div>
                <label
                  className="
                  block
                  text-sm
                  font-medium
                  text-gray-800
                  dark:text-gray-200
                "
                >
                  Username
                </label>

                <input
                  name="username"
                  placeholder="johnkevin123"
                  value={formData.username}
                  onChange={handleChange}
                  className="
                  mt-2
                  w-full
                  h-[50px]
                  px-4
                  rounded-lg
                  bg-[#EFEFEF]
                  dark:bg-gray-800
                  text-gray-900
                  dark:text-white
                  border
                  border-transparent
                  focus:border-[#605BFF]
                  dark:focus:border-[#7C7AFF]
                  outline-none
                "
                />

                {errors.username && (
                  <p className="mt-1 text-xs text-red-500">{errors.username}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <label
                  className="
                  block
                  text-sm
                  font-medium
                  text-gray-800
                  dark:text-gray-200
                "
                >
                  Password
                </label>

                <div className="relative mt-2">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                    className="
                    w-full
                    h-[50px]
                    px-4
                    pr-12
                    rounded-lg
                    bg-[#EFEFEF]
                    dark:bg-gray-800
                    text-gray-900
                    dark:text-white
                    border
                    border-transparent
                    focus:border-[#605BFF]
                    dark:focus:border-[#7C7AFF]
                    outline-none
                  "
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-gray-500
                    dark:text-gray-400
                  "
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-xs text-red-500">{errors.password}</p>
                )}
              </div>

              {/* Terms */}
              <label
                className="
                flex
                items-start
                gap-3
                text-sm
                text-gray-700
                dark:text-gray-300
              "
              >
                <input
                  type="checkbox"
                  name="terms"
                  className="
                  mt-1
                  accent-[#605BFF]
                "
                />

                <span>
                  By creating an account you agree to the{" "}
                  <span
                    className="
                    text-[#605BFF]
                    dark:text-[#7C7AFF]
                    underline
                  "
                  >
                    terms of use
                  </span>{" "}
                  and{" "}
                  <span
                    className="
                    text-[#605BFF]
                    dark:text-[#7C7AFF]
                    underline
                  "
                  >
                    privacy policy
                  </span>
                  .
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="
                w-full
                h-[52px]
                rounded-lg
                bg-[#605BFF]
                hover:bg-[#5148ff]
                dark:bg-[#7C7AFF]
                dark:hover:bg-[#6B63FF]
                text-white
                font-medium
                transition-all
              "
              >
                Create Account
              </button>

              {/* Login */}
              <p
                className="
                text-center
                text-sm
                text-gray-700
                dark:text-gray-300
              "
              >
                Already have an account?{" "}
                <span
                  onClick={() => navigate("/Base/Login")}
                  className="
                  cursor-pointer
                  font-semibold
                  text-[#605BFF]
                  dark:text-[#7C7AFF]
                "
                >
                  Log in
                </span>
              </p>
            </form>
          </div>
        </section>

        {/* Right Illustration */}
        <section
          className="
          hidden
          lg:flex
          flex-1
          items-center
          justify-center
          bg-[#F5F5F5]
          dark:bg-slate-900
          p-8
          xl:p-12
          2xl:p-16
          transition-colors
          duration-300
        "
        >
          <img
            src={illustration}
            alt="Sign Up Illustration"
            className="
            w-full
            max-w-[500px]
            xl:max-w-[650px]
            2xl:max-w-[800px]
            object-contain
          "
          />
        </section>
      </div>
    </div>
  );
};

export default BaseSignup;
