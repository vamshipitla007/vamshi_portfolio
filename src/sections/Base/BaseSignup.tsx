
import React from "react";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex bg-[#f5f6fa]">
      
      {/* LEFT PANEL */}
      <div className="w-full md:w-[380px] bg-white flex flex-col justify-center px-8 py-10 shadow-sm">
        
        {/* Logo + Title */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-14 h-14 rounded-full bg-indigo-500 flex items-center justify-center">
            <span className="text-white text-xl">⚡</span>
          </div>
          <h2 className="mt-3 text-lg font-semibold text-gray-700">
            Sign Up
          </h2>
        </div>

        {/* Social Login */}
        <div className="flex gap-3 mb-4">
          <button className="flex items-center justify-center w-full border rounded-lg py-2 text-sm bg-gray-50 hover:bg-gray-100">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="w-4 mr-2"
            />
            Google
          </button>

          <button className="flex items-center justify-center w-full border rounded-lg py-2 text-sm bg-gray-50 hover:bg-gray-100">
            <img
              src="https://www.svgrepo.com/show/475647/facebook-color.svg"
              alt="facebook"
              className="w-4 mr-2"
            />
            Facebook
          </button>
        </div>

        <div className="text-center text-gray-400 text-sm mb-4">Or</div>

        {/* FORM */}
        <form className="space-y-4">
          
          <div>
            <label className="text-xs text-gray-500">Full Name</label>
            <input
              type="text"
              placeholder="Jiangyu"
              className="w-full mt-1 px-3 py-2 text-sm border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="text-xs text-gray-500">Email Address</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full mt-1 px-3 py-2 text-sm border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="text-xs text-gray-500">Username</label>
            <input
              type="text"
              placeholder="johnkivena4362"
              className="w-full mt-1 px-3 py-2 text-sm border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="text-xs text-gray-500">Password</label>
            <div className="relative">
              <input
                type="password"
                placeholder="••••••••"
                className="w-full mt-1 px-3 py-2 text-sm border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <span className="absolute right-3 top-3 text-gray-400 cursor-pointer">
                👁️
              </span>
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-start gap-2 text-xs text-gray-500">
            <input type="checkbox" className="mt-1 accent-indigo-500" />
            <p>
              By creating an account you agree to the{" "}
              <span className="text-indigo-500 cursor-pointer">
                terms of use
              </span>{" "}
              and our{" "}
              <span className="text-indigo-500 cursor-pointer">
                privacy policy
              </span>
            </p>
          </div>

          {/* Button */}
          <button className="w-full py-2 rounded-md text-white text-sm bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90">
            Create account
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-5">
          Already have an account?{" "}
          <span className="text-indigo-500 cursor-pointer hover:underline">
            Log in
          </span>
        </p>
      </div>

      {/* RIGHT PANEL */}
      <div className="hidden md:flex flex-1 items-center justify-center bg-[#f5f6fa]">
        
        {/* Illustration */}
        <div className="max-w-xl">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4140/4140047.png"
            alt="illustration"
            className="w-full"
          />
        </div>

      </div>
    </div>
  );
}