import React, { useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import Image1 from "@/assets/flower/Image1.png";
import { useNavigate } from "react-router-dom";

type FormState = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
};

type Errors = {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  terms?: string;
};

const FlowerRegisterScreen: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [errors, setErrors] = useState<Errors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    const newErrors: Errors = {};

    if (!form.name) newErrors.name = "Full name is required";

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Enter valid email";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Minimum 6 characters required";
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Confirm your password";
    } else if (form.confirmPassword !== form.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!form.terms) {
      newErrors.terms = "You must accept terms";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    await new Promise((res) => setTimeout(res, 1500));
    setLoading(false);
    navigate("/flower/dashboard");
    alert("Account Created Successfully 🚀");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-green-600">
      {/* LEFT ILLUSTRATION */}
      <div className="hidden md:flex w-1/2 items-center justify-center p-10">
        <img
          src={Image1}
          alt="Register Illustration"
          className="max-w-full h-auto"
        />
      </div>

      {/* RIGHT FORM */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-6">
        <div className="w-full max-w-md bg-gray-100 rounded-xl shadow-lg p-8">
          {/* Title */}
          <h2 className="text-2xl font-medium text-center text-gray-700 mb-6">
            Create Account
          </h2>

          {/* Google */}
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 text-sm text-gray-600 hover:bg-gray-50 transition">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              className="w-4 h-4"
            />
            Sign Up with Google
          </button>

          {/* Divider */}
          <div className="flex items-center my-5">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="px-3 text-xs text-gray-400">
              OR SIGN UP WITH EMAIL
            </span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="text-sm text-gray-600">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Regina Cooper"
                value={form.name}
                onChange={handleChange}
                className={`w-full mt-1 px-4 py-2 rounded-lg border ${
                  errors.name ? "border-red-400" : "border-gray-300"
                } focus:ring-2 focus:ring-green-500 outline-none`}
              />
              {errors.name && (
                <p className="text-xs text-red-500 mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                placeholder="cooper@example.com"
                value={form.email}
                onChange={handleChange}
                className={`w-full mt-1 px-4 py-2 rounded-lg border ${
                  errors.email ? "border-red-400" : "border-gray-300"
                } focus:ring-2 focus:ring-green-500 outline-none`}
              />
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">{errors.email}</p>
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
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.password ? "border-red-400" : "border-gray-300"
                  } focus:ring-2 focus:ring-green-500 outline-none`}
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
                <p className="text-xs text-red-500 mt-1">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="text-sm text-gray-600">Confirm Password</label>
              <div className="relative mt-1">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="••••••••"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.confirmPassword
                      ? "border-red-400"
                      : "border-gray-300"
                  } focus:ring-2 focus:ring-green-500 outline-none`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-2.5 text-gray-500"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* Terms */}
            <div>
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  name="terms"
                  checked={form.terms}
                  onChange={handleChange}
                  className="accent-green-600"
                />
                I accept{" "}
                <span className="text-green-600 cursor-pointer hover:underline">
                  Terms and Conditions
                </span>
              </label>
              {errors.terms && (
                <p className="text-xs text-red-500 mt-1">{errors.terms}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-green-700 transition disabled:opacity-70"
            >
              {loading && <Loader2 className="animate-spin" size={18} />}
              {loading ? "Creating..." : "Create Account"}
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/flower/login")}
              className="text-green-600 cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlowerRegisterScreen;
