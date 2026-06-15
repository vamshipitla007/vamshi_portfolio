
import React from "react";

export default function BaseLogin() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      
      {/* Left Panel */}
      <div className="w-full md:w-1/3 bg-white flex flex-col justify-center px-10 py-12 shadow-sm">
        
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xl">⚡</span>
          </div>
          <h2 className="mt-3 text-lg font-semibold">Log in</h2>
        </div>

        {/* Social Buttons */}
        <div className="flex gap-3 mb-4">
          <button className="flex items-center justify-center w-full border rounded-lg py-2 text-sm hover:bg-gray-50">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="w-4 mr-2"
            />
            Google
          </button>

          <button className="flex items-center justify-center w-full border rounded-lg py-2 text-sm hover:bg-gray-50">
            <img
              src="https://www.svgrepo.com/show/475647/facebook-color.svg"
              alt="facebook"
              className="w-4 mr-2"
            />
            Facebook
          </button>
        </div>

        <div className="text-center text-gray-400 text-sm mb-4">Or</div>

        {/* Form */}
        <form className="space-y-4">
          
          <div>
            <label className="text-sm text-gray-600">Email Address</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Options */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-indigo-500" />
              Remember me
            </label>

            <a href="#" className="text-indigo-500 hover:underline">
              Reset Password?
            </a>
          </div>

          {/* Button */}
          <button className="w-full py-2 rounded-lg text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90">
            Log in
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have account yet?{" "}
          <a href="#" className="text-indigo-500 hover:underline">
            New Account
          </a>
        </p>
      </div>

      {/* Right Panel */}
      <div className="hidden md:flex w-2/3 items-center justify-center bg-gray-50">
        
        {/* Illustration Placeholder */}
        <div className="text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
            alt="illustration"
            className="w-80 mx-auto"
          />
          <p className="text-gray-400 mt-4">
            Your illustration goes here
          </p>
        </div>

      </div>
    </div>
  );
}