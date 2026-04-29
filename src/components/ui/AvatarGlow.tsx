// src/components/ui/AvatarGlow.tsx

import profile from "../../assets/profile.png";
import arrow from "../../assets/arrow.png";

export default function AvatarGlow() {
  return (
    <div className="relative flex items-center justify-center mr-10">
      
      {/* Glow background */}
      <div className="absolute w-[320px] h-[320px] rounded-full bg-purple-600 opacity-30 blur-3xl" />

      {/* Outer circle ring */}
      <div className="absolute w-[300px] h-[300px] rounded-full  border-[#7127BA]" />

      {/* Profile image */}
      <div className="relative w-[260px] h-[260px] rounded-full overflow-hidden flex items-center justify-center">
        <img
          src={profile}
          alt="profile"
        //   className="w-full h-full object-cover"
        />
      </div>

      {/* Arrow */}
      <img
        src={arrow}
        alt="arrow"
        className="absolute top-[-90px] left-[150px] w-[110px]"
      />

      {/* Text */}
      <p className="absolute top-[-70px] left-[250px] w-[170px] text-sm text-gray-300">
        Hello! I Am <span className="text-[#7127BA]">Vamshi Pitla</span>
      </p>
    </div>
  );
}