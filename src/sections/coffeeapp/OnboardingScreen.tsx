import CoffeeCup from "@/assets/coffeeapp/coffeecup.png";
import { useNavigate } from "react-router-dom";

const OnboardingScreen = () => {
  const navigation = useNavigate();

  const handleGetStarted = () => {
    navigation("/coffeeapp/home");
  };

  return (
    <div className="w-full h-screen max-w-md mx-auto bg-[#050505] flex flex-col">
      {/* Top Image (60%) */}
      <div className="relative h-[60%] w-full">
        <img
          src={CoffeeCup}
          alt="coffee"
          className="w-full h-full object-cover"
        />

        {/* Gradient (optional for smooth blend) */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505]" />
      </div>

      {/* Bottom Content (40%) */}
      <div className="flex flex-col justify-end flex-1 px-6 pb-10 text-center text-white">
        <h1 className="text-3xl font-bold leading-tight">
          Fall in Love with <br />
          Coffee in Blissful <br />
          Delight!
        </h1>

        <p className="mt-4 text-sm text-gray-300">
          Welcome to our cozy coffee corner, where every cup is a delightful for
          you.
        </p>

        <button 
          className="mt-6 w-full py-4 rounded-2xl font-semibold text-white bg-[#C67C4E]"
          onClick={handleGetStarted}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default OnboardingScreen;
