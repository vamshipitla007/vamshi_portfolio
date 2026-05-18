/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { UserRound } from "lucide-react";

interface WelcomeBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onSetupProfile: () => void;
  onExploreApp: () => void;
}

const WelcomeBottomSheet = ({
  isOpen,
  onClose,
  onSetupProfile,
  onExploreApp,
}: WelcomeBottomSheetProps) => {
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
        className={`relative w-full max-w-md bg-white rounded-t-[36px] px-6 pb-10 pt-24 transition-transform duration-300 ease-out ${
          visible
            ? "translate-y-0"
            : "translate-y-full"
        }`}
      >
        
        {/* Floating Icon */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2">
          
          <div className="relative w-28 h-28 rounded-[28px] bg-gradient-to-b from-[#8B5CF6] to-[#5B21B6] flex items-center justify-center shadow-[0_20px_40px_rgba(124,58,237,0.35)] border border-[#9F7AEA]">
            
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center">
              <UserRound
                size={30}
                className="text-[#7C3AED]"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="text-center">
          
          <h2 className="text-[2rem] sm:text-[2.3rem] leading-tight font-bold text-[#111827]">
            Welcome To Work Mate!
          </h2>

          <p className="mt-6 text-[#4B5563] text-base sm:text-lg leading-8 max-w-[520px] mx-auto">
            To enhance your user experience,
            please set up your profile first.
            This will help us tailor the app to
            your needs and ensure you get the
            most out of our features!
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-10 space-y-5">
          
          {/* Primary */}
          <button
            onClick={onSetupProfile}
            className="w-full h-16 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#5B21B6] text-white text-xl font-semibold shadow-[0_10px_30px_rgba(124,58,237,0.35)] active:scale-[0.98] transition-all"
          >
            Set Up My Profile
          </button>

          {/* Secondary */}
          <button
            onClick={onExploreApp}
            className="w-full h-16 rounded-full border-2 border-[#7C3AED] bg-white text-[#7C3AED] text-xl font-semibold active:scale-[0.98] transition-all"
          >
            Explore The App First
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBottomSheet;