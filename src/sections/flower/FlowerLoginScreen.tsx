import React, { useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import Image1 from "@/assets/flower/Image1.png";
import { useNavigate } from "react-router-dom";


type FormState = {
  email: string;
  password: string;
  remember: boolean;
};

type Errors = {
  email?: string;
  password?: string;
};

const FlowerLoginScreen: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormState>({
    email: "",
    password: "",
    remember: false,
  });

  const [errors, setErrors] = useState<Errors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const newErrors: Errors = {};

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Minimum 6 characters required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    await new Promise((res) => setTimeout(res, 1500));
    setLoading(false);
    navigate("/flower/dashboard");
    alert("Login Successful");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-green-600">
      
      {/* LEFT SIDE */}
      <div className="hidden md:flex w-1/2 items-center justify-center p-10">
        <img
          src={Image1}
          alt="Illustration"
          className="max-w-full h-auto"
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-6">
        <div className="w-full max-w-md bg-gray-100 rounded-xl shadow-lg p-8">

          {/* Title */}
          <h2 className="text-2xl text-center font-medium text-gray-700 mb-6">
            Login To Your Account
          </h2>

          {/* Google Button */}
          <button
            className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 text-sm text-gray-600 hover:bg-gray-50 transition"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              className="w-4 h-4"
            />
            Login with Google
          </button>

          {/* Divider */}
          <div className="flex items-center my-5">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="px-3 text-xs text-gray-400">
              OR LOGIN WITH EMAIL
            </span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Email */}
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                placeholder="cooper@example.com"
                value={form.email}
                onChange={handleChange}
                className={`w-full mt-1 px-4 py-2 rounded-lg border text-[#333] ${
                  errors.email ? "border-red-400" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-green-500`}
              />
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-gray-600">Password</label>
              <div className="relative mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  value={form.password}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border text-[#333] ${
                    errors.password ? "border-red-400" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-green-500`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-gray-500"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.password}
                </p>
              )}
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input
                  type="checkbox"
                  name="remember"
                  checked={form.remember}
                  onChange={handleChange}
                  className="accent-green-600"
                />
                Remember Me
              </label>

              <button
                type="button"
                className="text-green-600 hover:underline"
                onClick={() => navigate("/flower/reset-password")}
              >
                Forgot Password?
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-green-700 transition disabled:opacity-70"
            >
              {loading && <Loader2 className="animate-spin" size={18} />}
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Don't have an account?{" "}
            <span onClick={() => navigate("/flower/register")} className="text-green-600 cursor-pointer hover:underline">
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlowerLoginScreen;