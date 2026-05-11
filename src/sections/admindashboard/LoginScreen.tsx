/* eslint-disable @typescript-eslint/no-explicit-any */
// App.tsx

import { useState } from "react";
import { Check, Eye, EyeOff } from "lucide-react";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

type AuthMode = "login" | "signup";

export default function LoginScreen() {
  const [mode, setMode] = useState<AuthMode>("login");

  return (
    <div className="min-h-screen bg-[#4f81f7] p-4">
      <Toaster position="top-right" />

      <div className="relative overflow-hidden rounded-sm bg-[#4f81f7] min-h-[90vh] flex items-center justify-center border border-[#3f72ea]">
        {/* Background blobs */}
        <div className="absolute left-[-100px] top-[220px] w-[420px] h-[420px] rounded-[120px] bg-[#6692fa]/30 rotate-12" />

        <div className="absolute left-[25%] top-[-100px] w-[320px] h-[1200px] rounded-full bg-[#5d8bf8]/30 rotate-[-10deg]" />

        <div className="absolute right-[5%] top-[-80px] w-[320px] h-[420px] rounded-[120px] bg-[#5d8bf8]/30 rotate-[-12deg]" />

        <div className="absolute right-[5%] bottom-[-40px] w-[300px] h-[420px] rounded-[120px] bg-[#5d8bf8]/30 rotate-12" />

        {mode === "login" ? (
          <LoginCard onSwitch={() => setMode("signup")} />
        ) : (
          <SignupCard onSwitch={() => setMode("login")} />
        )}
      </div>
    </div>
  );
}

function LoginCard({ onSwitch }: { onSwitch: () => void }) {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [errors, setErrors] = useState<any>({});

  const validate = () => {
    const newErrors: any = {};

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!form.password.trim()) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Minimum 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Please fix the form errors");
      return;
    }

    toast.success("Login successful");
    setTimeout(() => {
      navigate("/admin-dashboard/dashboard");
    }, 1000);
  };

  return (
    <div className="relative z-10 w-full max-w-[590px] bg-[#f6f6f6] rounded-[28px] px-6 md:px-14 py-10 md:py-14 shadow-sm">
      <div className="text-center">
        <h1 className="text-[28px] md:text-[34px] font-bold text-[#1e1e1e]">
          Login to Account
        </h1>

        <p className="text-[#5d5d5d] mt-3 text-[15px] md:text-[18px]">
          Please enter your email and password to continue
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-10 space-y-7">
        <div>
          <label className="block text-[#444] text-[17px] font-medium mb-3">
            Email address:
          </label>

          <input
            type="email"
            placeholder="esteban_schiller@gmail.com"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
            className={`w-full h-[62px] rounded-xl border text-[#000000] bg-[#eef1f7] px-5 text-[16px] outline-none transition ${
              errors.email ? "border-red-500" : "border-[#d6d9df]"
            }`}
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-2">{errors.email}</p>
          )}
        </div>

        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-[#444] text-[17px] font-medium">
              Password
            </label>

            <button type="button" className="text-[#6c6c6c] text-[16px]">
              Forget Password?
            </button>
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={(e) =>
                setForm({
                  ...form,
                  password: e.target.value,
                })
              }
              className={`w-full h-[62px] rounded-xl border text-[#000000] bg-[#eef1f7] px-5 pr-14 text-[16px] outline-none transition ${
                errors.password ? "border-red-500" : "border-[#d6d9df]"
              }`}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6f6f6f]"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {errors.password && (
            <p className="text-red-500 text-sm mt-2">{errors.password}</p>
          )}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() =>
              setForm({
                ...form,
                remember: !form.remember,
              })
            }
            className={`w-6 h-6 rounded-md border flex items-center justify-center ${
              form.remember
                ? "bg-white border-[#c9ccd3]"
                : "bg-white border-[#c9ccd3]"
            }`}
          >
            {form.remember && <Check size={15} className="text-[#7b7b7b]" />}
          </button>

          <span className="text-[#666] text-[17px]">Remember Password</span>
        </div>

        <button
          type="submit"
          className="w-full h-[64px] rounded-xl bg-[#5b84f6] text-white font-semibold text-[24px] hover:opacity-90 transition"
        >
          Sign In
        </button>

        <div className="text-center text-[#5f5f5f] text-[17px]">
          Don’t have an account?{" "}
          <button
            type="button"
            onClick={onSwitch}
            className="text-[#4f81f7] font-semibold underline"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}

function SignupCard({ onSwitch }: { onSwitch: () => void }) {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    terms: false,
  });

  const [errors, setErrors] = useState<any>({});

  const validate = () => {
    const newErrors: any = {};

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!form.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!form.password.trim()) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Minimum 6 characters";
    }

    if (!form.terms) {
      newErrors.terms = "Accept terms and conditions";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Please fix the form errors");
      return;
    }

    toast.success("Account created successfully");
    setTimeout(() => {
      navigate("/admin-dashboard/dashboard");
    }, 1000);
  };

  return (
    <div className="relative z-10 w-full max-w-[520px] bg-[#f6f6f6] rounded-[28px] px-6 md:px-10 py-10 shadow-sm">
      <div className="text-center">
        <h1 className="text-[24px] md:text-[34px] font-bold text-[#1e1e1e]">
          Create an Account
        </h1>

        <p className="text-[#5d5d5d] mt-3 text-[14px] md:text-[16px]">
          Create a account to continue
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div>
          <label className="block text-[#444] text-[15px] font-medium mb-3">
            Email address:
          </label>

          <input
            type="email"
            placeholder="esteban_schiller@gmail.com"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
            className={`w-full h-[54px] rounded-lg border text-[#000000] bg-[#eef1f7] px-4 text-[15px] outline-none ${
              errors.email ? "border-red-500" : "border-[#d6d9df]"
            }`}
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-2">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-[#444] text-[15px] font-medium mb-3">
            Username
          </label>

          <input
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={(e) =>
              setForm({
                ...form,
                username: e.target.value,
              })
            }
            className={`w-full h-[54px] rounded-lg border text-[#000000] bg-[#eef1f7] px-4 text-[15px] outline-none ${
              errors.username ? "border-red-500" : "border-[#d6d9df]"
            }`}
          />

          {errors.username && (
            <p className="text-red-500 text-sm mt-2">{errors.username}</p>
          )}
        </div>

        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-[#444] text-[15px] font-medium">
              Password
            </label>

            <button type="button" className="text-[#6c6c6c] text-[15px]">
              Forget Password?
            </button>
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={(e) =>
                setForm({
                  ...form,
                  password: e.target.value,
                })
              }
              className={`w-full h-[54px] rounded-lg border text-[#000000] bg-[#eef1f7] px-4 pr-12 text-[15px] outline-none ${
                errors.password ? "border-red-500" : "border-[#d6d9df]"
              }`}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6f6f6f]"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {errors.password && (
            <p className="text-red-500 text-sm mt-2">{errors.password}</p>
          )}
        </div>

        <div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() =>
                setForm({
                  ...form,
                  terms: !form.terms,
                })
              }
              className="w-5 h-5 rounded-md border border-[#c9ccd3] bg-white flex items-center justify-center"
            >
              {form.terms && <Check size={13} className="text-[#7b7b7b]" />}
            </button>

            <span className="text-[#555] text-[15px]">
              I accept terms and conditions
            </span>
          </div>

          {errors.terms && (
            <p className="text-red-500 text-sm mt-2">{errors.terms}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full h-[56px] rounded-lg bg-[#5b84f6] text-white font-semibold text-[24px] hover:opacity-90 transition"
        >
          Sign Up
        </button>

        <div className="text-center text-[#5f5f5f] text-[15px]">
          Already have an account?{" "}
          <button
            type="button"
            onClick={onSwitch}
            className="text-[#4f81f7] font-semibold underline"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
