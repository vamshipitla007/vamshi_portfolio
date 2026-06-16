import { useState } from "react";
import {
  Eye,
  EyeOff,
} from "lucide-react";

import logo from "@/assets/base/Image3.png";
import illustration from "@/assets/base/Image1.png";
import { useNavigate } from "react-router-dom";

const BaseLogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    navigate("/Base/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#E7E7E7]">
      <div
        className="
        bg-[#F5F5F5]
        min-h-[92vh]
        rounded-sm
        flex 
        flex-col 
        lg:flex-row
        overflow-hidden
        "
      >
        {/* Left Section */}
        <div
          className="
          w-full 
          lg:w-[30%]
          bg-[#F8F8F8]
          flex 
          justify-center
          items-center
          px-8
          py-12
          "
        >
          <div className="w-full max-w-[320px]">
            
            {/* Logo */}
            <div className="flex justify-center">
              <img
                src={logo}
                alt="logo"
                className="w-[80px] h-[80px]"
              />
            </div>


            <h1 className="text-center text-[18px] font-medium text-black mt-8">
              Log in
            </h1>


            {/* Social */}
            <div className="flex gap-4 mt-8">
              
              <button
                className="
                flex-1
                h-[42px]
                rounded-md
                bg-[#EFEFEF]
                text-[15px]
                text-[#333333]
                font-medium
                "
              >
                Google
              </button>


              <button
                className="
                flex-1
                h-[42px]
                rounded-md
                bg-[#EFEFEF]
                text-[15px]
                text-[#333333]
                font-medium
                "
              >
                Facebook
              </button>

            </div>


            {/* Divider */}
            <div className="flex items-center my-7">
              <div className="flex-1 h-[1px] bg-[#D9D9D9]" />
              <span className="mx-4 text-[#505050] text-[15px]">
                Or
              </span>
              <div className="flex-1 h-[1px] bg-[#D9D9D9]" />
            </div>


            <form
              onSubmit={handleLogin}
              className="space-y-5"
            >
              
              {/* Email */}
              <div>
                <label
                  className="
                  text-[15px]
                  text-[#1A1A1A]
                  font-medium
                  "
                >
                  Email Address
                </label>

                <input
                  name="email"
                  type="email"
                  placeholder="example@gmail.com"
                  required
                  className="
                  mt-3
                  w-full
                  h-[46px]
                  px-4
                  rounded-md
                  bg-[#EFEFEF]
                  text-[14px]
                  outline-none
                  placeholder:text-[#8A8A8A]
                  "
                />
              </div>


              {/* Password */}
              <div>
                <label
                  className="text-[15px] font-medium text-[#333333]"
                >
                  Password
                </label>


                <div className="relative mt-3">
                  
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="
                    w-full
                    h-[46px]
                    px-4
                    pr-12
                    rounded-md
                    bg-[#EFEFEF]
                    text-[#333333]
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
                    text-gray-500
                    "
                  >
                    {showPassword ? (
                      <EyeOff size={18}/>
                    ) : (
                      <Eye size={18}/>
                    )}
                  </button>

                </div>

              </div>


              {/* Remember / Reset */}
              <div className="flex justify-between items-center text-[14px]">

                <label className="flex items-center gap-2 text-[#333]">
                  <input
                    type="checkbox"
                    name="remember"
                  />
                  Remember me
                </label>


                <button
                  type="button"
                  className="text-[#6460FF]"
                >
                  Reset Password?
                </button>

              </div>


              {/* Login */}
              <button
                className="
                w-full
                h-[46px]
                rounded-md
                bg-[#605BFF]
                text-white
                text-[16px]
                font-medium
                mt-3
                hover:bg-[#5048ff]
                transition
                "
                onClick={handleLogin}
              >
                Log in
              </button>


              {/* Register */}
              <p
                className="
                text-center
                text-[15px]
                text-[#222]
                pt-4
                "
              >
                Don’t have account yet?{" "}
                <span className="text-[#605BFF] cursor-pointer" onClick={() => navigate("/Base/signup")}>
                  New Account
                </span>
              </p>


            </form>
          </div>
        </div>



        {/* Right Illustration */}
        <div
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
            alt="Login Illustration"
            className="
            w-[65%]
            max-w-[650px]
            object-contain
            "
          />
        </div>

      </div>
    </div>
  );
};

export default BaseLogin;