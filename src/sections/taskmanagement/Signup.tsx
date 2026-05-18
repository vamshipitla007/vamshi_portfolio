/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ChevronDown,
  BadgeCheck,
} from "lucide-react";
import CommonBottomSheet from "@/components/shared/CommonBottomSheet";
import TermsContent from "@/components/ui/TermsContent";
import EmailVerificationSheet from "@/components/ui/EmailVerificationSheet";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    companyId: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });
  const navigate = useNavigate();
  const [openTerms, setOpenTerms] = useState(false);
  const [errors, setErrors] = useState<any>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [openOtpSheet, setOpenOtpSheet] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev: any) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors: any = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid phone number";
    }

    if (!formData.companyId.trim()) {
      newErrors.companyId = "Company ID is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Minimum 6 characters";
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.agree) {
      newErrors.agree = "Accept terms & conditions";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      setOpenOtpSheet(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#181818] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#F7F7FB] min-h-screen sm:min-h-[920px] rounded-[32px] shadow-2xl px-5 py-8">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-[24px] bg-gradient-to-b from-[#7C3AED] to-[#5B21B6] flex items-center justify-center shadow-lg border border-[#8B5CF6]">
            <span className="text-white text-2xl font-black">M</span>
          </div>

          <h1 className="mt-6 text-2xl font-bold text-black">Work Mate</h1>

          <p className="mt-2 text-[#4B5563] text-sm text-center">
            Register Using Your Credentials
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          {/* Email */}
          <div>
            <label className="text-[#4B5563] text-sm font-medium">Email</label>

            <div className="mt-2 h-13 border border-[#B8C0D4] rounded-2xl bg-white flex items-center px-4">
              <Mail size={18} className="text-[#8B5CF6]" />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                className="flex-1 ml-4 bg-transparent outline-none text-sm text-[#111827] placeholder:text-[#9CA3AF]"
              />
            </div>

            {errors.email && (
              <p className="text-red-500 text-sm mt-2">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="text-[#4B5563] text-sm font-medium">
              Phone Number
            </label>

            <div className="mt-2 h-13 border border-[#B8C0D4] rounded-2xl bg-white flex items-center px-4">
              <div className="flex items-center gap-2 border-r border-[#D1D5DB] pr-2">
                <span className="text-sm font-medium text-[#9CA3AF]">INA</span>

                <ChevronDown size={20} className="text-[#8B5CF6]" />
              </div>

              <span className="ml-4 text-[#9CA3AF] text-sm">+62</span>

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="0000 0000 0000"
                className="flex-1 ml-3 bg-transparent outline-none text-sm text-[#111827] placeholder:text-[#9CA3AF]"
              />
            </div>

            {errors.phone && (
              <p className="text-red-500 text-sm mt-2">{errors.phone}</p>
            )}
          </div>

          {/* Company ID */}
          <div>
            <label className="text-[#4B5563] text-sm font-medium">
              Company ID
            </label>

            <div className="mt-2 h-13 border border-[#B8C0D4] rounded-2xl bg-white flex items-center px-4">
              <BadgeCheck size={18} className="text-[#8B5CF6]" />

              <input
                type="text"
                name="companyId"
                value={formData.companyId}
                onChange={handleChange}
                placeholder="Enter Company ID"
                className="flex-1 ml-4 bg-transparent outline-none text-sm text-[#111827] placeholder:text-[#9CA3AF]"
              />
            </div>

            {errors.companyId && (
              <p className="text-red-500 text-sm mt-2">{errors.companyId}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="text-[#4B5563] text-sm font-medium">
              Password
            </label>

            <div className="mt-2 h-13 border border-[#B8C0D4] rounded-2xl bg-white flex items-center px-4">
              <LockKeyhole size={18} className="text-[#8B5CF6]" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="My Password"
                className="flex-1 ml-4 bg-transparent outline-none text-sm text-[#111827] placeholder:text-[#9CA3AF]"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <Eye className="text-[#8B5CF6]" size={18} />
                ) : (
                  <EyeOff className="text-[#8B5CF6]" size={18} />
                )}
              </button>
            </div>

            {errors.password && (
              <p className="text-red-500 text-sm mt-2">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-[#4B5563] text-sm font-medium">
              Confirm Password
            </label>

            <div className="mt-2 h-13 border border-[#B8C0D4] rounded-2xl bg-white flex items-center px-4">
              <LockKeyhole size={18} className="text-[#8B5CF6]" />

              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm My Password"
                className="flex-1 ml-4 bg-transparent outline-none text-sm text-[#111827] placeholder:text-[#9CA3AF]"
              />

              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <Eye className="text-[#8B5CF6]" size={18} />
                ) : (
                  <EyeOff className="text-[#8B5CF6]" size={18} />
                )}
              </button>
            </div>

            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-2">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Checkbox */}
          <div>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="mt-1 w-5 h-5 accent-[#7C3AED]"
              />

              <p className="text-base leading-6 text-[#4B5563]">
                I agree with{" "}
                <button
                  type="button"
                  onClick={() => setOpenTerms(true)}
                  className="text-[#7C3AED] font-semibold"
                >
                  terms & conditions
                </button>{" "}
                and{" "}
                <button
                  type="button"
                  onClick={() => setOpenTerms(true)}
                  className="text-[#7C3AED] font-semibold"
                >
                  privacy policy
                </button>
              </p>
            </label>

            {errors.agree && (
              <p className="text-red-500 text-sm mt-2">{errors.agree}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full h-13 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] text-white text-2xl font-semibold shadow-xl transition active:scale-[0.98]"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-sm text-black">
            Already have an account?{" "}
            <span className="text-[#7C3AED] font-medium cursor-pointer">
              Sign in here
            </span>
          </p>
        </div>
      </div>
      {/* Bottom Sheet */}
      <CommonBottomSheet
        isOpen={openTerms}
        onClose={() => setOpenTerms(false)}
        footer={
          <div className="space-y-4">
            <button
              onClick={() => {
                setFormData((prev) => ({
                  ...prev,
                  agree: true,
                }));

                setOpenTerms(false);
              }}
              className="w-full h-14 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] text-white text-base font-semibold"
            >
              I Agree
            </button>

            <button
              onClick={() => setOpenTerms(false)}
              className="w-full h-14 rounded-full border border-[#7C3AED] text-[#7C3AED] text-base font-semibold"
            >
              Decline
            </button>
          </div>
        }
      >
        <TermsContent />
      </CommonBottomSheet>
      <EmailVerificationSheet
        isOpen={openOtpSheet}
        email={formData.email}
        onClose={() => setOpenOtpSheet(false)}
        onSubmit={(otp) => {
          setOpenOtpSheet(false);
          navigate("/taskmanagement/home");
          console.log("OTP Submitted:", otp);
        }}
        onResend={() => {
          console.log("Resend OTP");
        }}
      />
    </div>
  );
};

export default Signup;
