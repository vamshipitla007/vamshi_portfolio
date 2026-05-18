import chartImage from "@/assets/taskmanagement/onboarding1.png";
import topCardImage from "@/assets/taskmanagement/onboarding2.png";
import { useNavigate } from "react-router-dom";

const OnboardingScreen = () => {
    const navigate = useNavigate();

     const handleSignIn = () => {
        navigate("/taskmanagement/Signup");
    };
  return (
    <div className="min-h-screen bg-[#8B5CF6] flex items-center justify-center">
      <div className="relative w-full max-w-sm overflow-hidden bg-white rounded-[32px] min-h-screen sm:min-h-[820px]">
        
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#8B5CF6] via-[#C4B5FD]/40 to-white" />

        {/* Main Content */}
        <div className="relative z-10 flex flex-col min-h-screen sm:min-h-[820px]">
          
          {/* Top Illustration Area */}
          <div className="relative flex items-center justify-center pt-12 pb-24">

            {/* Back Card */}
            <div className="absolute top-8 left-1/2 -translate-x-[58%] w-[72%] max-w-[280px] rotate-[-12deg] z-10">
              <img
                src={topCardImage}
                alt="chart"
                className="w-full object-contain drop-shadow-2xl"
              />
            </div>

            {/* Front Card */}
            <div className="relative mt-20 w-[82%] max-w-[320px] rotate-[-8deg] z-20">
              <img
                src={chartImage}
                alt="task"
                className="w-full object-contain drop-shadow-2xl"
              />
            </div>

          </div>

          {/* Text Content */}
          <div className="flex-1 flex flex-col justify-end px-6 pb-10">
            
            <div className="text-center">
              <h1 className="text-[2rem] sm:text-[2.4rem] leading-tight font-bold text-[#111827]">
                Navigate Your Work Journey Efficient & Easy
              </h1>

              <p className="mt-4 text-[#6B7280] text-base leading-7 max-w-[320px] mx-auto">
                Increase your work management & career development radically
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4">
              
              <button className="h-14 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] text-white text-lg font-semibold shadow-lg transition active:scale-[0.98]">
                Sign In
              </button>

              <button 
                onClick={handleSignIn}
                className="h-14 rounded-full border border-[#7C3AED] bg-white text-[#7C3AED] text-lg font-semibold transition active:scale-[0.98]"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingScreen;