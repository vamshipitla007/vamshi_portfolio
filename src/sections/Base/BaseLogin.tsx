import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import logo from "@/assets/base/Image3.png";
import illustration from "@/assets/base/Image1.png";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const BaseLogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {
      email: "",
      password: "",
    };

    let isValid = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(newErrors);

    return isValid;
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the validation errors");
      return;
    }

    sessionStorage.setItem("baseUserEmail", formData.email);

    toast.success("Login successful");

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
        relative
      "
    >
      {/* Theme Toggle */}
      {/* <div className="absolute top-5 right-5 z-20">
        <button
          onClick={toggleTheme}
          className="
            h-11
            w-11
            rounded-xl
            bg-white
            dark:bg-gray-800
            shadow-md
            flex
            items-center
            justify-center
            text-gray-700
            dark:text-white
            transition-all
          "
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div> */}

      <div
        className="
          min-h-screen
          bg-[#F5F5F5]
          dark:bg-slate-900
          overflow-hidden
          flex
          flex-col
          lg:flex-row
          transition-colors
          duration-300
        "
      >
        {/* Left Section */}
        <div
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
                alt="logo"
                className="
                  w-[70px]
                  h-[70px]
                  sm:w-[80px]
                  sm:h-[80px]
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
              Log in
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
              Welcome back! Please login to continue.
            </p>

            {/* Social Login */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                type="button"
                className="
                  flex-1
                  h-[48px]
                  rounded-lg
                  bg-[#EFEFEF]
                  dark:bg-gray-800
                  text-gray-800
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
                  text-gray-800
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

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-5">
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
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
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
                    placeholder:text-gray-400
                  "
                />

                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email}</p>
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
                    name="password"
                    type={showPassword ? "text" : "password"}
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
                      transition-all
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

              {/* Remember Me */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  text-sm
                "
              >
                <label
                  className="
                    flex
                    items-center
                    gap-2
                    text-gray-700
                    dark:text-gray-300
                  "
                >
                  <input type="checkbox" className="accent-[#605BFF]" />
                  Remember me
                </label>

                <button
                  type="button"
                  className="
                    text-[#605BFF]
                    dark:text-[#7C7AFF]
                    hover:underline
                  "
                >
                  Reset Password?
                </button>
              </div>

              {/* Login Button */}
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
                Log in
              </button>

              {/* Register */}
              <p
                className="
                  text-center
                  text-sm
                  text-gray-700
                  dark:text-gray-300
                "
              >
                Don’t have an account?{" "}
                <span
                  onClick={() => navigate("/Base/signup")}
                  className="
                    text-[#605BFF]
                    dark:text-[#7C7AFF]
                    font-semibold
                    cursor-pointer
                  "
                >
                  Create Account
                </span>
              </p>
            </form>
          </div>
        </div>

        {/* Right Section */}
        <div
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
            alt="Login Illustration"
            className="
              w-full
              max-w-[500px]
              xl:max-w-[650px]
              2xl:max-w-[800px]
              object-contain
            "
          />
        </div>
      </div>
    </div>
  );
};

export default BaseLogin;
