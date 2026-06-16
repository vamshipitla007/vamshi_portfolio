import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import logo from "@/assets/base/Image3.png";
import illustration from "@/assets/base/Image2.png";
import { useNavigate } from "react-router-dom";

const BaseSignup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    console.log({
      fullName: formData.get("fullname"),
      email: formData.get("email"),
      username: formData.get("username"),
      password: formData.get("password"),
      agree: formData.get("terms"),
    });
    navigate("/Base/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#E7E7E7]">
      <div className="min-h-[92vh] bg-[#F5F5F5] flex flex-col lg:flex-row overflow-hidden">

        {/* Left Section */}
        <section
          className="
            w-full 
            lg:w-[30%]
            bg-[#F8F8F8]
            flex 
            justify-center 
            items-center
            px-7 
            py-10
          "
        >
          <div className="w-full max-w-[320px]">

            {/* Logo */}
            <div className="flex justify-center">
              <img
                src={logo}
                alt="Logo"
                className="w-[82px] h-[82px]"
              />
            </div>


            {/* Heading */}
            <h1
              className="
                text-center 
                text-[18px]
                font-medium
                text-[#050521]
                mt-8
              "
            >
              Sign Up
            </h1>


            {/* Social Buttons */}
            <div className="flex gap-4 mt-10">

              <button
                type="button"
                className="
                  flex-1
                  h-[44px]
                  bg-[#EFEFEF]
                  rounded-md
                  text-[15px]
                  font-medium
                  text-[#23233B]
                "
              >
                Google
              </button>


              <button
                type="button"
                className="
                  flex-1
                  h-[44px]
                  bg-[#EFEFEF]
                  rounded-md
                  text-[15px]
                  font-medium
                  text-[#23233B]
                "
              >
                Facebook
              </button>

            </div>


            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="h-px flex-1 bg-[#D9D9D9]" />

              <span className="mx-4 text-[15px] text-[#202040]">
                Or
              </span>

              <div className="h-px flex-1 bg-[#D9D9D9]" />
            </div>


            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Full Name */}
              <div>
                <label className="text-[15px] font-medium text-[#202040]">
                  Full Name
                </label>

                <input
                  name="fullname"
                  required
                  placeholder="Jiangyu"
                  className="
                    mt-3
                    w-full
                    h-[44px]
                    rounded-md
                    bg-[#EFEFEF]
                    px-4
                    text-[14px]
                    placeholder:text-[#767686]
                    outline-none
                  "
                />
              </div>


              {/* Email */}
              <div>
                <label className="text-[15px] font-medium text-[#202040]">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="example@gmail.com"
                  className="
                    mt-3
                    w-full
                    h-[44px]
                    rounded-md
                    bg-[#EFEFEF]
                    px-4
                    text-[14px]
                    placeholder:text-[#767686]
                    outline-none
                  "
                />
              </div>


              {/* Username */}
              <div>
                <label className="text-[15px] font-medium text-[#202040]">
                  Username
                </label>

                <input
                  name="username"
                  required
                  placeholder="johnkevine4362"
                  className="
                    mt-3
                    w-full
                    h-[44px]
                    rounded-md
                    bg-[#EFEFEF]
                    px-4
                    text-[14px]
                    placeholder:text-[#767686]
                    outline-none
                  "
                />
              </div>


              {/* Password */}
              <div>
                <label className="text-[15px] font-medium text-[#202040]">
                  Password
                </label>

                <div className="relative mt-3">

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    className="
                      w-full
                      h-[44px]
                      rounded-md
                      bg-[#EFEFEF]
                      px-4
                      pr-11
                      outline-none
                    "
                  />


                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="
                      absolute
                      right-3
                      top-1/2
                      -translate-y-1/2
                      text-[#7B7B8B]
                    "
                  >
                    {
                      showPassword ? (
                        <EyeOff size={18}/>
                      ) : (
                        <Eye size={18}/>
                      )
                    }
                  </button>

                </div>

              </div>


              {/* Terms */}
              <label className="flex items-start gap-2 text-[14px] text-[#202040]">

                <input
                  type="checkbox"
                  name="terms"
                  className="mt-1"
                />

                <span>
                  By creating an account you agree to the{" "}
                  <span className="text-[#605BFF] underline">
                    terms of use
                  </span>{" "}
                  and our{" "}
                  <span className="text-[#605BFF] underline">
                    privacy policy.
                  </span>
                </span>

              </label>


              {/* Button */}
              <button
                type="submit"
                className="
                  w-full
                  h-[46px]
                  rounded-md
                  bg-[#605BFF]
                  text-white
                  text-[15px]
                  font-medium
                  mt-2
                  hover:bg-[#534EFF]
                  transition
                "
              
              >
                Create account
              </button>


              {/* Login Link */}
              <p
                className="
                  text-center
                  text-[15px]
                  text-[#202040]
                  pt-3
                "
              >
                Already have an account?
                <span className="text-[#605BFF] cursor-pointer" onClick={() => navigate("/Base/signin")}>
                  {" "}Log in
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
          "
        >
          <img
            src={illustration}
            alt="Sign Up Illustration"
            className="
              w-[70%]
              max-w-[700px]
              object-contain
            "
          />
        </section>

      </div>
    </div>
  );
};

export default BaseSignup;