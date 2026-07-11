import React, { useState } from "react";
import { Eye, EyeOff, Loader2, Lock } from "lucide-react";
import Image1 from "@/assets/flower/Image1.png";
import { useNavigate } from "react-router-dom";

type FormState = {
  email: string;
  password: string;
  confirmPassword: string;
};

type Errors = {
  email?: string;
  password?: string;
  confirmPassword?: string;
};

const FlowerResetPasswordScreen: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormState>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    const newErrors: Errors = {};

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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    await new Promise((res) => setTimeout(res, 1500));
    setLoading(false);
    navigate("/flower/login");
    alert("Password Reset Successful 🔐");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-green-600">
      {/* LEFT SIDE */}
      <div className="hidden md:flex w-1/2 items-center justify-center p-10">
        <img src={Image1} alt="Illustration" className="max-w-full h-auto" />
      </div>

      {/* RIGHT SIDE */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-6">
        <div className="w-full max-w-md bg-gray-100 rounded-xl shadow-lg p-8">
          {/* Icon Circle */}
          <div className="flex justify-center mb-6">
            <div className="w-28 h-28 rounded-full bg-gray-200 flex items-center justify-center">
              <Lock size={40} className="text-yellow-500" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-medium text-center text-gray-700 mb-6">
            Reset Your Password
          </h2>

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

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-green-700 transition disabled:opacity-70"
            >
              {loading && <Loader2 className="animate-spin" size={18} />}
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Go back to{" "}
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

export default FlowerResetPasswordScreen;
