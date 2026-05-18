/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useRef, useState } from "react";
import EmailIcon from "@/assets/taskmanagement/emaildot.png"

interface EmailVerificationSheetProps {
  isOpen: boolean;
  email: string;
  onClose: () => void;
  onSubmit: (otp: string) => void;
  onResend?: () => void;
}

const EmailVerificationSheet = ({
  isOpen,
  email,
  onClose,
  onSubmit,
  onResend,
}: EmailVerificationSheetProps) => {
  const [visible, setVisible] = useState(false);

  const [otp, setOtp] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const inputRefs = useRef<
    Array<HTMLInputElement | null>
  >([]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setVisible(true);
      }, 10);
    } else {
      setVisible(false);
    }
  }, [isOpen]);

  const handleChange = (
    value: string,
    index: number,
  ) => {
    if (!/^\d?$/.test(value)) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value;

    setOtp(updatedOtp);

    if (
      value &&
      index < otp.length - 1
    ) {
      inputRefs.current[index + 1]?.focus();
    }

    const finalOtp =
      updatedOtp.join("");

    if (finalOtp.length === 6) {
      console.log(finalOtp);
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0
    ) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    const finalOtp = otp.join("");

    if (finalOtp.length !== 6) {
      alert("Enter valid OTP");
      return;
    }

    onSubmit(finalOtp);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Bottom Sheet */}
      <div
        className={`relative w-full max-w-md bg-white rounded-t-[36px] px-6 pb-10 pt-16 transition-transform duration-300 ease-out ${
          visible
            ? "translate-y-0"
            : "translate-y-full"
        }`}
      >
        
        {/* Floating Icon */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2">
          
          <div className="relative w-28 h-28 rounded-[28px] bg-gradient-to-b from-[#8B5CF6] to-[#5B21B6] flex items-center justify-center shadow-[0_15px_40px_rgba(124,58,237,0.45)]">
            <img
          src={EmailIcon}
          alt="email"
          className="w-[80%] h-[80%] object-cover"
        />
            {/* <Mail
              size={42}
              className="text-white"
            />

            {/* Notification Dot */}
            {/* <div className="absolute top-5 right-5 w-4 h-4 rounded-full bg-[#FF5A5F] border-2 border-white" /> */} 
          </div>
        </div>

        {/* Title */}
        <div className="text-center">
          <h2 className="text-[2rem] leading-tight font-bold text-[#111827]">
            Email Verification Sent!
          </h2>

          <p className="mt-5 text-[#4B5563] text-base leading-7 max-w-[320px] mx-auto">
            A verification code will be sent to
            the email{" "}
            <span className="font-medium">
              {email}
            </span>{" "}
            for your account verification
            process.
          </p>
        </div>

        {/* OTP Inputs */}
        <div className="mt-10 flex items-center justify-center gap-2 sm:gap-3">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) =>
                handleChange(
                  e.target.value,
                  index,
                )
              }
              onKeyDown={(e) =>
                handleKeyDown(e, index)
              }
              className="w-12 h-14 sm:w-14 sm:h-16 rounded-2xl border border-[#D1D5DB] bg-[#FAFAFA] text-center text-3xl font-bold text-[#111827] outline-none focus:border-[#7C3AED] focus:ring-4 focus:ring-[#7C3AED]/10 transition-all"
            />
          ))}
        </div>

        {/* Resend */}
        <div className="mt-6 text-center">
          <p className="text-[#111827] text-base">
            Haven't received the verification
            code?{" "}

            <button
              onClick={onResend}
              className="text-[#7C3AED] font-semibold"
            >
              Resend it.
            </button>
          </p>
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          className="mt-10 w-full h-14 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] text-white text-xl font-semibold shadow-xl active:scale-[0.98] transition-all"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default EmailVerificationSheet;