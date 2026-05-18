/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { UserRound } from "lucide-react";

interface ProfileBottomSheetProps {
  isOpen: boolean;
  type: "confirm" | "success";
  onClose: () => void;
  onConfirm?: () => void;
  onVisitProfile?: () => void;
}

const ProfileBottomSheet = ({
  isOpen,
  type,
  onClose,
  onConfirm,
  onVisitProfile,
}: ProfileBottomSheetProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setVisible(true);
      }, 10);
    } else {
      setVisible(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const isSuccess = type === "success";

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
        className={`relative w-full max-w-md bg-white rounded-t-[34px] px-6 pt-20 pb-8 transition-transform duration-300 ease-out ${
          visible
            ? "translate-y-0"
            : "translate-y-full"
        }`}
      >
        
        {/* Floating Icon */}
        <div className="absolute -top-14 left-1/2 -translate-x-1/2">
          
          <div className="w-24 h-24 rounded-[24px] bg-gradient-to-b from-[#8B5CF6] to-[#5B21B6] flex items-center justify-center shadow-[0_15px_35px_rgba(124,58,237,0.35)] border border-[#A78BFA]">
            
            <UserRound
              size={34}
              className="text-white"
            />
          </div>
        </div>

        {/* Content */}
        <div className="text-center">
          
          <h2 className="text-[1.9rem] font-bold text-[#111827]">
            {isSuccess
              ? "Profile Updated!"
              : "Update Profile"}
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#4B5563] max-w-[320px] mx-auto">
            {isSuccess
              ? "Your profile has been successfully updated. We're excited to see you take this step!"
              : "Are you sure you want to update your profile? This will help us improve your experience and provide personalized features."}
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-10 space-y-4">
          
          {/* Primary Button */}
          <button
            onClick={
              isSuccess
                ? onVisitProfile
                : onConfirm
            }
            className="w-full h-14 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#5B21B6] text-white text-base font-semibold shadow-[0_10px_25px_rgba(124,58,237,0.3)] active:scale-[0.98] transition-all"
          >
            {isSuccess
              ? "Visit My Profile"
              : "Yes, Update Profile"}
          </button>

          {/* Secondary Button */}
          {!isSuccess && (
            <button
              onClick={onClose}
              className="w-full h-14 rounded-full border-2 border-[#7C3AED] bg-white text-[#7C3AED] text-base font-semibold active:scale-[0.98] transition-all"
            >
              No, Let me check
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileBottomSheet;